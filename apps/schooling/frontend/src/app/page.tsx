"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import TopSchoolsSection from "@/components/TopSchoolsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import InsightsSection from "@/components/InsightsSection";
import CitiesSection from "@/components/CitiesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroSection />
        <TimelineSection />
        <TopSchoolsSection />
        <FeaturesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CTASection />
        <PricingSection />
        <InsightsSection />
        <CitiesSection />
      </motion.main>
      <Footer />
    </>
  );
}

