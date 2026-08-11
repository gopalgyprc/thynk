"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    quote: "Found the perfect CBSE school in just 2 days. The AI recommendations were uncannily accurate.",
    author: "Priya Sharma",
    role: "Delhi - Daughter, Class 6",
    avatar: "P",
    color: "bg-brand-500",
    rating: 5,
  },
  {
    quote: "The IB vs CBSE comparison was a game-changer. Free counselling answered every question.",
    author: "Anjali Nair",
    role: "Bangalore - Twins, Nursery",
    avatar: "A",
    color: "bg-slate-700",
    rating: 5,
  },
  {
    quote: "Applied to 3 schools and got admission in all 3. The common form saved hours of effort.",
    author: "Rahul Mehta",
    role: "Mumbai - Son, Class 1",
    avatar: "R",
    color: "bg-brand-500",
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="mb-4 flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-amber-400"
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.07, duration: 0.3, ease: "backOut" }}
        >
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </motion.svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-200/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#dde3ff] opacity-40 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-pulse-900) 1px, transparent 1px), linear-gradient(to bottom, var(--color-pulse-900) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 xl:px-24">
        <FadeInView className="mb-16 text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            <span className="h-px w-6 bg-brand-500/40" />
            Parent stories
            <span className="h-px w-6 bg-brand-500/40" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Trusted by{" "}
            <span className="font-cursive text-4xl font-normal text-brand-500 sm:text-5xl">1 Lakh+ Parents</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-secondary">
            Real stories from parents who found the right fit for their children through Thynk Schooling.
          </p>
        </FadeInView>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_25px_60px_-20px_rgba(79,70,229,0.25)]"
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-brand-500"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-400 blur-3xl"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileHover={{ opacity: 0.12, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute right-6 top-6">
                  <Image
                    src="/images-icon/Icon (24).png"
                    alt="Quote"
                    width={32}
                    height={32}
                    className="object-contain opacity-20 transition-opacity duration-200 group-hover:opacity-30"
                  />
                </div>

                <div className="relative">
                  <StarRow count={t.rating} />
                  <p className="mb-8 pr-4 text-sm font-semibold leading-relaxed text-text-primary">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="relative mt-auto flex items-center gap-3 border-t border-slate-100 pt-5">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-sm font-bold text-white shadow-sm ring-2 ring-white`}
                  >
                    {t.avatar}
                  </motion.div>
                  <div>
                    <div className="text-sm font-extrabold text-text-primary">{t.author}</div>
                    <div className="text-xs font-medium text-text-secondary">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}