"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "./AnimatedSection";

const articles = [
  {
    category: "BOARD GUIDE",
    title: "CBSE vs ICSE vs IB: Which Board is Right?",
    desc: "6 min read · Detailed breakdown of core differences.",
    icon: "/images-icon/Icon (7).png",
    bgClass: "bg-[#eef2ff]",
  },
  {
    category: "ADMISSION TIPS",
    title: "How to Choose the Right School: 10 Questions to Ask",
    desc: "8 min read · Essential checklist for school visits.",
    icon: "/images-icon/Icon (6).png",
    bgClass: "bg-[#f5f3ff]",
  },
  {
    category: "RANKINGS",
    title: "Top 10 Boarding Schools in India 2026",
    desc: "10 min read · Latest rankings from verified surveys.",
    icon: "/images-icon/Icon (5).png",
    bgClass: "bg-[#f1f5f9]",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function InsightsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 100%)",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[350px] w-[350px] rounded-full bg-brand-100/40 blur-[120px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="section-container relative">
        <FadeInView>
          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="mb-12 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between"
          >
            <div>
              {/* Eyebrow */}
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="mb-3 flex items-center gap-3"
              >
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 30,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="h-px bg-brand-500"
                />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-500">
                  Knowledge Hub
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
              >
                Admission{" "}
                <span className="text-brand-500">Insights</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="mt-3 max-w-xl font-inter text-sm leading-6 text-text-secondary sm:text-[15px]"
              >
                Latest guides and tips for your child&apos;s educational
                journey.
              </motion.p>
            </div>

            {/* Header accent */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="hidden items-center gap-2 md:flex"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                Learn
              </span>

              <span className="h-px w-10 bg-slate-200" />

              <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">
                Grow
              </span>
            </motion.div>
          </motion.div>

          {/* =================================================
              ARTICLE GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
            {articles.map((article, idx) => (
              <motion.article
                key={article.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_5px_25px_-15px_rgba(15,23,42,0.15)] transition-shadow duration-300 hover:border-brand-200 hover:shadow-[0_25px_50px_-20px_rgba(80,90,200,0.25)]"
              >
                {/* =================================================
                    VISUAL HEADER
                ================================================= */}

                <div
                  className={`relative h-52 w-full overflow-hidden ${article.bgClass}`}
                >
                  {/* Background decorative circles */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/50 blur-2xl"
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 5 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/40 blur-xl"
                    animate={{
                      x: [0, 8, 0],
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 6 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Article number */}
                  <div className="absolute left-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/70 font-mono text-[10px] font-bold text-text-primary backdrop-blur-sm">
                    0{idx + 1}
                  </div>

                  {/* Category */}
                  <div className="absolute right-5 top-5 z-10">
                    <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1.5 font-mono text-[9px] font-bold tracking-wider text-brand-600 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Main Icon */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22px] border border-white/70 bg-white/60 shadow-sm backdrop-blur-sm"
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 15,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2,
                      }}
                    >
                      <Image
                        src={article.icon}
                        alt={article.category}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Bottom gradient */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/[0.04] to-transparent"
                  />
                </div>

                {/* =================================================
                    ARTICLE CONTENT
                ================================================= */}

                <div className="flex flex-grow flex-col p-6">
                  {/* Category */}
                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: idx * 0.12 + 0.3,
                    }}
                    className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-brand-500"
                  >
                    {article.category}
                  </motion.span>

                  {/* Title */}
                  <h3 className="font-display text-[18px] font-bold leading-[1.35] tracking-tight text-text-primary transition-colors duration-200 group-hover:text-brand-600">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 font-inter text-xs leading-6 text-text-secondary">
                    {article.desc}
                  </p>

                  {/* Read article */}
                  <div className="mt-auto pt-6">
                    <motion.div
                      className="flex items-center gap-2 font-inter text-xs font-bold text-brand-500"
                      whileHover={{
                        x: 4,
                      }}
                    >
                      <span>Read article</span>

                      <motion.span
                        initial={{
                          x: 0,
                        }}
                        whileHover={{
                          x: 4,
                        }}
                        className="text-sm"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom hover line */}
                <motion.div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-brand-500"
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                />
              </motion.article>
            ))}
          </div>

          {/* =================================================
              ALL ARTICLES BUTTON
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.55,
            }}
            className="mt-12 flex justify-center sm:mt-14"
          >
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow:
                  "0 15px 35px -12px rgba(80,90,200,0.35)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-colors duration-200 hover:bg-brand-600"
            >
              {/* Shine */}
              <motion.span
                aria-hidden="true"
                className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/30 blur-sm"
                animate={{
                  x: ["0%", "650%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />

              <Image
                src="/images-icon/Icon.png"
                alt="Rocket"
                width={16}
                height={16}
                className="relative z-10 object-contain brightness-0 invert"
              />

              <span className="relative z-10">All Articles</span>

              <motion.span
                className="relative z-10"
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}