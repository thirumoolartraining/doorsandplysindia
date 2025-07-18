import React, { useState } from 'react';
import { Card } from './Card';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { LoadingButton } from './LoadingButton';
import { Alert } from './Alert';

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shippingAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  billingAddressSame: boolean;
  billingAddress: string;
  specialInstructions: string;
}

interface CheckoutFormProps {
  onSubmit?: (data: CheckoutFormData) => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    billingAddressSame: true,
    billingAddress: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = 'Shipping address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    if (!formData.billingAddressSame && !formData.billingAddress.trim()) {
      newErrors.billingAddress = 'Billing address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setSubmitError(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/failure for demo
      if (Math.random() > 0.2) {
        setSubmitted(true);
        onSubmit?.(formData);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof CheckoutFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (submitted) {
    return (
      <Card variant="basic" className="text-center py-12">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
          Order Placed Successfully!
        </h2>
        <p className="text-[#1A1A1A]/70 mb-6 max-w-md mx-auto">
          Thank you for your order. You'll receive a confirmation email shortly with tracking information.
        </p>
        <div className="bg-[#C3A572]/10 backdrop-blur-sm rounded-lg p-4 border border-[#C3A572]/20">
          <p className="text-sm text-[#4B3A2A]">
            <strong>Order ID:</strong> #DP{Date.now().toString().slice(-6)}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <Card variant="basic">
        <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormInput
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(value) => updateField('firstName', value)}
            required
            error={errors.firstName}
          />
          
          <FormInput
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(value) => updateField('lastName', value)}
            required
            error={errors.lastName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(value) => updateField('email', value)}
            required
            error={errors.email}
          />
          
          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={(value) => updateField('phone', value)}
            required
            error={errors.phone}
          />
        </div>
      </Card>

      {/* Shipping Address */}
      <Card variant="basic">
        <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
          Shipping Address
        </h2>
        
        <div className="space-y-4">
          <FormTextarea
            label="Street Address"
            placeholder="Enter your full address"
            value={formData.shippingAddress}
            onChange={(value) => updateField('shippingAddress', value)}
            required
            rows={2}
            error={errors.shippingAddress}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="City"
              placeholder="City"
              value={formData.city}
              onChange={(value) => updateField('city', value)}
              required
              error={errors.city}
            />
            
            <FormInput
              label="State/Province"
              placeholder="State"
              value={formData.state}
              onChange={(value) => updateField('state', value)}
              required
              error={errors.state}
            />
            
            <FormInput
              label="ZIP/Postal Code"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={(value) => updateField('zipCode', value)}
              required
              error={errors.zipCode}
            />
          </div>

          <FormInput
            label="Country"
            placeholder="Country"
            value={formData.country}
            onChange={(value) => updateField('country', value)}
            required
            error={errors.country}
          />
        </div>
      </Card>

      {/* Billing Address */}
      <Card variant="basic">
        <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
          Billing Address
        </h2>
        
        <div className="space-y-4">
          <FormCheckbox
            label="Billing address is the same as shipping address"
            checked={formData.billingAddressSame}
            onChange={(checked) => updateField('billingAddressSame', checked)}
          />

          {!formData.billingAddressSame && (
            <FormTextarea
              label="Billing Address"
              placeholder="Enter your billing address"
              value={formData.billingAddress}
              onChange={(value) => updateField('billingAddress', value)}
              required
              rows={3}
              error={errors.billingAddress}
            />
          )}
        </div>
      </Card>

      {/* Special Instructions */}
      <Card variant="basic">
        <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
          Special Instructions
        </h2>
        
        <FormTextarea
          label="Delivery Instructions (Optional)"
          placeholder="Any special delivery instructions or notes..."
          value={formData.specialInstructions}
          onChange={(value) => updateField('specialInstructions', value)}
          rows={3}
        />
      </Card>

      {/* Submit Button */}
      <Card variant="basic">
        <LoadingButton
          type="submit"
          loading={loading}
          className="text-lg"
        >
          {loading ? 'Processing Order...' : 'Place Order'}
        </LoadingButton>
      </Card>

      {/* Error Message */}
      {submitError && (
        <Alert variant="warning" className="animate-fade-in">
          <div>
            <h3 className="font-semibold text-lg mb-1">Order Failed</h3>
            <p>There was a problem processing your order. Please check your information and try again.</p>
          </div>
        </Alert>
      )}
    </form>
  );
};