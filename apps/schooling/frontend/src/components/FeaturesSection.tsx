"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "./AnimatedSection";

const features = [
  {
    title: "Smart Search",
    desc: "Filter by board, city, fee, medium and 20+ parameters in seconds.",
    icon: "/images-icon/Icon (43).png",
  },
  {
    title: "Side-by-side Compare",
    desc: "Compare up to 4 schools on fees, ratings, infrastructure and more.",
    icon: "/images-icon/Icon (42).png",
  },
  {
    title: "AI Recommendations",
    desc: "Personalized suggestions trained on thousands of parent journeys.",
    icon: "/images-icon/Icon (41).png",
  },
  {
    title: "One-Click Apply",
    desc: "Submit enquiries to multiple schools simultaneously with ease.",
    icon: "/images-icon/Icon (40).png",
  },
  {
    title: "Expert Counselling",
    desc: "Free 1-on-1 sessions with certified admission counsellors.",
    icon: "/images-icon/Icon (39).png",
  },
  {
    title: "Verified Listings",
    desc: "Every school verified with real reviews and authentic data.",
    icon: "/images-icon/Icon (38).png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Title */}
        <FadeInView className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight">
            Everything You Need,<br />
            <span className="text-brand-500 font-cursive text-4xl sm:text-5xl font-normal">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed mt-4">
            Built on feedback from real Indian parents. Every feature serves one purpose — helping you find the right school faster, with total confidence.
          </p>
        </FadeInView>

        {/* Feature Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 6 Features (2x3 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-300 flex flex-col gap-4 text-left"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-brand-50 rounded-xl">
                  <Image src={feature.icon} alt={feature.title} width={20} height={20} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-1">{feature.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: 2x2 Grid with Images and Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
            {/* Top Left: Child Tablet Image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-sm">
              <Image
                src="/images-icon/child_tablet.png"
                alt="Child learning"
                width={400}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Top Right: Parents Stat Box */}
            <div className="bg-brand-500 text-white rounded-3xl p-6 flex flex-col justify-end aspect-[4/5] shadow-sm hover:bg-brand-600 transition-all duration-300">
              <h3 className="text-2xl font-black mb-1">1 Lakh+</h3>
              <p className="text-xs text-brand-100 font-semibold tracking-wide">Happy Parents</p>
            </div>

            {/* Bottom Left: Success Rate Stat Box */}
            <div className="bg-brand-500 text-white rounded-3xl p-6 flex flex-col justify-end aspect-[4/5] shadow-sm hover:bg-brand-600 transition-all duration-300">
              <h3 className="text-2xl font-black mb-1">98%</h3>
              <p className="text-xs text-brand-100 font-semibold tracking-wide">Success Rate</p>
            </div>

            {/* Bottom Right: Notebook Image */}
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-sm">
              <Image
                src="/images-icon/notebook_desk.png"
                alt="Notebook"
                width={400}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

