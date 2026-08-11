device"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["All Posts", "Educators", "EdTech", "Sales", "Leadership"];

export default function ArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  return (
    <section id="latest-posts" className="relative overflow-hidden bg-[#FBFAFF] py-20 sm:py-28">
      {/* Ambient light + faint grid — same system as the trending & cohorts sections */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full bg-pulse-100/40 blur-[110px]" />
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

      <div className="section-container section-padding relative">
        {/* Section Header */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-pulse-600">
              <span className="h-px w-6 bg-pulse-600/50" />
              Latest from the community
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="text-[#5A36D9]">Fresh Ideas,</span>
              <br />
              <span className="font-serif font-normal italic text-slate-700">Real Voices</span>
            </h2>
          </div>

          {/* Category Tabs — sliding pill indicator, now sitting in a soft tray */}
          <div className="relative mt-6 flex flex-wrap gap-1.5 rounded-full border border-purple-100/70 bg-white/80 p-1.5 shadow-sm backdrop-blur-sm lg:mt-0">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 sm:px-5 sm:text-sm ${
                    isActive ? "text-white" : "text-slate-600 hover:text-pulse-600"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-pulse-600 shadow-md shadow-pulse-600/20"
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid items-stretch gap-6 md:grid-cols-12">
          {/* Left Column: Briefcase Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex md:col-span-6 lg:col-span-4"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full w-full cursor-pointer flex-col justify-between rounded-3xl border border-purple-100/70 bg-white/80 p-5 shadow-[0_20px_60px_-25px_rgba(90,54,217,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_25px_70px_-20px_rgba(90,54,217,0.4)] sm:p-6"
            >
              {/* Featured ribbon */}
              <span className="absolute right-5 top-5 z-10 rounded-full bg-pulse-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                Featured
              </span>

              <div>
                {/* Image */}
                <div className="relative mb-6 aspect-[1.5] w-full overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src="/assets/briefcase.png"
                    alt="The Art of Selling EdTech"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    6 min read
                  </span>
                </div>
                {/* Tag */}
                <span className="mb-3 inline-block rounded-full bg-pulse-50 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-pulse-600">
                  EdTech Strategy
                </span>
                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-pulse-600 sm:text-xl">
                  The Art of Selling EdTech to School Principals in Tier 2 Cities
                </h3>
                {/* Excerpt */}
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Three years of field sales taught me that demos mean nothing without trust.
                  Here is how I changed my approach to building long-term institutional relationships.
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between gap-3 border-t border-purple-100/70 pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src="/assets/avatar_single_1.png" alt="Rahul Shrivastva" fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Rahul Shrivastva</span>
                </div>
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  className="-translate-x-1.5 text-pulse-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Middle Column: Key Insight & Inquiry Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 md:col-span-6 lg:col-span-4"
          >
            {/* Top Insight Card */}
            <div className="relative flex flex-grow flex-col justify-center overflow-hidden rounded-3xl border border-orange-100/60 bg-gradient-to-br from-[#FAF5F2] to-[#FAF8F5] p-6 shadow-[0_20px_60px_-25px_rgba(180,120,50,0.2)]">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-8xl leading-none text-amber-900/[0.06]"
              >
                &rdquo;
              </span>
              <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-amber-700">
                Key Insight
              </span>
              <p className="relative text-sm font-medium italic leading-relaxed text-slate-700 sm:text-base">
                &quot;Schools don&apos;t buy products; they invest in reliability and student outcomes. The pitch must reflect that shift.&quot;
              </p>
            </div>

            {/* Bottom Inquiry Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-purple-100/70 bg-white/80 p-5 shadow-[0_20px_60px_-25px_rgba(90,54,217,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_25px_70px_-20px_rgba(90,54,217,0.4)] sm:p-6"
            >
              <div>
                <span className="mb-3 inline-block rounded-full bg-pulse-50 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-pulse-600">
                  Pedagogy
                </span>
                <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-pulse-600">
                  Inquiry-Based Science: How I Stopped Lecturing and Started Listening
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Switching from lecture-based to inquiry-based teaching was terrifying. It was also the best decision of my career.
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-purple-100/70 pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src="/assets/avatar_single_2.png" alt="Suresh Kushik" fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Suresh Kushik</span>
                </div>
                <span className="-translate-x-1.5 text-pulse-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Parental Engagement Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex md:col-span-12 lg:col-span-4"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full w-full cursor-pointer flex-col justify-between rounded-3xl border border-purple-100/70 bg-white/80 p-5 shadow-[0_20px_60px_-25px_rgba(90,54,217,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_25px_70px_-20px_rgba(90,54,217,0.4)] sm:p-6"
            >
              <div>
                {/* Image */}
                <div className="relative mb-6 aspect-[1.5] w-full overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src="/assets/image 2.png"
                    alt="Parental Engagement in the Digital Age"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    5 min read
                  </span>
                </div>
                {/* Tag */}
                <span className="mb-3 inline-block rounded-full bg-pulse-50 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-pulse-600">
                  Community Partnerships
                </span>
                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-pulse-600 sm:text-xl">
                  Parental Engagement in the Digital Age
                </h3>
                {/* Excerpt */}
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  WhatsApp groups are not a communication strategy. Here is what genuine, respectful parental collaboration looks like in practice.
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between gap-3 border-t border-purple-100/70 pt-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src="/assets/avatar_single_3.png" alt="Nalini Verma" fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">Nalini Verma</span>
                </div>
                <span className="-translate-x-1.5 text-pulse-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Browse Button */}
        <div className="mt-14 flex justify-center">
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-purple-100 bg-white px-8 py-3.5 text-sm font-bold text-pulse-600 shadow-[0_10px_30px_-15px_rgba(90,54,217,0.4)] transition-colors duration-200 hover:bg-pulse-50"
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