import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL, TOKEN } from "@/lib/links";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden grain-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-alt to-bg" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            Be part of what Blocky builds next.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Blocky is a brand in motion — a token, a community, and an
            ecosystem still being built. Come be part of it early.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={SOCIAL.telegram.url} external>
              Join the Community
            </ButtonLink>
            <ButtonLink href={TOKEN.buyRaydium} variant="outline" external>
              Get $BLOCKY
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
