import React from 'react';
import { Card } from './Card';
import { MessageSquare, Wrench, Package, Truck } from 'lucide-react';

export const ExportProcess: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: 'Step 1',
      title: 'Submit Requirements',
      description: 'Share your specifications, quantities, and delivery requirements. Receive detailed quotation within 24 hours.'
    },
    {
      icon: Wrench,
      step: 'Step 2',
      title: 'Quality Confirmation',
      description: 'Products sourced to your exact specifications with quality certificates and pre-shipment inspection.'
    },
    {
      icon: Package,
      step: 'Step 3',
      title: 'Export Packaging',
      description: 'Professional container-ready packaging with moisture protection, proper labeling, and export documentation.'
    },
    {
      icon: Truck,
      step: 'Step 4',
      title: 'Reliable Delivery',
      description: 'Complete logistics management from our facility to your warehouse with full tracking and support.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Professional Export Process
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Streamlined workflow designed for international trade efficiency and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} variant="basic" className="text-center relative">
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#C3A572] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <div className="pt-4">
                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-[#C3A572] mx-auto" />
                </div>
                
                <div className="text-sm font-medium text-[#C3A572] uppercase tracking-wide mb-2">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-[#1A1A1A]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};