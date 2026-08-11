"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-14">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,#d8d8f5_0%,rgba(216,216,245,0)_70%)] blur-[10px]" />
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <div className="section-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="eyebrow"
          >
            Education Marketing Agency
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-[620px] font-pacifico text-[clamp(32px,4vw,54px)] font-normal leading-[1.35]  text-ink-950 italic sm:leading-[1.4]"
          >
            Explore Global Education Opportunities with{" "}
            <em className="not-italic text-purple-600 whitespace-nowrap">Thynk Success</em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 max-w-[520px] text-[16.5px] leading-[1.7]  font-inter text-slate-600"
          >
            Thynk Success – A Trusted Education Marketing Agency and School
            Marketing Agency Empowering Schools, EdTech Innovators, and Global
            Institutions with Digital Branding, Market Growth, and Student
            Recruitment Solutions for Measurable Success.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
            <a href="#about" className="btn-ghost">
              Learn More
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div
            className="absolute inset-[-6%] -z-10 bg-linear-to-br from-purple-200 to-lavender-200"
            style={{
              borderRadius: "44% 56% 62% 38% / 46% 40% 60% 54%",
            }}
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3.6] overflow-hidden rounded-[28px] shadow-[0_20px_50px_-20px_rgba(101,40,247,0.25)]">
            <Image
              src="/hero.jpg"
              alt="Students collaborating on campus"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
