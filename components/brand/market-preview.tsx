// A static, non-interactive mockup of the BlockyMarket UI -- not a live
// screenshot or a link. Built from BlockyMarket's own brand tokens
// (src/lib/tokens.js: bg #0a0e1a, accent #ff7a18/#ffb347), its real coin
// list/glyphs, its real idle tagline ("Pick a block. Ride it."), and its
// real bottom-nav items (src/App.jsx) so the preview reads as authentic --
// but nothing here is live data and nothing is clickable.

const COINS = [
  { sym: "BTC", mark: "₿", active: true },
  { sym: "ETH", mark: "Ξ" },
  { sym: "SOL", mark: "◎" },
  { sym: "BNB", mark: "⬡" },
  { sym: "XRP", mark: "✕" },
  { sym: "DOGE", mark: "Ð" },
  { sym: "ADA", mark: "₳" },
  { sym: "AVAX", mark: "▲" },
  { sym: "LINK", mark: "⬢" },
  { sym: "TRX", mark: "◇" },
];

const HORIZONS = [
  { label: "15m", mult: "1.93×", active: true },
  { label: "30m", mult: "2.58×" },
  { label: "45m", mult: "3.09×" },
  { label: "60m", mult: "3.54×" },
];

const NAV = [
  { label: "Market", mark: "◈", active: true },
  { label: "Live", mark: "◉" },
  { label: "Predict", mark: "★" },
  { label: "History", mark: "▤" },
];

export function MarketPreview() {
  return (
    <div
      className="pointer-events-none w-full max-w-[340px] select-none overflow-hidden rounded-2xl border shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)]"
      style={{ background: "#0a0e1a", borderColor: "#26304a", fontFamily: "var(--font-sans)" }}
      aria-hidden="true"
    >
      {/* hero band */}
      <div
        className="relative flex flex-col items-center justify-center gap-1.5 px-6 py-8 text-center"
        style={{
          background:
            "radial-gradient(ellipse 90% 100% at 50% 0%, rgba(255,122,24,0.18), transparent 70%), #0d1220",
          borderBottom: "1px solid #1a2236",
        }}
      >
        <p
          className="text-lg font-bold tracking-[0.15em]"
          style={{ fontFamily: "var(--font-display)", color: "#ffb347" }}
        >
          BLOCKY
        </p>
        <p className="text-sm" style={{ color: "#e8edf7" }}>
          Pick a block. Ride it.
        </p>
      </div>

      {/* market card */}
      <div className="px-4 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#8b97b3" }}>
          Market
        </p>

        <div className="mt-2 grid grid-cols-5 gap-1.5">
          {COINS.map((c) => (
            <div
              key={c.sym}
              className="flex flex-col items-center justify-center rounded-lg py-2 text-[9px] font-semibold"
              style={{
                background: c.active ? "#ff7a18" : "#121829",
                color: c.active ? "#0a0e1a" : "#e8edf7",
                border: c.active ? "none" : "1px solid #26304a",
              }}
            >
              <span className="text-[11px]">{c.mark}</span>
              {c.sym}
            </div>
          ))}
        </div>

        <div
          className="mt-3 flex items-center justify-between rounded-lg px-3 py-2.5"
          style={{ background: "#121829", border: "1px solid #26304a" }}
        >
          <div>
            <p className="text-[10px]" style={{ color: "#8b97b3" }}>
              Bitcoin
            </p>
            <p className="text-sm font-bold" style={{ color: "#e8edf7", fontFamily: "var(--font-mono)" }}>
              $64,737
            </p>
          </div>
          <svg width="64" height="22" viewBox="0 0 60 20" fill="none">
            <polyline
              points="0,16 10,14 20,15 30,9 40,10 50,4 60,6"
              stroke="#27d796"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <p className="mt-3 text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#8b97b3" }}>
          Horizon
        </p>
        <div className="mt-1.5 grid grid-cols-4 gap-1.5">
          {HORIZONS.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center gap-0.5 rounded-lg py-1.5"
              style={{
                background: h.active ? "transparent" : "#121829",
                border: h.active ? "1px solid #ffb347" : "1px solid #26304a",
              }}
            >
              <span className="text-[10px] font-semibold" style={{ color: h.active ? "#ffb347" : "#e8edf7" }}>
                {h.label}
              </span>
              <span className="text-[8px]" style={{ color: "#8b97b3" }}>
                {h.mult}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div
        className="mt-4 grid grid-cols-4"
        style={{ borderTop: "1px solid #1a2236" }}
      >
        {NAV.map((n) => (
          <div
            key={n.label}
            className="flex flex-col items-center gap-1 py-2.5 text-[9px] font-medium"
            style={{ color: n.active ? "#ff7a18" : "#8b97b3" }}
          >
            <span className="text-xs">{n.mark}</span>
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}
