"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import StatementSection from "@/components/StatementSection";
import MissionSection from "@/components/MissionSection";
import AudienceSection from "@/components/AudienceSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnerSection from "@/components/PartnerSection";

export default function Home() {
  return (
    <>
      <motion.main
        id="top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <HeroSection />
        <StatementSection />
        <MissionSection />
        <AudienceSection />
        <StatsSection />
        <TestimonialsSection />
        <PartnerSection />
      </motion.main>
    </>
  );
}
 