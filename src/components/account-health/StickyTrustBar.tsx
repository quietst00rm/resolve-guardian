import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const StickyTrustBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling past 100px and scrolling down
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToCalculator = () => {
    const calculator = document.getElementById('pricing-calculator');
    calculator?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo variant="color" size="sm" showText className="hidden sm:flex" />
            <Logo variant="color" size="sm" className="sm:hidden" />
          </div>
          
          <div className="flex-1 text-center">
            <p className="text-sm font-medium text-foreground">
              Trusted by sellers protecting <span className="text-primary font-bold">$7M+</span> monthly revenue
            </p>
          </div>
          
          <Button 
            size="sm" 
            onClick={scrollToCalculator}
            className="bg-primary hover:bg-blue-600 text-white px-4 py-2 h-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
