"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { Globe2, GraduationCap, MapPinned, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: number;
  format: (v: number) => string;
  label: string;
  sub: string;
  detail: string;
  featured?: boolean;
};

const stats: Stat[] = [
  {
    icon: GraduationCap,
    value: 1000,
    format: (v) => `${Math.round(v).toLocaleString("en-IN")}+`,
    label: "Indian Colleges",
    sub: "Partnered network",
    detail: "Strong reach across education institutions and admission teams.",
  },
  {
    icon: Globe2,
    value: 150,
    format: (v) => `${Math.round(v)}+`,
    label: "Global Universities",
    sub: "International access",
    detail: "Connections that help institutions reach students beyond borders.",
    featured: true,
  },
  {
    icon: MapPinned,
    value: 15,
    format: (v) => `${Math.round(v)}+`,
    label: "Countries",
    sub: "And growing",
    detail: "Market presence built for global education growth campaigns.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

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
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(format(v)));
    return unsub;
  }, [format, spring]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#17083f] py-12 text-white sm:py-16">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/25 blur-[100px]"
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-[80px]"
        animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-indigo-300/15 blur-[90px]"
        animate={{ x: [0, -25, 0], y: [0, 16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 35%, transparent 100%)",
        }}
      />

      <div className="section-container relative px-4 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-head text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={12} />
            Trusted education reach
          </motion.span>

          <motion.h2
            className="mt-4 font-inter text-[clamp(26px,3vw,42px)] font-semibold leading-[1.1] text-white"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            A network built to move education brands forward.
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-xl font-inter text-sm leading-7 text-white/70"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.16, duration: 0.45 }}
          >
            From Indian admission growth to international university
            partnerships, Thynk Success brings the reach, positioning, and
            campaign structure education teams need to scale.
          </motion.p>
        </div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -4, scale: stat.featured ? 1.015 : 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative flex flex-col items-center overflow-hidden rounded-2xl border p-6 text-center backdrop-blur-xl ${
                  stat.featured
                    ? "border-white/35 bg-white/[0.18] shadow-[0_20px_50px_-25px_rgba(168,85,247,0.6)]"
                    : "border-white/18 bg-white/[0.09] shadow-[0_15px_40px_-30px_rgba(255,255,255,0.3)]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_50%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white shadow-[0_12px_25px_-12px_rgba(255,255,255,0.4)]">
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={22} />
                  </motion.span>
                </div>
                <div className="relative mt-5">
                  <p className="font-serif text-[clamp(36px,4vw,52px)] font-bold leading-none tracking-tight text-white">
                    <CountUp target={stat.value} format={stat.format} />
                  </p>
                  <p className="mt-2 font-head text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-inter text-xs font-medium text-white/65">
                    {stat.sub}
                  </p>
                  <p className="mx-auto mt-3 max-w-[220px] font-inter text-xs leading-5 text-white/70">
                    {stat.detail}
                  </p>
                </div>
                <motion.span
                  aria-hidden
                  className="relative mx-auto mt-4 block h-0.5 rounded-full bg-white/60"
                  initial={{ width: 20 }}
                  whileInView={{ width: stat.featured ? 48 : 32 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}