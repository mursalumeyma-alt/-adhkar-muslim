// ============================================================
// ADHAN & IQAMA DATA
// ============================================================

// The Adhan (call to prayer) and Iqama (second, shorter call
// just before prayer begins).
//
// Audio file:
// public/audio/adhan.mp3
//
// The audio can be played by importing `adhanAudio` into
// your Adhan component.

export const adhanAudio = "/audio/adhan.mp3";

// ============================================================
// ADHAN
// ============================================================

export const adhanLines = [
  {
    id: "adhan-1",
    arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ",
    transliteration: "Allāhu akbar, Allāhu akbar",
    translation: "Allah is the Greatest, Allah is the Greatest",
    repeat: 2,
  },

  {
    id: "adhan-2",
    arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ",
    transliteration: "Ash-hadu an lā ilāha illallāh",
    translation: "I bear witness that there is no god but Allah",
    repeat: 2,
  },

  {
    id: "adhan-3",
    arabic: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
    transliteration: "Ash-hadu anna Muḥammadar-rasūlullāh",
    translation: "I bear witness that Muhammad is the Messenger of Allah",
    repeat: 2,
  },

  {
    id: "adhan-4",
    arabic: "حَيَّ عَلَى الصَّلَاةِ",
    transliteration: "Ḥayya 'alaṣ-ṣalāh",
    translation: "Come to prayer",
    repeat: 2,
  },

  {
    id: "adhan-5",
    arabic: "حَيَّ عَلَى الْفَلَاحِ",
    transliteration: "Ḥayya 'alal-falāḥ",
    translation: "Come to success",
    repeat: 2,
  },

  {
    id: "adhan-6",
    arabic: "الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ",
    transliteration: "As-ṣalātu khayrun minan-nawm",
    translation: "Prayer is better than sleep",
    repeat: 2,
    fajrOnly: true,
  },

  {
    id: "adhan-7",
    arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ",
    transliteration: "Allāhu akbar, Allāhu akbar",
    translation: "Allah is the Greatest, Allah is the Greatest",
    repeat: 1,
  },

  {
    id: "adhan-8",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
    transliteration: "Lā ilāha illallāh",
    translation: "There is no god but Allah",
    repeat: 1,
  },
];

// ============================================================
// ADHAN REFERENCE
// ============================================================

export const adhanReference =
  "The wording of the adhan traces to the dream of Abdullah ibn Zayd, confirmed by the Prophet ﷺ and taught to Bilal (Sunan Abi Dawud 499, at-Tirmidhi 189). The Fajr-only line, 'prayer is better than sleep,' was added on the Prophet's ﷺ instruction (Sunan Abi Dawud 500).";

// ============================================================
// DUA AFTER ADHAN
// ============================================================

export const adhanResponseDua = {
  arabic:
    "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",

  transliteration:
    "Allāhumma rabba hādhihid-da'watit-tāmmah, waṣ-ṣalātil-qā'imah, āti Muḥammadanil-wasīlata wal-faḍīlah, wab'ath-hu maqāman maḥmūdanil-ladhī wa'adtah.",

  translation:
    "O Allah, Lord of this perfect call and the established prayer, grant Muhammad the intercession and favor, and raise him to the praiseworthy station You have promised him.",

  reference:
    "Sahih al-Bukhari 614 — said after the muezzin finishes the adhan",
};

// ============================================================
// IQAMA
// ============================================================

export const iqamaLines = [
  {
    id: "iqama-1",
    arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ",
    translation: "Allah is the Greatest, Allah is the Greatest",
    repeat: 1,
  },

  {
    id: "iqama-2",
    arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ",
    translation: "I bear witness that there is no god but Allah",
    repeat: 1,
  },

  {
    id: "iqama-3",
    arabic: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
    translation: "I bear witness that Muhammad is the Messenger of Allah",
    repeat: 1,
  },

  {
    id: "iqama-4",
    arabic: "حَيَّ عَلَى الصَّلَاةِ",
    translation: "Come to prayer",
    repeat: 1,
  },

  {
    id: "iqama-5",
    arabic: "حَيَّ عَلَى الْفَلَاحِ",
    translation: "Come to success",
    repeat: 1,
  },

  {
    id: "iqama-6",
    arabic: "قَدْ قَامَتِ الصَّلَاةُ، قَدْ قَامَتِ الصَّلَاةُ",
    translation: "The prayer has begun, the prayer has begun",
    repeat: 1,
  },

  {
    id: "iqama-7",
    arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ",
    translation: "Allah is the Greatest, Allah is the Greatest",
    repeat: 1,
  },

  {
    id: "iqama-8",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
    translation: "There is no god but Allah",
    repeat: 1,
  },
];

// ============================================================
// IQAMA REFERENCE
// ============================================================

export const iqamaReference =
  "Reported by Anas ibn Malik as taught by the Prophet ﷺ to Bilal (Sahih al-Bukhari 605, Sahih Muslim 378)";