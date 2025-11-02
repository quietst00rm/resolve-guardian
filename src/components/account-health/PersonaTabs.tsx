import { useState } from "react";
import { Shield, Package, Award, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PersonaTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: "reinstated",
      label: "Just Reinstated",
      icon: Shield,
      headline: "Just Got Your Account Back?",
      description: "The 90 days after reinstatement are the highest-risk period. Amazon is watching closely. Any new violation is more likely to trigger re-suspension - and the second suspension is harder to overturn. Monitoring ensures you never go through that nightmare again.",
      stat: "90 days",
      statLabel: "Critical watch period",
      recommendedTier: "Essential or Complete",
      quote: "After my reinstatement, monitoring gave me peace of mind. I couldn't risk going through another suspension.",
      quoteAuthor: "— Private Label Seller"
    },
    {
      id: "high-volume",
      label: "High Volume",
      icon: Package,
      headline: "Managing 50+ SKUs and Getting Constant IP Challenges?",
      description: "Wholesale operations face relentless violation volume - IP complaints, authenticity challenges, invoice requests. Complete Coverage and Unlimited tiers are designed specifically for high-volume catalogs with 35-60 violations/month capacity.",
      stat: "35-60",
      statLabel: "Violations/month capacity",
      recommendedTier: "Complete or Unlimited",
      quote: "We were drowning in IP complaints. Complete Coverage handles them all so we can focus on growing.",
      quoteAuthor: "— Wholesale Distributor"
    },
    {
      id: "seven-figure",
      label: "7-Figure Brand",
      icon: Award,
      headline: "Protecting a 7-Figure Brand?",
      description: "When each ASIN suspension costs $10K-$20K+ in daily revenue, $2,499/month for Unlimited Protection is a rounding error. Bi-annual compliance audits prevent violations before they happen. Direct access to account managers during crises. This is white-glove protection for high-stakes sellers.",
      stat: "$10K+",
      statLabel: "Daily revenue per ASIN",
      recommendedTier: "Unlimited Protection",
      quote: "The proactive audits alone have saved us hundreds of thousands. This is essential infrastructure for serious brands.",
      quoteAuthor: "— 7-Figure Brand Owner"
    },
    {
      id: "high-risk",
      label: "High-Risk Category",
      icon: AlertCircle,
      headline: "Selling Topical, Ingestible, or Children's Products?",
      description: "High-regulation categories face constant scrutiny. Safety complaints, MSDS requirements, COA requests, and manufacturing documentation challenges. Our team knows exactly what Amazon's looking for in these complex cases.",
      stat: "3x",
      statLabel: "Higher violation rate",
      recommendedTier: "Complete or Unlimited",
      quote: "Selling supplements is a minefield. Their expertise with documentation requirements has been invaluable.",
      quoteAuthor: "— Health & Wellness Seller"
    }
  ];

  const activePersona = personas[activeTab];
  const Icon = activePersona.icon;

  return (
    <section className="bg-card py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Who Benefits Most From Account Health Monitoring
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose your situation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((persona, index) => {
            const TabIcon = persona.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === index
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-background text-muted-foreground hover:bg-muted'
                }`}
              >
                <TabIcon className="h-5 w-5" />
                {persona.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="animate-fade-in">
          <div className="grid lg:grid-cols-[60%_40%] gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-primary bg-opacity-10 flex items-center justify-center">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {activePersona.headline}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {activePersona.description}
              </p>

              {/* Stat Callout */}
              <div className="bg-primary bg-opacity-10 p-6 rounded-lg inline-block">
                <div className="text-4xl font-bold text-primary mb-1">
                  {activePersona.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {activePersona.statLabel}
                </div>
              </div>

              <div className="pt-4">
                <div className="text-sm text-muted-foreground mb-2">Recommended tier:</div>
                <div className="text-xl font-bold text-foreground mb-4">
                  {activePersona.recommendedTier}
                </div>
                <Button 
                  className="bg-primary hover:bg-blue-600 text-white px-6 py-3 h-auto"
                  onClick={() => {
                    const calculator = document.getElementById('pricing-calculator');
                    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  Calculate My Tier
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Illustration Placeholder */}
              <div className="aspect-square rounded-2xl bg-background border-2 border-border flex items-center justify-center">
                <Icon className="h-32 w-32 text-primary opacity-20" />
              </div>

              {/* Customer Quote */}
              <div className="bg-background p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-base italic text-foreground mb-3">
                  "{activePersona.quote}"
                </p>
                <p className="text-sm text-muted-foreground">
                  {activePersona.quoteAuthor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
