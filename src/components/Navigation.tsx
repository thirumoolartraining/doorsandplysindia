import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useCartStore } from '../store/cart';

interface NavigationProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact', productId?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { getTotalItems, toggleCart } = useCartStore();
  const totalItems = getTotalItems();

  const navItems = [
    { label: 'Home', action: () => onNavigate?.('home') },
    { label: 'Products', action: () => onNavigate?.('products') },
    { label: 'Export', action: () => onNavigate?.('export') },
    { label: 'Quote', action: () => onNavigate?.('quote') },
    { label: 'About', action: () => onNavigate?.('about') },
    { label: 'Contact', action: () => onNavigate?.('contact') },
  ];

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 font-inter">
      <nav role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="cursor-pointer h-12 w-48 flex items-center"
              onClick={() => onNavigate?.('home')}
            >
              <img 
                src="/logo.png" 
                alt="Doors & Plys India Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-[#1A1A1A] hover:text-[#4B3A2A] transition-colors duration-300 font-medium tracking-tight px-3 py-2 rounded-lg hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="settings" 
              onClick={toggleCart}
              className="relative"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C3A572] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="settings"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md rounded-2xl mt-4 mb-4 p-6 border border-white/20 shadow-xl" role="menu" aria-label="Mobile navigation menu">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-[#1A1A1A] hover:text-[#4B3A2A] hover:bg-white/20 transition-all duration-300 font-medium rounded-lg"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      </nav>
    </header>
  );
};