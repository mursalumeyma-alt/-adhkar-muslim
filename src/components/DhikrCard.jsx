import { useEffect, useRef } from "react";
import { useFavorites } from "../context/FavoritesContext";
import { useProgress } from "../context/ProgressContext";
import { useLanguage } from "../context/LanguageContext";
import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useSpeech } from "../hooks/useSpeech";
import Counter from "./Counter";
import "./DhikrCard.css";

export default function DhikrCard({ dhikr, index }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const cardRef = useRef(null);
  const {
    getCount,
    increment,
    decrement,
    reset,
  } = useProgress();

  const { t } = useLanguage();

  const {
    getStatus,
    play,
    retry,
    trackIndex,
    trackCount,
    currentId,
  } = useAudioPlayer();

  const {
    speak,
    stop: stopSpeech,
    speakingId,
    supported: speechSupported,
  } = useSpeech();

  const count = getCount(dhikr.id);
  const favorite = isFavorite(dhikr.id);
    const previousCount = useRef(count);

  useEffect(() => {
    const wasCompleted = previousCount.current >= dhikr.repeat;
    const isNowCompleted = count >= dhikr.repeat;

    if (!wasCompleted && isNowCompleted) {
      setTimeout(() => {
        const cards = document.querySelectorAll(".dhikr-card");
        const currentCard = cardRef.current;

        if (!currentCard) return;

        const currentIndex = Array.from(cards).indexOf(currentCard);
        const nextCard = cards[currentIndex + 1];

        if (nextCard) {
          nextCard.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }

    previousCount.current = count;
  }, [count, dhikr.repeat]);

  const hasRealAudio =
    Array.isArray(dhikr.audioUrls) &&
    dhikr.audioUrls.length > 0;

  const audioStatus = hasRealAudio
    ? getStatus(dhikr.id)
    : "idle";

  const isMultiTrack =
    hasRealAudio &&
    dhikr.audioUrls.length > 1 &&
    currentId === dhikr.id;

  const speaking = speakingId === dhikr.id;

  const handlePrimaryClick = () => {
    if (hasRealAudio) {
      if (audioStatus === "error") {
        retry(dhikr.id);
      } else {
        play(dhikr.id, dhikr.audioUrls);
      }
    } else if (speechSupported) {
      speaking
        ? stopSpeech()
        : speak(dhikr.id, dhikr.arabic);
    }
  };

  const playerDisabled =
    !hasRealAudio && !speechSupported;

  return (
    <article
      className={`dhikr-card scroll-fade ${
        count >= dhikr.repeat
          ? "dhikr-card--done"
          : ""
      }`}
      style={{
        animationDelay: `${Math.min(index, 8) * 45}ms`,
      }}
      ref={cardRef}
    >
      {/* DHIKR NUMBER */}
      <div className="dhikr-card__index">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* DHIKR CONTENT */}
      <div className="dhikr-card__body">
        <p className="dhikr-card__arabic arabic-text">
          {dhikr.arabic}
        </p>

        <p className="dhikr-card__translation">
          {dhikr.translation}
        </p>

        {/* REFERENCE + TOOLS */}
        <div className="dhikr-card__footer">
          <span className="dhikr-card__reference">
            <BookIcon /> {dhikr.reference}

            {isMultiTrack &&
              audioStatus !== "idle" && (
                <span className="dhikr-card__track-indicator">
                  · ayah {trackIndex + 1}/{trackCount}
                </span>
              )}
          </span>

          <div className="dhikr-card__tools">
            {!playerDisabled && (
              <button
                type="button"
                className={`dhikr-card__tool-btn ${
                  audioStatus === "playing" ||
                  speaking
                    ? "dhikr-card__tool-btn--active"
                    : ""
                } ${
                  audioStatus === "error"
                    ? "dhikr-card__tool-btn--error"
                    : ""
                }`}
                onClick={handlePrimaryClick}
                aria-label={
                  audioStatus === "playing" ||
                  speaking
                    ? t.stop
                    : audioStatus === "loading"
                    ? "Loading audio"
                    : audioStatus === "error"
                    ? "Audio unavailable, retry"
                    : t.listen
                }
                aria-busy={
                  audioStatus === "loading"
                }
                title={
                  audioStatus === "error"
                    ? "Audio unavailable — tap to retry"
                    : hasRealAudio
                    ? t.listen
                    : "Listen (device voice)"
                }
              >
                {audioStatus === "loading" ? (
                  <SpinnerIcon />
                ) : audioStatus === "playing" ||
                  speaking ? (
                  <StopIcon />
                ) : audioStatus === "error" ? (
                  <ErrorIcon />
                ) : (
                  <SoundIcon />
                )}
              </button>
            )}

            <button
              type="button"
              className={`dhikr-card__tool-btn ${
                favorite
                  ? "dhikr-card__tool-btn--active"
                  : ""
              }`}
              onClick={() =>
                toggleFavorite(dhikr.id)
              }
              aria-label="Toggle favorite"
              title="Favorite"
            >
              <StarIcon filled={favorite} />
            </button>
          </div>
        </div>

        {/* AUDIO ERROR */}
        {hasRealAudio &&
          audioStatus === "error" && (
            <div className="dhikr-card__audio-notice scroll-fade">
              <span>
                This recitation couldn't load —
                check your connection and try again.
              </span>

              <div className="dhikr-card__audio-notice-actions">
                <button
                  type="button"
                  onClick={() =>
                    retry(dhikr.id)
                  }
                >
                  Retry
                </button>
              </div>
            </div>
          )}
      </div>

      {/* COUNTER */}
    <div className="dhikr-card__counter">
  <Counter
    count={count}
    max={dhikr.repeat}
    onIncrement={() => increment(dhikr.id, dhikr.repeat)}
    onDecrement={() => decrement(dhikr.id)}
    onReset={() => reset(dhikr.id)}
  />
</div>
    </article>
  );
}

/* =========================
   ICONS
========================= */

function StarIcon({ filled }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill={
        filled ? "currentColor" : "none"
      }
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <polygon points="12 2 15 9 22 9.5 16.5 14.5 18.5 22 12 17.5 5.5 22 7.5 14.5 2 9.5 9 9" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <polygon points="4 9 8 9 13 4 13 20 8 15 4 15" />
      <path d="M16.5 8.5a5 5 0 010 7" />
      <path d="M19 6a8.5 8.5 0 010 12" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="2"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />

      <line
        x1="12"
        y1="8"
        x2="12"
        y2="13"
      />

      <circle
        cx="12"
        cy="16.3"
        r="0.9"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      className="dhikr-card__spinner"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.25"
      />

      <path
        d="M21 12a9 9 0 00-9-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13z" />
      <path d="M4 19.5V6.5" />
    </svg>
  );
}