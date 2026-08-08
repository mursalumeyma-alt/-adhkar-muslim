import { createContext, useContext, useCallback, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ProgressContext = createContext(null);

// Today's date as a plain local YYYY-MM-DD string, used to detect when
// a new day has begun (deliberately local, not UTC — a person's "today"
// is their own calendar day, not Greenwich's).
function localDateKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

// Stores { [dhikrId]: currentCount } in localStorage so progress on the
// repeat counters survives a page refresh, *and* automatically clears
// itself once a new day starts — these are daily adhkar (Morning,
// Evening, etc.), so a counter left "done" from yesterday shouldn't
// still show done today. A manual reset is still available for
// resetting something mid-day.
export function ProgressProvider({ children }) {
  const [progress, setProgress] = useLocalStorage("adhkar-progress", {});
  const [lastResetDate, setLastResetDate] = useLocalStorage(
    "adhkar-progress-date",
    null
  );
  const checkedRef = useRef(false);

  const checkForNewDay = useCallback(() => {
    const today = localDateKey();
    if (lastResetDate !== today) {
      setProgress({});
      setLastResetDate(today);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastResetDate]);

  // Check once on mount (covers the common case: opening the app on a
  // new day), then keep checking periodically and whenever the tab
  // regains focus, so a tab left open across midnight also resets
  // itself without needing a manual reload.
  useEffect(() => {
    if (!checkedRef.current) {
      checkedRef.current = true;
      checkForNewDay();
    }
    const interval = setInterval(checkForNewDay, 60000);
    const onVisible = () => {
      if (document.visibilityState === "visible") checkForNewDay();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [checkForNewDay]);

  const getCount = useCallback((id) => progress[id] || 0, [progress]);

  const increment = useCallback(
    (id, max) => {
      setProgress((prev) => {
        const current = prev[id] || 0;
        if (current >= max) return prev;
        return { ...prev, [id]: current + 1 };
      });
    },
    [setProgress]
  );

  const reset = useCallback(
    (id) => {
      setProgress((prev) => ({ ...prev, [id]: 0 }));
    },
    [setProgress]
  );

  const resetAll = useCallback(() => setProgress({}), [setProgress]);

  return (
    <ProgressContext.Provider
      value={{ getCount, increment, reset, resetAll }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
