"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

const audience = [
  {
    icon: "/images/icon-school.svg",
    image: "/images/card-img-1.png",
    tag: "Institutions",
    accent: "#7C3AED", // violet
    title: "For Educational Institutes",
    description:
      "Thynk Success helps institutions increase school admissions and build a robust digital presence. Through our expertise in digital marketing for schools, SEO-powered website optimization, parent and student testimonials for trust, and targeted local search strategies, we ensure the right audiences find and choose your school.",
  },
  {
    icon: "/images/icon-edtech.png",
    image: "/images/card-img-2.png",
    tag: "Companies",
    accent: "#4F46E5", // indigo
    title: "For EdTech Companies",
    description:
      "Thynk Success helps EdTech companies turn product demos into pipeline. From performance-driven campaigns and landing pages built to convert, to content that speaks directly to schools and parents, we help you reach decision-makers faster and close with confidence.",
  },
  {
    icon: "/images/icon-university.svg",
    image: "/images/card-img-3.png",
    tag: "Universities",
    accent: "#A21CAF", // fuchsia
    title: "For International Universities",
    description:
      "Thynk Success delivers comprehensive university admission marketing solutions that significantly boost application rates and nurture prospective students. Our strong background in international student recruitment helps universities connect with high-quality students from India and beyond.",
  },
];

export default function AudienceSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Ambient light + faint grid, consistent with the rest of the site's texture language */}
      <div className="pointer-events-none absolute -left-32 -top-24 h-[28rem] w-[28rem] rounded-full bg-lavender-200/40 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-lavender-200/30 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,20,30,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,30,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED]">
            <span className="h-px w-6 bg-[#7C3AED]/40" />
            Built for who you serve
            <span className="h-px w-6 bg-[#7C3AED]/40" />
          </span>
          <h2 className="font-head text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl">
            One Strategy, <span className="font-serif font-normal italic text-ink-900/80">Three Audiences</span>
          </h2>
        </motion.div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audience.map((item) => (
            <StaggerItem key={item.title}>
              <motion.article
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-ink-950/[0.06] bg-white/80 p-7 pt-10 shadow-[0_20px_60px_-25px_rgba(76,29,149,0.2)] backdrop-blur-sm transition-shadow duration-300"
                style={{ ["--accent" as string]: item.accent }}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Ambient glow blob — drifts slightly on hover */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: "var(--accent)", opacity: 0.15 }}
                  variants={{
                    rest: { x: 0, y: 0, scale: 1 },
                    hover: { x: -12, y: 12, scale: 1.25 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Rising border glow */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[30px]"
                  style={{
                    boxShadow: "0 0 0 1.5px color-mix(in srgb, var(--accent) 45%, transparent)",
                  }}
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Eyebrow tag */}
                <span
                  className="relative mb-5 w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    color: "var(--accent)",
                    background: "color-mix(in srgb, var(--accent) 10%, white)",
                  }}
                >
                  {item.tag}
                </span>

                {/* Icon badge */}
                <motion.div
                  className="relative mb-5 flex h-[58px] w-[58px] items-center justify-center rounded-2xl shadow-sm"
                  style={{ background: "color-mix(in srgb, var(--accent) 10%, white)" }}
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: -6, scale: 1.08 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image src={item.icon} alt="" width={30} height={30} className="h-[30px] w-auto object-contain" />
                </motion.div>

                <h3 className="relative mb-3 font-head text-xl font-bold leading-[1.4] text-ink-950">
                  {item.title}
                  <motion.span
                    aria-hidden
                    className="mt-1 block h-[3px] rounded-full"
                    style={{ background: "var(--accent)" }}
                    variants={{
                      rest: { width: "24px" },
                      hover: { width: "56px" },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </h3>

                <p className="relative flex-1 text-[13px] leading-[1.65] text-ink-900/80 sm:text-sm">
                  {item.description}
                </p>

                {/* Thumbnail — expands and reveals a "view" affordance on hover */}
                <div className="relative mt-6 flex justify-end">
                  <motion.div
                    className="relative overflow-hidden rounded-[24px] shadow-md"
                    variants={{
                      rest: { width: 100, height: 100 },
                      hover: { width: 132, height: 100 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.12 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Image src={item.image} alt="" fill className="object-cover" sizes="132px" />
                    </motion.div>

                    {/* Overlay + affordance */}
                    <motion.div
                      className="absolute inset-0 flex items-end justify-start p-2"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, color-mix(in srgb, var(--accent) 70%, black) 100%)",
                      }}
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-ink-950">
                        →
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}