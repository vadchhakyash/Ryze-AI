import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter, Facebook, Instagram, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const footerLinks = {
        product: [
            { name: "Features", href: "/#features" },
            { name: "Pricing", href: "/pricing" },
            { name: "How It Works", href: "/#how-it-works" },
            { name: "Case Studies", href: "#" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Contact", href: "#" },
        ],
        resources: [
            { name: "Documentation", href: "#" },
            { name: "Help Center", href: "#" },
            { name: "API Reference", href: "#" },
            { name: "Status", href: "#" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "GDPR", href: "#" },
        ],
    };

    const socialLinks = [
        { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
        { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
        { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
        { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    ];

    return (
        <footer className="bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
            </div>

            {/* CTA Section */}
            <div className="relative border-b border-white/10">
                <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold mb-8">
                            <Sparkles className="w-4 h-4" />
                            START YOUR FREE TRIAL
                        </div>

                        {/* Headline */}
                        <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Ready to let AI
                            <br />
                            <span className="text-gradient-orange">manage your ads?</span>
                        </h2>

                        {/* Subheadline */}
                        <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Join 2000+ clients and 700+ agencies already using Ryze to optimize their ad spend and save time.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button variant="hero" size="xl" className="shadow-glow-lg hover:shadow-glow-lg hover:scale-105 transition-all">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button variant="hero-secondary" size="xl" className="hover:bg-white/25">
                                Book a Demo
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                            <span className="flex items-center gap-2">
                                ✓ No credit card required
                            </span>
                            <span className="flex items-center gap-2">
                                ✓ 14-day free trial
                            </span>
                            <span className="flex items-center gap-2">
                                ✓ Cancel anytime
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links Section */}
            <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-6 lg:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <span className="font-display text-3xl font-bold">Ryze</span>
                        </Link>
                        <p className="text-sm text-white/60 mb-8 max-w-xs leading-relaxed">
                            AI-powered ad management for agencies and brands. Optimize, analyze, and scale your campaigns effortlessly.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className={`w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all ${social.color} group`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Product</h4>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 pt-12 border-t border-white/10">
                    <div className="max-w-md">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-accent" />
                            Subscribe to our newsletter
                        </h4>
                        <p className="text-sm text-white/60 mb-4">
                            Get the latest updates, tips, and insights delivered to your inbox.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 h-11 px-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                            />
                            <Button variant="ryze" size="sm" className="shrink-0">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/50">
                            © {new Date().getFullYear()} Ryze. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-white/50">
                            <span>Trusted by teams in 23+ countries</span>
                            <span>•</span>
                            <span>$500M+ ad spend managed</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
