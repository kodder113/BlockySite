// Real screenshots of the BlockyMarket application, cropped from a
// composite supplied by the project owner. Account/challenge data in
// these shots is placeholder (Joe, Sarah, Mike, joe.doe@email.com) --
// no real user data is published here.
//
// These replaced the earlier hand-built CSS mockups: the section claims
// BlockyMarket is a working beta, so it should show the actual product.

import Image from "next/image";

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const SHOTS: Shot[] = [
  {
    src: "/images/market/market.png",
    alt: "BlockyMarket's market screen: ten crypto markets, live Bitcoin price, prediction horizons with payout multipliers, a points stake field, and a confirmation panel showing protocol fee, implied odds and potential return.",
    caption: "Pick a market, set your horizon, stake Blocky Points.",
    width: 542,
    height: 549,
  },
  {
    src: "/images/market/live.png",
    alt: "BlockyMarket's live screen tracking an open BTC Higher prediction with entry price, current price, move percentage, checkpoint progress and a countdown.",
    caption: "Track open predictions through each checkpoint.",
    width: 483,
    height: 549,
  },
  {
    src: "/images/market/challenges.png",
    alt: "BlockyMarket's challenges screen showing a community prediction pool with pooled points, player options, and resolved results.",
    caption: "Community pools, resolved against real outcomes.",
    width: 509,
    height: 549,
  },
  {
    src: "/images/market/history.png",
    alt: "BlockyMarket's history screen showing settled predictions with win rate, net points, and a list of past BTC predictions with entry and exit prices.",
    caption: "A settled record: win rate, net points, every call.",
    width: 542,
    height: 427,
  },
  {
    src: "/images/market/account-stats.png",
    alt: "BlockyMarket's account screen showing a Season 0 points balance, weekly rank and stats including wins, win rate, net points and best streak, plus an all-time most-wins leaderboard.",
    caption: "Rank, streaks, and all-time standings.",
    width: 483,
    height: 427,
  },
  {
    src: "/images/market/account-payouts.png",
    alt: "BlockyMarket's account settings showing a configurable session loss limit and an explanation of how payout multipliers are set for each horizon.",
    caption: "Session limits and how payouts are set.",
    width: 509,
    height: 427,
  },
];

export function MarketPreview({ shots = SHOTS }: { shots?: Shot[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {shots.map((shot) => (
        <figure key={shot.src} className="flex flex-col">
          <div className="glow-border overflow-hidden rounded-lg border bg-[#0a0e1a] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-text-faint">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
