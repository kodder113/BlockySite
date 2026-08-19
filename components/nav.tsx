"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SOCIAL } from "@/lib/links";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#token", label: "$BLOCKY" },
  { href: "#community", label: "Community" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border">
            <Image
              src="/images/fourth.jpeg"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
              style={{ objectPosition: "50% 18%" }}
            />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-text">
            BLOCKY
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink
            href="#ecosystem"
            variant="ghost"
            className="px-3 text-xs"
          >
            BlockyMarket ↗
          </ButtonLink>
          <ButtonLink href={SOCIAL.telegram.url} external className="px-5 py-2.5">
            Join Blocky
          </ButtonLink>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-bg transition-[max-height] duration-300 md:hidden",
          open ? "border-t border-border/60" : "border-t-0",
        )}
        style={{ maxHeight: open ? "24rem" : "0px" }}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base font-medium text-text-muted hover:bg-surface hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <ButtonLink href="#ecosystem" variant="outline" onClick={() => setOpen(false)}>
              BlockyMarket ↗
            </ButtonLink>
            <ButtonLink href={SOCIAL.telegram.url} external>
              Join Blocky
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
