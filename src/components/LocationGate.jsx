import { useGeolocation } from "../hooks/useGeolocation";
import EmptyState from "./EmptyState";
import "./LocationGate.css";

/**
 * Wraps a feature that needs the person's coordinates. Renders the
 * permission prompt / loading / denied / error states itself, and
 * only renders `children(coords)` once coordinates are available.
 */
export default function LocationGate({ title, children }) {
  const { coords, status, request } = useGeolocation();

  if (status === "ready" && coords) {
    return (
      <>
        {children(coords)}
        <button className="location-gate__refresh" onClick={request}>
          <RefreshIcon /> Update my location
        </button>
      </>
    );
  }

  if (status === "loading") {
    return (
      <div className="location-gate">
        <div className="location-gate__spinner" />
        <p>Finding your location…</p>
      </div>
    );
  }

  if (status === "denied") {
    return (
      <EmptyState
        title="Location access was denied"
        subtitle={`${title} needs your location to work. Allow location access in your browser's site settings, then try again.`}
      />
    );
  }

  if (status === "unsupported") {
    return (
      <EmptyState
        title="Location isn't available"
        subtitle="Your browser doesn't support location access, so this feature can't determine your position."
      />
    );
  }

  if (status === "error") {
    return (
      <div className="location-gate">
        <p>Couldn't get your location. Please try again.</p>
        <button className="location-gate__btn" onClick={request}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="location-gate">
      <LocationIcon />
      <h3>{title}</h3>
      <p>This needs your location to give you accurate results for where you are.</p>
      <button className="location-gate__btn" onClick={request}>
        Share my location
      </button>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-7-6.5-7-11.5A7 7 0 0119 9.5C19 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a9 9 0 11-2.6-6.36" />
      <polyline points="21 3 21 9 15 9" />
    </svg>
  );
}
