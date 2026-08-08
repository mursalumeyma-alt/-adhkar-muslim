import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LocationGate from "../components/LocationGate";
import { usePrayerTimes, methodOptions } from "../hooks/usePrayerTimes";
import { useSpeech } from "../hooks/useSpeech";
import { adhanLines, adhanReference, adhanResponseDua, iqamaLines, iqamaReference } from "../data/adhanData";
import "./PrayerTimesPage.css";

const PRAYER_ICONS = {
  fajr: "🌅",
  sunrise: "☀️",
  dhuhr: "🌤️",
  asr: "🌇",
  maghrib: "🌆",
  isha: "🌙",
};

export default function PrayerTimesPage() {
  return (
    <div className="prayer-page">
      <div className="prayer-page__header scroll-fade">
        <div className="prayer-page__icon">🕌</div>
        <h1>Prayer Times &amp; Adhan</h1>
        <p className="prayer-page__desc">
          Today's prayer times for your location, and the call to prayer itself.
        </p>
        <Link to="/qibla" className="prayer-page__qibla-link">
          🧭 Find the Qibla direction →
        </Link>
      </div>

      <LocationGate title="Prayer Times">
        {(coords) => <PrayerSchedule coords={coords} />}
      </LocationGate>

      <AdhanSection />
    </div>
  );
}

function PrayerSchedule({ coords }) {
  const {
    schedule,
    nextKey,
    nextLabel,
    nextTime,
    currentKey,
    timezone,
    methodId,
    setMethodId,
    madhab,
    setMadhab,
  } = usePrayerTimes(coords);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    if (!nextTime) return;
    const tick = () => {
      const diff = nextTime.getTime() - Date.now();
      if (diff <= 0) {
        setCountdown("now");
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      setCountdown(h > 0 ? `${h}h ${m}m` : `${m}m`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [nextTime]);

  if (!schedule) return null;

  return (
    <div className="prayer-schedule scroll-fade">
      {nextLabel && (
        <div className="prayer-schedule__next">
          <span className="prayer-schedule__next-label">Next: {nextLabel}</span>
          <span className="prayer-schedule__next-countdown">in {countdown}</span>
        </div>
      )}

      <div className="prayer-schedule__list">
        {schedule.map((p) => (
          <div
            key={p.key}
            className={`prayer-schedule__row ${p.key === currentKey ? "prayer-schedule__row--current" : ""} ${
              p.key === nextKey ? "prayer-schedule__row--next" : ""
            }`}
          >
            <span className="prayer-schedule__row-icon">{PRAYER_ICONS[p.key]}</span>
            <span className="prayer-schedule__row-name">{p.label}</span>
            <span className="prayer-schedule__row-time">
              {p.time.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                timeZone: timezone,
              })}
            </span>
          </div>
        ))}
      </div>

      {timezone && (
        <p className="prayer-schedule__tz">
          Times shown for {timezone.replace("_", " ")} — your location's timezone, not
          necessarily your device's.
        </p>
      )}

      <details className="prayer-schedule__settings">
        <summary>Calculation settings</summary>
        <label className="prayer-schedule__field">
          <span>Method</span>
          <select value={methodId} onChange={(e) => setMethodId(e.target.value)}>
            {methodOptions.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </label>
        <label className="prayer-schedule__field">
          <span>Asr calculation (madhab)</span>
          <select value={madhab} onChange={(e) => setMadhab(e.target.value)}>
            <option value="Shafi">Shafi'i / Maliki / Hanbali</option>
            <option value="Hanafi">Hanafi</option>
          </select>
        </label>
        <p className="prayer-schedule__note">
          If these don't match your local mosque, it's almost always the calculation
          method — mosques don't all use the same one. Try switching to the method your
          local mosque follows above.
        </p>
      </details>
    </div>
  );
}

function AdhanSection() {
  const { speak, stop, speakingId, supported } = useSpeech();
  const [showIqama, setShowIqama] = useState(false);
  const speakingAdhan = speakingId === "adhan-full";
  const speakingIqama = speakingId === "iqama-full";

  const fullAdhanText = adhanLines.map((l) => l.arabic).join(" ");
  const fullIqamaText = iqamaLines.map((l) => l.arabic).join(" ");

  return (
    <section className="adhan-section">
      <div className="star-divider">
        <span>The Adhan</span>
      </div>

      <div className="adhan-card scroll-fade">
        <div className="adhan-card__header">
          <h2>الأَذَان</h2>
          {supported && (
            <button
              className="adhan-card__listen-btn"
              onClick={() => (speakingAdhan ? stop() : speak("adhan-full", fullAdhanText))}
            >
              {speakingAdhan ? "■ Stop" : "▶ Listen"}
            </button>
          )}
        </div>

        <div className="adhan-card__lines">
          {adhanLines.map((line) => (
            <div key={line.id} className="adhan-card__line">
              <p className="arabic-text adhan-card__arabic">
                {line.arabic}
                {line.repeat > 1 && <span className="adhan-card__repeat"> ×{line.repeat}</span>}
              </p>
              <p className="adhan-card__translit">{line.transliteration}</p>
              <p className="adhan-card__translation">
                {line.translation}
                {line.fajrOnly && <span className="adhan-card__badge">Fajr only</span>}
              </p>
            </div>
          ))}
        </div>

        <p className="adhan-card__reference">{adhanReference}</p>
      </div>

      <div className="adhan-card adhan-card--response scroll-fade">
        <h3>Dua after the Adhan</h3>
        <p className="arabic-text adhan-card__arabic">{adhanResponseDua.arabic}</p>
        <p className="adhan-card__translit">{adhanResponseDua.transliteration}</p>
        <p className="adhan-card__translation">{adhanResponseDua.translation}</p>
        <p className="adhan-card__reference">{adhanResponseDua.reference}</p>
      </div>

      <button className="adhan-section__toggle" onClick={() => setShowIqama((s) => !s)}>
        {showIqama ? "Hide the Iqama" : "Show the Iqama (called just before prayer begins)"}
      </button>

      {showIqama && (
        <div className="adhan-card scroll-fade">
          <div className="adhan-card__header">
            <h2>الْإِقَامَة</h2>
            {supported && (
              <button
                className="adhan-card__listen-btn"
                onClick={() => (speakingIqama ? stop() : speak("iqama-full", fullIqamaText))}
              >
                {speakingIqama ? "■ Stop" : "▶ Listen"}
              </button>
            )}
          </div>
          <div className="adhan-card__lines">
            {iqamaLines.map((line) => (
              <div key={line.id} className="adhan-card__line">
                <p className="arabic-text adhan-card__arabic">{line.arabic}</p>
                <p className="adhan-card__translation">{line.translation}</p>
              </div>
            ))}
          </div>
          <p className="adhan-card__reference">{iqamaReference}</p>
        </div>
      )}
    </section>
  );
}
