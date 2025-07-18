import React from 'react';
import { Card } from './Card';
import { Award, Globe, Leaf, Shield } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality',
      description: 'Uncompromising standards in every product'
    },
    {
      icon: Globe,
      title: 'Trust',
      description: 'Building lasting partnerships worldwide'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Responsible sourcing and eco-friendly practices'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous innovation and improvement'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card variant="basic" className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4B3A2A] mb-8 tracking-tight">
              Professional UPVC Door Supply Since 1995
            </h2>
            
            <div className="space-y-6 text-lg text-[#1A1A1A]/80 leading-relaxed mb-12">
              <p>
                Established in 1995, Doors & Plys India has evolved from a regional supplier to a trusted international partner 
                for premium UPVC door solutions. We specialize in sourcing and supplying high-quality, energy-efficient UPVC doors 
                that meet international standards while offering competitive pricing from India.
              </p>
              
              <p>
                Today, we serve importers and distributors in 35+ countries, maintaining our founding commitment to quality and service. 
                Our expertise spans product sourcing, quality assurance, export documentation, and international logistics – 
                everything you need for successful UPVC door imports.
              </p>
              
              <p>
                As your dedicated supply partner, we handle the complexities of international trade while you focus on your market. 
                From initial inquiry to final delivery, we ensure professional service, transparent communication, and reliable results.
              </p>
            </div>

            <div className="border-t border-white/20 pt-12">
              <h3 className="text-2xl font-bold text-[#4B3A2A] mb-8 tracking-tight">
                Our Core Values
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <value.icon className="w-12 h-12 text-[#C3A572] mx-auto" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#4B3A2A] mb-2">
                      {value.title}
                    </h4>
                    <p className="text-[#1A1A1A]/70 text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};