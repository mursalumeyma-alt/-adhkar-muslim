import { Link } from "react-router-dom";
import { categories, getAdhkarByCategory } from "../data/adhkarData";
import CategoryCard from "../components/CategoryCard";
import { useLanguage } from "../context/LanguageContext";
import StarMotif from "../components/StarMotif";
import "./Home.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="hero">
        <div className="hero__pattern" aria-hidden="true" />
        <div className="hero__content scroll-fade">
          <StarMotif size={34} className="hero__star" spin />
          <h1>{t.appName === "أذكار" ? "أذكار المسلم" : "Adhkar"}</h1>
          <p className="hero__sub arabic-text hero__sub-ar">
            حِصْنُ الْمُسْلِمِ مِنْ أَذْكَارِ الْكِتَابِ وَالسُّنَّةِ
          </p>
          <p className="hero__desc">
            A believer's daily fortress of remembrance — morning and evening
            adhkar, supplications for sleep, travel, prayer, and every
            turning point of the day, gathered from Sahih al-Bukhari and
            Sahih Muslim.
          </p>
          <Link to="/category/morning" className="hero__cta">
            Start Adhkar
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="home-categories home-categories--top">
        <div className="star-divider">
          <span>{t.categories}</span>
        </div>
        <div className="home-categories__grid">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              count={getAdhkarByCategory(cat.id).length}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="home-tools">
        <Link to="/prayer-times" className="home-tools__card scroll-fade">
          <span className="home-tools__icon">🕌</span>
          <span className="home-tools__text">
            <span className="home-tools__title">Prayer Times &amp; Adhan</span>
            <span className="home-tools__sub">
              Today's five prayers for your location, plus the call to prayer
            </span>
          </span>
        </Link>
        <Link
          to="/qibla"
          className="home-tools__card scroll-fade"
          style={{ animationDelay: "60ms" }}
        >
          <span className="home-tools__icon">🧭</span>
          <span className="home-tools__text">
            <span className="home-tools__title">Qibla Direction</span>
            <span className="home-tools__sub">A live compass pointing to the Kaaba</span>
          </span>
        </Link>
        <Link
          to="/calendar"
          className="home-tools__card scroll-fade"
          style={{ animationDelay: "120ms" }}
        >
          <span className="home-tools__icon">📅</span>
          <span className="home-tools__text">
            <span className="home-tools__title">Hijri &amp; Gregorian Calendar</span>
            <span className="home-tools__sub">Both calendars side by side, with key Islamic dates</span>
          </span>
        </Link>
      </section>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
