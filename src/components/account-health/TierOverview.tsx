import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const tiers = [{
  name: "GUARDIAN",
  price: 349,
  popular: false,
  features: [
    "Daily violation monitoring",
    "72-hour violation response time",
    "Unlimited violation handling",
    "Custom POA drafting & submission",
    "Weekly account health reports",
    "Email support with 48-hour response",
    "Account health score monitoring",
    "48-hour communication response time",
    "Annual compliance audit",
    "Proactive notification tracking",
    "Performance scorecard monitoring"
  ]
}, {
  name: "DEFENDER",
  price: 899,
  popular: true,
  inheritFrom: "GUARDIAN",
  features: [
    "48-hour violation response (2x faster)",
    "Twice-yearly compliance audits",
    "Priority violation queue",
    "24-hour communication response time",
    "Proactive risk alerts",
    "Q4/Prime Day priority handling"
  ]
}, {
  name: "FORTRESS",
  price: 2199,
  popular: false,
  inheritFrom: "DEFENDER",
  features: [
    "24-hour violation response (2x faster)",
    "6-hour communication response",
    "Dedicated account manager",
    "Slack channel + email support",
    "Quarterly compliance audits",
    "Quarterly strategy calls",
    "Daily check-ins during active violations"
  ]
}, {
  name: "EMPIRE",
  price: 5999,
  popular: false,
  inheritFrom: "FORTRESS",
  features: [
    "Same-day violation response",
    "2-hour communication response",
    "Senior dedicated account manager",
    "WhatsApp + Slack + Phone support",
    "Monthly compliance audits",
    "Monthly strategy sessions",
    "Executive escalation handling",
    "Dedicated Seller Central account access"
  ]
}];
const TierCard = ({
  tier
}: {
  tier: typeof tiers[0];
}) => {
  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return <div className={`relative bg-card rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 flex flex-col ${tier.popular ? 'border-[3px] border-primary shadow-[0_12px_48px_rgba(37,99,235,0.12)] lg:scale-105 z-10' : 'border-2 border-border shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]'}`}>
      {/* Most Popular Badge */}
      {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
          MOST POPULAR
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

      {/* Inheritance Callout (if applicable) */}
      {"inheritFrom" in tier && tier.inheritFrom && (
        <div className="mb-4 p-3 bg-primary/5 border-l-4 border-primary rounded">
          <p className="text-sm font-semibold text-foreground">
            Everything in <span className="text-primary">{tier.inheritFrom}</span>, plus:
          </p>
        </div>
      )}

      {/* Features */}
      <div className="mb-6">
        <ul className="space-y-3">
          {tier.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-[14px] font-medium text-foreground leading-relaxed">
                {feature}
              </span>
            </li>)}
        </ul>
      </div>

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