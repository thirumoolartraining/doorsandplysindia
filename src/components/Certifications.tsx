import React from 'react';
import { Card } from './Card';
import { Award, Shield, Leaf, Globe } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      icon: Award,
      name: 'ISO 9001:2015',
      description: 'Quality Management System'
    },
    {
      icon: Leaf,
      name: 'FSC Certified',
      description: 'Forest Stewardship Council'
    },
    {
      icon: Shield,
      name: 'CE Marking',
      description: 'European Conformity'
    },
    {
      icon: Globe,
      name: 'Export Excellence',
      description: 'Government Recognition'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Certifications & Standards
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Our commitment to quality is validated by international certifications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} variant="basic" hover={true} className="text-center">
              <div className="mb-4">
                <cert.icon className="w-12 h-12 text-[#C3A572] mx-auto" />
              </div>
              <h3 className="text-lg font-bold text-[#4B3A2A] mb-2 tracking-tight">
                {cert.name}
              </h3>
              <p className="text-[#1A1A1A]/70 text-sm">
                {cert.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-[#1A1A1A]/60 text-sm">
            All certifications are available for download upon request
          </p>
        </div>
      </div>
    </section>
  );
};