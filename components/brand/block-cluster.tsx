"use client";

import { motion, useReducedMotion } from "framer-motion";

type Block = {
  size: number;
  top: string;
  left: string;
  rotate: number;
  z: number;
  variant: "glass" | "fill" | "outline";
  delay: number;
  floatY: number;
  duration: number;
};

const BLOCKS: Block[] = [
  { size: 168, top: "8%", left: "18%", rotate: -6, z: 3, variant: "fill", delay: 0, floatY: 14, duration: 7 },
  { size: 120, top: "46%", left: "6%", rotate: 8, z: 2, variant: "glass", delay: 0.15, floatY: 10, duration: 8.5 },
  { size: 96, top: "58%", left: "52%", rotate: -4, z: 4, variant: "glass", delay: 0.3, floatY: 12, duration: 6.5 },
  { size: 72, top: "12%", left: "62%", rotate: 10, z: 1, variant: "outline", delay: 0.45, floatY: 8, duration: 9 },
  { size: 54, top: "76%", left: "22%", rotate: -12, z: 5, variant: "outline", delay: 0.2, floatY: 9, duration: 7.5 },
];

const variantStyle: Record<Block["variant"], React.CSSProperties> = {
  fill: {
    background: "linear-gradient(155deg, #ffe2a3 0%, #f5a623 45%, #c97f12 100%)",
    boxShadow: "0 30px 60px -20px rgba(245,166,35,0.55), inset 0 1px 0 rgba(255,255,255,0.4)",
    border: "1px solid rgba(255,233,180,0.5)",
  },
  glass: {
    background: "linear-gradient(155deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(245,166,35,0.28)",
    boxShadow: "0 20px 45px -18px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
  },
  outline: {
    background: "rgba(245,166,35,0.04)",
    border: "1px solid rgba(184,174,156,0.35)",
  },
};

export function BlockCluster({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <div className="relative h-full w-full">
        {BLOCKS.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-2xl"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              zIndex: b.z,
              rotate: b.rotate,
              ...variantStyle[b.variant],
            }}
            initial={{ opacity: 0, y: 24, rotate: b.rotate }}
            animate={
              reduce
                ? { opacity: 1, y: 0, rotate: b.rotate }
                : {
                    opacity: 1,
                    y: [0, -b.floatY, 0],
                    rotate: b.rotate,
                  }
            }
            transition={
              reduce
                ? { duration: 0.6, delay: b.delay }
                : {
                    opacity: { duration: 0.6, delay: b.delay },
                    y: {
                      duration: b.duration,
                      delay: b.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          />
        ))}
      </div>
    </div>
  );
}
