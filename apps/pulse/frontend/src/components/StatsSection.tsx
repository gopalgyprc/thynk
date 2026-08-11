"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: "10K+", label: "MEMBERS" },
  { value: "2.4K+", label: "ARTICLES" },
  { value: "180+", label: "COMPANIES" },
  { value: "40+", label: "COUNTRIES" },
  { value: "100%", label: "FREE" },
];

// Splits "2.4K+" into { prefix: "", target: 2.4, decimals: 1, suffix: "K+" }
// so we can animate the numeric part and keep the literal suffix static.
function parseStat(raw: string) {
  const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, decimals: 0, suffix: raw };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), decimals, suffix };
}

function CountUpStat({ value }: { value: string }) {
  const { prefix, target, decimals, suffix } = parseStat(value);
  const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(prefix + v.toFixed(decimals) + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, target, decimals, prefix, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-pulse-600 py-16 text-white md:py-20">
      {/* Ambient background lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--color-pulse-500)_0%,_transparent_50%)] opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--color-pulse-700)_0%,_transparent_60%)] opacity-40" />
      {/* Faint grid texture for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 md:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className={`group relative flex flex-col items-center justify-center gap-2 px-4 py-6 text-center ${
                i === stats.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Divider — hidden on first item and on mobile row wraps */}
              {i !== 0 && (
                <span className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/15 md:block" />
              )}

              {/* Hover glow */}
              <span className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-2xl bg-white/0 opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:bg-pulse-400/30 group-hover:opacity-100" />

              <span className="font-display text-3xl font-extrabold tracking-tight tabular-nums sm:text-4xl md:text-5xl">
                <CountUpStat value={stat.value} />
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-pulse-200 uppercase transition-colors duration-300 group-hover:text-white sm:text-xs">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}