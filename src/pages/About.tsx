import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Users,
  Heart,
  Target,
  Eye,
  Award,
  Globe,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Star,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCard from '@/components/ui/StatCard';

const About: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Successful Cases', icon: CheckCircle2 },
    { value: '50+', label: 'Partner Hospitals', icon: Building2 },
    { value: '30+', label: 'Partner Universities', icon: Award },
    { value: '5+', label: 'Years of Service', icon: Clock },
  ];

  const values = [
    {
      icon: Heart,
      title: 'الرعاية والاهتمام',
      subtitle: 'Compassionate Care',
      description: 'We treat every client like family, ensuring personalized attention and support throughout their journey.',
    },
    {
      icon: Shield,
      title: 'الأمانة والنزاهة',
      subtitle: 'Trust & Integrity',
      description: 'Transparency in all dealings with clear communication about costs, processes, and expectations.',
    },
    {
      icon: Award,
      title: 'التميز والجودة',
      subtitle: 'Excellence',
      description: 'Partnering only with accredited institutions to ensure the highest quality of care and education.',
    },
    {
      icon: Globe,
      title: 'سهولة الوصول',
      subtitle: 'Accessibility',
      description: 'Making world-class healthcare and education accessible to everyone from Sudan.',
    },
  ];

  const team = [
    {
      name: 'Dr. Ahmed Ibrahim',
      role: 'Medical Director',
      description: 'Leading our medical coordination with 15+ years of healthcare experience.',
    },
    {
      name: 'Sarah Mohamed',
      role: 'Academic Counselor',
      description: 'Guiding students to the right universities with expertise in Indian education system.',
    },
    {
      name: 'Ravi Kumar',
      role: 'India Operations',
      description: 'Managing our India network and ensuring smooth coordination on the ground.',
    },
    {
      name: 'Fatima Hassan',
      role: 'Client Relations',
      description: 'Dedicated to ensuring every client receives exceptional service and support.',
    },
  ];

  const milestones = [
    { year: '2019', event: 'SudInd founded in Khartoum' },
    { year: '2020', event: 'Established India operations' },
    { year: '2021', event: '100+ successful medical cases' },
    { year: '2022', event: 'Launched academic services' },
    { year: '2023', event: '500+ clients served' },
    { year: '2024', event: 'Digital platform launched' },
    { year: '2025', event: 'Expanded partner network & AI integration' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              من نحن
              <span className="block text-2xl sm:text-3xl mt-4 font-normal opacity-90">
                About SudInd Smart Portal
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl max-w-3xl mx-auto">
              We are the trusted bridge connecting Sudanese people to India's finest healthcare facilities 
              and educational institutions, making quality services accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                قصتنا
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SudInd Smart Portal was born from a simple observation: many Sudanese families seeking 
                  quality healthcare and education in India faced numerous challenges - language barriers, 
                  unfamiliar systems, and lack of reliable guidance.
                </p>
                <p>
                  Founded in 2019, we set out to create a seamless bridge between Sudan and India. 
                  Our team of dedicated professionals in both countries work together to ensure that 
                  every patient receives the best medical care and every student finds their path to 
                  academic success.
                </p>
                <p>
                  Today, we have helped over 500 families achieve their healthcare and educational goals, 
                  and we continue to grow our network of partner institutions to serve you better.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">الخرطوم</h3>
                <p className="text-sm text-muted-foreground">Sudan Headquarters</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">نيودلهي</h3>
                <p className="text-sm text-muted-foreground">India Operations</p>
              </Card>
              <Card className="col-span-2 p-6 text-center hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">الوصول العالمي</h3>
                <p className="text-sm text-muted-foreground">Supporting clients across Sudan and beyond</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="hover-lift border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl gradient-primary">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">مهمتنا</h3>
                <h4 className="mb-4 text-lg text-primary">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To make world-class healthcare and education accessible to every Sudanese individual 
                  by providing comprehensive, trustworthy, and compassionate services that bridge the 
                  gap between Sudan and India's premier institutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
                  <Eye className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">رؤيتنا</h3>
                <h4 className="mb-4 text-lg text-secondary">Our Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and comprehensive gateway for Sudanese families seeking 
                  medical treatment and educational opportunities in India, known for excellence, 
                  integrity, and transformative impact on lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="قيمنا"
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mb-3 text-sm text-primary">{value.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            title="فريقنا"
            subtitle="Dedicated professionals committed to your success"
          />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="رحلتنا"
            subtitle="Key milestones in our growth story"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-0.5" />
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} pl-12 md:pl-0`}>
                    <Card className="hover-lift inline-block">
                      <CardContent className="p-4">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-0 md:left-1/2 md:-ml-3 flex items-center justify-center w-8 h-8 rounded-full gradient-primary">
                    <Star className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
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
            Join hundreds of families who have trusted SudInd with their healthcare and education needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
