import type { Metadata } from "next";
import FooterSection from "@/components/partial/marketing/FooterSection";
import { SITE_DESCRIPTION } from "@/lib/constants/site";
import { createPageMetadata } from "@/lib/metadata";
import CareerModeSection from "./components/CareerModeSection";
import DifferentiationSection from "./components/DifferentiationSection";
import GhostShieldSection from "./components/GhostShieldSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import LandingStructuredData from "./components/LandingStructuredData";
import PricingSection from "./components/PricingSection";
import ProblemSection from "./components/ProblemSection";
import TestimonialsSection from "./components/TestimonialsSection";

// No `title`: the home page uses the root layout's default site title.
export const metadata: Metadata = createPageMetadata({
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Page() {
  return (
    <>
      <LandingStructuredData />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <DifferentiationSection />
        <GhostShieldSection />
        <TestimonialsSection />
        <CareerModeSection />
        <PricingSection />
      </main>
      <FooterSection />
    </>
  );
}
