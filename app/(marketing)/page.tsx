import CareerModeSection from "./components/CareerModeSection";
import DifferentiationSection from "./components/DifferentiationSection";
import FooterSection from "@/components/partial/FooterSection";
import GhostShieldSection from "./components/GhostShieldSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import ProblemSection from "./components/ProblemSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Page() {
  return (
    <>
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
