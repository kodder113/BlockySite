import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL } from "@/lib/links";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 grain-bg"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
              The Blocky Brand
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl">
              Built with swagger.
              <br />
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Built to last.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-text-muted sm:text-xl">
              Blocky started as a Web3 identity with unmistakable attitude.
              Now it&apos;s growing into a full ecosystem — a token, a
              community, and a lineup of products for people who don&apos;t
              follow trends. They start them.
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

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-border/70 shadow-[0_0_80px_-20px_rgba(245,166,35,0.35)]">
            <Image
              src="/images/fourth.jpeg"
              alt="Blocky, the block-headed mascot, in a gold tuxedo with a Bitcoin chain"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
