"use client";

import Image from "next/image";
import { FadeInView, StaggerContainer, StaggerItem } from "../AnimatedSection";

const features = [
  {
    icon: "/images/icon-edu.svg",
    title: "Education-Focused",
    description:
      "We speak the language of educators, admissions officers, and stakeholders fluently.",
  },
  {
    icon: "/images/icon-e2e.svg",
    title: "End-to-End Solutions",
    description:
      "From brand identity to digital enrollment funnels, we manage the entire spectrum.",
  },
  {
    icon: "/images/icon-data.svg",
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by analytics, optimizing for lead quality and retention.",
  },
  {
    icon: "/images/icon-creative.svg",
    title: "Creative Expertise",
    description:
      "Technical precision met with visionary storytelling that captures the student heart.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-brand-50 py-20 sm:py-28">
      <div className="section-container">
        <FadeInView>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-display text-[clamp(28px,3.5vw,36px)] font-bold tracking-[-0.01em] text-ink-900">
              Why Educational Institutions Trust Thynk
            </h2>
            <p className="mt-6 text-xl leading-6 text-[#6528f7]">
              Our methodology is rooted in a deep understanding of the academic
              cycle, ensuring that every campaign we run respects the core values
              of education while driving measurable enrollment results.
            </p>
          </div>
        </FadeInView>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="flex h-full flex-col gap-6 rounded-xl border border-brand-600/5 bg-brand-100 p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex size-12 items-center justify-center rounded-lg bg-white shadow-[0_4px_10px_rgba(75,44,130,0.05)]">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-6 w-auto"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold text-ink-950">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-5 text-ink-500">
                    {feature.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
