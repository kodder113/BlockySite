import { Coins, Users, Sparkles, Boxes } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { MarketPreview } from "@/components/brand/market-preview";

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
          <div className="glow-border mt-6 grid gap-6 rounded-md border bg-gradient-to-br from-surface to-bg-alt p-7 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <Badge status="beta">First Product · Preview</Badge>
              <p className="mt-3 font-display text-xl font-semibold text-text">
                BlockyMarket
              </p>
              <p className="mt-1.5 max-w-xl text-sm text-text-muted">
                One of the first products being developed within the
                expanding Blocky ecosystem — a competitive prediction
                experience where you test your instincts against the market.
                Not yet open to the public — preview only.
              </p>
            </div>
            <div className="w-full max-w-[280px] sm:justify-self-end">
              <MarketPreview />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
