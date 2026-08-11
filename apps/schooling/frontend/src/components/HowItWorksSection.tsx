"use client";

import Image from "next/image";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Search Schools",
    desc: "Smart filters — board, city, fee, medium, 20+ criteria.",
    icon: "/images/step-search.svg",
    iconW: 33,
    iconH: 22,
  },
  {
    num: "02",
    title: "Compare & Review",
    desc: "Side-by-side with verified parent reviews and ratings.",
    icon: "/images/step-compare.svg",
    iconW: 33,
    iconH: 27,
  },
  {
    num: "03",
    title: "Get Counselled",
    desc: "Free 30-min expert session to find your perfect fit.",
    icon: "/images/step-counsel.svg",
    iconW: 33,
    iconH: 30,
  },
  {
    num: "04",
    title: "Apply & Enrol",
    desc: "One-click enquiries, track all applications in one place.",
    icon: "/images/step-apply.svg",
    iconW: 30,
    iconH: 33,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <FadeInView className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">How Thynk Schooling Works</h2>
          <p className="section-sub mt-4">
            Four simple steps to find the right school — from search to
            enrolment, we guide every decision.
          </p>
        </FadeInView>

        <StaggerContainer className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-[48px] hidden h-0.5 bg-border lg:block"
          />

          {steps.map((step) => (
            <StaggerItem key={step.num} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 flex size-24 items-center justify-center rounded-3xl border border-border bg-brand-200 shadow-sm">
                <span className="relative overflow-hidden" style={{ width: step.iconW, height: step.iconH }}>
                  <Image
                    src={step.icon}
                    alt=""
                    width={step.iconW}
                    height={step.iconH}
                    className="size-full object-contain"
                  />
                </span>
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[260px] text-base leading-6 text-ink-700">
                {step.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
