import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

export const FloatingDashboard = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-float">
      <div className="glass-morphism rounded-2xl p-8 shadow-2xl border border-white border-opacity-10 backdrop-blur-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-semibold">Account Health Dashboard</h3>
          <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-xs font-semibold flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Live
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white bg-opacity-5 rounded-lg p-4">
            <div className="text-gray-400 text-xs mb-1">Violations</div>
            <div className="text-white text-2xl font-bold">{animationStep >= 1 ? "0" : "—"}</div>
          </div>
          <div className="bg-white bg-opacity-5 rounded-lg p-4">
            <div className="text-gray-400 text-xs mb-1">POAs Drafted</div>
            <div className="text-white text-2xl font-bold">{animationStep >= 2 ? "12" : "—"}</div>
          </div>
          <div className="bg-white bg-opacity-5 rounded-lg p-4">
            <div className="text-gray-400 text-xs mb-1">Health Score</div>
            <div className="text-green-400 text-2xl font-bold flex items-center gap-1">
              {animationStep >= 3 ? "99" : "—"}
              {animationStep >= 3 && <TrendingUp className="h-4 w-4" />}
            </div>
          </div>
        </div>

        {/* Violation Timeline */}
        <div className="space-y-3">
          <div className="text-white text-sm font-semibold mb-3">Recent Activity</div>
          
          <div className={`flex items-start gap-3 p-3 bg-white bg-opacity-5 rounded-lg transition-all duration-500 ${animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium">IP Complaint Resolved</div>
              <div className="text-gray-400 text-xs">POA submitted & accepted</div>
            </div>
            <div className="text-gray-500 text-xs whitespace-nowrap">2h ago</div>
          </div>

          <div className={`flex items-start gap-3 p-3 bg-white bg-opacity-5 rounded-lg transition-all duration-500 ${animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium">Daily Check Complete</div>
              <div className="text-gray-400 text-xs">No new violations found</div>
            </div>
            <div className="text-gray-500 text-xs whitespace-nowrap">8h ago</div>
          </div>

          <div className={`flex items-start gap-3 p-3 bg-white bg-opacity-5 rounded-lg transition-all duration-500 ${animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium">Proactive Alert Sent</div>
              <div className="text-gray-400 text-xs">Potential listing issue detected</div>
            </div>
            <div className="text-gray-500 text-xs whitespace-nowrap">1d ago</div>
          </div>
        </div>

        {/* View Dashboard Link */}
        <div className="mt-6 pt-4 border-t border-white border-opacity-10">
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center gap-2">
            View Full Dashboard
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
