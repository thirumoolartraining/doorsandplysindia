import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductsFooter } from '../components/ProductsFooter';
import { Phone, Mail, MessageCircle, Clock, Globe, Package } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

interface ShippingPolicyProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy', productId?: string) => void;
}

export const ShippingPolicy: React.FC<ShippingPolicyProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Shipping Policy', active: true }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="pt-8 mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Page Heading Block */}
          <section className="text-center mb-12 scroll-mt-20">
            <h1 className="text-4xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
              Shipping Policy
            </h1>
            <p className="text-base text-[#1A1A1A]/60">
              Safe, Secure & Reliable Delivery – From Coimbatore to the World
            </p>
          </section>

          {/* Order Processing Time */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Order Processing Time
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Standard Orders:</strong> Processed within 2–7 business days from order confirmation and payment receipt
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Weekend & Holiday Orders:</strong> Orders placed on weekends or holidays begin processing the next business day
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Bulk & Custom Orders:</strong> Large quantity orders may require 2–8 weeks with advance notification and timeline confirmation
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Export Orders:</strong> Additional 1–2 days for documentation and export clearance procedures
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shipping Destinations & Delivery Timelines */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Shipping Destinations & Delivery Timelines
              </h2>
              
              {/* Domestic Shipping */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#4B3A2A] mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#C3A572]" />
                  Domestic Shipping (India)
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-2">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Metro Cities:</strong> 3–7 business days (Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad)
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Non-Metro Cities:</strong> 5–10 business days
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Rural Areas:</strong> 7–14 business days depending on accessibility
                  </li>
                </ul>
              </div>

              {/* International Shipping */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#4B3A2A] mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#C3A572]" />
                  International Shipping
                </h3>
                <ul className="list-disc list-outside pl-6 space-y-2">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Asia-Pacific & Middle East:</strong> 7–15 business days (UAE, Singapore, Australia, Japan)
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Europe & North America:</strong> 15–25 business days (UK, Germany, USA, Canada)
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Other International:</strong> 20–35 business days, varies with customs clearance
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Container Shipments:</strong> 25–45 days for full container loads (FCL/LCL)
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
                <p className="text-sm text-[#4B3A2A]">
                  <strong>Disclaimer:</strong> Delivery times are estimated and may vary due to customs processing, weather conditions, local holidays, or logistics partner schedules. We provide tracking updates and proactive communication for any delays.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping Charges */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Shipping Charges
              </h2>
              <div className="prose prose-base max-w-none">
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Calculation Method:</strong> Shipping charges are calculated based on destination, package dimensions, weight, and selected shipping method
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Transparent Pricing:</strong> All shipping costs are clearly displayed during checkout before payment confirmation
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Free Shipping Offers:</strong> Limited-time domestic free shipping available on orders above ₹25,000 (terms apply)
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Export Charges:</strong> International shipping includes export documentation, customs clearance support, and insurance
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Bulk Discounts:</strong> Special shipping rates available for bulk orders
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tracking Your Order */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Tracking Your Order
              </h2>
              <div className="prose prose-base max-w-none">
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Tracking Information:</strong> Sent via email, SMS, and WhatsApp once your order ships
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Account Access:</strong> Track orders through your account dashboard in the "My Orders" section
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Update Timeline:</strong> Tracking updates may take 24–48 hours to appear in the system after dispatch
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Real-time Updates:</strong> Receive notifications for key milestones: dispatch, in-transit, out for delivery, delivered
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">International Tracking:</strong> Global tracking numbers provided for all international shipments
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Delays & Exceptions */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Delays & Exceptions
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
                  While we strive for timely delivery, certain factors beyond our control may cause delays:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Weather Conditions:</strong> Severe weather, natural disasters, or seasonal disruptions
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Customs & Documentation:</strong> International customs processing, documentation verification, or regulatory changes
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Logistics Issues:</strong> Carrier delays, port congestion, or transportation strikes
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Peak Season:</strong> Festival seasons, holidays, or high-demand periods may extend delivery times
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Address Issues:</strong> Incorrect or incomplete delivery addresses requiring verification
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[#4B3A2A]/5 backdrop-blur-sm rounded-xl border border-[#4B3A2A]/10">
                  <p className="text-sm text-[#4B3A2A]">
                    <strong>Our Commitment:</strong> Doors & Plys India will provide proactive updates and work with logistics partners to minimize delays. We maintain transparent communication throughout the shipping process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Wholesale & Bulk Shipping */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Wholesale & Bulk Shipping
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
                  For B2B clients and bulk orders, we provide specialized logistics solutions:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Custom Logistics:</strong> Tailored shipping solutions for large quantity orders and specific delivery requirements
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Export Documentation:</strong> Complete export paperwork, certificates of origin, and customs declarations
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Trade Terms:</strong> FOB (Free on Board), CIF (Cost, Insurance & Freight), and other Incoterms available
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Container Loading:</strong> Professional packing and container loading services for international shipments
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Dedicated Support:</strong> Assigned account manager for wholesale clients with personalized service
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
                  <p className="text-sm text-[#4B3A2A]">
                    <strong>Contact Our Wholesale Team:</strong> For personalized bulk shipping solutions, documentation support, and competitive logistics rates, reach out to our dedicated B2B team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Need Assistance */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Need Assistance with Your Shipment?
              </h2>
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-6">
                Our customer support team is ready to help with any shipping questions, tracking issues, or delivery concerns.
              </p>
              
              <div className="bg-[#4B3A2A]/5 backdrop-blur-sm rounded-xl p-6 border border-[#4B3A2A]/10">
                <div className="space-y-3 text-sm text-[#1A1A1A]/80">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C3A572]" />
                    <span><strong className="text-[#4B3A2A]">Email:</strong>{' '}
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C3A572]" />
                    <span><strong className="text-[#4B3A2A]">Phone/WhatsApp:</strong>{' '}
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#C3A572]" />
                    <span><strong className="text-[#4B3A2A]">Live Chat:</strong> Available {CONTACT_INFO.businessHours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#C3A572]" />
                    <span><strong className="text-[#4B3A2A]">Response Time:</strong> Within 24 hours for all shipping inquiries</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#4B3A2A]/10">
                  <button
                    onClick={() => onNavigate?.('quote')}
                    className="bg-[#4B3A2A] text-white px-6 py-3 rounded-xl font-semibold tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#3A2A1A]"
                  >
                    Contact Support Team
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center text-sm text-[#1A1A1A]/60">
          © 2025 {CONTACT_INFO.businessName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};