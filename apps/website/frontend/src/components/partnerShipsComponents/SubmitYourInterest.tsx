"use client";

import { motion, type Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const inputClasses =
  "w-full rounded-xl border border-purple-100 bg-white/80 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm outline-none transition-all focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100";

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" className={className} fill="currentColor" aria-hidden>
      <path d="M0 24V13.8C0 9.3 1.1 5.9 3.4 3.5 5.6 1.2 8.6 0 12.3 0v5.4c-2 .1-3.5.7-4.6 1.9-1.1 1.1-1.7 2.7-1.8 4.7H12v12H0Zm18.7 0V13.8c0-4.5 1.1-7.9 3.4-10.3C24.3 1.2 27.3 0 31 0v5.4c-2 .1-3.5.7-4.6 1.9-1.1 1.1-1.7 2.7-1.8 4.7H31v12H18.7Z" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function SubmitInterestSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAFF] pt-20 pb-14 sm:pt-28 sm:pb-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(147,51,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,51,234,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-purple-300/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-200/25 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Eyebrow */}
        <FadeEyebrow />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12"
        >
          {/* Image collage */}
          <motion.div variants={fadeUp} className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-br from-purple-300/25 via-transparent to-purple-200/25 blur-2xl"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative col-span-2 overflow-hidden rounded-[26px] shadow-[0_25px_55px_-25px_rgba(147,51,234,0.35)]">
                <img
                  src="/partnerships/syi1.png"
                  alt="Students walking on campus"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-white/20" />
              </div>
              <div className="group relative overflow-hidden rounded-[22px] shadow-[0_20px_45px_-22px_rgba(147,51,234,0.3)]">
                <img
                  src="/partnerships/syi2.png"
                  alt="Students raising hands in classroom"
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="group relative overflow-hidden rounded-[22px] shadow-[0_20px_45px_-22px_rgba(147,51,234,0.3)]">
                <img
                  src="/partnerships/syi3.png"
                  alt="Graduating students celebrating"
                  className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>

            {/* Floating accent chip */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.3 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -left-5 -top-5 hidden items-center gap-2 rounded-full border border-purple-100 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-600" />
              </span>
              <span className="text-xs font-semibold text-ink-950">Let&rsquo;s build together</span>
            </motion.div>
          </motion.div>

          {/* Form card */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[32px] border border-purple-100/70 bg-purple-50/60 p-8 shadow-[0_25px_55px_-25px_rgba(147,51,234,0.3)] backdrop-blur-sm sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-300/20 blur-[80px]"
            />
            <div className="relative">
              <span className="mb-2 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-purple-500">
                <span className="h-px w-5 bg-purple-500/40" />
                Get started
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Submit Your Interest
              </h2>
              <motion.span
                aria-hidden
                className="mt-2 block h-[3px] rounded-full bg-purple-400"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              <form className="mt-7 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>
                      Name <span className="text-purple-500">*</span>
                    </label>
                    <input type="text" placeholder="Your Full Name" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Organisation Name <span className="text-purple-500">*</span>
                    </label>
                    <input type="text" placeholder="School / Company" className={inputClasses} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>
                      City <span className="text-purple-500">*</span>
                    </label>
                    <input type="text" placeholder="Location" className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Contact Number <span className="text-purple-500">*</span>
                    </label>
                    <input type="tel" placeholder="+91" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>
                    Email Address <span className="text-purple-500">*</span>
                  </label>
                  <input type="email" placeholder="email@example.com" className={inputClasses} />
                </div>

                <div>
                  <label className={labelClasses}>
                    Comment or Message <span className="text-purple-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you grow?"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-purple-600 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_12px_30px_-10px_rgba(126,34,206,0.6)] transition-all hover:shadow-[0_18px_38px_-10px_rgba(126,34,206,0.75)] hover:from-purple-800 hover:to-purple-700"
                >
                  Start Your Success Story
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto mt-10 max-w-3xl px-8 text-center sm:mt-12 sm:px-10"
        >
          <QuoteMark className="absolute -top-3 left-0 h-7 w-8 rotate-180 text-purple-400/70 sm:left-2" />
          <p className="font-display text-lg font-semibold leading-relaxed text-purple-700 sm:text-xl">
            Our vision is to reshape the education ecosystem by empowering
            institutions to innovate, grow, and inspire. With Thynk Success,
            it&rsquo;s not just about growth&mdash;it&rsquo;s about creating
            meaningful change that truly matters.
          </p>
          <QuoteMark className="absolute -bottom-3 right-0 h-7 w-8 text-purple-400/70 sm:right-2" />
          <motion.span
            aria-hidden
            className="mx-auto mt-4 block h-[2px] rounded-full bg-purple-300"
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function FadeEyebrow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 flex justify-center sm:mb-14"
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
        <span className="h-px w-6 bg-purple-600/40" />
        Ready when you are
        <span className="h-px w-6 bg-purple-600/40" />
      </span>
    </motion.div>
  );
}