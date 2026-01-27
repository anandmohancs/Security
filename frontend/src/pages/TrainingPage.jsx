import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    GraduationCap, Shield, Users, ChevronRight, CheckCircle2,
    Target, Clock, Award, BookOpen, Flame, Heart, Phone,
    FileText, Radio, AlertTriangle, Lock
} from 'lucide-react';

const trainingModules = [
    {
        icon: Shield,
        title: 'Drill & Behavioral Skills',
        description: 'Professional conduct, discipline, and proper behavior in security environments.',
        duration: '2 Days',
    },
    {
        icon: FileText,
        title: 'Gate House Functions',
        description: 'Entry/exit management, visitor logs, and access control procedures.',
        duration: '1 Day',
    },
    {
        icon: Target,
        title: 'Search Procedures',
        description: 'Proper techniques for searching individuals, vehicles, and packages.',
        duration: '1 Day',
    },
    {
        icon: Users,
        title: 'Patrolling Duties',
        description: 'Effective patrol routes, observation techniques, and reporting.',
        duration: '1 Day',
    },
    {
        icon: AlertTriangle,
        title: 'Contingency Management',
        description: 'Emergency response, crisis handling, and incident management.',
        duration: '1 Day',
    },
    {
        icon: Heart,
        title: 'Health, Safety & First Aid',
        description: 'Basic first aid, CPR, and workplace safety protocols.',
        duration: '1 Day',
    },
    {
        icon: Radio,
        title: 'Communication Equipment',
        description: 'Handling wireless devices, mobile phones, and radio communication.',
        duration: '0.5 Day',
    },
    {
        icon: Flame,
        title: 'Fire Safety & Prevention',
        description: 'Fire prevention, firefighting basics, and evacuation procedures.',
        duration: '1 Day',
    },
    {
        icon: Lock,
        title: 'Legal Aspects',
        description: 'Understanding security laws, rights, and responsibilities.',
        duration: '0.5 Day',
    },
];

const specializedTraining = [
    {
        title: 'ATM Security',
        description: 'Specialized protocols for securing automated teller machines and financial installations.',
        duration: '3 Days',
    },
    {
        title: 'MNC & Corporate',
        description: 'Corporate security standards for multinational companies and business houses.',
        duration: '3 Days',
    },
    {
        title: 'Retail Security',
        description: 'Loss prevention, customer service, and retail environment security.',
        duration: '2 Days',
    },
    {
        title: 'Hospitality Sector',
        description: 'Hotel and resort security with focus on guest safety and service.',
        duration: '3 Days',
    },
    {
        title: 'Manufacturing',
        description: 'Industrial safety, hazmat awareness, and factory security protocols.',
        duration: '3 Days',
    },
    {
        title: 'Port Security',
        description: 'Specialized training for port and logistics hub security operations.',
        duration: '5 Days',
    },
];

const trainingFeatures = [
    'Minimum matriculate qualification for all trainees',
    'Specialized training of 7 days for specific locations',
    'Constant refresher and on-the-job trainings',
    'Specific need-based training programs',
    'Philosophy and ethics training provided',
    'Regular assessment and evaluation',
    'Certification upon completion',
    'Ongoing professional development',
];

export const TrainingPage = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center pt-24 pb-12">
                {/* Background */}
                <div className="absolute inset-0 bg-muted/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 animate-fade-in">
                            <GraduationCap className="w-3 h-3 mr-1" />
                            TRAINING PROGRAMS
                        </Badge>
                        <h1 className="font-display text-5xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
                            PROFESSIONAL
                            <span className="text-accent block">SECURITY TRAINING</span>
                        </h1>
                        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed animate-fade-in animation-delay-200">
                            Comprehensive training programs designed to create highly skilled, 
                            professional security personnel equipped for any challenge.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Overview */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                                OUR APPROACH
                            </Badge>
                            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                TRAINING IS AN <span className="text-gradient-gold">ONGOING PROCESS</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                At Shiva Security Services, we believe that training is not a one-time event 
                                but a continuous journey. Our comprehensive training programs cover all possible 
                                needs and are tailored to meet specific client requirements.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {trainingFeatures.slice(0, 6).map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle2 className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-foreground text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <Link to="/contact">
                                <Button className="btn-accent rounded-lg px-8 py-6 font-semibold">
                                    Enroll for Training
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1750068382387-3e4708c998a8?w=800&h=600&fit=crop"
                                    alt="Security Training"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <Card className="absolute -bottom-8 -left-8 lg:-left-12 p-6 bg-card shadow-xl border-accent/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
                                        <Award className="w-8 h-8 text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-display text-3xl text-foreground">7+</p>
                                        <p className="text-muted-foreground text-sm">Days Intensive</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Training Modules */}
            <section className="py-20 lg:py-32 bg-muted/50 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            CORE CURRICULUM
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            TRAINING MODULES
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our strong training capsule includes comprehensive modules covering 
                            all aspects of professional security operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trainingModules.map((module, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-6 group hover:border-accent/30"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                        <module.icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-display text-lg text-foreground">{module.title}</h3>
                                            <Badge variant="outline" className="text-xs">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {module.duration}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground text-sm">{module.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Training */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            SPECIALIZED PROGRAMS
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            INDUSTRY-SPECIFIC TRAINING
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Customized training programs designed for specific industries 
                            and locations to meet unique security requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializedTraining.map((program, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-6 group hover:border-accent/30 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-display text-xl text-foreground">{program.title}</h3>
                                    <Badge className="bg-accent/10 text-accent border-accent/20">
                                        {program.duration}
                                    </Badge>
                                </div>
                                <p className="text-muted-foreground text-sm flex-1">{program.description}</p>
                                <Link 
                                    to="/contact"
                                    className="mt-4 inline-flex items-center text-accent font-medium text-sm hover:gap-3 transition-all duration-300"
                                >
                                    Enquire Now
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Process */}
            <section className="py-20 lg:py-32 bg-hero-pattern px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
                            TRAINING JOURNEY
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-primary-foreground mb-6">
                            FROM RECRUIT TO PROFESSIONAL
                        </h2>
                        <p className="text-primary-foreground/80 text-lg">
                            Our structured training journey transforms recruits into 
                            highly skilled security professionals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', title: 'Induction', desc: 'Basic orientation and company values introduction' },
                            { step: '02', title: 'Core Training', desc: '7-day intensive training covering all fundamentals' },
                            { step: '03', title: 'Specialization', desc: 'Industry-specific training based on deployment' },
                            { step: '04', title: 'On-Job Training', desc: 'Supervised practical experience at actual sites' },
                        ].map((phase, index) => (
                            <Card 
                                key={index}
                                className="p-6 bg-card/10 backdrop-blur border-accent/20 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="font-display text-2xl text-accent-foreground">{phase.step}</span>
                                </div>
                                <h3 className="font-display text-xl text-primary-foreground mb-2">{phase.title}</h3>
                                <p className="text-primary-foreground/70 text-sm">{phase.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <Card className="card-elevated p-8 lg:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full translate-x-1/4 -translate-y-1/4" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-6">
                                        <Award className="w-10 h-10 text-accent-foreground" />
                                    </div>
                                    <h3 className="font-display text-3xl text-foreground mb-4">
                                        TRAINING CERTIFICATE
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        Upon successful completion of our training program, all security 
                                        personnel receive official certification validating their skills 
                                        and competencies.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Recognized training credentials',
                                            'Skill assessment verification',
                                            'Professional competency validation',
                                            'Ongoing development tracking',
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                                <span className="text-foreground text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>
                        
                        <div className="order-1 lg:order-2">
                            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                                CERTIFICATION
                            </Badge>
                            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                VALIDATED <span className="text-gradient-gold">EXCELLENCE</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Our certification process ensures that every guard deployed meets 
                                the highest standards of professional security. Regular assessments 
                                and refresher training maintain these standards throughout their tenure.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <Button className="btn-accent rounded-lg px-8 py-6 font-semibold w-full sm:w-auto">
                                        Start Training
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                                <a href="tel:+919739408213">
                                    <Button variant="outline" className="rounded-lg px-8 py-6 font-semibold w-full sm:w-auto">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 lg:px-8">
                <div className="container mx-auto">
                    <Card className="bg-muted p-8 lg:p-16">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                    TRAIN WITH THE BEST
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    Join our comprehensive security training program and become 
                                    a certified security professional.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/contact">
                                        <Button className="btn-accent rounded-lg px-8 py-6 text-lg font-semibold">
                                            Enroll Now
                                            <ChevronRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </Link>
                                    <Link to="/services">
                                        <Button variant="outline" className="rounded-lg px-8 py-6 text-lg font-semibold">
                                            View Services
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Card className="p-6 bg-card text-center">
                                    <p className="font-display text-4xl text-accent mb-2">500+</p>
                                    <p className="text-muted-foreground text-sm">Guards Trained</p>
                                </Card>
                                <Card className="p-6 bg-card text-center">
                                    <p className="font-display text-4xl text-accent mb-2">15+</p>
                                    <p className="text-muted-foreground text-sm">Training Years</p>
                                </Card>
                                <Card className="p-6 bg-card text-center">
                                    <p className="font-display text-4xl text-accent mb-2">9</p>
                                    <p className="text-muted-foreground text-sm">Core Modules</p>
                                </Card>
                                <Card className="p-6 bg-card text-center">
                                    <p className="font-display text-4xl text-accent mb-2">6</p>
                                    <p className="text-muted-foreground text-sm">Specializations</p>
                                </Card>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default TrainingPage;
