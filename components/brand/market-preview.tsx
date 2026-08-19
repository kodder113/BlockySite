// Static, non-interactive mockups of the BlockyMarket UI -- not live
// screenshots, not links. Built from BlockyMarket's own brand tokens
// (src/lib/tokens.js), its real coin list/glyphs, its real copy strings
// ("Direction Market", "Live prices - Season 0 points - no cash value",
// "Season 0 Balance", "Most wins", the real 5-tab bottom nav with its
// real glyphs) -- all verified against src/App.jsx. Account balance/email
// are placeholders, not the real user's data. Nothing here is clickable.

import type { ReactNode } from "react";

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
  { label: "Market", mark: "◈" },
  { label: "Live", mark: "◉" },
  { label: "Predict", mark: "★" },
  { label: "History", mark: "▤" },
  { label: "Account", mark: "◐" },
];

function Frame({
  activeTab,
  children,
}: {
  activeTab: (typeof NAV)[number]["label"];
  children: ReactNode;
}) {
  return (
    <div
      className="pointer-events-none w-full max-w-[300px] select-none overflow-hidden rounded-2xl border shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)]"
      style={{ background: "#0a0e1a", borderColor: "#26304a", fontFamily: "var(--font-sans)" }}
      aria-hidden="true"
    >
      {/* app header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-md text-sm font-bold"
            style={{ background: "#ff7a18", color: "#0a0e1a" }}
          >
            ₿
          </div>
          <div>
            <p
              className="text-xs font-bold tracking-wide"
              style={{ fontFamily: "var(--font-display)", color: "#e8edf7" }}
            >
              BLOCKYMARKET
            </p>
            <p className="text-[8px] uppercase tracking-widest" style={{ color: "#8b97b3" }}>
              Direction Market
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[8px] uppercase tracking-widest" style={{ color: "#8b97b3" }}>
            Points
          </p>
          <p className="text-xs font-bold" style={{ color: "#ffd24a", fontFamily: "var(--font-mono)" }}>
            12,480
          </p>
        </div>
      </div>

      <p
        className="mx-4 mt-3 rounded-md px-2.5 py-1.5 text-center text-[8px] font-medium"
        style={{ background: "#121829", color: "#ffb347" }}
      >
        Live prices · Season 0 points · no cash value
      </p>

      {/* hero photo band -- placeholder until the real blocky-hero photo is provided */}
      <div
        className="relative mt-3 flex flex-col items-center justify-end gap-1 px-4 pb-4 pt-10 text-center"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 20%, rgba(255,122,24,0.22), transparent 70%), linear-gradient(180deg, #0d1220, #0a0e1a)",
        }}
      >
        <p
          className="text-base font-bold tracking-[0.15em]"
          style={{ fontFamily: "var(--font-display)", color: "#ffb347" }}
        >
          BLOCKY
        </p>
        <p className="text-xs" style={{ color: "#e8edf7" }}>
          Pick a block. Ride it.
        </p>
      </div>

      {children}

      {/* bottom nav */}
      <div className="mt-4 grid grid-cols-5" style={{ borderTop: "1px solid #1a2236" }}>
        {NAV.map((n) => (
          <div
            key={n.label}
            className="flex flex-col items-center gap-1 py-2.5 text-[7px] font-medium"
            style={{ color: n.label === activeTab ? "#ff7a18" : "#8b97b3" }}
          >
            <span className="text-[11px]">{n.mark}</span>
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketBody() {
  return (
    <div className="px-4 pt-4">
      <p className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#8b97b3" }}>
        Market
      </p>

      <div className="mt-2 grid grid-cols-5 gap-1.5">
        {COINS.map((c) => (
          <div
            key={c.sym}
            className="flex flex-col items-center justify-center rounded-lg py-2 text-[8px] font-semibold"
            style={{
              background: c.active ? "#ff7a18" : "#121829",
              color: c.active ? "#0a0e1a" : "#e8edf7",
              border: c.active ? "none" : "1px solid #26304a",
            }}
          >
            <span className="text-[10px]">{c.mark}</span>
            {c.sym}
          </div>
        ))}
      </div>

      <div
        className="mt-3 flex items-center justify-between rounded-lg px-3 py-2.5"
        style={{ background: "#121829", border: "1px solid #26304a" }}
      >
        <div>
          <p className="text-[9px]" style={{ color: "#8b97b3" }}>
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

      <p className="mt-3 text-[8px] font-semibold uppercase tracking-widest" style={{ color: "#8b97b3" }}>
        Horizon · checkpoints every 15m
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
            <span className="text-[9px] font-semibold" style={{ color: h.active ? "#ffb347" : "#e8edf7" }}>
              {h.label}
            </span>
            <span className="text-[7px]" style={{ color: "#8b97b3" }}>
              {h.mult}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccountBody() {
  return (
    <div className="px-4 pt-4">
      <div
        className="flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center"
        style={{ background: "#121829", border: "1px solid #26304a" }}
      >
        <div
          className="h-10 w-10 rounded-full"
          style={{ background: "linear-gradient(155deg, #ffc94d, #c97f12)" }}
        />
        <p className="text-[8px] uppercase tracking-widest" style={{ color: "#8b97b3" }}>
          Season 0 Balance
        </p>
        <p className="text-lg font-bold" style={{ color: "#ffd24a", fontFamily: "var(--font-mono)" }}>
          12,480
        </p>
        <div
          className="mt-1 rounded-md px-4 py-1.5 text-[9px] font-semibold"
          style={{ border: "1px solid #26304a", color: "#e8edf7" }}
        >
          Sign out
        </div>
      </div>

      <p className="mt-3 text-[8px] font-semibold uppercase tracking-widest" style={{ color: "#8b97b3" }}>
        Most wins
      </p>
      <div className="mt-1.5 space-y-1.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ background: "#121829", border: "1px solid #26304a" }}
          >
            <span className="text-[9px]" style={{ color: "#e8edf7" }}>
              Player {i}
            </span>
            <span className="text-[9px] font-semibold" style={{ color: "#27d796", fontFamily: "var(--font-mono)" }}>
              +{(4 - i) * 1200}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarketPreview() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-5">
      <Frame activeTab="Market">
        <MarketBody />
      </Frame>
      <Frame activeTab="Account">
        <AccountBody />
      </Frame>
    </div>
  );
}
