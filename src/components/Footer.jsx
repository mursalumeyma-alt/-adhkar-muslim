import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="star-divider">
        <span>۞</span>
      </div>
      <p>
        وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا
      </p>
      <p className="app-footer__note">
        Hadith references are drawn from Sahih al-Bukhari and Sahih Muslim,
        among other established collections.
      </p>
    </footer>
  );
}
