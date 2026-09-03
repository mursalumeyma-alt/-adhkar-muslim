import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ProgressProvider } from "./context/ProgressContext";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";
import { VoiceProvider } from "./context/VoiceContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MotivationAlert from "./components/MotivationAlert";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Favorites from "./pages/Favorites";
import SearchPage from "./pages/SearchPage";
import QiblaPage from "./pages/QiblaPage";
import PrayerTimesPage from "./pages/PrayerTimesPage";
import CalendarPage from "./pages/CalendarPage";
import "./styles/theme.css";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <ProgressProvider>
            <AudioPlayerProvider>
              <VoiceProvider>
                <BrowserRouter>
                  <div className="app-shell">
                    <Header />
                    <MotivationAlert />
                    <ScrollToTop />
                    <main className="app-main">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:categoryId" element={<CategoryPage />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/qibla" element={<QiblaPage />} />
                        <Route path="/prayer-times" element={<PrayerTimesPage />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                </BrowserRouter>
              </VoiceProvider>
            </AudioPlayerProvider>
          </ProgressProvider>
        </FavoritesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
