import { useState } from "react";
import { Monitor, FileText, Upload, ChevronDown } from "lucide-react";

export const VisualProcessFlow = () => {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const steps = [
    {
      number: "01",
      icon: Monitor,
      title: "We Check Daily",
      description: "Log into your Seller Central daily. Identify violations within 24 hours.",
      expandedContent: "Our team logs into your Seller Central account daily to conduct thorough manual reviews of your account health, performance metrics, notifications, and listings. We identify potential violations and issues within 24 hours, giving you the fastest possible response time to protect your account."
    },
    {
      number: "02",
      icon: FileText,
      title: "Expert POAs Crafted From 8,500+ Successful Cases",
      description: "Zero templates. Every appeal engineered using proven frameworks that have achieved 94% success across every violation type.",
      expandedContent: "Our reinstatement specialists have successfully reversed 8,500+ suspensions, giving us unmatched insight into what Amazon actually approves. We've documented every successful appeal pattern, every rejection reason, and every policy nuance. This data-driven approach means your POA includes the exact elements Amazon requires: comprehensive root cause analysis, detailed corrective actions with evidence, and bulletproof preventive measures that demonstrate long-term compliance."
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
            const isExpanded = expandedSteps.has(index);
            
            return (
              <div key={index} className="relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl relative z-10 transition-transform duration-300 hover:scale-105">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
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
                    onClick={() => toggleStep(index)}
                    className="group relative inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary font-medium transition-all duration-300 hover:shadow-md"
                  >
                    <span>Learn More</span>
                    <ChevronDown className={`h-4 w-4 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''} group-hover:translate-y-0.5`} />
                  </button>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                    <div className="relative bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20 p-6 rounded-xl text-left shadow-lg">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-blue-600 rounded-l-xl"></div>
                      <p className="text-sm text-foreground/80 leading-relaxed pl-3 mb-4">
                        {step.expandedContent}
                      </p>
                      
                      {/* Metric Badges - Only for Step 02 */}
                      {index === 1 && (
                        <div className="flex flex-wrap gap-3 mt-4 pl-3">
                          {/* Badge 1: POAs Approved */}
                          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#10B98120] border border-[#10B981]/30">
                            <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs font-semibold text-[#047857]">8,500+ POAs Approved</span>
                          </div>
                          
                          {/* Badge 2: Success Rate */}
                          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#3B82F620] border border-[#3B82F6]/30">
                            <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-xs font-semibold text-[#1E40AF]">98.7% Success Rate</span>
                          </div>
                          
                          {/* Badge 3: Every Violation Type */}
                          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#8B5CF620] border border-[#8B5CF6]/30">
                            <svg className="w-4 h-4 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-xs font-semibold text-[#6D28D9]">Every Violation Type</span>
                          </div>
                        </div>
                      )}
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
