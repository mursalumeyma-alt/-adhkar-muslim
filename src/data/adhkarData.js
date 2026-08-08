// Adhkar data — Arabic text with English translation, repeat counts, and
// authentic references from the Qur'an, Sahih al-Bukhari, Sahih Muslim,
// and other well-established collections (Sunan Abi Dawud, at-Tirmidhi,
// Ibn Majah, al-Muwatta', an-Nasa'i). Qur'anic text and hadith wording
// are classical religious material in the public domain; English
// renderings below are my own paraphrase of the meaning rather than a
// copy of any single published translation.

export const categories = [
  {
    id: "morning",
    icon: "☀️",
    name: "Morning Adhkar",
    nameAr: "أذكار الصباح",
    description: "Remembrances to start the day under Allah's protection",
  },
  {
    id: "evening",
    icon: "🌙",
    name: "Evening Adhkar",
    nameAr: "أذكار المساء",
    description: "Remembrances to close the day in gratitude and safety",
  },
  {
    id: "sleep",
    icon: "🛌",
    name: "Before Sleep",
    nameAr: "أذكار النوم",
    description: "Supplications before resting for the night",
  },
  {
    id: "wakeup",
    icon: "⏰",
    name: "After Waking Up",
    nameAr: "أذكار الاستيقاظ",
    description: "The first words upon opening your eyes",
  },
  {
    id: "before-salah",
    icon: "🕋",
    name: "Before Salah",
    nameAr: "قبل الصلاة",
    description: "The call to prayer and the opening of the prayer itself",
  },
  {
    id: "prayer",
    icon: "🙏",
    name: "After Salah",
    nameAr: "أذكار بعد الصلاة",
    description: "Remembrances following the five daily prayers",
  },
  {
    id: "eating-before",
    icon: "🍽️",
    name: "Before Eating",
    nameAr: "قبل الطعام",
    description: "Beginning a meal in Allah's name",
  },
  {
    id: "eating-after",
    icon: "🍲",
    name: "After Eating",
    nameAr: "بعد الطعام",
    description: "Giving thanks once the meal is finished",
  },
  {
    id: "drinking-before",
    icon: "🥤",
    name: "Before Drinking",
    nameAr: "عند الشرب",
    description: "The etiquette and words of drinking in Allah's name",
  },
  {
    id: "home-entering",
    icon: "🏠",
    name: "Entering the Home",
    nameAr: "دخول المنزل",
    description: "Crossing the threshold with Allah's name and protection",
  },
  {
    id: "home-leaving",
    icon: "🚪",
    name: "Leaving the Home",
    nameAr: "الخروج من المنزل",
    description: "Placing your trust in Allah before stepping out",
  },
  {
    id: "mosque-entering",
    icon: "🕌",
    name: "Entering the Mosque",
    nameAr: "دخول المسجد",
    description: "Asking for the doors of mercy to open",
  },
  {
    id: "mosque-leaving",
    icon: "🕌",
    name: "Leaving the Mosque",
    nameAr: "الخروج من المسجد",
    description: "Asking for Allah's bounty as you depart",
  },
  {
    id: "travel",
    icon: "🧳",
    name: "Travel Duas",
    nameAr: "أذكار السفر",
    description: "Supplications for setting out on a journey",
  },
  {
    id: "travel-return",
    icon: "🏡",
    name: "Returning from Travel",
    nameAr: "دعاء القدوم من السفر",
    description: "Words of thanks and humility upon arriving home",
  },
  {
    id: "new-clothes",
    icon: "👕",
    name: "Wearing New Clothes",
    nameAr: "لبس الثوب الجديد",
    description: "Gratitude for a new garment",
  },
  {
    id: "rain",
    icon: "🌧️",
    name: "Rain",
    nameAr: "عند نزول المطر",
    description: "Supplications for beneficial rain",
  },
  {
    id: "thunder",
    icon: "⛈️",
    name: "Thunder",
    nameAr: "عند سماع الرعد",
    description: "Glorifying Allah at the sound of thunder",
  },
  {
    id: "wind",
    icon: "🌬️",
    name: "Wind",
    nameAr: "عند هبوب الريح",
    description: "Asking for the good of the wind and refuge from its harm",
  },
  {
    id: "illness",
    icon: "🤒",
    name: "Illness",
    nameAr: "أذكار المرض",
    description: "Supplications for one's own sickness and pain",
  },
  {
    id: "visiting-sick",
    icon: "💊",
    name: "Visiting the Sick",
    nameAr: "عيادة المريض",
    description: "Words to say at the bedside of someone unwell",
  },
  {
    id: "protection-shaytan",
    icon: "🛡️",
    name: "Protection from Shaytan",
    nameAr: "الحماية من الشيطان",
    description: "Seeking refuge from whispers and harm",
  },
  {
    id: "evil-eye",
    icon: "🧿",
    name: "Protection from the Evil Eye",
    nameAr: "الحماية من العين",
    description: "Ruqyah and etiquette for warding off envy",
  },
  {
    id: "istighfar",
    icon: "🤲",
    name: "Forgiveness (Istighfar)",
    nameAr: "الاستغفار",
    description: "Turning back to Allah in repentance",
  },
  {
    id: "shukr",
    icon: "🌸",
    name: "Gratitude (Shukr)",
    nameAr: "الشكر",
    description: "Giving thanks in every circumstance",
  },
  {
    id: "rizq",
    icon: "💰",
    name: "Rizq & Provision",
    nameAr: "الرزق",
    description: "Seeking lawful, sufficient, and blessed provision",
  },
  {
    id: "parents",
    icon: "👨‍👩‍👧",
    name: "Parents",
    nameAr: "الوالدين",
    description: "Mercy and forgiveness for one's mother and father",
  },
  {
    id: "children",
    icon: "🧒",
    name: "Children",
    nameAr: "الأولاد",
    description: "Protection and righteousness for one's children",
  },
  {
    id: "marriage",
    icon: "💍",
    name: "Marriage",
    nameAr: "الزواج",
    description: "Blessings for a couple beginning married life",
  },
  {
    id: "seeking-knowledge",
    icon: "📚",
    name: "Seeking Knowledge",
    nameAr: "طلب العلم",
    description: "Asking Allah to increase and benefit you with knowledge",
  },
  {
    id: "exams",
    icon: "✍️",
    name: "Exams",
    nameAr: "أذكار الامتحان",
    description: "Ease, clarity, and calm before a test",
  },
  {
    id: "distress",
    icon: "💭",
    name: "Anxiety & Sadness",
    nameAr: "الهم والحزن",
    description: "Supplications for times of worry and hardship",
  },
  {
    id: "patience",
    icon: "⏳",
    name: "Patience",
    nameAr: "الصبر",
    description: "Steadfastness in the face of difficulty and loss",
  },
  {
    id: "hajj-umrah",
    icon: "🕋",
    name: "Hajj & Umrah",
    nameAr: "الحج والعمرة",
    description: "The Talbiyah and supplications of pilgrimage",
  },
  {
    id: "ramadan",
    icon: "🌙",
    name: "Ramadan",
    nameAr: "رمضان",
    description: "Breaking the fast and seeking the Night of Decree",
  },
  {
    id: "friday",
    icon: "🕌",
    name: "Friday Adhkar",
    nameAr: "أذكار يوم الجمعة",
    description: "The blessed weekly practices of the believer's best day",
  },
  {
    id: "general",
    icon: "✨",
    name: "General Duas",
    nameAr: "أدعية عامة",
    description: "Comprehensive supplications for everyday life",
  },
  {
    id: "istikhara",
    icon: "🌟",
    name: "Istikhara",
    nameAr: "صلاة الاستخارة",
    description: "Seeking Allah's guidance in a decision",
  },
  {
    id: "wudu",
    icon: "💧",
    name: "Wudu",
    nameAr: "الوضوء",
    description: "Words for beginning and completing ablution",
  },
  {
    id: "pregnancy",
    icon: "🤰",
    name: "Du'as for Pregnancy",
    nameAr: "أدعية الحمل",
    description: "Supplications for a righteous, protected child",
  },
  {
    id: "after-burial",
    icon: "🕊️",
    name: "Du'a for the Deceased After Burial",
    nameAr: "الدعاء للميت بعد الدفن",
    description: "Words at the graveside once burial is complete",
  },
];

// Each dhikr: id, category, arabic, translation, transliteration (optional),
// repeat (default recitation count), reference
export const adhkarData = [
  // ============================================================
  // MORNING
  // ============================================================
  {
    id: "morning-ayatul-kursi",
    category: "morning",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration:
      "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm. Lā ta'khudhuhu sinatun wa lā nawm. Lahu mā fis-samāwāti wa mā fil-arḍ. Man dhal-ladhī yashfa'u 'indahu illā bi-idhnih. Wasi'a kursiyyuhus-samāwāti wal-arḍ, wa lā ya'ūduhu ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm.",
    translation:
      "Ayatul Kursi — Allah, there is no god but Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him. To Him belongs all that is in the heavens and the earth. Who can intercede with Him except by His permission? His Throne extends over the heavens and the earth, and preserving them does not tire Him. He is the Most High, the Most Great.",
    repeat: 1,
    reference: "Qur'an 2:255 — the greatest verse in the Qur'an (Sahih Muslim 810)",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002255.mp3"],
  },
  {
    id: "morning-last-two-baqarah",
    category: "morning",
    arabic:
      "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Āmanar-rasūlu bimā unzila ilayhi mir-rabbihī wal-mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim-mir-rusulih, wa qālū sami'nā wa aṭa'nā, ghufrānaka rabbanā wa ilaykal-maṣīr. Lā yukallifullāhu nafsan illā wus'ahā, lahā mā kasabat wa 'alayhā mak-tasabat. Rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā, rabbanā wa lā taḥmil 'alaynā iṣran kamā ḥamaltahū 'alal-ladhīna min qablinā, rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, wa'fu 'annā, waghfir lanā, warḥamnā, anta mawlānā fanṣurnā 'alal-qawmil-kāfirīn.",
    translation:
      "The last two verses of Surah al-Baqarah (2:285–286) — The Messenger has believed in what was sent down to him from his Lord, and so have the believers. Each one believes in Allah, His angels, His books, and His messengers — we make no distinction between any of His messengers. And they say: We hear and we obey; grant us Your forgiveness, our Lord, for to You is the final return. Allah does not burden any soul beyond what it can bear; it will have what it has earned, and it will bear what it has done. Our Lord, do not hold us accountable if we forget or make a mistake. Our Lord, do not place upon us a burden like that which You placed on those before us. Our Lord, do not burden us with more than we have strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so grant us victory over the disbelieving people.",
    repeat: 1,
    reference: "Qur'an 2:285–286 (Sahih al-Bukhari 4008, Sahih Muslim 807)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/002285.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/002286.mp3",
    ],
  },
  {
    id: "morning-quls-ikhlas",
    category: "morning",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration: "Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad.",
    translation:
      "Surah Al-Ikhlas — Say: He is Allah, the One. Allah, the Eternal Refuge. He begets not, nor was He begotten. And there is none comparable to Him.",
    repeat: 3,
    reference: "Qur'an 112 (Sunan Abi Dawud 5082, at-Tirmidhi 3575)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/112001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112004.mp3",
    ],
  },
  {
    id: "morning-quls-falaq",
    category: "morning",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration:
      "Qul a'ūdhu birabbil-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharrin-naffāthāti fil-'uqad. Wa min sharri ḥāsidin idhā ḥasad.",
    translation:
      "Surah Al-Falaq — Say: I seek refuge in the Lord of the daybreak, from the evil of what He has created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.",
    repeat: 3,
    reference: "Qur'an 113 (Sunan Abi Dawud 5082, at-Tirmidhi 3575)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/113001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113004.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113005.mp3",
    ],
  },
  {
    id: "morning-quls-nas",
    category: "morning",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration:
      "Qul a'ūdhu birabbin-nās. Malikin-nās. Ilāhin-nās. Min sharril-waswāsil-khannās. Alladhī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
    translation:
      "Surah An-Nas — Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the hearts of mankind, from among the jinn and mankind.",
    repeat: 3,
    reference: "Qur'an 114 (Sunan Abi Dawud 5082, at-Tirmidhi 3575)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/114001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114004.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114005.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114006.mp3",
    ],
  },
  {
    id: "morning-1",
    category: "morning",
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    translation:
      "We have entered a new morning and with it all dominion belongs to Allah. Praise is to Allah; there is no god but Allah alone, without partner. To Him belongs dominion, to Him belongs all praise, and He is capable of all things.",
    repeat: 1,
    reference: "Sahih Muslim 2723",
  },
  {
    id: "morning-2",
    category: "morning",
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    translation:
      "O Allah, by You we enter the morning, by You we enter the evening, by You we live, by You we die, and to You is the resurrection.",
    repeat: 1,
    reference: "Sunan al-Tirmidhi 3391",
  },
  {
    id: "morning-3",
    category: "morning",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    translation:
      "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.",
    repeat: 1,
    reference: "Sahih al-Bukhari 6306 — Sayyid al-Istighfar (the master of seeking forgiveness)",
  },
  {
    id: "morning-4",
    category: "morning",
    arabic:
      "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    translation:
      "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5072",
  },
  {
    id: "morning-5",
    category: "morning",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    translation:
      "In the name of Allah, with whose name nothing on earth or in the heavens can cause harm, and He is the All-Hearing, the All-Knowing.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5088, at-Tirmidhi 3388",
  },
  {
    id: "morning-6",
    category: "morning",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    translation: "Glory is to Allah and praise is to Him.",
    repeat: 100,
    reference: "Sahih al-Bukhari 6405, Sahih Muslim 2691",
  },
  {
    id: "morning-7",
    category: "morning",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    translation:
      "There is no god but Allah alone, without partner. To Him belongs dominion, to Him belongs all praise, and He is capable of all things.",
    repeat: 10,
    reference: "Sahih al-Bukhari 3293, Sahih Muslim 2691",
  },
  {
    id: "morning-8",
    category: "morning",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    translation:
      "O Allah, I ask You for well-being in this world and the Hereafter.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5074",
  },
  {
    id: "morning-9",
    category: "morning",
    arabic:
      "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    translation:
      "Allah is sufficient for me; there is no god but Him. Upon Him I rely, and He is Lord of the Mighty Throne.",
    repeat: 7,
    reference: "Sunan Abi Dawud 5081",
  },
  {
    id: "morning-10",
    category: "morning",
    arabic:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    translation:
      "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no god but You.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5090",
  },
  {
    id: "morning-11",
    category: "morning",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
    translation:
      "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is no god but You.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5090",
  },
  {
    id: "morning-12",
    category: "morning",
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    translation:
      "O Ever-Living, O Sustainer, by Your mercy I seek help. Set right all my affairs, and do not leave me to myself even for the blink of an eye.",
    repeat: 1,
    reference: "An-Nasa'i, 'Amal al-Yawm wal-Laylah, graded sahih by al-Albani",
  },
  {
    id: "morning-13",
    category: "morning",
    arabic:
      "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    translation:
      "O Allah, I have entered this morning and call You to witness, and I call to witness the bearers of Your Throne, Your angels, and all Your creation, that You are Allah — there is no god but You alone, without partner — and that Muhammad is Your servant and Your Messenger.",
    repeat: 4,
    reference: "Sunan Abi Dawud 5069, at-Tirmidhi 3501",
  },
  {
    id: "morning-14",
    category: "morning",
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    translation:
      "Glory and praise be to Allah, as many times as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.",
    repeat: 3,
    reference: "Sahih Muslim 2726",
  },
  {
    id: "morning-15",
    category: "morning",
    arabic:
      "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ",
    translation:
      "O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that there is no god but You. I seek refuge in You from the evil of my own soul, and from the evil of Shaytan and his enticement to associate partners with You.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5067, at-Tirmidhi 3392",
  },
  {
    id: "morning-16",
    category: "morning",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    translation:
      "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
    repeat: 1,
    reference: "Sunan Ibn Majah 925 — recited by the Prophet ﷺ upon the salam of the Fajr prayer",
  },
  {
    id: "morning-17",
    category: "morning",
    arabic:
      "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الْأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الْآخِرَةِ",
    translation:
      "O Allah, make good the outcome of all our affairs, and save us from the disgrace of this world and the punishment of the Hereafter.",
    repeat: 1,
    reference: "Musnad Ahmad 4/181, Sahih Ibn Hibban 949, Mustadrak al-Hakim 3/591",
  },
  {
    id: "morning-18",
    category: "morning",
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allāhumma ṣalli 'alā Muḥammadin wa 'alā āli Muḥammadin kamā ṣallayta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik 'alā Muḥammadin wa 'alā āli Muḥammadin kamā bārakta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, innaka Ḥamīdun Majīd.",
    translation:
      "O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim — You are Praiseworthy, Glorious. O Allah, send grace upon Muhammad and the family of Muhammad, as You sent grace upon Ibrahim and the family of Ibrahim — You are Praiseworthy, Glorious.",
    repeat: 10,
    reference:
      "Salah al-Ibrahimiyyah (Sahih al-Bukhari 3370, Sahih Muslim 406). Reciting it ten times in the morning and ten in the evening is recommended in a hadith graded jayyid by al-Haythami (al-Tabarani, al-Mu'jam al-Kabir; Majma' al-Zawa'id 10/120)",
  },

  // ============================================================
  // EVENING
  // ============================================================
  {
    id: "evening-ayatul-kursi",
    category: "evening",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration:
      "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm. Lā ta'khudhuhu sinatun wa lā nawm. Lahu mā fis-samāwāti wa mā fil-arḍ. Wasi'a kursiyyuhus-samāwāti wal-arḍ, wa lā ya'ūduhu ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm.",
    translation:
      "Ayatul Kursi — Allah, there is no god but Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him. To Him belongs all that is in the heavens and the earth. His Throne extends over the heavens and the earth, and preserving them does not tire Him. He is the Most High, the Most Great.",
    repeat: 1,
    reference: "Qur'an 2:255 — a guardian from Allah stays with whoever recites it until morning (Sahih al-Bukhari 2311)",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002255.mp3"],
  },
  {
    id: "evening-last-two-baqarah",
    category: "evening",
    arabic:
      "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Āmanar-rasūlu bimā unzila ilayhi mir-rabbihī wal-mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim-mir-rusulih, wa qālū sami'nā wa aṭa'nā, ghufrānaka rabbanā wa ilaykal-maṣīr. Lā yukallifullāhu nafsan illā wus'ahā, lahā mā kasabat wa 'alayhā mak-tasabat. Rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā, rabbanā wa lā taḥmil 'alaynā iṣran kamā ḥamaltahū 'alal-ladhīna min qablinā, rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, wa'fu 'annā, waghfir lanā, warḥamnā, anta mawlānā fanṣurnā 'alal-qawmil-kāfirīn.",
    translation:
      "The last two verses of Surah al-Baqarah (2:285–286) — The Messenger has believed in what was sent down to him from his Lord, and so have the believers. Each one believes in Allah, His angels, His books, and His messengers — we make no distinction between any of His messengers. And they say: We hear and we obey; grant us Your forgiveness, our Lord, for to You is the final return. Allah does not burden any soul beyond what it can bear; it will have what it has earned, and it will bear what it has done. Our Lord, do not hold us accountable if we forget or make a mistake. Our Lord, do not place upon us a burden like that which You placed on those before us. Our Lord, do not burden us with more than we have strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so grant us victory over the disbelieving people. A nightly recitation the Prophet ﷺ said would be sufficient for whoever recites it.",
    repeat: 1,
    reference: "Qur'an 2:285–286 (Sahih al-Bukhari 4008, Sahih Muslim 807)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/002285.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/002286.mp3",
    ],
  },
  {
    id: "evening-quls-ikhlas",
    category: "evening",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration: "Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad.",
    translation:
      "Surah Al-Ikhlas — Say: He is Allah, the One. Allah, the Eternal Refuge. He begets not, nor was He begotten. And there is none comparable to Him.",
    repeat: 3,
    reference: "Qur'an 112 (Sunan Abi Dawud 5082, at-Tirmidhi 3575)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/112001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112004.mp3",
    ],
  },
  {
    id: "evening-quls-falaq",
    category: "evening",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration:
      "Qul a'ūdhu birabbil-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharrin-naffāthāti fil-'uqad. Wa min sharri ḥāsidin idhā ḥasad.",
    translation:
      "Surah Al-Falaq — Say: I seek refuge in the Lord of the daybreak, from the evil of what He has created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.",
    repeat: 3,
    reference: "Qur'an 113 (Sunan Abi Dawud 5082, at-Tirmidhi 3575)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/113001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113004.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113005.mp3",
    ],
  },
  {
    id: "evening-quls-nas",
    category: "evening",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration:
      "Qul a'ūdhu birabbin-nās. Malikin-nās. Ilāhin-nās. Min sharril-waswāsil-khannās. Alladhī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
    translation:
      "Surah An-Nas — Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the hearts of mankind, from among the jinn and mankind.",
    repeat: 3,
    reference: "Qur'an 114 (Sunan Abi Dawud 5082, at-Tirmidhi 3575)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/114001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114004.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114005.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114006.mp3",
    ],
  },
  {
    id: "evening-1",
    category: "evening",
    arabic:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    translation:
      "We have entered the evening and with it all dominion belongs to Allah. Praise is to Allah; there is no god but Allah alone, without partner. To Him belongs dominion, to Him belongs all praise, and He is capable of all things.",
    repeat: 1,
    reference: "Sahih Muslim 2723",
  },
  {
    id: "evening-2",
    category: "evening",
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    translation:
      "O Allah, by You we enter the evening, by You we enter the morning, by You we live, by You we die, and to You is the return.",
    repeat: 1,
    reference: "Sunan al-Tirmidhi 3391",
  },
  {
    id: "evening-3",
    category: "evening",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    translation:
      "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.",
    repeat: 1,
    reference: "Sahih al-Bukhari 6306 — Sayyid al-Istighfar",
  },
  {
    id: "evening-4",
    category: "evening",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    translation:
      "I seek refuge in the perfect words of Allah from the evil of what He has created.",
    repeat: 3,
    reference: "Sahih Muslim 2709",
  },
  {
    id: "evening-5",
    category: "evening",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    translation: "Glory is to Allah and praise is to Him.",
    repeat: 100,
    reference: "Sahih al-Bukhari 6405, Sahih Muslim 2691",
  },
  {
    id: "evening-6",
    category: "evening",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
    translation:
      "O Allah, I ask You for pardon and well-being in this world and the Hereafter.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5074",
  },
  {
    id: "evening-7",
    category: "evening",
    arabic:
      "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
    translation:
      "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5072",
  },
  {
    id: "evening-8",
    category: "evening",
    arabic:
      "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    translation:
      "Allah is sufficient for me; there is no god but Him. Upon Him I rely, and He is Lord of the Mighty Throne.",
    repeat: 7,
    reference: "Sunan Abi Dawud 5081",
  },
  {
    id: "evening-9",
    category: "evening",
    arabic:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    translation:
      "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no god but You.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5090",
  },
  {
    id: "evening-10",
    category: "evening",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
    translation:
      "O Allah, I seek refuge in You from disbelief and poverty, and I seek refuge in You from the punishment of the grave. There is no god but You.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5090",
  },
  {
    id: "evening-11",
    category: "evening",
    arabic:
      "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    translation:
      "O Ever-Living, O Sustainer, by Your mercy I seek help. Set right all my affairs, and do not leave me to myself even for the blink of an eye.",
    repeat: 1,
    reference: "An-Nasa'i, 'Amal al-Yawm wal-Laylah, graded sahih by al-Albani",
  },
  {
    id: "evening-12",
    category: "evening",
    arabic:
      "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    translation:
      "O Allah, I have entered this evening and call You to witness, and I call to witness the bearers of Your Throne, Your angels, and all Your creation, that You are Allah — there is no god but You alone, without partner — and that Muhammad is Your servant and Your Messenger.",
    repeat: 4,
    reference: "Sunan Abi Dawud 5069, at-Tirmidhi 3501",
  },
  {
    id: "evening-13",
    category: "evening",
    arabic:
      "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    translation:
      "Glory and praise be to Allah, as many times as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.",
    repeat: 3,
    reference: "Sahih Muslim 2726",
  },
  {
    id: "evening-14",
    category: "evening",
    arabic:
      "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ",
    translation:
      "O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, Lord and Sovereign of all things, I bear witness that there is no god but You. I seek refuge in You from the evil of my own soul, and from the evil of Shaytan and his enticement to associate partners with You.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5067, at-Tirmidhi 3392",
  },
  {
    id: "evening-15",
    category: "evening",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    translation:
      "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
    repeat: 1,
    reference: "Sunan Ibn Majah 925",
  },
  {
    id: "evening-16",
    category: "evening",
    arabic:
      "اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الْأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الْآخِرَةِ",
    translation:
      "O Allah, make good the outcome of all our affairs, and save us from the disgrace of this world and the punishment of the Hereafter.",
    repeat: 1,
    reference: "Musnad Ahmad 4/181, Sahih Ibn Hibban 949, Mustadrak al-Hakim 3/591",
  },
  {
    id: "evening-17",
    category: "evening",
    arabic:
      "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration:
      "Allāhumma ṣalli 'alā Muḥammadin wa 'alā āli Muḥammadin kamā ṣallayta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, innaka Ḥamīdun Majīd. Allāhumma bārik 'alā Muḥammadin wa 'alā āli Muḥammadin kamā bārakta 'alā Ibrāhīma wa 'alā āli Ibrāhīm, innaka Ḥamīdun Majīd.",
    translation:
      "O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim — You are Praiseworthy, Glorious. O Allah, send grace upon Muhammad and the family of Muhammad, as You sent grace upon Ibrahim and the family of Ibrahim — You are Praiseworthy, Glorious.",
    repeat: 10,
    reference:
      "Salah al-Ibrahimiyyah (Sahih al-Bukhari 3370, Sahih Muslim 406). Reciting it ten times in the morning and ten in the evening is recommended in a hadith graded jayyid by al-Haythami (al-Tabarani, al-Mu'jam al-Kabir; Majma' al-Zawa'id 10/120)",
  },

  // ============================================================
  // BEFORE SLEEP
  // ============================================================
  {
    id: "sleep-ayatul-kursi",
    category: "sleep",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration:
      "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūm. Lā ta'khudhuhu sinatun wa lā nawm. Lahu mā fis-samāwāti wa mā fil-arḍ. Wasi'a kursiyyuhus-samāwāti wal-arḍ, wa lā ya'ūduhu ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm.",
    translation:
      "Ayatul Kursi — Allah, there is no god but Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness nor sleep overtakes Him. His Throne extends over the heavens and the earth, and preserving them does not tire Him. He is the Most High, the Most Great.",
    repeat: 1,
    reference: "Qur'an 2:255 — a guardian from Allah stays with whoever recites it before sleep until morning (Sahih al-Bukhari 2311)",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002255.mp3"],
  },
  {
    id: "sleep-last-two-baqarah",
    category: "sleep",
    arabic:
      "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    transliteration:
      "Āmanar-rasūlu bimā unzila ilayhi mir-rabbihī wal-mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim-mir-rusulih, wa qālū sami'nā wa aṭa'nā, ghufrānaka rabbanā wa ilaykal-maṣīr. Lā yukallifullāhu nafsan illā wus'ahā, lahā mā kasabat wa 'alayhā mak-tasabat. Rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā, rabbanā wa lā taḥmil 'alaynā iṣran kamā ḥamaltahū 'alal-ladhīna min qablinā, rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, wa'fu 'annā, waghfir lanā, warḥamnā, anta mawlānā fanṣurnā 'alal-qawmil-kāfirīn.",
    translation:
      "The last two verses of Surah al-Baqarah (2:285–286) — The Messenger has believed in what was sent down to him from his Lord, and so have the believers. Each one believes in Allah, His angels, His books, and His messengers — we make no distinction between any of His messengers. And they say: We hear and we obey; grant us Your forgiveness, our Lord, for to You is the final return. Allah does not burden any soul beyond what it can bear; it will have what it has earned, and it will bear what it has done. Our Lord, do not hold us accountable if we forget or make a mistake. Our Lord, do not place upon us a burden like that which You placed on those before us. Our Lord, do not burden us with more than we have strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so grant us victory over the disbelieving people. The Prophet ﷺ said whoever recites them at night, they will be sufficient for him.",
    repeat: 1,
    reference: "Qur'an 2:285–286 (Sahih al-Bukhari 4008, Sahih Muslim 807)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/002285.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/002286.mp3",
    ],
  },
  {
    id: "sleep-quls-ikhlas",
    category: "sleep",
    arabic:
      "قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration: "Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa lam yakul-lahū kufuwan aḥad.",
    translation:
      "Surah Al-Ikhlas — Say: He is Allah, the One. Allah, the Eternal Refuge. He begets not, nor was He begotten. And there is none comparable to Him.",
    repeat: 3,
    reference:
      "Qur'an 112 — recited with Al-Falaq and An-Nas before sleep, blowing into the cupped hands and wiping over the body (Sahih al-Bukhari 5017)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/112001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/112004.mp3",
    ],
  },
  {
    id: "sleep-quls-falaq",
    category: "sleep",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration:
      "Qul a'ūdhu birabbil-falaq. Min sharri mā khalaq. Wa min sharri ghāsiqin idhā waqab. Wa min sharrin-naffāthāti fil-'uqad. Wa min sharri ḥāsidin idhā ḥasad.",
    translation:
      "Surah Al-Falaq — Say: I seek refuge in the Lord of the daybreak, from the evil of what He has created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.",
    repeat: 3,
    reference: "Qur'an 113 (Sahih al-Bukhari 5017)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/113001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113004.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/113005.mp3",
    ],
  },
  {
    id: "sleep-quls-nas",
    category: "sleep",
    arabic:
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration:
      "Qul a'ūdhu birabbin-nās. Malikin-nās. Ilāhin-nās. Min sharril-waswāsil-khannās. Alladhī yuwaswisu fī ṣudūrin-nās. Minal-jinnati wan-nās.",
    translation:
      "Surah An-Nas — Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the hearts of mankind, from among the jinn and mankind.",
    repeat: 3,
    reference: "Qur'an 114 (Sahih al-Bukhari 5017)",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/114001.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114002.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114003.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114004.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114005.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/114006.mp3",
    ],
  },
  {
    id: "sleep-1",
    category: "sleep",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    translation: "In Your name, O Allah, I die and I live.",
    repeat: 1,
    reference: "Sahih al-Bukhari 6324",
  },
  {
    id: "sleep-2",
    category: "sleep",
    arabic: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    translation:
      "O Allah, protect me from Your punishment on the Day You resurrect Your servants.",
    repeat: 3,
    reference: "Sunan Abi Dawud 5045, at-Tirmidhi 3398",
  },
  {
    id: "sleep-3",
    category: "sleep",
    arabic: "سُبْحَانَ اللَّهِ (٣٣) وَالْحَمْدُ لِلَّهِ (٣٣) وَاللَّهُ أَكْبَرُ (٣٤)",
    translation:
      "Glory is to Allah (33 times), Praise is to Allah (33 times), Allah is the Greatest (34 times).",
    repeat: 1,
    reference: "Sahih al-Bukhari 5362, Sahih Muslim 2727",
  },
  {
    id: "sleep-4",
    category: "sleep",
    arabic:
      "اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَرَبَّ الْأَرْضِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنَزِّلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ",
    translation:
      "O Allah, Lord of the seven heavens and Lord of the earth, our Lord and Lord of everything, Splitter of the seed and the date-stone, Sender-down of the Torah, the Gospel, and the Criterion, I seek refuge in You from the evil of everything You hold by its forelock.",
    repeat: 1,
    reference: "Sahih Muslim 2713",
  },
  {
    id: "sleep-5",
    category: "sleep",
    arabic:
      "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
    translation:
      "O Allah, I submit myself to You, I entrust my affair to You, I turn my face toward You, and I lean my back on You, in hope and in fear of You. There is no refuge nor safety from You except with You. I believe in Your Book which You revealed, and in Your Prophet whom You sent.",
    repeat: 1,
    reference:
      "Sahih al-Bukhari 247, Sahih Muslim 2710 — the Prophet ﷺ said whoever dies that night dies upon the natural state of faith",
  },

  // ============================================================
  // AFTER WAKING UP
  // ============================================================
  {
    id: "wakeup-1",
    category: "wakeup",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    translation:
      "Praise is to Allah who gave us life after having caused us to die, and to Him is the resurrection.",
    repeat: 1,
    reference: "Sahih al-Bukhari 6312",
  },
  {
    id: "wakeup-2",
    category: "wakeup",
    arabic:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    translation:
      "There is no god but Allah alone, without partner. To Him belongs dominion and praise, and He is capable of all things. Glory is to Allah, praise is to Allah, there is no god but Allah, Allah is the Greatest, and there is no power nor strength except with Allah.",
    repeat: 1,
    reference: "Sahih al-Bukhari 1154",
  },
  {
    id: "wakeup-3",
    category: "wakeup",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ",
    translation:
      "O Allah, I seek refuge in You from laziness and the worst of old age.",
    repeat: 1,
    reference: "Sahih al-Bukhari 6370",
  },

  // ============================================================
  // BEFORE SALAH
  // ============================================================
  {
    id: "before-salah-1",
    category: "before-salah",
    arabic:
      "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ",
    translation:
      "O Allah, Lord of this perfect call and the established prayer, grant Muhammad the intercession and favor, and raise him to the praiseworthy station You have promised him.",
    repeat: 1,
    reference: "Sahih al-Bukhari 614 — said after hearing the adhan",
  },
  {
    id: "before-salah-2",
    category: "before-salah",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    translation:
      "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    repeat: 1,
    reference:
      "Qur'an 2:201 — a fitting dua in the window between the adhan and the iqamah, which the Prophet ﷺ said is not turned away (Sunan Abi Dawud 521, at-Tirmidhi 212)",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002201.mp3"],
  },
  {
    id: "before-salah-3",
    category: "before-salah",
    arabic:
      "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
    translation:
      "Glory is to You, O Allah, and praise is to You. Blessed is Your name, exalted is Your majesty, and there is no god besides You.",
    repeat: 1,
    reference: "Sunan Abi Dawud 775, at-Tirmidhi 243 — the opening (istiftah) supplication of the prayer",
  },

  // ============================================================
  // AFTER SALAH
  // ============================================================
  {
    id: "prayer-1",
    category: "prayer",
    arabic:
      "أَسْتَغْفِرُ اللَّهَ (٣ مرات) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    translation:
      "I seek Allah's forgiveness (3 times). O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of majesty and honor.",
    repeat: 1,
    reference: "Sahih Muslim 591",
  },
  {
    id: "prayer-2",
    category: "prayer",
    arabic:
      "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    translation:
      "There is no god but Allah alone, without partner. To Him belongs dominion and praise, and He is capable of all things. O Allah, none can withhold what You give, and none can give what You withhold, and the might of the mighty cannot benefit them against You.",
    repeat: 1,
    reference: "Sahih al-Bukhari 844, Sahih Muslim 593",
  },
  {
    id: "prayer-3",
    category: "prayer",
    arabic: "سُبْحَانَ اللَّهِ (٣٣) وَالْحَمْدُ لِلَّهِ (٣٣) وَاللَّهُ أَكْبَرُ (٣٣) ثُمَّ يَقُولُ تَمَامَ الْمِائَةِ: لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    translation:
      "Glory is to Allah (33 times), Praise is to Allah (33 times), Allah is the Greatest (33 times), then to complete one hundred: there is no god but Allah alone, without partner.",
    repeat: 1,
    reference: "Sahih Muslim 597",
  },
  {
    id: "prayer-4",
    category: "prayer",
    arabic:
      "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    translation:
      "O Allah, help me to remember You, to thank You, and to worship You in the best manner.",
    repeat: 1,
    reference: "Sunan Abi Dawud 1522",
  },

  // ============================================================
  // BEFORE EATING
  // ============================================================
  {
    id: "eating-before-1",
    category: "eating-before",
    arabic: "بِسْمِ اللَّهِ",
    translation: "In the name of Allah.",
    repeat: 1,
    reference: "Sunan Abi Dawud 3767, at-Tirmidhi 1858",
  },
  {
    id: "eating-before-2",
    category: "eating-before",
    arabic: "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ",
    translation:
      "In the name of Allah, at its beginning and its end — said upon remembering, if you forgot to say Bismillah when you started.",
    repeat: 1,
    reference: "Sunan Abi Dawud 3767, at-Tirmidhi 1858",
  },

  // ============================================================
  // AFTER EATING
  // ============================================================
  {
    id: "eating-after-1",
    category: "eating-after",
    arabic:
      "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    translation:
      "Praise is to Allah who fed me this and provided it for me without any power or ability on my part.",
    repeat: 1,
    reference: "Sunan Abi Dawud 4023, at-Tirmidhi 3458",
  },
  {
    id: "eating-after-2",
    category: "eating-after",
    arabic:
      "الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا",
    translation:
      "Praise is to Allah, abundant, good, and blessed praise, that is not sufficient, nor unaccompanied, nor unneeded — our Lord.",
    repeat: 1,
    reference: "Sahih al-Bukhari 5458",
  },

  // ============================================================
  // BEFORE DRINKING
  // ============================================================
  {
    id: "drinking-before-1",
    category: "drinking-before",
    arabic: "بِسْمِ اللَّهِ",
    translation:
      "In the name of Allah — said before drinking, as with eating; the Prophet ﷺ also taught drinking in three unhurried sips rather than one breath, and not breathing into the vessel.",
    repeat: 1,
    reference: "Sahih al-Bukhari 5631, Sahih Muslim 2028",
  },
  {
    id: "drinking-before-2",
    category: "drinking-before",
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ",
    translation:
      "O Allah, bless us in it and give us more of it — the Prophet's ﷺ specific dua for milk, extended by many scholars to any drink offered as provision.",
    repeat: 1,
    reference: "Sunan al-Tirmidhi 3455",
  },
  {
    id: "drinking-after-1",
    category: "drinking-before",
    arabic: "الْحَمْدُ لِلَّهِ",
    translation:
      "Praise is to Allah — the Prophet ﷺ said Allah is pleased with a servant who eats or drinks something and praises Him for it.",
    repeat: 1,
    reference: "Sahih Muslim 2734",
  },

  // ============================================================
  // ENTERING THE HOME
  // ============================================================
  {
    id: "home-entering-1",
    category: "home-entering",
    arabic:
      "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا",
    translation:
      "In the name of Allah we enter, in the name of Allah we leave, and upon Allah our Lord we place our trust — then greet those inside with salam.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5096",
  },
  {
    id: "home-entering-2",
    category: "home-entering",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ",
    translation:
      "O Allah, I ask You for the good of this entrance and the good of this exit.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5096",
  },

  // ============================================================
  // LEAVING THE HOME
  // ============================================================
  {
    id: "home-leaving-1",
    category: "home-leaving",
    arabic:
      "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    translation:
      "In the name of Allah, I place my trust in Allah; there is no might and no power except with Allah.",
    repeat: 1,
    reference:
      "Sunan Abi Dawud 5095, at-Tirmidhi 3426 — it is then said to him: you are guided, defended, and protected, and the devils turn away from him",
  },

  // ============================================================
  // ENTERING THE MOSQUE
  // ============================================================
  {
    id: "mosque-entering-1",
    category: "mosque-entering",
    arabic:
      "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    translation:
      "In the name of Allah, and blessings and peace be upon the Messenger of Allah. O Allah, open the doors of Your mercy for me.",
    repeat: 1,
    reference: "Sunan Abi Dawud 465, Sahih Muslim 713",
  },

  // ============================================================
  // LEAVING THE MOSQUE
  // ============================================================
  {
    id: "mosque-leaving-1",
    category: "mosque-leaving",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    translation: "O Allah, I ask You from Your bounty.",
    repeat: 1,
    reference: "Sahih Muslim 713",
  },

  // ============================================================
  // TRAVEL DUAS
  // ============================================================
  {
    id: "travel-1",
    category: "travel",
    arabic:
      "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    translation:
      "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory is to the One who has placed this at our service, and we ourselves would not have been capable of that, and to our Lord we shall return.",
    repeat: 1,
    reference: "Sahih Muslim 1342",
  },
  {
    id: "travel-2",
    category: "travel",
    arabic:
      "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ",
    translation:
      "O Allah, we ask You on this journey of ours for righteousness and piety, and for deeds that please You. O Allah, make this journey easy for us and fold up its distance for us.",
    repeat: 1,
    reference: "Sahih Muslim 1342",
  },
  {
    id: "travel-3",
    category: "travel",
    arabic: "اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ",
    translation:
      "O Allah, You are the Companion on the journey and the Guardian of the family left behind.",
    repeat: 1,
    reference: "Sahih Muslim 1342",
  },

  // ============================================================
  // RETURNING FROM TRAVEL
  // ============================================================
  {
    id: "travel-return-1",
    category: "travel-return",
    arabic: "آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ",
    translation:
      "We return, repenting, worshipping, and praising our Lord — said along with the same takbir recited when setting out, upon arriving home.",
    repeat: 1,
    reference: "Sahih al-Bukhari 1797, Sahih Muslim 1344",
  },

  // ============================================================
  // WEARING NEW CLOTHES
  // ============================================================
  {
    id: "new-clothes-1",
    category: "new-clothes",
    arabic:
      "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ",
    translation:
      "O Allah, all praise is due to You, You have clothed me with this. I ask You for its good and the good of what it was made for, and I seek refuge in You from its evil and the evil of what it was made for.",
    repeat: 1,
    reference: "Sunan Abi Dawud 4020",
  },

  // ============================================================
  // RAIN
  // ============================================================
  {
    id: "rain-1",
    category: "rain",
    arabic: "اللَّهُمَّ صَيِّبًا نَافِعًا",
    translation: "O Allah, make it a beneficial downpour.",
    repeat: 1,
    reference: "Sahih al-Bukhari 1032",
  },
  {
    id: "rain-2",
    category: "rain",
    arabic:
      "اللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اللَّهُمَّ عَلَى الْآكَامِ وَالظِّرَابِ، وَبُطُونِ الْأَوْدِيَةِ، وَمَنَابِتِ الشَّجَرِ",
    translation:
      "O Allah, let the rain fall around us and not upon us — O Allah, on the hillocks, the valley bottoms, and the places where trees grow — said when rain becomes too heavy.",
    repeat: 1,
    reference: "Sahih al-Bukhari 1014",
  },
  {
    id: "rain-3",
    category: "rain",
    arabic: "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
    translation: "We have been given rain by the grace and mercy of Allah.",
    repeat: 1,
    reference: "Sahih al-Bukhari 846, Sahih Muslim 71",
  },

  // ============================================================
  // THUNDER
  // ============================================================
  {
    id: "thunder-1",
    category: "thunder",
    arabic: "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",
    translation:
      "Glory is to Him whom the thunder and the angels glorify due to their awe of Him.",
    repeat: 1,
    reference: "Al-Muwatta' of Imam Malik 2:992 — the practice of Abdullah ibn al-Zubair",
  },

  // ============================================================
  // WIND
  // ============================================================
  {
    id: "wind-1",
    category: "wind",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ",
    translation:
      "O Allah, I ask You for its good, the good that is in it, and the good it was sent with; and I seek refuge in You from its evil, the evil that is in it, and the evil it was sent with.",
    repeat: 1,
    reference: "Sahih Muslim 899",
  },

  // ============================================================
  // ILLNESS
  // ============================================================
  {
    id: "illness-1",
    category: "illness",
    arabic:
      "أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ",
    translation:
      "I seek refuge in Allah's might and power from the evil of what I feel and am wary of — said seven times with the hand placed on the site of pain.",
    repeat: 7,
    reference: "Sahih Muslim 2202",
  },
  {
    id: "illness-2",
    category: "illness",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
    translation: "O Allah, I ask You for well-being.",
    repeat: 1,
    reference: "Sunan Ibn Majah 3849, Sunan al-Tirmidhi",
  },

  // ============================================================
  // VISITING THE SICK
  // ============================================================
  {
    id: "visiting-sick-1",
    category: "visiting-sick",
    arabic: "أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ",
    translation:
      "I ask Allah the Magnificent, Lord of the Magnificent Throne, to heal you — said seven times at the sick person's bedside.",
    repeat: 7,
    reference: "Sunan Abi Dawud 3106, at-Tirmidhi 2083",
  },
  {
    id: "visiting-sick-2",
    category: "visiting-sick",
    arabic: "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
    translation: "No harm — may it be a purification, if Allah wills.",
    repeat: 1,
    reference: "Sahih al-Bukhari 5656",
  },

  // ============================================================
  // PROTECTION FROM SHAYTAN
  // ============================================================
  {
    id: "protection-shaytan-1",
    category: "protection-shaytan",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    translation: "I seek refuge in Allah from Shaytan, the accursed.",
    repeat: 1,
    reference: "Qur'an 16:98",
  },
  {
    id: "protection-shaytan-2",
    category: "protection-shaytan",
    arabic: "بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    translation:
      "In the name of Allah. O Allah, I seek refuge in You from male and female devils — said before entering the washroom.",
    repeat: 1,
    reference: "Sahih al-Bukhari 142, Sahih Muslim 375",
  },

  // ============================================================
  // PROTECTION FROM THE EVIL EYE
  // ============================================================
  {
    id: "evil-eye-1",
    category: "evil-eye",
    arabic:
      "بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ",
    translation:
      "In the name of Allah I recite over you, from everything that harms you, from the evil of every soul or envious eye — may Allah heal you; in the name of Allah I recite over you. This is the ruqyah Jibril recited over the Prophet ﷺ.",
    repeat: 3,
    reference: "Sahih Muslim 2186",
  },
  {
    id: "evil-eye-2",
    category: "evil-eye",
    arabic: "مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ",
    translation:
      "What Allah has willed; there is no power except with Allah — said when admiring something in yourself, another person, or their wealth, as protection against the evil eye.",
    repeat: 1,
    reference: "Qur'an 18:39, and the practice narrated by Imam Malik in al-Muwatta'",
  },

  // ============================================================
  // FORGIVENESS (ISTIGHFAR)
  // ============================================================
  {
    id: "istighfar-1",
    category: "istighfar",
    arabic:
      "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    translation:
      "I seek the forgiveness of Allah the Mighty, there is no god but Him, the Ever-Living, the Sustainer of all existence, and I turn to Him in repentance.",
    repeat: 3,
    reference: "Sunan Abi Dawud 1517, at-Tirmidhi 3577",
  },
  {
    id: "istighfar-2",
    category: "istighfar",
    arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    translation:
      "My Lord, forgive me and accept my repentance, for You are the Ever-Accepting of repentance, the Merciful — a phrase the Prophet ﷺ recited at least a hundred times a day.",
    repeat: 100,
    reference: "Sunan Abi Dawud 1516, Sunan Ibn Majah 3814",
  },

  // ============================================================
  // GRATITUDE (SHUKR)
  // ============================================================
  {
    id: "shukr-1",
    category: "shukr",
    arabic: "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
    translation: "Praise is to Allah in every circumstance.",
    repeat: 1,
    reference: "Sunan Ibn Majah 3803",
  },
  {
    id: "shukr-2",
    category: "shukr",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    translation:
      "Praise is to Allah, by whose favor good deeds are completed — said upon receiving news that pleases you.",
    repeat: 1,
    reference: "Sunan Ibn Majah 4/262, graded hasan by al-Albani",
  },

  // ============================================================
  // RIZQ & PROVISION
  // ============================================================
  {
    id: "rizq-1",
    category: "rizq",
    arabic:
      "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    translation:
      "O Allah, suffice me with what You have made lawful, keeping me away from what You have made unlawful, and make me independent of all others by Your grace.",
    repeat: 1,
    reference: "Sunan al-Tirmidhi 3563",
  },
  {
    id: "rizq-2",
    category: "rizq",
    arabic: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    translation:
      "My Lord, indeed I am in need of whatever good You send down to me — the dua of Musa (peace be upon him) after helping the two women draw water.",
    repeat: 1,
    reference: "Qur'an 28:24",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/028024.mp3"],
  },

  // ============================================================
  // PARENTS
  // ============================================================
  {
    id: "parents-1",
    category: "parents",
    arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    translation:
      "My Lord, have mercy upon them as they raised me when I was small.",
    repeat: 1,
    reference: "Qur'an 17:24",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/017024.mp3"],
  },
  {
    id: "parents-2",
    category: "parents",
    arabic: "اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    translation:
      "O Allah, forgive me and my parents, and have mercy upon them as they raised me when I was small — recited for parents living or deceased, since the Prophet ﷺ taught that a child's dua reaches a parent after death.",
    repeat: 1,
    reference: "Qur'an 17:24, and Sahih Muslim 1631 on the reward that continues to reach a deceased parent",
  },

  // ============================================================
  // CHILDREN
  // ============================================================
  {
    id: "children-1",
    category: "children",
    arabic:
      "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ",
    translation:
      "I seek refuge for you both in the perfect words of Allah from every devil and every poisonous creature, and from every harmful, envious eye — the words the Prophet ﷺ used to protect Hasan and Husain, as Ibrahim (peace be upon him) protected his sons.",
    repeat: 1,
    reference: "Sahih al-Bukhari 3371",
  },
  {
    id: "children-2",
    category: "children",
    arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    translation: "My Lord, grant me a righteous child.",
    repeat: 1,
    reference: "Qur'an 37:100 — the dua of Ibrahim (peace be upon him)",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/037100.mp3"],
  },

  // ============================================================
  // MARRIAGE
  // ============================================================
  {
    id: "marriage-1",
    category: "marriage",
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    translation:
      "May Allah bless you, and shower His blessings upon you, and join you together in goodness — said to congratulate a newly married couple.",
    repeat: 1,
    reference: "Sunan Abi Dawud 2130, at-Tirmidhi 1091",
  },
  {
    id: "marriage-2",
    category: "marriage",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ",
    translation:
      "O Allah, I ask You for her good and the good of the nature You have shaped her upon, and I seek refuge in You from her evil and the evil of the nature You have shaped her upon — said by the husband, placing his hand on his wife's forehead.",
    repeat: 1,
    reference: "Sunan Abi Dawud 2160",
  },

  // ============================================================
  // SEEKING KNOWLEDGE
  // ============================================================
  {
    id: "seeking-knowledge-1",
    category: "seeking-knowledge",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    translation: "My Lord, increase me in knowledge.",
    repeat: 1,
    reference: "Qur'an 20:114",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/020114.mp3"],
  },
  {
    id: "seeking-knowledge-2",
    category: "seeking-knowledge",
    arabic:
      "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا",
    translation:
      "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge.",
    repeat: 1,
    reference: "Sunan Ibn Majah 251, at-Tirmidhi 3599",
  },

  // ============================================================
  // EXAMS
  // ============================================================
  {
    id: "exams-1",
    category: "exams",
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي، وَيَسِّرْ لِي أَمْرِي، وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
    translation:
      "My Lord, expand for me my chest, ease my task for me, and untie the knot from my tongue so they may understand my speech — the dua of Musa (peace be upon him) before facing Pharaoh.",
    repeat: 1,
    reference: "Qur'an 20:25–28",
    audioUrls: [
      "https://everyayah.com/data/Alafasy_128kbps/020025.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/020026.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/020027.mp3",
      "https://everyayah.com/data/Alafasy_128kbps/020028.mp3",
    ],
  },
  {
    id: "exams-2",
    category: "exams",
    arabic:
      "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
    translation:
      "O Allah, there is no ease except in what You make easy, and You make the difficult easy, if You will.",
    repeat: 1,
    reference: "Sahih Ibn Hibban 2427, graded sahih by al-Albani",
  },

  // ============================================================
  // ANXIETY & SADNESS
  // ============================================================
  {
    id: "distress-1",
    category: "distress",
    arabic:
      "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
    translation:
      "There is no god but Allah, the Mighty, the Forbearing. There is no god but Allah, Lord of the Magnificent Throne. There is no god but Allah, Lord of the heavens, Lord of the earth, and Lord of the Noble Throne.",
    repeat: 1,
    reference: "Sahih al-Bukhari 6345, Sahih Muslim 2730",
  },
  {
    id: "distress-2",
    category: "distress",
    arabic:
      "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَهَ إِلَّا أَنْتَ",
    translation:
      "O Allah, it is Your mercy I hope for, so do not leave me to myself even for the blink of an eye, and set right all my affairs. There is no god but You.",
    repeat: 1,
    reference: "Sunan Abi Dawud 5090",
  },
  {
    id: "distress-3",
    category: "distress",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    translation: "Allah is sufficient for us, and He is the best Disposer of affairs.",
    repeat: 7,
    reference: "Sahih al-Bukhari 4563",
  },

  // ============================================================
  // PATIENCE
  // ============================================================
  {
    id: "patience-1",
    category: "patience",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    translation:
      "Our Lord, pour patience upon us, make our steps firm, and give us victory over the disbelieving people.",
    repeat: 1,
    reference: "Qur'an 2:250",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002250.mp3"],
  },
  {
    id: "patience-2",
    category: "patience",
    arabic: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    translation:
      "Indeed we belong to Allah, and indeed to Him we shall return — said upon receiving news of a calamity or loss.",
    repeat: 1,
    reference: "Qur'an 2:156, Sahih Muslim 918",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002156.mp3"],
  },

  // ============================================================
  // HAJJ & UMRAH
  // ============================================================
  {
    id: "hajj-umrah-1",
    category: "hajj-umrah",
    arabic:
      "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
    translation:
      "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, grace, and dominion are Yours; You have no partner — the Talbiyah, recited from entering the state of Ihram until the pilgrim begins Tawaf or the stoning of Jamrat al-Aqabah.",
    repeat: 1,
    reference: "Sahih al-Bukhari 1549, Sahih Muslim 1184",
  },
  {
    id: "hajj-umrah-2",
    category: "hajj-umrah",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    translation:
      "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire — the dua the Prophet ﷺ recited most between the Yemeni Corner and the Black Stone during Tawaf.",
    repeat: 1,
    reference: "Qur'an 2:201, Sunan Abi Dawud 1892",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002201.mp3"],
  },

  // ============================================================
  // RAMADAN
  // ============================================================
  {
    id: "ramadan-1",
    category: "ramadan",
    arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    translation:
      "The thirst is gone, the veins are moistened, and the reward is assured, if Allah wills — said at the moment of breaking the fast.",
    repeat: 1,
    reference: "Sunan Abi Dawud 2357",
  },
  {
    id: "ramadan-2",
    category: "ramadan",
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    translation:
      "O Allah, You are Ever-Pardoning and You love to pardon, so pardon me — taught by the Prophet ﷺ to 'Aishah to recite on the Night of Decree (Laylatul Qadr).",
    repeat: 1,
    reference: "Sunan al-Tirmidhi 3513, Sunan Ibn Majah 3850",
  },

  // ============================================================
  // FRIDAY ADHKAR
  // ============================================================
  {
    id: "friday-1",
    category: "friday",
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    translation:
      "O Allah, send blessings upon Muhammad and upon the family of Muhammad — the Prophet ﷺ encouraged sending abundant blessings upon him especially on Friday.",
    repeat: 2000,
    reference:
      "Sunan Abi Dawud 1047 authentically establishes the general encouragement to increase salawat on Friday; the specific count of 2000 is a popular practice in many communities rather than a fixed number from a hadith text — recite as many times as is easy for you.",
  },
  {
    id: "friday-2",
    category: "friday",
    arabic: "قِرَاءَةُ سُورَةِ الْكَهْفِ",
    translation:
      "Reciting Surah al-Kahf on Friday — whoever recites it will have light between the two Fridays, according to the hadith.",
    repeat: 1,
    reference: "Al-Hakim, al-Mustadrak 2/399, graded sahih by al-Albani",
  },

  // ============================================================
  // GENERAL DUAS
  // ============================================================
  {
    id: "general-1",
    category: "general",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    translation:
      "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    repeat: 1,
    reference: "Qur'an 2:201",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/002201.mp3"],
  },
  {
    id: "general-2",
    category: "general",
    arabic:
      "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    translation:
      "Our Lord, forgive us our sins and our excesses in our affairs, make our steps firm, and give us victory over the disbelieving people.",
    repeat: 1,
    reference: "Qur'an 3:147",
    audioUrls: ["https://everyayah.com/data/Alafasy_128kbps/003147.mp3"],
  },
  {
    id: "general-3",
    category: "general",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
    translation:
      "O Allah, I ask You for guidance, piety, chastity, and contentment.",
    repeat: 1,
    reference: "Sahih Muslim 2721",
  },

  // ============================================================
  // ISTIKHARA
  // ============================================================
  {
    id: "istikhara-1",
    category: "istikhara",
    arabic:
      "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ",
    translation:
      "O Allah, I seek Your guidance by virtue of Your knowledge, and I seek ability by virtue of Your power, and I ask You of Your great bounty. You have power, and I have none. You know, and I do not know. You are the Knower of the unseen. O Allah, if You know that this matter is good for me in my religion, my livelihood, and the outcome of my affairs, then decree it for me, make it easy for me, and bless it for me. And if You know that this matter is bad for me in my religion, my livelihood, and the outcome of my affairs, then turn it away from me and turn me away from it, and decree for me what is good wherever it may be, and make me content with it.",
    repeat: 1,
    reference: "Sahih al-Bukhari 1166 — Prayer of guidance, said after two rak'ahs of voluntary prayer",
  },

  // ============================================================
  // WUDU
  // ============================================================
  {
    id: "wudu-1",
    category: "wudu",
    arabic: "بِسْمِ اللَّهِ",
    translation:
      "In the name of Allah — said upon beginning wudu.",
    repeat: 1,
    reference: "Sunan Abi Dawud 101, Sunan Ibn Majah 397",
  },
  {
    id: "wudu-2",
    category: "wudu",
    arabic:
      "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    translation:
      "I bear witness that there is no god but Allah alone, without partner, and I bear witness that Muhammad is His servant and Messenger.",
    repeat: 1,
    reference:
      "Sahih Muslim 234 — whoever performs wudu well and then says this, the eight gates of Paradise are opened for them, to enter through whichever they wish",
  },
  {
    id: "wudu-3",
    category: "wudu",
    arabic:
      "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    translation:
      "O Allah, make me among those who turn to You often in repentance, and make me among those who purify themselves.",
    repeat: 1,
    reference: "Sunan al-Tirmidhi 55 — an addition to the dua after wudu, graded hasan",
  },

  // ============================================================
  // DU'AS FOR PREGNANCY
  // ============================================================
  {
    id: "pregnancy-1",
    category: "pregnancy",
    arabic: "رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي",
    translation:
      "My Lord, indeed I have pledged to You what is in my womb, dedicated [to Your service], so accept it from me — the dua of the wife of 'Imran upon her pregnancy with Maryam.",
    repeat: 1,
    reference: "Qur'an 3:35",
  },
  {
    id: "pregnancy-2",
    category: "pregnancy",
    arabic:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    translation:
      "Our Lord, grant us from among our spouses and offspring comfort to our eyes, and make us an example for the righteous.",
    repeat: 1,
    reference: "Qur'an 25:74",
  },
  {
    id: "pregnancy-3",
    category: "pregnancy",
    arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ",
    translation:
      "My Lord, do not leave me without offspring, though You are the best of inheritors — the dua of Zakariyya (peace be upon him) asking Allah for a child.",
    repeat: 1,
    reference: "Qur'an 21:89",
  },
  {
    id: "pregnancy-4",
    category: "pregnancy",
    arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
    translation: "My Lord, grant me a righteous child.",
    repeat: 1,
    reference: "Qur'an 37:100 — the dua of Ibrahim (peace be upon him)",
  },

  // ============================================================
  // DU'A FOR THE DECEASED AFTER BURIAL
  // ============================================================
  {
    id: "after-burial-1",
    category: "after-burial",
    arabic: "بِسْمِ اللَّهِ وَعَلَى مِلَّةِ رَسُولِ اللَّهِ",
    translation:
      "In the name of Allah, and upon the way of the Messenger of Allah — said by the one placing the body into the grave.",
    repeat: 1,
    reference: "Sunan Abi Dawud 3213, at-Tirmidhi 1046, Sunan Ibn Majah 1550",
  },
  {
    id: "after-burial-2",
    category: "after-burial",
    arabic:
      "اسْتَغْفِرُوا لِأَخِيكُمْ وَسَلُوا لَهُ التَّثْبِيتَ فَإِنَّهُ الْآنَ يُسْأَلُ",
    translation:
      "Seek forgiveness for your brother, and ask that he be made firm, for he is being questioned right now — the Prophet ﷺ would say this to those present and stand at the grave once burial was complete.",
    repeat: 1,
    reference: "Sunan Abi Dawud 3221",
  },
  {
    id: "after-burial-3",
    category: "after-burial",
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ",
    translation:
      "O Allah, forgive him, have mercy on him, grant him well-being, and pardon him — the core of the funeral prayer's dua, equally fitting to repeat for the deceased afterward.",
    repeat: 1,
    reference: "Sahih Muslim 963",
  },
  {
    id: "after-burial-4",
    category: "after-burial",
    arabic:
      "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
    translation:
      "Peace be upon you, inhabitants of these dwellings, among the believers and Muslims. We will, Allah willing, join you. I ask Allah for well-being for us and for you — said when visiting graves generally, fitting for returning to the grave after the burial too.",
    repeat: 1,
    reference: "Sahih Muslim 975",
  },
];

export const getAdhkarByCategory = (categoryId) =>
  adhkarData.filter((item) => item.category === categoryId);

export const getCategoryById = (categoryId) =>
  categories.find((cat) => cat.id === categoryId);

// Returns { total, done, remaining } for a category given a getCount
// function (from ProgressContext) — used to check whether e.g. today's
// Morning Adhkar has actually been finished, for the motivation nudge.
export const getCategoryCompletion = (categoryId, getCount) => {
  const items = getAdhkarByCategory(categoryId);
  const done = items.filter((item) => getCount(item.id) >= item.repeat).length;
  return { total: items.length, done, remaining: items.length - done };
};

// Recitation audio convention: one MP3 per dhikr, named after its id,
// served from /public/audio/. Drop a file called `${id}.mp3` (e.g.
// "morning-1.mp3") into public/audio/ and it streams automatically —
// no code changes needed. See public/audio/README.md for recording specs.
//
// Items can instead carry an explicit `audioUrls` array (one URL per
// ayah, played back-to-back) to stream from a real source — used below
// for the Qur'anic passages, which stream Mishary Alafasy's recitation
// from everyayah.com's long-standing public per-ayah archive.
export const getAudioUrls = (dhikr) =>
  dhikr.audioUrls || [dhikr.audioUrl || `/audio/${dhikr.id}.mp3`];
