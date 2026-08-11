"use client";

import {
  GraduationCap,
  Monitor,
  Landmark,
  Waypoints,
  Rocket,
  Code2,
  FileText,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const edtechNetwork = [
  { label: "Ignited Mind Lab", icon: Waypoints },
  { label: "Leap Learner", icon: Rocket },
  { label: "iCode Global Hackathon", icon: Code2 },
];

export function StrategicPartnerships() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAFF] py-20 sm:py-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(147,51,234,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(147,51,234,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-purple-300/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-200/25 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Strategic Partnerships
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-14 rounded-full bg-purple-600" />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-2xl border border-purple-100/70 bg-white/80 p-7 shadow-[0_15px_40px_-20px_rgba(147,51,234,0.25)] backdrop-blur-sm"
          >
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
              <GraduationCap className="h-5 w-5 text-purple-600" strokeWidth={2} />
            </span>
            <h3 className="text-lg font-bold text-slate-900">School Partnership</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Empowering Indian and International schools with cutting-edge
              admission strategies and brand elevation.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-purple-100/70">
              <img
                src="/partnerships/Margin.png" alt="School classroom"
                className="h-36 w-full object-cover"
              />
            </div>

            <div className="mt-6 flex-1 space-y-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-purple-700">
                  <span className="h-3.5 w-1 rounded-full bg-purple-600" />
                  Indian Schools
                </p>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-8px_rgba(147,51,234,0.6)] transition-colors hover:bg-purple-700">
                  <FileText className="h-3.5 w-3.5" />
                  Explore Now
                </button>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-purple-700">
                  <span className="h-3.5 w-1 rounded-full bg-purple-600" />
                  International Schools
                </p>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-purple-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-8px_rgba(88,28,135,0.5)] transition-colors hover:bg-purple-950">
                  <Globe className="h-3.5 w-3.5" />
                  Explore Now
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-2xl border border-purple-100/70 bg-white/80 p-7 shadow-[0_15px_40px_-20px_rgba(147,51,234,0.25)] backdrop-blur-sm"
          >
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
              <Monitor className="h-5 w-5 text-purple-600" strokeWidth={2} />
            </span>
            <h3 className="text-lg font-bold text-slate-900">Partnership with EdTech</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Scaling innovators through targeted market expansion and
              performance-driven digital marketing campaigns.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100/80 px-4 py-2 text-xs font-medium text-purple-700">
                Learning Management
              </span>
              <span className="rounded-full bg-purple-100/80 px-4 py-2 text-xs font-medium text-purple-700">
                SaaS Solutions
              </span>
            </div>

            <p className="mb-3 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-purple-700">
              <span className="h-3.5 w-1 rounded-full bg-purple-600" />
              Our EdTech Network
            </p>

            <div className="space-y-2.5">
              {edtechNetwork.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-lg bg-purple-50/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-purple-100/70"
                >
                  <Icon className="h-4 w-4 text-purple-600" strokeWidth={2} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-2xl border border-purple-100/70 bg-white/80 p-7 shadow-[0_15px_40px_-20px_rgba(147,51,234,0.25)] backdrop-blur-sm"
          >
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100">
              <Landmark className="h-5 w-5 text-purple-600" strokeWidth={2} />
            </span>
            <h3 className="text-lg font-bold text-slate-900">University Partnership</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Connecting higher education institutions with high-quality
              global student pipelines and recruitment networks.
            </p>

            <div className="mt-auto overflow-hidden rounded-xl  border-purple-100/70 pt-8">
              <img
                src="/partnerships/Container.png"
                alt="University meeting"
                className=" w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default StrategicPartnerships