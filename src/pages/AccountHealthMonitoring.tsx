import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Shield,
  Clock,
  FileCheck,
  Upload,
  AlertTriangle,
  TrendingUp,
  Users,
  Award,
  Target,
  Zap,
  DollarSign,
} from "lucide-react";

const AccountHealthMonitoring = () => {
  const [revenue, setRevenue] = useState("");
  const [calculatedTier, setCalculatedTier] = useState<{
    tier: string;
    price: string;
    violations: string;
  } | null>(null);

  const calculateTier = () => {
    const revenueNum = parseInt(revenue.replace(/,/g, ""));
    if (revenueNum < 50000) {
      setCalculatedTier({
        tier: "Consultation Recommended",
        price: "Contact us",
        violations: "N/A",
      });
    } else if (revenueNum >= 50000 && revenueNum < 250000) {
      setCalculatedTier({
        tier: "Essential Protection",
        price: "$599",
        violations: "15",
      });
    } else if (revenueNum >= 250000 && revenueNum < 1000000) {
      setCalculatedTier({
        tier: "Complete Coverage",
        price: "$1,299",
        violations: "35",
      });
    } else {
      setCalculatedTier({
        tier: "Unlimited Protection",
        price: "$2,499",
        violations: "60",
      });
    }
  };

  const formatRevenue = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatRevenue(e.target.value);
    setRevenue(formatted);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-4">
                ACCOUNT HEALTH MONITORING
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Protect Your Amazon Account BEFORE Violations Become Suspensions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Daily violation monitoring + expert POA handling for $599–$2,499/month. No
                contracts. No assessment calls. No games.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-xl transition-all duration-200"
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  See Your Recommended Tier
                </Button>
              </div>
              <a
                href="#contact"
                className="text-gray-300 underline text-sm hover:text-white transition-colors"
              >
                Or schedule a 15-minute consultation
              </a>
              <p className="text-sm text-gray-400 mt-6">
                Trusted by sellers protecting millions in monthly Amazon revenue | No contracts
                required
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-card border-b border-border py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
            </div>
            <p className="text-sm text-muted-foreground">
              From sellers who've been where you are
            </p>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <p className="text-sm text-muted-foreground">Former Amazon team members</p>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <p className="text-sm text-muted-foreground">60-day money-back guarantee</p>
          </div>
          <Card className="mt-4 bg-background/50 border-border">
            <div className="px-6 py-4">
              <p className="text-base italic text-foreground">
                "After Seller Resolve saved my account, I signed up for monitoring - haven't
                had a single suspension in 18 months."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — Michael R., Private Label Seller
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="bg-background py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            You Just Survived a Suspension. Now What?
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              The next 90 days are the most critical. Amazon is watching your account 10x more
              closely. Any new violation during this period makes re-suspension far more likely
              - and the second suspension is harder to overturn.
            </p>
            <p>
              We've seen sellers pay $3,950 for reinstatement, then get suspended again 6 weeks
              later. That's $8,000 in two months - plus lost revenue both times.
            </p>
            <p className="text-xl font-semibold text-foreground mt-6">
              Our monitoring service exists to ensure you never go through that nightmare again.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Set It. Forget It. We Handle Everything.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative p-8 hover:shadow-xl transition-shadow duration-300">
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary opacity-20">
                01
              </span>
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                We Check Your Account Every Single Day
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                No hoping you catch violations before they escalate. We log into your Seller
                Central daily through Amazon's Preferred Vendor Network and identify every
                violation within 24 hours.
              </p>
            </Card>

            <Card className="relative p-8 hover:shadow-xl transition-shadow duration-300">
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary opacity-20">
                02
              </span>
              <FileCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Custom POAs Written by Former Amazon Insiders
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                No templates. Every Plan of Action addresses the specific violation with proper
                documentation, root cause analysis, and prevention measures Amazon expects to
                see. We draft it - you approve it.
              </p>
            </Card>

            <Card className="relative p-8 hover:shadow-xl transition-shadow duration-300">
              <span className="absolute top-4 right-4 text-6xl font-bold text-primary opacity-20">
                03
              </span>
              <Upload className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Hands-Off Resolution at Every Tier
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unlike competitors who make you do the submission work, we handle everything
                from initial response to follow-up communication. You get email updates, we do
                the heavy lifting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">
            Choose Your Protection Level
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Revenue-based pricing that scales with your business. No hidden fees. No assessment
            calls required.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Tier 1: Essential */}
            <Card className="p-8 border-2 border-border hover:border-primary transition-colors">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-foreground">$599</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  $50K–$250K monthly revenue
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Essential Protection
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Daily violation monitoring (24/7 coverage)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Up to 15 violations resolved per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    POA drafting + submission on your behalf
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Weekly AI-generated account health reports
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Email support (24-hour response time)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Live violation tracking access
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-[hsl(var(--deep-navy))] hover:bg-[hsl(var(--deep-navy))]/90 text-white py-6">
                Start Essential Protection
              </Button>
            </Card>

            {/* Tier 2: Complete (Most Popular) */}
            <Card className="p-8 border-4 border-primary relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR - 70% choose this
                </span>
              </div>
              <div className="mb-6 mt-4">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-foreground">$1,299</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  $250K–$1M monthly revenue
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Complete Coverage</h3>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                Everything in Essential, plus:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Up to 35 violations resolved per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Priority handling during Q4/Prime Day
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Daily status updates during active violations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Quarterly proactive compliance audit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Phone/video support available
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Dedicated account manager
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6">
                Start Complete Coverage
              </Button>
            </Card>

            {/* Tier 3: Unlimited */}
            <Card className="p-8 border-2 border-border hover:border-primary transition-colors">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-foreground">$2,499</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  $1M+ monthly revenue
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Unlimited Protection
              </h3>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                Everything in Complete, plus:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Up to 60 violations resolved per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Daily check-ins during any active violation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Monthly 30-minute strategy call
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Bi-annual deep-dive compliance audit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Direct phone/text line to account manager
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Executive escalation handling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Priority queue for all POA drafting
                  </span>
                </li>
              </ul>
              <Button className="w-full bg-[hsl(var(--deep-navy))] hover:bg-[hsl(var(--deep-navy))]/90 text-white py-6">
                Start Unlimited Protection
              </Button>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <Card className="inline-block bg-muted/30 border-border">
              <p className="text-sm text-muted-foreground px-6 py-4">
                Need more violation capacity? Additional violations handled at $149 each beyond
                your tier limit.
              </p>
            </Card>
            <div>
              <a
                href="#contact"
                className="text-sm text-primary underline hover:text-primary/80 transition-colors"
              >
                Doing $5M+ monthly or managing multiple accounts? Custom enterprise pricing
                available →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-gradient-to-br from-primary/5 to-card py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Not Sure Which Tier Fits Your Business?
          </h2>
          <Card className="p-8 shadow-xl">
            <label className="text-lg font-medium text-foreground mb-3 block">
              Enter your monthly revenue:
            </label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">
                $
              </span>
              <Input
                type="text"
                value={revenue}
                onChange={handleRevenueChange}
                placeholder="250,000"
                className="text-2xl px-12 py-6 border-2 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all w-full"
              />
            </div>
            <Button
              onClick={calculateTier}
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 mt-4"
              disabled={!revenue}
            >
              Calculate My Tier
            </Button>

            {calculatedTier && (
              <div className="mt-8 p-6 bg-primary/10 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
                <p className="text-lg text-foreground mb-4">
                  {calculatedTier.tier === "Consultation Recommended" ? (
                    <>
                      Based on your revenue, we recommend scheduling a consultation to
                      determine if monitoring is right for your business size.
                    </>
                  ) : (
                    <>
                      Based on ${revenue} monthly revenue, we recommend{" "}
                      <strong>{calculatedTier.tier}</strong> which includes{" "}
                      {calculatedTier.violations} violations per month and costs{" "}
                      <strong>{calculatedTier.price}/month</strong>.
                    </>
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Get started with {calculatedTier.tier}
                  </Button>
                  <Button variant="outline" className="border-primary text-primary">
                    Schedule a call to discuss
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Differentiation/Comparison Section */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Why Seller Resolve vs. Doing It Yourself (Or Hiring Competitors)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[hsl(var(--deep-navy))] text-white">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-left font-semibold">DIY Monitoring</th>
                  <th className="py-4 px-6 text-left font-semibold border-2 border-primary">
                    Seller Resolve
                  </th>
                  <th className="py-4 px-6 text-left font-semibold">Competitor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card">
                  <td className="py-4 px-6 font-medium">Daily violation checks</td>
                  <td className="py-4 px-6">
                    <span className="text-red-500">❌</span> Only when you remember
                  </td>
                  <td className="py-4 px-6 border-x-2 border-primary">
                    <span className="text-accent">✅</span> Guaranteed every day
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-accent">✅</span> Guaranteed every day
                  </td>
                </tr>
                <tr className="bg-background">
                  <td className="py-4 px-6 font-medium">Professional POA drafting</td>
                  <td className="py-4 px-6">
                    <span className="text-red-500">❌</span> You're on your own
                  </td>
                  <td className="py-4 px-6 border-x-2 border-primary">
                    <span className="text-accent">✅</span> Included all tiers
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-accent">✅</span> Included
                  </td>
                </tr>
                <tr className="bg-card">
                  <td className="py-4 px-6 font-medium">POA submission handling</td>
                  <td className="py-4 px-6">
                    <span className="text-red-500">❌</span> You submit yourself
                  </td>
                  <td className="py-4 px-6 border-x-2 border-primary">
                    <span className="text-accent">✅</span> We submit for you
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-red-500">❌</span> You submit (at normal tier)
                  </td>
                </tr>
                <tr className="bg-background">
                  <td className="py-4 px-6 font-medium">Transparent pricing</td>
                  <td className="py-4 px-6">N/A</td>
                  <td className="py-4 px-6 border-x-2 border-primary">
                    <span className="text-accent">✅</span> Published online
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-red-500">❌</span> Assessment required
                  </td>
                </tr>
                <tr className="bg-card">
                  <td className="py-4 px-6 font-medium">Starting price</td>
                  <td className="py-4 px-6">$0 (but costs you sleep)</td>
                  <td className="py-4 px-6 border-x-2 border-primary font-semibold text-primary">
                    $599/month
                  </td>
                  <td className="py-4 px-6">~$1,200/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-16 text-center">
            Why Sellers Choose Seller Resolve
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Radical Transparency - See Exactly What We're Monitoring
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                View-only access to your personalized violation tracking system. No black boxes.
                No wondering what we're doing. Real-time visibility into every issue we're
                handling.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Post-Reinstatement Protection
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Amazon watches your account 10x more closely after reinstatement. We monitor
                24/7 during this high-risk period so you never get suspended again. Most
                post-reinstatement clients stay with us permanently for peace of mind.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                24-Hour Response Time at Every Tier
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you're on Essential or Unlimited, we respond to every violation within
                24 hours. No tiered response times. No VIP-only speed. Fast resolution is
                standard, not premium.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                We Submit Everything On Your Behalf
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unlike competitors who make you handle submissions at lower tiers, we draft AND
                submit all POAs from day one. You focus on running your business. We handle
                Amazon.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Pricing That Scales With Your Business Size
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                No opaque assessments. No surprise fees. Simple revenue-based tiers so you pay
                what's fair relative to what we're protecting. Know your cost immediately.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Catch Problems Before Amazon Does
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Complete and Unlimited tiers include quarterly or bi-annual compliance audits of
                your entire catalog. We identify policy violations before Amazon flags them,
                preventing issues rather than just reacting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            GUARANTEE
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The Only Amazon Monitoring Service With a Reinstatement Guarantee
          </h2>
          <Card className="bg-white/10 border-2 border-white/20 backdrop-blur-sm">
            <div className="p-8">
              <p className="text-2xl font-semibold text-white mb-4">
                If you're suspended while on our monitoring service and following our guidance,
                we'll handle the reinstatement at no additional charge.
              </p>
              <p className="text-lg text-gray-300">
                That's how confident we are. We're not just monitoring - we're taking
                responsibility for your account health.
              </p>
            </div>
          </Card>
          <p className="text-sm text-gray-400 mt-6">
            *Applies to violations we were actively monitoring. Requires timely document
            submission and implementation of recommended SOPs. See terms for full details.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Questions About Account Health Monitoring
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                How is this different from doing it myself?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                You could monitor your own account - many sellers try. The problem is
                consistency and expertise. Most sellers don't log in daily, miss critical
                violations, or don't know which issues are urgent vs. cosmetic. By the time they
                notice, it's escalated. We guarantee daily checks, expert POA drafting, and full
                submission handling so you never miss anything.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                What if I'm not sure which tier I need?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                Start with your monthly revenue - that's the primary factor. If you're doing
                $50K-$250K/month, Essential is probably right. $250K-$1M = Complete Coverage.
                $1M+ = Unlimited. Then consider your typical violation volume. Most wholesale
                sellers need higher tiers due to IP/authenticity volume, while private label
                brands often start at Essential but value Unlimited's proactive audits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                Do you require a contract?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                No. Month-to-month service. Cancel anytime with 30 days notice. We earn your
                business every month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                What happens if I get suspended while using your service?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                If you're following our guidance (providing requested documents within 48 hours,
                implementing recommended changes) and Amazon suspends you for an issue we were
                monitoring, we handle the reinstatement at no additional charge. This guarantee
                is standard across all tiers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                Can I switch tiers if my business grows?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                Absolutely. Most clients upgrade within 6-12 months as revenue increases. You can
                change tiers anytime - we just need 7 days notice to adjust billing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                What if I go over my violation limit?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                We handle overages at $149 per violation. If you consistently exceed your tier
                limit, we'll recommend upgrading to the next tier. You can also purchase
                additional violation packs (10 for $899) during seasonal spikes like Q4.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-4">
                How quickly will I see my first report?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-4">
                Your first weekly report arrives within 7 days of onboarding. You'll get
                immediate access to your live violation tracking sheet on day 1, and we start
                monitoring within 24 hours of receiving Seller Central access.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            From Sellers Who've Been Where You Are
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border border-border p-8">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-base text-foreground leading-relaxed italic mb-4">
                "After paying $3,950 to get my account back, signing up for monitoring at
                $599/month was the easiest decision I've ever made. Haven't had a single issue
                in 18 months. Worth every penny for peace of mind."
              </p>
              <p className="text-sm font-semibold text-foreground">— Sarah K.</p>
              <p className="text-sm text-muted-foreground">Private Label Brand</p>
              <p className="text-sm text-muted-foreground">$400K/month revenue</p>
            </Card>

            <Card className="bg-background border border-border p-8">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-base text-foreground leading-relaxed italic mb-4">
                "We were getting 30-40 violations a month - mostly IP and authenticity
                challenges. Complete Coverage handles everything. We don't even think about
                account health anymore."
              </p>
              <p className="text-sm font-semibold text-foreground">— David L.</p>
              <p className="text-sm text-muted-foreground">Wholesale Distributor</p>
              <p className="text-sm text-muted-foreground">$800K/month revenue</p>
            </Card>

            <Card className="bg-background border border-border p-8">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-base text-foreground leading-relaxed italic mb-4">
                "The bi-annual compliance audits in Unlimited Protection have saved us from what
                would've been catastrophic suspensions. They caught listing policy violations
                before Amazon did. Easily worth the $2,499/month."
              </p>
              <p className="text-sm font-semibold text-foreground">— Jennifer M.</p>
              <p className="text-sm text-muted-foreground">Private Label Brand</p>
              <p className="text-sm text-muted-foreground">$2.5M/month revenue</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            Who Benefits Most From Account Health Monitoring
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card p-8 border-l-4 border-primary">
              <AlertTriangle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Just Got Your Account Back?
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                The 90 days after reinstatement are the highest-risk period. Amazon is watching
                closely. Any new violation is more likely to trigger re-suspension - and the
                second suspension is harder to overturn. Monitoring ensures you never go through
                that nightmare again.
              </p>
            </Card>

            <Card className="bg-card p-8 border-l-4 border-primary">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Managing 50+ SKUs and Getting Constant IP Challenges?
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Wholesale operations face relentless violation volume - IP complaints,
                authenticity challenges, invoice requests. Complete Coverage and Unlimited tiers
                are designed specifically for high-volume catalogs with 35-60 violations/month
                capacity.
              </p>
            </Card>

            <Card className="bg-card p-8 border-l-4 border-primary">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Protecting a 7-Figure Brand?
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                When each ASIN suspension costs $10K-$20K+ in daily revenue, $2,499/month for
                Unlimited Protection is a rounding error. Bi-annual compliance audits prevent
                violations before they happen. Direct access to account managers during crises.
                This is white-glove protection for high-stakes sellers.
              </p>
            </Card>

            <Card className="bg-card p-8 border-l-4 border-primary">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Selling Topical, Ingestible, or Children's Products?
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                High-regulation categories face constant scrutiny. Safety complaints, MSDS
                requirements, COA requests, and manufacturing documentation challenges. Our team
                knows exactly what Amazon's looking for in these complex cases.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Let Your Next Violation Become a Suspension
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            24/7 monitoring + expert POA handling starting at $599/month. Get started in under 5
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-xl"
              onClick={() =>
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See Your Recommended Tier
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--deep-navy))] px-10 py-6 text-lg"
            >
              Talk to an Account Health Expert
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-8 mb-8">
            No contracts. No hidden fees. Cancel anytime. 60-day money-back guarantee if you're
            not completely satisfied.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-lg">🔒</span>
              <span>Your Seller Central access secured through Amazon's official PVN</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-lg">✓</span>
              <span>Free reinstatement if suspended while following guidance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-lg">⚡</span>
              <span>24-hour response time guaranteed at all tiers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountHealthMonitoring;
