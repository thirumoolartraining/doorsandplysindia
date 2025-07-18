import React from 'react';
import { Button } from './Button';

export const ExportHero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-[#4B3A2A]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional UPVC Door Export Services
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete export solutions: Quality UPVC doors, professional documentation, competitive pricing, and reliable delivery to 35+ countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="large" className="w-full sm:w-auto bg-[#C3A572] hover:bg-[#B08A4A]">
              Request Export Quote
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#4B3A2A]">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};