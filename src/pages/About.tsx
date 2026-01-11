import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap, Globe } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Results-Driven",
            description: "Every feature we build is measured by the impact it has on our customers' ROAS and efficiency.",
        },
        {
            icon: Users,
            title: "Customer-First",
            description: "We obsess over customer feedback and build products that solve real problems.",
        },
        {
            icon: Zap,
            title: "Speed & Quality",
            description: "We move fast but never compromise on the accuracy and reliability of our AI recommendations.",
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "We're building for marketers worldwide, making advanced AI accessible to teams of all sizes.",
        },
    ];

    const stats = [
        { value: "2021", label: "Founded" },
        { value: "50+", label: "Team Members" },
        { value: "23+", label: "Countries" },
        { value: "$500M+", label: "Ad Spend Managed" },
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
                                About Ryze
                            </span>
                            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
                                We're Making AI Work
                                <br />
                                <span className="text-gradient-orange">For Every Marketer</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Born from the frustration of manual ad optimization, Ryze brings enterprise-level
                                AI capabilities to marketing teams of all sizes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 border-y border-border bg-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-3xl lg:text-4xl font-bold text-foreground">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 lg:py-32 bg-background">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                                    Our Mission
                                </span>
                                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                                    Democratizing AI-Powered Advertising
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    We believe every marketing team deserves access to the same AI-powered
                                    optimization tools that only the largest enterprises could afford before.
                                </p>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    Ryze was built by marketers who spent years manually optimizing campaigns,
                                    building spreadsheets, and wishing there was a better way. Now there is.
                                </p>
                                <Button variant="ryze" size="lg">
                                    Join Our Team
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 flex items-center justify-center">
                                    <div className="text-center text-primary-foreground">
                                        <p className="text-6xl lg:text-8xl font-bold mb-4">63%</p>
                                        <p className="text-xl lg:text-2xl font-medium opacity-80">
                                            Average ROAS improvement
                                        </p>
                                        <p className="text-sm opacity-60 mt-2">
                                            across all Ryze customers
                                        </p>
                                    </div>
                                </div>
                                {/* Floating element */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent flex items-center justify-center text-white shadow-glow">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold">127</p>
                                        <p className="text-xs">hrs saved/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                                Our Values
                            </span>
                            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                                What Drives Us
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                The principles that guide how we build products and serve our customers.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                                        <value.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 lg:px-8 text-center">
                        <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Transform Your Ads?
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                            Join thousands of marketers already using Ryze to optimize their campaigns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="hero" size="xl">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button variant="hero-secondary" size="xl">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
