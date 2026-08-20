import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const TRAITS = [
  {
    title: "Community-powered",
    body: "Blocky grew because people showed up, stayed involved, shared it, and gave the brand a life beyond the token.",
  },
  {
    title: "Built in public",
    body: "We're building Blocky where people can see it — launching ideas, testing products, learning, and evolving as we go.",
  },
  {
    title: "Internet-born",
    body: "Blocky came from crypto and internet culture. That origin is part of the brand, but it doesn't define where the brand can go.",
  },
  {
    title: "Just getting started",
    body: "$BLOCKY started the story. BlockyMarket is the first product built beyond it — and the beginning of where the Blocky brand can go next.",
  },
];

export function WhatIsBlocky() {
  return (
    <section id="about" className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="The Idea"
            title="A brand built by its community, not a boardroom."
            description="Blocky is an internet-born brand shaped by the people around it. What began with $BLOCKY is evolving into something broader — products, competition, experiences, and a community that gets to be there while it's built."
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
