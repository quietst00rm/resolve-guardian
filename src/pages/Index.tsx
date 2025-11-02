import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center hero-gradient">
      <div className="text-center px-6">
        <h1 className="mb-6 text-5xl font-bold text-white">Seller Resolve</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Built by sellers, for sellers. Proven processes executed by experienced
          professionals—no hype, just outcomes.
        </p>
        <Link to="/account-health-monitoring">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-xl"
          >
            View Account Health Monitoring
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
