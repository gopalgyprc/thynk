"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    name: "Neha Sharma",
    role: "Head of Marketing",
    quote:
      "Their digital branding campaigns gave us measurable results. Thynk Success is more than a service provider — they are a true growth partner.",
    avatar: "/images/avatar-neha.png",
    className: "bg-white/90 text-ink-950 border border-purple-100 lg:col-span-2",
    quoteClass: "text-[17px] leading-7",
    quoteMarkClass: "text-purple-900/[0.06]",
    showStars: true,
  },
  {
    name: "Dr. Emily Carter",
    role: "Dean of Admissions",
    quote:
      "Thynk Success designed a targeted student recruitment strategy for India. Their expertise brought us quality student enrollments and strengthened our brand presence in the region.",
    avatar: "/images/avatar-emily.png",
    className: "bg-white/90 text-ink-950 border border-purple-100",
    quoteClass: "text-[15px] leading-6",
    quoteMarkClass: "text-purple-900/[0.06]",
    showStars: false,
  },
  {
    name: "Arvind Menon",
    role: "Founder, EduBridge",
    quote:
      "From admissions to branding, Thynk Success provided end-to-end solutions. Their market expertise and institutional network gave us a competitive edge.",
    avatar: "/images/avatar-arvind.png",
    className: "bg-purple-600 text-white",
    quoteClass: "text-sm leading-6",
    quoteMarkClass: "text-white/15",
    showStars: false,
  },
];

function StarRow() {
  return (
    <div className="mt-1 flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-amber-400"
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.35, ease: "backOut" }}
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </motion.svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="presence" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Ambient blobs + faint grid, consistent with the rest of the site */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-purple-300/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-200/40 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,20,30,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,30,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 30% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-container relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <FadeInView>
              <div className="mb-10">
                <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
                  <span className="h-px w-6 bg-purple-600/40" />
                  What partners say
                </span>
                <h2 className="font-display text-[clamp(40px,6vw,64px)] font-normal leading-[1.1] text-purple-600">
                  Our Presence
                </h2>
                <motion.span
                  aria-hidden
                  className="mt-3 block h-[3px] rounded-full bg-purple-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: 72 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </FadeInView>

            <StaggerContainer className="grid gap-5 sm:grid-cols-2">
              {testimonials.map((t, i) => (
                <StaggerItem key={t.name} className={i === 0 ? "sm:col-span-2" : ""}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[30px] p-6 shadow-[0_20px_50px_-25px_rgba(107,33,168,0.2)] transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(107,33,168,0.35)] sm:p-7 ${t.className}`}
                  >
                    {/* Oversized decorative quote mark */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -right-1 -top-4 select-none font-display text-[120px] leading-none ${t.quoteMarkClass}`}
                    >
                      &rdquo;
                    </span>

                    <div className="relative mb-4 flex items-center gap-3">
                      <div className="relative size-14 shrink-0 rounded-full bg-gradient-to-br from-white/70 to-white/10 p-[2px]">
                        <div className="relative size-full overflow-hidden rounded-full">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="56px"
                          />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-head text-sm font-medium uppercase tracking-[2px] sm:text-[14px]">
                          {t.name}
                        </p>
                        <p className={`text-[11px] font-medium ${t.className.includes("purple-600") ? "text-white/60" : "text-ink-900/50"}`}>
                          {t.role}
                        </p>
                        {t.showStars && <StarRow />}
                      </div>
                    </div>

                    <p className={`relative font-semibold ${t.quoteClass}`}>
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Underline accent, expands on hover — same device used across the site */}
                    <motion.span
                      aria-hidden
                      className={`relative mt-5 block h-[2px] rounded-full ${
                        t.className.includes("purple-600") ? "bg-white/30" : "bg-purple-300"
                      }`}
                      initial={{ width: "20px" }}
                      whileHover={{ width: "40px" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeInView delay={0.15} className="hidden lg:block">
            <div className="relative mx-auto max-w-md pt-16">
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -left-4 top-0 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-600" />
                </span>
                <span className="text-xs font-semibold text-ink-950">Growing every day</span>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative col-span-2 aspect-[4/3] overflow-hidden rounded-[30px] bg-lavender-200 shadow-[0_20px_50px_-25px_rgba(107,33,168,0.3)]"
                >
                  <Image
                    src="/images/presence-1.png"
                    alt="Family learning together"
                    fill
                    className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative aspect-square overflow-hidden rounded-[30px] bg-lavender-200 shadow-[0_20px_50px_-25px_rgba(107,33,168,0.3)]"
                >
                  <Image
                    src="/images/presence-2.png"
                    alt="Graduation and global education"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative aspect-square overflow-hidden rounded-[30px] shadow-[0_20px_50px_-25px_rgba(107,33,168,0.3)]"
                >
                  <Image
                    src="/images/hero-overlay.png"
                    alt="Students celebrating success"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}