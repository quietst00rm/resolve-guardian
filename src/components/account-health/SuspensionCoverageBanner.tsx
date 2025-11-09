import { Shield, Check } from "lucide-react";

export const SuspensionCoverageBanner = () => {
  return (
    <section className="py-12 bg-primary/5 border-y-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Shield Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Every Plan Includes Full Suspension Protection
            </h2>
            <p className="text-base text-muted-foreground mb-4 max-w-3xl">
              If your account gets suspended, we immediately write your Plan of Action at no additional cost. Expert reinstatement support included in all monitoring plans.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-primary rounded-full">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Expert POA Writing</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-primary rounded-full">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">24-Hour Response</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-primary rounded-full">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Unlimited Revisions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
