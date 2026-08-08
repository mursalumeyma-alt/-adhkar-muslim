# Recitation audio

## Qur'an passages: real audio, already streaming

Ayatul Kursi, the Last Two Verses of Al-Baqarah, and the Three Quls (in
Morning, Evening, and Before Sleep) stream real recitation by Mishary
Alafasy — clear, unhurried, no background music — directly from
[everyayah.com](https://everyayah.com), a long-standing public per-ayah
Qur'an audio archive used by many Quran apps and APIs. These items carry
an explicit `audioUrls` array in `src/data/adhkarData.js`, one URL per
ayah, played back-to-back as a single track (so the four ayahs of
Al-Ikhlas, for example, play in order as one continuous recitation).
Nothing else to set up — this just works.

## Everything else: drop in your own MP3s

For the hadith-based duas (all the other categories), there's no
comparable public archive — recitation of a hadith text isn't Qur'an
recitation, and I'm not able to verify the licensing of third-party
dua audio I might find online, so I haven't wired up unverified files.

The player is fully built and production-ready for these too: drop a
file into this folder named after the dhikr's `id` from
`src/data/adhkarData.js` and it streams automatically, no code changes
needed.

```
public/audio/
├── evening-1.mp3
├── prayer-1.mp3
├── rain-1.mp3
└── ...  (one file per id in adhkarData.js, for non-Qur'an items)
```

To point at an external CDN instead of self-hosting, set `audioUrl`
(single file) or `audioUrls` (an array, for multi-part items) directly
on the entry in `adhkarData.js` — either takes priority over the
`/audio/{id}.mp3` convention.

## Recording / sourcing specs

For a "clear, slow, beautiful, no background music" result that streams
well on mobile and desktop:

- **Format**: MP3, constant bitrate, 128–192 kbps, 44.1 kHz, mono is
  fine for a single voice (halves file size vs. stereo with no audible
  loss for spoken recitation)
- **Loudness**: normalize to around −16 LUFS so volume is consistent
  across every file; peak below −1 dBFS to avoid clipping
  (`ffmpeg -i in.wav -af loudnorm=I=-16:TP=-1 out.mp3` is a good default)
  and pop/breath noise removed
- **Pace**: unhurried, with a brief pause at natural stops
- **Silence**: trim leading/trailing silence to under ~300 ms so tapping
  play feels instant
- **No background music or reverb** — a clean, close-mic'd single voice

## Where to get properly licensed hadith-dua recitation

- Record your own with a reciter you have permission to publish, or
- License audio from a reciter/production house that explicitly permits
  redistribution or streaming (check the terms — "free to listen on our
  site" is not the same as "free to redistribute in your own app")
- If you already have a personal Hisn al-Muslim / adhkar audio CD or
  app you're licensed to use, export those tracks here under the
  matching filenames

## Fallback while hadith-dua files are missing

Until a given `{id}.mp3` exists, the player shows a clear error state
with a retry button, plus a "Read with device voice" option that uses
the browser's built-in text-to-speech — so the app stays usable while
you fill in real recordings incrementally. This fallback never applies
to the Qur'an items above, since those already stream real audio.
