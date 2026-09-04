import { createContext, useContext, useCallback, useState } from "react";

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  // Progress is temporary.
  // Refreshing the page resets all counters.
  const [progress, setProgress] = useState({});

  const getCount = useCallback(
    (id) => progress[id] || 0,
    [progress]
  );

  const increment = useCallback((id, max) => {
    setProgress((prev) => {
      const current = prev[id] || 0;

      if (current >= max) {
        return prev;
      }

      return {
        ...prev,
        [id]: current + 1,
      };
    });
  }, []);

  const decrement = useCallback((id) => {
    setProgress((prev) => {
      const current = prev[id] || 0;

      if (current <= 0) {
        return prev;
      }

      return {
        ...prev,
        [id]: current - 1,
      };
    });
  }, []);

  const reset = useCallback((id) => {
    setProgress((prev) => ({
      ...prev,
      [id]: 0,
    }));
  }, []);

  const resetAll = useCallback(() => {
    setProgress({});
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        getCount,
        increment,
        decrement,
        reset,
        resetAll,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);

  if (!ctx) {
    throw new Error("useProgress must be used within ProgressProvider");
  }

  return ctx;
}