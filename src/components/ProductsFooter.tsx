import React from 'react';
import { Button } from './Button';
import { Home, Package, Phone, Settings, Share2 } from 'lucide-react';

type NavigationPage = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact' | 'shipping-policy' | 'cancellation-refund-policy';

interface ProductsFooterProps {
  onNavigate?: (page: NavigationPage, productId?: string) => void;
}

export const ProductsFooter: React.FC<ProductsFooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { icon: Home, label: 'Home', action: () => onNavigate?.('home') },
    { icon: Package, label: 'Products', action: () => onNavigate?.('products') },
    { icon: Phone, label: 'Contact', action: () => onNavigate?.('contact') }
  ];

  return (
    <footer className="mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-md border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-[#4B3A2A] mb-2 tracking-tight">
              Doors & Plys India
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm">
              Trusted UPVC door supplier for global export markets
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="flex items-center gap-2 text-[#1A1A1A]/70 hover:text-[#4B3A2A] transition-colors duration-200"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="settings">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="share">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-[#1A1A1A]/60 text-sm">
            © 2025 Doors & Plys India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};