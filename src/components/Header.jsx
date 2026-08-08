import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import StarMotif from "./StarMotif";
import VoicePicker from "./VoicePicker";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <NavLink to="/" className="app-header__brand" onClick={() => setMenuOpen(false)}>
          <StarMotif size={26} className="app-header__brand-icon" />
          <span className="app-header__brand-text">
            <span className="app-header__brand-name">{t.appName}</span>
            <span className="app-header__brand-tagline">{t.tagline}</span>
          </span>
        </NavLink>

        <form className="app-header__search" onSubmit={handleSearchSubmit} role="search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
          />
          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <nav className="app-header__nav">
          <NavLink to="/" end className="app-header__link">
            {t.home}
          </NavLink>
          <NavLink to="/prayer-times" className="app-header__link">
            🕌 Prayer Times
          </NavLink>
          <NavLink to="/qibla" className="app-header__link">
            🧭 Qibla
          </NavLink>
          <NavLink to="/calendar" className="app-header__link">
            📅 Calendar
          </NavLink>
          <NavLink to="/favorites" className="app-header__link">
            {t.favorites}
          </NavLink>
        </nav>

        <div className="app-header__actions">
          <VoicePicker />
          <button
            className="app-header__pill"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={lang === "en" ? "العربية" : "English"}
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            className="app-header__icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="app-header__menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="app-header__mobile-menu scroll-fade">
          <form className="app-header__search app-header__search--mobile" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
            />
            <button type="submit" aria-label="Search">
              <SearchIcon />
            </button>
          </form>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            {t.home}
          </NavLink>
          <NavLink to="/prayer-times" onClick={() => setMenuOpen(false)}>
            🕌 Prayer Times
          </NavLink>
          <NavLink to="/qibla" onClick={() => setMenuOpen(false)}>
            🧭 Qibla
          </NavLink>
          <NavLink to="/calendar" onClick={() => setMenuOpen(false)}>
            📅 Calendar
          </NavLink>
          <NavLink to="/favorites" onClick={() => setMenuOpen(false)}>
            {t.favorites}
          </NavLink>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
