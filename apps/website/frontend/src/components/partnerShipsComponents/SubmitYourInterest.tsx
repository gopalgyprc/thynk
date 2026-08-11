"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

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

const inputClasses =
  "w-full rounded-lg border border-purple-100 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm outline-none transition-colors focus:border-purple-400 focus:ring-2 focus:ring-purple-100";

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";

export default function SubmitInterestSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAFF] py-20 sm:py-28">
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-2xl ">
              <img
                src="/partnerships/syi1.png" alt="Students walking on campus"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl ">
              <img
                src="/partnerships/syi2.png" alt="Students raising hands in classroom"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl ">
              <img
                src="/partnerships/syi3.png" alt="Graduating students celebrating"
                className="h-40 w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-purple-100/70 bg-purple-50/60 p-8 shadow-[0_25px_55px_-25px_rgba(147,51,234,0.3)] backdrop-blur-sm sm:p-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Submit Your Interest
            </h2>

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

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-700 to-purple-600 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_12px_30px_-10px_rgba(126,34,206,0.6)] transition-colors hover:from-purple-800 hover:to-purple-700"
              >
                Start Your Success Story
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto mt-16 max-w-3xl px-8 text-center sm:px-10"
        >
          <Quote
            className="absolute -top-2 left-0 h-8 w-8 rotate-180 text-purple-400 sm:left-2"
            strokeWidth={2}
          />
          <p className="text-lg font-semibold leading-relaxed text-purple-700 sm:text-xl">
            &ldquo;Our vision is to reshape the education ecosystem by
            empowering institutions to innovate, grow, and inspire. With
            Thynk Success, it&rsquo;s not just about growth&mdash;it&rsquo;s
            about creating meaningful change that truly matters.&rdquo;
          </p>
          <Quote
            className="absolute -bottom-2 right-0 h-8 w-8 text-purple-400 sm:right-2"
            strokeWidth={2}
          />
        </motion.div>
      </div>
    </section>
  );
}