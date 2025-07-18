import React from 'react';

export const WorldMapSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="h-96 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-[#4B3A2A]/70 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                  Trusted by Importers Across 5 Continents
                </h3>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  From North America to Asia-Pacific, our premium wood products reach every corner of the globe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Country Flags Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            { country: 'USA', flag: '🇺🇸' },
            { country: 'Canada', flag: '🇨🇦' },
            { country: 'UK', flag: '🇬🇧' },
            { country: 'Germany', flag: '🇩🇪' },
            { country: 'Australia', flag: '🇦🇺' },
            { country: 'Japan', flag: '🇯🇵' },
            { country: 'UAE', flag: '🇦🇪' },
            { country: 'Singapore', flag: '🇸🇬' }
          ].map((item, index) => (
            <div key={index} className="text-center bg-white/60 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl mb-2">{item.flag}</div>
              <div className="text-sm font-medium text-[#4B3A2A]">{item.country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};