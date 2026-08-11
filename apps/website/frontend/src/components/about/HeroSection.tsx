"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[720px] overflow-hidden pt-20 sm:min-h-[780px]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/about/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(230,222,255,0.44)]" />
      </div>

      <div className="section-container relative flex min-h-[640px] items-center py-20 sm:min-h-[700px]">
        <div className="max-w-[660px]">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(36px,5vw,48px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand-600"
          >
            Where Education Meets
            <br />
            Innovation and Growth
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-[640px] text-xl font-semibold leading-8 text-[#4648d4]"
          >
            Thynk Success helps the global education ecosystem grow by empowering
            schools, EdTech innovators, and international institutions with
            strategic tools to enhance visibility, engagement, and measurable
            outcomes. As an Education Branding Agency, EdTech Marketing Agency,
            and Student Recruitment Agency, we ensure institutions achieve
            meaningful, sustainable growth.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#about" className="btn-primary">
              Explore Our Vision
            </a>
            <a href="#results" className="btn-outline">
              View Case Studies
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
