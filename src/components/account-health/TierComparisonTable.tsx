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
  // Monitoring & Detection
  {
    category: "Monitoring & Detection",
    feature: "Daily Violation Monitoring",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Monitoring & Detection",
    feature: "Account Health Score Monitoring",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },

  // Response Times
  {
    category: "Response Times",
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
    category: "Response Times",
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

  // Violation Handling
  {
    category: "Violation Handling",
    feature: "Unlimited Violation Handling",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Violation Handling",
    feature: "Custom POA Drafting & Submission",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Violation Handling",
    feature: "Priority Violation Queue",
    guardian: false,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Violation Handling",
    feature: "Daily Check-ins During Active Violations",
    guardian: false,
    defender: false,
    fortress: true,
    empire: true,
  },
  {
    category: "Violation Handling",
    feature: "Executive Escalation Handling",
    guardian: false,
    defender: false,
    fortress: true,
    empire: true,
  },

  // Reporting & Audits
  {
    category: "Reporting & Audits",
    feature: "Weekly Account Health Reports",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Reporting & Audits",
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

  // Support & Account Management
  {
    category: "Support & Account Management",
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
    category: "Support & Account Management",
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
    category: "Support & Account Management",
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
    return (
      <div className="flex items-center justify-center">
        <span className="text-sm font-medium text-foreground">{detail}</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center">
      {included ? (
        <Check className="w-5 h-5 text-green-500" />
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-gray-600">
            See exactly what's included in each protection tier
          </p>
        </div>

        {/* Desktop Table - CSS Grid */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="p-6 font-semibold text-lg">Feature</div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500">
                <div className="space-y-1">
                  <div>GUARDIAN</div>
                  <div className="text-sm font-normal text-blue-100">$349/mo</div>
                </div>
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500">
                <div className="space-y-1">
                  <div>DEFENDER</div>
                  <div className="text-sm font-normal text-blue-100">$899/mo</div>
                </div>
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500">
                <div className="space-y-1">
                  <div>FORTRESS</div>
                  <div className="text-sm font-normal text-blue-100">$2,199/mo</div>
                </div>
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500">
                <div className="space-y-1">
                  <div>EMPIRE</div>
                  <div className="text-sm font-normal text-blue-100">$5,999/mo</div>
                </div>
              </div>
            </div>

            {/* Feature Categories */}
            {categories.map((category, catIdx) => {
              const categoryFeatures = features.filter(f => f.category === category);
              return (
                <div key={catIdx}>
                  {/* Category Header */}
                  <div className="bg-gray-100 px-6 py-3 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900 text-base uppercase tracking-wide">
                      {category}
                    </h3>
                  </div>

                  {/* Features in Category */}
                  {categoryFeatures.map((feature, featIdx) => (
                    <div 
                      key={featIdx}
                      className="grid grid-cols-5 gap-0 border-t border-gray-200 hover:bg-blue-50 transition-colors duration-150"
                    >
                      {/* Feature Name */}
                      <div className="p-5 flex items-center">
                        <span className="text-gray-700 font-medium">{feature.feature}</span>
                      </div>

                      {/* Guardian Column */}
                      <div className="p-5 flex items-center justify-center border-l border-gray-200">
                        <FeatureCell 
                          included={feature.guardian} 
                          detail={feature.details?.guardian}
                        />
                      </div>

                      {/* Defender Column */}
                      <div className="p-5 flex items-center justify-center border-l border-gray-200">
                        <FeatureCell 
                          included={feature.defender} 
                          detail={feature.details?.defender}
                        />
                      </div>

                      {/* Fortress Column */}
                      <div className="p-5 flex items-center justify-center border-l border-gray-200">
                        <FeatureCell 
                          included={feature.fortress} 
                          detail={feature.details?.fortress}
                        />
                      </div>

                      {/* Empire Column */}
                      <div className="p-5 flex items-center justify-center border-l border-gray-200">
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
            <div className="bg-gray-50 p-8 border-t border-gray-200 text-center">
              <button 
                onClick={scrollToWizard}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 inline-flex items-center shadow-md hover:shadow-lg"
              >
                Find My Protection Tier
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
              <div key={tier} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                
                {/* Tier Header (Always Visible) */}
                <button
                  onClick={() => setExpandedTier(isExpanded ? null : tier)}
                  className="w-full p-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold">{tier}</h3>
                    <p className="text-blue-100 mt-1">
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
                          <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
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
                                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                  ) : (
                                    <X className="h-5 w-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                                  )}
                                  <div>
                                    <span className="text-gray-700">{feature.feature}</span>
                                    {detail && (
                                      <span className="text-gray-500 text-sm ml-2">({detail})</span>
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
                      className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                      Find My Protection Tier
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
