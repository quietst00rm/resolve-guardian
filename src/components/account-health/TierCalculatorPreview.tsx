import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TierCalculatorPreview = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('protection-wizard');
    calculator?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How We Determine Your Tier
          </h2>
        </div>

        {/* Visual Flow */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Revenue Range */}
            <div className="flex-1 bg-card rounded-xl p-6 shadow-md border-2 border-border">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Revenue Range</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Trailing 12-month revenue
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            <div className="md:hidden rotate-90">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Tier Assignment */}
            <div className="flex-1 bg-primary/10 rounded-xl p-6 shadow-md border-2 border-primary">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Tier Assignment</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatic tier matching
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your monitoring tier is automatically calculated based on your trailing 12-month revenue. No guesswork, no overpaying.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={scrollToCalculator}
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Calculate My Tier
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
