"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "./AnimatedSection";

const boards = [
  {
    name: "CBSE",
    fullName: "Central Board of Secondary Education",
    desc: "National level focus with standardized curriculum across India.",
    idealFor: "Families who may relocate across India or focus on JEE/NEET.",
    bullets: ["NCERT Based Focus", "Easy School Transfers", "Science/Math Priority"],
    highlighted: false,
    badge: null,
  },
  {
    name: "ICSE / CISCE",
    fullName: "Council for Indian School Cert. Exams",
    desc: "Comprehensive English curriculum with versatile elective options.",
    idealFor: "Holistic development and strong linguistic foundation.",
    bullets: ["Strong Language Skills", "Holistic Assessment", "Diverse Subject Range"],
    highlighted: true, // Outlined blue
    badge: "MOST POPULAR",
  },
  {
    name: "IB / IGCSE",
    fullName: "International Baccalaureate",
    desc: "Global curriculum focusing on inquiry-based learning and critical thinking.",
    idealFor: "Students planning to study abroad or global exposure.",
    bullets: ["Global Recognition", "Inquiry-based Pedagogy", "Creative Projects"],
    highlighted: false,
    badge: null,
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="comparison">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <FadeInView className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            CBSE vs ICSE vs <span className="text-brand-500 font-cursive text-4xl sm:text-5xl font-normal">IB</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed mt-4">
            Understanding the differences between Indian boards can be daunting. Here&apos;s our comprehensive breakdown.
          </p>
        </FadeInView>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-8">
          {boards.map((board, idx) => (
            <motion.div
              key={board.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 ${
                board.highlighted
                  ? "border-2 border-brand-500 ring-4 ring-brand-500/5 lg:-translate-y-2 z-10"
                  : "border border-slate-100"
              }`}
            >
              {/* Optional Most Popular Badge */}
              {board.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-[9px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                  {board.badge}
                </span>
              )}

              {/* Title Section */}
              <div className="text-center border-b border-slate-100 pb-6 mb-6">
                <span className="text-2xl font-black tracking-tight text-brand-500 block">
                  {board.name}
                </span>
                <span className="text-sm font-bold text-text-primary block mt-4">
                  {board.fullName}
                </span>
                <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                  {board.desc}
                </p>
              </div>

              {/* Ideal For Section */}
              <div className="mb-6 flex-grow">
                <span className="text-[10px] font-black text-brand-500 tracking-wider uppercase block mb-2">
                  IDEAL FOR
                </span>
                <p className="text-xs text-text-primary font-medium leading-relaxed">
                  {board.idealFor}
                </p>
              </div>

              {/* Bullets List */}
              <ul className="space-y-3.5 border-t border-slate-100 pt-6 mt-auto">
                {board.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    {/* Circle Check Icon (using checkmark circle Icon (29).png) */}
                    <Image
                      src="/images-icon/Icon (29).png"
                      alt="Check"
                      width={16}
                      height={16}
                      className="object-contain mt-0.5"
                    />
                    <span className="leading-relaxed font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Read Full Guide link */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-500 hover:text-brand-600 transition-colors"
          >
            <span>Read Full Comparison Guide</span>
            <Image src="/images-icon/Icon (28).png" alt="External link" width={16} height={16} className="object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
}
