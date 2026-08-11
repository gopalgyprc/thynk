"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Latest Posts", href: "#latest-posts" },
  { label: "Trending", href: "#trending" },
  { label: "Community", href: "#community" },
  { label: "Writers", href: "#writers" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.05, duration: 0.4 },
  }),
};

const mobileMenuVariants = {
  closed: { opacity: 0, transition: { duration: 0.3, staggerChildren: 0.03, staggerDirection: -1 } },
  open: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 } },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Latest Posts");

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
          ? "bg-white/90 backdrop-blur-xl border-b border-purple-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-pulse-800 transition-colors">
              Thynk <span className="text-pulse-600">Pulse</span>
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.label;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setActiveLink(link.label)}
                  className={`text-sm font-medium transition-all duration-200 h-full flex items-center border-b-2 py-1 ${
                    isActive
                      ? "text-pulse-600 border-pulse-600 font-semibold"
                      : "text-slate-600 border-transparent hover:text-pulse-600 hover:border-pulse-300"
                  }`}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </nav>

          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#login" className="text-sm font-medium text-pulse-600 hover:text-pulse-700 transition-colors">
              Login
            </a>
            <a
              href="#register"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-pulse-600 hover:bg-pulse-700 rounded-lg shadow-md shadow-pulse-600/10 hover:shadow-lg transition-all duration-200"
            >
              Register
            </a>
          </motion.div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-text-primary hover:text-pulse-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={mobileItemVariants}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMobileOpen(false);
                    }}
                    className={`text-2xl font-semibold transition-colors ${
                      isActive ? "text-pulse-600" : "text-text-primary hover:text-pulse-600"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="flex flex-col items-center gap-4 mt-6 w-full px-12">
                <motion.a
                  href="#login"
                  variants={mobileItemVariants}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-pulse-600 hover:text-pulse-700 py-2"
                >
                  Login
                </motion.a>
                <motion.a
                  href="#register"
                  variants={mobileItemVariants}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3.5 text-base font-semibold text-white bg-pulse-600 hover:bg-pulse-700 rounded-xl shadow-md transition-all duration-200"
                >
                  Register
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
