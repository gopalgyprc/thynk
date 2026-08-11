"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = {
  "For Parents": [
    { label: "Find Schools", href: "#schools" },
    { label: "Compare Schools", href: "#comparison" },
    { label: "Free Counselling", href: "#cta" },
    { label: "AI Recommendations", href: "#features" },
    { label: "Admission Guide", href: "#insights" },
  ],
  "For Schools": [
    { label: "List Your School", href: "#pricing" },
    { label: "School Dashboard", href: "#" },
    { label: "Lead Marketplace", href: "#" },
    { label: "Pricing Plans", href: "#pricing" },
    { label: "Success Stories", href: "#testimonials" },
  ],
  "Company": [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#insights" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-text-primary relative overflow-hidden border-t border-slate-100/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16 border-b border-slate-200/50">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <span className="font-sans text-xl font-bold tracking-tight text-brand-600 mb-4 block">
              Thynk <span className="text-brand-500 font-medium">Schooling</span>
            </span>
            
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm mb-6">
              India&apos;s most trusted school admission platform. Connecting 1 lakh+ parents with 12,000+ verified schools.
            </p>
            
            {/* Contact Info with PNG Icons */}
            <div className="space-y-3">
              <a
                href="mailto:hello@thynkschooling.in"
                className="flex items-center gap-2.5 text-xs font-semibold text-text-secondary hover:text-brand-500 transition-colors"
              >
                <Image src="/images-icon/Icon (3).png" alt="Email" width={16} height={16} className="object-contain" />
                <span>hello@thynkschooling.in</span>
              </a>
              <a
                href="tel:+918800000000"
                className="flex items-center gap-2.5 text-xs font-semibold text-text-secondary hover:text-brand-500 transition-colors"
              >
                <Image src="/images-icon/Icon (4).png" alt="Phone" width={16} height={16} className="object-contain" />
                <span>+91 88000 00000</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col items-start text-left">
                <h4 className="text-xs font-bold text-text-primary mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-text-secondary hover:text-brand-500 transition-colors duration-200 font-medium"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-[10px] sm:text-xs text-text-tertiary font-medium">
          <p>© 2026 Thynk Schooling. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for Indian Parents.
          </p>
        </div>
      </div>

      {/* Floating Chat Widget Button (Green circular button on bottom right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 cursor-pointer"
        >
          {/* Circular chat widget icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}

