import { ArrowUpRight, Wallet, Repeat, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { CopyAddress } from "@/components/copy-address";
import { Reveal } from "@/components/motion/reveal";
import { TOKEN } from "@/lib/links";

const STEPS = [
  {
    icon: Wallet,
    title: "Get a wallet",
    body: "Download Phantom, the standard Solana wallet.",
    href: TOKEN.buyPhantom,
    cta: "Download Phantom",
  },
  {
    icon: Repeat,
    title: "Hold some SOL",
    body: "Fund your wallet with Solana to swap into $BLOCKY.",
  },
  {
    icon: ShieldCheck,
    title: "Swap for $BLOCKY",
    body: "Connect your wallet on Raydium and swap SOL for $BLOCKY.",
    href: TOKEN.buyRaydium,
    cta: "Swap on Raydium",
  },
];

const TRACKERS = [
  { name: "CoinGecko", href: TOKEN.coingecko },
  { name: "CoinMarketCap", href: TOKEN.coinmarketcap },
  { name: "DexScreener", href: TOKEN.dexscreener },
];

export function Token() {
  return (
    <section id="token" className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="$BLOCKY"
            title="The token that started it all."
            description="Before the products, there was $BLOCKY. Launched on Solana, the token brought together the first Blocky community and gave the brand its start. It remains part of the ecosystem today."
          />
          <p className="mt-5 max-w-2xl text-sm text-text-faint">
            Crypto assets involve risk. $BLOCKY carries no guarantee of value
            or returns. Do your own research.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">
              Contract address · {TOKEN.chain}
            </p>
            <div className="mt-3">
              <CopyAddress />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-text-faint">
              Track $BLOCKY
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {TRACKERS.map((t) => (
                <a
                  key={t.name}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border inline-flex items-center gap-1.5 rounded-pill border bg-surface px-4 py-2 text-sm font-medium text-text-muted hover:text-primary"
                >
                  {t.name} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0 space-y-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={0.05 * i}>
                <div className="glow-border flex items-start gap-4 rounded-md border bg-surface p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <step.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-text">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">{step.body}</p>
                    {step.href && (
                      <a
                        href={step.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        {step.cta} <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
