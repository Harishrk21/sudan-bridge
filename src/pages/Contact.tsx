import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SectionHeading from '@/components/ui/SectionHeading';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/SEO';

const Contact: React.FC = () => {
  const { showSudanese } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: showSudanese ? 'البريد الإلكتروني' : 'Email',
      subtitle: 'Email',
      value: 'support@sudind.com',
      link: 'mailto:support@sudind.com',
    },
    {
      icon: Phone,
      title: showSudanese ? 'الهاتف' : 'Phone',
      subtitle: 'Phone (Sudan)',
      value: '+249 11 246 0791',
      link: 'tel:+249112460791',
    },
    {
      icon: Phone,
      title: showSudanese ? 'الهاتف' : 'Phone',
      subtitle: 'Phone (India)',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: MessageCircle,
      title: showSudanese ? 'واتساب' : 'WhatsApp',
      subtitle: 'WhatsApp',
      value: '+249 11 246 0791',
      link: 'https://wa.me/249112460791',
    },
  ];

  const offices = [
    {
      icon: Building2,
      city: showSudanese ? 'الخرطوم' : 'Khartoum',
      country: 'Sudan',
      address: 'Al-Riyadh District, Khartoum, Sudan',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM',
    },
    {
      icon: Building2,
      city: showSudanese ? 'تشيناي' : 'Chennai',
      country: 'India',
      address: 'T. Nagar, Chennai, India',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
  ];

  const faqs = [
    {
      question: showSudanese ? 'كم من الوقت تستغرق العملية؟' : 'How long does the process take?',
      answer: 'The process typically takes 2-4 weeks depending on the type of service. Medical cases can be expedited for urgent situations.',
    },
    {
      question: showSudanese ? 'ما هي تكلفة الخدمات؟' : 'What are the service costs?',
      answer: 'Our consultation is free. Service fees vary based on the type of assistance needed. We provide detailed cost breakdowns upfront.',
    },
    {
      question: showSudanese ? 'هل تساعدون في التأشيرة؟' : 'Do you help with visas?',
      answer: 'Yes, we provide complete visa assistance including documentation, application submission, and interview preparation.',
    },
  ];

  return (
    <Layout>
      <SEO
        title="Contact Us - SudInd Smart Portal | Get in Touch"
        description="Reach out to SudInd Smart Portal for inquiries about medical treatment, academic admissions, or general questions. Our team responds within 24 hours. Offices in Khartoum, Sudan and Chennai, India."
        keywords="contact SudInd, Sudan India contact, medical consultation, academic counseling, support, help, phone number, email, WhatsApp, office locations"
        ogTitle="Contact SudInd Smart Portal - We're Here to Help"
        ogDescription="We're here to help! Reach out to us for any inquiries about medical treatment, academic admissions, or general questions."
        ogImage="/plain-logo.png"
        ogUrl="https://sudind.com/contact"
        canonical="/contact"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
              {showSudanese && 'تواصل معنا'}
              <span className="block text-2xl sm:text-3xl mt-4 font-normal opacity-90">
                Contact Us
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl max-w-3xl mx-auto">
              We're here to help! Reach out to us for any inquiries about medical treatment, 
              academic admissions, or general questions. Our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-colors text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{info.title}</span>
                <span className="text-xs text-muted-foreground">{info.subtitle}</span>
                <span className="mt-1 text-sm text-primary">{info.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">{showSudanese ? 'أرسل لنا رسالة' : 'Send Us a Message'}</h2>
              <p className="mb-6 text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">{showSudanese ? 'الاسم الكامل *' : 'Full Name *'}</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{showSudanese ? 'البريد الإلكتروني *' : 'Email *'}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{showSudanese ? 'رقم الهاتف' : 'Phone Number'}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+249 11 246 0791"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">{showSudanese ? 'الخدمة المطلوبة *' : 'Required Service *'}</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical">Medical Treatment</SelectItem>
                            <SelectItem value="academic">Academic Admission</SelectItem>
                            <SelectItem value="visitor">Visitor Services</SelectItem>
                            <SelectItem value="other">Other Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">{showSudanese ? 'الرسالة *' : 'Message *'}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Offices */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-foreground">{showSudanese ? 'مكاتبنا' : 'Our Offices'}</h2>
              <p className="mb-6 text-muted-foreground">
                Visit us at our offices in Sudan and India.
              </p>
              
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                          <office.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {office.city} <span className="text-muted-foreground font-normal">- {office.country}</span>
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {office.address}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {office.hours}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{showSudanese ? 'اتصال سريع' : 'Quick Contact'}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button variant="outline" className="h-auto py-4" asChild>
                    <a href="https://wa.me/249112460791" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                      <span>
                        WhatsApp<br />
                        <span className="text-xs text-muted-foreground">Chat with us instantly</span>
                      </span>
                    </a>
                  </Button>
                  <Button variant="outline" className="h-auto py-4" asChild>
                    <a href="tel:+249112460791">
                      <Phone className="mr-2 h-5 w-5 text-primary" />
                      <span>
                        Call Us<br />
                        <span className="text-xs text-muted-foreground">Speak to our team</span>
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQs"
            title={showSudanese ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            subtitle="Quick answers to common questions"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            {showSudanese ? 'نحن هنا لمساعدتك' : 'We Are Here to Help'}
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Don't hesitate to reach out. Our team is ready to assist you with your medical and academic needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+249112460791">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="https://wa.me/249112460791" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
