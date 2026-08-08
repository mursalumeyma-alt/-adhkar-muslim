import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const VoiceContext = createContext(null);

// Discovers every Arabic voice the browser/OS exposes and lets the
// person pick which one to use for reading hadith duas aloud (there's
// no equivalent "reciter" archive for hadith text, so this is the only
// lever available for improving how it sounds — different voices vary
// a lot in clarity, and the best one available differs by device/OS).
export function VoiceProvider({ children }) {
  const [arabicVoices, setArabicVoices] = useState([]);
  const [supported, setSupported] = useState(false);
  const [preferredURI, setPreferredURI] = useLocalStorage("adhkar-voice-uri", null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setSupported(true);

    const loadVoices = () => {
      const all = window.speechSynthesis.getVoices();
      const arabic = all.filter((v) => v.lang?.toLowerCase().startsWith("ar"));
      setArabicVoices(arabic);
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, []);

  // Resolves the voice object to actually use: the person's explicit
  // pick if it's still available, otherwise the best guess (a
  // cloud/network voice over an on-device one, since those are
  // consistently clearer where both exist).
  const getActiveVoice = useCallback(() => {
    if (arabicVoices.length === 0) return null;
    if (preferredURI) {
      const chosen = arabicVoices.find((v) => v.voiceURI === preferredURI);
      if (chosen) return chosen;
    }
    const cloudVoice = arabicVoices.find((v) => v.localService === false);
    return cloudVoice || arabicVoices[0];
  }, [arabicVoices, preferredURI]);

  return (
    <VoiceContext.Provider
      value={{
        supported,
        arabicVoices,
        preferredURI,
        setPreferredURI,
        getActiveVoice,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoice() {
  const ctx = useContext(VoiceContext);
  if (!ctx) throw new Error("useVoice must be used within VoiceProvider");
  return ctx;
}
