"use client";

import { motion } from "framer-motion";
import { SlideInView } from "./AnimatedSection";

const text =
  "Unlock School Admission Marketing Services, EdTech Partnerships, and University Enrolment Success — connect with ";

const highlight = "Thynk Success";

const ending =
  " and lead the Digital Revolution in Education.";

export default function StatementSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-24"
    >
      <div className="section-container">
        <SlideInView direction="up" delay={0.1}>
          <div className="mx-auto max-w-[940px] text-center">
            <motion.h2
              className="font-inter text-[clamp(20px,2.4vw,30px)] font-medium leading-[1.4] text-ink-950"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
            >
              {/* Main text */}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                {text}
              </motion.span>

              {/* Highlight */}
              <motion.span
                className="relative inline-block font-semibold text-purple-600"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {highlight}

                {/* Small underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-purple-600/70"
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                />
              </motion.span>

              {/* Ending text */}
              <motion.span
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 1.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {ending}
              </motion.span>

              {/* Typewriter cursor */}
              <motion.span
                aria-hidden
                className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-purple-600"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: [0, 1, 0, 1, 0],
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1.2,
                  times: [0, 0.2, 0.4, 0.6, 1],
                }}
              />
            </motion.h2>
          </div>
        </SlideInView>
      </div>
    </section>
  );
} 