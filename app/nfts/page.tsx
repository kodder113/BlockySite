import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { COLLECTION, TRAIT_CATEGORIES, NFT_ITEMS } from "@/lib/nft-items";

export const metadata: Metadata = {
  title: "Blocky AI Agents — The Collection",
  description:
    "10,000 Blocky Agents on Ethereum. A collectible extension of the Blocky character and the community that shaped the brand early on.",
};

const FACTS = [
  { label: "Supply", value: COLLECTION.supply },
  { label: "Chain", value: COLLECTION.chain },
  { label: "Launched", value: COLLECTION.launched },
  { label: "Marketplace", value: "OpenSea" },
];

export default function NftsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="hero-bg pointer-events-none absolute inset-0" />

          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
            <Reveal>
              <Link
                href="/#ecosystem"
                className="inline-flex items-center gap-1.5 text-sm text-text-faint transition-colors hover:text-primary"
              >
                <ArrowLeft size={14} /> Back to Blocky
              </Link>
            </Reveal>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
              <div>
                <Reveal>
                  <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
                    Blocky Collectibles
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl">
                    {COLLECTION.supply} Agents.
                    <br />
                    <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                      One signal.
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 max-w-xl text-lg text-text-muted">
                    {COLLECTION.description}
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <ButtonLink href={COLLECTION.opensea} external>
                      View on OpenSea <ArrowUpRight size={16} />
                    </ButtonLink>
                    <ButtonLink href="#gallery" variant="outline">
                      Browse the Agents
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>

              {/* featured trio */}
              <Reveal delay={0.1} className="grid grid-cols-3 gap-3">
                {NFT_ITEMS.slice(0, 3).map((item, i) => (
                  <a
                    key={item.tokenId}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glow-border relative aspect-[2/3] overflow-hidden rounded-lg border ${
                      i === 1 ? "translate-y-4" : ""
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 15vw, 30vw"
                      className="object-cover"
                    />
                  </a>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Facts ── */}
        <section className="border-b border-border/60 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {FACTS.map((f, i) => (
                <Reveal key={f.label} delay={0.05 * i}>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-text-faint">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-2xl font-bold text-text">
                      {f.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="The Story"
                  title="Where the character came from."
                />
              </Reveal>
              <Reveal delay={0.05}>
                <div className="space-y-5 text-text-muted">
                  <p>
                    Before the products and before the roadmap, Blocky was a
                    character — a block-headed agent with sunglasses and a
                    gold chain that people recognized instantly. The
                    collection took that character and gave it {COLLECTION.supply}{" "}
                    variations, each one a distinct Agent.
                  </p>
                  <p>
                    Every Agent is assembled from a set of traits, so no two
                    are identical. Some combinations are common. Some are the
                    kind you screenshot and post in the group chat.
                  </p>
                  <p className="text-text-faint">
                    The collection lives on {COLLECTION.chain} and is separate
                    from $BLOCKY, which runs on Solana. Owning one is about
                    the character and the community around it — not a claim on
                    the token or on anything Blocky builds later.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* trait categories */}
            <div className="mt-14">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">
                Trait categories
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TRAIT_CATEGORIES.map((t, i) => (
                  <Reveal key={t.name} delay={0.05 * i}>
                    <div className="glow-border h-full rounded-md border bg-surface p-5">
                      <p className="font-display text-lg font-semibold text-text">
                        {t.name}
                      </p>
                      <p className="mt-1 text-sm text-text-muted">
                        {t.count} variations
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section id="gallery" className="border-b border-border/60 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="The Agents"
                title="A look at the squad."
                description={`A sample of the ${COLLECTION.supply} Agents. Tap any one to open it on OpenSea.`}
                className="mx-auto"
              />
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {NFT_ITEMS.map((item, i) => (
                <Reveal key={item.tokenId} delay={Math.min(i, 10) * 0.03}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-border group block overflow-hidden rounded-md border bg-surface"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between px-3 py-2.5">
                      <span className="truncate font-mono text-xs text-text-muted">
                        {item.name}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-text-faint transition-colors group-hover:text-primary"
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 text-center">
                <ButtonLink href={COLLECTION.opensea} external>
                  See all {COLLECTION.supply} on OpenSea <ArrowUpRight size={16} />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="relative overflow-hidden grain-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-alt to-bg" />
          <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Pick your Agent.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-text-muted">
                Availability and pricing are set by holders on the open
                market, so what&apos;s listed changes over time. OpenSea is
                the place to check.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink href={COLLECTION.opensea} external>
                  View Collection on OpenSea <ArrowUpRight size={16} />
                </ButtonLink>
                <ButtonLink href="/#ecosystem" variant="outline">
                  Back to Blocky
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-10 max-w-xl text-xs text-text-faint">
                Contract ({COLLECTION.chain}):{" "}
                <span className="break-all font-mono">{COLLECTION.contract}</span>
              </p>
              <p className="mx-auto mt-2 max-w-xl text-xs text-text-faint">
                Digital collectibles involve risk. Nothing on this site
                constitutes financial advice.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
