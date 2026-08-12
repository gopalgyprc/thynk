"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Our Products",
    children: [
      { label: "Pulse", href: "https://thynk-pulse.vercel.app/"},
      { label: "Schooling", href: "https://thynk-schooling-six.vercel.app/" },
      { label: "Pre School", href: "pre-school" },
      { label: "Kindergarten", href: "kindergarten" },
      { label: "Primary School", href: "primary-school" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Clients", href: "#presence" },
  { label: "News & Blog", href: "/news-blogs" },
  { label: "Contact Us", href: "#contact" },
  { label: "Partnerships", href: "/partnerships" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative overflow-visible bg-cream py-16 sm:py-10">
      <div className="section-container">
        <div
          className={`flex items-center justify-between gap-4 rounded-full bg-white px-4 py-2.5 pl-5 shadow-[0_12px_34px_-16px_rgba(26,21,48,0.22)] transition-shadow duration-300 sm:px-5 ${
            scrolled
              ? "shadow-[0_16px_40px_-14px_rgba(26,21,48,0.3)]"
              : ""
          }`}
        >
          <Link href="#top" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Thynk Success"
              width={130}
              height={40}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 font-head text-[13.5px] font-bold whitespace-nowrap text-ink-700 transition-colors hover:text-purple-600"
                    >
                      {link.label}

                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white p-2 shadow-[0_20px_45px_-15px_rgba(26,21,48,0.25)]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center rounded-xl px-4 py-3 font-head text-sm font-semibold text-ink-700 transition-all duration-200 hover:bg-lavender-100 hover:pl-5 hover:text-purple-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="font-head text-[13.5px] font-bold whitespace-nowrap text-ink-700 transition-colors hover:text-purple-600"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
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
            <Link
              href="#contact"
              className="hidden rounded-full bg-purple-600 px-5 py-2.5 font-head text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(101,40,247,0.55)] transition-all hover:-translate-y-0.5 hover:bg-purple-700 sm:inline-flex"
            >
              Get a Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lavender-100 text-ink-900 transition-colors hover:bg-lavender-200 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
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
            transition={{ duration: 0.2 }}
            className="section-container mt-2 lg:hidden"
          >
            <div className="flex flex-col gap-1 rounded-[20px] bg-white p-4 shadow-[0_20px_40px_-16px_rgba(26,21,48,0.3)]">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="flex w-full items-center justify-between border-b border-purple-600/5 py-3 font-head text-sm font-bold text-ink-700"
                      >
                        <span>{link.label}</span>

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {productsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 border-l-2 border-purple-100 pl-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setProductsOpen(false);
                                  }}
                                  className="block py-2.5 font-head text-sm font-medium text-ink-600 transition-colors hover:text-purple-600"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-purple-600/5 py-3 font-head text-sm font-bold text-ink-700 last:border-0 transition-colors hover:text-purple-600"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
}
