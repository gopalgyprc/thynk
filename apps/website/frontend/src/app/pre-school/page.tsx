"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  BookOpen,
  Check,
  Heart,
  Lightbulb,
  Music,
  Palette,
  Play,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const programs = [
  {
    icon: Baby,
    age: "2–3 YEARS",
    title: "Little Explorers",
    description:
      "A gentle introduction to school where children learn through play, stories, music, and discovery.",
    points: ["Creative play", "Story time", "Music & movement"],
  },
  {
    icon: BookOpen,
    age: "3–4 YEARS",
    title: "Curious Minds",
    description:
      "Building early learning skills through hands-on activities, imagination, and social interaction.",
    points: ["Early literacy", "Numbers & counting", "Art & crafts"],
  },
  {
    icon: Sparkles,
    age: "4–5 YEARS",
    title: "Bright Beginnings",
    description:
      "Preparing children for their next big adventure with confidence, curiosity, and independence.",
    points: ["Phonics", "Early mathematics", "Social learning"],
  },
];

const activities = [
  {
    icon: Palette,
    title: "Creative Arts",
    description:
      "Painting, drawing, crafting, and creating help children express their imagination.",
  },
  {
    icon: Music,
    title: "Music & Movement",
    description:
      "Songs, rhythm, dance, and movement make learning active and joyful.",
  },
  {
    icon: Lightbulb,
    title: "Discovery Time",
    description:
      "Simple experiments and activities encourage children to ask questions and explore.",
  },
  {
    icon: Users,
    title: "Friendship & Fun",
    description:
      "Children learn sharing, communication, teamwork, kindness, and confidence.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Aarav",
    text: "My son absolutely loves coming to school. The teachers are caring, patient, and make learning so much fun.",
  },
  {
    name: "Rahul Mehta",
    role: "Parent of Anaya",
    text: "We have seen such a positive change in our daughter. She is more confident, curious, and independent.",
  },
  {
    name: "Neha Kapoor",
    role: "Parent of Vihaan",
    text: "A beautiful environment where children can learn at their own pace. We are very happy with our experience.",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Page() {
  return (
    <main className="overflow-hidden bg-cream text-ink-900">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24">
        {/* Background animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-lavender-100 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-10 top-40 h-20 w-20 rounded-full bg-purple-200/30 blur-2xl"
        />

        <div className="section-container relative max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={fadeUp} className="eyebrow">
                Where little minds grow
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl"
              >
                Big dreams
                <span className="block text-purple-600">
                  start with little
                </span>
                steps.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl font-inter text-base leading-8 text-slate-600 sm:text-lg"
              >
                A joyful preschool where children feel safe, loved, curious,
                and excited to discover something new every day.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  Schedule a Visit
                  <ArrowRight size={17} />
                </motion.a>

                <motion.a
                  href="#about"
                  className="btn-ghost"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Play size={16} fill="currentColor" />
                  Discover Our School
                </motion.a>
              </motion.div>

              {/* Trust */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-7"
              >
                <div className="flex -space-x-2">
                  {["A", "S", "P", "R"].map((letter, index) => (
                    <motion.div
                      key={letter}
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.8 + index * 0.1,
                        duration: 0.4,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.1,
                      }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream text-xs font-bold text-white ${
                        index === 0
                          ? "bg-purple-600"
                          : index === 1
                            ? "bg-purple-500"
                            : index === 2
                              ? "bg-purple-300"
                              : "bg-ink-700"
                      }`}
                    >
                      {letter}
                    </motion.div>
                  ))}
                </div>

                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 1 + star * 0.08,
                          duration: 0.3,
                        }}
                      >
                        <Star
                          size={14}
                          className="fill-purple-500 text-purple-500"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="mt-1 font-inter text-xs text-slate-600">
                    Loved by 500+ families
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              {/* Floating background */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-8 rounded-full bg-lavender-100"
              />

              <div className="relative rounded-[36px] border border-purple-200/50 bg-white p-5 shadow-[0_30px_80px_-35px_rgba(79,31,209,0.3)] sm:p-7">
                <div className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-lavender-100">
                  {/* Clouds */}
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-8 top-8 h-8 w-20 rounded-full bg-white/80"
                  />

                  <motion.div
                    animate={{
                      x: [0, -12, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-10 top-16 h-7 w-16 rounded-full bg-white/80"
                  />

                  {/* Sun */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-8 top-7 flex h-20 w-20 items-center justify-center rounded-full bg-purple-200"
                  >
                    <Sparkles className="text-purple-600" size={30} />
                  </motion.div>

                  {/* Rainbow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-14 h-36 w-72 -translate-x-1/2 rounded-t-full border-[18px] border-purple-300/40 border-b-0"
                  />

                  {/* Ground */}
                  <div className="absolute bottom-0 h-24 w-full bg-purple-300/40" />

                  {/* School */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.7,
                    }}
                    className="absolute bottom-16 left-1/2 w-[72%] -translate-x-1/2"
                  >
                    <div className="mx-auto h-0 w-0 border-b-[75px] border-l-[145px] border-r-[145px] border-b-purple-600 border-l-transparent border-r-transparent sm:border-l-[165px] sm:border-r-[165px]" />

                    <div className="relative h-48 rounded-b-2xl bg-white shadow-lg">
                      {/* Windows */}
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="absolute left-7 top-8 h-16 w-16 rounded-xl border-4 border-purple-300 bg-lavender-100"
                      >
                        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-purple-300" />
                        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-purple-300" />
                      </motion.div>

                      <motion.div
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="absolute right-7 top-8 h-16 w-16 rounded-xl border-4 border-purple-300 bg-lavender-100"
                      >
                        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-purple-300" />
                        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-purple-300" />
                      </motion.div>

                      {/* Door */}
                      <motion.div
                        whileHover={{
                          scaleX: 1.04,
                        }}
                        className="absolute bottom-0 left-1/2 h-28 w-20 -translate-x-1/2 rounded-t-2xl bg-purple-500"
                      >
                        <div className="absolute right-3 top-1/2 h-2.5 w-2.5 rounded-full bg-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Children */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: [0, -4, 0],
                    }}
                    transition={{
                      opacity: {
                        delay: 1,
                        duration: 0.5,
                      },
                      y: {
                        delay: 1.5,
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-end gap-3"
                  >
                    <div className="relative h-20 w-14 rounded-t-full rounded-b-xl bg-purple-500">
                      <div className="absolute -top-7 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-[#f4c7a5]" />
                    </div>

                    <div className="relative h-24 w-16 rounded-t-full rounded-b-xl bg-purple-700">
                      <div className="absolute -top-7 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-[#d89c72]" />
                    </div>

                    <div className="relative h-20 w-14 rounded-t-full rounded-b-xl bg-purple-300">
                      <div className="absolute -top-7 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-[#f4c7a5]" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Card 1 */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 1.1,
                      duration: 0.5,
                    },
                    x: {
                      delay: 1.1,
                      duration: 0.5,
                    },
                    y: {
                      delay: 1.6,
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="absolute -left-4 top-24 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:-left-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Heart size={19} fill="currentColor" />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Safe & Caring
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Every child matters
                    </p>
                  </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, 6, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 1.3,
                      duration: 0.5,
                    },
                    x: {
                      delay: 1.3,
                      duration: 0.5,
                    },
                    y: {
                      delay: 1.8,
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="absolute -bottom-4 -right-3 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:-right-7"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Happy Learning
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Every single day
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        variants={containerVariants}
        className="border-y border-border bg-white"
      >
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              ["500+", "Happy Families"],
              ["15+", "Years Experience"],
              ["20+", "Learning Activities"],
              ["1:10", "Teacher Ratio"],
            ].map(([number, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                }}
                className="border-border px-5 py-8 text-center md:border-r md:last:border-r-0"
              >
                <motion.p
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="font-head text-3xl font-bold text-purple-600"
                >
                  {number}
                </motion.p>

                <p className="mt-1 font-inter text-xs text-slate-600 sm:text-sm">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          PROGRAMS
      ====================================================== */}

      <section id="programs" className="py-24">
        <div className="section-container max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Our Programs
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl"
            >
              Learning made
              <span className="text-purple-600"> joyful.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-inter text-base leading-7 text-slate-600"
            >
              Age-appropriate programs designed to help children learn,
              explore, and build confidence at their own pace.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <motion.article
                  key={program.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="group rounded-[24px] border border-border bg-white p-7 shadow-[0_12px_40px_-25px_rgba(79,31,209,0.35)] transition-shadow hover:border-purple-200 hover:shadow-[0_20px_50px_-25px_rgba(79,31,209,0.45)]"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender-100 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white"
                  >
                    <Icon size={26} />
                  </motion.div>

                  <p className="mt-7 font-inter text-[11px] font-bold uppercase tracking-[0.15em] text-purple-600">
                    {program.age}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-ink-900">
                    {program.title}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {program.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        className="flex items-center gap-2 font-inter text-sm text-ink-700"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender-100 text-purple-600">
                          <Check size={12} />
                        </span>

                        {point}
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{
                      x: 5,
                    }}
                    className="mt-7 inline-flex items-center gap-2 font-head text-sm font-semibold text-purple-600"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </motion.a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section id="about" className="bg-lavender-100 py-24">
        <div className="section-container max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Visual */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-purple-200/60"
              />

              <div className="relative rounded-[32px] bg-white p-6 shadow-[0_25px_70px_-35px_rgba(79,31,209,0.35)]">
                <div className="flex min-h-[430px] items-center justify-center rounded-[24px] bg-lavender-100">
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.06, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                    >
                      <Heart size={52} fill="currentColor" />
                    </motion.div>

                    <h3 className="mt-8 text-3xl font-bold text-ink-900">
                      Learn.
                      <span className="text-purple-600"> Play.</span>
                      <br />
                      Grow.
                    </h3>

                    <p className="mx-auto mt-4 max-w-sm font-inter text-sm leading-7 text-slate-600">
                      Every child is unique. We create an environment where
                      every little personality can shine.
                    </p>
                  </div>
                </div>
              </div>

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
                  delay: 0.3,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -4,
                }}
                className="absolute -bottom-5 -right-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Check size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Trusted Preschool
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Since 2011
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <span className="eyebrow">Why Choose Us</span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
                A place where
                <span className="text-purple-600"> childhood</span> comes
                first.
              </h2>

              <p className="mt-6 font-inter leading-8 text-slate-600">
                We believe preschool should be more than preparation for
                school. It should be a place where children feel safe, valued,
                curious, and excited to learn.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-8 space-y-5"
              >
                {[
                  [
                    "Caring Teachers",
                    "Our teachers build meaningful relationships with every child.",
                  ],
                  [
                    "Learning Through Play",
                    "Children naturally learn through exploration, creativity, and discovery.",
                  ],
                  [
                    "Safe Environment",
                    "A warm, secure, and welcoming environment for every little learner.",
                  ],
                ].map(([title, description]) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    whileHover={{
                      x: 5,
                    }}
                    className="flex gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm">
                      <Check size={18} />
                    </div>

                    <div>
                      <h3 className="font-head font-semibold text-ink-900">
                        {title}
                      </h3>

                      <p className="mt-1 font-inter text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="btn-primary mt-9"
              >
                Meet Our Teachers
                <ArrowRight size={17} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVITIES
      ====================================================== */}

      <section id="activities" className="bg-white py-24">
        <div className="section-container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={containerVariants}
            className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          >
            <div>
              <motion.span variants={fadeUp} className="eyebrow">
                Everyday Experiences
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl"
              >
                More than just
                <span className="text-purple-600"> classrooms.</span>
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl font-inter text-sm leading-7 text-slate-600 lg:justify-self-end"
            >
              Every day brings something new. Our activities are designed to
              develop creativity, confidence, communication, and curiosity.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <motion.article
                  key={activity.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="rounded-[22px] border border-border bg-cream p-6 transition-shadow hover:border-purple-200 hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-100 text-purple-600"
                  >
                    <Icon size={22} />
                  </motion.div>

                  <h3 className="mt-6 font-head text-lg font-bold text-ink-900">
                    {activity.title}
                  </h3>

                  <p className="mt-2 font-inter text-sm leading-6 text-slate-600">
                    {activity.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="bg-lavender-100 py-24">
        <div className="section-container max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Parent Stories
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold text-ink-900 sm:text-5xl"
            >
              Happy children.
              <span className="text-purple-600"> Happy parents.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="rounded-[24px] border border-border bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                      }}
                    >
                      <Star
                        size={14}
                        className="fill-purple-500 text-purple-500"
                      />
                    </motion.div>
                  ))}
                </div>

                <p className="mt-5 font-inter text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-head font-bold text-white"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>

                  <div>
                    <p className="font-head text-sm font-semibold text-ink-900">
                      {testimonial.name}
                    </p>

                    <p className="font-inter text-xs text-slate-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section id="contact" className="py-16 sm:py-24">
        <div className="section-container max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[32px] bg-purple-700 px-7 py-16 text-center sm:px-12"
          >
            {/* Animated circles */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-purple-600"
            />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-purple-600"
            />

            <div className="relative mx-auto max-w-2xl">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white"
              >
                <Sparkles size={26} />
              </motion.div>

              <motion.h2
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
                  delay: 0.2,
                }}
                className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl"
              >
                Ready to see your little one
                <span className="text-purple-200"> shine?</span>
              </motion.h2>

              <motion.p
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
                  delay: 0.3,
                }}
                className="mt-5 font-inter text-sm leading-7 text-purple-100"
              >
                Come visit us, meet our teachers, explore our classrooms, and
                discover why families love our preschool.
              </motion.p>

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
                }}
                className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
              >
                <motion.a
                  href="tel:+911234567890"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 font-head text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  Call Us
                  <ArrowRight size={17} />
                </motion.a>

                <motion.a
                  href="mailto:hello@preschool.com"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 font-head text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Admissions
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}