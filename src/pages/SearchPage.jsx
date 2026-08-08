import { useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { adhkarData, getCategoryById } from "../data/adhkarData";
import DhikrCard from "../components/DhikrCard";
import EmptyState from "../components/EmptyState";
import { useLanguage } from "../context/LanguageContext";
import "./CategoryPage.css";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initialQuery = params.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const { t } = useLanguage();

  useEffect(() => {
    setQuery(params.get("q") || "");
  }, [params]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return adhkarData.filter((d) => {
      const category = getCategoryById(d.category);
      return (
        d.arabic.includes(query.trim()) ||
        d.translation.toLowerCase().includes(q) ||
        d.reference.toLowerCase().includes(q) ||
        category?.name.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="category-page">
      <div className="category-page__header scroll-fade">
        <div className="category-page__icon">🔎</div>
        <h1>{t.appName === "أذكار" ? "بحث" : "Search"}</h1>
        <form
          className="search-page__form"
          onSubmit={(e) => {
            e.preventDefault();
            setParams({ q: query });
          }}
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            autoFocus
          />
        </form>
      </div>

      {query.trim() === "" ? null : results.length === 0 ? (
        <EmptyState title={t.noResults} />
      ) : (
        <div className="category-page__list">
          {results.map((dhikr, i) => (
            <DhikrCard key={dhikr.id} dhikr={dhikr} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
