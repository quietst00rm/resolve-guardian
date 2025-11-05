import { Shield, Zap, DollarSign, Eye, Clock, AlertTriangle } from "lucide-react";

export const BentoGridFeatures = () => {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Why Sellers Choose Seller Resolve
          </h2>
          <p className="text-xl text-muted-foreground">
            Proactive protection that scales with your business
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - Radical Transparency */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all">
            <span className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded mb-4 uppercase tracking-wide">
              TRANSPARENCY
            </span>
            <div className="flex items-start gap-6">
              <Eye className="h-16 w-16 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  See Exactly What We're Monitoring
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  View-only access to your personalized violation tracking system. No black boxes. No wondering what we're doing. Real-time visibility into every issue we're handling.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Transparent violation tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card - Post-Reinstatement */}
          <div className="bg-card rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all">
            <span className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded mb-4 uppercase tracking-wide">
              PROTECTION
            </span>
            <Shield className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Post-Reinstatement Protection
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Amazon watches your account 10x more closely after reinstatement. We monitor 24/7 during this high-risk period so you never get suspended again.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold">
              <div className="text-3xl">90</div>
              <div className="text-sm">days critical<br/>watch period</div>
            </div>
          </div>

          {/* Medium Card - 24-Hour Response */}
          <div className="bg-card rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all">
            <span className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded mb-4 uppercase tracking-wide">
              SPEED
            </span>
            <Zap className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              24-Hour Response Time
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you're on Essential or Unlimited, we address every violation within 24 hours. No tiered response times. Fast resolution is standard, not premium.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-4xl">
              24<span className="text-sm font-normal text-muted-foreground">hr</span>
            </div>
          </div>

          {/* Medium Card - We Submit Everything */}
          <div className="bg-card rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all">
            <span className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded mb-4 uppercase tracking-wide">
              AUTOMATION
            </span>
            <Clock className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              We Submit Everything On Your Behalf
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Unlike competitors who make you handle submissions at lower tiers, we draft AND submit all POAs from day one. You focus on running your business. We handle Amazon.
            </p>
          </div>

          {/* Large Card - Pricing That Scales */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all">
            <span className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded mb-4 uppercase tracking-wide">
              PRICING
            </span>
            <div className="flex items-start gap-6">
              <DollarSign className="h-16 w-16 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Pricing That Scales With Your Business Size
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  No opaque assessments. No surprise fees. Simple revenue-based tiers so you pay what's fair relative to what we're protecting. Know your cost immediately.
                </p>
                {/* Mini pricing chart */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-accent text-2xl font-bold mb-1">$599</div>
                    <div className="text-xs text-muted-foreground">$50K-$250K</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-primary text-2xl font-bold mb-1">$1,299</div>
                    <div className="text-xs text-muted-foreground">$250K-$1M</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-purple-600 text-2xl font-bold mb-1">$2,499</div>
                    <div className="text-xs text-muted-foreground">$1M+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card - Catch Problems Before Amazon */}
          <div className="bg-card rounded-2xl p-8 hover:shadow-2xl hover-lift transition-all">
            <span className="inline-block px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs font-semibold rounded mb-4 uppercase tracking-wide">
              PREVENTION
            </span>
            <AlertTriangle className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Catch Problems Before Amazon Does
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Complete and Unlimited tiers include quarterly or bi-annual compliance audits of your entire catalog. We identify policy violations before Amazon flags them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
