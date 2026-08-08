# Adhkar — أذكار المسلم

A modern Muslim Adhkar web app built with React. Gold & ivory Islamic
design, full RTL support, and daily remembrances sourced from **Sahih
al-Bukhari** and **Sahih Muslim** (with a few well-established Sunan
references where noted).

## Features

- **Hijri & Gregorian Calendar** — today's date in both calendars, a
  month grid showing both side by side (using the browser's built-in
  Umm al-Qura Islamic calendar via `Intl` — no library or network call
  needed), and automatic markers for Islamic New Year, Ashura, Mawlid,
  Isra & Mi'raj, the start of Ramadan, Laylatul Qadr (commonly marked),
  Eid al-Fitr, the Day of Arafah, and Eid al-Adha, with a clear note
  that these are calculated (tabular) dates rather than moon-sighting
  confirmations
- **Prayer Times & Adhan** — today's five prayers (plus sunrise) for
  your location, calculated with the [adhan](https://github.com/batoulapps/adhan-js)
  library (MIT-licensed, precision astronomical calculations), with a
  live countdown to the next prayer, a choice of 10+ calculation
  methods (Muslim World League, Umm al-Qura, ISNA, Egyptian, and more),
  and a Hanafi/Shafi'i Asr toggle. "Today" and the displayed times are
  derived from your location's actual timezone (via `tz-lookup`), not
  your device's system clock, so they stay correct even if your device's
  timezone doesn't match where you physically are. Below the schedule,
  the full text of the Adhan and Iqama — Arabic, transliteration,
  translation, and playback — plus the dua recited after the call to
  prayer.
- **Qibla Direction** — a live-rotating compass pointing to the Kaaba,
  using the same `adhan` library for the true-north bearing calculation.
  The live compass corrects for magnetic declination (via the `magvar`
  World Magnetic Model library) before rotating the dial, since phone
  compass sensors report *magnetic* north while the calculated bearing
  is relative to *true* north — unless corrected, that gap (up to ~20°
  depending on where you are) makes the needle visibly wrong. Falls back
  to a numeric bearing plus distance to Mecca when a live compass isn't
  available, so it stays useful on desktop too.
- **41 categories, 135+ authentic adhkar** — Morning and Evening now also
  include Ayatul Kursi, the Last Two Verses of Al-Baqarah, and the Three
  Quls (each ×3), alongside Before/After Salah, Wudu, Eating & Drinking,
  Home & Mosque entry/exit, Travel & Return, Rain/Thunder/Wind, Illness &
  Visiting the Sick, protection from Shaytan and the evil eye, Istighfar,
  Shukr, Rizq, Parents, Children, Marriage, Pregnancy, Seeking Knowledge,
  Exams, Anxiety & Sadness, Patience, Hajj & Umrah, Ramadan, Friday,
  the Deceased After Burial, General Duas, and Istikhara — sourced from
  the Qur'an, Sahih al-Bukhari, and Sahih Muslim, with well-established
  Sunan references where noted
- Each category card shows a **badge with its adhkar count**
- Arabic text (Amiri typeface) with English translation, transliteration
  where provided, and a hadith/Qur'an reference
- **Repeat counter** with an animated gold progress ring, saved per-dhikr,
  and **automatically reset every new day** — these are daily adhkar, so
  marking Morning Adhkar done once shouldn't leave it stuck "done"
  forever; a manual reset button is still there for resetting something
  mid-day (`ProgressContext.jsx`)
- **Favorites** — star any dhikr to save it, persisted to `localStorage`
- **Search** across Arabic text, translation, reference, and category name
- **Motivation alert** — a dismissible daily banner (`MotivationAlert.jsx`)
  right below the header on every page. It prioritizes a time-aware nudge
  if the adhkar for right now (Morning in the morning, Evening in the
  evening, Before Sleep at night) isn't finished yet, with a direct link
  to continue; otherwise it shows a quote of the day — a short Qur'an
  verse or hadith on the virtue of dhikr, rotating daily. Dismissing it
  hides it for the rest of that day only.
- **Real Qur'an recitation, already streaming** — Ayatul Kursi, the Last
  Two Verses of Al-Baqarah, and the Three Quls (Al-Ikhlas, Al-Falaq,
  An-Nas ×3) lead Morning, Evening, and Before Sleep, and stream Mishary
  Alafasy's recitation live from everyayah.com's public per-ayah archive
  — no setup needed, it just plays
- **MP3 recitation playback for everything else** — a shared HTML5
  `<audio>` element (native byte-range streaming, so playback starts
  before the whole file downloads) with loading, playing, and error
  states per dhikr, a retry action, and a "read with device voice"
  fallback for hadith duas where a recording isn't dropped in yet (see
  `public/audio/README.md`)
- **Dark mode** toggle, persisted to `localStorage`
- **Full RTL support** — switch the whole interface to Arabic; layout,
  navigation, and text direction flip automatically
- Responsive, mobile-first layout with smooth entrance animations
  (respects `prefers-reduced-motion`)
- Client-side routing with React Router

## Project structure

```
src/
├── components/        Reusable UI building blocks
│   ├── Header.jsx / .css        top nav, search, theme + language toggles
│   ├── Footer.jsx / .css
│   ├── CategoryCard.jsx / .css  category tile on the home grid
│   ├── DhikrCard.jsx / .css     a single dhikr: Arabic, translation, tools
│   ├── Counter.jsx / .css       circular repeat counter
│   ├── EmptyState.jsx / .css    empty favorites / no search results
│   ├── LocationGate.jsx / .css  geolocation permission flow, shared by
│   │                             Prayer Times and Qibla
│   ├── VoicePicker.jsx / .css   Arabic TTS voice picker (header)
│   └── StarMotif.jsx            the 8-point khatam star signature icon
├── public/audio/                 drop-in MP3 recitations (see its README)
├── pages/              Route-level views
│   ├── Home.jsx / .css
│   ├── CategoryPage.jsx / .css
│   ├── Favorites.jsx
│   ├── SearchPage.jsx
│   ├── PrayerTimesPage.jsx / .css  prayer schedule + Adhan/Iqama text
│   └── QiblaPage.jsx / .css        live compass to the Kaaba
├── context/             Global state via React Context + localStorage
│   ├── ThemeContext.jsx      light / dark
│   ├── LanguageContext.jsx   en / ar + RTL direction + UI strings
│   ├── FavoritesContext.jsx  saved dhikr ids
│   ├── ProgressContext.jsx   repeat-counter progress per dhikr
│   ├── AudioPlayerContext.jsx  single shared streaming <audio> element,
│   │                            loading/playing/error state per dhikr
│   └── VoiceContext.jsx      discovers Arabic TTS voices, holds the
│                              person's chosen voice for hadith duas
├── hooks/
│   ├── useLocalStorage.js       generic localStorage-synced state
│   ├── useSpeech.js             Web Speech playback for hadith duas —
│   │                             clause-by-clause, using the chosen voice
│   ├── useGeolocation.js        shared coordinates for Prayer Times/Qibla
│   ├── useDeviceOrientation.js  live compass heading (handles the iOS
│   │                             permission-prompt flow)
│   └── usePrayerTimes.js        wraps the `adhan` library: schedule,
│                                  next-prayer countdown, calc settings
├── data/
│   ├── adhkarData.js         all categories + dhikr content
│   └── adhanData.js          Adhan / Iqama text + the post-adhan dua
├── utils/
│   └── geo.js                 distance-to-Kaaba (haversine)
├── styles/
│   └── theme.css              design tokens (color, type, radius, motion)
├── App.jsx / App.css          routes + provider composition
└── main.jsx                   entry point
```

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Notes

- **Prayer times and Qibla direction require location access**, requested
  once via the browser's geolocation prompt (see `LocationGate.jsx`) and
  cached in `localStorage` so it isn't asked again every visit — there's
  a manual "Update my location" action if you travel. Calculations run
  entirely client-side via the `adhan` library; nothing is sent to a
  server.
- **The live Qibla compass depends on your device having a compass
  sensor exposed to the browser** — most phones do, most laptops/desktops
  don't. Where it isn't available (or permission is declined), the page
  falls back to showing the numeric bearing and distance to Mecca, which
  you can use with any separate compass app. On iOS, Safari requires an
  explicit one-tap permission grant for motion/orientation access before
  the live compass can start (the "Enable live compass" button handles
  that); most other browsers grant it automatically.
- **Prayer time notifications aren't included.** The countdown to the
  next prayer is visible while the page is open, but there's no
  background push notification when a prayer time arrives — that needs
  a service worker and (for reliability when the site/tab is fully
  closed) a server sending push messages, which is beyond what a
  client-only app can do. Worth adding if you want it; happy to help
  build that layer if you have a backend or want to add one.
- Real Qur'an audio streams automatically for every genuine ayah in
  the app — not just Ayatul Kursi, the Last Two Verses of Al-Baqarah,
  and the Three Quls (which lead Morning, Evening, and Before Sleep),
  but every other item whose Arabic text is a complete Qur'an verse:
  the dua in Before Salah and Hajj & Umrah (2:201), Rizq (28:24),
  Parents (17:24), Children (37:100), Seeking Knowledge (20:114), Exams
  (20:25–28), Patience (2:250, 2:156), and General Duas (2:201, 3:147).
  All of it is Mishary Alafasy's recitation streamed live from
  everyayah.com's public archive, ayah-by-ayah as one continuous track.
  Nothing to configure.
- **Hadith duas (including the Adhan and Iqama text) play with the
  device's own voice, directly.** There's no equivalent "reciter" archive
  for hadith text the way there is for the
  Qur'an — Alafasy and other reciters recite the Qur'an, not hadith
  wording, and I'm not able to verify the licensing of third-party dua
  audio I might find online. Rather than attempt a fetch that always
  fails and only then fall back, the listen button on these items goes
  straight to the browser's built-in text-to-speech (`useSpeech.js`).
  Two things improve how that sounds:
  - **A voice picker** (`VoicePicker.jsx`, in the header) lists every
    Arabic voice the browser/OS exposes and lets you choose which one
    to use — voice clarity varies a lot by device, so trying a couple
    is worth it. It only appears when there's an actual choice: hidden
    with zero or one voice available. With zero, it instead shows a
    plain warning explaining that hadith duas can't be read aloud on
    this device yet, with pointers to where to add an Arabic voice
    (OS/browser language settings) — Qur'an audio is unaffected either
    way, since that streams separately.
  - **Sentence-by-sentence playback**: long duas are split on Arabic
    clause marks (۝ ۞ ، ؛) and spoken as short chained utterances with
    a brief pause between, rather than one long utterance — this is
    also what fixes Web Speech cutting off or garbling longer text,
    which is a known issue with feeding it one big block.

  Voice quality still ultimately depends on what your OS/browser
  provides — the app can pick the best of what's available but can't
  add a voice that isn't installed. If you'd rather use real recordings
  for these too, the player supports it: drop MP3s into `public/audio/`
  named after each dhikr's `id` (e.g. `prayer-1.mp3`) — see
  `public/audio/README.md` for the convention and recording specs — and
  I can wire the component back to prefer those files over the device
  voice whenever one exists.
- All hadith text and Arabic content are classical, public-domain
  religious material; references are cited next to each dhikr so users can
  verify them against the original collections.
