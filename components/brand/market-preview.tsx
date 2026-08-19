// A static, non-interactive mockup of the BlockyMarket UI — not a live
// screenshot or a link. Built from BlockyMarket's own brand tokens
// (src/lib/tokens.js: bg #0a0e1a, accent #ff7a18/#ffb347) and its real coin
// list/glyphs (src/App.jsx) so the preview reads as authentic, but nothing
// here is live data and nothing is clickable.

const COINS = [
  { sym: "BTC", mark: "₿", active: true },
  { sym: "ETH", mark: "Ξ" },
  { sym: "SOL", mark: "◎" },
  { sym: "BNB", mark: "⬡" },
  { sym: "XRP", mark: "✕" },
];

export function MarketPreview() {
  return (
    <div
      className="pointer-events-none select-none overflow-hidden rounded-md border border-[#26304a]"
      style={{ background: "#0a0e1a", fontFamily: "var(--font-sans)" }}
      aria-hidden="true"
    >
      <div className="px-4 pt-4">
        <p
          className="text-sm font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "#e8edf7" }}
        >
          BLOCKYMARKET
        </p>
        <p className="mt-0.5 text-[10px] uppercase tracking-widest" style={{ color: "#8b97b3" }}>
          Direction Market
        </p>
      </div>

      <div className="grid grid-cols-5 gap-1.5 px-4 pt-3">
        {COINS.map((c) => (
          <div
            key={c.sym}
            className="flex flex-col items-center justify-center rounded-md py-2 text-[10px] font-semibold"
            style={{
              background: c.active ? "#ff7a18" : "#121829",
              color: c.active ? "#0a0e1a" : "#e8edf7",
              border: c.active ? "none" : "1px solid #26304a",
            }}
          >
            <span className="text-xs">{c.mark}</span>
            {c.sym}
          </div>
        ))}
      </div>

      <div
        className="mx-4 mt-3 flex items-center justify-between rounded-md px-3 py-2.5"
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
        <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
          <polyline
            points="0,16 10,14 20,15 30,9 40,10 50,4 60,6"
            stroke="#27d796"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="mx-4 mb-4 mt-3 grid grid-cols-4 gap-1.5">
        {["15m", "30m", "45m", "60m"].map((h, i) => (
          <div
            key={h}
            className="rounded-md py-1.5 text-center text-[10px] font-semibold"
            style={{
              background: i === 0 ? "transparent" : "#121829",
              border: i === 0 ? "1px solid #ffb347" : "1px solid #26304a",
              color: i === 0 ? "#ffb347" : "#8b97b3",
            }}
          >
            {h}
          </div>
        ))}
      </div>
    </div>
  );
}
