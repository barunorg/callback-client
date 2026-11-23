import CareerModeSection from "../CareerModeSection";
import DifferentiationSection from "../DifferentiationSection";
import FooterSection from "../FooterSection";
import GhostShieldSection from "../GhostShieldSection";
import HeroSection from "../HeroSection";
import HowItWorksSection from "../HowItWorksSection";
import PricingSection from "../PricingSection";
import ProblemSection from "../ProblemSection";
import TestimonialsSection from "../TestimonialsSection";

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
