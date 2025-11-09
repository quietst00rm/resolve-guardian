import { ShieldCheck, Check } from "lucide-react";

export const SuspensionCoverageBanner = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[hsl(217,91%,97%)] border-2 border-primary rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Shield Icon */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <ShieldCheck className="h-16 w-16 text-primary" strokeWidth={1.5} />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Every Plan Includes Full Suspension Protection
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                If your account gets suspended, we immediately write your Plan of Action at no additional cost. 
                Expert reinstatement support is included in all monitoring plans.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border-2 border-primary rounded-full">
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Expert POA Writing</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border-2 border-primary rounded-full">
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">48-Hour Turnaround</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border-2 border-primary rounded-full">
                  <Check className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Unlimited Revisions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
