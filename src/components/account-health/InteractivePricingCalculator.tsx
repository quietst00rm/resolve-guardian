import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const InteractivePricingCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({
    asinCount: "",
    suspended: "",
    violationCount: "",
    monthlyRevenue: 0,
  });
  const [tierResult, setTierResult] = useState<any>(null);

  const formatRevenue = (value: string) => {
    const numbers = value.replace(/[^0-9]/g, "");
    if (numbers) {
      return "$" + parseInt(numbers).toLocaleString("en-US");
    }
    return "";
  };

  const parseRevenue = (formattedValue: string) => {
    return parseInt(formattedValue.replace(/[^0-9]/g, "")) || 0;
  };

  const getTierFromRevenue = (revenue: number) => {
    if (revenue >= 0 && revenue < 250000) {
      return {
        name: "Essential Protection",
        price: 599,
        priceClass: "text-accent",
        badge: "Best for $0–$250K/mo",
      };
    } else if (revenue >= 250000 && revenue < 1000000) {
      return {
        name: "Complete Coverage",
        price: 1299,
        priceClass: "text-primary",
        badge: "Best for $250K–$1M/mo",
      };
    } else {
      return {
        name: "Unlimited Protection",
        price: 2499,
        priceClass: "text-purple-600",
        badge: "Best for $1M+/mo",
      };
    }
  };

  const nextStep = (step: number) => {
    if (step === 1) {
      const asinInput = document.getElementById("asinCount") as HTMLInputElement;
      if (!asinInput?.value || parseInt(asinInput.value) < 0) {
        asinInput?.focus();
        return;
      }
      setAnswers({ ...answers, asinCount: asinInput.value });
    } else if (step === 2) {
      if (!answers.suspended) return;
    } else if (step === 3) {
      const violationInput = document.getElementById("violationCount") as HTMLInputElement;
      if (!violationInput?.value || parseInt(violationInput.value) < 0) {
        violationInput?.focus();
        return;
      }
      setAnswers({ ...answers, violationCount: violationInput.value });
    }
    setCurrentStep(step + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const selectChoice = (value: string) => {
    setAnswers({ ...answers, suspended: value });
    setTimeout(() => {
      nextStep(2);
    }, 300);
  };

  const calculateTier = () => {
    const revenueInput = document.getElementById("monthlyRevenue") as HTMLInputElement;
    if (!revenueInput?.value) {
      revenueInput?.focus();
      return;
    }

    const revenue = parseRevenue(revenueInput.value);
    setAnswers({ ...answers, monthlyRevenue: revenue });
    setIsCalculating(true);

    setTimeout(() => {
      const tier = getTierFromRevenue(revenue);
      setTierResult(tier);
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-tiers");
    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const progressPercentage = showResults ? 100 : (currentStep / 4) * 100;

  return (
    <section id="pricing-calculator" className="bg-background py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-card rounded-2xl shadow-2xl p-10 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
            Not Sure Which Tier Fits Your Business?
          </h3>

          {/* Progress Bar */}
          {!showResults && (
            <div className="mb-8">
              <div className="text-center text-sm font-semibold text-muted-foreground mb-3">
                {isCalculating ? "Calculating..." : `Question ${currentStep} of 4`}
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}

          {/* Step Container */}
          <div className="relative min-h-[350px]">
            {/* Step 1: ASINs Count */}
            <div
              className={`transition-all duration-300 ${
                currentStep === 1
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <label className="text-2xl font-semibold text-foreground mb-6 block text-center">
                How many ASINs are you currently managing?
              </label>
              <div className="mb-8">
                <input
                  type="number"
                  id="asinCount"
                  className="w-full p-4 text-lg border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Enter number of ASINs"
                  min="0"
                  onKeyPress={(e) => e.key === "Enter" && nextStep(1)}
                />
              </div>
              <Button onClick={() => nextStep(1)} className="w-full py-6 text-lg" size="lg">
                Next
              </Button>
            </div>

            {/* Step 2: Suspension History */}
            <div
              className={`transition-all duration-300 ${
                currentStep === 2
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <label className="text-2xl font-semibold text-foreground mb-6 block text-center">
                Have you been suspended before?
              </label>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => selectChoice("Yes")}
                  className={`p-6 text-lg font-semibold border-2 rounded-lg transition-all ${
                    answers.suspended === "Yes"
                      ? "bg-primary text-white border-primary"
                      : "bg-card border-border hover:border-primary hover:bg-blue-50"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => selectChoice("No")}
                  className={`p-6 text-lg font-semibold border-2 rounded-lg transition-all ${
                    answers.suspended === "No"
                      ? "bg-primary text-white border-primary"
                      : "bg-card border-border hover:border-primary hover:bg-blue-50"
                  }`}
                >
                  No
                </button>
              </div>
              <div className="flex gap-4">
                <Button onClick={previousStep} variant="outline" className="flex-1 py-6">
                  Back
                </Button>
                <Button onClick={() => nextStep(2)} className="flex-1 py-6" disabled={!answers.suspended}>
                  Next
                </Button>
              </div>
            </div>

            {/* Step 3: Monthly Violations */}
            <div
              className={`transition-all duration-300 ${
                currentStep === 3
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <label className="text-2xl font-semibold text-foreground mb-6 block text-center">
                How many monthly violations do you get on average?
              </label>
              <div className="mb-8">
                <input
                  type="number"
                  id="violationCount"
                  className="w-full p-4 text-lg border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Enter average monthly violations"
                  min="0"
                  onKeyPress={(e) => e.key === "Enter" && nextStep(3)}
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={previousStep} variant="outline" className="flex-1 py-6">
                  Back
                </Button>
                <Button onClick={() => nextStep(3)} className="flex-1 py-6">
                  Next
                </Button>
              </div>
            </div>

            {/* Step 4: Monthly Revenue */}
            <div
              className={`transition-all duration-300 ${
                currentStep === 4 && !isCalculating
                  ? "opacity-100 translate-x-0 relative"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <label className="text-2xl font-semibold text-foreground mb-6 block text-center">
                What is your monthly revenue?
              </label>
              <div className="mb-8">
                <input
                  type="text"
                  id="monthlyRevenue"
                  className="w-full p-4 text-lg border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="$0"
                  onChange={(e) => {
                    e.target.value = formatRevenue(e.target.value);
                  }}
                  onKeyPress={(e) => e.key === "Enter" && calculateTier()}
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={previousStep} variant="outline" className="flex-1 py-6">
                  Back
                </Button>
                <Button onClick={calculateTier} className="flex-1 py-6">
                  Calculate My Tier
                </Button>
              </div>
            </div>

            {/* Calculating Screen */}
            {isCalculating && (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-12 h-12 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-4" />
                <p className="text-lg text-muted-foreground font-medium">
                  Analyzing your business profile...
                </p>
              </div>
            )}

            {/* Results Screen */}
            {showResults && tierResult && (
              <div className="text-center animate-fade-in">
                <div className="inline-block px-6 py-2 bg-blue-50 rounded-full text-sm font-semibold text-primary mb-4">
                  {tierResult.badge}
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-2">{tierResult.name}</h2>
                <div className={`text-5xl font-bold mb-6 ${tierResult.priceClass}`}>
                  ${tierResult.price.toLocaleString()}
                  <span className="text-2xl font-normal">/month</span>
                </div>

                <p className="text-lg text-muted-foreground mb-8">
                  Based on your business profile, you fall into our <strong>{tierResult.name}</strong> tier
                  at <strong>${tierResult.price.toLocaleString()}/month</strong>
                </p>

                {/* Summary Box */}
                <div className="bg-muted rounded-xl p-6 mb-8 text-left">
                  <h4 className="text-center text-base font-semibold text-muted-foreground mb-4">
                    Your Business Profile
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">ASINs Managing:</span>
                      <span className="font-semibold text-foreground">{answers.asinCount} ASINs</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Previous Suspension:</span>
                      <span className="font-semibold text-foreground">{answers.suspended}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Monthly Violations:</span>
                      <span className="font-semibold text-foreground">
                        {answers.violationCount} per month
                      </span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-muted-foreground">Monthly Revenue:</span>
                      <span className="font-semibold text-foreground">
                        ${answers.monthlyRevenue.toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                </div>

                <Button onClick={scrollToPricing} size="lg" className="px-8 py-6 text-lg">
                  Start {tierResult.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
