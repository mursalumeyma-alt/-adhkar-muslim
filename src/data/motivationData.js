// Short motivational reminders about the virtue of dhikr and
// consistency in worship, shown one per day in the motivation alert.
// Same sourcing standard as the rest of the app: Qur'an and authentic
// hadith, with references, English rendering my own paraphrase.

export const motivationQuotes = [
  {
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    translation: "Verily, in the remembrance of Allah do hearts find rest.",
    reference: "Qur'an 13:28",
  },
  {
    arabic:
      "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ",
    translation:
      "The example of one who remembers his Lord and one who does not is like that of the living and the dead.",
    reference: "Sahih al-Bukhari 6407",
  },
  {
    arabic:
      "سَبَقَ الْمُفَرِّدُونَ. قَالُوا: وَمَا الْمُفَرِّدُونَ يَا رَسُولَ اللَّهِ؟ قَالَ: الذَّاكِرُونَ اللَّهَ كَثِيرًا وَالذَّاكِرَاتُ",
    translation:
      "Those who remember Allah much, men and women, race ahead — the Prophet ﷺ said this when asked who \"the outstrippers\" are.",
    reference: "Sahih Muslim 2676",
  },
  {
    arabic:
      "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    translation:
      "The most beloved deeds to Allah are those done consistently, even if small.",
    reference: "Sahih al-Bukhari 6465, Sahih Muslim 782",
  },
  {
    arabic:
      "مَنْ قَالَ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ... فِي يَوْمٍ مِائَةَ مَرَّةٍ كَانَتْ لَهُ عَدْلَ عَشْرِ رِقَابٍ",
    translation:
      "Whoever says 'there is no god but Allah alone, without partner...' a hundred times in a day, it is equal in reward to freeing ten slaves.",
    reference: "Sahih al-Bukhari 6403, Sahih Muslim 2691",
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    translation: "So remember Me; I will remember you. Be grateful to Me, and do not deny Me.",
    reference: "Qur'an 2:152",
  },
  {
    arabic:
      "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا",
    translation:
      "Whoever recites a single letter of the Book of Allah receives one reward for it, and that reward is multiplied tenfold.",
    reference: "Sunan al-Tirmidhi 2910",
  },
  {
    arabic:
      "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ حَبِيبَتَانِ إِلَى الرَّحْمَٰنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
    translation:
      "Two phrases, light on the tongue, heavy on the scale, and beloved to the Most Merciful: 'Glory and praise be to Allah, glory be to Allah the Mighty.'",
    reference: "Sahih al-Bukhari 6406, Sahih Muslim 2694",
  },
  {
    arabic:
      "إِنَّ اللَّهَ لَا يَمَلُّ حَتَّى تَمَلُّوا",
    translation:
      "Allah does not tire [of giving reward] until you tire [of the deed] — said about deeds done consistently.",
    reference: "Sahih al-Bukhari 6464, Sahih Muslim 782",
  },
  {
    arabic: "وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ",
    translation: "And remember your Lord when you forget.",
    reference: "Qur'an 18:24",
  },
];

export function quoteOfTheDay() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const diff = Date.now() - start.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  return motivationQuotes[dayOfYear % motivationQuotes.length];
}
