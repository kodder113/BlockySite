import { Coins, Users, Sparkles, Boxes, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { BLOCKY_MARKET_URL, NFT } from "@/lib/links";

const PILLARS = [
  {
    icon: Coins,
    title: "$BLOCKY",
    body: "The token and the foundation of the original Blocky community, live on Solana.",
  },
  {
    icon: Users,
    title: "Community",
    body: "The people building, posting, and showing up — the reason the brand has any weight at all.",
  },
  {
    icon: Sparkles,
    title: "Experiences",
    body: "New ways for the community to interact with Blocky beyond just holding the token.",
  },
  {
    icon: Boxes,
    title: "Products",
    body: "New Blocky-built projects, shipped over time as the ecosystem expands.",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The Ecosystem"
            title="One brand, growing in every direction."
            description="Blocky isn't standing still as a static token page. Here's what the ecosystem is made of today, and how it's expanding."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className="glow-border h-full rounded-md border bg-surface p-6">
                <p.icon className="text-primary" size={26} strokeWidth={1.75} />
                <p className="mt-4 font-display text-lg font-semibold text-text">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="glow-border mt-6 flex flex-col gap-6 rounded-md border bg-gradient-to-br from-surface to-bg-alt p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Badge status="beta">First Product · MVP</Badge>
              <p className="mt-3 font-display text-xl font-semibold text-text">
                BlockyMarket
              </p>
              <p className="mt-1.5 max-w-xl text-sm text-text-muted">
                One of the first products being developed within the
                expanding Blocky ecosystem — a competitive prediction
                experience where you test your instincts against the market.
              </p>
            </div>
            <a
              href={BLOCKY_MARKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-pill border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Try BlockyMarket <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={NFT.opensea}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border group mt-6 flex items-center justify-between gap-4 rounded-md border bg-surface p-5"
          >
            <div>
              <p className="font-display text-sm font-semibold text-text">
                NFT Collection
              </p>
              <p className="mt-1 text-sm text-text-muted">
                A separate Blocky collectible set, live on Ethereum.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
              View on OpenSea
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
