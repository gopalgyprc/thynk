"use client";

import Image from "next/image";
import { FadeInView, StaggerContainer, StaggerItem } from "../AnimatedSection";

const testimonials = [
  {
    quote:
      "Thynk Success redefined our entire admission strategy. Their team didn't just run ads; they understood our school's soul and communicated it perfectly to prospective parents.",
    name: "Rahul Mehta",
    role: "Director, Heritage Global School",
    initials: "RM",
    avatarBg: "bg-[#e6deff]",
    avatarText: "text-brand-600",
  },
  {
    quote:
      "The precision of their data-driven approach is unmatched. We saw a 40% increase in high-quality inquiries within the first quarter of engagement.",
    name: "Karan Patel",
    role: "CEO, EduStream Networks",
    initials: "KP",
    avatarBg: "bg-[#ebdcff]",
    avatarText: "text-[#6c4da4]",
  },
  {
    quote:
      "Strategic, visionary, and incredibly thorough. Thynk Success is more than an agency; they are an extension of our internal team.",
    name: "Sophia Williams",
    role: "Head of Growth, Apex Academy",
    initials: "SW",
    avatarBg: "bg-[#e3e1ee]",
    avatarText: "text-[#53535e]",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="results" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <FadeInView>
          <h2 className="mb-16 text-center font-display text-[clamp(28px,3.5vw,36px)] font-bold tracking-[-0.01em] text-ink-900">
            Stories of Institutional Transformation
          </h2>
        </FadeInView>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-[rgba(201,195,217,0.3)] bg-white p-10 shadow-[0_4px_10px_rgba(75,44,130,0.05)]">
                <div className="space-y-6 pb-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src="/images/about/icon-star.svg"
                        alt=""
                        width={20}
                        height={19}
                        className="size-5"
                      />
                    ))}
                  </div>
                  <p className="text-base italic leading-[26px] text-ink-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-[rgba(201,195,217,0.3)] pt-6">
                  <div
                    className={`flex size-12 items-center justify-center rounded-full text-base font-bold ${t.avatarBg} ${t.avatarText}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-ink-950">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
