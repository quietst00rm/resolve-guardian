import { Button } from "@/components/ui/button";
import { Shield, Check, Zap } from "lucide-react";

export const FinalCTA = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="hero-gradient-animated py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-semibold">
          READY TO PROTECT YOUR ACCOUNT?
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Don't Let Your Next Violation Become a Suspension
        </h2>

        {/* Subheadline */}
        <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
          24/7 monitoring + expert POA handling starting at $599/month. Get started in under 5 minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <Button 
            size="lg"
            onClick={scrollToCalculator}
            className="bg-primary hover:bg-blue-600 text-white px-12 py-6 text-xl font-bold h-auto shadow-2xl transform hover:scale-105 transition-all"
          >
            Calculate My Tier
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground px-12 py-6 text-xl font-semibold h-auto transition-all"
          >
            Talk to an Expert
          </Button>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Shield className="h-5 w-5" />
            <span>Your Seller Central access secured through Amazon's official Preferred Vendor Network</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Check className="h-5 w-5" />
            <span>Free reinstatement if suspended while following our guidance</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="h-5 w-5" />
            <span>24-hour response time guaranteed at all tiers</span>
          </div>
        </div>

        {/* Reassurance Text */}
        <p className="text-sm text-gray-500">
          No contracts • No hidden fees • Cancel anytime • 60-day money-back guarantee
        </p>
      </div>
    </section>
  );
};
