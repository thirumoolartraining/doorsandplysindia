import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about', productId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden font-inter">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Logo - Positioned in top-left corner */}
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-xl">
          <img 
            src="/logo.png" 
            alt="Doors & Plys India Logo" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              console.error('Failed to load logo from:', e.currentTarget.src);
            }}
          />
        </div>
      </div>
      
      {/* Main Content - Centered */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
          <span className="bg-gradient-to-r from-white to-[#C3A572] bg-clip-text text-transparent">
            Your Trusted UPVC Door Supplier
          </span>
          <span className="block text-[#C3A572] mt-4 text-2xl sm:text-3xl font-medium">
            Serving 35+ Countries Worldwide
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          Premium UPVC doors with complete export documentation, competitive pricing, and reliable delivery to your warehouse.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="large" 
            className="w-full sm:w-auto"
            onClick={() => onNavigate?.('export')}
          >
            Request Export Quote
          </Button>
          <Button 
            variant="ghost" 
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#4B3A2A]"
            onClick={() => onNavigate?.('quote')}
          >
            Get Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};