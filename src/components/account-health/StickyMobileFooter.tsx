import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const StickyMobileFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling past hero (approximately 800px)
      if (currentScrollY > 800) {
        // Show when scrolling down, hide when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToWizard = () => {
    const wizard = document.getElementById('protection-wizard');
    wizard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card shadow-2xl border-t border-border transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-foreground">From $599/month</div>
          <div className="text-xs text-muted-foreground">Protect your account now</div>
        </div>
        <Button 
          onClick={scrollToWizard}
          className="bg-primary hover:bg-blue-600 text-white px-6 py-2 h-auto font-semibold"
        >
          Find Your Plan
        </Button>
      </div>
    </div>
  );
};
