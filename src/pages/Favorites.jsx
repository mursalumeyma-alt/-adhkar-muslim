import { adhkarData } from "../data/adhkarData";
import { useFavorites } from "../context/FavoritesContext";
import { useLanguage } from "../context/LanguageContext";
import DhikrCard from "../components/DhikrCard";
import EmptyState from "../components/EmptyState";
import "./CategoryPage.css";

export default function Favorites() {
  const { favorites } = useFavorites();
  const { t } = useLanguage();
  const items = adhkarData.filter((d) => favorites.includes(d.id));

  return (
    <div className="category-page">
      <div className="category-page__header scroll-fade">
        <div className="category-page__icon">⭐</div>
        <h1>{t.favorites}</h1>
      </div>

      {items.length === 0 ? (
        <EmptyState title={t.noFavorites} subtitle={t.noFavoritesSub} />
      ) : (
        <div className="category-page__list">
          {items.map((dhikr, i) => (
            <DhikrCard key={dhikr.id} dhikr={dhikr} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
