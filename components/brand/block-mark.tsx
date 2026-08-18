export function BlockMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 460"
      className={className}
      role="img"
      aria-label="The Blocky mark — three stacked blocks"
    >
      <defs>
        <linearGradient id="bm-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe2a3" />
          <stop offset="100%" stopColor="#ffc94d" />
        </linearGradient>
        <linearGradient id="bm-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5a623" />
          <stop offset="100%" stopColor="#c97f12" />
        </linearGradient>
        <linearGradient id="bm-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c97f12" />
          <stop offset="100%" stopColor="#8a5a0d" />
        </linearGradient>
        <radialGradient id="bm-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#f5a623" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="220" r="200" fill="url(#bm-glow)" />

      {/* back block */}
      <g transform="translate(210,60)" opacity="0.55">
        <polygon points="70,0 140,40 70,80 0,40" fill="url(#bm-top)" />
        <polygon points="0,40 70,80 70,180 0,140" fill="url(#bm-left)" />
        <polygon points="140,40 70,80 70,180 140,140" fill="url(#bm-right)" />
      </g>

      {/* left block */}
      <g transform="translate(30,190)">
        <polygon points="80,0 160,45 80,90 0,45" fill="url(#bm-top)" />
        <polygon points="0,45 80,90 80,210 0,165" fill="url(#bm-left)" />
        <polygon points="160,45 80,90 80,210 160,165" fill="url(#bm-right)" />
      </g>

      {/* front / main block */}
      <g transform="translate(140,240)">
        <polygon points="100,0 200,56 100,112 0,56" fill="url(#bm-top)" />
        <polygon points="0,56 100,112 100,260 0,204" fill="url(#bm-left)" />
        <polygon points="200,56 100,112 100,260 200,204" fill="url(#bm-right)" />
      </g>
    </svg>
  );
}
