"use client";

import { ChevronDown, Search, GraduationCap, BookOpen, Star } from "lucide-react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeInView } from "./AnimatedSection";

const stats = [
  { value: "12K+", label: "VERIFIED SCHOOLS" },
  { value: "1Lakh+", label: "HAPPY PARENTS" },
  { value: "350+", label: "INDIAN CITIES" },
  { value: "4.8 ★", label: "AVG RATING" },
];

function CountUp({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  if (!match) return <span ref={ref}>{value}</span>;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  const target = parseFloat(num);

  const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, target, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(prefix + v.toFixed(decimals) + suffix));
    return unsub;
  }, [spring, prefix, decimals, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#eef0ff] pb-12 pt-24 lg:min-h-screen">
      {/* Decorative radial glow — matches Figma lavender background tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#eef0ff] via-[#f0f2ff] to-[#e8ecff]" />
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-[80%] w-[60%] rounded-full bg-[#dde3ff] opacity-30 blur-[120px] filter"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-pulse-900) 1px, transparent 1px), linear-gradient(to bottom, var(--color-pulse-900) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Copy + Search */}
          <div className="max-w-2xl text-left">
            <FadeInView delay={0.1} y={20}>
              <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[56px]">
                Find the Perfect{" "}
                <span className="font-cursive text-5xl font-normal text-brand-500 sm:text-6xl lg:text-[68px]">
                  School
                </span>{" "}
                for Your Child
              </h1>
            </FadeInView>

            <FadeInView delay={0.2} y={20}>
              <p className="mb-10 max-w-lg text-sm leading-relaxed text-text-secondary sm:text-base">
                Search, compare &amp; apply to 12,000+ verified schools across 350+ Indian cities. CBSE, ICSE, IB and more.
              </p>
            </FadeInView>

            <FadeInView delay={0.3} y={25}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-3 shadow-lg shadow-brand-500/5 sm:flex-row"
              >
                <div className="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-2 transition-colors duration-200 hover:bg-slate-50/60 sm:w-[40%] sm:rounded-xl sm:border-b-0 sm:border-r">
                  <Image src="/images-icon/Icon (51).png" alt="City" width={20} height={20} className="object-contain" />
                  <div className="text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-text-tertiary">City</span>
                    <input
                      type="text"
                      defaultValue="All Cities"
                      className="mt-0.5 w-full border-none bg-transparent p-0 text-xs font-bold text-text-primary outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="relative flex w-full items-center gap-3 px-4 py-2 transition-colors duration-200 hover:bg-slate-50/60 sm:w-[40%] sm:rounded-xl">
                  <Image src="/images-icon/Icon (52).png" alt="Board" width={20} height={20} className="shrink-0 object-contain" />
                  <div className="w-full text-left">
                    <span className="mb-0.5 block text-[10px] font-bold uppercase leading-none tracking-wider text-text-tertiary">
                      Board
                    </span>
                    <select
                      className="w-full cursor-pointer appearance-none border-none bg-transparent p-0 pr-4 text-xs font-bold text-text-primary outline-none focus:ring-0"
                      defaultValue="CBSE"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="IB">IB / IGCSE</option>
                      <option value="All">All Boards</option>
                    </select>
                  </div>
                  <ChevronDown size={14} className="pointer-events-none shrink-0 text-text-tertiary" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-brand-500/10 transition-colors duration-200 hover:bg-brand-600 sm:w-auto"
                >
                  <Search size={14} className="stroke-[2.5]" />
                  <span>Search Schools</span>
                </motion.button>
              </motion.div>
            </FadeInView>

            <FadeInView delay={0.4} y={20} className="mt-12">
              <div className="grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-left">
                    <div className="text-sm font-extrabold text-brand-500 sm:text-base">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="mt-1 text-[9px] font-black uppercase tracking-wider text-text-tertiary">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>

          {/* Right Column: hero image from public/hero/hero.avif */}
          <div className="relative hidden h-full min-h-[420px] lg:block">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-300/25 blur-[90px]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-300/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-200/50" />

            <div className="relative mx-auto h-[520px] w-full max-w-[520px] overflow-hidden rounded-[38px] border border-white/80 bg-white/70 shadow-[0_35px_80px_-40px_rgba(49,46,129,0.25)] backdrop-blur-xl">
              <Image
                src="/hero/hero.avif"
                alt="Hero school image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.4 },
                scale: { duration: 0.5, delay: 0.4 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
              className="absolute left-[18%] top-[20%] flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-xl shadow-brand-500/10"
            >
              <GraduationCap size={26} />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, y: [0, 14, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 },
                scale: { duration: 0.5, delay: 0.6 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
              }}
              className="absolute bottom-[22%] left-[8%] flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-xl shadow-brand-500/10"
            >
              <BookOpen size={20} />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                scale: { duration: 0.5, delay: 0.8 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
              }}
              className="absolute right-[16%] top-[28%] flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-500 shadow-xl shadow-brand-500/10"
            >
              <Star size={22} className="fill-amber-400 text-amber-400" />
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}