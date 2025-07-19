import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProgressTracker } from '../components/ProgressTracker';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { FormTextarea } from '../components/FormTextarea';
import { FormCheckbox } from '../components/FormCheckbox';
import { LoadingButton } from '../components/LoadingButton';
import { ExportBadge } from '../components/ExportBadge';
import { ProductsFooter } from '../components/ProductsFooter';
import { useCartStore } from '../store/cart';
import { Container } from '../components/Container';
import { Minus, Plus, X, Shield, Truck, Award } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

type NavigationPage = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact' | 'shipping-policy' | 'cancellation-refund-policy';

const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  country: z.string().min(2, 'Please select your country'),
  address: z.string().min(10, 'Please enter your complete address'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  zipCode: z.string().min(3, 'Please enter your ZIP code'),
  billingAddressSame: z.boolean(),
  billingAddress: z.string().optional(),
  specialInstructions: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutProps {
  onNavigate?: (page: NavigationPage, productId?: string) => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onNavigate }) => {
  const [currentStep] = useState(1); // 0: Cart, 1: Shipping, 2: Payment
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  // Load saved form data from localStorage on component mount
  const loadFormData = (): Partial<CheckoutFormData> => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('checkoutFormData');
      return savedData ? JSON.parse(savedData) : { billingAddressSame: true };
    }
    return { billingAddressSame: true };
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: loadFormData(),
  });

  // Helper function to register form inputs with proper typing
  const registerInput = (name: keyof CheckoutFormData, required = true) => {
    const { ref, onChange, onBlur, ...rest } = register(name, { required });
    return {
      ...rest,
      name,
      required,
      ref,
      onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => {
        // Handle both string and event inputs
        const event = typeof e === 'string' ? { target: { value: e } } as React.ChangeEvent<HTMLInputElement> : e;
        
        // Call the original onChange from react-hook-form
        onChange(event);
        
        // Update local storage
        if (typeof window !== 'undefined') {
          const formValues = watch();
          localStorage.setItem('checkoutFormData', JSON.stringify(formValues));
        }
      },
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur(e);
      },
    };
  };

  // Helper function to register textareas with proper typing
  const registerTextarea = (name: keyof CheckoutFormData, required = true) => {
    const { ref, onChange, onBlur, ...rest } = register(name, { required });
    return {
      ...rest,
      name,
      required,
      ref,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => {
        // Handle both string and event inputs
        const event = typeof e === 'string' ? { target: { value: e } } as React.ChangeEvent<HTMLTextAreaElement> : e;
        
        // Call the original onChange from react-hook-form
        onChange(event);
        
        // Update local storage
        if (typeof window !== 'undefined') {
          const formValues = watch();
          localStorage.setItem('checkoutFormData', JSON.stringify(formValues));
        }
      },
      onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => {
        onBlur(e);
      },
    };
  };

  const billingAddressSame = watch('billingAddressSame');

  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Checkout', active: true }
  ];

  const steps = ['Cart Review', 'Shipping Info', 'Payment'];

  // Save form data to localStorage when form values change
  const formValues = watch();
  useEffect(() => {
    if (Object.keys(formValues).length > 0) {
      localStorage.setItem('checkoutFormData', JSON.stringify(formValues));
    }
  }, [formValues]);

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with validation
      await new Promise<void>((resolve, reject) => {
        // Check if there are any validation errors
        const formIsValid = Object.keys(errors).length === 0;
        
        if (formIsValid) {
          console.log('Submitting form data:', data);
          // Simulate network delay
          setTimeout(() => {
            // Generate order ID with timestamp
            const newOrderId = `DP${Date.now().toString().slice(-6)}`;
            setOrderId(newOrderId);
            setOrderSuccess(true);
            
            // Clear cart and saved form data on successful submission
            clearCart();
            
            // Clear saved form data from localStorage
            if (typeof window !== 'undefined') {
              localStorage.removeItem('checkoutFormData');
            }
            
            // Show success message
            toast.success('Order placed successfully!');
            
            resolve();
          }, 2000);
        } else {
          // If there are validation errors, reject the promise
          reject(new Error('Form validation failed'));
        }
      });
      
    } catch (error) {
      // Don't show error toast for validation errors as they're already shown inline
      if (error instanceof Error && error.message !== 'Form validation failed') {
        console.error('Order submission error:', error);
        toast.error('Failed to place order. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message if order was placed
  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
        <Navigation onNavigate={onNavigate} />
        <main className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8" role="alert">
              <p className="font-bold">Order Placed Successfully!</p>
              <p>Thank you for ordering! Our team will get back to you shortly.</p>
              <p className="mt-2">Your Order ID: <span className="font-semibold">{orderId}</span></p>
            </div>
            <h1 className="text-3xl font-bold text-[#4B3A2A] mb-4">Thank You for Your Order!</h1>
            <p className="text-[#1A1A1A]/70 mb-8">We've received your order and will process it shortly. You'll receive a confirmation email with all the details.</p>
            <button
              onClick={() => onNavigate?.('home')}
              className="bg-[#C3A572] hover:bg-[#B59460] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Redirect to products if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
        <Navigation onNavigate={onNavigate} />
        <main className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-3xl font-bold text-[#4B3A2A] mb-4">Your cart is empty</h1>
            <p className="text-[#1A1A1A]/70 mb-8">Add some products to your cart to continue with checkout.</p>
            <Button variant="large" onClick={() => onNavigate?.('products')}>
              Browse Products
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
        <Navigation onNavigate={onNavigate} />
        <main className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl font-bold text-[#4B3A2A] mb-6">
                Thank you for choosing Doors & Plys India!
              </h1>
              <p className="text-xl text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
                Our supply team will get back to you shortly with shipping and confirmation details for your UPVC doors.
              </p>
              
              <Card variant="basic" className="max-w-md mx-auto mb-8">
                <div className="text-center">
                  <h3 className="font-bold text-[#4B3A2A] mb-2">Order Details</h3>
                  <p className="text-[#1A1A1A]/70 mb-4">Order ID: <strong>{orderId}</strong></p>
                  <div className="space-y-2 text-sm text-[#1A1A1A]/60">
                    <p>📧 Confirmation email will be sent shortly</p>
                    <p>📞 Our team will contact you within 24 hours</p>
                    <p>🚚 Shipping details will be provided via email</p>
                    <p className="pt-2 border-t border-white/20">
                      For questions, contact us at{' '}
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#C3A572] hover:underline">
                        {CONTACT_INFO.email}
                      </a>
                      {' '}or call{' '}
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#C3A572] hover:underline">
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
              
              <div className="flex gap-4 justify-center">
                <Button variant="large" onClick={() => onNavigate?.('products')}>
                  Continue Shopping
                </Button>
                <Button variant="ghost" onClick={() => onNavigate?.('home')}>
                  Back to Home
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main role="main" className="pt-20">
        <Container size="7xl" padding="md" className="py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </nav>

          {/* Page Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
              UPVC Door Supply Order
            </h1>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Complete your order with your trusted UPVC door supplier
            </p>
          </header>

          {/* Progress Tracker */}
          <section aria-labelledby="progress-tracker">
            <h2 id="progress-tracker" className="sr-only">Order Progress</h2>
            <ProgressTracker currentStep={currentStep} steps={steps} />
          </section>

          {/* Checkout Content */}
          <section aria-labelledby="checkout-content" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <h2 id="checkout-content" className="sr-only">Checkout Information</h2>
            {/* Checkout Form */}
            <div className="lg:col-span-2" role="form" aria-labelledby="checkout-form">
              <h3 id="checkout-form" className="sr-only">Order Details Form</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Contact Information */}
                <Card variant="basic">
                  <h4 className="text-2xl font-bold text-[#4B3A2A] mb-6">
                    Contact Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <FormInput
                        label="First Name"
                        placeholder="Enter your first name"
                        {...registerInput('firstName')}
                        error={errors.firstName?.message}
                      />
                    </div>
                    <div>
                      <FormInput
                        label="Last Name"
                        placeholder="Enter your last name"
                        {...registerInput('lastName')}
                        error={errors.lastName?.message}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <FormInput
                        label="Email Address"
                        type="email"
                        placeholder="your.email@example.com"
                        {...registerInput('email')}
                        error={errors.email?.message}
                      />
                    </div>
                    <div>
                      <FormInput
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...registerInput('phone')}
                        error={errors.phone?.message}
                      />
                    </div>
                  </div>
                </Card>

                {/* Shipping Address */}
                <Card variant="basic">
                  <h4 className="text-2xl font-bold text-[#4B3A2A] mb-6">
                    Shipping Address
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <FormTextarea
                        label="Street Address"
                        placeholder="Enter your full address"
                        {...registerTextarea('address')}
                        error={errors.address?.message}
                        rows={2}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <FormInput
                          label="City"
                          placeholder="City"
                          {...registerInput('city')}
                          error={errors.city?.message}
                        />
                      </div>
                      
                      <div>
                        <FormInput
                          label="State/Province"
                          placeholder="State"
                          {...registerInput('state')}
                          error={errors.state?.message}
                        />
                      </div>
                      
                      <div>
                        <FormInput
                          label="ZIP/Postal Code"
                          placeholder="ZIP Code"
                          {...registerInput('zipCode')}
                          error={errors.zipCode?.message}
                        />
                      </div>
                    </div>

                    <div>
                      <FormInput
                        label="Country"
                        placeholder="Country"
                        {...registerInput('country')}
                        error={errors.country?.message}
                      />
                    </div>
                  </div>
                </Card>

                {/* Billing Address */}
                <Card variant="basic">
                  <h4 className="text-2xl font-bold text-[#4B3A2A] mb-6">
                    Billing Address
                  </h4>
                  
                  <div className="space-y-4">
                    <FormCheckbox
                      label="Billing address is the same as shipping address"
                      {...register('billingAddressSame')}
                    />

                    {!billingAddressSame && (
                      <div>
                        <FormTextarea
                          label="Billing Address"
                          placeholder="Enter your billing address"
                          {...registerTextarea('billingAddress', false)}
                          error={errors.billingAddress?.message}
                          rows={3}
                        />
                      </div>
                    )}
                  </div>
                </Card>

                {/* Special Instructions */}
                <Card variant="basic">
                  <h4 className="text-2xl font-bold text-[#4B3A2A] mb-6">
                    Special Instructions
                  </h4>
                  
                  <div>
                    <FormTextarea
                      label="Delivery Instructions (Optional)"
                      placeholder="Any special delivery instructions or notes..."
                      {...registerTextarea('specialInstructions', false)}
                      rows={3}
                    />
                  </div>
                </Card>

                {/* Submit Button */}
                <Card variant="basic">
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    className="text-lg"
                  >
                    {isSubmitting ? 'Processing Order...' : 'Place Order'}
                  </LoadingButton>
                </Card>
              </form>
            </div>

            {/* Cart Summary */}
            <aside className="lg:col-span-1" role="complementary" aria-labelledby="order-summary">
              <Card variant="basic" className="sticky top-24">
                <h3 id="order-summary" className="text-2xl font-bold text-[#4B3A2A] mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-lg border border-white/20">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="text-xs font-medium text-[#C3A572] uppercase tracking-wide mb-1">
                          {item.product.category}
                        </div>
                        <h4 className="font-semibold text-[#4B3A2A] text-sm mb-1">
                          {item.product.name}
                        </h4>
                        <div className="text-lg font-bold text-[#4B3A2A]">
                          {item.product.price}
                        </div>
                        
                        {item.product.exportAvailable && (
                          <ExportBadge type="available" className="mt-2" />
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/80 transition-all duration-200"
                          aria-label={`Decrease quantity of ${item.product.name}`}
                        >
                          <Minus className="w-4 h-4 text-[#4B3A2A]" />
                        </button>
                        
                        <span className="w-8 text-center font-semibold text-[#4B3A2A]">
                          {item.quantity}
                        </span>
                        
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/80 transition-all duration-200"
                          aria-label={`Increase quantity of ${item.product.name}`}
                        >
                          <Plus className="w-4 h-4 text-[#4B3A2A]" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="w-8 h-8 rounded-full bg-red-50/60 backdrop-blur-sm border border-red-200/30 flex items-center justify-center hover:bg-red-100/80 transition-all duration-200"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-4 space-y-2">
                  <div className="flex justify-between text-[#1A1A1A]/70">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#1A1A1A]/70">
                    <span>Shipping</span>
                    <span>Calculated after order</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-[#4B3A2A] pt-2 border-t border-white/20">
                    <span>Total</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Shield className="w-6 h-6 text-[#C3A572] mx-auto mb-2" />
                      <div className="text-xs font-medium text-[#1A1A1A]/70">
                        Secure Order
                      </div>
                    </div>
                    <div>
                      <Truck className="w-6 h-6 text-[#C3A572] mx-auto mb-2" />
                      <div className="text-xs font-medium text-[#1A1A1A]/70">
                        Global Shipping
                      </div>
                    </div>
                    <div>
                      <Award className="w-6 h-6 text-[#C3A572] mx-auto mb-2" />
                      <div className="text-xs font-medium text-[#1A1A1A]/70">
                        Quality Assured
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </aside>
          </section>
        </Container>
      </main>
      
      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};