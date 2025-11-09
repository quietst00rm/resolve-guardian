import React from "react";
import { Check, X, ArrowRight } from "lucide-react";

type TierName = "GUARDIAN" | "DEFENDER" | "FORTRESS" | "EMPIRE";

interface ComparisonFeature {
  category: string;
  feature: string;
  guardian: boolean;
  defender: boolean;
  fortress: boolean;
  empire: boolean;
  details?: {
    guardian?: string;
    defender?: string;
    fortress?: string;
    empire?: string;
  };
}

const features: ComparisonFeature[] = [
  // Core Monitoring
  {
    category: "Core Monitoring",
    feature: "Daily Violation Monitoring",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Core Monitoring",
    feature: "Account Health Score Monitoring",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },

  // Alert & Response
  {
    category: "Alert & Response",
    feature: "Violation Response Time",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
    details: {
      guardian: "72 hours",
      defender: "48 hours",
      fortress: "24 hours",
      empire: "Same day",
    },
  },
  {
    category: "Alert & Response",
    feature: "Communication Response Time",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
    details: {
      guardian: "48 hours",
      defender: "24 hours",
      fortress: "6 hours",
      empire: "2 hours",
    },
  },

  // Support & Escalation
  {
    category: "Support & Escalation",
    feature: "Unlimited Violation Handling",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Support & Escalation",
    feature: "Custom POA Drafting & Submission",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Support & Escalation",
    feature: "Priority Violation Queue",
    guardian: false,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Support & Escalation",
    feature: "Daily Check-ins During Active Violations",
    guardian: false,
    defender: false,
    fortress: true,
    empire: true,
  },
  {
    category: "Support & Escalation",
    feature: "Executive Escalation Handling",
    guardian: false,
    defender: false,
    fortress: true,
    empire: true,
  },

  // Advanced Protection
  {
    category: "Advanced Protection",
    feature: "Weekly Account Health Reports",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Advanced Protection",
    feature: "Compliance Audits",
    guardian: false,
    defender: true,
    fortress: true,
    empire: true,
    details: {
      defender: "Annual",
      fortress: "Twice yearly",
      empire: "Quarterly",
    },
  },

  // Support Channels
  {
    category: "Support Channels",
    feature: "Support Channels",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
    details: {
      guardian: "Email",
      defender: "Email",
      fortress: "Email + Slack",
      empire: "Email + Slack + WhatsApp + Phone",
    },
  },
  {
    category: "Support Channels",
    feature: "Dedicated Account Manager",
    guardian: false,
    defender: false,
    fortress: true,
    empire: true,
    details: {
      fortress: "Standard",
      empire: "Senior",
    },
  },
  {
    category: "Support Channels",
    feature: "Strategy Sessions",
    guardian: false,
    defender: false,
    fortress: true,
    empire: true,
    details: {
      fortress: "Quarterly",
      empire: "Monthly",
    },
  },
];

const TierHeader = ({ tier, price }: { tier: TierName; price: number }) => (
  <div className="text-center space-y-2">
    <h3 className="text-lg font-bold text-foreground">{tier}</h3>
    <div className="text-2xl font-bold text-foreground">${price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
  </div>
);

const FeatureCell = ({ included, detail }: { included: boolean; detail?: string }) => {
  if (detail) {
    // Check if detail is "Contact sales" to show as badge
    if (detail.toLowerCase().includes("contact")) {
      return (
        <div className="flex items-center justify-center">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            Custom
          </span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center">
        <span className="text-sm font-medium text-foreground">{detail}</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      {included ? (
        <Check className="w-5 h-5 text-accent" />
      ) : (
        <X className="w-4 h-4 text-muted-foreground/40" />
      )}
    </div>
  );
};

export const TierComparisonTable = () => {
  const categories = Array.from(new Set(features.map(f => f.category)));
  const [expandedTier, setExpandedTier] = React.useState<string | null>(null);

  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-muted-foreground">
            See exactly what's included in each protection tier
          </p>
        </div>

        {/* Desktop Table - CSS Grid */}
        <div className="hidden lg:block">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <div className="p-6 font-semibold text-lg">Feature</div>
              <div className="p-6 text-center font-semibold text-lg border-l border-primary/50">
                <div className="space-y-1">
                  <div>GUARDIAN</div>
                  <div className="text-sm font-normal opacity-80">$349/mo</div>
                </div>
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-primary/50">
                <div className="space-y-1">
                  <div>DEFENDER</div>
                  <div className="text-sm font-normal opacity-80">$899/mo</div>
                </div>
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-primary/50">
                <div className="space-y-1">
                  <div>FORTRESS</div>
                  <div className="text-sm font-normal opacity-80">$2,199/mo</div>
                </div>
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-primary/50">
                <div className="space-y-1">
                  <div>EMPIRE</div>
                  <div className="text-sm font-normal opacity-80">$5,999/mo</div>
                </div>
              </div>
            </div>

            {/* Feature Categories */}
            {categories.map((category, catIdx) => {
              const categoryFeatures = features.filter(f => f.category === category);
              return (
                <div key={catIdx}>
                  {/* Category Header */}
                  <div className="bg-muted px-6 py-3 border-t border-border">
                    <h3 className="font-bold text-foreground text-base uppercase tracking-wide">
                      {category}
                    </h3>
                  </div>

                  {/* Features in Category */}
                  {categoryFeatures.map((feature, featIdx) => (
                     <div 
                      key={featIdx}
                      className={`grid grid-cols-5 gap-0 border-t border-border hover:bg-muted/50 transition-colors duration-150 min-h-[48px] ${
                        featIdx % 2 === 0 ? 'bg-muted/20' : ''
                      }`}
                    >
                      {/* Feature Name */}
                      <div className="p-5 flex items-center">
                        <span className="text-card-foreground font-medium">{feature.feature}</span>
                      </div>

                      {/* Guardian Column */}
                      <div className="p-5 flex items-center justify-center border-l border-border">
                        <FeatureCell 
                          included={feature.guardian} 
                          detail={feature.details?.guardian}
                        />
                      </div>

                      {/* Defender Column */}
                      <div className="p-5 flex items-center justify-center border-l border-border">
                        <FeatureCell 
                          included={feature.defender} 
                          detail={feature.details?.defender}
                        />
                      </div>

                      {/* Fortress Column */}
                      <div className="p-5 flex items-center justify-center border-l border-border">
                        <FeatureCell 
                          included={feature.fortress} 
                          detail={feature.details?.fortress}
                        />
                      </div>

                      {/* Empire Column */}
                      <div className="p-5 flex items-center justify-center border-l border-border">
                        <FeatureCell 
                          included={feature.empire} 
                          detail={feature.details?.empire}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}

            {/* Footer CTA */}
            <div className="bg-muted/50 p-8 border-t border-border text-center">
              <button 
                onClick={scrollToWizard}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-colors duration-200 inline-flex items-center shadow-md hover:shadow-lg"
              >
                Calculate My Tier
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {["GUARDIAN", "DEFENDER", "FORTRESS", "EMPIRE"].map((tierName) => {
            const tier = tierName as TierName;
            const prices = { GUARDIAN: 349, DEFENDER: 899, FORTRESS: 2199, EMPIRE: 5999 };
            const isExpanded = expandedTier === tier;
            
            return (
              <div key={tier} className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                
                {/* Tier Header (Always Visible) */}
                <button
                  onClick={() => setExpandedTier(isExpanded ? null : tier)}
                  className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">{tier}</h3>
                    <p className="opacity-80 mt-1">
                      ${prices[tier].toLocaleString()}/month
                    </p>
                  </div>
                  <ArrowRight 
                    className={`h-6 w-6 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Expandable Feature List */}
                {isExpanded && (
                  <div className="p-6 space-y-4">
                    {categories.map((category, catIdx) => {
                      const categoryFeatures = features.filter(f => f.category === category);
                      return (
                        <div key={catIdx}>
                          <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">
                            {category}
                          </h4>
                          <ul className="space-y-2">
                            {categoryFeatures.map((feature, featIdx) => {
                              const tierKey = tier.toLowerCase() as "guardian" | "defender" | "fortress" | "empire";
                              const included = feature[tierKey];
                              const detail = feature.details?.[tierKey];
                              
                              return (
                                <li key={featIdx} className="flex items-start">
                                  {included ? (
                                    <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                  ) : (
                                    <X className="h-5 w-5 text-muted-foreground/40 mr-3 mt-0.5 flex-shrink-0" />
                                  )}
                                  <div>
                                    <span className="text-card-foreground">{feature.feature}</span>
                                    {detail && (
                                      <span className="text-muted-foreground text-sm ml-2">({detail})</span>
                                    )}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                    
                    {/* CTA in each accordion */}
                    <button 
                      onClick={scrollToWizard}
                      className="w-full mt-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
                    >
                      Calculate My Tier
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
