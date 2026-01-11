import { Search, Zap, BarChart3, MessageSquare, Target, DollarSign, ArrowUpRight } from "lucide-react";

const FeaturesSection = () => {
    const features = [
        {
            icon: Search,
            title: "Keyword Optimization",
            description: "Automatically identify wasteful keywords and discover high-converting opportunities. Save thousands monthly with AI-powered analysis.",
            stat: "+45%",
            statLabel: "ROAS improvement",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-500/10 to-cyan-500/10",
        },
        {
            icon: Zap,
            title: "Creative Generation",
            description: "AI-powered ad copy and creative suggestions based on your best-performing assets and real-time industry trends.",
            stat: "2x",
            statLabel: "CTR increase",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-500/10 to-red-500/10",
        },
        {
            icon: BarChart3,
            title: "Account Audits",
            description: "Comprehensive 24/7 audits across all your campaigns. Catch critical issues humans miss and fix them instantly.",
            stat: "5hrs",
            statLabel: "saved weekly",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-500/10 to-pink-500/10",
        },
        {
            icon: MessageSquare,
            title: "AI Chat Analyst",
            description: "Ask questions like 'Why did ROAS drop?' and get instant, actionable insights from your data in plain English.",
            stat: "24/7",
            statLabel: "availability",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-500/10 to-emerald-500/10",
        },
        {
            icon: Target,
            title: "Smart Targeting",
            description: "Optimize audience segments, placements, and schedules automatically based on real conversion data.",
            stat: "-32%",
            statLabel: "wasted spend",
            gradient: "from-indigo-500 to-purple-500",
            bgGradient: "from-indigo-500/10 to-purple-500/10",
        },
        {
            icon: DollarSign,
            title: "Budget Reallocation",
            description: "Automatically shift budget to best-performing campaigns and platforms for maximum returns and growth.",
            stat: "+63%",
            statLabel: "better ROAS",
            gradient: "from-amber-500 to-orange-500",
            bgGradient: "from-amber-500/10 to-orange-500/10",
        },
    ];

    return (
        <section id="features" className="relative py-24 lg:py-36 bg-background overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
                        <Zap className="w-4 h-4" />
                        POWERFUL FEATURES
                    </div>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Your 24/7 AI
                        <br />
                        <span className="text-gradient-orange">Marketing Team</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        From keyword optimization to creative generation, Ryze handles the tedious work
                        so you can focus on strategy and growth.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group relative"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card */}
                            <div className="relative h-full p-8 rounded-3xl bg-card border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Stat Badge */}
                                    <div className="flex items-center justify-between pt-6 border-t border-border/50 group-hover:border-accent/30 transition-colors">
                                        <div>
                                            <p className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                                {feature.stat}
                                            </p>
                                            <p className="text-sm text-muted-foreground font-medium mt-1">
                                                {feature.statLabel}
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                                            <ArrowUpRight className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-accent/10 via-purple-500/10 to-accent/10 border-2 border-accent/20">
                        <p className="text-lg text-muted-foreground mb-2">
                            <span className="font-bold text-foreground">All features included</span> in every plan
                        </p>
                        <p className="text-sm text-muted-foreground">
                            No hidden fees • No feature gates • Full access from day one
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
