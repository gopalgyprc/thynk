"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, type Variants } from "framer-motion";
import { FadeInView } from "./AnimatedSection";

const fields = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    icon: (
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
    ),
  },
  {
    name: "orgName",
    label: "School/Organisation name",
    type: "text",
    icon: (
      <>
        <path d="M4 21V7l8-4 8 4v14" />
        <path d="M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
      </>
    ),
  },
  {
    name: "city",
    label: "City",
    type: "text",
    icon: (
      <>
        <path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    name: "phone",
    label: "Contact number",
    type: "tel",
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    ),
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
] as const;

const steps = [
  {
    title: "Share your details",
    desc: "Tell us a bit about your institution or company.",
  },
  {
    title: "We get in touch",
    desc: "Our team reaches out within 24 hours to understand your goals.",
  },
  {
    title: "Grow together",
    desc: "We map out a strategy built around measurable outcomes.",
  },
];
const formContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const formFieldVariants = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 16,
      mass: 0.7,
    },
  },
};

const labelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.6,
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    },
  },
};


function FloatingField({
  name,
  label,
  type,
  icon,
}: {
  name: string;
  label: string;
  type: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      variants={formFieldVariants}
      className="group relative"
      whileHover={{
        x: 3,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10 opacity-0 blur-xl"
        whileFocus={{
          opacity: 1,
        }}
      />
      <motion.span
        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/50 transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-white"
        whileHover={{
          scale: 1.1,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          {icon}
        </svg>
      </motion.span>
      <motion.input
        type={type}
        name={name}
        id={name}
        placeholder={label}
        required
        whileFocus={{
          scale: 1.01,
          transition: {
            duration: 0.2,
          },
        }}
        className="
          relative
          z-[1]
          h-[60px]
          w-full
          rounded-2xl
          border
          border-white/15
          bg-white/10
          pl-12
          pr-4
          text-base
          text-white
          outline-none
          backdrop-blur-sm
          transition-all
          duration-300
          placeholder:text-white/60
          hover:border-white/30
          hover:bg-white/[0.13]
          focus:border-white/70
          focus:bg-white/[0.16]
          focus:shadow-[0_0_0_4px_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.08)]
        "
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-4 right-4 z-10 h-px origin-left bg-white/70 opacity-0"
        whileFocus={{
          opacity: 1,
          scaleX: 1,
        }}
      />
    </motion.div>
  );
}
export default function PartnerSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");

    window.setTimeout(() => {
      setStatus("success");

      form.reset();

      window.setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 700);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-purple-200/40 blur-[110px]"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-purple-300/25 blur-[100px]"
        animate={{
          x: [0, -15, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,20,30,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,30,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 70% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-container relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInView>
            <motion.form
              onSubmit={onSubmit}
              noValidate
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="
                relative
                overflow-hidden
                rounded-[40px]
                bg-gradient-to-br
                from-purple-500
                to-purple-700
                px-8
                py-10
                shadow-[0_25px_70px_-20px_rgba(101,40,247,0.45)]
                sm:px-12
                sm:py-12
              "
            >

              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute right-20 top-20 h-2 w-2 rounded-full bg-white/30"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-28 right-12 h-1.5 w-1.5 rounded-full bg-white/30"
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.span
                  variants={labelVariants}
                  className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
                >
                  <motion.span
                    className="h-px w-6 bg-white/30"
                    initial={{
                      scaleX: 0,
                      transformOrigin: "left",
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  />

                  Let&apos;s talk
                </motion.span>
                <motion.h3
                  variants={labelVariants}
                  className="mb-7 font-display text-2xl font-bold text-white sm:text-3xl"
                >
                  Start your growth journey
                </motion.h3>

                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  variants={formContainerVariants}
                >
                  {fields.map((f) => (
                    <FloatingField
                      key={f.name}
                      {...f}
                    />
                  ))}
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  whileHover={
                    status === "idle"
                      ? {
                          y: -3,
                          scale: 1.01,
                          boxShadow:
                            "0 15px 35px -10px rgba(0,0,0,0.45)",
                        }
                      : {}
                  }
                  whileTap={
                    status === "idle"
                      ? {
                          scale: 0.97,
                        }
                      : {}
                  }
                  className="
                    relative
                    mt-8
                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-2xl
                    bg-white
                    font-display
                    text-lg
                    font-semibold
                    text-purple-700
                    shadow-[0_10px_25px_-8px_rgba(0,0,0,0.4)]
                    transition-shadow
                    duration-300
                    disabled:opacity-90
                  "
                >
                  {status === "idle" && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-20 w-16 rotate-12 bg-purple-100/70 blur-md"
                      animate={{
                        x: ["0%", "600%"],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{
                          opacity: 0,
                          y: 6,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -6,
                        }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        Submit

                        <motion.svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                          animate={{
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeInOut",
                          }}
                        >
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </motion.svg>
                      </motion.span>
                    )}
                    {status === "submitting" && (
                      <motion.span
                        key="submitting"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <motion.span
                          className="h-4 w-4 rounded-full border-2 border-purple-700/30 border-t-purple-700"
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.7,
                            ease: "linear",
                          }}
                        />

                        Sending
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span
                        key="success"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                        }}
                        className="relative z-10 flex items-center gap-2 text-emerald-600"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <motion.path
                            d="M4 12l5 5L20 6"
                            initial={{
                              pathLength: 0,
                            }}
                            animate={{
                              pathLength: 1,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                          />
                        </svg>

                        Received!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
                <motion.p
                  variants={labelVariants}
                  className="mt-4 text-center text-xs text-white/50"
                >
                  We usually respond within 24 hours.
                </motion.p>
              </motion.div>
            </motion.form>
          </FadeInView>
          <FadeInView delay={0.12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              <motion.span
                variants={labelVariants}
                className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-600"
              >
                <span className="h-px w-6 bg-purple-600/40" />
                Get in touch
              </motion.span>
              <motion.h2
                variants={labelVariants}
                className="font-display text-[clamp(32px,4.2vw,48px)] font-bold leading-[1.15] tracking-tight text-ink-950"
              >
                Thynk Success — Your Strategic Partner in Education Growth
              </motion.h2>
              <motion.div
                variants={labelVariants}
                className="mt-7 space-y-5 text-base leading-8 text-ink-950/75"
              >
                <p>
                  At Thynk Success, we go beyond providing services — we
                  become your dedicated growth partner. Working closely with
                  schools, EdTech entrepreneurs, and international institutions,
                  we design strategic, results-driven solutions that enhance
                  visibility, strengthen engagement, and deliver measurable
                  outcomes.
                </p>

                <p>
                  Our vision is to reshape the education ecosystem by
                  empowering institutions to innovate, grow, and inspire. With
                  Thynk Success, it&apos;s not just about growth — it&apos;s
                  about creating meaningful change that truly matters.
                </p>
              </motion.div>
              <div className="mt-10 space-y-6 border-t border-ink-950/10 pt-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      x: -35,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-10% 0px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: "easeOut",
                    }}
                    className="group flex gap-4"
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.12,
                        rotate: 5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-purple-100
                        font-display
                        text-sm
                        font-bold
                        text-purple-700
                        transition-colors
                        duration-300
                        group-hover:bg-purple-600
                        group-hover:text-white
                      "
                    >
                      {i + 1}
                    </motion.span>
                    <div>
                      <p className="font-display text-base font-bold text-ink-950">
                        {step.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-ink-950/60">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}