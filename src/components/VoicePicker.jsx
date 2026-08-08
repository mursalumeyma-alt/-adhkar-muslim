import { useState, useRef, useEffect } from "react";
import { useVoice } from "../context/VoiceContext";
import "./VoicePicker.css";

export default function VoicePicker() {
  const { supported, arabicVoices, preferredURI, setPreferredURI } = useVoice();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  if (!supported) return null;

  // No Arabic voice installed at all — this is worth surfacing clearly
  // rather than silently letting duas read in the wrong accent/language,
  // since there's nothing in the app that can fix this: it depends on
  // what voices the person's OS/browser has installed.
  if (arabicVoices.length === 0) {
    return (
      <div className="voice-picker" ref={wrapRef}>
        <button
          className="voice-picker__trigger voice-picker__trigger--warn"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <WarnIcon />
          <span className="voice-picker__label">No Arabic voice</span>
        </button>
        {open && (
          <div className="voice-picker__menu voice-picker__menu--note scroll-fade" role="dialog">
            <p>
              Your device doesn't have an Arabic voice installed, so hadith duas
              can't be read aloud here yet — Qur'an items are unaffected, they
              stream real recitation separately.
            </p>
            <p>
              On most systems you can add one in your OS or browser's
              language/voice settings (e.g. Settings → Accessibility → Spoken
              Content on iOS/macOS, or Settings → Languages on Android/Chrome).
            </p>
          </div>
        )}
      </div>
    );
  }

  // Only worth showing a picker when there's an actual decision to
  // make. With exactly one voice, it's already the only option.
  if (arabicVoices.length < 2) return null;

  const active = arabicVoices.find((v) => v.voiceURI === preferredURI) || arabicVoices[0];

  return (
    <div className="voice-picker" ref={wrapRef}>
      <button
        className="voice-picker__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        title="Choose the voice used to read hadith duas aloud"
      >
        <VoiceIcon />
        <span className="voice-picker__label">{active.name}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <ul className="voice-picker__menu scroll-fade" role="listbox">
          <li className="voice-picker__hint">Voice for reading duas aloud</li>
          {arabicVoices.map((v) => (
            <li key={v.voiceURI}>
              <button
                className={`voice-picker__option ${
                  v.voiceURI === active.voiceURI ? "voice-picker__option--active" : ""
                }`}
                role="option"
                aria-selected={v.voiceURI === active.voiceURI}
                onClick={() => {
                  setPreferredURI(v.voiceURI);
                  setOpen(false);
                }}
              >
                <span>{v.name}</span>
                <span className="voice-picker__meta">{v.lang}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function VoiceIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polygon points="4 9 8 9 13 4 13 20 8 15 4 15" />
      <path d="M16.5 8.5a5 5 0 010 7" />
    </svg>
  );
}

function WarnIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5l9.5 16.5h-19L12 3.5z" strokeLinejoin="round" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <circle cx="12" cy="16.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 160ms ease" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
