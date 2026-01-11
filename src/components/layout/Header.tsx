import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Features", href: "/#features" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
    ];

    const isHomePage = location.pathname === "/";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/90 backdrop-blur-2xl border-b border-border shadow-lg"
                    : isHomePage
                        ? "bg-transparent"
                        : "bg-background border-b border-border"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-18 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span
                            className={`font-display text-2xl font-bold transition-colors ${isScrolled || !isHomePage ? "text-foreground" : "text-white"
                                }`}
                        >
                            Ryze
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-semibold transition-all duration-300 hover:text-accent relative group ${isScrolled || !isHomePage
                                        ? "text-muted-foreground"
                                        : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            variant={isScrolled || !isHomePage ? "ghost" : "hero-secondary"}
                            size="sm"
                            className="font-semibold"
                        >
                            Log In
                        </Button>
                        <Button variant="ryze" size="sm" className="shadow-glow hover:shadow-glow-lg font-semibold">
                            Book a Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-xl hover:bg-accent/10 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X
                                className={`w-6 h-6 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"
                                    }`}
                            />
                        ) : (
                            <Menu
                                className={`w-6 h-6 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"
                                    }`}
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border shadow-2xl">
                    <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-foreground font-semibold py-3 px-4 rounded-xl hover:bg-accent/10 hover:text-accent transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-border">
                            <Button variant="outline" className="w-full font-semibold">
                                Log In
                            </Button>
                            <Button variant="ryze" className="w-full shadow-glow font-semibold">
                                Book a Demo
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
