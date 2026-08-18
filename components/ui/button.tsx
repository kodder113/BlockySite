import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gradient-to-b from-primary-light to-primary text-black shadow-[0_0_0_1px_rgba(0,0,0,0.15)_inset] hover:shadow-[0_0_32px_-6px_rgba(245,166,35,0.6)] hover:brightness-105 active:brightness-95",
  outline:
    "border border-border text-text bg-transparent hover:border-primary/60 hover:text-primary",
  ghost: "text-text-muted hover:text-text bg-transparent",
};

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  external,
  ...props
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const extProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...extProps}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: {
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
