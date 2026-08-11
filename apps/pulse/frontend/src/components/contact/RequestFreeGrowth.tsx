import React from 'react'
import { Search, MapPin, Phone, Mail, ArrowDown } from "lucide-react";
function RequestFreeGrowth() {
  return (
    <header className="w-full">

      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
        <div className="absolute top-10 right-[-140px] rotate-[38deg] select-none pointer-events-none">
          <span className="block text-6xl md:text-7xl font-black italic text-white/90 [-webkit-text-stroke:1.5px_theme(colors.indigo.900)] leading-[0.95] whitespace-nowrap">
            FUTURE
          </span>
          <span className="block text-6xl md:text-7xl font-black italic text-white/90 [-webkit-text-stroke:1.5px_theme(colors.indigo.900)] leading-[0.95] whitespace-nowrap">
            FORWARD
          </span>
        </div>

        {/* Content */}
        <div className="relative px-10 py-24 md:py-28 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-950 leading-tight">
            Don't Hesitate To
            <br />
            <span className="text-indigo-700">Get in Touch.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            At Thynk Success, we are always eager to interact, collaborate,
            and discover new ways to drive impact. Whether you're a school
            aiming to increase student enrolment or an EdTech company
            expanding in India.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 transition-colors text-white font-semibold px-7 py-4 rounded-lg">
            Start a Conversation
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default RequestFreeGrowth