import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const TRAITS = [
  {
    title: "Community-owned",
    body: "The brand grows because people show up for it — on Telegram, on X, in the group chats.",
  },
  {
    title: "Built in public",
    body: "Blocky grew out of internet culture, shaped early by the people who found it first.",
  },
  {
    title: "Web3-native",
    body: "Born on-chain, built for people who already live in wallets and DEX charts, not decks.",
  },
  {
    title: "Still building",
    body: "$BLOCKY was the first product. It won't be the last — more is already in motion.",
  },
];

export function WhatIsBlocky() {
  return (
    <section id="about" className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What is Blocky?"
            title="A brand built by its community, not a boardroom."
            description="Blocky is a Web3-native brand — built around a token, sustained by an active community, and expanding into new products and experiences over time. It's not a pitch deck; it's something people actually show up for."
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
