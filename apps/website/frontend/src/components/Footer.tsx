"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInView } from "./AnimatedSection";

const services = ["School Marketing", "EdTech Partnerships", "University Admissions", "SEO for Education"];

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Clients", href: "#presence" },
  { label: "Contact Us", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <rect x="3" y="9" width="4" height="12" />
        <circle cx="5" cy="4" r="2" />
        <path d="M11 9h4v2.2c.7-1.4 2.2-2.4 4-2.4 3 0 5 2 5 5.6V21h-4v-5.8c0-1.6-.6-2.7-2-2.7-1.1 0-1.8.8-2 1.5-.1.3-.1.6-.1 1V21h-4z" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: <path d="M4 4l16 16M20 4L4 20" />,
  },
];

function AnimatedLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex w-fit items-center gap-1.5 text-ink-900/70 transition-colors duration-200 hover:text-purple-600"
    >
      <span>{children}</span>
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-lavender-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/images/footer-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-purple-300/25 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-200/30 blur-[100px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,20,30,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,30,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="section-container relative py-16 sm:py-20">
        <div className="grid gap-10 border-b border-ink-950/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">
          <FadeInView>
            <div>
              <Link href="#top" className="mb-5 inline-block">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Image
                    src="/images/logo.png"
                    alt="Thynk Success"
                    width={200}
                    height={80}
                    className="h-16 w-auto object-contain sm:h-20"
                  />
                </motion.div>
              </Link>
              <p className="mb-6 max-w-xs text-base leading-[1.6] tracking-[0.03em] text-ink-950/80">
                We believe education is the foundation of transformation. We are
                committed to helping our partners unlock opportunities, achieve
                growth, and shape the future of learning.
              </p>

              <div className="flex items-center gap-2.5">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3, backgroundColor: "#7C3AED", color: "#ffffff" }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-950/10 bg-white/70 text-ink-950 shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      {s.icon}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.08}>
            <h4 className="mb-5 font-serif italic text-lg font-bold tracking-tight text-ink-950">Our Services</h4>
            <ul className="space-y-3.5 text-[15px]">
              {services.map((item) => (
                <li key={item}>
                  <AnimatedLink href="#services">{item}</AnimatedLink>
                </li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView delay={0.12}>
            <h4 className="mb-5 font-serif italic text-lg font-bold tracking-tight text-ink-950">Quick Links</h4>
            <ul className="space-y-3.5 text-[15px]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <AnimatedLink href={item.href}>{item.label}</AnimatedLink>
                </li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView delay={0.16}>
            <h4 className="mb-5 font-serif  italic text-lg font-bold tracking-tight text-ink-950">Contact Info</h4>
            <ul className="space-y-4 text-[15px] text-ink-950/85">
              <li className="flex items-start gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 h-4 w-4 shrink-0 text-purple-600"
                >
                  <path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>F-300, Sector 63, Noida (U.P.) - 201301 India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-purple-600"
                >
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                </svg>
                <AnimatedLink href="tel:+919650703767">+91 96507 03767</AnimatedLink>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-purple-600"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <AnimatedLink href="mailto:success@thynksuccess.com">success@thynksuccess.com</AnimatedLink>
              </li>
            </ul>
          </FadeInView>
        </div>

        <FadeInView delay={0.2}>
          <div className="space-y-6 py-8 text-center text-sm leading-[18px] tracking-[0.03em] text-ink-950/70 sm:text-base">
            <p className="mx-auto max-w-4xl">
              At Thynk Success, we respect your privacy and collect only necessary
              information like contact details and usage data to provide and
              improve our services. We do not sell your data and protect it with
              standard security measures. By using our site, you consent to cookies
              and data practices described. For details or requests, please contact{" "}
              <a href="mailto:success@thynksuccess.com" className="underline hover:text-purple-600">
                success@thynksuccess.com
              </a>
              .
            </p>
            <p>
              © {new Date().getFullYear()} Thynk Success | Managed by {" "}
              <a
                href="https://thynksuccess.com/"
                className="underline hover:text-purple-600"
                target="_blank"
                rel="noreferrer"
              >
                Thynk Success
              </a>
            </p>
          </div>
        </FadeInView>
      </div>

      <motion.a
        href="#top"
        aria-label="Back to top"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.92 }}
        className="absolute bottom-8 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 text-white shadow-[0_10px_25px_-8px_rgba(101,40,247,0.5)] transition-colors hover:bg-purple-700 sm:right-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </motion.a>
    </footer>
  );
}