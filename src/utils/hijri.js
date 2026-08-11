// Gregorian <-> Hijri conversion using the browser's Intl calendar data.
// Uses the Umm al-Qura calendar where supported by the browser.

const HIJRI_FORMATTER = new Intl.DateTimeFormat(
  "en-u-ca-islamic-umalqura",
  {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }
);

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

  const getPart = (...types) => {
    const part = parts.find((p) => types.includes(p.type));
    return part ? Number(part.value) : null;
  };

  const year = getPart("year", "relatedYear");
  const month = getPart("month");
  const day = getPart("day");

  const safeYear = Number.isFinite(year) ? year : 0;
  const safeMonth =
    Number.isFinite(month) && month >= 1 && month <= 12 ? month : 1;
  const safeDay = Number.isFinite(day) ? day : 1;

  return {
    year: safeYear,
    month: safeMonth,
    day: safeDay,
    monthName: HIJRI_MONTHS[safeMonth - 1].en,
    monthNameAr: HIJRI_MONTHS[safeMonth - 1].ar,
  };
}

export function formatHijri(date, lang = "en") {
  const h = toHijri(date);

  if (lang === "ar") {
    return `${h.day} ${h.monthNameAr} ${h.year}هـ`;
  }

  return `${h.day} ${h.monthName} ${h.year} AH`;
}

// Islamic calendar events
export const ISLAMIC_EVENTS = [
  {
    month: 1,
    day: 1,
    icon: "🌙",
    name: "Islamic New Year",
    nameAr: "رأس السنة الهجرية",
  },
  {
    month: 1,
    day: 10,
    icon: "🕊️",
    name: "Ashura",
    nameAr: "عاشوراء",
  },
  {
    month: 3,
    day: 12,
    icon: "🌟",
    name: "Mawlid al-Nabi",
    nameAr: "المولد النبوي",
    note: "Commonly observed on 12 Rabi' al-Awwal; some traditions mark the 17th instead.",
  },
  {
    month: 7,
    day: 27,
    icon: "🌌",
    name: "Isra and Mi'raj",
    nameAr: "الإسراء والمعراج",
  },
  {
    month: 9,
    day: 1,
    icon: "🌙",
    name: "Start of Ramadan",
    nameAr: "بداية رمضان",
  },
  {
    month: 9,
    day: 27,
    icon: "✨",
    name: "Laylatul Qadr (commonly marked)",
    nameAr: "ليلة القدر",
    note: "Its exact night is unknown; it is sought among the odd nights of the last ten days of Ramadan.",
  },
  {
    month: 10,
    day: 1,
    icon: "🎉",
    name: "Eid al-Fitr",
    nameAr: "عيد الفطر",
  },
  {
    month: 12,
    day: 8,
    icon: "🕋",
    name: "Start of Hajj",
    nameAr: "بداية الحج",
  },
  {
    month: 12,
    day: 9,
    icon: "🕋",
    name: "Day of Arafah",
    nameAr: "يوم عرفة",
  },
  {
    month: 12,
    day: 10,
    icon: "🎉",
    name: "Eid al-Adha",
    nameAr: "عيد الأضحى",
  },
];

export function eventForHijriDate(month, day) {
  return (
    ISLAMIC_EVENTS.find(
      (event) => event.month === month && event.day === day
    ) || null
  );
}