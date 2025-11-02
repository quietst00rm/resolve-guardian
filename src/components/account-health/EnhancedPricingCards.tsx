import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
export const EnhancedPricingCards = () => {
  const [showComparison, setShowComparison] = useState(false);
  const tiers = [{
    name: "Essential Protection",
    price: 599,
    badge: "Best for $50K–$250K/mo revenue",
    features: ["Daily violation monitoring (24/7 coverage)", "Up to 15 violations resolved per month", "POA drafting + submission on your behalf", "Weekly AI-generated account health reports", "Email support (24-hour response time)", "Live violation tracking access"],
    cta: "Start Essential Protection",
    popular: false
  }, {
    name: "Complete Coverage",
    price: 1299,
    badge: "Best for $250K–$1M/mo revenue",
    additionalHeader: "Everything in Essential, plus:",
    features: ["Up to 35 violations resolved per month", "Priority handling during Q4/Prime Day", "Daily status updates during active violations", "Quarterly proactive compliance audit", "Phone/video support available", "Dedicated account manager"],
    cta: "Start Complete Coverage",
    popular: true
  }, {
    name: "Unlimited Protection",
    price: 2499,
    badge: "Best for $1M+/mo revenue",
    additionalHeader: "Everything in Complete, plus:",
    features: ["Up to 60 violations resolved per month", "Daily check-ins during any active violation", "Monthly 30-minute strategy call", "Bi-annual deep-dive compliance audit", "Direct phone/text line to account manager", "Executive escalation handling", "Priority queue for all POA drafting"],
    cta: "Start Unlimited Protection",
    popular: false
  }];
  return <section id="pricing-tiers" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-foreground mb-4">
            Choose Your Protection Level
          </h2>
          <p className="text-xl text-muted-foreground">
            Revenue-based pricing that scales with your business. No hidden fees. No assessment calls required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {tiers.map((tier, index) => <div key={index} className={`relative bg-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${tier.popular ? 'border-4 border-primary shadow-2xl' : 'border-2 border-border hover:border-primary hover:shadow-xl'}`}>
              {/* Most Popular Badge */}
              {tier.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">MOST POPULAR </div>}

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-foreground">${tier.price}</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <div className="inline-block mt-4 px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm font-semibold">
                  {tier.badge}
                </div>
              </div>

              {/* Additional Header */}
              {tier.additionalHeader && <div className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                  {tier.additionalHeader}
                </div>}

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => <li key={fIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">{feature}</span>
                  </li>)}
              </ul>

              {/* CTA Button */}
              <Button className={`w-full py-6 text-base font-semibold h-auto ${tier.popular ? 'bg-primary hover:bg-blue-700 text-white' : 'bg-secondary hover:bg-opacity-90 text-secondary-foreground'}`}>
                {tier.cta}
              </Button>
            </div>)}
        </div>

        {/* Overage Notice */}
        <div className="text-center p-4 bg-muted rounded-lg text-sm text-muted-foreground mb-8">
          Need more violation capacity? Additional violations handled at $149 each beyond your tier limit.
        </div>

        {/* Feature Comparison Toggle */}
        <div className="text-center mb-8">
          <button onClick={() => setShowComparison(!showComparison)} className="text-primary hover:underline font-medium inline-flex items-center gap-2">
            Compare all features
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Detailed Comparison Table */}
        {showComparison && <div className="overflow-x-auto animate-fade-in">
            <table className="w-full bg-card rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">Essential</th>
                  <th className="py-4 px-6 text-center font-semibold">Complete</th>
                  <th className="py-4 px-6 text-center font-semibold">Unlimited</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[{
              feature: "Daily Monitoring",
              essential: "✓",
              complete: "✓",
              unlimited: "✓"
            }, {
              feature: "Violations/Month",
              essential: "15",
              complete: "35",
              unlimited: "60"
            }, {
              feature: "POA Drafting",
              essential: "✓",
              complete: "✓",
              unlimited: "✓"
            }, {
              feature: "POA Submission",
              essential: "✓",
              complete: "✓",
              unlimited: "✓"
            }, {
              feature: "Response Time",
              essential: "24hrs",
              complete: "24hrs",
              unlimited: "24hrs"
            }, {
              feature: "Compliance Audits",
              essential: "—",
              complete: "Quarterly",
              unlimited: "Bi-annual"
            }, {
              feature: "Account Manager",
              essential: "—",
              complete: "✓",
              unlimited: "✓"
            }, {
              feature: "Phone/Video Support",
              essential: "—",
              complete: "✓",
              unlimited: "✓"
            }, {
              feature: "Strategy Calls",
              essential: "—",
              complete: "—",
              unlimited: "Monthly"
            }].map((row, index) => <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-background"}>
                    <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.essential}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.complete}</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.unlimited}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>}

        {/* Enterprise Banner */}
        <div className="mt-12 bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-semibold mb-2">
            Doing $5M+ monthly or managing multiple accounts?
          </h3>
          <a href="#contact" className="text-white text-xl font-semibold hover:underline inline-flex items-center gap-2">
            Talk to us about custom enterprise pricing →
          </a>
        </div>
      </div>
    </section>;
};