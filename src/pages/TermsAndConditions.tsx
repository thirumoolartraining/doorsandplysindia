import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductsFooter } from '../components/ProductsFooter';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

interface TermsAndConditionsProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions', productId?: string) => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Terms & Conditions', active: true }
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

          {/* Hero Section */}
          <section className="text-center mb-12 scroll-mt-20">
            <h1 className="text-4xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-[#1A1A1A]/60">
              Last updated: July 2025
            </p>
          </section>

          {/* Introduction */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  Welcome to Doors & Plys India. By accessing and using our website (doorsandplysindia.shop), 
                  you agree to comply with and be bound by the following Terms and Conditions. These terms 
                  govern your use of our website and services, including the purchase of premium UPVC doors 
                  and related products. If you do not agree with any part of these terms, please do not use 
                  our website or services.
                </p>
              </div>
            </div>
          </section>

          {/* General Use of the Website */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                General Use of the Website
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  Our website is intended for business-to-business (B2B) transactions and is designed to serve 
                  importers, distributors, contractors, and other commercial entities seeking premium UPVC door 
                  solutions. By using this website, you represent that you are acting in a commercial capacity.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You agree to provide accurate and complete information when placing orders</li>
                  <li>You are responsible for maintaining the confidentiality of your account information</li>
                  <li>You agree not to use our website for any unlawful or prohibited activities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Listings, Pricing & Availability */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Product Listings, Pricing & Availability
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  All product information, specifications, and pricing displayed on our website are subject to 
                  change without notice. We strive to ensure accuracy but cannot guarantee that all information 
                  is error-free.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>Prices are quoted in Indian Rupees (INR) for domestic orders and USD for export orders</li>
                  <li>Export prices may vary based on destination, quantity, and current market conditions</li>
                  <li>Flexible order quantities available for both domestic and international orders</li>
                  <li>Product availability is subject to manufacturing capacity and raw material availability</li>
                  <li>Custom specifications may require additional lead time and pricing adjustments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payments */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Payments
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  Payment terms and methods vary based on order type, destination, and customer relationship. 
                  All payments must be made in accordance with the agreed terms before shipment.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li><strong className="text-[#4B3A2A]">Domestic Orders:</strong> Bank transfer, cheque, or cash on delivery (for qualified customers)</li>
                  <li><strong className="text-[#4B3A2A]">Export Orders:</strong> Letter of Credit (L/C), wire transfer, or advance payment</li>
                  <li><strong className="text-[#4B3A2A]">Payment Schedule:</strong> Typically 30-50% advance, balance before shipment</li>
                  <li>All banking charges and currency conversion fees are borne by the customer</li>
                  <li>Prices are valid for 30 days from quotation date unless otherwise specified</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Shipping & Delivery */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Shipping & Delivery
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  We provide comprehensive shipping and logistics support for both domestic and international 
                  orders. Delivery terms are specified in individual quotations and purchase agreements.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li><strong className="text-[#4B3A2A]">Lead Times:</strong> 2-8 weeks depending on product complexity and quantity</li>
                  <li><strong className="text-[#4B3A2A]">Export Documentation:</strong> We provide all necessary export documentation and customs support</li>
                  <li><strong className="text-[#4B3A2A]">Packaging:</strong> Professional export packaging with moisture protection and damage prevention</li>
                  <li>Risk of loss transfers to customer upon delivery to carrier (FOB terms)</li>
                  <li>Delivery delays due to force majeure events are beyond our control</li>
                  <li>Customer is responsible for customs clearance and import duties at destination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Conduct & Responsibilities */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                User Conduct & Responsibilities
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  Users of our website and services are expected to conduct themselves professionally and 
                  in accordance with applicable laws and regulations.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>Provide accurate business information and maintain updated contact details</li>
                  <li>Comply with all applicable import/export regulations in your jurisdiction</li>
                  <li>Respect intellectual property rights and confidential information</li>
                  <li>Use our services only for legitimate business purposes</li>
                  <li>Promptly report any issues or concerns regarding products or services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Intellectual Property
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  and software, is the property of Doors & Plys India or its licensors and is protected by 
                  copyright and other intellectual property laws.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>You may not reproduce, distribute, or modify any content without written permission</li>
                  <li>Product images and specifications are for reference only and may not be used for commercial purposes</li>
                  <li>Our company name, logo, and trademarks are protected intellectual property</li>
                  <li>We respect third-party intellectual property rights and expect the same from our users</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Modifications to Terms */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Modifications to Terms
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be 
                  effective immediately upon posting on our website. Your continued use of our services 
                  after any modifications constitutes acceptance of the updated terms.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>We will notify registered users of significant changes via email when possible</li>
                  <li>It is your responsibility to review these terms periodically</li>
                  <li>If you do not agree with modified terms, you should discontinue use of our services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Limitation of Liability
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  While we strive to provide high-quality products and services, our liability is limited 
                  as follows:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>Our total liability shall not exceed the value of the specific order in question</li>
                  <li>We are not liable for indirect, consequential, or punitive damages</li>
                  <li>Product warranties are limited to manufacturing defects and do not cover normal wear or misuse</li>
                  <li>We are not responsible for delays or damages caused by force majeure events</li>
                  <li>Claims must be reported within 30 days of delivery for consideration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Governing Law
              </h2>
              <div className="prose prose-base max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed mb-4">
                  These Terms and Conditions are governed by the laws of India. Any disputes arising from 
                  these terms or your use of our services shall be subject to the exclusive jurisdiction 
                  of the courts in Coimbatore, Tamil Nadu, India.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-2 text-[#1A1A1A]/70">
                  <li>We encourage resolution of disputes through direct communication first</li>
                  <li>Mediation and arbitration may be considered for complex commercial disputes</li>
                  <li>International customers may be subject to additional local regulations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Contact Us
              </h2>
              <div className="bg-[#4B3A2A]/5 backdrop-blur-sm rounded-xl p-6 border border-[#4B3A2A]/10">
                <div className="space-y-2 text-sm text-[#1A1A1A]/80">
                  <p className="font-semibold text-[#4B3A2A] text-base mb-3">
                    {CONTACT_INFO.businessName}<br />
                    <span className="font-normal">Legal & Customer Service Department</span>
                  </p>
                  <address className="not-italic">
                    <p>{CONTACT_INFO.address.line1}</p>
                    <p>{CONTACT_INFO.address.line2}</p>
                    <p>{CONTACT_INFO.address.line3}</p>
                  </address>
                  <div className="pt-2 space-y-1">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#C3A572]" />
                      <strong className="text-[#4B3A2A]">Phone:</strong>{' '}
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#C3A572]" />
                      <strong className="text-[#4B3A2A]">Email:</strong>{' '}
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#C3A572]" />
                      <strong className="text-[#4B3A2A]">WhatsApp & Contact Form:</strong> Available on our Contact Us page
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
                <p className="text-sm text-[#4B3A2A]">
                  <strong>Business Hours:</strong> {CONTACT_INFO.businessHours}<br />
                  <strong>Response Time:</strong> We aim to respond to all inquiries within 24 hours during business days.
                </p>
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