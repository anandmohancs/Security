# Shiva Security Services - Multi-Page Website

## Project Overview
A modern, professional multi-page website for Shiva Security Services, a security guard provider company based in Bangalore, India. The website features a navy blue and gold color scheme with smooth animations, responsive design, and a light/dark theme toggle.

## Technology Stack
- **Frontend:** React.js with React Router
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Notifications:** Sonner Toast

## Pages

### 1. Home Page (/)
- Split-screen hero section with professional security guard image
- Company statistics (15+ years, 500+ guards, 200+ clients, 24/7 support)
- Services overview grid with 6 service cards
- "Why Choose Us" section with features
- Client testimonials carousel
- Emergency hotline CTA section

### 2. About Page (/about)
- Company story with professional team image
- Mission & Vision cards
- Core values (Integrity, Excellence, Dedication, Vigilance)
- Company milestones timeline (2008-2022)
- Team structure breakdown
- Certifications & licenses display

### 3. Services Page (/services)
- Service category filter tabs (All, Armed, Corporate, Residential, Specialized)
- Service cards with images and descriptions
- Service detail modal on click
- "Our Process" section (Consultation → Planning → Deployment → Monitoring)
- Security tips section

### 4. Training Page (/training)
- Training overview with features
- Core training modules (9 modules with duration)
- Specialized training programs (6 industry-specific programs)
- Training journey steps
- Certification information

### 5. Contact Page (/contact)
- Contact info cards (Address, Phone, Email, Working Hours)
- Service inquiry form with validation
- Google Maps embed
- FAQ section

## Features

### Theme Toggle
- Floating theme switch button on the right middle of the screen
- Toggles between light and dark modes
- Persists preference in localStorage

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Touch-friendly interface
- Optimized images for different screen sizes

### Service Inquiry Form
- Fields: Name, Phone, Email, Company, Service Type, Guard Count, Location, Message
- Form validation (required fields)
- Success message on submission
- Service options dropdown

## Design System

### Colors
- **Primary (Navy Blue):** HSL 215 60% 25%
- **Accent (Gold):** HSL 43 85% 55%
- **Background:** Light mode - HSL 210 20% 98%, Dark mode - HSL 215 70% 8%

### Typography
- **Display Font:** Bebas Neue (headings)
- **Body Font:** Inter (body text)

### Components
- Custom button variants (primary, accent)
- Elevated cards with gradient backgrounds
- Glass effect navigation
- Gold glow effects

## Company Information
- **Company:** Shiva Security Services
- **PSARA License:** PSA/L/39/KA/2022/AUG/3/244
- **Location:** Bangalore, Karnataka, India
- **Services:** Armed guards, corporate security, VIP protection, industrial security, residential security, event security, lady security guards, security training

## Contact
- **Phone:** +91 9739408213, +91 8073125585
- **Office:** +91 9606924394
- **Email:** Shivasecurity.facility@gmail.com
- **Address:** #53/3C, Ground Floor, 20th Cross Road, Raghuvendra Layout, Hulimavu, Bannerghatta Road, Bangalore-560076

## Notes
- This is a **frontend prototype** with mock form submissions
- Form data is not persisted to a backend database
- All company information extracted from the provided PDF profile
