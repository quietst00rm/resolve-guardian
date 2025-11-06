import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const features = [
  {
    category: "MONITORING & RESPONSE",
    items: [
      {
        name: "Daily violation monitoring",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Violation response time",
        guardian: "72-hour",
        defender: "48-hour",
        fortress: "24-hour",
        empire: "Same day"
      },
      {
        name: "Communication response time",
        guardian: "48-hour",
        defender: "24-hour",
        fortress: "6-hour",
        empire: "2-hour"
      },
      {
        name: "Unlimited violation handling",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Priority violation queue",
        guardian: "—",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Real-time violation updates",
        guardian: "—",
        defender: "—",
        fortress: "—",
        empire: "✓"
      },
      {
        name: "Daily check-ins during violations",
        guardian: "—",
        defender: "—",
        fortress: "✓",
        empire: "✓"
      }
    ]
  },
  {
    category: "EXPERT SUPPORT",
    items: [
      {
        name: "Custom POA drafting & submission",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Email support",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Slack channel support",
        guardian: "—",
        defender: "—",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "WhatsApp support",
        guardian: "—",
        defender: "—",
        fortress: "—",
        empire: "✓"
      },
      {
        name: "Executive hotline access",
        guardian: "—",
        defender: "—",
        fortress: "—",
        empire: "✓"
      }
    ]
  },
  {
    category: "PROACTIVE PROTECTION",
    items: [
      {
        name: "Compliance audit frequency",
        guardian: "Annual",
        defender: "Twice yearly",
        fortress: "Quarterly",
        empire: "Monthly"
      },
      {
        name: "Proactive risk alerts",
        guardian: "—",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Live violation tracking dashboard",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Account health score monitoring",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      }
    ]
  },
  {
    category: "ACCOUNT MANAGEMENT",
    items: [
      {
        name: "Dedicated account manager",
        guardian: "—",
        defender: "—",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Account manager level",
        guardian: "—",
        defender: "—",
        fortress: "Standard",
        empire: "Senior"
      },
      {
        name: "Strategic consulting calls",
        guardian: "—",
        defender: "—",
        fortress: "Quarterly",
        empire: "Monthly"
      },
      {
        name: "Call duration",
        guardian: "—",
        defender: "—",
        fortress: "30 min",
        empire: "60 min"
      },
      {
        name: "Executive escalation handling",
        guardian: "—",
        defender: "—",
        fortress: "—",
        empire: "✓"
      }
    ]
  },
  {
    category: "REPORTING & ANALYTICS",
    items: [
      {
        name: "Weekly account health reports",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      },
      {
        name: "Account Health Rating (AHR) tracking",
        guardian: "✓",
        defender: "✓",
        fortress: "✓",
        empire: "✓"
      }
    ]
  },
  {
    category: "ADDITIONAL SERVICES",
    items: [
      {
        name: "Dedicated Seller Central account access",
        guardian: "—",
        defender: "—",
        fortress: "—",
        empire: "✓"
      }
    ]
  }
];

export const TierComparisonTable = () => {
  const renderCell = (value: string) => {
    if (value === "✓") {
      return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    }
    if (value === "—") {
      return <span className="text-muted-foreground text-lg">—</span>;
    }
    return <span className="font-semibold text-foreground">{value}</span>;
  };

  return (
    <section id="feature-comparison" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compare All Features
          </h2>
          <p className="text-lg text-muted-foreground">
            See exactly what's included in each protection tier
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground font-bold text-base w-[40%]">
                  Feature
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-base text-center w-[15%]">
                  Guardian
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-base text-center w-[15%]">
                  Defender
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-base text-center w-[15%]">
                  Fortress
                </TableHead>
                <TableHead className="text-primary-foreground font-bold text-base text-center w-[15%]">
                  Empire
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((category, categoryIndex) => (
                <>
                  <TableRow key={`category-${categoryIndex}`} className="bg-muted/50 hover:bg-muted/50">
                    <TableCell
                      colSpan={5}
                      className="font-bold text-xs uppercase tracking-wider text-muted-foreground py-3"
                    >
                      {category.category}
                    </TableCell>
                  </TableRow>
                  {category.items.map((item, itemIndex) => (
                    <TableRow
                      key={`${categoryIndex}-${itemIndex}`}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium text-sm py-4">
                        {item.name}
                      </TableCell>
                      <TableCell className="text-center py-4">
                        {renderCell(item.guardian)}
                      </TableCell>
                      <TableCell className="text-center py-4">
                        {renderCell(item.defender)}
                      </TableCell>
                      <TableCell className="text-center py-4">
                        {renderCell(item.fortress)}
                      </TableCell>
                      <TableCell className="text-center py-4">
                        {renderCell(item.empire)}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Scroll horizontally on mobile to see all tiers
          </p>
        </div>
      </div>
    </section>
  );
};
