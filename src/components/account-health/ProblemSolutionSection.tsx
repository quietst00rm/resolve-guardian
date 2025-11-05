import { DollarSign, AlertTriangle, Banknote, CheckCircle } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              THE PROBLEM
            </div>
            
            <h2 className="text-4xl font-bold text-foreground">
              When Amazon Suspends You, Your Business Stops
            </h2>
            
            {/* Stat Callout Card */}
            <div className="bg-card p-8 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="text-6xl font-bold text-foreground mb-2">
                $0
              </div>
              <div className="text-base text-muted-foreground">
                What you make per day while suspended
              </div>
            </div>
          </div>

          {/* Right Column - Problem Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-l-4 border-yellow-500 animate-fade-in">
              <AlertTriangle className="h-10 w-10 text-yellow-500 mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Suspension means zero revenue, frozen inventory, and delayed payments
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every day your account is down, you're losing thousands in revenue you'll never recover. Amazon holds your funds. Your cash flow craters. Your business is in survival mode.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-l-4 border-red-500 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Banknote className="h-10 w-10 text-red-500 mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Post-reinstatement, you're one violation away from doing it all again
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                The 90-day watch period is brutal. Any new violation gets treated 10x more harshly. Second suspensions are exponentially harder to overturn.
              </p>
            </div>

            {/* Card 3 - Solution */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-l-4 border-accent animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CheckCircle className="h-10 w-10 text-accent mb-3" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Monitoring costs $599/month. Being suspended costs everything.
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We catch violations in the critical window before they become suspensions. Your revenue stream stays live. Your business stays operational. The math isn't complicated.
              </p>
              <a href="#how-it-works" className="text-primary hover:underline font-medium inline-flex items-center gap-2 mt-4">
                See how it works
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
