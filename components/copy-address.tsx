"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { TOKEN } from "@/lib/links";

export function CopyAddress() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(TOKEN.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard permission denied — nothing to fall back to silently
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="glow-border flex w-full items-center justify-between gap-3 rounded-md border bg-surface px-4 py-3.5 text-left"
      aria-label="Copy $BLOCKY contract address"
    >
      <span className="min-w-0 flex-1 truncate font-mono text-xs text-text-muted sm:text-sm">
        {TOKEN.contract}
      </span>
      <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary">
        {copied ? (
          <>
            <Check size={14} /> Copied
          </>
        ) : (
          <>
            <Copy size={14} /> Copy
          </>
        )}
      </span>
    </button>
  );
}
