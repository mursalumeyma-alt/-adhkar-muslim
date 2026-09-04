import { useLanguage } from "../context/LanguageContext";
import "./Counter.css";

export default function Counter({
  count,
  max,
  onIncrement,
  onReset,
  onDecrement,
}) {
  const { t } = useLanguage();

  const done = count >= max;

  return (
    <div className="counter">
      <div className="counter__display">
        <span className="counter__label">Count</span>

        <span className="counter__number">
          {count}
        </span>

        <span className="counter__target">
          {count} / {max} {t.times}
        </span>
      </div>

      <button
        type="button"
        className={`counter__plus ${done ? "counter__plus--done" : ""}`}
        onClick={() => !done && onIncrement()}
        disabled={done}
        aria-label={`${t.repeat}: ${count} / ${max}`}
      >
        {done ? "✓" : "+"}
      </button>

      <div className="counter__actions">
        <button
          type="button"
          className="counter__action"
          onClick={onReset}
          disabled={count === 0}
        >
          <span className="counter__action-icon">↻</span>
          <span>{t.reset}</span>
        </button>

       <button
  type="button"
  className="counter__action"
  onClick={onDecrement}
  disabled={count === 0}
>
  <span className="counter__action-icon">−</span>
  <span>Minus</span>
</button>
      </div>
    </div>
  );
}