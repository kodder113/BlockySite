"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

type Status = "live" | "beta" | "planned" | "future" | "exploring";

const PHASES: {
  n: string;
  title: string;
  status: Status;
  label: string;
  items: string[];
}[] = [
  {
    n: "01",
    title: "Foundation",
    status: "live",
    label: "Live",
    items: [
      "$BLOCKY token launch & contract audit",
      "CoinGecko, DexScreener & CoinMarketCap listings",
      "Brand and visual identity launch",
      "Telegram and X community formed",
    ],
  },
  {
    n: "02",
    title: "BlockyMarket MVP",
    status: "beta",
    label: "Beta",
    items: [
      "Crypto price & outcome predictions",
      "Head-to-head challenges",
      "Blocky Points and basic competition mechanics",
    ],
  },
  {
    n: "03",
    title: "Competition",
    status: "planned",
    label: "Planned",
    items: [
      "Global and weekly rankings",
      "Prediction streaks and achievements",
      "Expanded challenge categories",
    ],
  },
  {
    n: "04",
    title: "Social & Invites",
    status: "future",
    label: "Future",
    items: [
      "Invite links and shareable challenges",
      "Player-vs-player challenges",
      "Referral mechanics",
    ],
  },
  {
    n: "05",
    title: "Blocky Leagues",
    status: "future",
    label: "Future",
    items: [
      "Private leagues with seasons",
      "Daily & weekly challenge formats",
      "Standings, badges, and season champions",
    ],
  },
  {
    n: "06",
    title: "Blocky Wallet",
    status: "exploring",
    label: "Exploring",
    items: [
      "One place for Blocky Points, identity & achievements",
      "Competition history and ecosystem participation",
      "Financial model not yet decided — no cash-out, no wagering",
    ],
  },
];

export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="roadmap" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title="Blocky's evolution, phase by phase."
            description="From a token with attitude to a full ecosystem. Some of this is already live — the rest is the vision we're building toward."
            className="mx-auto"
          />
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-9 sm:pl-12">
          <div className="absolute left-3 top-1 bottom-1 w-px bg-border sm:left-4" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute left-3 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-primary-light to-primary sm:left-4"
          />

          <ol className="space-y-12">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.n} delay={i * 0.04}>
                <li className="relative">
                  <span className="absolute -left-9 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-bg font-mono text-[10px] text-text-faint sm:-left-12 sm:h-7 sm:w-7">
                    {phase.n}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
                      {phase.title}
                    </h3>
                    <Badge status={phase.status}>{phase.label}</Badge>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-text-muted"
                      >
                        · {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
