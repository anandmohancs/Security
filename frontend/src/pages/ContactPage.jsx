import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { 
    Phone, Mail, MapPin, Clock, Send, ChevronRight,
    Building2, Users, Calendar, Shield, CheckCircle2
} from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Visit Us',
        details: ['#53/3C, Ground Floor, 20th Cross Road', 'Raghuvendra Layout, Hulimavu', 'Bannerghatta Road, Bangalore-560076'],
        action: 'Get Directions',
        href: 'https://maps.google.com',
    },
    {
        icon: Phone,
        title: 'Call Us',
        details: ['+91 9739408213', '+91 8073125585', 'Office: +91 9606924394'],
        action: 'Call Now',
        href: 'tel:+919739408213',
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: ['Shivasecurity.facility@gmail.com'],
        action: 'Send Email',
        href: 'mailto:Shivasecurity.facility@gmail.com',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Emergency Only', '24/7 Control Room Active'],
        action: null,
        href: null,
    },
];

const serviceOptions = [
    'Armed Guards Security',
    'Corporate Security',
    'VIP & Executive Protection',
    'Industrial Security',
    'Residential Security',
    'Event Security',
    'Lady Security Guards',
    'Security Training',
    'Other',
];

const guardRequirements = [
    '1-5 Guards',
    '6-10 Guards',
    '11-25 Guards',
    '26-50 Guards',
    '50+ Guards',
];

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        guardCount: '',
        location: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.name || !formData.phone || !formData.service) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Thank you! We will contact you shortly.');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                guardCount: '',
                location: '',
                message: '',
            });
        }, 3000);
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center pt-24 pb-12">
                {/* Background */}
                <div className="absolute inset-0 bg-muted/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-6 animate-fade-in">
                            <Phone className="w-3 h-3 mr-1" />
                            CONTACT US
                        </Badge>
                        <h1 className="font-display text-5xl lg:text-7xl text-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
                            GET IN
                            <span className="text-accent block">TOUCH</span>
                        </h1>
                        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed animate-fade-in animation-delay-200">
                            Ready to enhance your security? Contact us for a free consultation 
                            and customized security solution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 lg:py-0 lg:-mt-8 relative z-20 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {contactInfo.map((info, index) => (
                            <Card 
                                key={index}
                                className="card-elevated p-6 group hover:border-accent/30"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                        <info.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-display text-lg text-foreground mb-2">{info.title}</h3>
                                        {info.details.map((detail, i) => (
                                            <p key={i} className="text-muted-foreground text-sm truncate">{detail}</p>
                                        ))}
                                        {info.action && (
                                            <a 
                                                href={info.href}
                                                className="inline-flex items-center text-accent font-medium text-sm mt-3 hover:gap-2 transition-all"
                                            >
                                                {info.action}
                                                <ChevronRight className="w-4 h-4 ml-1" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 lg:py-32 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Form */}
                        <div>
                            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                                SERVICE INQUIRY
                            </Badge>
                            <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                                REQUEST A <span className="text-gradient-gold">QUOTE</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Fill out the form below and our team will get back to you 
                                within 24 hours with a customized security solution.
                            </p>

                            {isSubmitted ? (
                                <Card className="p-12 text-center border-success/30 bg-success/5">
                                    <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-success" />
                                    </div>
                                    <h3 className="font-display text-2xl text-foreground mb-2">
                                        Request Submitted!
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Thank you for contacting us. Our team will reach out to you shortly.
                                    </p>
                                </Card>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-foreground">
                                                Full Name <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="bg-card border-border focus:border-accent"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-foreground">
                                                Phone Number <span className="text-destructive">*</span>
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="bg-card border-border focus:border-accent"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-foreground">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="bg-card border-border focus:border-accent"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company" className="text-foreground">
                                                Company/Organization
                                            </Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Your Company Name"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="bg-card border-border focus:border-accent"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-foreground">
                                                Service Required <span className="text-destructive">*</span>
                                            </Label>
                                            <Select 
                                                value={formData.service} 
                                                onValueChange={(value) => handleSelectChange('service', value)}
                                            >
                                                <SelectTrigger className="bg-card border-border">
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {serviceOptions.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-foreground">
                                                Number of Guards Required
                                            </Label>
                                            <Select 
                                                value={formData.guardCount} 
                                                onValueChange={(value) => handleSelectChange('guardCount', value)}
                                            >
                                                <SelectTrigger className="bg-card border-border">
                                                    <SelectValue placeholder="Select requirement" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {guardRequirements.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location" className="text-foreground">
                                            Service Location
                                        </Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            placeholder="City/Area where service is required"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="bg-card border-border focus:border-accent"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-foreground">
                                            Additional Requirements
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your security needs..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="bg-card border-border focus:border-accent min-h-[120px]"
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        className="w-full btn-accent rounded-lg py-6 text-lg font-semibold"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Inquiry
                                                <Send className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Map & Additional Info */}
                        <div className="space-y-8">
                            {/* Map */}
                            <Card className="overflow-hidden border-border">
                                <div className="aspect-[4/3] bg-muted">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0092548773997!2d77.59!3d12.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzI0LjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Shiva Security Services Location"
                                    />
                                </div>
                            </Card>

                            {/* Quick Contact Card */}
                            <Card className="bg-hero-pattern p-8">
                                <h3 className="font-display text-2xl text-primary-foreground mb-4">
                                    Need Immediate Assistance?
                                </h3>
                                <p className="text-primary-foreground/80 mb-6">
                                    Our 24/7 control room is always ready to assist you with 
                                    any emergency security requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="tel:+919739408213" className="flex-1">
                                        <Button className="w-full btn-accent rounded-lg py-6 font-semibold">
                                            <Phone className="w-5 h-5 mr-2" />
                                            Call Hotline
                                        </Button>
                                    </a>
                                    <a href="mailto:Shivasecurity.facility@gmail.com" className="flex-1">
                                        <Button 
                                            variant="outline" 
                                            className="w-full rounded-lg py-6 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                                        >
                                            <Mail className="w-5 h-5 mr-2" />
                                            Email Us
                                        </Button>
                                    </a>
                                </div>
                            </Card>

                            {/* Service Areas */}
                            <Card className="card-elevated p-6">
                                <h3 className="font-display text-xl text-foreground mb-4">
                                    Service Areas
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Bangalore', 'Delhi', 'Mumbai', 'Chennai', 'Hyderabad', 'Pune', 'Pan India'].map((city) => (
                                        <Badge key={city} variant="outline" className="px-3 py-1">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {city}
                                        </Badge>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32 bg-muted/50 px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
                            FAQ
                        </Badge>
                        <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-6">
                            FREQUENTLY ASKED QUESTIONS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                q: 'How quickly can you deploy security guards?',
                                a: 'We can deploy guards within 24-48 hours for urgent requirements. For regular deployments, we typically need 3-5 business days for proper briefing and coordination.',
                            },
                            {
                                q: 'Are your guards trained and certified?',
                                a: 'Yes, all our guards undergo comprehensive training covering security protocols, emergency response, first aid, and more. They receive certification upon completion.',
                            },
                            {
                                q: 'What areas do you serve?',
                                a: 'We primarily serve Bangalore and Delhi, but have the capability to provide services anywhere in India through our extensive network.',
                            },
                            {
                                q: 'Do you provide armed security guards?',
                                a: 'Yes, we provide armed guards with valid gun licenses. All our armed personnel are either ex-army or have undergone rigorous civilian training.',
                            },
                            {
                                q: 'What is your pricing structure?',
                                a: 'Pricing depends on various factors including number of guards, type of service, location, and duration. Contact us for a customized quote.',
                            },
                            {
                                q: 'Are you a licensed security provider?',
                                a: 'Yes, we are PSARA licensed (License No: PSA/L/39/KA/2022/AUG/3/244) and comply with all regulatory requirements.',
                            },
                        ].map((faq, index) => (
                            <Card key={index} className="card-elevated p-6">
                                <h3 className="font-display text-lg text-foreground mb-3">{faq.q}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
