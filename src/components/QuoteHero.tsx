import React from 'react';

export const QuoteHero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-[#4B3A2A]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Get Your UPVC Door Export Quote
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional export quotations with competitive pricing, complete documentation, and reliable delivery timelines.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">⏱</div>
              <div className="text-lg font-bold text-[#C3A572] mb-1">24-Hour Response</div>
              <div className="text-white/80 text-sm">Professional quotation guaranteed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-lg font-bold text-[#C3A572] mb-1">35+ Countries</div>
              <div className="text-white/80 text-sm">Proven export experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl mb-2">🛠</div>
              <div className="text-lg font-bold text-[#C3A572] mb-1">Complete Service</div>
              <div className="text-white/80 text-sm">Documentation & logistics included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};