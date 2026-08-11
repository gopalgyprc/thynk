"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

const contactCards = [
  {
    title: "Address",
    lines: ["F 300, Sector 63, Noida (U.P.)-", "201301 India"],
    icon: MapPin,
    highlight: false,
  },
  {
    title: "Phone",
    lines: ["+919650703767", "01169139891"],
    icon: Phone,
    highlight: true,
  },
  {
    title: "Email",
    lines: ["success@thynksuccess.com"],
    icon: Mail,
    highlight: false,
  },
];

export default function ContactPageContent() {
  return (
    <section className="bg-[#f4f3ff] py-24 sm:py-28 lg:py-32">
      <div className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">


        </div>

        <div className=" grid gap-5 lg:grid-cols-3">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-[28px] border p-6 shadow-sm transition ${card.highlight
                    ? "bg-pulse-700 text-white border-transparent shadow-pulse-700/20"
                    : "bg-white border-slate-200"
                  }`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.highlight ? "bg-white/15 text-white" : "bg-pulse-50 text-pulse-700"}`}>
                  <Icon size={20} />
                </div>
                <p className={`mt-6 text-sm font-semibold ${card.highlight ? "text-white/80" : "text-pulse-700"}`}>
                  {card.title}
                </p>
                <div className={card.highlight ? "mt-3 space-y-2 text-sm leading-6 text-white" : "mt-3 space-y-2 text-sm leading-6 text-slate-700"}>
                  {card.lines.map((line) => (
                    <p key={line} className={card.highlight ? "text-white text-base font-medium" : "text-slate-700 text-base font-medium"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pulse-200 bg-white px-5 py-2.5 text-sm font-semibold text-pulse-700 shadow-sm">
            <ChevronRight size={18} />
            Connect With Our Experts
          </span>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.12)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Request Free Growth Discussion
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Fill out the form below and our strategic team will get back to you within 24 hours.
            </p>

            <form className="mt-10 grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">Name *</span>
                  <input type="text" placeholder="John Doe" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pulse-500 focus:ring-2 focus:ring-pulse-500/10" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">School / Organisation Name *</span>
                  <input type="text" placeholder="Thynk Academy" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pulse-500 focus:ring-2 focus:ring-pulse-500/10" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">City *</span>
                  <input type="text" placeholder="Noida" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pulse-500 focus:ring-2 focus:ring-pulse-500/10" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  <span className="font-medium">Contact Number *</span>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pulse-500 focus:ring-2 focus:ring-pulse-500/10" />
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-medium">Contact Email *</span>
                <input type="email" placeholder="john@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pulse-500 focus:ring-2 focus:ring-pulse-500/10" />
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span className="font-medium">Comment or Message *</span>
                <textarea rows={6} placeholder="How can we help you grow?" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pulse-500 focus:ring-2 focus:ring-pulse-500/10" />
              </label>

              <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-pulse-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pulse-700">
                Submit Your Interest
                <ChevronRight size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_70px_-40px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/3]">
                <Image src="/contact/image 9.png" alt="Students walking on campus" fill className="object-cover" sizes="(max-width: 768px) 100vw, 420px" />
              </div>
            </div>

            <div className="rounded-[32px] bg-pulse-700 p-8 text-white shadow-[0_30px_70px_-40px_rgba(99,102,241,0.35)]">
              <h3 className="text-2xl font-semibold">Talk to Us</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Whether you&apos;re looking for expert support from a Student Recruitment Agency or seeking a trusted School Admissions Marketing Consultant, our team is here to guide you every step of the way.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-slate-100">
                {[
                  "Student Enrolment Growth",
                  "EdTech Market Expansion",
                  "Digital Recruitment Campaigns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white">
                      <CheckCircle2 size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
