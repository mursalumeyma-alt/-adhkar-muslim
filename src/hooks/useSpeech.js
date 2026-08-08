import { useState, useCallback, useRef } from "react";
import { useVoice } from "../context/VoiceContext";

// Arabic clause/verse-end punctuation used in Qur'an/dua typography,
// plus standard sentence punctuation, so long duas break into natural
// short phrases instead of one huge utterance. Long single utterances
// are where Web Speech tends to cut off, mumble, or garble Arabic —
// breaking on these marks (the same pause points a reciter would use)
// fixes that and gives the reading a more natural rhythm.
const CLAUSE_BREAK = /(?<=[۝۞،؛.!؟:])\s+/;

function splitIntoClauses(text) {
  return text
    .split(CLAUSE_BREAK)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Plays Arabic dhikr text aloud using the browser's built-in
 * SpeechSynthesis engine. Used for hadith duas, which have no
 * equivalent "reciter" audio archive the way Qur'an verses do (see
 * AudioPlayerContext for those, which stream real recitation).
 */
export function useSpeech() {
  const { supported, getActiveVoice } = useVoice();
  const [speakingId, setSpeakingId] = useState(null);
  const queueRef = useRef([]);
  const indexRef = useRef(0);
  const cancelledRef = useRef(false);

  const speakNext = useCallback(
    (id) => {
      const queue = queueRef.current;
      const i = indexRef.current;
      if (cancelledRef.current || i >= queue.length) {
        setSpeakingId(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(queue[i]);
      utterance.lang = "ar-SA";
      utterance.rate = 0.82;
      utterance.pitch = 1;

      const voice = getActiveVoice();
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      }

      utterance.onend = () => {
        if (cancelledRef.current) return;
        indexRef.current += 1;
        // A brief pause between clauses reads more like natural
        // recitation than the engine's default back-to-back pacing.
        setTimeout(() => speakNext(id), 160);
      };
      utterance.onerror = () => setSpeakingId(null);

      window.speechSynthesis.speak(utterance);
    },
    [getActiveVoice]
  );

  const speak = useCallback(
    (id, text) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      cancelledRef.current = false;
      queueRef.current = splitIntoClauses(text);
      indexRef.current = 0;
      setSpeakingId(id);
      speakNext(id);
    },
    [supported, speakNext]
  );

  const stop = useCallback(() => {
    if (!supported) return;
    cancelledRef.current = true;
    window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, [supported]);

  return { speak, stop, speakingId, supported };
}
