"use client";

import Image from "next/image";
import { FadeInView } from "../AnimatedSection";

export default function MissionSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeInView>
          <div className="max-w-xl">
            <p className="text-xl leading-7 text-ink-950">
              At Thynk Success, our mission is to strengthen schools, EdTech
              innovators, and foreign institutions by improving visibility,
              boosting engagement, and driving measurable results. With our
              expert digital marketing services, we help schools increase
              admissions and support EdTech companies and universities in
              generating higher business opportunities and student enrollments
              through our strong high-school network.
            </p>
            <p className="mt-8 text-xl font-semibold leading-[26px] text-ink-950">
              Our mission is to empower educational institutions to thrive in
              the digital landscape, connecting them with future generations of
              learners.
            </p>
            <a href="#features" className="btn-primary mt-10 inline-flex">
              Explore Our services
            </a>
          </div>
        </FadeInView>

        <FadeInView delay={0.12} className="relative">
          <div className="relative aspect-[532/380] overflow-hidden rounded-[5px] shadow-[0_4px_20px_rgba(75,44,130,0.08)]">
            <Image
              src="/images/about/mission-img.png"
              alt="Students collaborating in a modern learning environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 532px"
            />
          </div>
          <div className="absolute -bottom-6 right-4 max-w-[281px] rounded-2xl bg-brand-600 p-8 text-white shadow-lg sm:right-0">
            <h5 className="font-display text-lg font-semibold">Our Vision</h5>
            <p className="mt-3 text-sm leading-5 text-white/90">
              To be the catalyst for institutional excellence globally, turning
              every school&apos;s potential into a success story.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
