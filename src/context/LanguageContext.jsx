import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const LanguageContext = createContext(null);

// UI copy for the two supported interface languages.
const strings = {
  en: {
    appName: "Adhkar",
    tagline: "Daily remembrances of a believer",
    searchPlaceholder: "Search adhkar, hadith, or category…",
    favorites: "Favorites",
    home: "Home",
    noFavorites: "You haven't saved any adhkar yet.",
    noFavoritesSub: "Tap the star on any dhikr to save it here.",
    noResults: "No adhkar match your search.",
    reference: "Reference",
    repeat: "Repeat",
    times: "times",
    completed: "Completed",
    reset: "Reset",
    listen: "Listen",
    stop: "Stop",
    categories: "Categories",
    allDone: "All done for this set. May Allah accept it from you.",
    backToCategories: "All categories",
    adhkarLabel: "adhkar",
  },
  ar: {
    appName: "أذكار",
    tagline: "أذكار المسلم اليومية",
    searchPlaceholder: "ابحث عن ذكر أو حديث أو قسم…",
    favorites: "المفضلة",
    home: "الرئيسية",
    noFavorites: "لم تقم بحفظ أي أذكار بعد.",
    noFavoritesSub: "اضغط على النجمة بجانب أي ذكر لحفظه هنا.",
    noResults: "لا توجد أذكار مطابقة لبحثك.",
    reference: "المصدر",
    repeat: "التكرار",
    times: "مرات",
    completed: "تم",
    reset: "إعادة",
    listen: "استماع",
    stop: "إيقاف",
    categories: "الأقسام",
    allDone: "أتممت هذه المجموعة. تقبل الله منك.",
    backToCategories: "جميع الأقسام",
    adhkarLabel: "أذكار",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useLocalStorage("adhkar-lang", "en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, dir, toggleLanguage, t: strings[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
