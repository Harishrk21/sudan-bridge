import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  GraduationCap,
  FileText,
  Shield,
  MessageCircle,
  BarChart3,
  Plane,
  Home,
  CreditCard,
  Globe,
  Clock,
  CheckCircle2,
  ArrowRight,
  Lock,
  Cloud,
  Users,
  Phone,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: 'خدمات العلاج الطبي',
      subtitle: 'Medical Treatment Services',
      description: 'Connect with India\'s top hospitals for specialized medical treatments, surgeries, and consultations. Our network includes 50+ accredited hospitals across all major specializations.',
      features: [
        'Medical Reports Management & Review',
        'Hospital Matching & Coordination',
        'Treatment Planning & Cost Estimation',
        'Radiology & Lab Services Coordination',
        'Second Opinion Consultations',
        'Post-Treatment Follow-up Care',
      ],
      href: '/medical',
      featured: true,
    },
    {
      icon: GraduationCap,
      title: 'خدمات القبول الجامعي',
      subtitle: 'Academic Admission Services',
      description: 'Seamless university admissions process with document verification and academic counseling. Access to 30+ partner universities for various programs.',
      features: [
        'University Selection & Applications',
        'Certificate Verification & Attestation',
        'Academic Counseling & Guidance',
        'Student Visa Assistance',
        'Scholarship Guidance',
        'Pre-Departure Support',
      ],
      href: '/academic',
      featured: true,
    },
    {
      icon: Plane,
      title: 'خدمات الزوار',
      subtitle: 'Visitor Services',
      description: 'Comprehensive travel and visitor assistance for those traveling to India for medical treatment, education, or tourism purposes.',
      features: [
        'Visitor Visa Processing',
        'Travel Itinerary Planning',
        'Airport Pickup & Drop',
        'Hotel & Accommodation',
        'Local Transportation',
        'City Tours & Guidance',
      ],
      href: '/contact',
    },
  ];

  const supportServices = [
    {
      icon: FileText,
      title: 'Document Management',
      subtitle: 'إدارة المستندات',
      description: 'Secure document vault with end-to-end encryption for all your medical and academic documents.',
      features: ['End-to-End Encryption', 'Cloud Storage', 'Document Forwarding', 'Real-time Access'],
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      subtitle: 'المدفوعات الآمنة',
      description: 'Multiple payment options including Mobile Money, Bank Cards, and Bank Transfers with secure processing.',
      features: ['Mobile Money', 'Bank Cards', 'Bank Transfer', 'Secure Processing'],
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      subtitle: 'الدعم على مدار الساعة',
      description: 'Round-the-clock customer support with real-time chat in Arabic and English.',
      features: ['Live Chat', 'Arabic Support', 'Case Updates', 'Video Calls'],
    },
    {
      icon: BarChart3,
      title: 'Case Tracking',
      subtitle: 'تتبع الحالة',
      description: 'Track your case progress in real-time with step-by-step updates and timeline visualization.',
      features: ['Progress Tracking', 'Status Updates', 'Timeline View', 'Notifications'],
    },
  ];

  const additionalServices = [
    { icon: Home, title: 'Accommodation Booking', description: 'Hotel and apartment arrangements near hospitals/universities' },
    { icon: Globe, title: 'Translation Services', description: 'Document translation and interpreter services' },
    { icon: CreditCard, title: 'Insurance Assistance', description: 'Travel and health insurance coordination' },
    { icon: Users, title: 'Family Support', description: 'Assistance for accompanying family members' },
    { icon: Phone, title: 'Emergency Support', description: '24/7 emergency assistance for urgent situations' },
    { icon: Cloud, title: 'Telemedicine', description: 'Online consultations with Indian doctors' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              خدماتنا الشاملة
              <span className="block text-2xl sm:text-3xl mt-4 font-normal opacity-90">
                Our Comprehensive Services
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl max-w-3xl mx-auto">
              From medical treatment to academic admissions, we provide end-to-end support 
              for all your needs in India. Experience seamless coordination at every step.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/medical">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Medical Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/academic">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Academic Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Main Services"
            title="الخدمات الرئيسية"
            subtitle="Our core services designed to support your journey to India"
          />
          
          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <Card key={index} className={`hover-lift ${service.featured ? 'border-2 border-primary/30' : ''}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl flex-shrink-0 ${service.featured ? 'gradient-primary' : 'bg-primary/10'}`}>
                          <service.icon className={`h-7 w-7 ${service.featured ? 'text-primary-foreground' : 'text-primary'}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                          <p className="text-primary">{service.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:items-end">
                      {service.featured && (
                        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          Most Popular
                        </span>
                      )}
                      <Button size="lg" className="w-full lg:w-auto" asChild>
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Support Services"
            title="خدمات الدعم"
            subtitle="Essential support services that make your experience seamless"
          />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mb-3 text-sm text-primary">{service.subtitle}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Additional Services"
            title="خدمات إضافية"
            subtitle="Extra services to ensure a comfortable experience in India"
          />
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4 rounded-xl border bg-card p-5 hover-lift">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Process"
            title="كيف نعمل؟"
            subtitle="Simple steps to get started with our services"
          />
          
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: '1', title: 'Contact Us', description: 'Reach out via phone, email, or our online form' },
              { step: '2', title: 'Consultation', description: 'Free consultation to understand your needs' },
              { step: '3', title: 'Planning', description: 'We create a customized plan for you' },
              { step: '4', title: 'Support', description: 'End-to-end support throughout your journey' },
            ].map((item, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            هل أنت مستعد للبدء؟
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you achieve your healthcare or academic goals in India.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
