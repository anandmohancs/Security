import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    Shield, ShieldCheck, Users, Award, Clock, Target, 
    ChevronRight, Play, Star, Phone, CheckCircle2,
    Building2, Factory, Home, Calendar, UserCheck, GraduationCap
} from 'lucide-react';

const stats = [
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Active Guards', icon: Users },
    { value: '200+', label: 'Happy Clients', icon: Award },
    { value: '24/7', label: 'Support Available', icon: Shield },
];

const services = [
    {
        icon: ShieldCheck,
        title: 'Armed Guards',
        description: 'Highly trained armed security personnel with valid gun licenses for maximum protection.',
        image: 'https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=400&h=300&fit=crop',
    },
    {
        icon: Building2,
        title: 'Corporate Security',
        description: 'Comprehensive security solutions for offices, corporate buildings, and business establishments.',
        image: 'https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?w=400&h=300&fit=crop',
    },
    {
        icon: UserCheck,
        title: 'VIP Protection',
        description: 'Executive protection services for high-profile individuals requiring discreet security.',
        image: 'https://images.pexels.com/photos/30516935/pexels-photo-30516935.jpeg?w=400&h=300&fit=crop',
    },
    {
        icon: Factory,
        title: 'Industrial Security',
        description: 'Specialized security for manufacturing plants, warehouses, and industrial facilities.',
        image: 'https://images.pexels.com/photos/27299956/pexels-photo-27299956.jpeg?w=400&h=300&fit=crop',
    },
    {
        icon: Calendar,
        title: 'Event Security',
        description: 'Professional event security management for functions, exhibitions, and large gatherings.',
        image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=400&h=300&fit=crop',
    },
    {
        icon: GraduationCap,
        title: 'Security Training',
        description: 'Comprehensive training programs for security personnel covering all aspects of protection.',
        image: 'https://images.unsplash.com/photo-1750068382387-3e4708c998a8?w=400&h=300&fit=crop',
    },
];

const features = [
    'Ex-Army & JCO Personnel',
    'PSARA Licensed Company',
    '24/7 Manned Control Rooms',
    'Quick Response Teams',
    'Regular Training Programs',
    'Pan India Coverage',
];

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'CEO, Tech Solutions Pvt Ltd',
        content: 'Shiva Security has been providing security services to our corporate office for over 3 years. Their guards are well-trained, professional, and always punctual.',
        rating: 5,
    },
    {
        name: 'Priya Sharma',
        role: 'HR Manager, Manufacturing Inc',
        content: 'The industrial security team from Shiva Security understands our facility requirements perfectly. They have significantly improved our premises security.',
        rating: 5,
    },
    {
        name: 'Vikram Singh',
        role: 'Event Manager',
        content: 'We regularly hire Shiva Security for our large-scale events. Their coordination and crowd management skills are exceptional.',
        rating: 5,
    },
];

export const HomePage = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Split Screen */}
            <section className="min-h-screen relative flex flex-col lg:flex-row">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen flex items-center bg-hero-pattern relative z-10 px-6 lg:px-16 py-24 lg:py-0">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 animate-fade-in">
                            <Shield className="w-3 h-3 mr-1" />
                            PSARA Licensed Security Provider
                        </Badge>
                        
                        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
                            PROTECTING WHAT
                            <span className="text-gradient-gold block">MATTERS MOST</span>
                        </h1>
                        
                        <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed animate-fade-in animation-delay-200">
                            Shiva Security Services delivers comprehensive security solutions across India. 
                            From armed guards to corporate protection, we ensure your safety with trained professionals.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-8 py-6 text-lg font-semibold w-full sm:w-auto">
                                    Get Free Quote
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button 
                                    variant="outline" 
                                    className="rounded-lg px-8 py-6 text-lg font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                                >
                                    Our Services
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in animation-delay-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span className="text-primary-foreground/70 text-sm">Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span className="text-primary-foreground/70 text-sm">24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span className="text-primary-foreground/70 text-sm">Pan India Coverage</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: 'url(https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=1200&h=1600&fit=crop)'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/50 to-transparent lg:from-navy-dark/80 lg:via-transparent lg:to-transparent" />
                    </div>
                    
                    {/* Floating Stats Card - Mobile & Desktop */}
                    <div className="absolute bottom-8 left-4 right-4 lg:left-8 lg:right-auto lg:bottom-12 animate-fade-in animation-delay-500">
                        <Card className="glass-dark border-border/20 p-4 lg:p-6">
                            <div className="flex items-center gap-4 lg:gap-6">
                                <div className="flex -space-x-3">
                                    {[1,2,3].map((i) => (
                                        <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/20 border-2 border-card flex items-center justify-center">
                                            <Users className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-primary-foreground font-bold text-xl lg:text-2xl">500+</p>
                                    <p className="text-primary-foreground/70 text-sm">Active Guards</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 lg:py-0 lg:-mt-16 relative z-20 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {stats.map((stat, index) => (
                            <Card 
                                key={index} 
                                className="card-elevated p-6 lg:p-8 text-center group hover:border-accent/30 transition-all duration-500"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                                    <stat.icon className="w-7 h-7 text-accent" />
                                </div>
                                <p className="font-display text-4xl lg:text-5xl text-foreground mb-2">{stat.value}</p>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            OUR SERVICES
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            COMPREHENSIVE SECURITY SOLUTIONS
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From personal protection to industrial security, we offer a wide range of 
                            professional security services tailored to your specific needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, index) => (
                            <Card 
                                key={index}
                                className="card-elevated overflow-hidden group cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                                            <service.icon className="w-6 h-6 text-accent-foreground" />
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                                    <Link 
                                        to="/services"
                                        className="inline-flex items-center text-accent font-medium text-sm hover:gap-3 transition-all duration-300"
                                    >
                                        Learn More
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services">
                            <Button className="btn-primary rounded-lg px-8 py-6 text-lg font-semibold">
                                View All Services
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 lg:py-32 bg-muted/50 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <div>
                            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                                WHY CHOOSE US
                            </Badge>
                            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                TRUSTED SECURITY <span className="text-gradient-gold">EXCELLENCE</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                With over 15 years of experience, Shiva Security Services stands as a leader 
                                in providing comprehensive security solutions. Our team of ex-army personnel 
                                and highly trained guards ensures your safety with unmatched expertise.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-accent" />
                                        </div>
                                        <span className="text-foreground text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/about">
                                    <Button className="btn-accent rounded-lg px-8 py-6 font-semibold w-full sm:w-auto">
                                        About Us
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="tel:+919739408213">
                                    <Button 
                                        variant="outline" 
                                        className="rounded-lg px-8 py-6 font-semibold w-full sm:w-auto"
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us Now
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Right Image Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=500&h=600&fit=crop"
                                            alt="Corporate Security"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-square rounded-2xl bg-accent flex items-center justify-center p-6">
                                        <div className="text-center">
                                            <p className="font-display text-5xl text-accent-foreground mb-2">15+</p>
                                            <p className="text-accent-foreground/80 text-sm">Years of Excellence</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-2xl bg-hero-pattern flex items-center justify-center p-6">
                                        <div className="text-center">
                                            <p className="font-display text-5xl text-primary-foreground mb-2">200+</p>
                                            <p className="text-primary-foreground/80 text-sm">Trusted Clients</p>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                                        <img 
                                            src="https://images.pexels.com/photos/34954628/pexels-photo-34954628.jpeg?w=500&h=600&fit=crop"
                                            alt="Security Team"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            TESTIMONIALS
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            WHAT OUR CLIENTS SAY
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Don't just take our word for it. Here's what our valued clients 
                            have to say about our security services.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="card-elevated p-8 lg:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/4 translate-y-1/4" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className="w-6 h-6 text-accent fill-accent"
                                        />
                                    ))}
                                </div>
                                
                                <blockquote className="text-center text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                                    "&ldquo;{testimonials[activeTestimonial].content}&rdquo;"
                                </blockquote>
                                
                                <div className="text-center">
                                    <p className="font-display text-xl text-foreground">
                                        {testimonials[activeTestimonial].name}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {testimonials[activeTestimonial].role}
                                    </p>
                                </div>

                                <div className="flex items-center justify-center gap-2 mt-8">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                index === activeTestimonial 
                                                    ? 'bg-accent w-8' 
                                                    : 'bg-muted hover:bg-muted-foreground/30'
                                            }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Emergency CTA */}
            <section className="py-16 bg-destructive/5 border-y border-destructive/20 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center animate-pulse">
                                <Phone className="w-8 h-8 text-destructive" />
                            </div>
                            <div>
                                <p className="text-muted-foreground text-sm mb-1">24/7 Emergency Hotline</p>
                                <p className="font-display text-3xl lg:text-4xl text-foreground">+91 9739408213</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+919739408213">
                                <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg px-8 py-6 text-lg font-semibold">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Emergency Line
                                </Button>
                            </a>
                            <Link to="/contact">
                                <Button variant="outline" className="rounded-lg px-8 py-6 text-lg font-semibold">
                                    Request Callback
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
