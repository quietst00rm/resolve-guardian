import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
export const AnimatedGradientHero = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center hero-gradient-animated overflow-hidden">
      {/* Subtle pattern overlay */}
      

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center">
            {/* Logo */}
            <div className="animate-fade-in">
              <Logo variant="white" size="md" />
            </div>
            
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
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" onClick={scrollToCalculator} className="bg-primary hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 h-auto">
                Find Your Protection Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a href="#contact" className="text-gray-400 hover:text-white underline transition-colors text-base">
                Or schedule 15-min call →
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-6 items-center justify-center pt-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-base">★★★★★</span>
                <span>4.9/5 from 30+ sellers</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
              <span>Cancel with 30 days notice</span>
              <div className="hidden sm:block h-4 w-px bg-gray-700"></div>
              <span>American-based team</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};