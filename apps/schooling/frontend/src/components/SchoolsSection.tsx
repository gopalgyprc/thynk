"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const schools = [
  {
    name: "Heritage International School",
    location: "Gurgaon, Sector 62",
    image: "/images/school-1.jpg",
    boards: ["CBSE", "IB", "Co-ed"],
    rating: 4.8,
    fees: "₹2.4L – ₹4.2L / yr",
  },
  {
    name: "The Valley School",
    location: "Bangalore, Kanakapura Road",
    image: "/images/school-2.jpg",
    boards: ["ICSE", "Day School"],
    rating: 4.7,
    fees: "₹1.8L – ₹3.1L / yr",
  },
  {
    name: "Step by Step School",
    location: "Noida, Sector 132",
    image: "/images/school-3.jpg",
    boards: ["CBSE", "Co-ed"],
    rating: 4.9,
    fees: "₹2.1L – ₹3.6L / yr",
  },
];

export default function SchoolsSection() {
  return (
    <section id="schools" className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <FadeInView className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-heading">
              Top Schools Across{" "}
              <em className="font-bold italic text-brand-600">India</em>
            </h2>
            <p className="section-sub mt-3 max-w-lg">
              Handpicked featured schools parents trust — verified listings with
              real ratings and fees.
            </p>
          </div>
          <a
            href="#schools"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            All Featured Schools
            <ArrowRight size={16} />
          </a>
        </FadeInView>

        <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schools.map((school) => (
            <StaggerItem key={school.name}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-shadow hover:shadow-lg">
                <div className="relative h-56 w-full bg-slate-200">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    {school.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-sm text-ink-700">
                    <span className="relative size-3.5 shrink-0 overflow-hidden">
                      <Image
                        src="/images/icon-pin-sm.svg"
                        alt=""
                        width={11}
                        height={13}
                        className="size-full object-contain"
                      />
                    </span>
                    {school.location}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {school.boards.map((b) => (
                      <span
                        key={b}
                        className="rounded-md bg-brand-200 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-700"
                      >
                        {b}
                      </span>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-ink-900">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      {school.rating}
                    </span>
                  </div>

                  <p className="text-sm text-ink-700">{school.fees}</p>

                  <a
                    href="#schools"
                    className="btn-outline mt-auto w-full py-2.5 text-center text-base"
                  >
                    View Details
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
