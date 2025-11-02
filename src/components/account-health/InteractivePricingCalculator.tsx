import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";

export const InteractivePricingCalculator = () => {
  const [revenue, setRevenue] = useState(150000);
  const [showResult, setShowResult] = useState(false);

  const getTierInfo = (revenue: number) => {
    if (revenue < 50000) {
      return {
        tier: "Consultation Recommended",
        price: null,
        violations: null,
        color: "text-muted-foreground",
        bgColor: "bg-gray-100",
        message: "Based on your revenue, we recommend scheduling a consultation to determine if monitoring is right for your business size."
      };
    } else if (revenue >= 50000 && revenue < 250000) {
      return {
        tier: "Essential Protection",
        price: 599,
        violations: 15,
        color: "text-accent",
        bgColor: "bg-green-50",
        badge: "Best for $50K–$250K/mo"
      };
    } else if (revenue >= 250000 && revenue < 1000000) {
      return {
        tier: "Complete Coverage",
        price: 1299,
        violations: 35,
        color: "text-primary",
        bgColor: "bg-blue-50",
        badge: "Best for $250K–$1M/mo"
      };
    } else {
      return {
        tier: "Unlimited Protection",
        price: 2499,
        violations: 60,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        badge: "Best for $1M+/mo"
      };
    }
  };

  const tierInfo = getTierInfo(revenue);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const getSliderColor = () => {
    if (revenue < 50000) return "bg-gray-400";
    if (revenue < 250000) return "bg-accent";
    if (revenue < 1000000) return "bg-primary";
    return "bg-purple-600";
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const scrollToTier = () => {
    const pricingSection = document.getElementById('pricing-tiers');
    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="pricing-calculator" className="bg-background py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-card rounded-2xl shadow-2xl p-10 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Not Sure Which Tier Fits Your Business?
          </h3>

          <div className="space-y-8">
            {/* Revenue Display */}
            <div className="text-center">
              <label className="text-lg font-medium text-foreground mb-3 block">
                Enter your monthly revenue:
              </label>
              <div className={`text-4xl font-bold ${tierInfo.color} mb-6 transition-colors duration-300`}>
                {formatCurrency(revenue)}
              </div>
            </div>

            {/* Slider with Zone Colors */}
            <div className="relative px-2">
              <Slider
                value={[revenue]}
                onValueChange={(value) => {
                  setRevenue(value[0]);
                  setShowResult(false);
                }}
                min={0}
                max={2000000}
                step={10000}
                className="w-full"
              />
              
              {/* Zone Labels */}
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$0</span>
                <span className="text-accent">$250K</span>
                <span className="text-primary">$1M</span>
                <span className="text-purple-600">$2M+</span>
              </div>

              {/* Visual Zone Indicator */}
              <div className="mt-6 h-2 rounded-full overflow-hidden flex">
                <div className="w-1/4 bg-gray-300"></div>
                <div className="w-1/4 bg-accent bg-opacity-30"></div>
                <div className="w-1/4 bg-primary bg-opacity-30"></div>
                <div className="w-1/4 bg-purple-600 bg-opacity-30"></div>
              </div>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={handleCalculate}
              className="w-full bg-primary hover:bg-blue-600 text-white py-6 text-lg font-semibold h-auto"
            >
              Calculate My Tier
            </Button>

            {/* Results */}
            {showResult && (
              <div className={`${tierInfo.bgColor} rounded-xl p-6 animate-fade-in space-y-4`}>
                {tierInfo.price ? (
                  <>
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold text-foreground mb-3">
                        {tierInfo.badge}
                      </div>
                      <h4 className={`text-2xl font-bold ${tierInfo.color} mb-2`}>
                        {tierInfo.tier}
                      </h4>
                      <p className="text-foreground text-lg">
                        Based on <strong>{formatCurrency(revenue)}</strong> monthly revenue, we recommend <strong>{tierInfo.tier}</strong> which includes <strong>{tierInfo.violations} violations</strong> per month and costs <strong>${tierInfo.price}/month</strong>.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        onClick={scrollToTier}
                        className={`flex-1 ${getSliderColor()} hover:opacity-90 text-white h-auto py-3`}
                      >
                        Get started with {tierInfo.tier}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => window.location.href = '#contact'}
                        className="flex-1 h-auto py-3"
                      >
                        Schedule a call
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-foreground text-lg">
                      {tierInfo.message}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => window.location.href = '#contact'}
                      className="h-auto py-3"
                    >
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
