"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.8, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Page-level subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-pulse-900) 1px, transparent 1px), linear-gradient(to bottom, var(--color-pulse-900) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative w-full section-container section-padding pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Tagline */}
            <motion.span
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="font-mono text-xs font-bold tracking-wider text-slate-500 uppercase mb-4 block"
            >
              WORLD&quot;S LARGEST EDUCATION COMMUNITY
            </motion.span>

            {/* Heading */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.15] text-slate-900"
            >
              <span className="text-pulse-600 font-serif italic block mb-1">Where Ideas</span>
              <span className="font-serif italic font-medium text-slate-700 block my-2">Shape</span>
              <span className="text-slate-800">Education</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-base sm:text-lg text-slate-600 max-w-xl mt-6 mb-8 leading-relaxed"
            >
              Thynk Pulse is the free, open community for educators, EdTech
              professionals, innovators and school leaders to share
              experiences and shape the future of learning.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-pulse-600 hover:bg-pulse-700 rounded-xl shadow-lg shadow-pulse-600/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <Rocket size={18} />
                Start Writing Free
              </a>
              <a
                href="#latest-posts"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-pulse-600 bg-white hover:bg-pulse-50 border-2 border-pulse-600 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Explore Posts
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {["/assets/avatar_single_1.png", "/assets/avatar_single_2.png", "/assets/avatar_single_3.png"].map((src, i) => (
                  <div key={i} className="relative h-9 w-9 rounded-full ring-2 ring-white overflow-hidden">
                    <Image src={src} alt={`Educator avatar ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Join 10,000+ professionals already on Thynk Pulse
              </span>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative"
          >
            {/* Fixed aspect-ratio composition container */}
            <div className="relative w-full" style={{ paddingBottom: "100%" }}>

              {/* LAYER 1 — glow.png: large blurred purple circle (backmost) */}
              <div
                className="absolute z-0 pointer-events-none"
                style={{ top: "-5%", left: "0%", width: "100%", height: "100%" }}
              >
                <Image
                  src="/assets/glow.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* LAYER 2 — robot_hero.png: robot centered over glow */}
              <div
                className="absolute z-10"
                style={{ top: "-10%", left: "0%", width: "100%", height: "98%" }}
              >
                <Image
                  src="/assets/robot_hero.png"
                  alt="AI education robot"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* LAYER 3 — image 1.png: purple article card bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="absolute z-20 cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
                style={{ bottom: "-6%", left: "-10%", width: "56%", aspectRatio: "4/3" }}
              >
                <Image
                  src="/assets/image 1.png"
                  alt="How AI is Quietly Rewriting Classroom Engagement"
                  fill
                  className="object-fill"
                />
              </motion.div>


            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

