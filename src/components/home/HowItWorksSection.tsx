import { Link2, Cpu, TrendingUp, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            icon: Link2,
            title: "Connect Your Accounts",
            description: "Link your Google Ads, Meta, LinkedIn, and other platforms in minutes. Secure OAuth integration with read-only access for complete safety.",
            highlight: "2-minute setup",
            features: ["Secure OAuth", "Read-only access", "All major platforms"],
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            number: "02",
            icon: Cpu,
            title: "AI Analyzes Everything",
            description: "Our AI scans your entire account history, identifies patterns, waste, and opportunities across all campaigns in real-time.",
            highlight: "Deep analysis",
            features: ["Historical data", "Pattern recognition", "Real-time insights"],
            gradient: "from-purple-500 to-pink-500",
        },
        {
            number: "03",
            icon: TrendingUp,
            title: "Optimize & Scale",
            description: "Review AI recommendations, apply with one click, and watch your ROAS improve while spending less time on manual work.",
            highlight: "Continuous improvement",
            features: ["1-click apply", "Auto-optimization", "24/7 monitoring"],
            gradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section id="how-it-works" className="relative py-24 lg:py-36 bg-muted/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
                        <Clock className="w-4 h-4" />
                        SIMPLE PROCESS
                    </div>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        From Setup to Results
                        <br />
                        <span className="text-gradient-orange">in Minutes</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        No complex onboarding. No lengthy training. Just connect, analyze, and optimize.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Connection Line - Desktop */}
                        <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-sm" />
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {steps.map((step, index) => (
                                <div key={step.number} className="relative group">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl border-4 border-background group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-white text-xl font-bold">{step.number}</span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="relative bg-card rounded-3xl p-8 pt-14 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden h-full">
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <step.icon className="w-10 h-10 text-primary-foreground" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                                                {step.description}
                                            </p>

                                            {/* Features List */}
                                            <div className="space-y-3 mb-6">
                                                {step.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2">
                                                        <CheckCircle2 className={`w-5 h-5 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`} style={{ fill: 'currentColor' }} />
                                                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Highlight Badge */}
                                            <div className="text-center">
                                                <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white text-sm font-bold shadow-lg`}>
                                                    {step.highlight}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-10 rounded-bl-full`} />
                                    </div>

                                    {/* Arrow (mobile) */}
                                    {index < steps.length - 1 && (
                                        <div className="flex justify-center my-8 lg:hidden">
                                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                                                <ArrowRight className="w-6 h-6 text-accent rotate-90" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center">
                    <div className="inline-block p-10 rounded-3xl bg-gradient-to-r from-accent/10 via-purple-500/10 to-accent/10 border-2 border-accent/20 max-w-2xl">
                        <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                            Ready to transform your ad management?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Join 2000+ clients already saving time and improving ROAS with Ryze AI
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="ryze" size="xl" className="shadow-glow hover:shadow-glow-lg">
                                Start Your Free Audit
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="xl">
                                Schedule Demo
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            No credit card required • Free 14-day trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
