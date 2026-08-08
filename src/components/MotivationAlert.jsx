import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getCategoryCompletion, getCategoryById } from "../data/adhkarData";
import { quoteOfTheDay } from "../data/motivationData";
import "./MotivationAlert.css";

function localDateKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

// Which daily-adhkar category is timely right now, roughly matching
// when each is traditionally recited.
function timelyCategoryId(hour) {
  if (hour >= 4 && hour < 12) return "morning";
  if (hour >= 15 && hour < 23) return "evening";
  return "sleep";
}

export default function MotivationAlert() {
  const { getCount } = useProgress();
  const [dismissedDate, setDismissedDate] = useLocalStorage(
    "adhkar-motivation-dismissed",
    null
  );
  const [dismissedThisSession, setDismissedThisSession] = useState(false);

  const today = localDateKey();
  const dismissedToday = dismissedDate === today || dismissedThisSession;

  const content = useMemo(() => {
    const hour = new Date().getHours();
    const categoryId = timelyCategoryId(hour);
    const completion = getCategoryCompletion(categoryId, getCount);

    if (completion.remaining > 0) {
      const category = getCategoryById(categoryId);
      return {
        type: "nudge",
        icon: category?.icon || "🤲",
        text:
          completion.done === 0
            ? `You haven't started today's ${category?.name} yet — ${completion.total} adhkar waiting.`
            : `${category?.name}: ${completion.remaining} of ${completion.total} left for today.`,
        linkTo: `/category/${categoryId}`,
        linkLabel: "Continue",
      };
    }

    const quote = quoteOfTheDay();
    return {
      type: "quote",
      icon: "✨",
      arabic: quote.arabic,
      text: quote.translation,
      reference: quote.reference,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCount]);

  if (dismissedToday) return null;

  const dismiss = () => {
    setDismissedDate(today);
    setDismissedThisSession(true);
  };

  return (
    <div className={`motivation-alert motivation-alert--${content.type} scroll-fade`}>
      <span className="motivation-alert__icon">{content.icon}</span>
      <div className="motivation-alert__body">
        {content.arabic && (
          <p className="arabic-text motivation-alert__arabic">{content.arabic}</p>
        )}
        <p className="motivation-alert__text">{content.text}</p>
        {content.reference && (
          <p className="motivation-alert__reference">{content.reference}</p>
        )}
      </div>
      <div className="motivation-alert__actions">
        {content.linkTo && (
          <Link to={content.linkTo} className="motivation-alert__link" onClick={dismiss}>
            {content.linkLabel}
          </Link>
        )}
        <button
          className="motivation-alert__dismiss"
          onClick={dismiss}
          aria-label="Dismiss for today"
          title="Dismiss for today"
        >
          ×
        </button>
      </div>
    </div>
  );
}
