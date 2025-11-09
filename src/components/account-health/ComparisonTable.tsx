import { useState } from "react";
import { Check, X, Minus } from "lucide-react";

export const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparisons = [
    {
      feature: "Daily violation checks",
      diy: { type: "no", text: "Only when you remember" },
      sellerResolve: { type: "yes", text: "Guaranteed every day" },
      competitor: { type: "yes", text: "Guaranteed every day" }
    },
    {
      feature: "Professional POA drafting",
      diy: { type: "no", text: "You're on your own" },
      sellerResolve: { type: "yes", text: "Included all tiers" },
      competitor: { type: "yes", text: "Included" }
    },
    {
      feature: "POA submission handling",
      diy: { type: "no", text: "You submit yourself" },
      sellerResolve: { type: "yes", text: "We submit for you" },
      competitor: { type: "no", text: "You submit (at normal tier)" }
    },
    {
      feature: "Transparent pricing",
      diy: { type: "na", text: "N/A" },
      sellerResolve: { type: "yes", text: "Published online" },
      competitor: { type: "no", text: "Assessment required" }
    },
    {
      feature: "Starting price",
      diy: { type: "price", text: "$0 (but costs you sleep)" },
      sellerResolve: { type: "price", text: "$599/month" },
      competitor: { type: "price", text: "~$1,200/month" }
    },
    {
      feature: "24-hour response time",
      diy: { type: "no", text: "Whenever you notice" },
      sellerResolve: { type: "yes", text: "Guaranteed all tiers" },
      competitor: { type: "limited", text: "Premium only" }
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "yes":
        return <Check className="h-5 w-5 text-accent inline-block mr-2" />;
      case "no":
        return <X className="h-5 w-5 text-red-500 inline-block mr-2" />;
      case "limited":
        return <Minus className="h-5 w-5 text-yellow-500 inline-block mr-2" />;
      default:
        return null;
    }
  };

  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Seller Resolve vs. DIY or Competitors
          </h2>
        </div>

        {/* Desktop Table - CSS Grid */}
        <div className="hidden md:block">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="p-6 font-semibold text-lg">Feature</div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500">DIY Monitoring</div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500 bg-blue-500/20">
                Seller Resolve
              </div>
              <div className="p-6 text-center font-semibold text-lg border-l border-blue-500">Typical Competitor</div>
            </div>

            {/* Feature Rows */}
            {comparisons.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-0 border-t border-gray-200 hover:bg-blue-50 transition-colors duration-150"
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div className="p-5 flex items-center">
                  <span className="text-gray-700 font-medium">{row.feature}</span>
                </div>
                <div className="p-5 flex items-center justify-center border-l border-gray-200">
                  <span className="text-gray-600 text-sm flex items-center">
                    {getIcon(row.diy.type)}
                    {row.diy.text}
                  </span>
                </div>
                <div className={`p-5 flex items-center justify-center border-l border-gray-200 bg-green-50 transition-colors ${
                  hoveredRow === index ? 'bg-green-100' : ''
                }`}>
                  <span className="text-gray-900 font-medium text-sm flex items-center">
                    {getIcon(row.sellerResolve.type)}
                    {row.sellerResolve.text}
                  </span>
                </div>
                <div className="p-5 flex items-center justify-center border-l border-gray-200">
                  <span className="text-gray-600 text-sm flex items-center">
                    {getIcon(row.competitor.type)}
                    {row.competitor.text}
                  </span>
                </div>
              </div>
            ))}

            {/* Footer CTA */}
            <div className="bg-gray-50 p-8 border-t border-gray-200 text-center">
              <button 
                onClick={scrollToWizard}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 inline-flex items-center shadow-md hover:shadow-lg"
              >
                Find My Protection Tier
                <Check className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {comparisons.map((row, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{row.feature}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-gray-600 font-medium">DIY:</span>
                  <span className="text-gray-700 flex items-center">
                    {getIcon(row.diy.type)}
                    {row.diy.text}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border-2 border-green-200">
                  <span className="font-semibold text-gray-900">Seller Resolve:</span>
                  <span className="font-semibold text-gray-900 flex items-center">
                    {getIcon(row.sellerResolve.type)}
                    {row.sellerResolve.text}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-gray-600 font-medium">Competitor:</span>
                  <span className="text-gray-700 flex items-center">
                    {getIcon(row.competitor.type)}
                    {row.competitor.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Below Table CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Ready to protect your account with transparent, all-inclusive monitoring?
          </p>
        </div>
      </div>
    </section>
  );
};
