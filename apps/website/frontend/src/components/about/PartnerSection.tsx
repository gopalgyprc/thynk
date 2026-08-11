"use client";

import Image from "next/image";
import { FadeInView } from "../AnimatedSection";

const bullets = [
  "Personalized Institutional Roadmaps",
  "Dedicated Strategic Consultants",
  "Quarter-by-Quarter Optimization Plans",
];

export default function PartnerSection() {
  return (
    <section className="bg-brand-50 py-20 sm:py-28">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeInView>
          <div className="overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(75,44,130,0.05)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/about/partner-img.jpg"
                alt="Strategic partnership meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-display text-[clamp(28px,3.5vw,36px)] font-bold tracking-[-0.01em] text-ink-900">
            Your Strategic Growth Partner
          </h2>
          <p className="mt-6 text-lg leading-[1.6] text-ink-500">
            We don&apos;t just provide services; we build legacies. Our role as a
            growth partner means we are deeply invested in your long-term
            success, adapting our strategies as the educational market shifts.
          </p>
          <ul className="mt-8 space-y-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base text-ink-950">
                <Image
                  src="/images/about/icon-check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-accent mt-8 inline-flex">
            Start Your Partnership
            <Image
              src="/images/about/icon-arrow.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
            />
          </a>
        </FadeInView>
      </div>
    </section>
  );
}
