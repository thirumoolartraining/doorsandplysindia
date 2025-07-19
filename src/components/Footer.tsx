import React from 'react';
import { Button } from './Button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';
// Logo is in the public directory, so we can reference it directly

interface FooterProps {
  onNavigate?: (page: 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy' | 'home' | 'products' | 'export' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Export', page: 'export' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Return Policy'];
  
  const handleLegalLinkClick = (link: string) => {
    if (link === 'Privacy Policy') {
      onNavigate?.('privacy-policy');
    } else if (link === 'Terms of Service') {
      onNavigate?.('terms-and-conditions');
    } else if (link === 'Shipping Policy') {
      onNavigate?.('shipping-policy');
    } else if (link === 'Return Policy') {
      onNavigate?.('cancellation-refund-policy');
    }
  };

  return (
    <footer role="contentinfo" className="bg-[#4B3A2A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <section aria-labelledby="brand-heading" className="space-y-4">
            <h3 id="brand-heading" className="sr-only">Brand Information</h3>
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/logo.png" 
                alt="Doors & Plys India Logo" 
                className="h-12 w-auto mb-6"
                onError={(e) => {
                  console.error('Failed to load logo from:', e.currentTarget.src);
                }}
              />
            </div>
            <p className="text-white/80 text-sm">
              Premium UPVC doors and building materials manufacturer and exporter since 1995.
            </p>
            <div className="flex gap-3 pt-2">
              <Button variant="settings" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="settings" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="settings" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="settings" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="quick-links-heading">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate?.(link.page as any)}
                    className="text-white/80 hover:text-white transition-colors text-left w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Legal */}
          <section aria-labelledby="legal-heading">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handleLegalLinkClick(link)}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Info */}
          <section aria-labelledby="contact-info-heading">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <address className="space-y-2 text-white not-italic">
              <p className="text-sm text-white">{CONTACT_INFO.address.line1}</p>
              <p className="text-sm text-white">{CONTACT_INFO.address.line2}</p>
              <p className="text-sm text-white">{CONTACT_INFO.address.line3}</p>
              <p className="mt-3">
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:opacity-80 transition-opacity no-underline">
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:opacity-80 transition-opacity no-underline">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="text-white">🌍 Export Inquiries Welcome</p>
            </address>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/70 text-sm">
                © 2025 {CONTACT_INFO.businessName}. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <p className="text-white/70 text-sm">
                Trusted UPVC doors manufacturer since 1995
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};