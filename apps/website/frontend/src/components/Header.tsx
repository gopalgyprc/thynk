"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Clients", href: "#presence" },
  { label: "News & Blog", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "Our Products", href: "#services" },
  { label: "Partnerships", href: "partnerships" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#ece5fd] ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="section-container">
        <div
          className={`flex items-center justify-between gap-4 rounded-full bg-white px-4 py-2.5 pl-5 shadow-[0_12px_34px_-16px_rgba(26,21,48,0.22)] transition-shadow duration-300 sm:px-5 ${
            scrolled ? "shadow-[0_16px_40px_-14px_rgba(26,21,48,0.3)]" : ""
          }`}
        >
          <a href="#top" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Thynk Success"
              width={130}
              height={40}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </a>

          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-head text-[13.5px] font-bold text-ink-700 whitespace-nowrap transition-colors hover:text-purple-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:+919650703767"
              className="hidden h-9 w-9 items-center justify-center rounded-full bg-lavender-100 text-ink-700 transition-colors hover:bg-lavender-200 hover:text-purple-600 sm:inline-flex"
              aria-label="Call us"
            >
              <Phone size={15} />
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-purple-600 px-5 py-2.5 font-head text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(101,40,247,0.55)] transition-all hover:-translate-y-0.5 hover:bg-purple-700 sm:inline-flex"
            >
              Get a Free Quote
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lavender-100 text-ink-900 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="section-container mt-2 lg:hidden"
          >
            <div className="flex flex-col gap-1 rounded-[20px] bg-white p-4 shadow-[0_20px_40px_-16px_rgba(26,21,48,0.3)]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-purple-600/5 py-3 font-head text-sm font-bold text-ink-700 last:border-0 hover:text-purple-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
