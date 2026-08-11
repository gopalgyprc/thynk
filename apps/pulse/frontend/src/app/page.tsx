"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ArticlesSection from "@/components/ArticlesSection";
import CohortsSection from "@/components/CohortsSection";
import WritersSpotlightSection from "@/components/WritersSpotlightSection";
import TrendingSection from "@/components/TrendingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroSection />
        <StatsSection />
        <ArticlesSection />
        <CohortsSection />
        <WritersSpotlightSection />
        <TrendingSection />
        <CTASection />
      </motion.main>
      {/* <Footer /> */}
    </>
  );
}
