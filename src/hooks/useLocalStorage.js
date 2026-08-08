import { useState, useEffect, useCallback } from "react";

/**
 * Syncs a piece of state with localStorage.
 * Falls back gracefully if localStorage is unavailable (e.g. private mode).
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore write errors (quota, private browsing, etc.)
    }
  }, [key, value]);

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      /* noop */
    }
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, remove];
}
