import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="spotlight-gradient py-24">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest">
            <Shield className="h-4 w-4" />
            OUR GUARANTEE
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          The Only Amazon Monitoring Service With a Reinstatement Guarantee
        </h2>

        {/* Featured Statement Box */}
        <div className="glass-morphism rounded-2xl p-10 mb-8 relative">
          {/* Large Quote Marks */}
          <div className="text-6xl text-primary opacity-20 absolute top-4 left-4">"</div>
          
          <div className="relative z-10">
            <p className="text-2xl font-semibold text-white leading-relaxed mb-6">
              If you're suspended while on our monitoring service and following our guidance, we'll handle the reinstatement at no additional charge.
            </p>
            <p className="text-lg text-gray-300">
              That's how confident we are. We're not just monitoring - we're taking responsibility for your account health.
            </p>
          </div>
        </div>

        {/* Fine Print */}
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-8">
          *Applies to violations we were actively monitoring. Requires timely document submission and implementation of recommended SOPs. See terms for full details.
        </p>

        {/* CTA */}
        <Button 
          onClick={scrollToCalculator}
          size="lg"
          className="bg-primary hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold h-auto shadow-2xl transform hover:scale-105 transition-all"
        >
          See Pricing
        </Button>
      </div>
    </section>
  );
};
