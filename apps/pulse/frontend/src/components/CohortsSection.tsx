"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const cohorts = [
  {
    icon: "/assets/Icon-1.png",
    tag: "For Individuals",
    title: "Educators & Teachers",
    description: "Share classroom innovations, teaching methods, and real challenges. Connect with peers across schools worldwide.",
    metricValue: 3200,
    metricLabel: "Educators",
    accent: "#7C3AED",
  },
  {
    icon: "/assets/building-2.png",
    tag: "For Organizations",
    title: "EdTech Companies",
    description: "Publish thought leadership, product insights, and case studies. Build authentic trust with educators.",
    metricValue: 180,
    metricLabel: "Companies",
    accent: "#5A36D9",
  },
  {
    icon: "/assets/Icon-2.png",
    tag: "For Individuals",
    title: "Sales Professionals",
    description: "Real conversations about selling in education — strategies, objections, and what actually closes deals.",
    metricValue: 840,
    metricLabel: "Professionals",
    accent: "#9333EA",
  },
];

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display.toLocaleString("en-IN")}+</span>;
}

export default function CohortsSection() {
  return (
    <section id="community" className="relative overflow-hidden bg-[#FBFAFF] py-20 sm:py-28">
      {/* Ambient light + faint grid, same vocabulary as the other sections */}
      <div className="pointer-events-none absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-pulse-100/40 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-100/30 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(90,54,217,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(90,54,217,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-container section-padding relative text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl"
        >
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-pulse-600">
            <span className="h-px w-6 bg-pulse-600/50" />
            Built for every education professional
            <span className="h-px w-6 bg-pulse-600/50" />
          </span>
          <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            <span className="text-[#5A36D9]">One Platform</span>,{" "}
            <span className="font-serif font-normal italic text-slate-700">Every Voice</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Whether you teach a class of 30 or run an EdTech company — there&apos;s a place for you in Thynk Pulse.
          </p>
        </motion.div>

        {/* Cohort Cards */}
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 md:grid-cols-3">
          {cohorts.map((cohort, i) => (
            <motion.div
              key={cohort.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover="hover"
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-purple-100/70 bg-white/80 p-7 text-left shadow-[0_20px_60px_-25px_rgba(90,54,217,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_25px_70px_-20px_rgba(90,54,217,0.4)] sm:p-8"
              style={{ ["--accent" as string]: cohort.accent }}
            >
              {/* Watermark numeral — quiet signature element, not a sequence marker */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[7rem] font-extrabold leading-none opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09]"
                style={{ color: "var(--accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Glow blob, hover-triggered */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                style={{ background: "var(--accent)" }}
                initial={{ opacity: 0, scale: 0.85 }}
                variants={{ hover: { opacity: 0.15, scale: 1 } }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative">
                {/* Tag */}
                <span
                  className="mb-5 inline-block rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest"
                  style={{
                    color: "var(--accent)",
                    background: "color-mix(in srgb, var(--accent) 10%, white)",
                  }}
                >
                  {cohort.tag}
                </span>

                {/* Icon Container */}
                <motion.div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                  style={{ background: "color-mix(in srgb, var(--accent) 12%, white)" }}
                  variants={{ hover: { rotate: -6, scale: 1.08 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="relative h-6 w-6">
                    <Image src={cohort.icon} alt={cohort.title} fill className="object-contain" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-extrabold text-slate-900 transition-colors group-hover:text-[var(--accent)]">
                  {cohort.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {cohort.description}
                </p>
              </div>

              {/* Metric */}
              <div className="relative mt-auto flex items-center justify-between border-t border-purple-100/70 pt-5">
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display text-3xl font-extrabold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    <CountUp target={cohort.metricValue} />
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    {cohort.metricLabel}
                  </span>
                </div>

                <motion.span
                  aria-hidden
                  variants={{ hover: { opacity: 1, x: 0 } }}
                  initial={{ opacity: 0, x: -4 }}
                  transition={{ duration: 0.25 }}
                  className="text-lg"
                  style={{ color: "var(--accent)" }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Browse Button */}
        <div className="mt-14 flex justify-center">
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-purple-100 bg-white px-8 py-3.5 text-sm font-bold text-pulse-600 shadow-[0_10px_30px_-15px_rgba(90,54,217,0.4)] transition-colors duration-200 hover:bg-pulse-50"
          >
            Browse All Articles
            <motion.div
              className="relative flex h-4 w-4 items-center justify-center"
              variants={{ hover: { x: 3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Image src="/assets/Icon.png" alt="Right arrow" width={12} height={12} className="object-contain" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}