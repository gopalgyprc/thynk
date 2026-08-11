"use client";

import { motion } from "framer-motion";
import { School, Users, Trophy, Globe } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const stats = [
  {
    icon: School,
    value: "500+",
    label: "Schools Trust Us",
    description: "Worldwide institutions",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Students",
    description: "And growing daily",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Parent Satisfaction",
    description: "Positive feedback rate",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries Served",
    description: "Global reach",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-container section-padding relative">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
              Transforming education worldwide
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Schools and educational institutions around the globe rely on Thynk
              Schooling to deliver exceptional learning experiences.
            </p>
          </div>
        </FadeInView>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" staggerDelay={0.12}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={stat.label}>
                <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                  <div className="text-xs text-white/50">{stat.description}</div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
