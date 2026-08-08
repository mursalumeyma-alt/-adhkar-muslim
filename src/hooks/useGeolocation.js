import { useState, useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// Shared across Qibla and Prayer Times: both need the person's
// coordinates. Requesting once and caching (with an explicit refresh
// action) avoids prompting for location permission twice.
export function useGeolocation() {
  const [coords, setCoords] = useLocalStorage("adhkar-coords", null);
  const [status, setStatus] = useState("idle"); // idle | loading | ready | denied | unsupported | error

  const request = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unsupported");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          fetchedAt: Date.now(),
        });
        setStatus("ready");
      },
      (err) => {
        setStatus(err.code === err.PERMISSION_DENIED ? "denied" : "error");
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 5 * 60 * 1000 }
    );
  }, [setCoords]);

  // If we already have cached coordinates from a previous visit, treat
  // that as ready immediately rather than re-prompting on every load.
  useEffect(() => {
    if (coords && status === "idle") setStatus("ready");
  }, [coords, status]);

  return { coords, status, request };
}
