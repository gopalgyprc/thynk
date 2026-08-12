"use client";

import { motion, Variants } from "framer-motion";
import { FadeInView } from "./AnimatedSection";

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-purple-600 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Main radial glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.08] blur-[100px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-purple-300/[0.12] blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="section-container relative">
        <FadeInView>
          <div className="mx-auto max-w-[1080px]">

            {/* =================================================
                HEADER
            ================================================= */}

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mb-10 text-center sm:mb-12"
            >
              {/* Eyebrow */}
              <div className="mb-5 flex items-center justify-center gap-3">
                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 32,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="h-px bg-white/40"
                />

                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                  Our Mission
                </span>

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 32,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  className="h-px bg-white/40"
                />
              </div>

              {/* Main heading */}
              <h2 className="font-serif  italic text-[clamp(32px,5vw,54px)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
                Transforming Education.
                <br />

                <span className="text-white/55">
                  Accelerating Growth.
                </span>
              </h2>
            </motion.div>

            {/* =================================================
                CONTENT CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.07]
                p-7
                backdrop-blur-sm
                sm:rounded-[32px]
                sm:p-10
                lg:p-12
              "
            >
              {/* Card glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-white/[0.05] blur-3xl"
              />

              {/* Decorative vertical line */}
              <motion.div
                aria-hidden="true"
                className="absolute left-0 top-8 h-20 w-[2px] rounded-full bg-white/50 sm:top-10 lg:top-12"
                initial={{
                  scaleY: 0,
                  transformOrigin: "top",
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
              />

              <div className="relative space-y-7 sm:space-y-8">

                {/* =================================================
                    PARAGRAPH 1
                ================================================= */}

                <motion.p
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  className="
                    max-w-[940px]
                    font-inter
                    text-[15px]
                    leading-[1.85]
                    tracking-[0.005em]
                    text-white/85
                    sm:text-[16px]
                    sm:leading-[1.9]
                  "
                >
                  Thynk Success is committed to transforming how educational
                  institutions scale in an increasingly digital world. As
                  specialists in B2B EdTech growth, Digital Marketing for
                  Schools, and university admission campaigns, we empower
                  schools, EdTech companies, and connects published device
                  subscribe universities with strategies that drive long-term
                  visibility, credibility, and measurable results. Our
                  expertise in International Student Recruitment ensures
                  universities attract quality learners from diverse markets,
                  while our digital-first approach helps schools Schooling
                  value, Jordan desktop me over there, mobileklicks drop page
                  no psin success balects no slash pl mals phoga schooling
                  school class, pulse click pulse pulse, puls information ps,
                  draw photo request, log in log in plick for them since dot
                  com, us perdict care for a demo corejombra, content capital,
                  plant hours then login for click klein product finding
                  contact, John Photory noday, may I think sectonos skull to
                  June e Ze and Please complete management, Iscole rework to
                </motion.p>

                {/* =================================================
                    DIVIDER
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scaleX: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="h-px w-full origin-left bg-white/10"
                />

                {/* =================================================
                    PARAGRAPH 2
                ================================================= */}

                <motion.p
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: 0.15,
                  }}
                  className="
                    max-w-[940px]
                    font-inter
                    text-[15px]
                    leading-[1.85]
                    tracking-[0.005em]
                    text-white/85
                    sm:text-[16px]
                    sm:leading-[1.9]
                  "
                >
                  Every campaign we create is rooted in strong SEO for
                  education, impactful storytelling, and a deep understanding
                  of modern communication trends. Thynk Success serves as a
                  trusted partner in building meaningful connections and
                  achieving sustainable growth across the entire education
                  ecosystem.
                </motion.p>

                {/* =================================================
                    CATALYST STATEMENT
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-white/10
                    pt-7
                    sm:flex-row
                    sm:items-center
                    sm:gap-6
                    sm:pt-8
                  "
                >
                  {/* Number */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/10
                      font-display
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    01
                  </motion.div>

                  {/* Text */}
                  <p className="font-display text-[18px] font-medium leading-7 text-white sm:text-[19px]">
                    Our role is to act as a{" "}
                    <span className="font-semibold text-white">
                      catalyst
                    </span>{" "}
                    for institutions and companies working in this space.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                BOTTOM ACCENT
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
                delay: 0.5,
                duration: 0.5,
              }}
              className="mt-7 flex items-center justify-center gap-2"
            >
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="h-1 w-8 rounded-full bg-white/20" />
              <span className="h-1 w-1 rounded-full bg-white/30" />
            </motion.div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}