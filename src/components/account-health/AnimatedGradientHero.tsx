import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingDashboard } from "./FloatingDashboard";

export const AnimatedGradientHero = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient-animated overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Eyebrow Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-900 bg-opacity-20 text-blue-400 border border-blue-800">
                ACCOUNT HEALTH MONITORING
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Protect Your Amazon Account <span className="text-blue-400">BEFORE</span> Violations Become Suspensions
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Daily violation monitoring + expert POA handling for $599–$2,499/month. No contracts. No assessment calls. No games.
            </p>

            {/* CTA Container */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                size="lg"
                onClick={scrollToCalculator}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 h-auto"
              >
                Calculate Your Tier
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-white underline transition-colors text-base"
              >
                Or schedule 15-min call →
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-6 items-center pt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-base">★★★★★</span>
                <span>4.9/5 from 200+ sellers</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
              <span>No contracts • 60-day guarantee</span>
              <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
              <span>Former Amazon team</span>
            </div>
          </div>

          {/* Right Column - Floating Dashboard */}
          <div className="relative">
            <FloatingDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};
