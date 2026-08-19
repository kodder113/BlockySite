import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL } from "@/lib/links";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="hero-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
              The Blocky Brand
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl">
              Built on conviction.
              <br />
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Built to last.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-text-muted sm:text-xl">
              Blocky began as a Web3 token with a distinct identity of its
              own. It has since grown into a wider ecosystem — spanning the
              token, an engaged community, and an expanding set of products
              built around them.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="#about">Explore Blocky</ButtonLink>
              <ButtonLink href="#token" variant="outline">
                Get $BLOCKY
              </ButtonLink>
              <ButtonLink href={SOCIAL.telegram.url} variant="ghost" external>
                Join the Community →
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto h-[340px] w-full max-w-lg sm:h-[420px] lg:h-[520px] lg:max-w-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 55%, rgba(245,166,35,0.28), transparent 70%)",
            }}
          />
          <Image
            src="/images/hero-block.png"
            alt="A sculptural Blocky monogram built from stacked black and gold blocks"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="relative object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}
