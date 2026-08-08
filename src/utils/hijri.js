// Gregorian <-> Hijri conversion using the browser's own ICU data via
// Intl, with the Umm al-Qura calendar variant (the tabular calendar
// Saudi Arabia uses officially, and the most common default for digital
// Islamic calendars generally). This needs no separate library and no
// network call — every modern browser ships the ICU calendar data.
//
// Important caveat, surfaced in the UI too: this is a *calculated*
// calendar. The real start of each Hijri month is traditionally set by
// moon sighting, which can differ from the tabular calculation by a
// day in either direction — this is especially significant for Ramadan
// and the two Eids. Treat dates here as a reliable estimate, not a
// substitute for your local mosque or national moon-sighting authority.

const HIJRI_FORMATTER = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

export const HIJRI_MONTHS = [
  { en: "Muharram", ar: "محرم" },
  { en: "Safar", ar: "صفر" },
  { en: "Rabi' al-Awwal", ar: "ربيع الأول" },
  { en: "Rabi' al-Thani", ar: "ربيع الآخر" },
  { en: "Jumada al-Awwal", ar: "جمادى الأولى" },
  { en: "Jumada al-Thani", ar: "جمادى الآخرة" },
  { en: "Rajab", ar: "رجب" },
  { en: "Sha'ban", ar: "شعبان" },
  { en: "Ramadan", ar: "رمضان" },
  { en: "Shawwal", ar: "شوال" },
  { en: "Dhu al-Qi'dah", ar: "ذو القعدة" },
  { en: "Dhu al-Hijjah", ar: "ذو الحجة" },
];

export function toHijri(date) {
  const parts = HIJRI_FORMATTER.formatToParts(date);
  const get = (type) => Number(parts.find((p) => p.type === type)?.value);
  const month = get("month"); // 1-12
  return {
    year: get("year"),
    month,
    day: get("day"),
    monthName: HIJRI_MONTHS[month - 1]?.en ?? "",
    monthNameAr: HIJRI_MONTHS[month - 1]?.ar ?? "",
  };
}

export function formatHijri(date, lang = "en") {
  const h = toHijri(date);
  return lang === "ar"
    ? `${h.day} ${h.monthNameAr} ${h.year}هـ`
    : `${h.day} ${h.monthName} ${h.year} AH`;
}

// Notable dates on the Islamic calendar, keyed by Hijri month/day.
// Sunni-majority observance dates are used where practice varies
// (e.g. Mawlid); this is noted in the UI rather than silently picking
// a side.
export const ISLAMIC_EVENTS = [
  { month: 1, day: 1, icon: "🌙", name: "Islamic New Year", nameAr: "رأس السنة الهجرية" },
  { month: 1, day: 10, icon: "🕊️", name: "Ashura", nameAr: "عاشوراء" },
  {
    month: 3,
    day: 12,
    icon: "🌟",
    name: "Mawlid al-Nabi",
    nameAr: "المولد النبوي",
    note: "Commonly observed on 12 Rabi' al-Awwal; some traditions mark the 17th instead.",
  },
  { month: 7, day: 27, icon: "🌌", name: "Isra and Mi'raj", nameAr: "الإسراء والمعراج" },
  { month: 9, day: 1, icon: "🌙", name: "Start of Ramadan", nameAr: "بداية رمضان" },
  {
    month: 9,
    day: 27,
    icon: "✨",
    name: "Laylatul Qadr (commonly marked)",
    nameAr: "ليلة القدر",
    note: "Its exact night is unknown; it's sought among the odd nights of the last ten days of Ramadan.",
  },
  { month: 10, day: 1, icon: "🎉", name: "Eid al-Fitr", nameAr: "عيد الفطر" },
  { month: 12, day: 8, icon: "🕋", name: "Start of Hajj", nameAr: "بداية الحج" },
  { month: 12, day: 9, icon: "🕋", name: "Day of Arafah", nameAr: "يوم عرفة" },
  { month: 12, day: 10, icon: "🎉", name: "Eid al-Adha", nameAr: "عيد الأضحى" },
];

export function eventForHijriDate(month, day) {
  return ISLAMIC_EVENTS.find((e) => e.month === month && e.day === day) || null;
}
