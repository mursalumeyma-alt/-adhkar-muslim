// The eight-pointed khatam star — the app's signature motif.
// Used as a decorative divider and as the base for the counter ring.
export default function StarMotif({ size = 20, className = "", spin = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={spin ? { animation: "spinSlow 18s linear infinite" } : undefined}
      aria-hidden="true"
    >
      <g transform="translate(50,50)">
        <rect
          x="-38"
          y="-38"
          width="76"
          height="76"
          rx="6"
          transform="rotate(0)"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <rect
          x="-38"
          y="-38"
          width="76"
          height="76"
          rx="6"
          transform="rotate(45)"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}
