"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Search Schools",
    desc: "Smart filters — board, city, fee, medium, 20+ criteria.",
    icon: "/images-icon/Icon (48).png",
  },
  {
    num: "02",
    title: "Compare & Review",
    desc: "Side-by-side with verified parent reviews and ratings.",
    icon: "/images-icon/Icon (49).png",
  },
  {
    num: "03",
    title: "Get Counselled",
    desc: "Free 30-min expert session to find your perfect fit.",
    icon: "/images-icon/Icon (39).png",
  },
  {
    num: "04",
    title: "Apply & Enrol",
    desc: "One-click enquiries, track all applications in one place.",
    icon: "/images-icon/Icon (50).png",
  },
];

export default function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef0ff] py-20 sm:py-28">
      {/* Ambient light + faint grid, consistent with the hero */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#dde3ff] opacity-40 blur-[110px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-200/30 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-pulse-900) 1px, transparent 1px), linear-gradient(to bottom, var(--color-pulse-900) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 xl:px-24">
        <FadeInView className="mb-16 text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            <span className="h-px w-6 bg-brand-500/40" />
            How it works
            <span className="h-px w-6 bg-brand-500/40" />
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Admission{" "}
            <span className="font-cursive text-4xl font-normal text-brand-500 sm:text-5xl">Made Simple</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            From searching to enrolment — guided at every step. Completely free for parents, always.
          </p>
        </FadeInView>

        <div className="relative mt-8">
          {/* Desktop: flex row with an animated connector line */}
          <div className="relative hidden lg:flex lg:items-start lg:justify-between">
            {/* Base connector track */}
            <div className="absolute left-[12%] right-[12%] top-[47px] h-px bg-brand-200" />
            {/* Animated fill, draws left to right on scroll */}
            <motion.div
              className="absolute left-[12%] top-[47px] h-px origin-left bg-brand-500"
              style={{ right: "12%" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />

            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover="hover"
                className="group relative z-10 flex flex-1 flex-col items-center text-center"
              >
                {/* Icon Container */}
                <motion.div
                  variants={{ hover: { y: -4, scale: 1.05 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-brand-500/15"
                >
                  {/* Step Number Badge */}
                  <motion.span
                    variants={{ hover: { scale: 1.15 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 font-sans text-xs font-bold text-white shadow-md shadow-brand-500/30"
                  >
                    {step.num}
                  </motion.span>
                  <Image src={step.icon} alt={step.title} width={40} height={40} className="object-contain" />
                </motion.div>

                <h3 className="mb-2 text-lg font-bold text-text-primary transition-colors duration-200 group-hover:text-brand-500">
                  {step.title}
                </h3>
                <p className="max-w-[180px] text-sm leading-relaxed text-text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile / tablet grid (no connector lines) */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:hidden">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover="hover"
                className="group flex flex-col items-center text-center"
              >
                <motion.div
                  variants={{ hover: { y: -4, scale: 1.05 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-brand-100 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-brand-500/15"
                >
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 font-sans text-xs font-bold text-white shadow-md shadow-brand-500/30">
                    {step.num}
                  </span>
                  <Image src={step.icon} alt={step.title} width={40} height={40} className="object-contain" />
                </motion.div>
                <h3 className="mb-2 text-lg font-bold text-text-primary transition-colors duration-200 group-hover:text-brand-500">
                  {step.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}