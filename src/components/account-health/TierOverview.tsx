import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TierComparisonTable } from "./TierComparisonTable";

const tiers = [
  {
    name: "GUARDIAN",
    price: 349,
    popular: false,
    keyFeatures: [
      "72-hour violation response time",
      "48-hour communication response",
      "Daily violation monitoring",
      "Unlimited violation handling",
      "Custom POA drafting & submission",
      "Annual compliance audit"
    ]
  },
  {
    name: "DEFENDER",
    price: 899,
    popular: true,
    keyFeatures: [
      "48-hour violation response time",
      "24-hour communication response",
      "Daily violation monitoring",
      "Unlimited violation handling",
      "Twice-yearly compliance audits",
      "Priority violation queue",
      "Proactive risk alerts"
    ]
  },
  {
    name: "FORTRESS",
    price: 2199,
    popular: false,
    upgradeFrom: "DEFENDER",
    keyFeatures: [
      "24-hour violation response time",
      "6-hour communication response",
      "Dedicated account manager",
      "Email + dedicated Slack channel",
      "Quarterly compliance audits",
      "Quarterly 30-minute strategy calls"
    ]
  },
  {
    name: "EMPIRE",
    price: 5999,
    popular: false,
    upgradeFrom: "FORTRESS",
    keyFeatures: [
      "Same-day violation response time",
      "2-hour communication response",
      "Senior account manager",
      "Email + WhatsApp + Slack + executive hotline",
      "Monthly compliance audits",
      "Monthly 60-minute strategy sessions"
    ]
  }
];

export const TierOverview = () => {
  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToComparison = () => {
    const comparison = document.getElementById('feature-comparison');
    comparison?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section id="tier-overview" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Protection Tiers Designed for Your Business Size
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four levels of protection. One mission: keeping your Amazon account healthy.
            </p>
          </div>

          {/* Tier Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-card rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 min-h-[620px] max-h-[620px] flex flex-col ${
                  tier.popular 
                    ? 'border-[3px] border-primary shadow-[0_12px_48px_rgba(37,99,235,0.12)] lg:scale-105 z-10' 
                    : 'border-2 border-border shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]'
                }`}
              >
                {/* Most Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white shadow-[0_6px_20px_rgba(34,197,94,0.3)]">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <h3 className="text-[28px] font-bold text-primary uppercase tracking-[1.5px] text-center mb-3">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-foreground leading-none">
                    ${tier.price.toLocaleString()}
                  </div>
                  <span className="text-xl font-normal text-muted-foreground">/month</span>
                </div>

                {/* Divider */}
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6 rounded-full"></div>

                {/* Upgrade Callout */}
                {tier.upgradeFrom && (
                  <div className="mb-6 p-3.5 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-primary rounded-lg">
                    <div className="text-sm font-semibold text-foreground">
                      Everything in {tier.upgradeFrom}, plus:
                    </div>
                  </div>
                )}

                {/* Key Features List */}
                <ul className="space-y-3.5 mb-6 flex-grow text-left">
                  {tier.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-[18px] h-[18px] text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* View All Features Link */}
                <button
                  onClick={scrollToComparison}
                  className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-5 mt-auto text-center"
                >
                  View all features ↓
                </button>

                {/* CTA Button */}
                <Button
                  onClick={scrollToWizard}
                  className={`w-full h-[52px] text-base font-semibold rounded-lg transition-all duration-300 ${
                    tier.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_8px_24px_rgba(37,99,235,0.3)]'
                      : 'bg-slate-600 hover:bg-slate-700 text-white'
                  }`}
                >
                  Start {tier.name.charAt(0) + tier.name.slice(1).toLowerCase()} Protection
                </Button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToWizard}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-auto"
            >
              Find Your Protection Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="mt-6">
              <button
                onClick={scrollToComparison}
                className="text-sm text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors"
              >
                View detailed feature comparison →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Comparison Table */}
      <TierComparisonTable />
    </>
  );
};
