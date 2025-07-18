import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductsFooter } from '../components/ProductsFooter';
import { Phone, Mail, MessageCircle, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

interface CancellationRefundPolicyProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy', productId?: string) => void;
}

export const CancellationRefundPolicy: React.FC<CancellationRefundPolicyProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Cancellation & Refund Policy', active: true }
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-base text-[#1A1A1A]/60">
              Clear Guidelines. Fair Solutions. Prompt Support.
            </p>
          </section>

          {/* Order Cancellations */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#C3A572]" />
                Order Cancellations – Within 2 Hours of Purchase
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Cancellation Window:</strong> Orders can be cancelled within <strong>2 hours</strong> of purchase confirmation, provided they have not been dispatched from our facility
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Post-Processing:</strong> Cancellations are not permitted once the order has been packaged, labeled, or handed over to shipping partners
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">How to Cancel:</strong> Contact us immediately via email, WhatsApp, or our Contact Page with your order ID and cancellation request
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Urgent Errors:</strong> For order errors or urgent changes, immediate contact within the first hour is strongly encouraged
                  </li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
                <p className="text-sm text-[#4B3A2A]">
                  <strong>Note:</strong> Bulk and custom orders may have different cancellation terms as specified in the purchase agreement. Please review your order confirmation for specific details.
                </p>
              </div>
            </div>
          </section>

          {/* Damaged or Defective Products */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#C3A572]" />
                Damaged or Defective Products
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
                  We stand behind the quality of our UPVC doors. If you receive a damaged or defective product, please notify us within <strong className="text-[#4B3A2A]">7 days of delivery</strong> for prompt resolution.
                </p>
                
                <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Valid Cases for Damage Claims:</h3>
                <ul className="list-disc list-outside pl-6 space-y-2 mb-6">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Transit damage during shipping</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Manufacturing defects affecting functionality or appearance</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Packaging tampering or quantity mismatch</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Products not matching order specifications</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Required Documentation:</h3>
                <ul className="list-disc list-outside pl-6 space-y-2 mb-6">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Order ID and purchase confirmation</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Clear photographs of the damage or defect</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Detailed description of the issue</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Delivery receipt and packaging condition</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Resolution Options:</h3>
                <ul className="list-disc list-outside pl-6 space-y-2">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Product replacement with expedited shipping</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Store credit for future purchases</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Full or partial refund depending on the case severity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Returns & Service Satisfaction */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#C3A572]" />
                Returns & Service Satisfaction
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
                  Returns are generally not accepted for correctly delivered items that meet order specifications. However, we evaluate each case individually to ensure customer satisfaction.
                </p>
                
                <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Return Eligibility:</h3>
                <ul className="list-disc list-outside pl-6 space-y-2 mb-6">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Products must be unused and in original packaging</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Notification required within <strong>7 days</strong> of delivery</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Valid reason for return (defect, damage, or specification mismatch)</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">All original accessories and documentation included</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Possible Resolutions:</h3>
                <ul className="list-disc list-outside pl-6 space-y-2">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Store credit for future UPVC door purchases</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Partial refund based on product condition and circumstances</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Full refund for valid defect or damage claims</li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">Product replacement with upgraded specifications</li>
                </ul>
              </div>
            </div>
          </section>

          {/* B2B / Wholesale Orders */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                B2B / Wholesale Orders
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
                  Cancellation and refund policies for B2B and wholesale orders may differ based on the specific purchase agreement and order volume.
                </p>
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Custom Terms:</strong> Cancellations and returns are evaluated according to the terms agreed upon in the purchase contract
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Bulk Order Considerations:</strong> Large quantity orders may have extended processing times and different cancellation windows
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Export Orders:</strong> International orders may be subject to additional considerations due to customs and shipping logistics
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Dedicated Support:</strong> Contact our Wholesale Support Team for personalized assistance with B2B order modifications
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Processing */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Refund Processing Timeline
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#4B3A2A]/5 backdrop-blur-sm rounded-xl p-6 border border-[#4B3A2A]/10">
                    <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Refund Initiation</h3>
                    <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                      Processing begins within <strong>3–5 business days</strong> of refund approval and return verification.
                    </p>
                  </div>
                  <div className="bg-[#C3A572]/5 backdrop-blur-sm rounded-xl p-6 border border-[#C3A572]/10">
                    <h3 className="text-lg font-semibold text-[#4B3A2A] mb-3">Payment Method</h3>
                    <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                      Refunds are processed using the same payment method as the original transaction.
                    </p>
                  </div>
                </div>
                
                <ul className="list-disc list-outside pl-6 space-y-3 mt-6">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Completion Time:</strong> Refunds typically complete within <strong>5–10 business days</strong> after initiation, depending on your bank or payment provider
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Confirmation:</strong> Refund confirmation and tracking details sent via email and WhatsApp
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">International Orders:</strong> Cross-border refunds may take additional 3–7 business days due to banking procedures
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Exceptions */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Refund Exceptions
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-4">
                  Refunds may not be applicable in the following circumstances:
                </p>
                <ul className="list-disc list-outside pl-6 space-y-3">
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Force Majeure Events:</strong> Natural disasters, government restrictions, or unforeseeable circumstances beyond our control
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Customs & Logistics Issues:</strong> Delays or complications caused by customs authorities or courier service disruptions
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Unauthorized Returns:</strong> Products returned without prior approval or outside the specified time frame
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Customer-Induced Damage:</strong> Damage caused by improper handling, installation, or misuse after delivery
                  </li>
                  <li className="text-base text-[#1A1A1A]/80 leading-relaxed">
                    <strong className="text-[#4B3A2A]">Expired Claims:</strong> Damage or defect claims reported beyond the 7-day notification period
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Need Help */}
          <section className="mb-12 scroll-mt-20">
            <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
                Need Help with Cancellations or Refunds?
              </h2>
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-6">
                Our customer support team is ready to assist with any cancellation or refund requests. We're committed to resolving your concerns promptly and fairly.
              </p>
              
              <div className="bg-[#4B3A2A]/5 backdrop-blur-sm rounded-xl p-6 border border-[#4B3A2A]/10">
                <div className="space-y-3 text-sm text-[#1A1A1A]/80">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C3A572]" />
                    <span><strong className="text-[#4B3A2A]">Phone:</strong>{' '}
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-[#C3A572] hover:text-[#4B3A2A] transition-colors duration-200"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </span>
                  </div>
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
                    <MessageCircle className="w-4 h-4 text-[#C3A572]" />
                    <span><strong className="text-[#4B3A2A]">WhatsApp & Contact Form:</strong> Available on our Contact Us page</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#4B3A2A]/10">
                  <button
                    onClick={() => onNavigate?.('quote')}
                    className="bg-[#4B3A2A] text-white px-6 py-3 rounded-xl font-semibold tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#3A2A1A]"
                  >
                    → Visit Contact Us Page
                  </button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
                <p className="text-sm text-[#4B3A2A]">
                  <strong>Response Time:</strong> We aim to respond to all cancellation and refund requests within 24 hours during business days ({CONTACT_INFO.businessHours}).
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