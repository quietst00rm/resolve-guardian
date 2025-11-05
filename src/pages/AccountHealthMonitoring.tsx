import { AnimatedGradientHero } from "@/components/account-health/AnimatedGradientHero";
import { StickyTrustBar } from "@/components/account-health/StickyTrustBar";
import { ProblemSolutionSection } from "@/components/account-health/ProblemSolutionSection";
import { VisualProcessFlow } from "@/components/account-health/VisualProcessFlow";
import { InteractivePricingCalculator } from "@/components/account-health/InteractivePricingCalculator";
import { EnhancedPricingCards } from "@/components/account-health/EnhancedPricingCards";
import { ComparisonTable } from "@/components/account-health/ComparisonTable";
import { BentoGridFeatures } from "@/components/account-health/BentoGridFeatures";
import { TrustAuthoritySection } from "@/components/account-health/TrustAuthoritySection";
import { InteractiveFAQ } from "@/components/account-health/InteractiveFAQ";
import { PersonaTabs } from "@/components/account-health/PersonaTabs";
import { FinalCTA } from "@/components/account-health/FinalCTA";
import { StickyMobileFooter } from "@/components/account-health/StickyMobileFooter";
const AccountHealthMonitoring = () => {
  return <div className="min-h-screen bg-background">
      {/* Sticky Trust Bar - appears on scroll */}
      

      {/* Hero Section with Animated Gradient */}
      <AnimatedGradientHero />

      {/* Problem → Solution Section */}
      <ProblemSolutionSection />

      {/* Visual Process Flow - How It Works */}
      <VisualProcessFlow />

      {/* Interactive Pricing Calculator */}
      <InteractivePricingCalculator />

      {/* Enhanced Pricing Cards */}
      <EnhancedPricingCards />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Bento Grid Key Features */}
      

      {/* Trust & Authority Section */}
      <TrustAuthoritySection />

      {/* Persona Tabs */}
      <PersonaTabs />

      {/* Interactive FAQ */}
      <InteractiveFAQ />

      {/* Testimonials */}
      

      {/* Final CTA */}
      <FinalCTA />

      {/* Sticky Mobile Footer */}
      <StickyMobileFooter />
    </div>;
};
export default AccountHealthMonitoring;