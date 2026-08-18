import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const TRAITS = [
  {
    title: "Culture-first",
    body: "Blocky was built inside meme culture, not bolted onto it. The attitude is the point.",
  },
  {
    title: "Community-owned",
    body: "The brand grows because people show up for it — on Telegram, on X, in the group chats.",
  },
  {
    title: "Web3-native",
    body: "Born on-chain, built for people who already live in wallets and DEX charts, not decks.",
  },
  {
    title: "Still experimenting",
    body: "$BLOCKY was the first move, not the last one. New products are already in motion.",
  },
];

export function WhatIsBlocky() {
  return (
    <section id="about" className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/third.jpeg"
              alt="Blocky mascot in a white tuxedo with gold rockets behind him"
              fill
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="What is Blocky?"
                title="A brand with a face, a community with a chip on its shoulder."
                description="Blocky isn't trying to sound like a bank. It's a Web3 identity that started as a meme coin with real personality, and it's carrying that same energy into everything built around it — community, products, and whatever's next."
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {TRAITS.map((trait, i) => (
                <Reveal key={trait.title} delay={0.05 * i}>
                  <div className="rounded-md border border-border bg-surface p-5">
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
        </div>
      </div>
    </section>
  );
}
