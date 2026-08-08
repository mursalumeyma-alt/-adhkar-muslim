import { useLanguage } from "../context/LanguageContext";
import "./Counter.css";

export default function Counter({ count, max, onIncrement, onReset }) {
  const { t } = useLanguage();
  const done = count >= max;
  const circumference = 2 * Math.PI * 26;
  const progress = Math.min(count / max, 1);
  const offset = circumference * (1 - progress);

  return (
    <div className="counter">
      <button
        className={`counter__ring ${done ? "counter__ring--done" : ""}`}
        onClick={() => !done && onIncrement()}
        aria-label={`${t.repeat}: ${count} / ${max}`}
        disabled={done}
      >
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="4"
          />
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 32 32)"
            style={{ transition: "stroke-dashoffset 260ms ease" }}
          />
        </svg>
        <span className="counter__value">{done ? "✓" : count}</span>
      </button>
      <div className="counter__meta">
        <span className="counter__label">
          {count} / {max} {t.times}
        </span>
        {count > 0 && (
          <button className="counter__reset" onClick={onReset} title="Resets automatically each new day">
            {t.reset}
          </button>
        )}
      </div>
    </div>
  );
}
