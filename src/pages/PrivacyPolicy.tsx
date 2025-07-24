import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
// Removed unused import
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

interface PrivacyPolicyProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact', productId?: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Privacy Policy', active: true }
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
              Privacy Policy
            </h1>
            <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
              Your Privacy is Our Priority
            </p>
          </section>

          {/* Introduction Section */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-[#1A1A1A]/80 leading-relaxed">
                  At Doors & Plys India, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  As a leading B2B supplier of premium UPVC doors serving international markets, we understand the importance of maintaining 
                  trust with our global partners and clients. This Privacy Policy outlines how we collect, use, protect, and share your 
                  information in compliance with India's Information Technology Act, 2000, and the General Data Protection Regulation (GDPR) 
                  for our European clients.
                </p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Information We Collect
              </h2>
              <ul className="list-disc list-outside pl-6 space-y-3">
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Business Contact Information:</strong> Company name, business address, phone numbers, and professional email addresses
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Order and Transaction Data:</strong> Product specifications, quantities, pricing, shipping addresses, and payment information
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Communication Records:</strong> Email correspondence, quote requests, customer service interactions, and technical support queries
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Website Usage Data:</strong> IP addresses, browser information, pages visited, and interaction patterns for improving user experience
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Export Documentation:</strong> Import licenses, customs declarations, and shipping documentation required for international trade
                </li>
              </ul>
            </div>
          </section>

          {/* Why We Collect Information */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Why We Collect Your Information
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <FileText className="w-5 h-5 text-[#C3A572] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#4B3A2A]">Order Processing:</strong> To fulfill your UPVC door orders, manage inventory, and coordinate international shipping</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <Shield className="w-5 h-5 text-[#C3A572] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#4B3A2A]">Export Compliance:</strong> To ensure compliance with international trade regulations and customs requirements</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <Eye className="w-5 h-5 text-[#C3A572] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#4B3A2A]">Customer Service:</strong> To provide technical support, answer product inquiries, and maintain business relationships</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <Lock className="w-5 h-5 text-[#C3A572] flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#4B3A2A]">Business Development:</strong> To improve our products and services based on market feedback and usage patterns</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How Information is Protected */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                How Your Information is Protected
              </h2>
              <ul className="list-disc list-outside pl-6 space-y-3">
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <span className="font-semibold text-[#4B3A2A]">SSL Encryption:</span> All data transmission between your browser and our servers is protected using industry-standard SSL encryption
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <span className="font-semibold text-[#4B3A2A]">Secure Payment Processing:</span> Payment information is processed through PCI-compliant payment gateways and never stored on our servers
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <span className="font-semibold text-[#4B3A2A]">Restricted Access:</span> Personal and business information is accessible only to authorized personnel who require it for business operations
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <span className="font-semibold text-[#4B3A2A]">Regular Security Audits:</span> We conduct periodic security assessments and updates to maintain the highest level of data protection
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights & Choices */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Your Rights & Choices
              </h2>
              <ul className="list-disc list-outside pl-6 space-y-3">
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Access Your Data:</strong> Request a copy of the personal information we hold about you and your business
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Correct Inaccuracies:</strong> Update or correct any inaccurate information in our records
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Data Portability:</strong> Receive your data in a structured, commonly used format for transfer to another service
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Deletion Requests:</strong> Request deletion of your personal data, subject to legal and business requirements
                </li>
                <li className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  <strong className="text-[#4B3A2A]">Marketing Preferences:</strong> Opt-out of marketing communications while maintaining essential business correspondence
                </li>
              </ul>
              <div className="mt-6 p-4 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
                <p className="text-sm text-[#4B3A2A]">
                  <strong>Response Time:</strong> We will respond to all privacy-related requests within 30 days. 
                  For urgent matters, please contact us directly at{' '}
                  <a 
                    href="mailto:info@doorsandplysindia.com" 
                    className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200 underline"
                  >
                    info@doorsandplysindia.com
                  </a>
                </p>
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
                    <span className="font-normal">Attn: Data Protection Officer</span>
                  </p>
                  <address className="not-italic">
                    <p>{CONTACT_INFO.address.line1}</p>
                    <p>{CONTACT_INFO.address.line2}</p>
                    <p>{CONTACT_INFO.address.line3}</p>
                  </address>
                  <p className="pt-2">
                    <strong className="text-[#4B3A2A]">Email:</strong>{' '}
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#4B3A2A]">Phone:</strong>{' '}
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Policy Updates
              </h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our business practices, 
                  legal requirements, or to improve clarity. We will notify you of any material changes by posting 
                  the updated policy on our website and updating the "Last Revised" date below.
                </p>
                <p className="text-xs text-[#1A1A1A]/50">
                  <strong>Last Revised:</strong> July 2025
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