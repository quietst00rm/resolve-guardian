import { AnimatedGradientHero } from "@/components/account-health/AnimatedGradientHero";
import { StickyTrustBar } from "@/components/account-health/StickyTrustBar";
import { ProblemSolutionSection } from "@/components/account-health/ProblemSolutionSection";
import { VisualProcessFlow } from "@/components/account-health/VisualProcessFlow";
import { InteractivePricingCalculator } from "@/components/account-health/InteractivePricingCalculator";
import { TierOverview } from "@/components/account-health/TierOverview";
import { ProtectionWizard } from "@/components/account-health/ProtectionWizard";
import { TierComparisonTable } from "@/components/account-health/TierComparisonTable";
import { ComparisonTable } from "@/components/account-health/ComparisonTable";
import { BentoGridFeatures } from "@/components/account-health/BentoGridFeatures";
import { TrustAuthoritySection } from "@/components/account-health/TrustAuthoritySection";
import { InteractiveFAQ } from "@/components/account-health/InteractiveFAQ";
import { PersonaTabs } from "@/components/account-health/PersonaTabs";
import { StickyMobileFooter } from "@/components/account-health/StickyMobileFooter";
const AccountHealthMonitoring = () => {
  return <div className="min-h-screen bg-background">
      {/* Sticky Trust Bar - appears on scroll */}
      

      {/* Hero Section with Animated Gradient */}
      

      {/* Problem → Solution Section */}
      

      {/* Visual Process Flow - How It Works */}
      <VisualProcessFlow />

      {/* Interactive Pricing Calculator */}
      

      {/* Tier Overview Display */}
      <TierOverview />

      {/* Tier Comparison Table - Feature Matrix */}
      <TierComparisonTable />

      {/* Protection Wizard - Interactive Plan Selector */}
      <ProtectionWizard />

      {/* Comparison Table */}
      

      {/* Bento Grid Key Features */}
      

      {/* Trust & Authority Section */}
      <TrustAuthoritySection />

      {/* Persona Tabs */}
      <PersonaTabs />

      {/* Interactive FAQ */}
      

      {/* Testimonials */}


      {/* Sticky Mobile Footer */}
      <StickyMobileFooter />

      {/* Emergency reset button - subtle helper for stuck users */}
      <button 
        onClick={() => {
          localStorage.removeItem('protectionWizardData');
          window.location.reload();
        }}
        className="fixed bottom-2 right-2 text-[10px] opacity-20 hover:opacity-60 transition-opacity bg-muted px-2 py-1 rounded"
        title="Reset calculator if stuck"
      >
        Reset Calculator
      </button>
    </div>;
};
export default AccountHealthMonitoring;