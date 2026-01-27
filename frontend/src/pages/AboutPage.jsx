import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    Shield, Users, Award, Target, ChevronRight, CheckCircle2,
    Building, Clock, MapPin, Phone, Mail, Star, Heart, Eye
} from 'lucide-react';

const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started operations in Bangalore with a team of 10 security professionals.' },
    { year: '2012', title: 'Pan India Expansion', description: 'Expanded services to Delhi and other major cities across India.' },
    { year: '2016', title: '500+ Guards Milestone', description: 'Reached 500 active security personnel serving diverse clients.' },
    { year: '2022', title: 'PSARA License Renewed', description: 'Successfully renewed PSARA license, reinforcing our commitment to legal compliance.' },
];

const values = [
    { 
        icon: Shield, 
        title: 'Integrity', 
        description: 'We maintain the highest ethical standards in all our operations and client interactions.' 
    },
    { 
        icon: Target, 
        title: 'Excellence', 
        description: 'We strive for excellence in every security solution we provide to our clients.' 
    },
    { 
        icon: Heart, 
        title: 'Dedication', 
        description: 'Our team is dedicated to ensuring the safety and security of all our clients.' 
    },
    { 
        icon: Eye, 
        title: 'Vigilance', 
        description: 'We maintain constant vigilance and alertness in all our security operations.' 
    },
];

const team = [
    {
        role: 'Security Officers',
        description: 'Primarily from the army, holding Junior Commissioned Officers (JCOs) rank, with extensive experience in security operations.',
        count: '50+',
    },
    {
        role: 'Supervisors',
        description: 'Skilled and well-trained professionals in the art of security management and team coordination.',
        count: '30+',
    },
    {
        role: 'Head Guards',
        description: 'Senior guards who act as supervisors and ensure seamless operations in all situations.',
        count: '100+',
    },
    {
        role: 'Armed Guards',
        description: 'Personnel with valid gun-licenses, including ex-army professionals and trained civilians.',
        count: '80+',
    },
];

const certifications = [
    { label: 'PSARA License', value: 'PSA/L/39/KA/2022/AUG/3/244' },
    { label: 'Registration No', value: '18/193/CE/0034/2016' },
    { label: 'PF No', value: 'PYBOM2077458000' },
    { label: 'ESI No', value: '50000483230001018' },
    { label: 'PAN No', value: 'CSWPM8056Q' },
    { label: 'GSTIN', value: '29CSWP8056Q2Z8' },
];

export const AboutPage = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-hero-pattern px-4 lg:px-8 pt-24">
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 animate-fade-in">
                            <Building className="w-3 h-3 mr-1" />
                            ABOUT US
                        </Badge>
                        <h1 className="font-display text-5xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
                            YOUR TRUSTED SECURITY
                            <span className="text-gradient-gold block">PARTNER</span>
                        </h1>
                        <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed animate-fade-in animation-delay-200">
                            Shiva Security Services is a leader in the field of security guards, 
                            providing comprehensive protection solutions across Bangalore, Delhi, 
                            and anywhere in India.
                        </p>
                    </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Our Story Section */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img 
                                        src="https://images.pexels.com/photos/34954628/pexels-photo-34954628.jpeg?w=800&h=600&fit=crop"
                                        alt="Security Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <Card className="absolute -bottom-8 -right-8 lg:-right-12 p-6 bg-card shadow-xl border-accent/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
                                            <Clock className="w-8 h-8 text-accent-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-display text-4xl text-foreground">15+</p>
                                            <p className="text-muted-foreground text-sm">Years Experience</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2">
                            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                                OUR STORY
                            </Badge>
                            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                A LEGACY OF <span className="text-gradient-gold">PROTECTION</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Founded with a vision to provide fool-proof security solutions, 
                                    Shiva Security Services has grown to become one of the most trusted 
                                    names in the security industry. Our journey began with a small team 
                                    of dedicated professionals and has now expanded to serve clients 
                                    across India.
                                </p>
                                <p>
                                    We are committed to offering customized security and allied services 
                                    to industrial, commercial, and business houses catering to domestic 
                                    markets. Our large network allows single point contact for 
                                    multi-locational clients, ensuring quick and speedy services.
                                </p>
                                <p>
                                    With a team primarily comprising ex-army personnel and JCOs, 
                                    we bring military-grade discipline and professionalism to 
                                    civilian security operations.
                                </p>
                            </div>
                            <Link to="/contact" className="inline-block mt-8">
                                <Button className="btn-accent rounded-lg px-8 py-6 font-semibold">
                                    Get in Touch
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 lg:py-32 bg-muted/50 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="card-elevated p-8 lg:p-12 border-accent/20 group hover:border-accent/40">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <Target className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="font-display text-3xl text-foreground mb-4">OUR MISSION</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To provide comprehensive, reliable, and professional security services 
                                that exceed client expectations. We aim to be the first choice for 
                                businesses and individuals seeking trusted protection through trained 
                                personnel, cutting-edge practices, and unwavering commitment to safety.
                            </p>
                        </Card>
                        
                        <Card className="card-elevated p-8 lg:p-12 border-accent/20 group hover:border-accent/40">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <Eye className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="font-display text-3xl text-foreground mb-4">OUR VISION</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be recognized as India&#39;s premier security service provider, 
                                setting industry standards for professionalism, reliability, and 
                                innovation. We envision a safer India where every client feels 
                                secure and protected through our comprehensive security solutions.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            CORE VALUES
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            WHAT DRIVES US
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our values form the foundation of everything we do, guiding our 
                            actions and decisions in serving our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-6 text-center group hover:border-accent/30"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                                    <value.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 lg:py-32 bg-hero-pattern px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
                            OUR JOURNEY
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground mb-6">
                            MILESTONES
                        </h2>
                        <p className="text-primary-foreground/80 text-lg">
                            Key moments that have shaped our growth and success over the years.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />
                            
                            {milestones.map((milestone, index) => (
                                <div 
                                    key={index}
                                    className={`relative flex items-start gap-8 mb-12 ${
                                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} hidden lg:block`}>
                                        <Card className="inline-block p-6 bg-card/10 backdrop-blur border-accent/20">
                                            <p className="font-display text-3xl text-accent mb-2">{milestone.year}</p>
                                            <h3 className="font-display text-xl text-primary-foreground mb-2">{milestone.title}</h3>
                                            <p className="text-primary-foreground/70 text-sm">{milestone.description}</p>
                                        </Card>
                                    </div>
                                    
                                    <div className="absolute left-4 lg:left-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center -translate-x-1/2 z-10">
                                        <div className="w-3 h-3 rounded-full bg-accent-foreground" />
                                    </div>
                                    
                                    <div className="flex-1 pl-12 lg:pl-0 lg:hidden">
                                        <Card className="p-6 bg-card/10 backdrop-blur border-accent/20">
                                            <p className="font-display text-3xl text-accent mb-2">{milestone.year}</p>
                                            <h3 className="font-display text-xl text-primary-foreground mb-2">{milestone.title}</h3>
                                            <p className="text-primary-foreground/70 text-sm">{milestone.description}</p>
                                        </Card>
                                    </div>
                                    
                                    <div className="flex-1 hidden lg:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Structure */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            OUR TEAM
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            PROFESSIONAL SECURITY PERSONNEL
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our team comprises highly trained professionals with diverse backgrounds, 
                            primarily from military and security services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {team.map((member, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-8 flex gap-6 group hover:border-accent/30"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                    <p className="font-display text-2xl text-accent">{member.count}</p>
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-foreground mb-2">{member.role}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 lg:py-32 bg-muted/50 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            <Award className="w-3 h-3 mr-1" />
                            CERTIFICATIONS
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            LICENSED & COMPLIANT
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We maintain all necessary licenses and registrations required for 
                            professional security operations in India.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
                        {certifications.map((cert, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-6 text-center"
                            >
                                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">{cert.label}</p>
                                <p className="font-mono text-sm text-foreground break-all">{cert.value}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 lg:px-8">
                <div className="container mx-auto">
                    <Card className="bg-hero-pattern p-8 lg:p-16 text-center">
                        <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground mb-6">
                            READY TO WORK WITH US?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                            Join hundreds of satisfied clients who trust Shiva Security Services 
                            for their protection needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-8 py-6 text-lg font-semibold">
                                    Contact Us Today
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

export default AboutPage;
