"use client";

import { StaggerContainer, StaggerItem } from "../AnimatedSection";

const stats = [
  { value: "1000+", label: "Indian Schools Empowered" },
  { value: "150+", label: "International Partners" },
  { value: "15", label: "Countries Represented" },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-600 py-20 sm:py-24">
      <div className="section-container">
        <StaggerContainer className="grid gap-10 sm:grid-cols-3 sm:gap-0">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <div
                className={`flex flex-col items-center gap-2 px-4 text-center ${
                  i === 1
                    ? "border-white/10 sm:border-x"
                    : ""
                }`}
              >
                <p className="font-display text-5xl font-extrabold tracking-[-0.02em] text-white">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold uppercase tracking-[1.4px] text-[#f1ebff]">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
