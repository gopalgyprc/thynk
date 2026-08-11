"use client";

import { motion } from "framer-motion";
import { FadeInView } from "./AnimatedSection";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Gurgaon",
  "Noida",
  "Jaipur",
  "Chandigarh",
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function CitiesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 90%)",
        }}
      />

      {/* Purple ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-brand-100/50 blur-[110px]"
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-purple-100/50 blur-[110px]"
        animate={{
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
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

          <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-3">
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
                  className="h-px bg-brand-500"
                />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-500">
                  Explore Locations
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Schools in{" "}
                <span className="text-brand-500">Your City</span>
              </h2>

              <p className="mt-3 max-w-xl font-inter text-sm leading-6 text-text-secondary sm:text-[15px]">
                Discover trusted schools and education opportunities across
                India's leading cities.
              </p>
            </motion.div>

            {/* =================================================
                VIEW ALL LINK
            ================================================= */}

            <motion.a
              href="#"
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              whileHover={{
                x: 4,
              }}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 font-inter text-xs font-bold text-brand-500 shadow-sm transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md"
            >
              <span>View all 350+ cities</span>

              <motion.span
                className="text-sm"
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
            </motion.a>
          </div>

          {/* =================================================
              CITY GRID
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            {cities.map((city, idx) => (
              <motion.div
                key={city}
                custom={idx}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-white
                  px-4
                  py-5
                  shadow-[0_4px_20px_-12px_rgba(15,23,42,0.15)]
                  transition-all
                  duration-300
                  hover:border-brand-200
                  hover:shadow-[0_18px_35px_-18px_rgba(80,90,200,0.35)]
                "
              >
                {/* Hover gradient */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50/80 via-transparent to-purple-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Top accent */}
                <motion.div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-full origin-left bg-brand-500"
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  {/* Location Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: -5,
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
                      rounded-xl
                      bg-brand-50
                      text-brand-500
                      transition-colors
                      duration-300
                      group-hover:bg-brand-500
                      group-hover:text-white
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                      />
                    </svg>
                  </motion.div>

                  {/* City */}
                  <div className="min-w-0">
                    <span className="block truncate font-display text-sm font-semibold text-text-primary transition-colors duration-200 group-hover:text-brand-600">
                      {city}
                    </span>

                    <span className="mt-0.5 block text-[10px] font-medium text-text-secondary/70">
                      Explore schools
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    className="ml-auto text-sm text-slate-300 transition-colors duration-200 group-hover:text-brand-500"
                    initial={{
                      opacity: 0,
                      x: -4,
                    }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                    }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* =================================================
              BOTTOM STATS / ACCENT
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
              delay: 0.5,
              duration: 0.5,
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="font-inter text-xs font-medium text-text-secondary">
                350+ Cities
              </span>
            </div>

            <div className="hidden h-3 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="font-inter text-xs font-medium text-text-secondary">
                Thousands of Schools
              </span>
            </div>

            <div className="hidden h-3 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="font-inter text-xs font-medium text-text-secondary">
                Growing Every Day
              </span>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}