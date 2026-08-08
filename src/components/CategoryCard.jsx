import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./CategoryCard.css";

export default function CategoryCard({ category, count, index }) {
  const { t } = useLanguage();
  return (
    <Link
      to={`/category/${category.id}`}
      className="category-card scroll-fade"
      style={{ animationDelay: `${Math.min(index, 10) * 55}ms` }}
    >
      <div className="category-card__icon">{category.icon}</div>
      <div className="category-card__text">
        <h3 className="category-card__name">{category.name}</h3>
        <p className="category-card__name-ar arabic-text">{category.nameAr}</p>
        <p className="category-card__desc">{category.description}</p>
      </div>
      <div className="category-card__count" title={`${count} ${t.adhkarLabel}`}>
        <span className="category-card__count-number">{count}</span>
        <span className="category-card__count-label">{t.adhkarLabel}</span>
      </div>
    </Link>
  );
}

