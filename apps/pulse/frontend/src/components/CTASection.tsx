"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.4, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display.toLocaleString("en-IN")}+</span>;
}

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section id="cta" className="relative z-10 overflow-hidden bg-pulse-600 py-20 text-center text-white sm:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--color-pulse-500)_0%,_transparent_50%)] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--color-pulse-700)_0%,_transparent_60%)] opacity-40" />

      {/* Faint grid — same texture language as the light sections, masked to a soft dome so it fades toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 100%)",
        }}
      />

      {/* Slow-drifting glow orb, adds ambient life without being loud */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container section-padding relative">
        <div className="mx-auto max-w-3xl">
          {/* Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-pulse-200"
          >
            <span className="h-px w-6 bg-pulse-200/50" />
            For Educators, EdTech & Leaders
            <span className="h-px w-6 bg-pulse-200/50" />
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Join Thynk Pulse.
            <br />
            <span className="font-serif font-normal italic text-pulse-100">Shape Education&apos;s Future.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
          >
            Be part of the dynamic discourse shaping the learning landscape. Share your story, learn from peers, and connect with the pioneers of education.
          </motion.p>

          {/* Subscription Form — now in a glass card so it reads as one deliberate module */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mx-auto mb-8 max-w-md"
          >
            {/* Focus glow behind the card */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-white/10 blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: focused ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative rounded-2xl border border-white/15 bg-white/[0.07] p-2 shadow-2xl shadow-black/10 backdrop-blur-md">
              <AnimatePresence mode="wait" initial={false}>
                {subscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex items-center justify-center gap-3 rounded-xl p-3.5 text-sm font-semibold"
                  >
                    <motion.svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 shrink-0 text-emerald-300"
                    >
                      <circle cx="12" cy="12" r="10" opacity="0.25" />
                      <motion.path
                        d="M8 12.5l2.5 2.5L16 9"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                      />
                    </motion.svg>
                    Welcome to the community! Check your email to verify.
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center"
                  >
                    <div className="group relative flex-grow">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-white"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholder="Enter your email..."
                        className="w-full rounded-xl border border-transparent bg-transparent px-5 py-3.5 pl-11 text-sm text-white placeholder-white/45 outline-none transition-all duration-200"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover="hover"
                      whileTap={{ scale: 0.96 }}
                      className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-pulse-600 shadow-lg shadow-black/10 transition-colors duration-200 hover:bg-pulse-50"
                    >
                      Join Pulse
                      <motion.span variants={{ hover: { x: 3 } }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </motion.span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            <p className="mt-3 text-center text-[11px] text-white/40">No spam. Unsubscribe anytime.</p>
          </motion.div>

          {/* Social proof — avatar stack + live count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {["NS", "EC", "AM", "RS"].map((initials, i) => (
                <motion.span
                  key={initials}
                  whileHover={{ y: -3, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-pulse-600 bg-white/90 text-[10px] font-bold text-pulse-700 shadow-sm"
                  style={{ zIndex: 4 - i }}
                >
                  {initials}
                </motion.span>
              ))}
            </div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-pulse-200 sm:text-xs">
              Join <CountUp target={10000} /> professionals already on Thynk Pulse
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}