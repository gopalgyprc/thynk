"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const trendingArticles = [
  {
    num: "01",
    tag: "EDTECH • AI",
    title: "GPT in the Classroom: A Teacher's 6-Month Honest Review",
    reads: "34.2K reads",
    likes: "891 likes",
    comments: "283 comments",
  },
  {
    num: "02",
    tag: "SCHOOL LEADERSHIP",
    title: "Why I Turned Down a ₹50L EdTech Deal (And What I Learned)",
    reads: "28.7K reads",
    likes: "645 likes",
    comments: "144 comments",
  },
  {
    num: "03",
    tag: "SALES • CAREER",
    title: "The Education Sales Playbook Nobody Talks About",
    reads: "22.1K reads",
    likes: "512 likes",
    comments: null,
  },
];

const popularTags = ["AI in Education", "NEP 2020", "Teacher Training", "Ed-Finance", "STEM"];

const topWritersList = [
  { name: "Rajesh Kumar", role: "EdTech Founder", avatar: "/assets/avatar_single_2.png" },
  { name: "Arjun Mehta", role: "Sales Lead, K12", avatar: "/assets/avatar_single_1.png" },
];

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const listItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TrendingSection() {
  const [following, setFollowing] = useState<Record<string, boolean>>({});

  const toggleFollow = (name: string) => {
    setFollowing((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="relative overflow-hidden bg-[#FBFAFF] py-20 sm:py-28">
      {/* Ambient light + faint grid, matching the vocabulary set in the stats section */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-pulse-100/40 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-purple-100/30 blur-[100px]" />
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
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Trending Articles */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="mb-2">
              <span className="mb-3 inline-flex items-center gap-2 text-left font-mono text-xs font-bold uppercase tracking-[0.2em] text-pulse-600">
                <span className="h-px w-6 bg-pulse-600/50" />
                What the community is reading
              </span>
              <h2 className="text-left font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-extrabold text-[#5A36D9]">Trending</span>{" "}
                <span className="font-serif font-normal italic text-slate-700">This Week</span>
              </h2>
            </div>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 overflow-hidden rounded-3xl border border-purple-100/70 bg-white/80 shadow-[0_20px_60px_-25px_rgba(90,54,217,0.25)] backdrop-blur-sm"
            >
              {trendingArticles.map((article, idx) => (
                <motion.a
                  href="#"
                  key={article.num}
                  variants={listItem}
                  whileHover="hover"
                  className={`group relative flex items-start gap-5 px-6 py-7 transition-colors duration-300 hover:bg-pulse-50/60 sm:px-8 ${
                    idx !== trendingArticles.length - 1 ? "border-b border-purple-100/70" : ""
                  }`}
                >
                  {/* Left accent bar, appears on hover */}
                  <motion.span
                    aria-hidden
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-y-0 left-0 w-1 bg-[#5A36D9]"
                  />

                  {/* Number */}
                  <motion.span
                    variants={{ hover: { y: -2, color: "#5A36D9" } }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex-shrink-0 font-display text-4xl font-extrabold tracking-tight text-[#DCCEFF] sm:text-5xl"
                  >
                    {article.num}
                  </motion.span>

                  {/* Text Details */}
                  <div className="min-w-0 flex-grow pt-1">
                    <span className="mb-2 inline-block rounded-full bg-pulse-50 px-2.5 py-1 text-left font-mono text-[9px] font-bold uppercase tracking-widest text-pulse-600">
                      {article.tag}
                    </span>
                    <h3 className="mb-2.5 text-left text-lg font-bold leading-snug text-slate-800 transition-colors group-hover:text-[#5A36D9] sm:text-xl">
                      {article.title}
                    </h3>
                    <p className="flex flex-wrap items-center gap-x-2 text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      <span className="tabular-nums">{article.reads}</span>
                      <span className="text-slate-300">•</span>
                      <span className="tabular-nums">{article.likes}</span>
                      {article.comments && (
                        <>
                          <span className="text-slate-300">•</span>
                          <span className="tabular-nums">{article.comments}</span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Arrow, reveals on hover */}
                  <motion.span
                    aria-hidden
                    variants={{ hover: { opacity: 1, x: 0 } }}
                    initial={{ opacity: 0, x: -4 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 flex-shrink-0 self-start text-lg text-[#5A36D9]"
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Browse Topics & Top Writers */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {/* Browse Topics — now a real card */}
            <div className="rounded-3xl border border-purple-100/70 bg-white/80 p-6 shadow-[0_20px_60px_-25px_rgba(90,54,217,0.15)] backdrop-blur-sm sm:p-7">
              <span className="mb-5 block text-left font-mono text-xs font-bold uppercase tracking-[0.2em] text-pulse-600">
                Browse Topics
              </span>

              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {popularTags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={listItem}
                    whileHover={{ y: -2, backgroundColor: "#5A36D9", color: "#ffffff" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer rounded-full border border-purple-100 bg-white px-4 py-1.5 font-mono text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Top Writers — now a real card */}
            <div className="rounded-3xl border border-purple-100/70 bg-white/80 p-6 shadow-[0_20px_60px_-25px_rgba(90,54,217,0.15)] backdrop-blur-sm sm:p-7">
              <span className="mb-5 block text-left font-mono text-xs font-bold uppercase tracking-[0.2em] text-pulse-600">
                Top Writers
              </span>

              <div className="divide-y divide-purple-100/70">
                {topWritersList.map((writer) => {
                  const isFollowing = following[writer.name];
                  return (
                    <div key={writer.name} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md ring-1 ring-purple-100">
                          <Image src={writer.avatar} alt={writer.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="text-left text-sm font-bold text-slate-800">{writer.name}</h4>
                          <p className="text-left font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                            {writer.role}
                          </p>
                        </div>
                      </div>

                      <motion.button
                        onClick={() => toggleFollow(writer.name)}
                        whileTap={{ scale: 0.94 }}
                        className={`flex-shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                          isFollowing
                            ? "border-purple-100 bg-pulse-50 text-[#5A36D9]"
                            : "border-[#5A36D9] bg-white text-[#5A36D9] hover:bg-[#5A36D9] hover:text-white"
                        }`}
                      >
                        <motion.span
                          key={isFollowing ? "following" : "follow"}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {isFollowing ? "✓ Following" : "+ Follow"}
                        </motion.span>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}