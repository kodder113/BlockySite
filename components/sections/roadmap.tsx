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
      "$BLOCKY launch and contract audit",
      "Major token tracking listings",
      "Blocky identity and visual brand established",
      "New marketing website",
      "Telegram and X community formed",
    ],
  },
  {
    n: "02",
    title: "BlockyMarket MVP",
    status: "beta",
    label: "Beta",
    items: [
      "Market and outcome predictions",
      "Blocky Points",
      "Head-to-head competition",
      "Core prediction experience",
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
      "Expanded prediction categories",
      "Seasonal competition",
    ],
  },
  {
    n: "04",
    title: "Social & Challenges",
    status: "future",
    label: "Future",
    items: [
      "Invite links and shareable predictions",
      "Player-vs-player challenges",
      "Referral mechanics",
      "Social competition",
    ],
  },
  {
    n: "05",
    title: "Blocky Leagues",
    status: "future",
    label: "Future",
    items: [
      "Private leagues and seasons",
      "Daily and weekly challenges",
      "Standings, badges, and champions",
      "Compete with friends or communities",
    ],
  },
  {
    n: "06",
    title: "Blocky Profile",
    status: "exploring",
    label: "Exploring",
    items: [
      "One identity across Blocky experiences",
      "Points, achievements, and competition history",
      "Rankings and ecosystem participation",
      "A home for your activity across Blocky",
    ],
  },
  {
    n: "07",
    title: "Blocky AI",
    status: "exploring",
    label: "Exploring",
    items: [
      "An interactive Blocky presence across the ecosystem",
      "Context and insights inside BlockyMarket",
      "Help understanding markets, events, and competition",
      "Capabilities still being explored",
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
            description="The token was the starting point, not the finish line. We're building outward from it — first through BlockyMarket, then through competition, social experiences, and whatever proves worth building next."
            className="mx-auto"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-faint">
            Some of this is live. Some is planned. Some we&apos;re still
            exploring. That&apos;s intentional.
          </p>
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
