import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap } from "lucide-react";
import GoogleAds from "@/assets/googleAds.svg";
import linkedin from "@/assets/linkedin.svg";
import tiktok from "@/assets/tiktok.svg";
import reddit from "@/assets/reddit.svg";
import meta from "@/assets/meta.svg";

const HeroSection = () => {
    const platforms = [
        { name: "Google Ads", icon: GoogleAds },
        { name: "Meta", icon: meta },
        { name: "LinkedIn", icon: linkedin },
        { name: "TikTok", icon: tiktok },
        { name: "Reddit", icon: reddit },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
            </div>

            <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
                <div className="max-w-6xl mx-auto">
                    {/* Badge with Animation */}
                    <div className="flex justify-center mb-8 animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark border border-white/30 backdrop-blur-xl">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-white/90">Trusted by 2000+ clients • $500M+ ad spend managed</span>
                            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-bold">LIVE</span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div className="text-center mb-8">
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] animate-fade-in tracking-tight" style={{ animationDelay: '0.1s' }}>
                            Let <span className="text-gradient-orange inline-block">AI Manage</span>
                            <br />
                            <span className="relative inline-block">
                                Your Ads
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="hsl(24 95% 53%)" />
                                            <stop offset="50%" stopColor="hsl(28 95% 58%)" />
                                            <stop offset="100%" stopColor="hsl(32 95% 62%)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
                            24/7 autonomous optimization, creative generation, and account audits.
                            <br className="hidden sm:block" />
                            <span className="text-white/90 font-semibold">Save 127 hours weekly</span> while improving ROAS by up to <span className="text-accent font-semibold">63%</span>.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <Button variant="hero" size="xl" className="w-full sm:w-auto group shadow-glow-lg hover:shadow-glow-lg hover:scale-105 transition-all">
                            Get Started Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="hero-secondary" size="xl" className="w-full sm:w-auto group hover:bg-white/25">
                            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Watch Demo (2 min)
                        </Button>
                    </div>

                    {/* Platform Logos */}
                    <div className="animate-fade-in mb-20" style={{ animationDelay: '0.4s' }}>
                        <p className="text-sm text-white/50 mb-6 text-center font-medium">INTEGRATES WITH ALL MAJOR PLATFORMS</p>
                        <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
                            {platforms.map((platform) => (
                                <div
                                    key={platform.name}
                                    className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                                >
                                    <img src={platform.icon} className="size-10" />
                                    <span className="hidden sm:inline text-sm font-semibold">{platform.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard Preview with Floating Stats */}

                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        {/* Floating Stats Cards */}



                        {/* Main Dashboard Card */}
                        <div className="relative max-w-5xl mx-auto">
                            {/* Enhanced Glow Effect */}
                            <div className="absolute -inset-6 bg-gradient-to-r from-accent/30 via-purple-500/20 to-accent/30 rounded-3xl blur-3xl opacity-60 animate-pulse-slow" />

                            {/* Dashboard */}
                            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
                                {/* Browser Chrome */}
                                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/5">
                                    <div className="flex gap-2">
                                        <div className="w-3.5 h-3.5 rounded-full bg-red-400/90 shadow-sm" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/90 shadow-sm" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-green-400/90 shadow-sm" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="px-6 py-1.5 rounded-lg bg-white/10 text-xs text-white/70 font-medium border border-white/10">
                                            🔒 app.get-ryze.ai
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-900/95 to-gray-800/95">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {[
                                            { label: "Total ROAS", value: "4.8x", change: "+23% vs last month", color: "from-green-400 to-emerald-500" },
                                            { label: "Ad Spend Saved", value: "$24.5k", change: "This month", color: "from-orange-400 to-red-500" },
                                            { label: "Hours Saved", value: "127hrs", change: "Per team/month", color: "from-purple-400 to-pink-500" }
                                        ].map((stat, index) => (
                                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm group">
                                                <p className="text-sm text-white/60 mb-2 font-medium">{stat.label}</p>
                                                <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                                    {stat.value}
                                                </p>
                                                <p className="text-sm text-green-400 font-medium flex items-center gap-1">
                                                    <TrendingUp className="w-4 h-4" />
                                                    {stat.change}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* AI Recommendation Card */}
                                    <div className="relative p-6 rounded-2xl bg-gradient-to-r from-accent/20 to-purple-500/20 border-2 border-accent/40 overflow-hidden group hover:border-accent/60 transition-all">
                                        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0 animate-pulse-slow">
                                                AI
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Sparkles className="w-5 h-5 text-accent" />
                                                    <p className="text-white font-bold text-lg">Optimization Opportunity Found</p>
                                                </div>
                                                <p className="text-white/90 mb-4 leading-relaxed">
                                                    Pause 27 keywords burning $1.8k with 0 conversions. Reallocate to top performers for maximum ROI.
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-bold border border-green-500/30">
                                                        +$2.5k/mo potential
                                                    </span>
                                                    <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">
                                                        1-click apply
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
};

export default HeroSection;
