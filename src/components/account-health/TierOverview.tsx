import { ArrowRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const tiers = [{
  name: "GUARDIAN",
  price: 349,
  features: [
    "Daily violation monitoring",
    "72-hour violation response time",
    "Unlimited violation handling",
    "Custom POA drafting & submission",
    "Weekly account health reports",
    "Email support with 48-hour response",
    "Account health score monitoring",
    "48-hour communication response time"
  ]
}, {
  name: "DEFENDER",
  price: 899,
  inheritFrom: "GUARDIAN",
  features: [
    "48-hour violation response (2x faster)",
    "Annual compliance audit",
    "Priority violation queue",
    "24-hour communication response time"
  ]
}, {
  name: "FORTRESS",
  price: 2199,
  inheritFrom: "DEFENDER",
  features: [
    "24-hour violation response (2x faster)",
    "6-hour communication response",
    "Dedicated account manager",
    "Slack channel + email support",
    "Twice-yearly compliance audits",
    "Quarterly strategy calls",
    "Daily check-ins during active violations",
    "Executive escalation handling"
  ]
}, {
  name: "EMPIRE",
  price: 5999,
  inheritFrom: "FORTRESS",
  features: [
    "Same-day violation response",
    "2-hour communication response",
    "Senior dedicated account manager",
    "WhatsApp + Slack + Phone support",
    "Quarterly compliance audits",
    "Monthly strategy sessions"
  ]
}];
const TierCard = ({
  tier
}: {
  tier: typeof tiers[0];
}) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const displayedFeatures = showAllFeatures ? tier.features : tier.features.slice(0, 5);
  const hasMoreFeatures = tier.features.length > 5;
  
  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const isEmpire = tier.name === "EMPIRE";
  const isFortress = tier.name === "FORTRESS";
  const isGuardian = tier.name === "GUARDIAN";
  const isDefender = tier.name === "DEFENDER";

  const minHeight = isEmpire ? "min-h-[540px]" : "min-h-[520px]";
  const borderClass = isFortress ? "border-primary/30" : "border-border";
  
  return (
    <div className={`relative flex flex-col bg-card rounded-2xl border-2 ${borderClass} shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${minHeight} ${isEmpire ? 'shadow-lg' : ''}`}>
      
      {/* Enterprise Label for Empire */}
      {isEmpire && (
        <div className="absolute -top-3 left-6 bg-muted px-3 py-1 rounded-md">
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
            ENTERPRISE
          </span>
        </div>
      )}
      
      {/* Tier Name */}
      <h3 className="text-3xl font-bold text-foreground mb-4">
        {tier.name}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-extrabold text-primary tabular-nums">
          ${tier.price.toLocaleString()}
        </span>
        <span className="text-xl text-muted-foreground ml-2">
          /month
        </span>
      </div>

      {/* Inheritance Callout (if applicable) */}
      {"inheritFrom" in tier && tier.inheritFrom && (
        <p className="text-muted-foreground mb-6 min-h-[60px] leading-relaxed">
          Everything in <span className="font-semibold text-primary">{tier.inheritFrom}</span>, plus:
        </p>
      )}
      {!("inheritFrom" in tier && tier.inheritFrom) && (
        <p className="text-muted-foreground mb-6 min-h-[60px] leading-relaxed">
          Essential protection for growing Amazon sellers
        </p>
      )}

      {/* Features */}
      <ul className="space-y-3 mb-4 flex-grow">
        {displayedFeatures.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-card-foreground leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Show All Features Link */}
      {hasMoreFeatures && (
        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          className="text-primary text-sm font-medium mb-6 text-left hover:underline"
        >
          {showAllFeatures ? "Show less features" : "Show all features"}
        </button>
      )}

      {/* CTA Button */}
      <div className="mt-auto">
        <Button 
          onClick={scrollToWizard}
          className={`w-full py-4 px-6 font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center group shadow-md hover:shadow-lg h-auto ${
            isEmpire 
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
        >
          {isEmpire ? "Contact Sales for Empire" : `Get Started with ${tier.name === "GUARDIAN" ? "Guardian" : tier.name === "DEFENDER" ? "Defender" : "Fortress"}`}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  );
};
export const TierOverview = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('protection-wizard');
    calculator?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  
  return (
    <section id="tier-overview" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Protection Tiers
          </h2>
          
          {/* Trust Signal */}
          <p className="text-sm text-muted-foreground mb-4">
            Join 375+ sellers already protecting their accounts
          </p>

          {/* Automatic Assignment Notice */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <p className="text-base text-muted-foreground">
              Your tier is automatically determined by your account size and needs
            </p>
          </div>
          
          {/* Link to Calculator */}
          <button
            onClick={scrollToCalculator}
            className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1"
          >
            See how tier assignment works
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-12">
          {tiers.map(tier => <TierCard key={tier.name} tier={tier} />)}
        </div>

        {/* Below Cards Clarification */}
        <div className="text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not sure which tier fits your needs? Our assessment tool analyzes your account metrics and violation history to recommend the optimal protection level.
          </p>
        </div>
      </div>
    </section>
  );
};