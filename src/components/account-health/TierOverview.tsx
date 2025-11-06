import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
const tiers = [{
  name: "GUARDIAN",
  price: 349,
  popular: false,
  coreFeatures: ["Daily violation monitoring", "72-hour violation response time", "Unlimited violation handling", "Custom POA drafting & submission", "Weekly account health reports", "Email support with 48-hour response"],
  additionalFeatures: ["Live violation tracking dashboard", "Account health score monitoring", "48-hour communication response time", "Annual compliance audit", "Proactive notification tracking", "Performance scorecard monitoring"]
}, {
  name: "DEFENDER",
  price: 899,
  popular: true,
  coreFeatures: ["Daily violation monitoring", "48-hour violation response (2x faster)", "Unlimited violation handling", "Custom POA drafting & submission", "Twice-yearly compliance audits", "Priority violation queue"],
  additionalFeatures: ["24-hour communication response time", "Email support", "Live violation tracking dashboard", "Account health score monitoring", "Proactive risk alerts", "Performance scorecard monitoring", "Q4/Prime Day priority handling"]
}, {
  name: "FORTRESS",
  price: 2199,
  popular: false,
  coreFeatures: ["24-hour violation response (2x faster)", "6-hour communication response", "Dedicated account manager", "Slack channel + email support", "Quarterly compliance audits", "Quarterly strategy calls"],
  additionalFeatures: ["Daily check-ins during active violations", "Unlimited violation handling", "Custom POA drafting & submission", "Weekly account health reports", "Live violation tracking dashboard", "Account health score monitoring", "Proactive risk alerts", "Performance scorecard monitoring"]
}, {
  name: "EMPIRE",
  price: 5999,
  popular: false,
  coreFeatures: ["Same-day violation response", "2-hour communication response", "Senior dedicated account manager", "WhatsApp + Slack + executive hotline", "Monthly compliance audits", "Monthly strategy sessions"],
  additionalFeatures: ["Real-time violation updates", "Executive escalation handling", "Unlimited violation handling", "Custom POA drafting & submission", "Weekly account health reports", "Live violation tracking dashboard", "Account health score monitoring", "Proactive risk alerts", "Dedicated Seller Central account access", "Performance scorecard monitoring"]
}];
const TierCard = ({
  tier
}: {
  tier: typeof tiers[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return <div className={`relative bg-card rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 min-h-[560px] flex flex-col ${tier.popular ? 'border-[3px] border-primary shadow-[0_12px_48px_rgba(37,99,235,0.12)] lg:scale-105 z-10' : 'border-2 border-border shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]'}`}>
      {/* Most Popular Badge */}
      {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          
        </div>}

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

      {/* Core Features */}
      <div className="mb-4">
        <h4 className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted-foreground/60 mb-3">
          CORE FEATURES
        </h4>
        <ul className="space-y-3">
          {tier.coreFeatures.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-[14px] font-medium text-foreground leading-relaxed">
                {feature}
              </span>
            </li>)}
        </ul>
      </div>

      {/* Expandable Additional Features */}
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded} className="mb-4">
        <CollapsibleContent className="space-y-3">
          <h4 className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted-foreground/60 mb-3 mt-6">
            ADDITIONAL FEATURES
          </h4>
          <ul className="space-y-3">
            {tier.additionalFeatures.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-[14px] font-medium text-foreground leading-relaxed">
                  {feature}
                </span>
              </li>)}
          </ul>
        </CollapsibleContent>

        <CollapsibleTrigger asChild>
          <button className="w-full h-11 mt-5 bg-transparent border-2 border-dashed border-border rounded-lg text-primary text-sm font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-200 flex items-center justify-center gap-2">
            {isExpanded ? "Show less" : "Show all features"}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </CollapsibleTrigger>
      </Collapsible>

      {/* CTA Button */}
      <Button onClick={scrollToWizard} className={`w-full h-[52px] text-base font-semibold rounded-lg transition-all duration-300 mt-auto ${tier.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_8px_24px_rgba(37,99,235,0.3)]' : 'bg-slate-600 hover:bg-slate-700 text-white'}`}>
        Start {tier.name.charAt(0) + tier.name.slice(1).toLowerCase()} Protection
      </Button>
    </div>;
};
export const TierOverview = () => {
  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return <section id="tier-overview" className="py-20 bg-muted/30">
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
          {tiers.map(tier => <TierCard key={tier.name} tier={tier} />)}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" onClick={scrollToWizard} className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-auto">
            Find Your Protection Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>;
};