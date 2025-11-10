import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
const tiers = [
  {
    name: "GUARDIAN",
    price: 349,
    features: [
      "Daily violation monitoring",
      "72-hour violation response time",
      "Unlimited violation handling",
      "Custom POA drafting & submission",
      "Weekly account health reports",
      "Email support with 48-hour response",
      "Account health score monitoring",
      "48-hour communication response time",
    ],
  },
  {
    name: "DEFENDER",
    price: 899,
    inheritFrom: "GUARDIAN",
    features: [
      "48-hour violation response (2x faster)",
      "Annual compliance audit",
      "Priority violation queue",
      "24-hour communication response time",
    ],
  },
  {
    name: "FORTRESS",
    price: 2199,
    inheritFrom: "DEFENDER",
    features: [
      "24-hour violation response (2x faster)",
      "6-hour communication response",
      "Dedicated account manager",
      "Slack channel + email support",
      "Twice-yearly compliance audits",
      "Quarterly strategy calls",
      "Daily check-ins",
      "Executive escalation handling",
    ],
  },
  {
    name: "EMPIRE",
    price: 5999,
    inheritFrom: "FORTRESS",
    features: [
      "Same-day violation response",
      "2-hour communication response",
      "Senior dedicated account manager",
      "WhatsApp + Slack + Phone support",
      "Quarterly compliance audits",
      "Monthly strategy sessions",
    ],
  },
];
const TierCard = ({ tier }: { tier: (typeof tiers)[0] }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const scrollToCalculator = () => {
    const calculator = document.getElementById("pricing-calculator");
    calculator?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const displayedFeatures = showAllFeatures ? tier.features : tier.features.slice(0, 5);
  const hasMoreFeatures = tier.features.length > 5;

  return (
    <div className="relative flex flex-col bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-8 min-h-[520px]">
      {/* Tier Name */}
      <h3 className="text-3xl font-bold text-gray-900 mb-4">{tier.name}</h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-extrabold text-blue-600 tabular-nums">${tier.price.toLocaleString()}</span>
        <span className="text-xl text-gray-600 ml-2">/month</span>
      </div>

      {/* Inheritance Callout (if applicable) */}
      {"inheritFrom" in tier && tier.inheritFrom && (
        <p className="text-gray-600 mb-6 min-h-[60px] leading-relaxed">
          Everything in <span className="font-semibold text-blue-600">{tier.inheritFrom}</span>, plus:
        </p>
      )}
      {!("inheritFrom" in tier && tier.inheritFrom) && (
        <p className="text-gray-600 mb-6 min-h-[60px] leading-relaxed">
          Essential protection for growing Amazon sellers
        </p>
      )}

      {/* Features */}
      <ul className="space-y-3 mb-4 flex-grow">
        {displayedFeatures.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Show All Features Toggle */}
      {hasMoreFeatures && (
        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mb-8 transition-colors"
        >
          {showAllFeatures ? "Show less" : "Show all features"}
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showAllFeatures ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* CTA Button */}
      <div className="mt-auto">
        <Button
          onClick={scrollToCalculator}
          className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center group shadow-md hover:shadow-lg h-auto"
        >
          Find My Protection Tier
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
        <p className="text-center text-sm text-gray-500 mt-3">Take 2-minute assessment</p>
      </div>
    </div>
  );
};
export const TierOverview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToCalculator = () => {
    const calculator = document.getElementById("pricing-calculator");
    calculator?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section id="tier-overview" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your protection tier is custom-calculated based on your account's unique risk profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6" style={{ fontSize: "15px" }}>
            We analyze 12 critical factors to ensure you get the right level of protection at the right price
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-[#EFF6FF] border border-[#3B82F6] rounded-full">
              <span className="text-sm font-medium text-gray-900">Account History</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-[#EFF6FF] border border-[#3B82F6] rounded-full">
              <span className="text-sm font-medium text-gray-900">Risk Indicators</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-[#EFF6FF] border border-[#3B82F6] rounded-full">
              <span className="text-sm font-medium text-gray-900">Business Profile</span>
            </div>
          </div>

          {/* Collapsible Section */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="max-w-5xl mx-auto">
            <CollapsibleTrigger className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-base cursor-pointer transition-colors mx-auto">
              How We Determine Your Tier
              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                {/* Left Column */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">12 Factors We Analyze:</h3>
                  <ul className="space-y-2">
                    {[
                      "Monthly revenue (trailing 12-month average)",
                      "Number of ASINs managed",
                      "Account age and maturity",
                      "Previous suspension history",
                      "Monthly violation frequency",
                      "Intellectual property complaints",
                      "Specific violation types received",
                      "Brand Registry enrollment status",
                      "Fulfillment method (FBA/FBM/Both)",
                      "Business model (Private Label/Wholesale/Arbitrage)",
                      "Product category risk levels",
                      "Related account connections",
                    ].map((factor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Comprehensive Assessment Matters:</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    A 5-year-old private label account with Brand Registry needs completely different protection than a
                    6-month-old arbitrage account with IP complaints. Our algorithm weighs each factor to calculate your
                    exact risk level and protection needs.
                  </p>
                  <div className="bg-[#EFF6FF] border border-blue-600 rounded-lg p-4 flex gap-3">
                    <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      Your tier automatically adjusts if your risk profile changes—no manual intervention needed.
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-12">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Suspension Coverage Banner */}
        <div className="mb-12">
          <div className="bg-[hsl(217,91%,97%)] border-2 border-blue-600 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Shield Icon */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <ShieldCheck className="h-16 w-16 text-blue-600" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Every Plan Includes Full Suspension Protection
                </h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  No matter which tier you're assigned, suspension defense is always included. Our experts write your
                  Plan of Action within 24 hours—no additional fees, no surprises.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-900">Expert POA Writing</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-900">24-Hour Turnaround</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-900">Unlimited Revisions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Find Out Your Protection Tier Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Out Your Protection Tier</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete our 12-question assessment to see your exact tier and monthly cost
            </p>
          </div>

          {/* Three Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Assessment</h3>
              <p className="text-sm text-gray-600">Answer 12 questions about your account (takes 2 minutes)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Analysis</h3>
              <p className="text-sm text-gray-600">We calculate your protection needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Your Tier & Price</h3>
              <p className="text-sm text-gray-600">See your exact monthly cost</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={scrollToCalculator}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              Start Free Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
