import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Award,
  Globe,
  FileText,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Plane,
  Home,
  Shield,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const Academic: React.FC = () => {
  const { showSudanese } = useLanguage();
  const programs = [
    { icon: BookOpen, name: 'MBBS & Medical', description: 'Medical degrees from top Indian medical colleges' },
    { icon: Building2, name: 'Engineering', description: 'B.Tech, M.Tech from IITs and top engineering colleges' },
    { icon: DollarSign, name: 'MBA & Business', description: 'Management programs from IIMs and business schools' },
    { icon: GraduationCap, name: 'Science & Arts', description: 'Bachelor\'s and Master\'s in various disciplines' },
    { icon: Award, name: 'PhD & Research', description: 'Doctoral programs and research opportunities' },
    { icon: Globe, name: 'Short Courses', description: 'Certificate programs and skill development courses' },
  ];

  const process = [
    {
      step: '1',
      title: 'Academic Counseling',
      description: 'Discuss your goals and get guidance on the best programs and universities for you.',
    },
    {
      step: '2',
      title: 'University Selection',
      description: 'Our experts match you with universities based on your profile and preferences.',
    },
    {
      step: '3',
      title: 'Application Support',
      description: 'Complete assistance with application forms, essays, and document preparation.',
    },
    {
      step: '4',
      title: 'Document Verification',
      description: 'Verification and attestation of all academic documents and certificates.',
    },
    {
      step: '5',
      title: 'Visa Processing',
      description: 'Complete support for student visa application and interview preparation.',
    },
    {
      step: '6',
      title: 'Pre-Departure',
      description: 'Orientation, travel arrangements, and accommodation setup in India.',
    },
  ];

  const universities = [
    'Delhi University',
    'JNU',
    'IIT Delhi',
    'AIIMS',
    'Manipal University',
    'Amity University',
    'VIT',
    'Christ University',
  ];

  const benefits = [
    { icon: Award, text: 'Globally Recognized Degrees' },
    { icon: DollarSign, text: 'Affordable Tuition Fees' },
    { icon: Users, text: 'Expert Counselors' },
    { icon: FileText, text: 'Complete Documentation' },
    { icon: Plane, text: 'Visa Assistance' },
    { icon: Home, text: 'Accommodation Support' },
  ];

  return (
    <Layout>
      <SEO
        title="Academic Admission Services - Study in India for Sudanese Students"
        description="Begin your academic journey at India's top universities. From MBBS to MBA, we guide you through every step of the admission process with 3+ partner universities."
        keywords="study in India, MBBS India, university admission India, academic admission, student visa India, medical education India, engineering India, MBA India, scholarship India, education India"
        ogTitle="Academic Admission Services in India - SudInd Smart Portal"
        ogDescription="Quality education in India. Seamless university admissions with complete documentation support and visa assistance."
        ogImage="/plain-logo.png"
        ogUrl="https://sudind.com/academic"
        canonical="/academic"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
              <GraduationCap className="h-4 w-4" />
              <span>Quality Education in India</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              {showSudanese && 'خدمات القبول الجامعي'}
              <span className="block text-2xl sm:text-3xl mt-4 font-normal opacity-90">
                Academic Admission Services
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl">
              Begin your academic journey at India's top universities. From MBBS to MBA, 
              we guide you through every step of the admission process.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Free Counseling Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/register">Start Application</Link>
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

      {/* Programs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Programs"
            title={showSudanese ? "البرامج الأكاديمية" : "Academic Programs"}
            subtitle="Wide range of undergraduate, postgraduate, and professional programs at India's best institutions."
          />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Card key={index} className="hover-lift group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{program.name}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MBBS Highlight */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block mb-4 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
                Most Popular
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                {showSudanese ? 'دراسة الطب (MBBS) في الهند' : 'MBBS in India'}
              </h2>
              <p className="mb-6 text-muted-foreground">
                India is one of the most sought-after destinations for medical education, offering high-quality MBBS programs 
                at affordable costs. Our expert team helps Sudanese students gain admission to MCI-recognized medical colleges.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  '5.5 years program including internship',
                  'MCI/NMC recognized colleges',
                  'English medium instruction',
                  'Clinical exposure from year 1',
                  'Affordable fees (USD 3,000-8,000/year)',
                  'Globally recognized degree',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" asChild>
                <Link to="/contact">
                  Enquire About MBBS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <Card className="bg-card border-2">
              <CardHeader className="gradient-primary rounded-t-lg">
                <CardTitle className="text-2xl text-primary-foreground text-center">
                  MBBS Admission Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {[
                  { label: 'Age', value: '17-25 years' },
                  { label: 'Education', value: '12th grade with PCB' },
                  { label: 'Minimum Marks', value: '50% in PCB (40% for reserved)' },
                  { label: 'NEET', value: 'NEET qualification required' },
                  { label: 'Duration', value: '5.5 years (including internship)' },
                  { label: 'Medium', value: 'English' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title={showSudanese ? "خطوات القبول" : "Admission Process"}
            subtitle="A comprehensive and transparent admission process from counseling to enrollment"
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

      {/* Partner Universities */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Partners"
            title={showSudanese ? "الجامعات الشريكة" : "Partner Universities"}
            subtitle="We have partnerships with 3+ top universities and colleges across India"
          />
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-12">
            {universities.map((university, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-medium text-foreground">{university}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 hover-lift overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
              <CardContent className="p-12 text-center relative">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <GraduationCap className="h-16 w-16 text-primary animate-bounce" />
                    <div className="absolute -top-2 -right-2">
                      <Award className="h-6 w-6 text-secondary animate-pulse" />
                    </div>
                  </div>
                </div>
                <h3 className="mb-3 text-3xl font-bold text-foreground flex items-center justify-center gap-2">
                  <span>Coming Soon</span>
                  <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                </h3>
                <p className="mb-6 text-muted-foreground text-lg">
                  We're actively establishing new partnerships with prestigious universities across India. 
                  <span className="block mt-2 font-medium text-foreground">Stay tuned for exciting announcements!</span>
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-8 w-8 text-primary animate-pulse" />
                    <span className="text-xs text-muted-foreground">MBBS</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Building2 className="h-8 w-8 text-primary animate-pulse delay-75" />
                    <span className="text-xs text-muted-foreground">Engineering</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <DollarSign className="h-8 w-8 text-primary animate-pulse delay-150" />
                    <span className="text-xs text-muted-foreground">MBA</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Award className="h-8 w-8 text-primary animate-pulse delay-200" />
                    <span className="text-xs text-muted-foreground">PhD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What's Included"
            title={showSudanese ? "ما يشمله خدماتنا" : "What's Included"}
            subtitle="Comprehensive support throughout your academic journey"
          />
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Academic Counseling',
              'University Selection',
              'Application Assistance',
              'Document Verification',
              'Embassy Attestation',
              'Visa Processing',
              'Travel Booking',
              'Airport Pickup',
              'Accommodation',
              'Bank Account Setup',
              'SIM Card Assistance',
              'Ongoing Support',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 rounded-xl border bg-card p-4 hover-lift">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            {showSudanese ? 'ابدأ مستقبلك الأكاديمي اليوم' : 'Start Your Academic Future Today'}
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step towards quality education in India. Our counselors are ready to guide you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Free Counseling
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

export default Academic;
