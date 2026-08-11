"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Award, Megaphone, ArrowRight } from "lucide-react";

export default function WritersSpotlightSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-pulse-50/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Spotlight Writer Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative bg-[#E6DEFF] border border-purple-200/40 rounded-3xl p-6 sm:p-8 max-w-md md:max-w-xl shadow-sm hover:shadow-md transition-shadow duration-300 w-full flex flex-col justify-between overflow-hidden">
              
              {/* Badge: Writer of the Month */}
              <div className="absolute top-0 right-0 bg-[#5A36D9] text-white text-[9px] font-bold px-4 py-2 rounded-bl-2xl rounded-tr-3xl tracking-widest uppercase font-mono">
                Writer of the Month
              </div>

              <div>
                {/* Header: Images & Name */}
                <div className="flex items-start gap-4 mb-4 pt-4">
                  {/* Rounded square avatar crop showing the side-by-side images */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-sm border border-purple-200/40 bg-white flex-shrink-0">
                    <Image
                      src="/assets/avatar_group.png"
                      alt="Ananya Krishnan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="flex-grow pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-1.5 mb-1 text-left">
                      Ananya Krishnan
                      <span className="inline-flex items-center justify-center bg-[#5A36D9] text-white rounded-full p-0.5 w-4.5 h-4.5">
                        <Check size={9} strokeWidth={4} />
                      </span>
                    </h3>
                    
                    <p className="text-[10px] sm:text-xs text-[#5A36D9] font-extrabold tracking-wider uppercase text-left">
                      EDTECH PRODUCT LEAD - MUMBAI
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm font-medium leading-relaxed my-4 text-left">
                  &quot;Building products for the next 200 million learners. Writing about EdTech, product strategy, and what failure looks like from the inside.&quot;
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-purple-200/50 my-4" />

              {/* Metrics */}
              <div>
                <div className="grid grid-cols-3 gap-2 text-center py-2 mb-4">
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#5A36D9]">48</div>
                    <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">ARTICLES</div>
                  </div>
                  <div className="border-x border-purple-200/50">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#5A36D9]">12K</div>
                    <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">FOLLOWERS</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#5A36D9]">340K</div>
                    <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">TOTAL READS</div>
                  </div>
                </div>

                {/* Bottom Bar: Trend info & Follow button */}
                <div className="flex items-center justify-between p-3.5 bg-white/50 backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-1.5 text-[#5A36D9] text-[10px] sm:text-xs font-bold font-mono">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                    <span>+1.4M NEW FOLLOWERS THIS MONTH</span>
                  </div>

                  <button className="px-5 py-2 text-xs font-bold text-white bg-[#5A36D9] hover:bg-[#4828B8] rounded-xl transition-colors shadow-sm cursor-pointer shrink-0">
                    Follow
                  </button>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Features & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <span className="font-mono text-xs font-bold tracking-wider text-pulse-600 uppercase mb-2 block">
              JOIN THE WRITER PROGRAM
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
              <span className="text-[#5A36D9]">Writers Get</span> <span style={{ fontFamily: "'Alex Brush', 'Dancing Script', 'Brush Script MT', cursive" }} className="font-normal italic">The Spotlight</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
              Every active writer gets a fully customized profile that showcases research, articles, and impact stats to their network and community.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-10">
              
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-pulse-50 border border-pulse-100 text-pulse-600">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                    Verified Writer Badge
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                    Get recognized as a verified professional voice in education.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-pulse-50 border border-pulse-100 text-pulse-600">
                  <Megaphone size={18} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                    Reach Millions Audience
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                    Your articles reach thousands of educators, EdTech companies, and school leaders.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#5A36D9] hover:bg-[#4828B8] rounded-xl shadow-lg shadow-pulse-600/10 transition-all duration-200"
              >
                Create Your Profile
                <ArrowRight size={16} className="text-white ml-1 shrink-0" />
              </motion.button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
