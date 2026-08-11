"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "./AnimatedSection";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    bullets: ["Basic Listing", "5 Lead Credits", "5 Gallery Images"],
    btnText: "Claim School",
    highlighted: false,
  },
  {
    name: "Silver",
    price: "₹2,999",
    period: "/mo",
    bullets: ["Verified Badge", "25 Lead Credits", "Performance Analytics"],
    btnText: "Select Plan",
    highlighted: false,
  },
  {
    name: "Gold",
    price: "₹5,999",
    period: "/mo",
    bullets: ["Featured Listing", "75 Lead Credits", "Admission Dashboard"],
    btnText: "Go Pro",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Platinum",
    price: "₹9,999",
    period: "/mo",
    bullets: [
      "Top-Ranked Ads",
      "Unlimited Lead Credits",
      "Dedicated Account Manager",
    ],
    btnText: "Contact Sales",
    highlighted: false,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.94,
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: idx * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const featureVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-brand-100/50 blur-[120px]"
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-purple-100/50 blur-[110px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
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
        {/* ===================================================
            HEADER
        =================================================== */}

        <FadeInView>
          <motion.div
            className="mx-auto max-w-2xl text-center"
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
          >
            {/* Eyebrow */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mb-3 flex items-center justify-center gap-3"
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 28,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-px bg-brand-500/50"
              />

              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500">
                Partner with Thynk Schooling
              </span>

              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 28,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-px bg-brand-500/50"
              />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="font-display text-[clamp(30px,4vw,46px)] font-bold leading-tight tracking-tight text-text-primary"
            >
              Choose the right plan{" "}
              <span className="text-brand-500">for your school</span>
            </motion.h2> stats, dvis
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                  },
                },
              }}
              className="mt-4 font-inter text-sm leading-7 text-text-secondary sm:text-base"
            >
              Get your school in front of 1 Lakh+ parents. List for free,
              buy leads only when you need them.
            </motion.p>
          </motion.div>
        </FadeInView>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              whileHover={{
                y: plan.highlighted ? -12 : -8,
                scale: 1.015,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className={`group relative flex h-full flex-col rounded-3xl p-6 transition-shadow duration-300 ${plan.highlighted
                  ? "z-10 border-2 border-brand-500 bg-[#e0e6fe] shadow-[0_20px_60px_-20px_rgba(80,90,200,0.35)] lg:-translate-y-2"
                  : "border border-slate-100 bg-white shadow-sm hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                }`}
            >

              {plan.highlighted && (
                <>
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
                  >
                    <motion.div
                      className="absolute -left-[100%] top-0 h-full w-1/2 rotate-12 bg-white/30 blur-2xl"
                      animate={{
                        left: ["-100%", "180%"],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Popular Badge */}
                  {plan.badge && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: -10,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      animate={{
                        scale: [1, 1.04, 1],
                        opacity: [1, 0.9, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white"
                    >
                      {plan.badge}
                    </motion.span>
                  )}
                </>
              )}

              {/* =================================================
                  PLAN NAME
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.12 + 0.15,
                  duration: 0.4,
                }}
                className="mb-6"
              >
                <span
                  className={`block font-display text-sm font-bold ${plan.highlighted
                      ? "text-brand-600"
                      : "text-text-primary"
                    }`}
                >
                  {plan.name}
                </span>

                {/* =================================================
                    PRICE
                ================================================= */}

                <div className="mt-2 flex items-baseline gap-1.5 text-text-primary">
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: idx * 0.12 + 0.25,
                      type: "spring",
                      stiffness: 180,
                      damping: 15,
                    }}
                    className="font-display text-3xl font-extrabold tracking-tight"
                  >
                    {plan.price}
                  </motion.span>

                  <span className="font-inter text-xs font-medium text-text-secondary">
                    {plan.period}
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  FEATURES
              ================================================= */}

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: idx * 0.12 + 0.35,
                    },
                  },
                }}
                className={`mb-8 flex-grow space-y-4 border-t pt-6 ${plan.highlighted
                    ? "border-brand-200/70"
                    : "border-slate-100"
                  }`}
              >
                {plan.bullets.map((bullet) => (
                  <motion.li
                    key={bullet}
                    variants={featureVariants}
                    className="flex items-center gap-2.5 font-inter text-xs font-medium text-text-secondary"
                  >
                    {/* Animated check */}
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-4 w-4 shrink-0 items-center justify-center"
                    >
                      <Image
                        src="/images-icon/Icon (29).png"
                        alt="Check"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </motion.span>

                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* =================================================
                  BUTTON
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: idx * 0.12 + 0.55,
                  duration: 0.45,
                }}
                className="mt-auto"
              >
                {plan.highlighted ? (
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="relative w-full overflow-hidden rounded-xl bg-brand-500 py-3 text-xs font-bold text-white shadow-lg shadow-brand-500/20 transition-colors duration-200 hover:bg-brand-600"
                  >
                    {/* Button shine */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/30 blur-sm"
                      animate={{
                        x: ["0%", "600%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />

                    <span className="relative z-10">
                      {plan.btnText}
                    </span>
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      backgroundColor: "rgba(80,90,200,0.05)",
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="w-full rounded-xl border border-brand-500 bg-white py-3 text-xs font-bold text-brand-500 transition-all duration-200"
                  >
                    {plan.btnText}
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            COMPARISON LINK
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            className="group inline-flex items-center gap-2 font-inter text-sm font-bold text-brand-500 transition-colors hover:text-brand-600"
          >
            <span>View Full Feature Comparison</span>

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}