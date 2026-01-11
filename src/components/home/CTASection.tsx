import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Clock } from "lucide-react";

const CTASection = () => {
    const benefits = [
        { icon: Clock, text: "Free 14-day trial" },
        { icon: Shield, text: "No credit card required" },
        { icon: CheckCircle2, text: "Cancel anytime" },
        { icon: Sparkles, text: "24/7 support" },
    ];

    return (
        <section className="relative py-24 lg:py-36 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Main CTA Card */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent opacity-100 animate-pulse-slow" />

                        {/* Inner Card */}
                        <div className="relative m-[3px] bg-card rounded-[2.4rem] p-10 lg:p-16">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
                            </div>

                            {/* Content */}
                            <div className="relative text-center">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-8">
                                    <Sparkles className="w-4 h-4" />
                                    LIMITED TIME OFFER
                                </div>

                                {/* Headline */}
                                <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                                    Audit Your Ad Account
                                    <br />
                                    <span className="text-gradient-orange">Instantly Free</span>
                                </h2>

                                {/* Subheadline */}
                                <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                                    Get a comprehensive AI analysis of your ad accounts in minutes.
                                    Discover hidden opportunities and wasted spend.
                                </p>

                                {/* Email Input Form */}
                                <div className="max-w-2xl mx-auto mb-10">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1 relative">
                                            <input
                                                type="email"
                                                placeholder="Enter your work email"
                                                className="w-full h-14 px-6 rounded-2xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-lg"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <Button variant="ryze" size="xl" className="shrink-0 shadow-glow-lg hover:shadow-glow-lg hover:scale-105 transition-all h-14 px-8">
                                            Get Free Audit
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4">
                                        🔒 Your data is secure. We never share your information.
                                    </p>
                                </div>

                                {/* Benefits Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
                                    {benefits.map((benefit) => (
                                        <div key={benefit.text} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted/50 border border-border hover:border-accent/30 transition-all group">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <benefit.icon className="w-6 h-6 text-accent" />
                                            </div>
                                            <span className="text-sm font-semibold text-foreground text-center">{benefit.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50">
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-purple-500/30 border-2 border-background flex items-center justify-center text-xs font-bold text-accent">
                                                    {String.fromCharCode(64 + i)}
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground ml-2">
                                            2000+ clients
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                        <span className="text-sm font-medium text-muted-foreground ml-2">
                                            4.9/5 rating
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { value: "$24.5k", label: "Average savings per month", icon: "💰" },
                            { value: "127hrs", label: "Time saved per team monthly", icon: "⏱️" },
                            { value: "+63%", label: "Average ROAS improvement", icon: "📈" },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-accent/30 transition-all">
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
