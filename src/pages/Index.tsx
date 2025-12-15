import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Heart,
  GraduationCap,
  FileText,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe,
  Stethoscope,
  MessageCircle,
  BarChart3,
  Sparkles,
  Zap,
  Lock,
  Brain,
  Star,
  Plane,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import StatCard from '@/components/ui/StatCard';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const Index: React.FC = () => {
  const { showSudanese } = useLanguage();
  const services = [
    {
      icon: Stethoscope,
      title: 'Medical Treatment',
      description: 'Connect with India\'s top hospitals for specialized treatments, surgeries, and consultations at affordable prices.',
      features: ['5+ Partner Hospitals', 'All Specializations', 'Complete Care Coordination'],
      href: '/medical',
      featured: true,
    },
    {
      icon: GraduationCap,
      title: 'Academic Admissions',
      description: 'Seamless university admissions to India\'s premier institutions with full documentation support.',
      features: ['3+ Partner Universities', 'Scholarship Guidance', 'Visa Assistance'],
      href: '/academic',
      featured: true,
    },
    {
      icon: Plane,
      title: 'Visitor Services',
      description: 'Comprehensive travel assistance for visitors including visa processing and accommodation arrangements.',
      features: ['Visa Processing', 'Travel Planning', 'Local Support'],
      href: '/services',
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Secure document vault with end-to-end encryption for all your medical and academic documents.',
      features: ['Encrypted Storage', 'Easy Sharing', 'Real-time Access'],
      href: '/services',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple payment options including Mobile Money, Bank Cards, and Bank Transfers.',
      features: ['Mobile Money', 'Bank Cards', 'Secure Processing'],
      href: '/services',
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with real-time chat in Arabic and English.',
      features: ['Arabic Support', 'Live Chat', 'Case Updates'],
      href: '/contact',
    },
  ];

  const stats = [
    { value: '500+', label: 'Successful Cases', icon: CheckCircle2 },
    { value: '5+', label: 'Partner Hospitals', icon: Building2 },
    { value: '3+', label: 'Partner Universities', icon: GraduationCap },
    { value: '24/7', label: 'Support Available', icon: Clock },
  ];

  const features = [
    { icon: Lock, text: 'End-to-End Encryption' },
    { icon: Brain, text: 'AI-Powered Processing' },
    { icon: Globe, text: 'Multi-language Support' },
    { icon: Zap, text: 'Fast & Secure' },
    { icon: BarChart3, text: 'Real-time Tracking' },
    { icon: Shield, text: 'Secure Cloud Storage' },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Medical Patient',
      content: 'SudInd helped me get cardiac surgery in India. The entire process was smooth and the team was incredibly supportive.',
      rating: 5,
    },
    {
      name: 'Fatima Ali',
      role: 'Medical Student',
      content: 'I got admission to a top medical college through SudInd. Their guidance throughout the process was invaluable.',
      rating: 5,
    },
    {
      name: 'Omar Mohamed',
      role: 'Parent',
      content: 'My son received excellent treatment for his condition. SudInd\'s coordination between Sudan and India was flawless.',
      rating: 5,
    },
  ];

  return (
    <Layout>
      <SEO
        title="SudInd Smart Portal - Your Gateway to Healthcare & Education in India"
        description="Connect with India's premier hospitals and universities. SudInd Smart Portal provides seamless medical treatment, academic admissions, and comprehensive support services for Sudanese patients and students."
        keywords="Sudan India, medical treatment India, study in India, Sudanese students India, medical tourism, MBBS India, healthcare India, academic admissions, visa assistance, document management, medical services India"
        ogTitle="SudInd Smart Portal - Healthcare & Education Gateway"
        ogDescription="Your trusted bridge connecting Sudan to India's finest healthcare facilities and educational institutions."
        ogImage="/plain-logo.png"
        ogUrl="https://sudind.com/"
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(/homebg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
            transform: 'scale(1)',
          }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span>Connecting Sudan to India's Best Healthcare & Education</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
              {showSudanese && 'بوابتك إلى'}
              <span className="block mt-2">
                Quality Healthcare & Education
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl md:text-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              SudInd Smart Portal connects patients, students, and visitors from Sudan to India's premier hospitals and universities with seamless coordination and support.
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <feature.icon className="h-4 w-4" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/medical">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Medical Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/academic">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Academic Admissions
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-card py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Who We Are"
            title="Your Trusted Bridge Between Sudan & India"
            subtitle="SudInd Smart Portal is an integrated digital platform that bridges the gap between Sudan and India, facilitating seamless connections for medical treatments, academic admissions, and professional services."
            titleClassName="font-playfair"
          />
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                {showSudanese && <h3 className="mb-2 text-xl font-semibold">المكتب الرئيسي - السودان</h3>}
                <p className="text-sm text-muted-foreground">
                  Centralized administration and client coordination in Khartoum
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">India Network</h3>
                <p className="text-sm text-muted-foreground">
                  Local coordinators and medical/academic experts across India
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                {showSudanese && <h3 className="mb-2 text-xl font-semibold">عملاؤنا</h3>}
                <p className="text-sm text-muted-foreground">
                  Patients, students, and visitors we proudly serve
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title={showSudanese ? "خدماتنا الشاملة" : "Our Comprehensive Services"}
            subtitle="Comprehensive solutions for your medical, academic, and travel needs - from initial consultation to successful completion."
          />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why SudInd?"
            title={showSudanese ? "لماذا تختارنا؟" : "Why Choose Us?"}
            subtitle="Advanced technology and dedicated support to make your journey seamless"
          />
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 rounded-xl border bg-card p-5 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Success Stories"
            title={showSudanese ? "قصص نجاح عملائنا" : "Success Stories"}
            subtitle="Hear from patients and students who achieved their goals with SudInd"
          />
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              {showSudanese ? 'ابدأ رحلتك اليوم' : 'Start Your Journey Today'}
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join hundreds of satisfied clients who trust SudInd for their medical and academic needs. Your journey to India starts here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/register">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
