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

  return (
    <section className="bg-card py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-foreground mb-16">
          Why Seller Resolve vs. DIY or Competitors
        </h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-card rounded-xl overflow-hidden shadow-lg">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-lg">Feature</th>
                <th className="py-4 px-6 text-center font-semibold text-lg">DIY Monitoring</th>
                <th className="py-4 px-6 text-center font-semibold text-lg border-x-2 border-primary bg-primary bg-opacity-5">
                  Seller Resolve
                </th>
                <th className="py-4 px-6 text-center font-semibold text-lg">Typical Competitor</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border transition-colors ${
                    hoveredRow === index ? 'bg-background' : index % 2 === 0 ? 'bg-card' : 'bg-background'
                  }`}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                  <td className="py-4 px-6 text-center text-muted-foreground">
                    {getIcon(row.diy.type)}
                    {row.diy.text}
                  </td>
                  <td className={`py-4 px-6 text-center border-x-2 border-primary bg-primary bg-opacity-5 font-semibold ${
                    hoveredRow === index ? 'bg-opacity-10' : ''
                  }`}>
                    <span className="text-foreground">
                      {getIcon(row.sellerResolve.type)}
                      {row.sellerResolve.text}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-muted-foreground">
                    {getIcon(row.competitor.type)}
                    {row.competitor.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="md:hidden space-y-6">
          {comparisons.map((row, index) => (
            <div key={index} className="bg-background rounded-lg p-4 shadow-md">
              <h3 className="font-semibold text-foreground mb-3 text-lg">{row.feature}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-card rounded">
                  <span className="text-muted-foreground">DIY:</span>
                  <span className="text-muted-foreground flex items-center">
                    {getIcon(row.diy.type)}
                    {row.diy.text}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-primary bg-opacity-10 rounded border-2 border-primary">
                  <span className="font-semibold text-foreground">Seller Resolve:</span>
                  <span className="font-semibold text-foreground flex items-center">
                    {getIcon(row.sellerResolve.type)}
                    {row.sellerResolve.text}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded">
                  <span className="text-muted-foreground">Competitor:</span>
                  <span className="text-muted-foreground flex items-center">
                    {getIcon(row.competitor.type)}
                    {row.competitor.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-foreground mb-4">
            Ready to protect your account with transparent, all-inclusive monitoring?
          </p>
          <a
            href="#pricing-calculator"
            className="inline-block bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Calculate Your Tier
          </a>
        </div>
      </div>
    </section>
  );
};
