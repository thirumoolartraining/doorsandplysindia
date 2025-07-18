import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormSelect } from './FormSelect';
import { FormCheckbox } from './FormCheckbox';
import { LoadingButton } from './LoadingButton';
import { Alert } from './Alert';
import { Card } from './Card';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

interface FormData {
  // Step 1: Contact & Company Info
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  
  // Step 2: Order & Requirements
  productType: string;
  quantity: string;
  requirements: string;
  internationalShipping: boolean;
  oemRequirement: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const QuoteForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productType: '',
    quantity: '',
    requirements: '',
    internationalShipping: false,
    oemRequirement: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Check for pre-filled product from session storage
  useEffect(() => {
    const storedProduct = sessionStorage.getItem('quoteProduct');
    if (storedProduct) {
      try {
        const productData = JSON.parse(storedProduct);
        setFormData(prev => ({ ...prev, productType: productData.name }));
        sessionStorage.removeItem('quoteProduct');
      } catch (error) {
        console.error('Error parsing stored product data:', error);
      }
    }
  }, []);

  const productOptions = [
    { value: '', label: 'Select Product Type' },
    { value: 'Premium UPVC Sliding Door', label: 'Premium UPVC Sliding Door' },
    { value: 'UPVC Casement Door with Sidelight', label: 'UPVC Casement Door with Sidelight' },
    { value: 'UPVC French Door Set', label: 'UPVC French Door Set' },
    { value: 'UPVC Bi-Fold Door System', label: 'UPVC Bi-Fold Door System' },
    { value: 'UPVC Lift & Slide Door System', label: 'UPVC Lift & Slide Door System' },
    { value: 'UPVC Villa Entry Door', label: 'UPVC Villa Entry Door' },
    { value: 'UPVC Slide & Fold Door', label: 'UPVC Slide & Fold Door' },
    { value: 'mixed-upvc', label: 'Mixed UPVC Door Order' }
  ];

  const quantityOptions = [
    { value: '', label: 'Select Quantity Range' },
    { value: '5-25', label: '5-25 pieces (Starter Order)' },
    { value: '26-100', label: '26-100 pieces (Standard Order)' },
    { value: '101-500', label: '101-500 pieces (Bulk Order)' },
    { value: '501-1000', label: '501-1000 pieces (Large Order)' },
    { value: '1000+', label: '1000+ pieces (Enterprise Order)' }
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
    }

    if (step === 2) {
      if (!formData.productType) newErrors.productType = 'Product type is required';
      if (!formData.quantity) newErrors.quantity = 'Quantity range is required';
      if (!formData.requirements.trim()) newErrors.requirements = 'Project requirements are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(2)) return;

    setLoading(true);
    setSubmitError(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        productType: '',
        quantity: '',
        requirements: '',
        internationalShipping: false,
        oemRequirement: false
      });
      setCurrentStep(1);
    } catch (error) {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
            currentStep >= 1 ? 'bg-[#4B3A2A] text-white' : 'bg-white/60 text-[#1A1A1A]/60'
          }`}>
            1
          </div>
          <div className={`h-1 w-16 transition-all duration-300 ${
            currentStep >= 2 ? 'bg-[#4B3A2A]' : 'bg-white/30'
          }`} />
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
            currentStep >= 2 ? 'bg-[#4B3A2A] text-white' : 'bg-white/60 text-[#1A1A1A]/60'
          }`}>
            2
          </div>
        </div>
        <div className="flex justify-between mt-4 text-sm font-medium text-[#1A1A1A]/70">
          <span>Contact Info</span>
          <span>Order Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card variant="basic" className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#4B3A2A] mb-2">Contact & Company Information</h3>
                  <p className="text-[#1A1A1A]/70">Tell us about yourself and your company</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(value) => updateField('name', value)}
                    required
                    error={errors.name}
                  />
                  
                  <FormInput
                    label="Email Address"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(value) => updateField('email', value)}
                    required
                    error={errors.email}
                  />
                </div>

                <FormInput
                  label="Company Name"
                  placeholder="Your company or organization name"
                  value={formData.company}
                  onChange={(value) => updateField('company', value)}
                  required
                  error={errors.company}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Phone Number"
                    type="tel"
                    placeholder="+1-234-567-8901"
                    value={formData.phone}
                    onChange={(value) => updateField('phone', value)}
                    required
                    error={errors.phone}
                  />
                  
                  <FormInput
                    label="Country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={(value) => updateField('country', value)}
                    required
                    error={errors.country}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#4B3A2A] text-white px-8 py-3 rounded-xl font-semibold tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#3A2A1A] flex items-center gap-2"
                  >
                    Next Step
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Card variant="basic" className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#4B3A2A] mb-2">Order & Requirements</h3>
                  <p className="text-[#1A1A1A]/70">Specify your UPVC door requirements</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormSelect
                    label="Product Type"
                    value={formData.productType}
                    onChange={(value) => updateField('productType', value)}
                    options={productOptions}
                    required
                    error={errors.productType}
                  />
                  
                  <FormSelect
                    label="Estimated Quantity"
                    value={formData.quantity}
                    onChange={(value) => updateField('quantity', value)}
                    options={quantityOptions}
                    required
                    error={errors.quantity}
                  />
                </div>

                <FormTextarea
                  label="Project Requirements & Notes"
                  placeholder="Please describe your project requirements, specifications, timeline, delivery location, and any custom needs..."
                  value={formData.requirements}
                  onChange={(value) => updateField('requirements', value)}
                  required
                  rows={5}
                  error={errors.requirements}
                />

                <div className="space-y-4 pt-4 border-t border-white/20">
                  <h4 className="font-semibold text-[#4B3A2A]">Additional Services</h4>
                  
                  <FormCheckbox
                    label="International Shipping Required"
                    value={formData.internationalShipping}
                    onValueChange={(checked) => updateField('internationalShipping', checked)}
                    description="Check if you need international delivery and export documentation"
                  />
                  
                  <FormCheckbox
                    label="OEM / White-label Supply Solutions"
                    value={formData.oemRequirement}
                    onValueChange={(checked) => updateField('oemRequirement', checked)}
                    description="Check if you need custom branding or private label supply solutions"
                  />
                </div>

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="border-2 border-[#4B3A2A] text-[#4B3A2A] px-6 py-3 rounded-xl font-semibold tracking-tight transition-all duration-300 hover:scale-105 hover:bg-[#4B3A2A] hover:text-white flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                  </button>
                  
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    className="px-8"
                  >
                    {loading ? 'Sending Request...' : 'Send Quote Request'}
                  </LoadingButton>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Success/Error Messages */}
      <div className="mt-8 space-y-4">
        {submitted && (
          <Alert variant="info" className="animate-fade-in">
            <div>
              <h3 className="font-semibold text-lg mb-2">Quote Request Received!</h3>
              <p>Thank you for your interest in our UPVC door supply services. Our export team will reach out to you within 24 hours with a detailed quotation and next steps.</p>
              <div className="mt-4 p-4 bg-white/40 rounded-lg border border-white/30">
                <p className="text-sm text-[#4B3A2A] font-medium">
                  📧 Confirmation email sent<br/>
                  📞 Expect a call from our export specialists<br/>
                  📋 Quote will include pricing, logistics, and documentation<br/>
                  📞 Questions? Call {CONTACT_INFO.phone} or email {CONTACT_INFO.email}
                </p>
              </div>
            </div>
          </Alert>
        )}

        {submitError && (
          <Alert variant="warning" className="animate-fade-in">
            <div>
              <h3 className="font-semibold text-lg mb-1">Submission Error</h3>
              <p>There was a problem submitting your request. Please check your connection and try again, or contact us directly at {CONTACT_INFO.email}</p>
            </div>
          </Alert>
        )}
      </div>
    </div>
  );
};