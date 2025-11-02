import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const InteractiveFAQ = () => {
  const faqs = [
    {
      question: "How is this different from doing it myself?",
      answer: "You could monitor your own account - many sellers try. The problem is consistency and expertise. Most sellers don't log in daily, miss critical violations, or don't know which issues are urgent vs. cosmetic. By the time they notice, it's escalated. We guarantee daily checks, expert POA drafting, and full submission handling so you never miss anything."
    },
    {
      question: "What if I'm not sure which tier I need?",
      answer: "Start with your monthly revenue - that's the primary factor. If you're doing $50K-$250K/month, Essential is probably right. $250K-$1M = Complete Coverage. $1M+ = Unlimited. Then consider your typical violation volume. Most wholesale sellers need higher tiers due to IP/authenticity volume, while private label brands often start at Essential but value Unlimited's proactive audits. Use our calculator above to get a recommendation."
    },
    {
      question: "Do you require a contract?",
      answer: "No. Month-to-month service. Cancel anytime with 30 days notice. We earn your business every month."
    },
    {
      question: "What happens if I get suspended while using your service?",
      answer: "If you're following our guidance (providing requested documents within 48 hours, implementing recommended changes) and Amazon suspends you for an issue we were monitoring, we handle the reinstatement at no additional charge. This guarantee is standard across all tiers."
    },
    {
      question: "Why is this better than [competitor]?",
      answer: "Three main differences: (1) We submit POAs for you at every tier - competitors make you do it yourself at lower price points. (2) Transparent published pricing - no assessment calls required. (3) Revenue-based tiers that scale fairly with your business size, not opaque 'we'll assess your account' models."
    },
    {
      question: "Can I switch tiers if my business grows?",
      answer: "Absolutely. Most clients upgrade within 6-12 months as revenue increases. You can change tiers anytime - we just need 7 days notice to adjust billing."
    },
    {
      question: "What if I go over my violation limit?",
      answer: "We handle overages at $149 per violation. If you consistently exceed your tier limit, we'll recommend upgrading to the next tier. You can also purchase additional violation packs (10 for $899) during seasonal spikes like Q4."
    },
    {
      question: "How quickly will I see my first report?",
      answer: "Your first weekly report arrives within 7 days of onboarding. You'll get immediate access to your live violation tracking sheet on day 1, and we start monitoring within 24 hours of receiving Seller Central access."
    }
  ];

  return (
    <section className="bg-card py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Questions About Account Health Monitoring
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 hover:bg-muted/50 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Below FAQ */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="text-primary hover:underline text-lg font-medium inline-flex items-center gap-2"
          >
            Still have questions? Talk to our team →
          </a>
        </div>
      </div>
    </section>
  );
};
