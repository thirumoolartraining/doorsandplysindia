import React from 'react';
import { Card } from './Card';
import { Shield, Award, Truck, Settings } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'CE Certified Products',
      description: 'All UPVC doors meet European safety and quality standards',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'ISO 9001 Quality Sourcing',
      description: 'Certified quality management in our supply chain process',
      color: 'text-blue-600'
    },
    {
      icon: Truck,
      title: 'Export-Ready Logistics',
      description: 'Complete documentation and shipping support worldwide',
      color: 'text-[#C3A572]'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored UPVC door solutions for your specific needs',
      color: 'text-[#4B3A2A]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
            Why Choose Our UPVC Door Supply Services
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Trusted by importers worldwide for quality, reliability, and professional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <Card key={index} variant="basic" className="text-center hover:scale-105 transition-transform duration-300">
              <div className="mb-6">
                <indicator.icon className={`w-12 h-12 mx-auto ${indicator.color}`} />
              </div>
              <h3 className="text-lg font-bold text-[#4B3A2A] mb-3 tracking-tight">
                {indicator.title}
              </h3>
              <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">
                {indicator.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};