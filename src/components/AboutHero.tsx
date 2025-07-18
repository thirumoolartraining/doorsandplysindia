import React from 'react';
import { Button } from './Button';

interface AboutHeroProps {
  onNavigate?: (page: 'quote') => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight font-inter">
          Your Trusted UPVC Door Supply Partner
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
          Professional UPVC door supplier serving international markets since 1995. Quality products, competitive pricing, reliable delivery.
        </p>

        <Button 
          variant="default" 
          className="text-lg px-10 py-4 font-inter"
          onClick={() => onNavigate?.('quote')}
        >
          Get Export Quote
        </Button>
      </div>
    </section>
  );
};