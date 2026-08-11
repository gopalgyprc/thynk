"use client";

import { FormEvent, useState } from "react";
import { FadeInView } from "../AnimatedSection";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    form.reset();
    window.setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="contact" className="bg-brand-50 py-16 sm:py-24">
      <div className="section-container">
        <FadeInView>
          <div className="overflow-hidden rounded-3xl border border-[rgba(201,195,217,0.2)] bg-white shadow-[0_4px_20px_rgba(75,44,130,0.05)] lg:flex">
            <div className="bg-brand-600 p-10 text-white sm:p-16 lg:w-[492px] lg:shrink-0">
              <h2 className="font-display text-[clamp(28px,3vw,36px)] font-bold leading-[1.2] tracking-[-0.01em]">
                Thynk Success — Your Strategic Partner in Education Growth
              </h2>
              <div className="mt-8 space-y-4 text-base leading-6 text-white/80">
                <p>
                  At Thynk Success, we go beyond providing services—we become
                  your dedicated growth partner. Working closely with schools,
                  EdTech entrepreneurs, and international institutions, we design
                  strategic, results-driven solutions that enhance visibility,
                  strengthen engagement, and deliver measurable outcomes.
                </p>
                <p>
                  Our vision is to reshape the education ecosystem by empowering
                  institutions to innovate, grow, and inspire. With Thynk
                  Success, it&apos;s not just about growth—it&apos;s about
                  creating meaningful change that truly matters.
                </p>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              noValidate
              className="flex-1 space-y-6 p-8 sm:p-12 lg:p-16"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block space-y-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.7px] text-ink-700">
                    Institution Name *
                  </span>
                  <input
                    name="institution"
                    required
                    placeholder="e.g. Heritage International"
                    className="w-full rounded-lg border border-border bg-input px-3.5 py-3.5 text-base text-ink-950 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                  />
                </label>
                <label className="block space-y-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.7px] text-ink-700">
                    Contact Person *
                  </span>
                  <input
                    name="contact"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-border bg-input px-3.5 py-3.5 text-base text-ink-950 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                  />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block space-y-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.7px] text-ink-700">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@institution.com"
                    className="w-full rounded-lg border border-border bg-input px-3.5 py-3.5 text-base text-ink-950 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                  />
                </label>
                <label className="block space-y-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.7px] text-ink-700">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-border bg-input px-3.5 py-3.5 text-base text-ink-950 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                  />
                </label>
              </div>

              <label className="block space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.7px] text-ink-700">
                  Growth Goals
                </span>
                <textarea
                  name="goals"
                  rows={4}
                  placeholder="Tell us about your enrollment challenges or institutional goals..."
                  className="w-full resize-y rounded-lg border border-border bg-input px-3.5 py-3.5 text-base text-ink-950 placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                />
              </label>

              <div className="space-y-4 pt-2">
                <button type="submit" className="btn-primary">
                  Book Strategy Session
                </button>
                <p className="text-xs text-ink-500">
                  By submitting, you agree to our Privacy Policy and Terms of
                  Engagement.
                </p>
                {submitted && (
                  <p className="text-sm font-semibold text-brand-600">
                    Thanks — we&apos;ll be in touch shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
