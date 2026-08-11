"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    image:
      "newsBlogs/Container.png",
    title: "Top Education Marketing Agency in Greater Noida West",
    excerpt:
      "In today's fiercely competitive educational landscape, institutions need to go beyond conventional marketing...",
    date: "March 25, 2026",
  },
  {
    image:
      "newsBlogs/Strategies.png",
    title: "Best School Marketing Agency to Attract More Students",
    excerpt:
      "It takes more than simply top-notch facilities and academic achievement to draw in more pupils...",
    date: "March 17, 2026",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export  function RecentInsights() {
  const [activePage, setActivePage] = useState(1);
  const pages = [1, 2, "...", 6];

  return (
    <section className="relative overflow-hidden bg-[#FBFAFF] py-16 sm:py-0">
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
        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-2"
        >
          <h2 className="text-2xl font-extrabold text-purple-700 sm:text-3xl">
            Recent Insights
          </h2>
          <p className="text-sm text-slate-400">Showing 5 of 24 posts</p>
        </motion.div>

        {/* Post cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-purple-100/70 bg-white shadow-[0_15px_40px_-20px_rgba(147,51,234,0.25)]"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-purple-100/70 pt-4">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <a
                    href="#"
                    className="group flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-600"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <button
            onClick={() => setActivePage((p) => Math.max(1, Number(p) - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-100 bg-white text-slate-500 transition-colors hover:border-purple-300 hover:text-purple-700"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {pages.map((page, i) =>
            page === "..." ? (
              <span key={i} className="px-1 text-sm text-slate-400">
                &hellip;
              </span>
            ) : (
              <button
                key={i}
                onClick={() => setActivePage(page as number)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  activePage === page
                    ? "bg-purple-700 text-white shadow-[0_8px_20px_-8px_rgba(126,34,206,0.6)]"
                    : "border border-purple-100 bg-white text-slate-600 hover:border-purple-300"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => setActivePage((p) => Number(p) + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-100 bg-white text-slate-500 transition-colors hover:border-purple-300 hover:text-purple-700"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default RecentInsights