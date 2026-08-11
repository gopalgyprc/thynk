import React from "react";

export function YourStrategicPartner() {
  return (
    <section className="bg-white">
      {/* Quote banner */}
      <div className="bg-indigo-50 px-10 py-10">
        <p className="max-w-4xl mx-auto text-center text-xl md:text-2xl text-indigo-700 font-medium leading-relaxed">
          "We believe education is the foundation of transformation. We are
          committed to helping our partners unlock opportunities, achieve
          growth, and shape the future of learning."
        </p>
      </div>

      {/* Strategic partner card */}
      <div className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          {/* Text side */}
          <div className="p-10 md:p-14 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950">
              Your Strategic Partner
            </h2>

            <p className="mt-6 text-slate-600 text-[16px] font-normal leading-[1.7]">
              At Thynk Success, we go beyond providing services—we become
              your dedicated growth partner. Working closely with schools,
              EdTech entrepreneurs, and international institutions, we design
              strategic, results-driven solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="bg-slate-100 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-full">
                School Branding
              </span>
              <span className="bg-slate-100 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-full">
                EdTech Strategy
              </span>
              <span className="bg-slate-100 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-full">
                Global Admissions
              </span>
            </div>
          </div>

          {/* Image side — replace the URL below with your own */}
          <div className="min-h-[320px] md:min-h-full">
            <img
              src="contact/image 10.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourStrategicPartner