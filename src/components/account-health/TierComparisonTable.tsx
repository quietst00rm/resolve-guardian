import React from "react";
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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
  {
    category: "Monitoring & Detection",
    feature: "Performance Scorecard Monitoring",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Monitoring & Detection",
    feature: "Proactive Notification Tracking",
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
  },
  {
    category: "Monitoring & Detection",
    feature: "Proactive Risk Alerts",
    guardian: false,
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
    feature: "Q4/Prime Day Priority Handling",
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
    fortress: false,
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
    guardian: true,
    defender: true,
    fortress: true,
    empire: true,
    details: {
      guardian: "Annual",
      defender: "Twice yearly",
      fortress: "Quarterly",
      empire: "Monthly",
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
  {
    category: "Support & Account Management",
    feature: "Dedicated Seller Central Account Access",
    guardian: false,
    defender: false,
    fortress: false,
    empire: true,
  },
];

const TierHeader = ({ tier, price, popular }: { tier: TierName; price: number; popular?: boolean }) => (
  <div className="text-center space-y-2">
    <div className="space-y-1">
      <h3 className="text-lg font-bold text-foreground">{tier}</h3>
      {popular && (
        <Badge className="bg-primary text-primary-foreground text-xs">Most Popular</Badge>
      )}
    </div>
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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compare Protection Tiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly what's included at each level and how features progress as your business grows.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-border">
                <TableHead className="w-[300px] text-left">
                  <span className="text-base font-bold text-foreground">Features</span>
                </TableHead>
                <TableHead className="text-center">
                  <TierHeader tier="GUARDIAN" price={349} />
                </TableHead>
                <TableHead className="text-center bg-primary/5">
                  <TierHeader tier="DEFENDER" price={899} popular />
                </TableHead>
                <TableHead className="text-center">
                  <TierHeader tier="FORTRESS" price={2199} />
                </TableHead>
                <TableHead className="text-center">
                  <TierHeader tier="EMPIRE" price={5999} />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => {
                const categoryFeatures = features.filter(f => f.category === category);
                return (
                  <React.Fragment key={category}>
                    {/* Category Header Row */}
                    <TableRow className="bg-muted/30 hover:bg-muted/30">
                      <TableCell colSpan={5} className="font-bold text-foreground py-3">
                        {category}
                      </TableCell>
                    </TableRow>
                    {/* Feature Rows */}
                    {categoryFeatures.map((feature, idx) => (
                      <TableRow key={idx} className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium text-foreground py-4">
                          {feature.feature}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          <FeatureCell 
                            included={feature.guardian} 
                            detail={feature.details?.guardian}
                          />
                        </TableCell>
                        <TableCell className="text-center py-4 bg-primary/5">
                          <FeatureCell 
                            included={feature.defender} 
                            detail={feature.details?.defender}
                          />
                        </TableCell>
                        <TableCell className="text-center py-4">
                          <FeatureCell 
                            included={feature.fortress} 
                            detail={feature.details?.fortress}
                          />
                        </TableCell>
                        <TableCell className="text-center py-4">
                          <FeatureCell 
                            included={feature.empire} 
                            detail={feature.details?.empire}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {["GUARDIAN", "DEFENDER", "FORTRESS", "EMPIRE"].map((tierName) => {
            const tier = tierName as TierName;
            const prices = { GUARDIAN: 349, DEFENDER: 899, FORTRESS: 2199, EMPIRE: 5999 };
            const popular = tier === "DEFENDER";
            
            return (
              <div key={tier} className={`bg-card rounded-xl p-6 border-2 ${popular ? 'border-primary shadow-lg' : 'border-border'}`}>
                <TierHeader tier={tier} price={prices[tier]} popular={popular} />
                <div className="mt-6 space-y-4">
                  {categories.map((category) => {
                    const categoryFeatures = features.filter(f => f.category === category);
                    return (
                      <div key={category}>
                        <h4 className="font-bold text-foreground mb-2 text-sm">{category}</h4>
                        <ul className="space-y-2">
                          {categoryFeatures.map((feature, idx) => {
                            const tierKey = tier.toLowerCase() as "guardian" | "defender" | "fortress" | "empire";
                            const included = feature[tierKey];
                            const detail = feature.details?.[tierKey];
                            
                            return (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                {included ? (
                                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                                )}
                                <span className={included ? 'text-foreground' : 'text-muted-foreground/60'}>
                                  {feature.feature}
                                  {detail && <span className="font-medium text-foreground"> ({detail})</span>}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
