import { useMemo, useState, useEffect } from "react";
import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  Madhab,
  Qibla,
} from "adhan";
import tzlookup from "tz-lookup";
import { useLocalStorage } from "./useLocalStorage";


  // ...
const METHODS = {
  MuslimWorldLeague: { label: "Muslim World League", fn: CalculationMethod.MuslimWorldLeague },
  Egyptian: { label: "Egyptian General Authority", fn: CalculationMethod.Egyptian },
  Karachi: { label: "University of Islamic Sciences, Karachi", fn: CalculationMethod.Karachi },
  UmmAlQura: { label: "Umm al-Qura, Makkah", fn: CalculationMethod.UmmAlQura },
  Dubai: { label: "Dubai", fn: CalculationMethod.Dubai },
  MoonsightingCommittee: { label: "Moonsighting Committee", fn: CalculationMethod.MoonsightingCommittee },
  NorthAmerica: { label: "ISNA, North America", fn: CalculationMethod.NorthAmerica },
  Kuwait: { label: "Kuwait", fn: CalculationMethod.Kuwait },
  Qatar: { label: "Qatar", fn: CalculationMethod.Qatar },
  Singapore: { label: "Singapore", fn: CalculationMethod.Singapore },
  Turkey: { label: "Diyanet, Turkey", fn: CalculationMethod.Turkey },
};

export const methodOptions = Object.entries(METHODS).map(([id, v]) => ({
  id,
  label: v.label,
}));

const PRAYER_LABELS = {
  fajr: "Fajr",
  sunrise: "Sunrise",
  dhuhr: "Dhuhr",
  asr: "Asr",
  maghrib: "Maghrib",
  isha: "Isha",
};

// Reads today's calendar date (Y/M/D) as seen in a specific IANA
// timezone, regardless of what timezone the device's system clock is
// set to. This matters: the underlying calculation determines "today"
// from a Date object's local Y/M/D, so if we naively used `new Date()`
// as-is, a device with a system clock set to the wrong timezone (or a
// browser/OS timezone that doesn't match where its geolocation says
// the person actually is — common while travelling, or with a VPN)
// would compute prayer times for the wrong calendar day near midnight.
// Deriving Y/M/D from the coordinates' own timezone instead makes the
// result correct independent of the device's own clock settings.
function todayAt(ianaZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: ianaZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());

  const get = (type) =>
    Number(parts.find((p) => p.type === type)?.value);

  return new Date(
    get("year"),
    get("month") - 1,
    get("day")
  );
}

export function usePrayerTimes(coords) {
  const [methodId, setMethodId] = useLocalStorage(
    "adhkar-calc-method",
    "MuslimWorldLeague"
  );

  const [madhab, setMadhab] = useLocalStorage(
    "adhkar-madhab",
    "Shafi"
  );

  const [now, setNow] = useState(() => Date.now());

  // Re-derive "now" every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const result = useMemo(() => {
    if (!coords) return null;

    let timezone;

    try {
      timezone = tzlookup(coords.latitude, coords.longitude);
    } catch {
      timezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    const coordinates = new Coordinates(
      coords.latitude,
      coords.longitude
    );

    const params = (
      METHODS[methodId] || METHODS.MuslimWorldLeague
    ).fn();

    params.madhab =
      madhab === "Hanafi"
        ? Madhab.Hanafi
        : Madhab.Shafi;

    const date = todayAt(timezone);

    // DON'T CHANGE THIS TIMES CALCULATION
    const times = new PrayerTimes(
      coordinates,
      date,
      params
    );

    const qiblaDirection = Qibla(coordinates);

    const order = [
      "fajr",
      "sunrise",
      "dhuhr",
      "asr",
      "maghrib",
      "isha",
    ];

    const schedule = order.map((key) => ({
      key,
      label: PRAYER_LABELS[key],
      time: times[key],
    }));

    const current = times.currentPrayer();

    // Find the next prayer
    let nextKey = null;
    let nextTime = null;

    const nowMs = Date.now();

    for (const key of order) {
      const prayerTime = times.timeForPrayer(key);

      if (
        prayerTime &&
        prayerTime.getTime() > nowMs
      ) {
        nextKey = key;
        nextTime = prayerTime;
        break;
      }
    }

    // If all today's prayers have passed,
    // next prayer is tomorrow's Fajr.
    if (!nextKey) {
      nextKey = "fajr";

      const tomorrow = new Date(date);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const tomorrowTimes = new PrayerTimes(
        coordinates,
        tomorrow,
        params
      );

      nextTime = tomorrowTimes.fajr;
    }

    return {
      timezone,
      schedule,
      nextKey,
      nextLabel: PRAYER_LABELS[nextKey] || null,
      nextTime,
      currentKey: current,
      qiblaDirection,
    };
  }, [coords, methodId, madhab, now]);

  return {
    ...result,
    methodId,
    setMethodId,
    madhab,
    setMadhab,
  };
}
