import { Send, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SOCIAL } from "@/lib/links";

function XIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.6 3c.4 2.4 1.9 4 4.4 4.2v3.1c-1.6.1-3-.4-4.4-1.3v6.1c0 3.4-2.7 5.9-6 5.9-3.3 0-6-2.6-6-5.9s2.7-5.9 6-5.9c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.6 0 3-1.3 3-3.2V3z" />
    </svg>
  );
}

const CHANNELS = [
  {
    name: "Telegram",
    icon: Send,
    href: SOCIAL.telegram.url,
    stat: SOCIAL.telegram.label,
    cta: "Join Now",
  },
  {
    name: "X",
    icon: XIcon,
    href: SOCIAL.x.url,
    stat: SOCIAL.x.label,
    cta: "Follow Us",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: SOCIAL.instagram.url,
    stat: SOCIAL.instagram.label,
    cta: "Follow Us",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: SOCIAL.tiktok.url,
    stat: SOCIAL.tiktok.label,
    cta: "Follow Us",
  },
];

export function Community() {
  return (
    <section id="community" className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Join Us"
            title="Blocky gets better when more people show up."
            description="Telegram, X, Instagram, TikTok — this is where the Blocky community actually lives. Less a broadcast channel, more an ongoing conversation."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * i}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border group flex h-full flex-col justify-between gap-6 rounded-md border bg-surface p-5"
              >
                <div className="flex items-center justify-between">
                  <c.icon size={20} className="text-primary" />
                  <ArrowUpRight
                    size={16}
                    className="text-text-faint transition-colors group-hover:text-primary"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-text">
                    {c.name}
                  </p>
                  <p className="text-xs text-text-faint">{c.stat}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
