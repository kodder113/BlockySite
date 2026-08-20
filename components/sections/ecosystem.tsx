import { Coins, Users, Sparkles, Boxes, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { MarketPreview } from "@/components/brand/market-preview";
import { BLOCKY_MARKET_URL } from "@/lib/links";

const PILLARS = [
  {
    icon: Coins,
    title: "$BLOCKY",
    body: "Where the story started. The original Blocky token lives on Solana and remains part of the broader brand.",
  },
  {
    icon: Users,
    title: "Community",
    body: "The people who gave Blocky momentum — following, participating, sharing ideas, and helping the brand grow.",
  },
  {
    icon: Sparkles,
    title: "Experiences",
    body: "Predictions, challenges, competition, and new ways to participate in Blocky beyond simply holding the token.",
  },
  {
    icon: Boxes,
    title: "Products",
    body: "Blocky is growing through things people can actually use. BlockyMarket is the first — a working prediction and competition experience, with more possibilities ahead.",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The Ecosystem"
            title="One brand. More ways to be part of it."
            description="Blocky is growing beyond where it started. The token remains part of the story, while community, competition, products, and new experiences are shaping what comes next."
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
          <div className="glow-border mt-6 rounded-md border bg-gradient-to-br from-surface to-bg-alt p-7">
            <div className="mx-auto max-w-2xl text-center">
              <Badge status="beta">First Product · Beta</Badge>
              <p className="mt-3 font-display text-xl font-semibold text-text">
                BlockyMarket
              </p>
              <p className="mx-auto mt-1.5 max-w-xl text-sm text-text-muted">
                BlockyMarket is where predictions become competition. Put
                Blocky Points behind your call, follow outcomes live, compete
                across different prediction formats, and build your record
                over time.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-xs text-text-faint">
                Starting with crypto markets and community predictions, with
                more markets, challenges, and ways to compete ahead.
              </p>
              <div className="mt-6 flex justify-center">
                <ButtonLink href={BLOCKY_MARKET_URL} external>
                  Explore BlockyMarket <ArrowUpRight size={16} />
                </ButtonLink>
              </div>
            </div>
            <div className="mt-8">
              <MarketPreview />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
