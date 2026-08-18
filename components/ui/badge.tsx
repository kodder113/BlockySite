import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  live: "bg-success/15 text-success border-success/30",
  beta: "bg-primary/15 text-primary border-primary/30",
  planned: "bg-text-muted/15 text-text-muted border-text-muted/30",
  future: "bg-accent-red/10 text-accent-red border-accent-red/25",
  exploring: "bg-surface text-text-faint border-border",
};

export function Badge({
  children,
  status,
  className,
}: {
  children: ReactNode;
  status?: keyof typeof statusStyles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        status ? statusStyles[status] : "border-border text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
