"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Megaphone, TrendingUp } from "lucide-react";
import Link from "next/link";
import { SlideInView } from "./AnimatedSection";

const focusAreas = [
  {
    title: "Admission Growth",
    description:
      "Build high-intent admission funnels that move families from first inquiry to campus visit.",
    icon: GraduationCap,
  },
  {
    title: "Education Branding",
    description:
      "Sharpen your positioning with campaigns that make schools, EdTech brands, and universities memorable.",
    icon: Megaphone,
  },
  {
    title: "Market Expansion",
    description:
      "Open new student markets with partnership strategy, performance media, and conversion planning.",
    icon: TrendingUp,
  },
];

const metrics = [
  { value: "360", label: "growth strategy" },
  { value: "3x", label: "campaign focus" },
  { value: "End-to-end", label: "execution support" },
];

const cardReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + index * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function StatementSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white pb-16 pt-6 sm:pb-24 sm:pt-8">
      <motion.div
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-purple-200/35 blur-[110px]"
        animate={{ x: [0, 34, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lavender-200/45 blur-[100px]"
        animate={{ x: [0, -28, 0], y: [0, -22, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container">
        <SlideInView direction="up" delay={0.1}>
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-purple-100/80 bg-cream px-6 py-10 shadow-[0_28px_80px_-45px_rgba(101,40,247,0.35)] sm:px-10 sm:py-14"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-60"
              animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(101,40,247,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(101,40,247,0.06) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse 75% 60% at 50% 0%, black 35%, transparent 100%)",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <motion.span
                  className="eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35 }}
                >
                  Built for education growth
                </motion.span>

                <motion.h2
                  className="mt-5 max-w-[620px] font-inter text-[clamp(28px,3.7vw,48px)] font-semibold leading-[1.16] text-ink-950"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                >
                  Turn education brands into trusted admission engines.
                </motion.h2>

                <motion.p
                  className="mt-5 max-w-[560px] font-inter text-[16px] leading-[1.8] text-slate-600"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.16, duration: 0.45 }}
                >
                  Thynk Success combines digital marketing, student recruitment,
                  brand storytelling, and partnership strategy so your next
                  campaign does not just look good - it fills the pipeline.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.24, duration: 0.45 }}
                >
                  <Link href="#services" className="btn-primary">
                    Explore Services
                    <ArrowRight size={15} />
                  </Link>
                  <Link href="/partnerships" className="btn-ghost bg-white/60">
                    Partner With Us
                  </Link>
                </motion.div>
              </div>

              <div className="grid gap-4">
                {focusAreas.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      custom={index}
                      className="group flex gap-4 rounded-2xl border border-purple-100/80 bg-white/85 p-5 shadow-[0_18px_45px_-30px_rgba(26,21,48,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-white"
                      variants={cardReveal}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <motion.span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-[0_12px_24px_-12px_rgba(101,40,247,0.7)] transition-transform duration-300 group-hover:scale-105"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          delay: index * 0.35,
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon size={21} />
                      </motion.span>
                      <div>
                        <h3 className="font-head text-base font-bold text-ink-950">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 font-inter text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="relative mt-10 grid overflow-hidden rounded-2xl border border-purple-100 bg-white sm:grid-cols-3"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.38, duration: 0.5 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="border-b border-purple-100 px-5 py-5 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.46 + index * 0.08, duration: 0.35 }}
                >
                  <p className="font-head text-2xl font-bold text-purple-600">
                    {metric.value}
                  </p>
                  <p className="mt-1 font-inter text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </SlideInView>
      </div>
    </section>
  );
}
