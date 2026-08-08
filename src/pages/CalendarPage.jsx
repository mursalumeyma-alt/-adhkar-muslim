import { useState, useMemo } from "react";
import { toHijri, formatHijri, eventForHijriDate } from "../utils/hijri";
import { useLanguage } from "../context/LanguageContext";
import "./CalendarPage.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const { t } = useLanguage();
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-11

  const gridDays = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Hijri months spanned by the visible Gregorian month (usually one,
  // sometimes two near a Hijri month boundary).
  const hijriSpan = useMemo(() => {
    const first = toHijri(new Date(viewYear, viewMonth, 1));
    const last = toHijri(new Date(viewYear, viewMonth + 1, 0));
    if (first.month === last.month && first.year === last.year) {
      return `${first.monthName} ${first.year} AH`;
    }
    return `${first.monthName}–${last.monthName} ${last.year} AH`;
  }, [viewYear, viewMonth]);

  const eventsThisMonth = useMemo(() => {
    const found = [];
    gridDays.forEach((d) => {
      if (!d.inMonth) return;
      const ev = eventForHijriDate(d.hijri.month, d.hijri.day);
      if (ev) found.push({ ...ev, gregorian: d.date });
    });
    return found;
  }, [gridDays]);

  const goToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
  };
  const prevMonth = () => {
    const d = new Date(viewYear, viewMonth - 1, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };
  const nextMonth = () => {
    const d = new Date(viewYear, viewMonth + 1, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  return (
    <div className="calendar-page">
      <div className="calendar-page__header scroll-fade">
        <div className="calendar-page__icon">📅</div>
        <h1>{t.appName === "أذكار" ? "التقويم الهجري والميلادي" : "Hijri & Gregorian Calendar"}</h1>
      </div>

      <div className="calendar-today scroll-fade">
        <span className="calendar-today__label">Today</span>
        <span className="calendar-today__hijri">{formatHijri(today)}</span>
        <span className="calendar-today__gregorian">
          {today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </span>
      </div>

      <div className="calendar-nav scroll-fade">
        <button onClick={prevMonth} aria-label="Previous month">‹</button>
        <div className="calendar-nav__labels">
          <span className="calendar-nav__gregorian">{monthLabel}</span>
          <span className="calendar-nav__hijri">{hijriSpan}</span>
        </div>
        <button onClick={nextMonth} aria-label="Next month">›</button>
      </div>
      <button className="calendar-nav__today-btn" onClick={goToday}>
        Jump to today
      </button>

      <div className="calendar-grid scroll-fade">
        {WEEKDAYS.map((w) => (
          <div key={w} className="calendar-grid__weekday">
            {w}
          </div>
        ))}
        {gridDays.map((d, i) => {
          const event = eventForHijriDate(d.hijri.month, d.hijri.day);
          const isToday = d.inMonth && sameDate(d.date, today);
          return (
            <div
              key={i}
              className={`calendar-grid__cell ${d.inMonth ? "" : "calendar-grid__cell--out"} ${
                isToday ? "calendar-grid__cell--today" : ""
              } ${event ? "calendar-grid__cell--event" : ""}`}
              title={event ? `${event.icon} ${event.name}` : undefined}
            >
              <span className="calendar-grid__gregorian-day">{d.date.getDate()}</span>
              <span className="calendar-grid__hijri-day">{d.hijri.day}</span>
              {event && <span className="calendar-grid__event-dot">{event.icon}</span>}
            </div>
          );
        })}
      </div>

      {eventsThisMonth.length > 0 && (
        <div className="calendar-events scroll-fade">
          <h2>This month</h2>
          {eventsThisMonth.map((ev) => (
            <div key={ev.name} className="calendar-events__row">
              <span className="calendar-events__icon">{ev.icon}</span>
              <div className="calendar-events__text">
                <span className="calendar-events__name">{ev.name}</span>
                <span className="calendar-events__date">
                  {ev.gregorian.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                </span>
                {ev.note && <span className="calendar-events__note">{ev.note}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="calendar-page__caveat">
        Hijri dates here are calculated using the tabular Umm al-Qura calendar, not direct moon
        sighting — the real start of any Hijri month (Ramadan and the two Eids especially) can
        differ by a day depending on local moon-sighting announcements. Confirm important dates
        with your local mosque or national moon-sighting authority.
      </p>
    </div>
  );
}

function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  // Leading days from the previous month, to fill the first week.
  for (let i = startOffset - 1; i >= 0; i--) {
    const date = new Date(year, month, -i);
    cells.push({ date, inMonth: false, hijri: toHijri(date) });
  }
  // This month's days.
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    cells.push({ date, inMonth: true, hijri: toHijri(date) });
  }
  // Trailing days to complete the final week.
  while (cells.length % 7 !== 0) {
    const date = new Date(year, month, daysInMonth + (cells.length - (startOffset + daysInMonth) + 1));
    cells.push({ date, inMonth: false, hijri: toHijri(date) });
  }
  return cells;
}

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
