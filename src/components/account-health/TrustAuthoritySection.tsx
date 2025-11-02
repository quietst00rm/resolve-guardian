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
      value: "2,500+",
      label: "Sellers Protected",
      description: "Active accounts monitored daily"
    },
    {
      icon: Shield,
      value: "98.7%",
      label: "Prevention Rate",
      description: "Violations caught before suspension"
    },
    {
      icon: Award,
      value: "12+ Years",
      label: "Amazon Expertise",
      description: "Deep platform knowledge"
    },
    {
      icon: TrendingUp,
      value: "45K+",
      label: "Cases Handled",
      description: "Successful resolutions"
    }
  ];

  const credentials = [
    "Former Amazon Seller Performance Team Members",
    "Certified Amazon Policy Experts",
    "Direct Relationships with Amazon Support Teams",
    "Proprietary Violation Detection Technology",
    "24/7 Account Monitoring Infrastructure"
  ];

  return (
    <section className="spotlight-gradient py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest">
              <Shield className="h-4 w-4" />
              TRUSTED BY THOUSANDS
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
                className="glass-morphism rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
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
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
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
