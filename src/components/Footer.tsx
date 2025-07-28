import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';
import logo from '../../public/logo.png';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const location = useLocation();
  
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Export', path: '/export' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];
  
  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-and-conditions' },
    { label: 'Shipping Policy', path: '/shipping-policy' },
    { label: 'Return Policy', path: '/cancellation-refund-policy' }
  ];

  return (
    <footer role="contentinfo" className="bg-[#4B3A2A] text-white pt-16 pb-8">
      <Container size="7xl" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <section aria-labelledby="brand-heading" className="space-y-4">
            <h3 id="brand-heading" className="sr-only">Brand Information</h3>
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Doors & Plys India Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  console.error('Failed to load logo from:', e.currentTarget.src);
                }}
              />
            </div>
            <p className="text-white/80 text-sm">
              Premium UPVC doors and building materials manufacturer and exporter since 1995.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Quick Links */}
          <section aria-labelledby="quick-links-heading">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path 
                        ? 'text-white font-medium' 
                        : 'text-white/70 hover:text-white'
                    } transition-colors duration-300 text-sm block py-1`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Legal */}
          <section aria-labelledby="legal-heading">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path 
                        ? 'text-white font-medium' 
                        : 'text-white/70 hover:text-white'
                    } transition-colors duration-300 text-sm block py-1`}
                  >
                    {link.label}
                  </Link>
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
      </Container>
    </footer>
  );
};