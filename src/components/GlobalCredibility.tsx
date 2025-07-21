import React from 'react';
import { Card } from './Card';
import { Globe, Award, Calendar, Settings } from 'lucide-react';

export const GlobalCredibility: React.FC = () => {
  const metrics = [
    {
      icon: Globe,
      number: '35+',
      label: 'Countries Exported',
      description: 'Trusted partners across five continents'
    },
    {
      icon: Award,
      number: 'Globally Recognized',
      label: 'Certified',
      description: 'International quality and sustainability standards'
    },
    {
      icon: Calendar,
      number: '25+',
      label: 'Years of Experience',
      description: 'Decades of expertise in wood manufacturing'
    },
    {
      icon: Settings,
      number: 'OEM',
      label: 'White-Label Ready',
      description: 'Custom manufacturing and private labeling'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Built for Global Markets
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Our commitment to excellence has earned the trust of clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} variant="stats" hover={true}>
              <div className="mb-6">
                <metric.icon className="w-12 h-12 text-[#C3A572] mx-auto" />
              </div>
              <div className="text-3xl font-bold text-[#4B3A2A] mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-[#1A1A1A] mb-2">
                {metric.label}
              </div>
              <p className="text-[#1A1A1A]/70 text-sm">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};