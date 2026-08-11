import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";

const AudioPlayerContext = createContext(null);

const AUDIO_CACHE = "adhkar-audio";

/**
 * Cache one audio URL for offline playback.
 */
async function cacheAudio(url) {
  if (!url) return false;

  try {
    const cache = await caches.open(AUDIO_CACHE);

    const existing = await cache.match(url);

    if (existing) {
      return true;
    }

    const response = await fetch(url, {
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Audio request failed: ${response.status}`);
    }

    await cache.put(url, response.clone());

    return true;
  } catch (error) {
    console.warn("Could not cache audio:", url, error);
    return false;
  }
}

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(null);

  const [currentId, setCurrentId] = useState(null);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackCount, setTrackCount] = useState(1);

  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);

  const queueRef = useRef([]);
  const indexRef = useRef(0);

  /*
   * Create the audio element.
   */
  useEffect(() => {
    const audio = new Audio();

    audio.preload = "none";

    const onWaiting = () => {
      setStatus("loading");
    };

    const onCanPlay = () => {
      setStatus((currentStatus) =>
        currentStatus === "loading" ? "playing" : currentStatus
      );
    };

    const onPlaying = () => {
      setStatus("playing");
    };

    const onPause = () => {
      setStatus((currentStatus) =>
        currentStatus === "error" ? currentStatus : "paused"
      );
    };

    const onEnded = () => {
      const next = indexRef.current + 1;

      if (next < queueRef.current.length) {
        indexRef.current = next;

        setTrackIndex(next);
        setStatus("loading");

        const nextUrl = queueRef.current[next];

        audio.src = nextUrl;

        // Cache the next audio for offline use.
        cacheAudio(nextUrl);

        audio.play().catch(() => {
          setStatus("error");
        });
      } else {
        setStatus("idle");
        setCurrentId(null);
        setProgress(0);
        setTrackIndex(0);
      }
    };

    const onError = () => {
      setStatus("error");
    };

    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
      }
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

  /*
   * Play one audio or a queue of audio files.
   */
  const play = useCallback(
    (id, urls) => {
      const audio = audioRef.current;

      if (!audio) return;

      const queue = Array.isArray(urls) ? urls : [urls];

      const validQueue = queue.filter(Boolean);

      if (validQueue.length === 0) return;

      // Clicking the currently playing item pauses it.
      if (currentId === id && status === "playing") {
        audio.pause();
        return;
      }

      // Resume a paused item.
      if (currentId === id && status === "paused") {
        audio.play().catch(() => {
          setStatus("error");
        });

        return;
      }

      queueRef.current = validQueue;
      indexRef.current = 0;

      setTrackIndex(0);
      setTrackCount(validQueue.length);
      setCurrentId(id);
      setStatus("loading");
      setProgress(0);

      const firstUrl = validQueue[0];

      audio.src = firstUrl;

      // Cache first audio for offline use.
      cacheAudio(firstUrl);

      audio.play().catch(() => {
        setStatus("error");
      });
    },
    [currentId, status]
  );

  /*
   * Stop the current audio.
   */
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

  /*
   * Retry the current audio.
   */
  const retry = useCallback((id) => {
    const audio = audioRef.current;

    if (!audio || queueRef.current.length === 0) {
      return;
    }

    indexRef.current = 0;

    setTrackIndex(0);
    setStatus("loading");
    setCurrentId(id);

    const firstUrl = queueRef.current[0];

    audio.src = firstUrl;

    cacheAudio(firstUrl);

    audio.play().catch(() => {
      setStatus("error");
    });
  }, []);

  /*
   * Get status for a specific Dhikr.
   */
  const getStatus = useCallback(
    (id) => {
      return currentId === id ? status : "idle";
    },
    [currentId, status]
  );

  /*
   * Download all audio files for offline use.
   *
   * Example:
   *
   * const urls = adhkarData.flatMap(
   *   (item) => item.audioUrls || []
   * );
   *
   * await downloadAll(urls);
   */
  const downloadAll = useCallback(async (urls) => {
    const uniqueUrls = [
      ...new Set(
        (Array.isArray(urls) ? urls : [])
          .filter(Boolean)
      ),
    ];

    if (uniqueUrls.length === 0) {
      return {
        downloaded: 0,
        total: 0,
      };
    }

    setIsDownloading(true);
    setOfflineReady(false);
    setDownloadProgress(0);

    let downloaded = 0;

    for (const url of uniqueUrls) {
      const success = await cacheAudio(url);

      if (success) {
        downloaded += 1;
      }

      setDownloadProgress(
        Math.round((downloaded / uniqueUrls.length) * 100)
      );
    }

    setIsDownloading(false);

    if (downloaded === uniqueUrls.length) {
      setOfflineReady(true);
    }

    return {
      downloaded,
      total: uniqueUrls.length,
    };
  }, []);

  /*
   * Clear all cached audio.
   */
  const clearOfflineAudio = useCallback(async () => {
    try {
      const deleted = await caches.delete(AUDIO_CACHE);

      if (deleted) {
        setOfflineReady(false);
        setDownloadProgress(0);
      }

      return deleted;
    } catch (error) {
      console.warn("Could not clear offline audio:", error);
      return false;
    }
  }, []);

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

        // Offline audio
        downloadAll,
        clearOfflineAudio,
        downloadProgress,
        isDownloading,
        offlineReady,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);

  if (!ctx) {
    throw new Error(
      "useAudioPlayer must be used within AudioPlayerProvider"
    );
  }

  return ctx;
}