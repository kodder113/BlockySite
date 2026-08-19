import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const TRAITS = [
  {
    title: "Community-driven",
    body: "Momentum here comes from people showing up and taking part — on Telegram, on X, in the day-to-day conversation — not from a marketing budget.",
  },
  {
    title: "Built in public",
    body: "Blocky took shape in the open, shaped early by the people who found it first and stuck around.",
  },
  {
    title: "Web3-native",
    body: "Born on-chain and built for people already comfortable in wallets and DEX charts — not slide decks.",
  },
  {
    title: "Still building",
    body: "$BLOCKY was the first move, not the last one. Additional products are already in motion.",
  },
];

export function WhatIsBlocky() {
  return (
    <section id="about" className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What is Blocky?"
            title="A brand shaped by its community, not a boardroom."
            description="Blocky is a Web3-native brand: a token, sustained by a genuinely active community, and expanding over time into new products and experiences. There's no pitch deck behind it — just people who kept showing up."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAITS.map((trait, i) => (
            <Reveal key={trait.title} delay={0.05 * i}>
              <div className="glow-border h-full rounded-md border bg-surface p-6">
                <p className="font-display text-base font-semibold text-text">
                  {trait.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {trait.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
