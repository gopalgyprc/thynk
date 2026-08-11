"use client";

import { Globe, MessageSquareShare, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  PRODUCT: [
    { label: "Home", href: "/" },
    { label: "Latest Posts", href: "#latest-posts" },
    { label: "Trending", href: "#trending" },
    { label: "Community", href: "#community" },
    { label: "Writers", href: "#writers" },
  ],
  COMMUNITY: [
    { label: "Write on Pulse", href: "#cta" },
    { label: "Community Guidelines", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Code of Conduct", href: "#" },
  ],
  COMPANY: [
    { label: "About ThynkSuccess", href: "#stats" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};

const socialLinks = [
  { label: "GitHub", icon: Globe, href: "#" },
  { label: "Twitter", icon: MessageSquareShare, href: "#" },
  { label: "LinkedIn", icon: ExternalLink, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:hello@thynksuccess.com" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-container section-padding relative">
        {/* Top footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 pt-16 pb-12">
          
          {/* Logo & Info column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Thynk <span className="text-pulse-400">Pulse</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A free, open community for educators, EdTech professionals,
              innovators and school leaders to share experiences and shape the future of learning.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links], catIdx) => (
            <div key={category}>
              <h4 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-widest font-mono">
                {category}
              </h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-xs text-slate-500 border-t border-slate-800/60 mt-4 tracking-wide font-medium">
          <p>&copy; {new Date().getFullYear()} Thynk Pulse. Brand of ThynkSuccess &bull; Private</p>
          <p>Proudly made in India for the World</p>
        </div>

      </div>
    </footer>
  );
}
