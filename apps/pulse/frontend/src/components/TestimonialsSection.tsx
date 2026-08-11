"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Pulse transformed our sales operations completely. We went from spreadsheets and chaos to a streamlined pipeline that our entire team loves using. Revenue increased 40% in the first quarter.",
    author: "Alexandra Rivera",
    role: "VP of Sales, Nexus Technologies",
    rating: 5,
    avatar: "AR",
    color: "bg-pulse-500",
  },
  {
    quote:
      "The inventory management module alone saved us thousands in carrying costs. Real-time tracking and automated reordering have been game-changers for our supply chain.",
    author: "Marcus Thompson",
    role: "COO, GreenLeaf Distributors",
    rating: 5,
    avatar: "MT",
    color: "bg-accent-500",
  },
  {
    quote:
      "We evaluated dozens of CRM platforms before choosing Pulse. The analytics and reporting capabilities are unmatched — we can finally make data-driven decisions with confidence.",
    author: "Priya Sharma",
    role: "CEO, InnovateLab Inc.",
    rating: 5,
    avatar: "PS",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Implementing Pulse was the best investment we made this year. The onboarding was seamless, the support team is exceptional, and our team's productivity has doubled.",
    author: "David Okafor",
    role: "Founder, GrowthBridge Ltd.",
    rating: 5,
    avatar: "DO",
    color: "bg-violet-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-spacing bg-surface relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pulse-200 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-pulse-50)_0%,_transparent_70%)] opacity-60" />

      <div className="section-container section-padding relative">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pulse-50 border border-pulse-200 text-pulse-700 text-sm font-medium mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Trusted by{" "}
              <span className="gradient-text">business leaders</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              See how businesses across industries use Pulse to drive growth,
              streamline operations, and achieve remarkable results.
            </p>
          </div>
        </FadeInView>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="group relative bg-white rounded-2xl border border-pulse-100 p-6 sm:p-8 hover-lift shadow-sm">
                <Quote size={32} className="text-pulse-200 absolute top-6 right-6" />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                    >
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-semibold`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{testimonial.author}</div>
                    <div className="text-xs text-text-tertiary">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
