import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
    Shield, ShieldCheck, Users, ChevronRight, CheckCircle2,
    Building2, Factory, Home, Calendar, UserCheck, GraduationCap,
    Target, Clock, Phone, Star, Crosshair, Lock, Eye, AlertTriangle
} from 'lucide-react';

const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'armed', label: 'Armed Security' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'residential', label: 'Residential' },
    { id: 'specialized', label: 'Specialized' },
];

const services = [
    {
        id: 'armed-guards',
        category: 'armed',
        icon: Crosshair,
        title: 'Armed Guards Security',
        shortDesc: 'Highly trained armed security personnel with valid gun licenses.',
        fullDesc: 'Our armed guards are men with valid gun-licenses, including ex-army personnel and trained civilians. They undergo rigorous training and background checks to ensure maximum security for high-risk environments.',
        features: [
            'Valid gun licenses',
            'Ex-army personnel',
            'Rigorous background checks',
            'Specialized training',
            '24/7 availability',
            'Quick response capability',
        ],
        image: 'https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=600&h=400&fit=crop',
    },
    {
        id: 'corporate-security',
        category: 'corporate',
        icon: Building2,
        title: 'Corporate Security',
        shortDesc: 'Comprehensive security solutions for offices and business establishments.',
        fullDesc: 'Protect your corporate assets with our professional security services. We provide trained guards, access control management, and 24/7 monitoring for offices, IT parks, and business centers.',
        features: [
            'Access control management',
            'Visitor management',
            'CCTV monitoring support',
            'Emergency response',
            'Executive protection',
            'Risk assessment',
        ],
        image: 'https://images.unsplash.com/photo-1566245024852-04fbf7842ce9?w=600&h=400&fit=crop',
    },
    {
        id: 'vip-protection',
        category: 'specialized',
        icon: UserCheck,
        title: 'VIP & Executive Protection',
        shortDesc: 'Discreet protection services for high-profile individuals.',
        fullDesc: 'Our executive protection team comprises experienced professionals who provide discreet, comprehensive security for VIPs, celebrities, and business executives. We ensure safety without compromising privacy.',
        features: [
            'Personal bodyguards',
            'Advance security planning',
            'Route reconnaissance',
            'Secure transportation',
            'Event security',
            'Threat assessment',
        ],
        image: 'https://images.pexels.com/photos/30516935/pexels-photo-30516935.jpeg?w=600&h=400&fit=crop',
    },
    {
        id: 'industrial-security',
        category: 'corporate',
        icon: Factory,
        title: 'Industrial Security',
        shortDesc: 'Specialized security for manufacturing and industrial facilities.',
        fullDesc: 'Our industrial security services are tailored for manufacturing plants, warehouses, and industrial complexes. We understand the unique challenges of industrial environments and provide appropriate security measures.',
        features: [
            'Perimeter security',
            'Access control',
            'Fire safety monitoring',
            'Inventory tracking support',
            'Emergency procedures',
            'Shift-based coverage',
        ],
        image: 'https://images.pexels.com/photos/27299956/pexels-photo-27299956.jpeg?w=600&h=400&fit=crop',
    },
    {
        id: 'residential-security',
        category: 'residential',
        icon: Home,
        title: 'Residential Security',
        shortDesc: 'Professional security for homes, apartments, and gated communities.',
        fullDesc: 'Keep your family and home safe with our residential security services. We provide trained guards for individual homes, apartment complexes, and gated communities with 24/7 vigilance.',
        features: [
            'Gate security',
            'Patrol services',
            'Visitor screening',
            'Emergency response',
            'Night surveillance',
            'Community coordination',
        ],
        image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=600&h=400&fit=crop',
    },
    {
        id: 'event-security',
        category: 'specialized',
        icon: Calendar,
        title: 'Event Security',
        shortDesc: 'Professional security management for events and gatherings.',
        fullDesc: 'From corporate events to large public gatherings, our event security team ensures smooth operations and safety for all attendees. We handle crowd management, access control, and emergency situations.',
        features: [
            'Crowd management',
            'VIP protection',
            'Entry screening',
            'Emergency evacuation',
            'Coordination with authorities',
            'Post-event security',
        ],
        image: 'https://images.unsplash.com/photo-1750068382387-3e4708c998a8?w=600&h=400&fit=crop',
    },
    {
        id: 'lady-security',
        category: 'specialized',
        icon: Shield,
        title: 'Lady Security Guards',
        shortDesc: 'Female security personnel for specialized requirements.',
        fullDesc: 'We provide trained female security guards for environments requiring gender-specific security, including women-only facilities, events, and organizations prioritizing female safety.',
        features: [
            'Trained female guards',
            'Background verified',
            'Professional demeanor',
            'Crisis handling',
            'Flexible deployment',
            'Cultural sensitivity',
        ],
        image: 'https://images.pexels.com/photos/34954620/pexels-photo-34954620.jpeg?w=600&h=400&fit=crop',
    },
    {
        id: 'security-training',
        category: 'specialized',
        icon: GraduationCap,
        title: 'Security Training',
        shortDesc: 'Comprehensive training programs for security personnel.',
        fullDesc: 'Our training programs cover all aspects of security operations, from basic guard duties to specialized skills. We offer both initial training and regular refresher courses.',
        features: [
            'Basic security training',
            'Fire safety',
            'First aid',
            'Crisis management',
            'Communication skills',
            'Legal compliance',
        ],
        image: 'https://images.pexels.com/photos/34954628/pexels-photo-34954628.jpeg?w=600&h=400&fit=crop',
    },
];

const processSteps = [
    {
        step: '01',
        title: 'Consultation',
        description: 'We assess your security needs and understand your specific requirements.',
        icon: Target,
    },
    {
        step: '02',
        title: 'Planning',
        description: 'Our team develops a customized security plan tailored to your needs.',
        icon: Shield,
    },
    {
        step: '03',
        title: 'Deployment',
        description: 'Trained personnel are deployed with proper briefing and equipment.',
        icon: Users,
    },
    {
        step: '04',
        title: 'Monitoring',
        description: 'Continuous oversight and regular reporting ensure quality service.',
        icon: Eye,
    },
];

export const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);

    const filteredServices = activeCategory === 'all' 
        ? services 
        : services.filter(s => s.category === activeCategory);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-hero-pattern px-4 lg:px-8 pt-24">
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 animate-fade-in">
                            <ShieldCheck className="w-3 h-3 mr-1" />
                            OUR SERVICES
                        </Badge>
                        <h1 className="font-display text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
                            COMPREHENSIVE
                            <span className="text-gradient-gold block">SECURITY SOLUTIONS</span>
                        </h1>
                        <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed animate-fade-in animation-delay-200">
                            From armed protection to corporate security, we offer a wide range of 
                            professional services tailored to meet your specific security needs.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Services Filter & Grid */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {serviceCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                                    activeCategory === cat.id
                                        ? 'bg-accent text-accent-foreground shadow-lg'
                                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredServices.map((service) => (
                            <Card 
                                key={service.id}
                                className="card-elevated overflow-hidden group cursor-pointer"
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                                            <service.icon className="w-6 h-6 text-accent-foreground" />
                                        </div>
                                    </div>
                                    <Badge className="absolute top-4 right-4 bg-card/80 text-foreground border-0">
                                        {serviceCategories.find(c => c.id === service.category)?.label}
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                                    <button className="inline-flex items-center text-accent font-medium text-sm hover:gap-3 transition-all duration-300">
                                        View Details
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            {selectedService && (
                <div 
                    className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedService(null)}
                >
                    <Card 
                        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img 
                                src={selectedService.image} 
                                alt={selectedService.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                            <button 
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 rotate-45" />
                            </button>
                        </div>
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                                    <selectedService.icon className="w-8 h-8 text-accent-foreground" />
                                </div>
                                <div>
                                    <h2 className="font-display text-3xl text-foreground mb-2">{selectedService.title}</h2>
                                    <Badge className="bg-accent/10 text-accent border-accent/20">
                                        {serviceCategories.find(c => c.id === selectedService.category)?.label}
                                    </Badge>
                                </div>
                            </div>
                            
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {selectedService.fullDesc}
                            </p>
                            
                            <h3 className="font-display text-xl text-foreground mb-4">Key Features</h3>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {selectedService.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-foreground text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="flex-1">
                                    <Button className="w-full btn-accent rounded-lg py-6 font-semibold">
                                        Request This Service
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="tel:+919739408213" className="flex-1">
                                    <Button variant="outline" className="w-full rounded-lg py-6 font-semibold">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Our Process */}
            <section className="py-20 lg:py-32 bg-muted/50 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            HOW WE WORK
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            OUR PROCESS
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            A streamlined approach to delivering exceptional security services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-6 relative group hover:border-accent/30"
                            >
                                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                    <span className="font-display text-2xl text-accent">{step.step}</span>
                                </div>
                                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                    <step.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Tips Section */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="bg-warning/10 text-warning border-warning/20 mb-4">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                SECURITY TIPS
                            </Badge>
                            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                STAY SAFE WITH <span className="text-gradient-gold">OUR ADVICE</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Follow these essential security tips to protect yourself, 
                                your family, and your property.
                            </p>
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-8 py-6 font-semibold">
                                    Get Security Assessment
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                'Secure windows and openings with grills',
                                'Install strong main door with magic eye and chain lock',
                                'Keep security lights on at night',
                                'Verify servants and employees with photographs',
                                'Install burglar alarms for added protection',
                                'Avoid keeping valuables or heavy cash at home',
                                'Inform neighbors when away for extended periods',
                                'Ensure household effects are properly insured',
                            ].map((tip, index) => (
                                <Card key={index} className="p-4 flex items-start gap-4 bg-card border-border hover:border-accent/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <p className="text-foreground text-sm pt-1">{tip}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 lg:px-8">
                <div className="container mx-auto">
                    <Card className="bg-hero-pattern p-8 lg:p-16 text-center">
                        <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground mb-6">
                            NEED SECURITY SERVICES?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                            Contact us today for a free consultation and customized security solution 
                            for your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-8 py-6 text-lg font-semibold">
                                    Get Free Quote
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <a href="tel:+919739408213">
                                <Button 
                                    variant="outline" 
                                    className="rounded-lg px-8 py-6 text-lg font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    +91 9739408213
                                </Button>
                            </a>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
