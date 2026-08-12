"use client";

import { motion, Variants } from "framer-motion";
import { FadeInView } from "./AnimatedSection";

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-purple-600 py-14 sm:py-16 lg:py-20">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-white/[0.08] blur-[100px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-purple-300/[0.12] blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="section-container relative">
        <FadeInView>
          <div className="mx-auto max-w-[1080px]">
            {/* Eyebrow + heading — compact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-7 text-center sm:mb-8"
            >
              <div className="mb-4 flex items-center justify-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="h-px bg-white/40"
                />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Our Mission
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="h-px bg-white/40"
                />
              </div>
              <h2 className="font-serif italic text-[clamp(28px,4.5vw,46px)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                Transforming Education.{" "}
                <span className="text-white/55">Accelerating Growth.</span>
              </h2>
            </motion.div>

            {/* Content card — single flowing paragraph, tighter padding */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm sm:rounded-[28px] sm:p-8 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.05] blur-3xl"
              />
              <motion.div
                aria-hidden="true"
                className="absolute left-0 top-7 h-14 w-[2px] rounded-full bg-white/50 sm:top-8 lg:top-10"
                initial={{ scaleY: 0, transformOrigin: "top" }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <div className="relative space-y-5">
                <motion.p
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="max-w-[940px] font-inter text-[15px] leading-[1.75] tracking-[0.005em] text-white/85 sm:text-[16px] sm:leading-[1.8]"
                >
                  Thynk Success is committed to transforming how educational
                  institutions scale in an increasingly digital world. As
                  specialists in B2B EdTech growth, digital marketing for
                  schools, and university admission campaigns, we empower
                  schools, EdTech companies, and universities with strategies
                  that drive long-term visibility, credibility, and
                  measurable results. Our expertise in international student
                  recruitment ensures universities attract quality learners
                  from diverse markets, while every campaign we build is
                  rooted in strong SEO for education, impactful storytelling,
                  and a deep understanding of modern communication trends —
                  making Thynk Success a trusted partner in sustainable
                  growth across the entire education ecosystem.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:gap-5 sm:pt-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 font-display text-sm font-semibold text-white"
                  >
                    01
                  </motion.div>
                  <p className="font-display text-[17px] font-medium leading-6 text-white sm:text-[18px]">
                    Our role is to act as a{" "}
                    <span className="font-semibold text-white">catalyst</span>{" "}
                    for institutions and companies working in this space.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-5 flex items-center justify-center gap-2"
            >
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="h-1 w-8 rounded-full bg-white/20" />
              <span className="h-1 w-1 rounded-full bg-white/30" />
            </motion.div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}