"use client";

import { GraduationCap, TrendingUp, Globe2 } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const badges = [
  { icon: GraduationCap, bg: "bg-purple-600" },
  { icon: TrendingUp, bg: "bg-purple-50 border border-purple-200" },
  { icon: Globe2, bg: "bg-orange-600" },
];

export  function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAFF]  sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(147,51,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,51,234,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-purple-300/25 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-200/25 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
              Our Story
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-purple-700 sm:text-5xl"
          >
            Our Clients,{" "}
            <span className="font-serif italic font-medium text-purple-500">
              Our Success Story
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-7 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            We believe that knowledge drives transformation, and our role is to
            act as a catalyst&mdash;helping organizations grow faster and
            connect with their ideal stakeholders. Whether increasing a
            school&rsquo;s brand strength, enabling EdTech companies to
            expand, or supporting universities as a{" "}
            <a href="#" className="font-semibold text-purple-700 hover:text-purple-600">
              Student Recruitment Agency
            </a>
            , we tailor solutions to deliver real results.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            At Thynk Success, our goal is to empower schools, EdTech
            innovators, and international institutions by improving
            visibility, driving meaningful engagement, and delivering
            measurable impact. As a trusted{" "}
            <a href="#" className="font-semibold text-purple-700 hover:text-purple-600">
              School Admission Marketing Consultant
            </a>
            , we ensure that institutions reach the right audience and
            accelerate their growth.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {badges.map(({ icon: Icon, bg }, i) => (
                <span
                  key={i}
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${bg} shadow-[0_8px_20px_-6px_rgba(147,51,234,0.35)] ring-4 ring-[#FBFAFF]`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      bg.includes("purple-50") ? "text-purple-600" : "text-white"
                    }`}
                    strokeWidth={2}
                  />
                </span>
              ))}
            </div>
            <p className="text-sm font-semibold text-slate-700">
              Trusted by <span className="text-purple-700">200+</span> Institutions
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-purple-200/30 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-purple-100/70 shadow-[0_25px_60px_-15px_rgba(147,51,234,0.35)]">
            <img
              src="/partnerships/herosection-image.png"
              alt="Students working in a classroom"
              className="h-[480px] w-full object-cover sm:h-[560px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection