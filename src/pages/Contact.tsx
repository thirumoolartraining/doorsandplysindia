import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { Card } from '../components/Card';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import { FormCheckbox } from '../components/FormCheckbox';
import { LoadingButton } from '../components/LoadingButton';
import { Alert } from '../components/Alert';
import { Button } from '../components/Button';
import { ProductsFooter } from '../components/ProductsFooter';
import { Container } from '../components/Container';
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  isExportInquiry: z.boolean(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'contact', productId?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      isExportInquiry: false,
    },
  });

  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Contact', active: true }
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      reset();
      toast.success('Message sent successfully!');
      
      // Reset success state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main className="pt-20">
        <Container size="7xl" padding="md" className="pt-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </nav>

          {/* Hero Section */}
          <section aria-labelledby="contact-hero" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <h1 id="contact-hero" className="sr-only">Contact Doors & Plys India</h1>
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
              }}
            >
              <div className="absolute inset-0 bg-[#4B3A2A]/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
                  Get in Touch with Doors & Plys India
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                  Have a question, export inquiry, or need support? We're here to help.
                </p>

                <Alert variant="info" className="max-w-md mx-auto">
                  <div className="flex items-center gap-2 text-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Average response time: under 24 hours</span>
                  </div>
                </Alert>
              </motion.div>
            </div>
          </section>

          {/* Contact Form & Info Section */}
          <section aria-labelledby="contact-section" className="py-16 px-4 sm:px-6 lg:px-8">
            <h2 id="contact-section" className="sr-only">Contact Information and Form</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card variant="basic">
                    <h2 className="text-2xl font-bold text-accessible-text-primary mb-6 tracking-tight">
                      Request Information
                    </h2>

                    {submitted && (
                      <Alert variant="info" className="mb-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Message Received</h4>
                          <p>Our export specialists will respond within 24 hours with the information you need.</p>
                        </div>
                      </Alert>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Contact form">
                      <FormInput
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register('name')}
                        error={errors.name?.message}
                        required
                      />

                      <FormInput
                        label="Email Address"
                        type="email"
                        placeholder="your.email@company.com"
                        {...register('email')}
                        error={errors.email?.message}
                        required
                      />

                      <FormInput
                        label="Phone Number"
                        type="tel"
                        placeholder="+1-234-567-8901 (Optional)"
                        {...register('phone')}
                        error={errors.phone?.message}
                      />

                      <FormTextarea
                        label="Message"
                        placeholder="Tell us about your inquiry, project requirements, or how we can help you..."
                        {...register('message')}
                        error={errors.message?.message}
                        required
                        rows={5}
                      />

                      <FormCheckbox
                        label="This is an export/international inquiry"
                        {...register('isExportInquiry')}
                        description="Select if you need export quotations, international shipping, or bulk order information"
                      />

                      <LoadingButton
                        type="submit"
                        loading={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Sending Request...' : 'Send Request'}
                      </LoadingButton>
                    </form>
                  </Card>
                </motion.div>

                {/* Direct Contact Information */}
                <aside
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                  role="complementary"
                  aria-labelledby="direct-contact"
                >
                  <Card variant="basic">
                    <h2 id="direct-contact" className="text-2xl font-bold text-accessible-text-primary mb-6 tracking-tight">
                      Direct Contact
                    </h2>

                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C3A572]/20 p-3 rounded-xl">
                          <MapPin className="w-6 h-6 text-[#4B3A2A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-accessible-text-primary mb-2">Address</h3>
                          <address className="text-accessible-text-secondary not-italic leading-relaxed">
                            {CONTACT_INFO.address.line1}<br />
                            {CONTACT_INFO.address.line2}<br />
                            {CONTACT_INFO.address.line3}
                          </address>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C3A572]/20 p-3 rounded-xl">
                          <Phone className="w-6 h-6 text-[#4B3A2A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-accessible-text-primary mb-2">Phone</h3>
                          <a 
                            href={`tel:${CONTACT_INFO.phone}`}
                            className="text-accessible-text-secondary hover:text-[#C3A572] transition-colors duration-200 font-medium"
                          >
                            {CONTACT_INFO.phone}
                          </a>
                          <p className="text-sm text-accessible-text-muted mt-2 leading-relaxed">
                            {CONTACT_INFO.businessHours}
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C3A572]/20 p-3 rounded-xl">
                          <Mail className="w-6 h-6 text-[#4B3A2A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-accessible-text-primary mb-2">Email</h3>
                          <a 
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="text-accessible-text-secondary hover:text-[#C3A572] transition-colors duration-200 font-medium"
                          >
                            {CONTACT_INFO.email}
                          </a>
                          <p className="text-sm text-accessible-text-muted mt-2 leading-relaxed">
                            Professional response within 24 hours
                          </p>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C3A572]/20 p-3 rounded-xl">
                          <MessageCircle className="w-6 h-6 text-[#4B3A2A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-accessible-text-primary mb-2">WhatsApp</h3>
                          <a 
                            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accessible-text-secondary hover:text-[#C3A572] transition-colors duration-200 font-medium"
                          >
                            {CONTACT_INFO.whatsapp}
                          </a>
                          <p className="text-sm text-accessible-text-muted mt-2 leading-relaxed">
                            Direct messaging for urgent inquiries
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Map Placeholder */}
                  <Card variant="basic">
                    <h3 className="text-xl font-bold text-accessible-text-primary mb-4 tracking-tight">
                      Our Location
                    </h3>
                    <div 
                      className="h-64 bg-cover bg-center rounded-xl"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
                      }}
                    >
                      <div className="h-full bg-black/40 rounded-xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <MapPin className="w-12 h-12 mx-auto mb-4" />
                          <p className="text-lg font-semibold">Coimbatore, Tamil Nadu</p>
                          <p className="text-sm opacity-90">Manufacturing & Export Hub</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </aside>
              </div>
            </div>
          </section>

          {/* Call-to-Action Footer */}
          <section aria-labelledby="cta-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4B3A2A] to-[#C3A572]">
            <h2 id="cta-section" className="sr-only">Call to Action</h2>
            <div className="max-w-4xl mx-auto text-center">
              <Card variant="basic">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-[#C3A572]" />
                  <h3 className="text-2xl font-bold text-[#4B3A2A] tracking-tight">
                    Ready for Professional UPVC Door Supply?
                  </h3>
                </div>
                
                <p className="text-[#1A1A1A]/70 mb-6 max-w-2xl mx-auto">
                  Get competitive pricing, complete export documentation, and reliable delivery for your UPVC door requirements.
                </p>
                
                <Button 
                  variant="large" 
                  onClick={() => onNavigate?.('quote')}
                  className="mx-auto"
                >
                  Get Export Quote
                </Button>
              </Card>
            </div>
          </section>
        </Container>
      </main>
      
      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};