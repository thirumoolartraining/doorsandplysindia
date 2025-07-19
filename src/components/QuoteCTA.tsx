import React from 'react';
import { Button } from './Button';
import { Container } from './Container';

export const QuoteCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-[#4B3A2A]/80"></div>
      </div>

      {/* Content */}
      <Container size="4xl" padding="md" className="relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Source Premium UPVC Doors?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied importers. Get competitive pricing, complete documentation, and reliable delivery.
          </p>
          <Button variant="large" className="bg-[#C3A572] hover:bg-[#B08A4A]">
            Request Export Quote
          </Button>
        </div>
      </Container>
    </section>
  );
};