import { Coins, Users, Sparkles, Boxes } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { MarketPreview } from "@/components/brand/market-preview";

const PILLARS = [
  {
    icon: Coins,
    title: "$BLOCKY",
    body: "The token that started it all, and still the foundation the rest of the ecosystem is built on. Live on Solana.",
  },
  {
    icon: Users,
    title: "Community",
    body: "The people who talk about Blocky, build around it, and keep it moving — the actual source of the brand's momentum.",
  },
  {
    icon: Sparkles,
    title: "Experiences",
    body: "New ways to engage with Blocky that go beyond simply holding the token.",
  },
  {
    icon: Boxes,
    title: "Products",
    body: "Independent projects built under the Blocky name, shipped over time as the ecosystem matures.",
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
            description="Blocky isn't a static token page. It's a set of pieces working together — here's what makes up the ecosystem today, and where it's headed."
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
              <Badge status="beta">First Product · Preview</Badge>
              <p className="mt-3 font-display text-xl font-semibold text-text">
                BlockyMarket
              </p>
              <p className="mx-auto mt-1.5 max-w-xl text-sm text-text-muted">
                One of the first products developed within the expanding
                Blocky ecosystem — a competitive prediction experience that
                tests your read on the market. Not yet open to the public;
                preview only.
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
