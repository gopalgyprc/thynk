"use client";

import {
  Shield,
  Zap,
  Globe,
  Lock,
  Cloud,
  Headphones,
  Layers,
  RefreshCw,
} from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and advanced threat protection to keep your data safe at all times.",
    gradient: "from-brand-500 to-brand-600",
    bgGlow: "bg-brand-500/5",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with sub-second response times and 99.9% uptime guarantee across all services.",
    gradient: "from-accent-500 to-accent-600",
    bgGlow: "bg-accent-500/5",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deployed across multiple regions worldwide with automatic failover and load balancing for seamless growth.",
    gradient: "from-emerald-500 to-emerald-600",
    bgGlow: "bg-emerald-500/5",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "GDPR compliant with data residency controls, role-based access, and detailed audit logging capabilities.",
    gradient: "from-violet-500 to-violet-600",
    bgGlow: "bg-violet-500/5",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "Built on modern cloud infrastructure with auto-scaling, containerization, and zero-downtime deployments.",
    gradient: "from-sky-500 to-sky-600",
    bgGlow: "bg-sky-500/5",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description:
      "Independent microservices architecture that allows each product to scale and evolve without dependencies.",
    gradient: "from-rose-500 to-rose-600",
    bgGlow: "bg-rose-500/5",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description:
      "Instant data synchronization across all platforms with real-time updates and event-driven architecture.",
    gradient: "from-amber-500 to-amber-600",
    bgGlow: "bg-amber-500/5",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support team available around the clock with priority response times for enterprise customers.",
    gradient: "from-cyan-500 to-cyan-600",
    bgGlow: "bg-cyan-500/5",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-spacing bg-surface-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-100)_0%,_transparent_70%)] opacity-40" />
      </div>

      <div className="section-container section-padding relative">
        {/* Section header */}
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium mb-6">
              Platform Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Built for{" "}
              <span className="gradient-text">performance</span> and scale
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Every feature is engineered to deliver exceptional reliability,
              security, and speed — so you can focus on what matters most.
            </p>
          </div>
        </FadeInView>

        {/* Features grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative bg-white rounded-2xl border border-border p-6 hover-lift hover:border-transparent shadow-sm h-full">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.bgGlow} mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={22} className={`bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover gradient border effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
