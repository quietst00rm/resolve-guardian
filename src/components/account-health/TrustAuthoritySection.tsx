import { Button } from "@/components/ui/button";
import { Shield, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

export const TrustAuthoritySection = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const trustMetrics = [
    {
      icon: Users,
      value: "50+",
      label: "Combined Years Experience",
      description: "Amazon platform expertise"
    },
    {
      icon: Shield,
      value: "98.7%",
      label: "Success Rate",
      description: "Violations caught before suspension"
    },
    {
      icon: Award,
      value: "<24 hrs",
      label: "Response Time",
      description: "Emergency escalation"
    },
    {
      icon: TrendingUp,
      value: "8,500+",
      label: "Cases Resolved",
      description: "Successful interventions"
    }
  ];

  const credentials = [
    "Proprietary violation tracking and analysis technology",
    "Direct escalation channels for urgent account issues",
    "24/7 Account Monitoring Infrastructure",
    "White-glove onboarding with dedicated account strategist"
  ];

  return (
    <section className="spotlight-gradient py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest">
              <Shield className="h-4 w-4" />
              TRUSTED BY TOP 100 SELLERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            The Most Trusted Name in Amazon Account Protection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-leading expertise, proven track record, and unmatched results protecting sellers like you.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="glass-morphism rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30 group-hover:shadow-lg group-hover:shadow-primary/50">
                    <Icon className="h-7 w-7 text-primary transition-all duration-300" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-blue-100">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-200 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-400">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials Section */}
        <div className="glass-morphism rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Why Sellers Trust Us With Their Livelihood
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 transition-all duration-200 ease-in-out hover:bg-white/10 hover:translate-x-1 group cursor-pointer"
              >
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 transition-transform duration-400 ease-in-out group-hover:rotate-360" />
                <span className="text-gray-200">{credential}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={scrollToCalculator}
            size="lg"
            className="bg-primary hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold h-auto shadow-2xl transform hover:scale-105 transition-all"
          >
            Get Protected Today
          </Button>
        </div>
      </div>
    </section>
  );
};
