import { useAudioPlayer } from "../context/AudioPlayerContext";
import { Link } from "react-router-dom";
import { categories, getAdhkarByCategory } from "../data/adhkarData";
import CategoryCard from "../components/CategoryCard";
import { useLanguage } from "../context/LanguageContext";
import StarMotif from "../components/StarMotif";
import "./Home.css";

export default function Home() {
  const {
    downloadAll,
    downloadProgress,
    isDownloading,
    offlineReady,
  } = useAudioPlayer();

  const { t } = useLanguage();

  const allAudioUrls = categories.flatMap((category) =>
    getAdhkarByCategory(category.id).flatMap(
      (adhkar) => adhkar.audioUrls || []
    )
  );

  return (
    <div className="home">
      <section className="hero">
        <StarMotif />

        <div className="hero__content">
          <h1 className="hero__title">
            {t.appName === "أذكار" ? "أذكار المسلم" : "Adhkar"}
          </h1>

          <p className="hero__arabic">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          <p className="hero__subtitle">
            مصمم للمسلم العصري
          </p>

          <p className="hero__desc">
            Daily Adhkar, Duas and remembrance to keep your heart connected
            with Allah.
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

      {/* Offline Audio */}
      <section className="home-offline scroll-fade">
        <div className="home-offline__content">
          <div className="home-offline__icon">📥</div>

          <div>
            <h2>Offline Audio</h2>

            <p>
              Download all Adhkar audio so you can listen without internet.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="home-offline__button"
          onClick={() => downloadAll(allAudioUrls)}
          disabled={isDownloading || allAudioUrls.length === 0}
        >
          {isDownloading
            ? `Downloading ${downloadProgress}%`
            : offlineReady
            ? "✓ Audio Available Offline"
            : "⬇️ Download All for Offline"}
        </button>

        {isDownloading && (
          <div className="home-offline__progress">
            <div
              className="home-offline__progress-bar"
              style={{ width: `${downloadProgress}%` }}
            />
          </div>
        )}

        {offlineReady && !isDownloading && (
          <p className="home-offline__success">
            ✓ All available audio is ready for offline listening.
          </p>
        )}
      </section>

      <section className="home-tools">
        <Link
          to="/prayer-times"
          className="home-tools__card scroll-fade"
        >
          <span className="home-tools__icon">🕌</span>

          <span className="home-tools__text">
            <span className="home-tools__title">
              Prayer Times &amp; Adhan
            </span>

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
            <span className="home-tools__title">
              Qibla Direction
            </span>

            <span className="home-tools__sub">
              A live compass pointing to the Kaaba
            </span>
          </span>
        </Link>

        <Link
          to="/calendar"
          className="home-tools__card scroll-fade"
          style={{ animationDelay: "120ms" }}
        >
          <span className="home-tools__icon">📅</span>

          <span className="home-tools__text">
            <span className="home-tools__title">
              Hijri &amp; Gregorian Calendar
            </span>

            <span className="home-tools__sub">
              Both calendars side by side, with key Islamic dates
            </span>
          </span>
        </Link>
      </section>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}