import Link from "next/link";
import { SOCIAL, TOKEN } from "@/lib/links";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#ecosystem", label: "Ecosystem" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/nfts", label: "NFTs" },
  { href: "/#token", label: "$BLOCKY" },
  { href: "/#community", label: "Community" },
];

const SOCIAL_LINKS = [
  { href: SOCIAL.x.url, label: "X / Twitter" },
  { href: SOCIAL.telegram.url, label: "Telegram" },
  { href: SOCIAL.instagram.url, label: "Instagram" },
  { href: SOCIAL.tiktok.url, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold text-text">BLOCKY</p>
            <p className="mt-3 max-w-xs text-sm text-text-muted">
              Blocky is a digital brand built around community, competition,
              products, and the idea that where something starts doesn&apos;t
              have to define where it goes.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">
              Site
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-text-muted hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">
              Community
            </p>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">
              $BLOCKY contract ({TOKEN.chain})
            </p>
            <p className="mt-4 break-all rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-text-muted">
              {TOKEN.contract}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Blocky. All rights reserved.</p>
          <p>$BLOCKY is a digital asset and involves risk. Nothing on this site constitutes financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
