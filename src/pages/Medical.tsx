import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Activity,
  Microscope,
  Pill,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Clock,
  Shield,
  FileText,
  Phone,
  Star,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';

const Medical: React.FC = () => {
  const specializations = [
    { icon: Heart, name: 'Cardiology', description: 'Heart surgeries, bypass, valve replacement, angioplasty' },
    { icon: Brain, name: 'Neurology', description: 'Brain surgeries, spine treatments, neurological disorders' },
    { icon: Microscope, name: 'Oncology', description: 'Cancer treatment, chemotherapy, radiation therapy' },
    { icon: Bone, name: 'Orthopedics', description: 'Joint replacement, spine surgery, sports medicine' },
    { icon: Eye, name: 'Ophthalmology', description: 'LASIK, cataract surgery, retina treatments' },
    { icon: Baby, name: 'Pediatrics', description: 'Child healthcare, pediatric surgeries, neonatal care' },
    { icon: Activity, name: 'Transplants', description: 'Kidney, liver, heart, bone marrow transplants' },
    { icon: Pill, name: 'General Medicine', description: 'Diagnostics, preventive care, chronic disease management' },
  ];

  const process = [
    {
      step: '1',
      title: 'Submit Medical Reports',
      description: 'Upload your medical documents and describe your condition through our secure portal.',
    },
    {
      step: '2',
      title: 'Expert Review',
      description: 'Our medical team reviews your case and matches you with the best hospitals and doctors.',
    },
    {
      step: '3',
      title: 'Treatment Plan',
      description: 'Receive detailed treatment options with cost estimates from multiple hospitals.',
    },
    {
      step: '4',
      title: 'Travel Arrangements',
      description: 'We handle visa processing, travel bookings, and accommodation arrangements.',
    },
    {
      step: '5',
      title: 'Treatment in India',
      description: 'Receive world-class treatment with our coordinators supporting you throughout.',
    },
    {
      step: '6',
      title: 'Follow-up Care',
      description: 'Continued support and coordination with your local doctors post-treatment.',
    },
  ];

  const hospitals = [
    'Apollo Hospitals',
    'Fortis Healthcare',
    'Max Healthcare',
    'Medanta',
    'AIIMS',
    'Manipal Hospitals',
    'Narayana Health',
    'Kokilaben Hospital',
  ];

  const benefits = [
    { icon: Shield, text: 'JCI & NABH Accredited Hospitals' },
    { icon: Users, text: 'Experienced Surgeons & Specialists' },
    { icon: Clock, text: 'Minimal Waiting Time' },
    { icon: FileText, text: 'Complete Documentation Support' },
    { icon: Phone, text: 'Arabic-Speaking Coordinators' },
    { icon: Building2, text: '50+ Partner Hospitals' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
              <Stethoscope className="h-4 w-4" />
              <span>World-Class Medical Care</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              خدمات العلاج الطبي
              <span className="block text-2xl sm:text-3xl mt-4 font-normal opacity-90">
                Medical Treatment Services
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl">
              Access India's finest healthcare facilities for specialized treatments, surgeries, and consultations. 
              Our expert team coordinates everything from medical consultation to complete recovery.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/register">Submit Medical Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-b bg-card py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <benefit.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Specializations"
            title="التخصصات الطبية"
            subtitle="Our network covers all major medical specializations with access to India's top specialists and surgeons."
          />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((spec, index) => (
              <Card key={index} className="hover-lift group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <spec.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{spec.name}</h3>
                  <p className="text-sm text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="كيف نعمل؟"
            subtitle="A simple, streamlined process to get you the best medical care in India"
          />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground font-bold">
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

      {/* Partner Hospitals */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Partners"
            title="المستشفيات الشريكة"
            subtitle="We partner with India's most prestigious and accredited healthcare institutions"
          />
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hospitals.map((hospital, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-medium text-foreground">{hospital}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Complete Care Package
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                ما يشمله خدماتنا
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our medical treatment services include comprehensive support at every step of your healthcare journey.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Medical Report Review',
                  'Hospital Selection',
                  'Cost Estimation',
                  'Visa Assistance',
                  'Airport Pickup',
                  'Accommodation',
                  'Local Transport',
                  'Language Support',
                  'Treatment Coordination',
                  'Post-Treatment Care',
                  'Medical Records',
                  'Insurance Assistance',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-card border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Request Free Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Share your medical reports and get a free consultation from our medical experts.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link to="/register">
                      <FileText className="mr-2 h-5 w-5" />
                      Upload Medical Reports
                    </Link>
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            ابدأ رحلتك العلاجية اليوم
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Don't wait for your health. Contact us today and let us connect you with the best healthcare in India.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Medical;
