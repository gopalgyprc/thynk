"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  "CBSE vs ICSE vs IB comparison",
  "School shortlisting by budget",
  "Document checklist & timelines",
  "Admission tracking assistance",
];

const textVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-slate-50"
      />

      <div className="section-container relative">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.98,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-gradient-to-br
            from-brand-600
            to-brand-500
            shadow-[0_25px_70px_-25px_rgba(80,90,200,0.45)]
            sm:rounded-[36px]
          "
        >

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-white/[0.10] blur-[90px]"
            animate={{
              x: [0, 20, 0],
              y: [0, 15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 h-[350px] w-[350px] rounded-full bg-purple-900/10 blur-[100px]"
            animate={{
              x: [0, -15, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />



          <div className="relative grid lg:grid-cols-12">

            <div className="flex flex-col items-start p-8 text-left text-white sm:p-12 lg:col-span-7 lg:p-16">
              <motion.span
                initial={{
                  opacity: 0,
                  y: -15,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="mb-6 rounded-md border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
              >
                100% Free Service
              </motion.span>

              <motion.h2
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px]"
              >
                Talk to an Expert
                <br />
                <span className="text-white/80">
                  Education Counsellor
                </span>
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  delay: 0.12,
                }}
                className="mt-5 max-w-md font-inter text-sm leading-7 text-brand-100 sm:text-[15px]"
              >
                Experts help 500+ families every month find the right school
                at absolutely zero cost.
              </motion.p>

              <motion.div
                className="mt-8 mb-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.25,
                    },
                  },
                }}
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    whileHover={{
                      x: 5,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="group flex items-center gap-3 text-xs font-semibold text-white/90"
                  >
                    {/* Check icon */}
                    <motion.span
                      initial={{
                        scale: 0,
                        rotate: -45,
                      }}
                      whileInView={{
                        scale: 1,
                        rotate: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20"
                    >
                      <Image
                        src="/images-icon/Icon (20).png"
                        alt="Check circle"
                        width={16}
                        height={16}
                        className="object-contain brightness-0 invert"
                      />
                    </motion.span>

                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>


              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.65,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow:
                    "0 15px 35px -10px rgba(0,0,0,0.3)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  bg-white
                  px-8
                  py-3.5
                  text-xs
                  font-bold
                  text-brand-600
                  shadow-md
                  transition-colors
                  duration-200
                "
              >
                {/* Button shine */}
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-12 w-8 rotate-12 bg-brand-100/60 blur-sm"
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

                <span className="relative z-10 flex items-center gap-2">
                  Book Free Session

                  <motion.span
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
                    →
                  </motion.span>
                </span>
              </motion.button>
            </div>


            <motion.div
              initial={{
                opacity: 0,
                x: 45,
                scale: 1.06,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-[300px] w-full overflow-hidden bg-slate-900/10 lg:col-span-5 lg:min-h-[450px]"
            >
              <Image
                src="/images-icon/Image.png"
                alt="Education Counsellor"
                fill
                className="object-cover object-center transition-transform duration-700 lg:object-right"
              />

              {/* Image gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-600/30 via-transparent to-transparent lg:from-brand-600/40"
              />

              {/* Floating image glow */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-8 right-8 h-20 w-20 rounded-full bg-white/20 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}