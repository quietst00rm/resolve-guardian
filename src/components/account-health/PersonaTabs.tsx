import { useState } from "react";
import { Shield, Package, Award, AlertCircle, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PersonaTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const personaThemes = {
    reinstated: {
      primary: '#22C55E',
      light: '#DCFCE7',
      border: '#22C55E'
    },
    'high-volume': {
      primary: '#2563EB',
      light: '#DBEAFE',
      border: '#2563EB'
    },
    'seven-figure': {
      primary: '#F59E0B',
      light: '#FEF3C7',
      border: '#F59E0B'
    },
    'high-risk': {
      primary: '#F97316',
      light: '#FFEDD5',
      border: '#F97316'
    }
  };

  const personas = [
    {
      id: "reinstated",
      label: "Just Reinstated",
      icon: Shield,
      theme: personaThemes.reinstated,
      headline: "Just Got Your Account Back?",
      description: "The 90 days after reinstatement are the highest-risk period. Amazon is watching closely. Any new violation is more likely to trigger re-suspension - and the second suspension is harder to overturn. Monitoring ensures you never go through that nightmare again.",
      stat: "90 days",
      statLabel: "Critical watch period",
      recommendedTier: "Essential or Complete",
      quote: "After my reinstatement, monitoring gave me peace of mind. I couldn't risk going through another suspension.",
      quoteAuthor: "Sarah M.",
      quoteRole: "Private Label Seller"
    },
    {
      id: "high-volume",
      label: "High Volume",
      icon: Package,
      theme: personaThemes['high-volume'],
      headline: "Managing 50+ SKUs and Getting Constant IP Challenges?",
      description: "Wholesale operations face relentless violation volume - IP complaints, authenticity challenges, invoice requests. Complete Coverage and Unlimited tiers are designed specifically for high-volume catalogs with 35-60 violations/month capacity.",
      stat: "35-60",
      statLabel: "Violations/month capacity",
      recommendedTier: "Complete or Unlimited",
      quote: "We were drowning in IP complaints. Complete Coverage handles them all so we can focus on growing.",
      quoteAuthor: "Michael T.",
      quoteRole: "Wholesale Distributor"
    },
    {
      id: "seven-figure",
      label: "7-Figure Brand",
      icon: Award,
      theme: personaThemes['seven-figure'],
      headline: "Protecting a 7-Figure Brand?",
      description: "When each ASIN suspension costs $10K-$20K+ in daily revenue, $2,499/month for Unlimited Protection is a rounding error. Bi-annual compliance audits prevent violations before they happen. Direct access to account managers during crises. This is white-glove protection for high-stakes sellers.",
      stat: "$10K+",
      statLabel: "Daily revenue per ASIN",
      recommendedTier: "Unlimited Protection",
      quote: "The proactive audits alone have saved us hundreds of thousands. This is essential infrastructure for serious brands.",
      quoteAuthor: "Jennifer K.",
      quoteRole: "7-Figure Brand Owner"
    },
    {
      id: "high-risk",
      label: "High-Risk Category",
      icon: AlertCircle,
      theme: personaThemes['high-risk'],
      headline: "Selling Topical, Ingestible, or Children's Products?",
      description: "High-regulation categories face constant scrutiny. Safety complaints, MSDS requirements, COA requests, and manufacturing documentation challenges. Our team knows exactly what Amazon's looking for in these complex cases.",
      stat: "3x",
      statLabel: "Higher violation rate",
      recommendedTier: "Complete or Unlimited",
      quote: "Selling supplements is a minefield. Their expertise with documentation requirements has been invaluable.",
      quoteAuthor: "David R.",
      quoteRole: "Health & Wellness Seller"
    }
  ];

  const activePersona = personas[activeTab];
  const Icon = activePersona.icon;

  const handleTabChange = (newIndex: number) => {
    if (newIndex === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

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

        {/* Tab Navigation - Pill Style */}
        <div className="flex justify-center mb-12">
          <div 
            className="inline-flex bg-muted p-1.5 rounded-full gap-1"
            role="tablist"
          >
            {personas.map((persona, index) => {
              const TabIcon = persona.icon;
              return (
                <button
                  key={index}
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls={`persona-panel-${index}`}
                  onClick={() => handleTabChange(index)}
                  className={`
                    relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                    ${activeTab === index
                      ? 'bg-background text-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                    }
                  `}
                >
                  <TabIcon className="h-5 w-5 shrink-0" />
                  <span className="hidden sm:inline">{persona.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div 
          role="tabpanel"
          id={`persona-panel-${activeTab}`}
          aria-labelledby={`persona-tab-${activeTab}`}
          className={`transition-all duration-300 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="grid lg:grid-cols-[55%_45%] gap-12 max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Headline with Inline Icon */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: activePersona.theme.light }}
                >
                  <Icon className="h-6 w-6" style={{ color: activePersona.theme.primary }} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                  {activePersona.headline}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {activePersona.description}
              </p>

              {/* Enhanced Stat Card */}
              <div 
                className="bg-background p-6 rounded-xl shadow-md border-l-4 transition-all duration-200 hover:shadow-lg hover:translate-y-[-2px]"
                style={{ borderColor: activePersona.theme.border }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div 
                      className="text-5xl font-bold mb-1"
                      style={{ color: activePersona.theme.primary }}
                    >
                      {activePersona.stat}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" style={{ color: activePersona.theme.primary }} />
                      {activePersona.statLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Tier Section */}
              <div className="pt-2">
                <div className="text-sm text-muted-foreground mb-2">Recommended tier:</div>
                <div className="text-xl font-bold text-foreground mb-4">
                  {activePersona.recommendedTier}
                </div>
                <Button 
                  size="lg"
                  className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => {
                    const calculator = document.getElementById('pricing-calculator');
                    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  Calculate My Tier
                </Button>
              </div>
            </div>

            {/* Right Column - Visuals */}
            <div className="space-y-6 lg:space-y-8">
              {/* Enhanced Illustration Area */}
              <div 
                className="aspect-square rounded-2xl relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${activePersona.theme.light} 0%, ${activePersona.theme.light}00 100%)`
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: activePersona.theme.primary }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Testimonial Quote */}
              <div 
                className="bg-background p-8 rounded-xl shadow-xl relative transition-all duration-200 hover:shadow-2xl border-t-4"
                style={{ borderColor: activePersona.theme.border }}
              >
                {/* Decorative Quote Icon */}
                <div 
                  className="absolute top-4 right-4 opacity-10"
                  style={{ color: activePersona.theme.primary }}
                >
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-current" 
                      style={{ color: activePersona.theme.primary }}
                    />
                  ))}
                </div>

                <p className="text-lg text-foreground leading-relaxed mb-4 relative z-10">
                  "{activePersona.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                    style={{ backgroundColor: activePersona.theme.primary }}
                  >
                    {activePersona.quoteAuthor.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{activePersona.quoteAuthor}</div>
                    <div className="text-sm text-muted-foreground">{activePersona.quoteRole}</div>
                  </div>
                </div>

                {/* Verified Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" style={{ color: activePersona.theme.primary }} />
                    Verified Customer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
