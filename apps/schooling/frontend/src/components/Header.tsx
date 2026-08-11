"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Schools", href: "#schools", active: true },
  { label: "Compare", href: "#comparison" },
  { label: "Counselling", href: "#cta" },
  { label: "Blog", href: "#insights" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-brand-100 shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-brand-50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="font-sans text-xl font-bold tracking-tight text-brand-600">
              Thynk <span className="text-brand-500 font-medium">Schooling</span>
            </span>
          </motion.a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                className={`text-xs font-semibold tracking-wide transition-colors duration-200 relative py-1.5 ${
                  link.active
                    ? "text-brand-500 border-b-2 border-brand-500 font-bold"
                    : "text-text-secondary hover:text-brand-500"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#" className="text-xs font-bold text-text-secondary hover:text-brand-500 transition-colors duration-200">
              Login
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white rounded-xl bg-brand-500 hover:bg-brand-600 shadow-md shadow-brand-500/10 transition-all duration-300"
            >
              Get Started Free
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-text-primary hover:text-brand-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xl font-bold transition-colors ${
                    link.active ? "text-brand-500" : "text-text-primary hover:text-brand-500"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-bold text-text-secondary hover:text-brand-500"
              >
                Login
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded-2xl bg-brand-500 shadow-md transition-all duration-300"
              >
                Get Started Free
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

