import { Card } from "@/components/ui/card";
export const TestimonialCards = () => {
  const testimonials = [{
    name: "Michael R.",
    businessType: "Private Label Brand",
    revenue: "$400K/month",
    photo: "M",
    rating: 5,
    quote: "After getting my account reinstated, signing up for monitoring at $599/month was the easiest decision I've ever made. Haven't had a single issue in 18 months. Worth every penny for peace of mind.",
    metric: "18 months suspension-free"
  }, {
    name: "Sarah K.",
    businessType: "Wholesale Distributor",
    revenue: "$800K/month",
    photo: "S",
    rating: 5,
    quote: "We were getting 30-40 violations a month - mostly IP and authenticity challenges. Complete Coverage handles everything. We don't even think about account health anymore.",
    metric: "35+ violations/month managed"
  }, {
    name: "David L.",
    businessType: "Private Label Brand",
    revenue: "$2.5M/month",
    photo: "D",
    rating: 5,
    quote: "The bi-annual compliance audits in Unlimited Protection have saved us from what would've been catastrophic suspensions. They caught listing policy violations before Amazon did. Easily worth the $2,499/month.",
    metric: "2 proactive audits prevented issues"
  }];
  return <section className="bg-background py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <h2 className="text-5xl font-bold text-center text-foreground mb-16">
          From Sellers Who've Been Where You Are
        </h2>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:rotate-1 bg-card">
              {/* Top - Customer Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold border-4 border-primary">
                  {testimonial.photo}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.businessType}</div>
                  <div className="inline-block mt-1 px-2 py-0.5 bg-accent bg-opacity-10 text-accent rounded text-xs font-semibold">
                    {testimonial.revenue}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="text-yellow-400 text-xl mb-4">
                {"★".repeat(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground leading-relaxed italic mb-4">
                "{testimonial.quote}"
              </p>

              {/* Metric Callout */}
              <div className="inline-block px-3 py-2 bg-accent bg-opacity-10 text-accent rounded-lg text-sm font-semibold">
                ✓ {testimonial.metric}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};