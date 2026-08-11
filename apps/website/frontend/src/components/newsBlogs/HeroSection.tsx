"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const filters = ["All Posts", "Edtech", "Higher Ed", "Lead Gen", "School Branding"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export  function HeroSection() {
  const [activeFilter, setActiveFilter] = useState("All Posts");

  return (
    <section className="relative overflow-hidden bg-[#FBFAFF] py-16 sm:py-10">
      {/* faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(147,51,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,51,234,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-purple-300/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-purple-200/25 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search news, trends, or strategies..."
            className="w-full rounded-xl border border-purple-100/70 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-[0_10px_30px_-15px_rgba(147,51,234,0.25)] outline-none transition-colors focus:border-purple-300 focus:ring-2 focus:ring-purple-100"
          />
        </motion.div>

        {/* Filter pills */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-5 flex flex-wrap gap-3"
        >
          {filters.map((filter) => {
            const active = filter === activeFilter;
            return (
              <motion.button
                key={filter}
                variants={fadeUp}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-purple-700 text-white shadow-[0_8px_20px_-8px_rgba(126,34,206,0.6)]"
                    : "bg-purple-100/70 text-slate-600 hover:bg-purple-100"
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured post card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="mt-10 grid grid-cols-1 overflow-hidden rounded-3xl border border-purple-100/70 bg-white shadow-[0_25px_60px_-25px_rgba(147,51,234,0.3)] md:grid-cols-2"
        >
          <div className="h-64 w-full md:h-auto">
            <img
              src="newsBlogs/FeaturedPost.png"
              alt="Top EdTech Marketing Agency in Noida promotional graphic"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple-100 px-3.5 py-1 text-xs font-semibold text-purple-700">
                Latest News
              </span>
              <span className="text-xs text-slate-400">April 1, 2026</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900 sm:text-[26px]">
              Top EdTech Marketing Agency in Noida &ndash; Thynk Success
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Institutions must go beyond traditional marketing in today&rsquo;s
              rapidly changing educational scene. Schools and EdTech companies
              require a strategic partner who is knowledgeable.
            </p>

            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-600"
            >
              Read Full Strategy
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default HeroSection