"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const benefits = [
  "No credit card required",
  "14-day free trial on all plans",
  "Cancel anytime, no questions asked",
  "Free migration assistance",
];

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container section-padding relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
              Get Started Today
            </div>
          </FadeInView>

          {/* Headline */}
          <FadeInView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Ready to{" "}
              <span className="text-white/80">transform</span> your
              workflow?
            </h2>
          </FadeInView>

          {/* Subtitle */}
          <FadeInView delay={0.2}>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of organizations already using ThynkSuccess to
              streamline their operations and achieve more.
            </p>
          </FadeInView>

          {/* Benefits list */}
          <StaggerContainer
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            staggerDelay={0.06}
          >
            {benefits.map((benefit) => (
              <StaggerItem key={benefit}>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle size={16} className="text-white/60 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Buttons */}
          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand-700 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
