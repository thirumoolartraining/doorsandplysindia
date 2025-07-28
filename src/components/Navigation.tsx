import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useCartStore } from '../store/cart';
import logo from '../../public/logo.png';
import { Container } from './Container';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { getTotalItems, toggleCart } = useCartStore();
  const totalItems = getTotalItems();

  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Export', path: '/export' },
    { label: 'Quote', path: '/quote' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <nav role="navigation" aria-label="Main navigation">
        <Container size="7xl" padding="md">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="h-12 w-48 flex items-center">
                <img 
                  src={logo} 
                  alt="Doors & Plys India Logo" 
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    console.error('Failed to load logo from:', e.currentTarget.src);
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`${isActive ? 'text-[#4B3A2A] font-semibold' : 'text-[#1A1A1A] hover:text-[#4B3A2A]'} transition-colors duration-300 text-sm uppercase tracking-wider`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1A1A1A] hover:text-[#4B3A2A] focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg shadow-lg mt-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                        isActive 
                          ? 'text-[#4B3A2A] font-semibold bg-[#F5F5F5]' 
                          : 'text-[#1A1A1A] hover:bg-[#F5F5F5]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </nav>
    </header>
  );
};