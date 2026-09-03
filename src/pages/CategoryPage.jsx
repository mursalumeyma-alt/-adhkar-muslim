import { useParams, Link, Navigate } from "react-router-dom";

import { getAdhkarByCategory, getCategoryById } from "../data/adhkarData";

import DhikrCard from "../components/DhikrCard";

import { useLanguage } from "../context/LanguageContext";

import { useProgress } from "../context/ProgressContext";

import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const { t } = useLanguage();

  const { getCount } = useProgress();

  const category = getCategoryById(categoryId);

  const items = getAdhkarByCategory(categoryId);

  if (!category) return <Navigate to="/" replace />;

  return (
    <div className="category-page">
      <div className="category-page__header scroll-fade">
        <Link to="/" className="category-page__back">
          ← {t.backToCategories}
        </Link>

        <div className="category-page__icon">{category.icon}</div>

        <h1>{category.name}</h1>

        <p className="arabic-text category-page__name-ar">
          {category.nameAr}
        </p>

        <p className="category-page__desc">
          {category.description}
        </p>
      </div>

      <div className="category-page__list">
        {items
          .filter((dhikr) => getCount(dhikr.id) < dhikr.repeat)
          .map((dhikr, i) => (
            <DhikrCard
              key={dhikr.id}
              dhikr={dhikr}
              index={i}
            />
          ))}
      </div>
    </div>
  );
}