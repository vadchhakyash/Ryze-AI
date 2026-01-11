import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            description: "Perfect for small teams getting started with AI optimization.",
            price: "$199",
            period: "/month",
            features: [
                "Up to $50k monthly ad spend",
                "1 ad platform connection",
                "Weekly account audits",
                "Basic AI recommendations",
                "Email support",
                "1 team member",
            ],
            cta: "Start Free Trial",
            popular: false,
        },
        {
            name: "Professional",
            description: "For growing teams that need more power and flexibility.",
            price: "$499",
            period: "/month",
            features: [
                "Up to $250k monthly ad spend",
                "5 ad platform connections",
                "Daily account audits",
                "Advanced AI recommendations",
                "AI Chat Analyst",
                "Creative generation",
                "Priority support",
                "5 team members",
            ],
            cta: "Start Free Trial",
            popular: true,
        },
        {
            name: "Enterprise",
            description: "For agencies and large teams with complex needs.",
            price: "Custom",
            period: "",
            features: [
                "Unlimited ad spend",
                "Unlimited platform connections",
                "Real-time audits",
                "Custom AI models",
                "White-label options",
                "Dedicated account manager",
                "SLA guarantee",
                "Unlimited team members",
                "API access",
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ];

    const faqs = [
        {
            question: "How does the 14-day free trial work?",
            answer: "You get full access to all features of your chosen plan for 14 days. No credit card required to start. Cancel anytime.",
        },
        {
            question: "Can I switch plans later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
        },
        {
            question: "What ad platforms do you support?",
            answer: "We support Google Ads, Meta (Facebook/Instagram), LinkedIn, TikTok, Twitter/X, Reddit, Amazon Ads, and more.",
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. We use OAuth for read-only access to your ad accounts. Your data is encrypted and never shared with third parties.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                                Pricing
                            </span>
                            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                Simple, Transparent Pricing
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Choose the plan that fits your team. All plans include a 14-day free trial.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-12 lg:py-20 bg-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {plans.map((plan) => (
                                <div
                                    key={plan.name}
                                    className={`relative rounded-2xl p-8 ${plan.popular
                                            ? "bg-primary text-primary-foreground ring-2 ring-accent shadow-xl"
                                            : "bg-card border border-border"
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="inline-block px-4 py-1 rounded-full bg-accent text-white text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    {/* Plan Header */}
                                    <div className="mb-6">
                                        <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                                        <p className={`text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                                        <span className={`text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                                            {plan.period}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-accent" : "text-accent"}`} />
                                                <span className={`text-sm ${plan.popular ? "text-white/90" : "text-foreground"}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Button
                                        variant={plan.popular ? "hero" : "ryze-outline"}
                                        size="lg"
                                        className="w-full"
                                    >
                                        {plan.cta}
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                                    FAQ
                                </span>
                                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {faqs.map((faq) => (
                                    <div
                                        key={faq.question}
                                        className="p-6 rounded-xl bg-card border border-border"
                                    >
                                        <div className="flex items-start gap-4">
                                            <HelpCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                                                <p className="text-muted-foreground">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <p className="text-muted-foreground mb-4">
                                    Still have questions? We're here to help.
                                </p>
                                <Button variant="outline" size="lg">
                                    Contact Support
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
