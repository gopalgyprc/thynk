"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type Stat = {
  icon: (props: { className?: string }) => JSX.Element;
  value: number;
  format: (v: number) => string;
  label: string;
  sub: string;
  highlight?: boolean;
};

function UniversityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3c2.8 2.5 4.2 5.8 4.2 9s-1.4 6.5-4.2 9c-2.8-2.5-4.2-5.8-4.2-9s1.4-6.5 4.2-9z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0112 3.5a6.5 6.5 0 016.5 6.5c0 4.9-6.5 11-6.5 11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const stats: Stat[] = [
  {
    icon: UniversityIcon,
    value: 1000,
    format: (v) => `${Math.round(v).toLocaleString("en-IN")}+`,
    label: "Indian Colleges",
    sub: "Partnered network",
  },
  {
    icon: GlobeIcon,
    value: 150,
    format: (v) => `${Math.round(v)}+`,
    label: "Global Universities",
    sub: "Across the globe",
    highlight: true,
  },
  {
    icon: MapPinIcon,
    value: 15,
    format: (v) => `${Math.round(v)}+`,
    label: "Countries",
    sub: "And growing",
  },
];

function CountUp({
  target,
  format,
}: {
  target: number;
  format: (v: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState("0");

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.8, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(format(v)));
    return unsub;
  }, [spring, format]);

  return <span ref={ref}>{display}</span>;
}

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const listItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-purple-500 py-20 sm:py-24">
      {/* Ambient radial lights, drifting slowly */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-purple-300/25 blur-[120px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-purple-700/25 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-900/20 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Faint grid, masked toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.label} variants={listItem} whileHover="hover" className="group relative flex">
                {/* Pulsing glow behind card — breathes slowly, brightens on hover */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(120%_120%_at_30%_0%,_rgba(216,180,254,0.5)_0%,_transparent_60%)]"
                  animate={{ opacity: stat.highlight ? [0.35, 0.6, 0.35] : [0.12, 0.25, 0.12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  variants={{ hover: { opacity: 0.8 } }}
                />

                <motion.div
                  variants={{ hover: { y: -6 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative flex h-full w-full flex-col items-center rounded-3xl border px-6 py-10 text-center backdrop-blur-sm transition-colors duration-300 ${
                    stat.highlight
                      ? "border-white/40 bg-white/[0.12]"
                      : "border-white/20 bg-white/[0.07] group-hover:border-white/40"
                  }`}
                >
                  {/* Icon badge — gentle continuous float, pops on hover */}
                  <motion.div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    variants={{ hover: { scale: 1.1 } }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>

                  <p className="font-serif text-4xl font-bold text-white sm:text-5xl">
                    <CountUp target={stat.value} format={stat.format} />
                  </p>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{stat.sub}</p>

                  {/* Underline accent, expands on hover */}
                  <motion.span
                    aria-hidden
                    className="mt-4 block h-[3px] rounded-full bg-white"
                    variants={{ hover: { width: "40px" } }}
                    initial={{ width: "20px" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}