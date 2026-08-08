import StarMotif from "./StarMotif";
import "./EmptyState.css";

export default function EmptyState({ title, subtitle }) {
  return (
    <div className="empty-state scroll-fade">
      <StarMotif size={40} spin />
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
