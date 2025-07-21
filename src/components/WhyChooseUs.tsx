import React from 'react';
import { Card } from './Card';
import { Globe, Award, Package, Settings } from 'lucide-react';
import { Container } from './Container';

export const WhyChooseUs: React.FC = () => {
  const stats = [
    {
      icon: Globe,
      number: '35+',
      label: 'Countries Shipped',
      description: 'Global reach across continents'
    },
    {
      icon: Award,
      number: 'Globally Recognized',
      label: 'Certified',
      description: 'Committed to Quality'
    },
    {
      icon: Package,
      number: '10,000+',
      label: 'Orders Fulfilled',
      description: 'Trusted by thousands worldwide'
    },
    {
      icon: Settings,
      number: 'Custom',
      label: 'Sourcing Solutions',
      description: 'Tailored supply partnerships for every need'
    }
  ];

  return (
    <section className="py-20">
      <Container size="7xl" padding="md">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accessible-text-primary mb-6 tracking-tight">
            Your Reliable UPVC Door Supply Partner
          </h2>
          <p className="text-xl text-accessible-text-secondary leading-relaxed">
            Trusted by importers worldwide for consistent quality, competitive pricing, and professional export services
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
      </Container>
    </section>
  );
};