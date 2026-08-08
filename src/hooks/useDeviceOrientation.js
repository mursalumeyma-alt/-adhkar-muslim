import { useState, useCallback, useEffect, useRef } from "react";

// Reads the device's compass heading (0-360°, 0 = true/magnetic north)
// where the hardware and browser support it. iOS 13+ requires an
// explicit permission grant from a user gesture, so this exposes a
// `requestPermission` action rather than asking automatically.
export function useDeviceOrientation() {
  const [heading, setHeading] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | needs-permission | denied | active | unsupported
  const listenerRef = useRef(null);

  const handleOrientation = useCallback((event) => {
    // iOS Safari exposes a ready-to-use compass heading directly.
    if (typeof event.webkitCompassHeading === "number") {
      setHeading(event.webkitCompassHeading);
      return;
    }
    // Other browsers give `alpha` (rotation around z-axis). When the
    // event is flagged absolute (tied to true/magnetic north rather
    // than an arbitrary start point), 360-alpha approximates heading.
    if (event.absolute && typeof event.alpha === "number") {
      setHeading((360 - event.alpha) % 360);
    }
  }, []);

  const start = useCallback(() => {
    if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) {
      setStatus("unsupported");
      return;
    }
    const eventName =
      "ondeviceorientationabsolute" in window ? "deviceorientationabsolute" : "deviceorientation";
    window.addEventListener(eventName, handleOrientation);
    listenerRef.current = eventName;
    setStatus("active");
  }, [handleOrientation]);

  const requestPermission = useCallback(async () => {
    const DOE = window.DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission === "function") {
      try {
        const result = await DOE.requestPermission();
        if (result === "granted") {
          start();
        } else {
          setStatus("denied");
        }
      } catch {
        setStatus("denied");
      }
    } else {
      // No explicit permission API (most non-iOS browsers) — just start.
      start();
    }
  }, [start]);

  useEffect(() => {
    if (typeof window === "undefined" || !("DeviceOrientationEvent" in window)) {
      setStatus("unsupported");
      return;
    }
    const DOE = window.DeviceOrientationEvent;
    const needsExplicitPermission = typeof DOE.requestPermission === "function";
    setStatus(needsExplicitPermission ? "needs-permission" : "idle");
    if (!needsExplicitPermission) start();

    return () => {
      if (listenerRef.current) {
        window.removeEventListener(listenerRef.current, handleOrientation);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { heading, status, requestPermission };
}
