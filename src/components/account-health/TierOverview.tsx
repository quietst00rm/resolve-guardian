import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "GUARDIAN",
    price: 349,
    popular: false,
    features: {
      response: "72-hour",
      audits: "Annual",
      support: "Email",
      manager: "—",
      consulting: "—"
    }
  },
  {
    name: "DEFENDER",
    price: 899,
    popular: true,
    features: {
      response: "48-hour",
      audits: "Twice yearly",
      support: "Email",
      manager: "—",
      consulting: "—"
    }
  },
  {
    name: "FORTRESS",
    price: 2199,
    popular: false,
    features: {
      response: "24-hour",
      audits: "Quarterly",
      support: "Email + Slack",
      manager: "✓ Included",
      consulting: "Quarterly calls"
    }
  },
  {
    name: "EMPIRE",
    price: 5999,
    popular: false,
    features: {
      response: "Same day",
      audits: "Monthly",
      support: "Email + WhatsApp + Slack",
      manager: "✓ Included",
      consulting: "Monthly sessions"
    }
  }
];

export const TierOverview = () => {
  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
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
              className={`relative bg-card rounded-2xl border-2 p-8 text-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-xl ${
                tier.popular ? 'lg:scale-105 border-primary shadow-lg' : 'border-border'
              }`}
            >
              {/* Most Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-accent text-accent-foreground shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-primary uppercase tracking-wide mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="text-4xl font-bold text-foreground mb-6">
                ${tier.price.toLocaleString()}
                <span className="text-base font-normal text-muted-foreground">/month</span>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

              {/* Features */}
              <div className="space-y-5 text-left">
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Violation Response
                  </div>
                  <div className="text-base font-medium text-foreground">
                    {tier.features.response}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Compliance Audits
                  </div>
                  <div className="text-base font-medium text-foreground">
                    {tier.features.audits}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Support Channels
                  </div>
                  <div className="text-base font-medium text-foreground">
                    {tier.features.support}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Account Manager
                  </div>
                  <div className="text-base font-medium text-foreground">
                    {tier.features.manager}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Strategic Consulting
                  </div>
                  <div className="text-base font-medium text-foreground">
                    {tier.features.consulting}
                  </div>
                </div>
              </div>
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
            <a
              href="#feature-comparison"
              className="text-sm text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline transition-colors"
            >
              View detailed feature comparison →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
