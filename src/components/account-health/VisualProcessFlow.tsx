import { useState } from "react";
import { Monitor, FileText, Upload, ChevronDown } from "lucide-react";

export const VisualProcessFlow = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: Monitor,
      title: "We Check Daily",
      description: "Log into your Seller Central through Amazon's Preferred Vendor Network. Identify violations within 24 hours.",
      expandedContent: "We access your account through Amazon's official Preferred Vendor Network, ensuring complete security and compliance. Our automated system runs comprehensive checks across all your listings, performance metrics, and notifications daily."
    },
    {
      number: "02",
      icon: FileText,
      title: "Custom POAs by Ex-Amazon Insiders",
      description: "No templates. Every Plan of Action addresses the specific violation with proper documentation and prevention measures.",
      expandedContent: "Our team of former Amazon policy specialists drafts each POA from scratch, incorporating the specific details of your violation, your business context, and Amazon's current requirements. Every POA includes root cause analysis, corrective actions, and preventive measures."
    },
    {
      number: "03",
      icon: Upload,
      title: "We Submit For You",
      description: "Hands-off resolution. We draft, you approve, we submit. Email updates, no heavy lifting.",
      expandedContent: "Unlike competitors who make you handle submissions, we manage the entire process. You receive the POA for review and approval, then we handle all submission, follow-up, and communication with Amazon. You stay informed via email updates while we do the work."
    }
  ];

  return (
    <section id="how-it-works" className="bg-card py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Set It. Forget It. We Handle Everything.
          </h2>
          <p className="text-xl text-muted-foreground">
            Three-step protection that runs on autopilot
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary" style={{ 
            width: 'calc(100% - 200px)', 
            marginLeft: '100px',
            background: 'repeating-linear-gradient(to right, hsl(var(--primary)) 0, hsl(var(--primary)) 10px, transparent 10px, transparent 20px)'
          }}>
            {/* Animated dot */}
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" style={{
              animation: 'dot-travel 4s linear infinite',
              left: '0'
            }}></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === index;
            
            return (
              <div key={index} className="relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Expandable Section */}
                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : index)}
                    className="text-primary hover:underline font-medium inline-flex items-center gap-2 mt-4 transition-all"
                  >
                    See example
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-background p-4 rounded-lg text-left text-sm text-muted-foreground leading-relaxed">
                      {step.expandedContent}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
