import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormAnswers {
  asins: string;
  suspendedBefore: string;
  violations: string;
  revenue: string;
  sellerType: string;
  brandRegistry: string;
  fulfillment: string;
  email: string;
  accountAge: string;
  ipComplaints: string;
  violationTypes: string[];
  phone: string;
}

interface Tier {
  name: string;
  price: number;
  features: string[];
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  type: "monthly" | "onetime";
}

const tiers: Record<string, Tier> = {
  GUARDIAN: {
    name: "Guardian",
    price: 349,
    features: [
      "72-hour violation response time",
      "48-hour communication response time",
      "Annual compliance audit",
      "Email support",
      "Daily violation monitoring",
      "Unlimited violation handling",
      "POA drafting and submission",
      "Weekly account health reports"
    ]
  },
  DEFENDER: {
    name: "Defender",
    price: 899,
    features: [
      "48-hour violation response time",
      "24-hour communication response time",
      "Twice-yearly compliance audits",
      "Email support",
      "Daily violation monitoring",
      "Unlimited violation handling",
      "POA drafting and submission",
      "Weekly account health reports"
    ]
  },
  FORTRESS: {
    name: "Fortress",
    price: 2199,
    features: [
      "24-hour violation response time",
      "6-hour communication response time",
      "Quarterly compliance audits",
      "Email + Dedicated Slack channel",
      "Dedicated account manager",
      "Daily violation monitoring",
      "Unlimited violation handling",
      "POA drafting and submission",
      "Weekly account health reports",
      "Quarterly 30-minute strategy calls"
    ]
  },
  EMPIRE: {
    name: "Empire",
    price: 5999,
    features: [
      "Same-day violation response time",
      "2-hour communication response time",
      "Monthly compliance audits",
      "Email + WhatsApp + Dedicated Slack + Executive hotline",
      "Dedicated account manager",
      "Daily violation monitoring",
      "Unlimited violation handling",
      "POA drafting and submission",
      "Weekly account health reports",
      "Monthly 60-minute strategy sessions"
    ]
  }
};

const addOnsByTier: Record<string, AddOn[]> = {
  GUARDIAN: [
    {
      id: "faster-response-guardian",
      name: "FASTER VIOLATION RESPONSE",
      price: 199,
      description: "Upgrade to 48-hour violation response time",
      type: "monthly"
    },
    {
      id: "slack-access",
      name: "SLACK SUPPORT ACCESS",
      price: 299,
      description: "Get dedicated Slack channel for instant communication with our team",
      type: "monthly"
    },
    {
      id: "account-manager",
      name: "DEDICATED ACCOUNT MANAGER",
      price: 599,
      description: "1:1 expert assigned to your account for personalized support",
      type: "monthly"
    },
    {
      id: "audit-report",
      name: "ACCOUNT AUDIT REPORT",
      price: 299,
      description: "Comprehensive account health audit and compliance analysis",
      type: "onetime"
    }
  ],
  DEFENDER: [
    {
      id: "faster-response-defender",
      name: "FASTER VIOLATION RESPONSE",
      price: 199,
      description: "Upgrade to 24-hour violation response time",
      type: "monthly"
    },
    {
      id: "slack-access",
      name: "SLACK SUPPORT ACCESS",
      price: 299,
      description: "Get dedicated Slack channel for instant communication with our team",
      type: "monthly"
    },
    {
      id: "account-manager",
      name: "DEDICATED ACCOUNT MANAGER",
      price: 599,
      description: "1:1 expert assigned to your account for personalized support",
      type: "monthly"
    },
    {
      id: "audit-report",
      name: "ACCOUNT AUDIT REPORT",
      price: 299,
      description: "Comprehensive account health audit and compliance analysis",
      type: "onetime"
    }
  ],
  FORTRESS: [
    {
      id: "faster-response-fortress",
      name: "FASTER VIOLATION RESPONSE",
      price: 199,
      description: "Upgrade to same-day violation response time",
      type: "monthly"
    },
    {
      id: "audit-report",
      name: "ACCOUNT AUDIT REPORT",
      price: 299,
      description: "Comprehensive account health audit and compliance analysis",
      type: "onetime"
    }
  ],
  EMPIRE: [
    {
      id: "audit-report",
      name: "ACCOUNT AUDIT REPORT",
      price: 299,
      description: "Comprehensive account health audit and compliance analysis",
      type: "onetime"
    }
  ]
};

export const ProtectionWizard = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<FormAnswers>({
    asins: "",
    suspendedBefore: "",
    violations: "",
    revenue: "",
    sellerType: "",
    brandRegistry: "",
    fulfillment: "",
    email: "",
    accountAge: "",
    ipComplaints: "",
    violationTypes: [],
    phone: ""
  });
  const [assignedTier, setAssignedTier] = useState<string>("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Helper function to format currency
  const formatCurrency = (value: number): string => {
    return Math.round(value).toLocaleString('en-US');
  };

  // Helper function to abbreviate large numbers for mobile
  const abbreviateNumber = (value: number): string => {
    if (value < 10000) {
      // Numbers under 10,000: Display normally
      return Math.round(value).toLocaleString('en-US');
    } else if (value < 1000000) {
      // Numbers 10,000-999,999: Display as K
      return `${(value / 1000).toFixed(1)}K`;
    } else if (value < 1000000000) {
      // Numbers 1M-999M: Display as M
      return `${(value / 1000000).toFixed(1)}M`;
    } else {
      // Numbers over 1B: Display as B
      return `${(value / 1000000000).toFixed(1)}B`;
    }
  };

  // Helper function to calculate suspension costs
  const calculateSuspensionCosts = (monthlyRevenue: number) => {
    const daily = monthlyRevenue / 30;
    const weekly = monthlyRevenue / 4;
    const monthly = monthlyRevenue;
    const yearly = monthlyRevenue * 12;
    
    return { daily, weekly, monthly, yearly };
  };

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("protectionWizardData");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Ensure violationTypes is always an array
        const loadedAnswers = {
          ...answers,
          ...data.answers,
          violationTypes: Array.isArray(data.answers?.violationTypes) ? data.answers.violationTypes : []
        };
        setAnswers(loadedAnswers);
        setCurrentStep(data.currentStep || 1);
      } catch (e) {
        console.error("Failed to load saved data");
      }
    }
  }, []);

  // Save to localStorage when answers change (but not confirmation screen)
  useEffect(() => {
    if (currentStep !== 15) {
      localStorage.setItem("protectionWizardData", JSON.stringify({
        answers,
        currentStep
      }));
    }
  }, [answers, currentStep]);

  const calculateTier = (monthlyRevenue: number): string => {
    const annualRevenue = monthlyRevenue * 12;
    
    if (annualRevenue < 100000) return "NOT_ELIGIBLE";
    if (annualRevenue >= 100000 && annualRevenue < 1000000) return "GUARDIAN";
    if (annualRevenue >= 1000000 && annualRevenue < 5000000) return "DEFENDER";
    if (annualRevenue >= 5000000 && annualRevenue < 20000000) return "FORTRESS";
    return "EMPIRE";
  };

  const parseRevenue = (value: string): number => {
    return parseFloat(value.replace(/[$,]/g, "")) || 0;
  };

  const formatRevenue = (value: string): string => {
    const numbers = value.replace(/[^0-9]/g, "");
    if (numbers) {
      return "$" + parseInt(numbers).toLocaleString("en-US");
    }
    return "";
  };

  const autoAdvance = (callback: () => void) => {
    setTimeout(() => {
      callback();
      setCurrentStep(currentStep + 1);
    }, 300);
  };

  const handleContinue = () => {
    // Validation for current step
    if (currentStep === 2 && !answers.revenue) return;
    if (currentStep === 11) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answers.email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address",
          variant: "destructive"
        });
        return;
      }
    }

    if (currentStep === 11) {
      // Start analyzing animation
      setIsAnalyzing(true);
      
      // Calculate tier after 4.5 second delay
      setTimeout(() => {
        const revenue = parseRevenue(answers.revenue);
        const tier = calculateTier(revenue);
        
        if (tier === "NOT_ELIGIBLE") {
          setIsAnalyzing(false);
          toast({
            title: "Minimum revenue not met",
            description: "Our plans start at $100K annual revenue. Contact us for custom options.",
            variant: "destructive"
          });
          return;
        }
        
        setAssignedTier(tier);
        setIsAnalyzing(false);
        setCurrentStep(currentStep + 1);
      }, 4500);
      
      return; // Don't immediately move to next step
    }

    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    if (!assignedTier || !tiers[assignedTier]) return 0;
    
    const basePlanPrice = tiers[assignedTier].price;
    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOnsByTier[assignedTier]?.find(a => a.id === addOnId);
      return total + (addOn?.type === "monthly" ? addOn.price : 0);
    }, 0);
    
    return basePlanPrice + addOnsTotal;
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({
      asins: "",
      suspendedBefore: "",
      violations: "",
      revenue: "",
      sellerType: "",
      brandRegistry: "",
      fulfillment: "",
      email: "",
      accountAge: "",
      ipComplaints: "",
      violationTypes: [],
      phone: ""
    });
    setAssignedTier("");
    setSelectedAddOns([]);
    localStorage.removeItem("protectionWizardData");
    
    // Smooth scroll to top of wizard
    document.getElementById("protection-wizard")?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(15);
      
      toast({
        title: "Submission successful!",
        description: "Check your email for details.",
      });
    }, 1500);
  };

  const handleSkipAddOns = () => {
    setSelectedAddOns([]);
    handleSubmit();
  };

  const progressPercentage = isAnalyzing ? 100 : (currentStep / 11) * 100;

  const isStepValid = () => {
    switch (currentStep) {
      case 2: return !!answers.revenue;
      case 11: return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email);
      default: return false;
    }
  };

  return (
    <section id="protection-wizard" className="bg-muted/30 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        {currentStep <= 11 && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Your Protection Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions to receive your personalized tier recommendation and pricing.
            </p>
          </div>
        )}

        {/* Wizard Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl p-12 border border-border min-h-[500px]">
            
            {/* Progress Bar */}
            {currentStep <= 11 && !isAnalyzing && (
              <div className="mb-8">
                <div className="text-center text-sm font-semibold text-muted-foreground mb-3">
                  Step {currentStep} of 11
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}

            {/* Question Steps */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  How many ASINs are you currently managing?
                </label>
                <select
                  value={answers.asins}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAnswers({...answers, asins: value});
                    if (value) {
                      autoAdvance(() => {});
                    }
                  }}
                  className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                >
                  <option value="">Select...</option>
                  <option value="1-10">1-10 ASINs</option>
                  <option value="11-50">11-50 ASINs</option>
                  <option value="51-100">51-100 ASINs</option>
                  <option value="101-500">101-500 ASINs</option>
                  <option value="500+">500+ ASINs</option>
                </select>
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  What is your average monthly revenue on Amazon over the past 12 months?
                </label>
                <input
                  type="text"
                  value={answers.revenue}
                  onChange={(e) => setAnswers({...answers, revenue: formatRevenue(e.target.value)})}
                  placeholder="$50,000"
                  className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Enter your average monthly revenue from Amazon sales
                </p>
              </div>
            )}

            {currentStep === 3 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  How many violations do you receive per month on average?
                </label>
                <select
                  value={answers.violations}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAnswers({...answers, violations: value});
                    if (value) {
                      autoAdvance(() => {});
                    }
                  }}
                  className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                >
                  <option value="">Select...</option>
                  <option value="0">0 violations</option>
                  <option value="1-2">1-2 violations</option>
                  <option value="3-5">3-5 violations</option>
                  <option value="6-10">6-10 violations</option>
                  <option value="10+">10+ violations</option>
                </select>
              </div>
            )}

            {currentStep === 4 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  Have you been suspended before?
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setAnswers({...answers, suspendedBefore: "Yes"});
                      autoAdvance(() => {});
                    }}
                    className={`flex-1 h-20 text-lg font-semibold border-2 rounded-lg transition-all ${
                      answers.suspendedBefore === "Yes"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setAnswers({...answers, suspendedBefore: "No"});
                      autoAdvance(() => {});
                    }}
                    className={`flex-1 h-20 text-lg font-semibold border-2 rounded-lg transition-all ${
                      answers.suspendedBefore === "No"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  What type of seller are you?
                </label>
                <div className="space-y-3">
                  {["Private Label", "Wholesale", "Hybrid", "Dropshipping", "Online/Retail Arbitrage"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setAnswers({...answers, sellerType: type});
                        autoAdvance(() => {});
                      }}
                      className={`w-full h-16 px-6 text-left text-base font-semibold border-2 rounded-lg transition-all min-h-[48px] ${
                        answers.sellerType === type
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  Are you enrolled in Amazon Brand Registry?
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setAnswers({...answers, brandRegistry: "Yes"});
                      autoAdvance(() => {});
                    }}
                    className={`flex-1 h-20 text-lg font-semibold border-2 rounded-lg transition-all min-h-[48px] ${
                      answers.brandRegistry === "Yes"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setAnswers({...answers, brandRegistry: "No"});
                      autoAdvance(() => {});
                    }}
                    className={`flex-1 h-20 text-lg font-semibold border-2 rounded-lg transition-all min-h-[48px] ${
                      answers.brandRegistry === "No"
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            )}

            {currentStep === 7 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  How do you fulfill your Amazon orders?
                </label>
                <div className="space-y-3">
                  {["FBA (Fulfilled by Amazon)", "FBM (Fulfilled by Merchant)", "Both FBA and FBM"].map((method) => (
                    <button
                      key={method}
                      onClick={() => {
                        setAnswers({...answers, fulfillment: method});
                        autoAdvance(() => {});
                      }}
                      className={`w-full h-16 px-6 text-left text-base font-semibold border-2 rounded-lg transition-all min-h-[48px] ${
                        answers.fulfillment === method
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 8 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  How long has your Amazon seller account been active?
                </label>
                <select
                  value={answers.accountAge}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAnswers({...answers, accountAge: value});
                    if (value) {
                      autoAdvance(() => {});
                    }
                  }}
                  className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                >
                  <option value="">Select account age...</option>
                  <option value="<6months">Less than 6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="1-2years">1-2 years</option>
                  <option value="2-5years">2-5 years</option>
                  <option value="5+years">5+ years</option>
                </select>
              </div>
            )}

            {currentStep === 9 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  How many Intellectual Property complaints have you received in the past 6 months?
                </label>
                <select
                  value={answers.ipComplaints}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAnswers({...answers, ipComplaints: value});
                    if (value) {
                      autoAdvance(() => {});
                    }
                  }}
                  className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                >
                  <option value="">Select...</option>
                  <option value="none">None</option>
                  <option value="1-2">1-2 complaints</option>
                  <option value="3-5">3-5 complaints</option>
                  <option value="6-10">6-10 complaints</option>
                  <option value="10+">10+ complaints</option>
                </select>
              </div>
            )}

            {currentStep === 10 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <label className="text-2xl font-semibold text-foreground mb-6 block">
                  Have you received any of these violations in the past 3 months?
                </label>
                
                {/* Violation Reference List */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Product Authenticity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Restricted Product</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Condition Complaints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Dropshipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Product Safety</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Review Manipulation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">Listing Policy</span>
                    </div>
                  </div>
                </div>

                {/* Yes/No Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    onClick={() => {
                      setAnswers({...answers, violationTypes: ["Yes"]});
                      autoAdvance(() => {});
                    }}
                    className={`flex-1 py-4 md:py-3 text-base md:text-lg font-semibold border-2 rounded-lg transition-all min-h-[48px] ${
                      (answers.violationTypes || []).includes("Yes")
                        ? "bg-red-50 text-red-700 border-red-500"
                        : "bg-background border-border text-foreground hover:border-red-400"
                    }`}
                  >
                    Yes, I've received violations
                  </button>
                  <button
                    onClick={() => {
                      setAnswers({...answers, violationTypes: ["No"]});
                      autoAdvance(() => {});
                    }}
                    className={`flex-1 py-4 md:py-3 text-base md:text-lg font-semibold border-2 rounded-lg transition-all min-h-[48px] ${
                      (answers.violationTypes || []).includes("No")
                        ? "bg-green-50 text-green-700 border-green-500"
                        : "bg-background border-border text-foreground hover:border-green-400"
                    }`}
                  >
                    No violations received
                  </button>
                </div>
              </div>
            )}

            {currentStep === 11 && (
              <div className="animate-fade-in">
                <button
                  onClick={handleBack}
                  className="mb-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email Input - Required */}
                  <div>
                    <label className="text-base font-semibold text-foreground mb-2 block">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={answers.email}
                      onChange={(e) => setAnswers({...answers, email: e.target.value})}
                      placeholder="you@yourbusiness.com"
                      className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                    />
                  </div>

                  {/* Phone Input - Optional */}
                  <div>
                    <label className="text-base font-semibold text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={answers.phone}
                      onChange={(e) => setAnswers({...answers, phone: e.target.value})}
                      placeholder="(555) 123-4567"
                      className="w-full h-14 px-4 text-base border-2 border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                    />
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                      📞 Optional
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* AI Analysis Loading Screen */}
            {isAnalyzing && (
              <div className="text-center animate-fade-in py-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Analyzing Your Business Profile
                </h3>
                <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
                  Our AI is evaluating your responses to determine the optimal protection tier...
                </p>
                
                {/* Animated Loader */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"
                    style={{ animationDuration: '1s' }}
                  ></div>
                  <div 
                    className="absolute inset-2 rounded-full border-4 border-transparent border-t-accent animate-spin"
                    style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Analysis Steps */}
                <div className="max-w-md mx-auto space-y-3 text-left">
                  <div className="flex items-center gap-3 text-muted-foreground animate-fade-in">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>Evaluating business metrics...</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Analyzing risk profile...</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>Matching optimal protection tier...</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <span>Generating personalized recommendation...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tier Reveal */}
            {currentStep === 13 && assignedTier && tiers[assignedTier] && (
              <div className="text-center animate-fade-in">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Your Protection Plan
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Based on your business profile, here is your recommended protection tier:
                </p>
                
                <div className="bg-gradient-to-b from-muted to-background border-2 border-primary rounded-2xl p-10 shadow-2xl animate-scale-in">
                  <h4 className="text-4xl font-bold text-primary mb-2">
                    {tiers[assignedTier].name}
                  </h4>
                  <p className="text-3xl font-semibold text-foreground mb-6">
                    ${tiers[assignedTier].price.toLocaleString()}<span className="text-xl">/month</span>
                  </p>
                  
                  {/* Suspension Cost Risk Alert */}
                  {(() => {
                    const monthlyRevenue = parseRevenue(answers.revenue);
                    
                    // Early return if no revenue data
                    if (!monthlyRevenue || monthlyRevenue <= 0) {
                      return null;
                    }
                    
                    const costs = calculateSuspensionCosts(monthlyRevenue);
                    const protectionPrice = tiers[assignedTier].price;
                    
                    // Calculate days of losses per year
                    const annualProtectionCost = protectionPrice * 12;
                    const daysOfLosses = (annualProtectionCost / costs.daily).toFixed(1);
                    
                    // Calculate hours of monthly revenue
                    const hoursOfRevenue = protectionPrice / (monthlyRevenue / 730);
                    
                    // Format hours with appropriate rounding
                    let formattedHours: string;
                    if (hoursOfRevenue >= 100) {
                      // Edge case: over 100 hours
                      formattedHours = "secured";
                    } else if (hoursOfRevenue < 10) {
                      // Under 10 hours: 1 decimal place
                      formattedHours = hoursOfRevenue.toFixed(1);
                    } else {
                      // 10+ hours: whole number
                      formattedHours = Math.round(hoursOfRevenue).toString();
                    }
                    
                    return (
                      <div className="bg-[#FEF2F2] border-2 border-[#FCA5A5] rounded-lg p-3 md:p-4 mb-6">
                        {/* Header - Same on all devices */}
                        <div className="flex items-center gap-2 mb-4">
                          <svg
                            className="w-5 h-5 text-[#DC2626] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <h5 className="text-sm font-semibold text-red-800">
                            Suspension Cost Without Protection
                          </h5>
                        </div>
                        
                        {/* Main Display - Daily Loss (Responsive) */}
                        <div className="text-center mb-3 md:mb-4">
                          {/* Mobile: Split into two lines */}
                          <div className="md:hidden">
                            <p className="text-sm text-red-600 mb-1">💰 Daily Loss:</p>
                            <p className="text-xl font-bold text-red-700">
                              ${abbreviateNumber(costs.daily)}
                            </p>
                          </div>
                          {/* Desktop: Single line */}
                          <p className="hidden md:block text-2xl font-bold text-red-700">
                            💰 Daily Loss: ${formatCurrency(costs.daily)}
                          </p>
                        </div>
                        
                        {/* Divider on mobile only */}
                        <div className="border-b border-red-200 mb-3 md:hidden"></div>
                        
                        {/* Secondary Timeframes - Responsive Layout */}
                        {/* Mobile: Inline with bars */}
                        <div className="md:hidden flex flex-wrap justify-around items-center text-xs mb-3 gap-1">
                          <span className="text-gray-700">
                            📅 Week: <span className="font-medium">${abbreviateNumber(costs.weekly)}</span>
                          </span>
                          <span className="text-gray-400">|</span>
                          <span className="text-gray-700">
                            📆 Month: <span className="font-medium">${abbreviateNumber(costs.monthly)}</span>
                          </span>
                          <span className="text-gray-400">|</span>
                          <span className="text-gray-700">
                            📊 Year: <span className="font-medium">${abbreviateNumber(costs.yearly)}</span>
                          </span>
                        </div>
                        
                        {/* Desktop: 3-Column Grid */}
                        <div className="hidden md:grid md:grid-cols-3 gap-2 mb-4 text-center">
                          <div>
                            <p className="text-sm text-gray-700 mb-1">📅 Weekly</p>
                            <p className="text-base font-medium text-gray-700">
                              ${formatCurrency(costs.weekly)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 mb-1">📆 Monthly</p>
                            <p className="text-base font-medium text-gray-700">
                              ${formatCurrency(costs.monthly)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 mb-1">📊 Yearly</p>
                            <p className="text-base font-medium text-gray-700">
                              ${formatCurrency(costs.yearly)}
                            </p>
                          </div>
                        </div>
                        
                        {/* Hours-Based Value Statement - Responsive Text */}
                        <p className="text-xs italic text-gray-600 text-center">
                          {formattedHours === "secured" ? (
                            // Edge case display
                            <>
                              <span className="md:hidden">💡 Protection investment secured</span>
                              <span className="hidden md:inline">💡 Protection investment secured</span>
                            </>
                          ) : (
                            // Normal hours display
                            <>
                              {/* Mobile: Shortened version */}
                              <span className="md:hidden">
                                💡 Costs {formattedHours} hours of monthly revenue
                              </span>
                              {/* Desktop: Full version */}
                              <span className="hidden md:inline">
                                💡 Protection costs what you earn in {formattedHours} hours per month
                              </span>
                            </>
                          )}
                        </p>
                      </div>
                    );
                  })()}
                  
                  <div className="text-left space-y-3 mb-8">
                    {tiers[assignedTier].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-base text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => setCurrentStep(14)}
                    size="lg"
                    className="w-full"
                  >
                    Continue to Customize →
                  </Button>
                </div>
              </div>
            )}

            {/* Add-On Selection */}
            {currentStep === 14 && assignedTier && (
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold text-foreground mb-2 text-center">
                  Customize Your {tiers[assignedTier].name} Plan
                </h3>
                <p className="text-lg text-muted-foreground mb-6 text-center">
                  Add optional features to enhance your protection
                </p>
                <p className="text-sm text-muted-foreground mb-8 text-center">
                  Your base plan: ${tiers[assignedTier].price.toLocaleString()}/month
                </p>

                <div className="space-y-4 mb-8 max-h-96 overflow-y-auto pr-2">
                  {addOnsByTier[assignedTier]?.map((addOn) => (
                    <button
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`w-full p-6 text-left border-2 rounded-xl transition-all ${
                        selectedAddOns.includes(addOn.id)
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-border bg-background hover:border-primary hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                          selectedAddOns.includes(addOn.id)
                            ? "bg-primary border-primary"
                            : "border-muted"
                        }`}>
                          {selectedAddOns.includes(addOn.id) && (
                            <Check className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-bold uppercase tracking-wide text-foreground mb-1">
                            {addOn.name}
                          </h4>
                          <p className="text-lg font-semibold text-primary mb-2">
                            +${addOn.price.toLocaleString()}{addOn.type === "monthly" ? "/month" : " one-time"}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {addOn.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="bg-muted border-t-2 border-border rounded-b-2xl p-6 -mx-12 -mb-12">
                  <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-foreground mb-2">
                      YOUR TOTAL: ${calculateTotal().toLocaleString()}/month
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Base plan: ${tiers[assignedTier].price.toLocaleString()} • 
                      Selected add-ons: ${(calculateTotal() - tiers[assignedTier].price).toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={handleSkipAddOns}
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      Skip Add-ons
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Complete Submission →"}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Confirmation Screen */}
            {currentStep === 15 && (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <Check className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Submission Complete!
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                  We've received your information. Our team will contact you within 24 hours to finalize your account setup and answer any questions.
                </p>

                <div className="border-t border-border my-8" />

                <div className="bg-muted rounded-xl p-8 text-left mb-8">
                  <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                    YOUR PLAN SUMMARY
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold text-foreground">
                          {tiers[assignedTier]?.name} Plan
                        </span>
                        <span className="text-lg font-semibold text-primary">
                          ${tiers[assignedTier]?.price.toLocaleString()}/month
                        </span>
                      </div>
                      <div className="space-y-2 ml-4">
                        {tiers[assignedTier]?.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-accent" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedAddOns.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-lg font-semibold text-foreground">
                            Selected Add-ons
                          </span>
                          <span className="text-lg font-semibold text-primary">
                            ${(calculateTotal() - (tiers[assignedTier]?.price || 0)).toLocaleString()}/month
                          </span>
                        </div>
                        <div className="space-y-2 ml-4">
                          {selectedAddOns.map(id => {
                            const addOn = addOnsByTier[assignedTier]?.find(a => a.id === id);
                            return addOn ? (
                              <div key={id} className="text-sm text-muted-foreground">
                                + {addOn.name}
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t-2 border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-foreground">TOTAL:</span>
                        <span className="text-2xl font-bold text-primary">
                          ${calculateTotal().toLocaleString()}/month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-muted-foreground mb-6">
                  <p className="font-semibold mb-2">Questions? Contact us:</p>
                  <p>📧 <a href="mailto:help@sellerresolve.com" className="text-primary hover:underline">help@sellerresolve.com</a></p>
                </div>

                <Button
                  onClick={handleReset}
                  variant="default"
                  size="lg"
                >
                  Start New Assessment
                </Button>
              </div>
            )}

            {/* Navigation Buttons - Only show for manual continue steps */}
            {(currentStep === 2 || currentStep === 11) && (
              <div className="mt-8">
                <Button
                  onClick={handleContinue}
                  disabled={!isStepValid()}
                  size="lg"
                  className="w-full"
                >
                  {currentStep === 11 ? "Complete Assessment →" : "Continue →"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};