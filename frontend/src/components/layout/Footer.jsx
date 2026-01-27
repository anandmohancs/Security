import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Training', path: '/training' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Armed Guards',
        'Corporate Security',
        'VIP Protection',
        'Event Security',
        'Industrial Security',
        'Security Training',
    ];

    const contactInfo = [
        { 
            icon: MapPin, 
            text: '#53/3C, Ground Floor, 20th Cross Road, Raghuvendra Layout, Hulimavu, Bannerghatta Road, Bangalore-560076',
            href: 'https://maps.google.com'
        },
        { 
            icon: Phone, 
            text: '+91 9739408213',
            href: 'tel:+919739408213'
        },
        { 
            icon: Mail, 
            text: 'Shivasecurity.facility@gmail.com',
            href: 'mailto:Shivasecurity.facility@gmail.com'
        },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="relative bg-card border-t border-border">
            {/* Top Section with CTA */}
            <div className="container mx-auto px-4 lg:px-8">
                <div className="relative -mt-16 mb-16">
                    <div className="bg-hero-pattern rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="font-display text-3xl lg:text-4xl text-primary-foreground mb-2">
                                Ready to Secure Your Assets?
                            </h3>
                            <p className="text-primary-foreground/80">
                                Get 24/7 professional security services tailored to your needs.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-8 py-6 text-lg font-semibold whitespace-nowrap">
                                    Get Free Quote
                                </Button>
                            </Link>
                            <a href="tel:+919739408213">
                                <Button 
                                    variant="outline" 
                                    className="rounded-lg px-8 py-6 text-lg font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 whitespace-nowrap"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                                <Shield className="w-7 h-7 text-navy-dark" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display text-2xl text-foreground">SHIVA</span>
                                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.15em] -mt-1">
                                    SECURITY SERVICES
                                </span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Leader in providing comprehensive security solutions across Bangalore, Delhi, and anywhere in India. 
                            Committed to excellence and client safety.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display text-xl text-foreground mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path}
                                        className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-display text-xl text-foreground mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link 
                                        to="/services"
                                        className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-display text-xl text-foreground mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <li key={index}>
                                    <a 
                                        href={info.href}
                                        className="flex items-start gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10">
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm leading-relaxed pt-2">{info.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground text-center md:text-left">
                        <p>© {new Date().getFullYear()} Shiva Security Services. All rights reserved.</p>
                        <p className="text-xs mt-1">PSARA LIC NO: PSA/L/39/KA/2022/AUG/3/244</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full btn-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    );
};
