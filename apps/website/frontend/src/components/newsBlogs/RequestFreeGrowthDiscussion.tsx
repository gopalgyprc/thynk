"use client";

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
  "w-full rounded-lg border border-white/0 bg-white px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-white/60";

const labelClasses = "mb-1.5 block text-sm font-semibold text-white/90";

export  function RequestFreeGrowthDiscussion() {
  return (
    <section className="bg-[#FBFAFF] px-6 py-16 sm:py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-600 via-purple-700 to-violet-800 px-6 py-12 shadow-[0_35px_70px_-25px_rgba(88,28,135,0.55)] sm:px-12 sm:py-14"
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-purple-400/25 blur-3xl" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl"
          >
            Request Free Growth Discussion
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-center text-sm text-purple-100 sm:text-base"
          >
            Our vision is to reshape the education ecosystem by empowering
            institutions to innovate and grow.
          </motion.p>

          {/* Form panel */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClasses}>
                    Full Name <span className="text-white">*</span>
                  </label>
                  <input type="text" placeholder="Your Name" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>
                    Organisation <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="School/EdTech Name"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClasses}>
                    Contact Number <span className="text-white">*</span>
                  </label>
                  <input type="tel" placeholder="+91" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>
                    Email Address <span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your goals"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-white py-3.5 text-sm font-bold text-purple-700 shadow-lg transition-transform hover:scale-[1.01] hover:bg-purple-50"
              >
                Submit Your Interest
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default RequestFreeGrowthDiscussion