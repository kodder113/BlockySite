import { Coins, Users, Sparkles, Boxes } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { MarketPreview } from "@/components/brand/market-preview";

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
    body: "Ways to interact with Blocky rather than simply watch it — predictions, challenges, rankings, competition, and more.",
  },
  {
    icon: Boxes,
    title: "Products",
    body: "Things we build under the Blocky name. BlockyMarket is the first major example, with more possibilities ahead.",
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
              <Badge status="beta">Blocky&apos;s First Product</Badge>
              <p className="mt-3 font-display text-xl font-semibold text-text">
                BlockyMarket
              </p>
              <p className="mx-auto mt-1.5 max-w-xl text-sm text-text-muted">
                Prediction meets competition. BlockyMarket is a new way to
                test your read on what happens next — starting with markets
                and expanding over time into more events, challenges, and
                outcomes. Make your call, compete, earn points, and see how
                you rank.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-xs text-text-faint">
                The first major product built under the Blocky brand.
              </p>
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
