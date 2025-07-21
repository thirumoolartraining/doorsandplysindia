import React from 'react';
import { Card } from './Card';
import { Globe, Award, Package, Settings } from 'lucide-react';

export const GlobalStats: React.FC = () => {
  const stats = [
    {
      icon: Globe,
      number: '35+',
      label: 'Countries Served',
      description: 'Trusted partners across 5 continents'
    },
    {
      icon: Award,
      number: 'FSC & ISO',
      label: 'Certified',
      description: 'Committed to Quality'
    },
    {
      icon: Package,
      number: '15,000+',
      label: 'Doors Supplied',
      description: 'Successful global supply partnerships'
    },
    {
      icon: Settings,
      number: 'Custom',
      label: 'Supply Solutions',
      description: 'Tailored sourcing partnerships'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Proven Export Performance
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Trusted by international partners for consistent quality and professional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} variant="stats">
              <div className="mb-6">
                <stat.icon className="w-12 h-12 text-[#C3A572] mx-auto" />
              </div>
              <div className="text-3xl font-bold text-[#4B3A2A] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-[#1A1A1A] mb-2">
                {stat.label}
              </div>
              <p className="text-[#1A1A1A]/70 text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};