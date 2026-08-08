import { useMemo } from "react";
import { Qibla, Coordinates } from "adhan";
import { magvar } from "magvar";
import LocationGate from "../components/LocationGate";
import { useDeviceOrientation } from "../hooks/useDeviceOrientation";
import { distanceToKaabaKm } from "../utils/geo";
import { useLanguage } from "../context/LanguageContext";
import "./QiblaPage.css";

export default function QiblaPage() {
  const { t } = useLanguage();

  return (
    <div className="qibla-page">
      <div className="qibla-page__header scroll-fade">
        <div className="qibla-page__icon">🕋</div>
        <h1>{t.appName === "أذكار" ? "اتجاه القبلة" : "Qibla Direction"}</h1>
        <p className="qibla-page__desc">
          The direction of the Kaaba in Mecca from wherever you are.
        </p>
      </div>

      <LocationGate title="Qibla Direction">
        {(coords) => <QiblaCompass coords={coords} />}
      </LocationGate>
    </div>
  );
}

function QiblaCompass({ coords }) {
  const { heading, status, requestPermission } = useDeviceOrientation();
  const coordinates = new Coordinates(coords.latitude, coords.longitude);
  const qiblaBearing = Qibla(coordinates);
  const distanceKm = distanceToKaabaKm(coords);

  // Phone compass sensors report heading relative to MAGNETIC north,
  // not true (geographic) north — the two can differ by up to ~20°
  // depending on where you are. The Qibla bearing above is a true-north
  // bearing (it comes from the actual lat/lng geometry), so without this
  // correction the live needle would visibly point in the wrong
  // direction by the local declination amount. `magvar` computes that
  // offset from the World Magnetic Model, entirely offline.
  const declination = useMemo(
    () => magvar(coords.latitude, coords.longitude),
    [coords.latitude, coords.longitude]
  );

  const isLive = status === "active" && heading !== null;
  const trueHeading = isLive ? (heading + declination + 360) % 360 : null;
  // The dial rotates opposite the true heading so North always sits
  // where true north actually is; the Kaaba marker sits at its fixed
  // true bearing on that dial, same as any compass app.
  const dialRotation = isLive ? -trueHeading : 0;

  return (
    <div className="qibla-compass scroll-fade">
      <div className="qibla-compass__dial-wrap">
        <svg viewBox="0 0 300 300" className="qibla-compass__dial" style={{ transform: `rotate(${dialRotation}deg)` }}>
          <circle cx="150" cy="150" r="140" className="qibla-compass__ring" />
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const isMajor = angle % 90 === 0;
            const isMid = angle % 30 === 0;
            const len = isMajor ? 18 : isMid ? 12 : 6;
            const r1 = 140;
            const r2 = 140 - len;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={150 + r1 * Math.sin(rad)}
                y1={150 - r1 * Math.cos(rad)}
                x2={150 + r2 * Math.sin(rad)}
                y2={150 - r2 * Math.cos(rad)}
                className={isMajor ? "qibla-compass__tick-major" : "qibla-compass__tick"}
              />
            );
          })}
          <text x="150" y="30" textAnchor="middle" className="qibla-compass__cardinal">N</text>
          <text x="270" y="156" textAnchor="middle" className="qibla-compass__cardinal">E</text>
          <text x="150" y="280" textAnchor="middle" className="qibla-compass__cardinal">S</text>
          <text x="30" y="156" textAnchor="middle" className="qibla-compass__cardinal">W</text>

          <g transform={`rotate(${qiblaBearing} 150 150)`}>
            <line x1="150" y1="150" x2="150" y2="34" className="qibla-compass__needle" />
            <text x="150" y="55" textAnchor="middle" className="qibla-compass__kaaba-icon">
              🕋
            </text>
          </g>
          <circle cx="150" cy="150" r="6" className="qibla-compass__hub" />
        </svg>
        {!isLive && (
          <div className="qibla-compass__pointer" aria-hidden="true">
            ▲
          </div>
        )}
      </div>

      <div className="qibla-compass__stats">
        <div className="qibla-compass__stat">
          <span className="qibla-compass__stat-value">{qiblaBearing.toFixed(1)}°</span>
          <span className="qibla-compass__stat-label">from true north</span>
        </div>
        <div className="qibla-compass__stat">
          <span className="qibla-compass__stat-value">{Math.round(distanceKm).toLocaleString()} km</span>
          <span className="qibla-compass__stat-label">to Mecca</span>
        </div>
      </div>

      {isLive ? (
        <>
          <p className="qibla-compass__hint qibla-compass__hint--live">
            Live compass — hold your phone flat. The 🕋 marks the Qibla.
          </p>
          <p className="qibla-compass__declination">
            Corrected for {Math.abs(declination).toFixed(1)}° of magnetic declination at your
            location.
          </p>
        </>
      ) : status === "needs-permission" ? (
        <button className="qibla-compass__enable-btn" onClick={requestPermission}>
          Enable live compass
        </button>
      ) : status === "denied" ? (
        <p className="qibla-compass__hint">
          Compass access was denied. Use the bearing above with a separate compass app instead —
          find true north, then turn until it lines up with {qiblaBearing.toFixed(0)}°. Note that
          most compass apps show magnetic north by default; at your location, true north is about{" "}
          {Math.abs(declination).toFixed(1)}° {declination >= 0 ? "west" : "east"} of what a
          magnetic compass shows as north.
        </p>
      ) : status === "unsupported" ? (
        <p className="qibla-compass__hint">
          Your device doesn't expose a compass sensor to the browser. Use the bearing above with a
          separate compass app: find true north, then turn until it lines up with{" "}
          {qiblaBearing.toFixed(0)}°. Note that most compass apps show magnetic north by default;
          at your location, true north is about {Math.abs(declination).toFixed(1)}°{" "}
          {declination >= 0 ? "west" : "east"} of what a magnetic compass shows as north.
        </p>
      ) : (
        <p className="qibla-compass__hint">Loading compass…</p>
      )}
    </div>
  );
}
