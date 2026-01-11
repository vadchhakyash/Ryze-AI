import { Star, Quote, TrendingUp, Users, Globe, DollarSign } from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.",
            author: "Roger Dunn",
            role: "Global Performance Lead",
            company: "Rivert",
            rating: 5,
            avatar: "RD",
            metric: "127hrs saved/month",
        },
        {
            quote: "Our agency does audits for potential clients 5x faster now. Used to take days, now it's like an hour. Way easier to win new business.",
            author: "Gabriela K.",
            role: "Agency Director",
            company: "Growth Partners",
            rating: 5,
            avatar: "GK",
            metric: "5x faster audits",
        },
        {
            quote: "Found wasted spend in search terms we'd never have caught manually. Cut those, reallocated budget. ROAS up 45%.",
            author: "Daniel Roser",
            role: "Marketing Manager",
            company: "TechFlow",
            rating: 5,
            avatar: "DR",
            metric: "+45% ROAS",
        },
        {
            quote: "Caught that our conversion tracking was double-counting. We had no idea for like 3 months. Fixed it and everything made way more sense.",
            author: "Elena M.",
            role: "CMO",
            company: "ScaleUp Inc",
            rating: 5,
            avatar: "EM",
            metric: "Critical bug found",
        },
        {
            quote: "Broke down performance by asset—thumbnails, headlines, everything. Suggested swaps based on real data. Our CTR basically doubled.",
            author: "Daniel Amezquita",
            role: "Global Ads Strategy",
            company: "Glava",
            rating: 5,
            avatar: "DA",
            metric: "2x CTR increase",
        },
        {
            quote: "Got the whole team up and running in a day. Super easy to pick up. The AI recommendations are incredibly accurate.",
            author: "Sarah Chen",
            role: "Head of Growth",
            company: "Speedy",
            rating: 5,
            avatar: "SC",
            metric: "1-day onboarding",
        },
    ];

    const stats = [
        { icon: Users, value: "2000+", label: "Active Clients", gradient: "from-blue-500 to-cyan-500" },
        { icon: Globe, value: "700+", label: "Agencies", gradient: "from-purple-500 to-pink-500" },
        { icon: TrendingUp, value: "23+", label: "Countries", gradient: "from-green-500 to-emerald-500" },
        { icon: DollarSign, value: "$500M+", label: "Ad Spend Managed", gradient: "from-orange-500 to-red-500" },
    ];

    return (
        <section className="relative py-24 lg:py-36 bg-background overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-6">
                        <Star className="w-4 h-4 fill-current" />
                        WALL OF LOVE
                    </div>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Trusted by Marketing
                        <br />
                        <span className="text-gradient-orange">Teams Worldwide</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        See what agencies and brands are saying about their results with Ryze.
                    </p>
                </div>

                {/* Featured Testimonial */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden shadow-2xl">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full blur-3xl" />
                        </div>

                        {/* Quote Icon */}
                        <div className="relative mb-6">
                            <Quote className="w-16 h-16 text-accent/30 fill-current" />
                        </div>

                        {/* Quote */}
                        <blockquote className="relative text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
                            "Ryze's AI-driven ads outperform human optimization by a huge margin. The ROI is undeniable."
                        </blockquote>

                        {/* Author Info */}
                        <div className="relative flex items-center gap-6 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                MB
                            </div>
                            <div>
                                <p className="font-bold text-xl">Mathilde Biggs</p>
                                <p className="text-white/70">CEO, MotifDigital Agence</p>
                            </div>
                        </div>

                        {/* Metric */}
                        <div className="relative inline-block px-6 py-3 rounded-2xl bg-accent/20 border-2 border-accent/30">
                            <p className="text-4xl font-bold text-accent">
                                +63% <span className="text-lg font-normal text-white/80">better ROAS</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-card border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/10 fill-current" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-foreground mb-6 leading-relaxed font-medium">
                                "{testimonial.quote}"
                            </p>

                            {/* Metric Badge */}
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
                                    {testimonial.metric}
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center border border-accent/20">
                                    <span className="text-sm font-bold text-accent">
                                        {testimonial.avatar}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground font-medium">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="relative">
                    <div className="p-10 rounded-3xl bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 border-2 border-border">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center group">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-muted-foreground mb-4 font-medium">TRUSTED BY LEADING BRANDS</p>
                    <div className="flex items-center justify-center gap-8 flex-wrap opacity-50 hover:opacity-100 transition-opacity">
                        {["Google Partner", "Meta Partner", "LinkedIn Partner", "Certified Agency"].map((badge) => (
                            <div key={badge} className="px-4 py-2 rounded-lg bg-muted/50 text-sm font-semibold text-muted-foreground">
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
