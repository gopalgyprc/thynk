"use client";

import Image from "next/image";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const boards = [
  {
    badge: "CBSE",
    title: "Central Board of Secondary Education",
    desc: "National Level focus with standardized curriculum across India.",
    idealFor:
      "Families who may relocate across India or focus on JEE/NEET.",
    points: [
      "NCERT Based Focus",
      "Easy School Transfers",
      "Science/Math Priority",
    ],
    featured: false,
  },
  {
    badge: "ICSE",
    title: "Council for Indian School Cert. Exams",
    desc: "Comprehensive English curriculum with versatile elective options.",
    idealFor: "Holistic development and strong linguistic foundation.",
    points: [
      "Strong English Base",
      "Broad Electives",
      "Project-Based Learning",
    ],
    featured: true,
  },
  {
    badge: "IB",
    title: "International Baccalaureate",
    desc: "Global curriculum focusing on inquiry-based learning and critical thinking.",
    idealFor: "Students planning to study abroad or global exposure.",
    points: [
      "Global Recognition",
      "Inquiry-Based Approach",
      "Critical Thinking",
    ],
    featured: false,
  },
];

export default function BoardsSection() {
  return (
    <section id="boards" className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <FadeInView className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">CBSE vs ICSE vs IB</h2>
          <p className="section-sub mt-4">
            Not sure which board fits your child? Compare curricula, strengths,
            and ideal student profiles at a glance.
          </p>
        </FadeInView>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {boards.map((board) => (
            <StaggerItem key={board.badge}>
              <article
                className={`relative flex h-full flex-col rounded-[32px] border border-border bg-white p-8 ${
                  board.featured
                    ? "shadow-[0_20px_40px_-12px_rgba(70,72,212,0.18)] ring-1 ring-brand-600/20"
                    : ""
                }`}
              >
                {board.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-6 flex w-full items-center justify-center rounded-full bg-brand-200 px-4 py-1.5">
                  <span className="text-base font-semibold text-brand-600">
                    {board.badge}
                  </span>
                </div>

                <h3 className="font-display text-base font-semibold leading-6 text-ink-900">
                  {board.title}
                </h3>
                <p className="mt-3 text-sm leading-5 text-ink-700">{board.desc}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    Ideal For
                  </p>
                  <p className="mt-2 text-sm leading-5 text-ink-900">
                    {board.idealFor}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {board.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-ink-900"
                    >
                      <span className="relative size-3 shrink-0 overflow-hidden">
                        <Image
                          src="/images/icon-check-brand.svg"
                          alt=""
                          width={12}
                          height={12}
                          className="size-full object-contain"
                        />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
