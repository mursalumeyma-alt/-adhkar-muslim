import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";

const AudioPlayerContext = createContext(null);

// Status values per currently-tracked dhikr id:
// "idle" | "loading" | "playing" | "paused" | "error"
//
// `play(id, urls)` accepts either a single URL string or an array of URLs.
// An array is played back-to-back as one continuous track — used for
// passages spanning multiple ayahs (e.g. the four ayahs of Al-Ikhlas),
// so tapping "listen" once plays the whole surah/passage in order.
export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(null);
  const [currentId, setCurrentId] = useState(null);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0); // 0-1 within the current file
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackCount, setTrackCount] = useState(1);
  const queueRef = useRef([]);
  const indexRef = useRef(0);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none"; // don't fetch anything until the user asks to listen

    const onWaiting = () => setStatus("loading");
    const onCanPlay = () => setStatus((s) => (s === "loading" ? "playing" : s));
    const onPlaying = () => setStatus("playing");
    const onPause = () => setStatus((s) => (s === "error" ? s : "paused"));
    const onEnded = () => {
      const next = indexRef.current + 1;
      if (next < queueRef.current.length) {
        indexRef.current = next;
        setTrackIndex(next);
        setStatus("loading");
        audio.src = queueRef.current[next];
        audio.play().catch(() => setStatus("error"));
      } else {
        setStatus("idle");
        setCurrentId(null);
        setProgress(0);
        setTrackIndex(0);
      }
    };
    const onError = () => setStatus("error");
    const onTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };

    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    audio.addEventListener("timeupdate", onTimeUpdate);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  const play = useCallback(
    (id, urls) => {
      const audio = audioRef.current;
      if (!audio) return;
      const queue = Array.isArray(urls) ? urls : [urls];
      if (queue.length === 0) return;

      // Tapping the item that's already playing pauses it instead.
      if (currentId === id && status === "playing") {
        audio.pause();
        return;
      }
      // Resume a paused item without re-fetching.
      if (currentId === id && status === "paused") {
        audio.play().catch(() => setStatus("error"));
        return;
      }

      queueRef.current = queue;
      indexRef.current = 0;
      setTrackIndex(0);
      setTrackCount(queue.length);
      setCurrentId(id);
      setStatus("loading");
      setProgress(0);
      audio.src = queue[0];
      audio.play().catch(() => setStatus("error"));
    },
    [currentId, status]
  );

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    setStatus("idle");
    setCurrentId(null);
    setProgress(0);
    setTrackIndex(0);
  }, []);

  const retry = useCallback((id) => {
    const audio = audioRef.current;
    if (!audio || queueRef.current.length === 0) return;
    indexRef.current = 0;
    setTrackIndex(0);
    setStatus("loading");
    setCurrentId(id);
    audio.src = queueRef.current[0];
    audio.play().catch(() => setStatus("error"));
  }, []);

  const getStatus = useCallback(
    (id) => (currentId === id ? status : "idle"),
    [currentId, status]
  );

  return (
    <AudioPlayerContext.Provider
      value={{
        currentId,
        status,
        progress,
        trackIndex,
        trackCount,
        play,
        stop,
        retry,
        getStatus,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  return ctx;
}
