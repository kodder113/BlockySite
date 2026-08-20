import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL, BLOCKY_MARKET_URL } from "@/lib/links";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden grain-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-alt to-bg" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            Still early. Still building.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Blocky started with a token. Now the brand is moving beyond it —
            into products, competition, community, and new ways to
            participate. BlockyMarket is the first step.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-lg text-text-muted">
            See where it goes. Better yet, be part of it.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={SOCIAL.telegram.url} external>
              Join the Community
            </ButtonLink>
            <ButtonLink href={BLOCKY_MARKET_URL} variant="outline" external>
              Explore BlockyMarket ↗
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
