import { Button } from "@/components/ui/button";
import { Shield, Check, Zap } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export const FinalCTA = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };
  return <section className="hero-gradient-animated py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Logo variant="white" size="md" />
        </div>
        
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-semibold">
          READY TO PROTECT YOUR ACCOUNT?
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Don't Let Your Next Violation Become a Suspension
        </h2>

        {/* Subheadline */}
        <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
          24/7 monitoring + expert POA handling starting at $599/month. Protect your revenue proactively.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <Button size="lg" onClick={scrollToCalculator} className="bg-primary hover:bg-blue-600 text-white px-12 py-6 text-xl font-bold h-auto shadow-2xl transform hover:scale-105 transition-all">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white px-12 py-6 text-xl font-semibold h-auto transition-all text-slate-800">
            Talk to an Expert
          </Button>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Shield className="h-5 w-5" />
            <span>American-based team with Amazon expertise</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Check className="h-5 w-5" />
            <span>Address violations within 24 hours</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="h-5 w-5" />
            <span>POA drafting and submission included</span>
          </div>
        </div>

        {/* Reassurance Text */}
        <p className="text-sm text-gray-500">
          No contracts • No hidden fees • Cancel anytime with 30 days notice
        </p>
      </div>
    </section>;
};