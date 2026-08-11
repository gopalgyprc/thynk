"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInView } from "./AnimatedSection";

const schools = [
  {
    name: "Heritage International School",
    location: "Gurgaon, Sector 62",
    tags: ["CBSE", "IB", "Co-ed"],
    image: "/images-icon/school_heritage.png",
    featured: true,
    highlighted: true, // Has active blue outline border
  },
  {
    name: "The Valley School",
    location: "Bangalore, Kanakapura Road",
    tags: ["ICSE", "Boarding"],
    image: "/images-icon/school_valley.png",
    featured: true,
    highlighted: false,
  },
  {
    name: "Step by Step School",
    location: "Noida, Sector 132",
    tags: ["CBSE", "IGCSE"],
    image: "/images-icon/school_stepbystep.png",
    featured: true,
    highlighted: false,
  },
];

export default function TopSchoolsSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="schools">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <FadeInView>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Top Schools Across <span className="text-brand-500 font-cursive text-4xl sm:text-5xl font-normal">India</span>
            </h2>
            <p className="text-sm text-text-secondary mt-2">
              Explore the most sought-after schools curated by experts.
            </p>
          </FadeInView>
          
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
          >
            All Featured Schools
            <Image src="/images-icon/Icon (47).png" alt="Arrow" width={14} height={14} />
          </motion.a>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schools.map((school, idx) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full ${
                school.highlighted
                  ? "border-2 border-brand-500 ring-4 ring-brand-500/10"
                  : "border border-slate-100"
              }`}
            >
              {/* Image Banner */}
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover"
                />
                {school.featured && (
                  <span className="absolute top-4 left-4 bg-brand-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
                    Featured
                  </span>
                )}
              </div>

              {/* Details Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {school.name}
                </h3>
                
                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-4">
                  <Image src="/images-icon/Icon (51).png" alt="Location" width={14} height={14} className="object-contain" />
                  <span>{school.location}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {school.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-auto">
                  <button className="w-full py-2.5 rounded-xl border border-brand-500 text-brand-500 text-sm font-semibold hover:bg-brand-50 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/20 text-sm font-semibold transition-all duration-200"
          >
            <Image src="/images-icon/Icon.png" alt="Rocket" width={16} height={16} className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            <span>view all</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
