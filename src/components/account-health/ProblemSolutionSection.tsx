import { DollarSign } from "lucide-react";

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
              You Just Survived a Suspension. Now What?
            </h2>
            
            {/* Stat Callout Card */}
            <div className="bg-card p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <div className="text-5xl font-bold text-foreground mb-2 flex items-center gap-2">
                <DollarSign className="h-10 w-10" />
                8,000
              </div>
              <div className="text-sm text-muted-foreground">
                Average cost of two suspensions in 60 days
              </div>
            </div>
          </div>

          {/* Right Column - Problem Cards */}
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-l-4 border-yellow-500 animate-fade-in">
              <div className="text-4xl mb-3">⚠️</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Amazon watches you 10x closer post-reinstatement
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Any new violation during the 90-day watch period makes re-suspension far more likely - and harder to overturn.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-l-4 border-red-500 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                $3,950 reinstatement, then suspended again in 6 weeks
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We've seen this pattern repeatedly. Pay for reinstatement, breathe easy, then get hit again.
              </p>
            </div>

            {/* Card 3 - Solution */}
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-l-4 border-accent animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Our monitoring service ensures you never go through that nightmare again
              </h3>
              <a href="#how-it-works" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
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
