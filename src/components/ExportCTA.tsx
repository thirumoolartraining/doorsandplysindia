import React from 'react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants/contact';

export const ExportCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-[#4B3A2A]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Import Premium UPVC Doors?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied UPVC door importers worldwide. Partner with your trusted supplier today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="large" className="w-full sm:w-auto bg-[#C3A572] hover:bg-[#B08A4A]">
              Start UPVC Export Inquiry
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#4B3A2A]">
              Schedule Video Call
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/70 text-sm">
              📧 {CONTACT_INFO.email} | 📞 {CONTACT_INFO.phone} | 🌍 Available 24/7 for UPVC door importers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};