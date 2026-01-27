import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Sun, Moon, Shield, Phone } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-card/95 backdrop-blur-lg py-3 shadow-xl border-b border-border' 
                        : 'bg-card/80 backdrop-blur-md py-4'
                }`}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-6 h-6 text-accent-foreground" strokeWidth={2.5} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-xl lg:text-2xl tracking-wide text-foreground">
                                    SHIVA
                                </span>
                                <span className="text-[9px] lg:text-[10px] font-medium text-muted-foreground tracking-[0.15em] -mt-1">
                                    SECURITY SERVICES
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                                        isActive(link.path)
                                            ? 'text-accent'
                                            : 'text-foreground hover:text-accent'
                                    }`}
                                >
                                    {link.name}
                                    {isActive(link.path) && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a 
                                href="tel:+919739408213"
                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+91 9739408213</span>
                            </a>
                            
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-6 font-semibold">
                                    Get a Quote
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button 
                                        variant="ghost" 
                                        size="icon"
                                        className="text-foreground hover:bg-accent/10"
                                        aria-label="Open menu"
                                        data-testid="mobile-menu-button"
                                    >
                                        <Menu className="w-6 h-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent 
                                    side="right" 
                                    className="w-full sm:w-[400px] bg-background border-border p-0"
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Mobile Header */}
                                        <div className="flex items-center justify-between p-6 border-b border-border">
                                            <Link 
                                                to="/" 
                                                className="flex items-center gap-3"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                                                    <Shield className="w-5 h-5 text-navy-dark" />
                                                </div>
                                                <span className="font-display text-xl text-foreground">SHIVA</span>
                                            </Link>
                                        </div>

                                        {/* Mobile Nav Links */}
                                        <div className="flex-1 py-8 px-6 overflow-y-auto">
                                            <div className="space-y-2">
                                                {navLinks.map((link, index) => (
                                                    <Link
                                                        key={link.path}
                                                        to={link.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 mobile-touch ${
                                                            isActive(link.path)
                                                                ? 'bg-accent/10 text-accent'
                                                                : 'text-foreground hover:bg-muted'
                                                        }`}
                                                        style={{ animationDelay: `${index * 50}ms` }}
                                                    >
                                                        <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-bold">
                                                            {link.name.charAt(0)}
                                                        </span>
                                                        <span className="font-medium text-lg">{link.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Mobile Footer */}
                                        <div className="p-6 border-t border-border space-y-4">
                                            <a 
                                                href="tel:+919739408213"
                                                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-muted text-foreground font-medium"
                                            >
                                                <Phone className="w-5 h-5" />
                                                <span>+91 9739408213</span>
                                            </a>
                                            <Link 
                                                to="/contact"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <Button className="w-full btn-accent rounded-xl py-6 text-lg font-semibold">
                                                    Get a Quote
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Floating Theme Toggle - Right Middle */}
            <button
                onClick={toggleTheme}
                className="fixed right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-24 rounded-l-2xl bg-card border border-r-0 border-border shadow-lg flex flex-col items-center justify-center gap-2 hover:w-14 transition-all duration-300 group"
                aria-label="Toggle theme"
            >
                <div className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-accent/20' : 'bg-transparent'}`}>
                    <Moon className={`w-5 h-5 transition-all duration-300 ${isDark ? 'text-accent' : 'text-muted-foreground'}`} />
                </div>
                <div className="w-6 h-0.5 bg-border rounded-full" />
                <div className={`p-2 rounded-full transition-all duration-300 ${!isDark ? 'bg-accent/20' : 'bg-transparent'}`}>
                    <Sun className={`w-5 h-5 transition-all duration-300 ${!isDark ? 'text-accent' : 'text-muted-foreground'}`} />
                </div>
            </button>
        </>
    );
};
