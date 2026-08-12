"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Heart,
  Lightbulb,
  Music,
  Palette,
  Puzzle,
  Rocket,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Early Literacy",
    description:
      "Stories, phonics, letters, and playful reading activities help children discover the joy of language.",
  },
  {
    icon: Puzzle,
    title: "Math Through Play",
    description:
      "Numbers, patterns, shapes, and simple problem solving become exciting through hands-on activities.",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description:
      "Art, drawing, craft, and creative projects give children a wonderful way to express themselves.",
  },
  {
    icon: Music,
    title: "Music & Movement",
    description:
      "Songs, rhythm, dance, and movement help children build confidence while having fun.",
  },
];

const experiences = [
  {
    icon: Lightbulb,
    title: "Curious Minds",
    description:
      "We encourage children to ask questions, explore ideas, and discover how things work.",
  },
  {
    icon: Heart,
    title: "Kind Hearts",
    description:
      "Children learn empathy, kindness, sharing, friendship, and respect through everyday experiences.",
  },
  {
    icon: Rocket,
    title: "Growing Confidence",
    description:
      "Every small achievement helps children become more independent and confident learners.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Aarav",
    text: "Aarav has become so confident since joining kindergarten. He loves his teachers and talks about school every day!",
  },
  {
    name: "Rahul Mehta",
    role: "Parent of Anaya",
    text: "The activities are wonderful. My daughter is learning so much while having fun and making new friends.",
  },
  {
    name: "Neha Kapoor",
    role: "Parent of Vihaan",
    text: "A warm and beautiful environment. The teachers understand children and make every child feel special.",
  },
];

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

export default function page() {
  return (
    <main className="overflow-hidden bg-cream text-ink-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        {/* Decorative background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-lavender-100 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute left-0 top-1/2 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl"
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
                Little learners. Big possibilities.
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl"
              >
                Where little
                <span className="block text-purple-600">
                  minds discover
                </span>
                big ideas.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl font-inter text-base leading-8 text-slate-600 sm:text-lg"
              >
                A joyful kindergarten where children learn through play,
                creativity, curiosity, and meaningful experiences every day.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a href="#contact" className="btn-primary">
                  Visit Our Kindergarten
                  <ArrowRight size={17} />
                </a>

                <a href="#programs" className="btn-ghost">
                  <PlayIcon />
                  Explore Learning
                </a>
              </motion.div>

              {/* Trust */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-7"
              >
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-purple-600 text-xs font-bold text-white">
                    A
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-purple-500 text-xs font-bold text-white">
                    S
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-purple-300 text-xs font-bold text-white">
                    P
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream bg-ink-700 text-xs font-bold text-white">
                    R
                  </div>
                </div>

                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={14}
                        className="fill-purple-500 text-purple-500"
                      />
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
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-8 rounded-full bg-lavender-100"
              />

              <div className="relative rounded-[36px] border border-purple-200/50 bg-white p-5 shadow-[0_30px_80px_-35px_rgba(79,31,209,0.3)] sm:p-7">
                <div className="relative min-h-[450px] overflow-hidden rounded-[28px] bg-lavender-100">
                  {/* Decorative circles */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[18px] border-purple-200/40"
                  />

                  <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-200/30" />

                  {/* Sun */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-purple-200"
                  >
                    <Sparkles size={25} className="text-purple-600" />
                  </motion.div>

                  {/* Rainbow */}
                  <div className="absolute left-1/2 top-16 h-36 w-72 -translate-x-1/2 rounded-t-full border-[18px] border-purple-300/30 border-b-0" />

                  {/* Learning board */}
                  <div className="absolute left-1/2 top-24 w-[76%] -translate-x-1/2 rounded-2xl bg-purple-700 p-5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 rounded-full bg-purple-300" />
                      <div className="h-2 w-8 rounded-full bg-purple-300" />
                    </div>

                    <p className="mt-6 text-center font-head text-2xl font-bold text-white">
                      LET&apos;S LEARN!
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0,
                        }}
                        className="flex h-12 items-center justify-center rounded-lg bg-purple-500 text-white"
                      >
                        A
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                        className="flex h-12 items-center justify-center rounded-lg bg-purple-300 text-purple-700"
                      >
                        B
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                        className="flex h-12 items-center justify-center rounded-lg bg-purple-500 text-white"
                      >
                        C
                      </motion.div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="absolute bottom-20 left-1/2 h-28 w-[70%] -translate-x-1/2 rounded-2xl bg-white shadow-lg">
                    <div className="absolute left-5 right-5 top-5 h-3 rounded-full bg-lavender-200" />

                    <div className="absolute bottom-0 left-8 h-20 w-3 bg-purple-300" />

                    <div className="absolute bottom-0 right-8 h-20 w-3 bg-purple-300" />

                    {/* Books */}
                    <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-end gap-1">
                      <div className="h-7 w-12 rounded-md bg-purple-300" />
                      <div className="h-10 w-12 rounded-md bg-purple-600" />
                      <div className="h-6 w-12 rounded-md bg-purple-500" />
                    </div>
                  </div>

                  {/* Child */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-end"
                  >
                    <div className="relative h-28 w-24 rounded-t-[40px] bg-purple-500">
                      <div className="absolute -top-10 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-[#d89c72]" />

                      <div className="absolute left-1/2 top-5 h-3 w-12 -translate-x-1/2 rounded-full bg-white/30" />
                    </div>
                  </motion.div>

                  {/* Floating icons */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-5 top-28 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600 shadow-lg"
                  >
                    <BookOpen size={22} />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-24 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600 shadow-lg"
                  >
                    <Lightbulb size={22} />
                  </motion.div>
                </div>

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -left-5 top-28 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Heart size={19} fill="currentColor" />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Happy Learners
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Every day
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Learn Through Play
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Discover & grow
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
        viewport={{ once: true, amount: 0.3 }}
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
                className="border-border px-5 py-8 text-center md:border-r md:last:border-r-0"
              >
                <motion.p
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
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
          ABOUT
      ====================================================== */}
      <section id="about" className="py-24">
        <div className="section-container max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Visual */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 4, 0, -4, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-purple-200/60"
              />

              <div className="relative rounded-[32px] bg-lavender-100 p-6">
                <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[24px] bg-white">
                  {/* Decorative stars */}
                  <Sparkles
                    className="absolute left-8 top-8 text-purple-300"
                    size={28}
                  />

                  <Star
                    className="absolute right-8 top-10 fill-purple-200 text-purple-300"
                    size={28}
                  />

                  <Sparkles
                    className="absolute bottom-10 left-10 text-purple-300"
                    size={22}
                  />

                  <Star
                    className="absolute bottom-10 right-12 fill-purple-200 text-purple-300"
                    size={22}
                  />

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
                      className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-purple-600 text-white shadow-xl shadow-purple-600/25"
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
                      Kindergarten is where children begin discovering who
                      they are and what they can do.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-5 -right-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Check size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Caring Environment
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Every child matters
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
              viewport={{ once: true, amount: 0.25 }}
            >
              <span className="eyebrow">Our Kindergarten</span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
                A beautiful beginning to a
                <span className="text-purple-600"> lifetime of learning.</span>
              </h2>

              <p className="mt-6 font-inter leading-8 text-slate-600">
                We believe young children learn best when they feel safe,
                supported, and excited to explore. Our kindergarten combines
                structured learning with plenty of opportunities for play and
                discovery.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-5"
              >
                {experiences.map((experience) => {
                  const Icon = experience.icon;

                  return (
                    <motion.div
                      key={experience.title}
                      variants={fadeUp}
                      whileHover={{ x: 5 }}
                      className="flex gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3 className="font-head font-semibold text-ink-900">
                          {experience.title}
                        </h3>

                        <p className="mt-1 font-inter text-sm leading-6 text-slate-600">
                          {experience.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.a
                href="#programs"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-9"
              >
                Discover Our Approach
                <ArrowRight size={17} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMS
      ====================================================== */}
      <section id="programs" className="bg-lavender-100 py-24">
        <div className="section-container max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              What We Learn
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold text-ink-900 sm:text-5xl"
            >
              Learning should feel
              <span className="text-purple-600"> exciting.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-inter text-base leading-7 text-slate-600"
            >
              Our kindergarten curriculum turns everyday learning into
              exciting experiences children can understand and enjoy.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <motion.article
                  key={program.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                  className="group rounded-[24px] border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(79,31,209,0.4)]"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="flex h-13 w-13 items-center justify-center rounded-xl bg-lavender-100 text-purple-600"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h3 className="mt-6 font-head text-xl font-bold text-ink-900">
                    {program.title}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="mt-6 inline-flex items-center gap-2 font-head text-sm font-semibold text-purple-600"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </motion.a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LEARNING THROUGH PLAY
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="section-container max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[26px] bg-purple-700 p-7 text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Puzzle size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold">
                  Learn Through Play
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-purple-100">
                  Play is one of the most powerful ways children understand the
                  world around them.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[26px] bg-lavender-100 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600">
                  <Lightbulb size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold text-ink-900">
                  Discover & Explore
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                  Children are encouraged to ask questions and explore their
                  own ideas.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[26px] border border-border bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                  <Users size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold text-ink-900">
                  Make Friends
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                  Children develop communication, cooperation, and friendship
                  through group activities.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[26px] border border-border bg-lavender-100 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600">
                  <Rocket size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold text-ink-900">
                  Grow Confident
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                  Small achievements build independence, confidence, and a
                  positive attitude toward learning.
                </p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="eyebrow">Learning Philosophy</span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
                Childhood is a time to
                <span className="text-purple-600"> explore.</span>
              </h2>

              <p className="mt-6 font-inter leading-8 text-slate-600">
                Our classrooms are designed to give children the freedom to
                explore while providing the structure they need to grow.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Hands-on learning experiences",
                  "Small group activities",
                  "Creative problem solving",
                  "Confidence-building opportunities",
                  "Strong teacher-child relationships",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3 font-inter text-sm text-ink-700"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lavender-100 text-purple-600">
                      <Check size={13} />
                    </span>

                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Parent Stories
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-bold text-ink-900 sm:text-5xl"
            >
              Little learners.
              <span className="text-purple-600"> Big smiles.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                className="rounded-[24px] border border-border bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-purple-500 text-purple-500"
                    />
                  ))}
                </div>

                <p className="mt-5 font-inter text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-head font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] bg-purple-700 px-7 py-16 text-center sm:px-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-600"
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
              className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-purple-600"
            />

            <div className="relative mx-auto max-w-2xl">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white"
              >
                <Sparkles size={27} />
              </motion.div>

              <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Ready to give your child a
                <span className="text-purple-200"> joyful beginning?</span>
              </h2>

              <p className="mt-5 font-inter text-sm leading-7 text-purple-100">
                Come visit our kindergarten, meet our teachers, and discover a
                place where your child can learn, play, and grow with
                confidence.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <motion.a
                  href="tel:+911234567890"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 font-head text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  Schedule a Visit
                  <ArrowRight size={17} />
                </motion.a>

                <motion.a
                  href="mailto:admissions@school.com"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 font-head text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Admissions
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* Small reusable icon component */
function PlayIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center">
      <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-purple-600" />
    </span>
  );
}