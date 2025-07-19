import React from 'react';
import { Card } from './Card';
import { Star } from 'lucide-react';
import { Container } from './Container';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'Pacific Import Solutions, Singapore',
      testimonial: 'Doors & Plys India has been our reliable UPVC door supplier for 3 years. Quality is consistent, documentation is complete, and delivery is always on schedule.',
      rating: 5
    },
    {
      name: 'Sarah Al-Rashid',
      company: 'Gulf Building Materials, UAE',
      testimonial: 'Professional export service with competitive pricing. Their UPVC doors meet all our quality standards and arrive container-ready.',
      rating: 5
    },
    {
      name: 'James Mitchell',
      company: 'Mitchell Construction Group, Australia',
      testimonial: 'Excellent communication and reliable supply chain. They understand international requirements and deliver exactly what we need.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <Container size="7xl" padding="md">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Trusted by Importers Worldwide
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Real feedback from our international partners and distributors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="notification">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C3A572] fill-current" />
                ))}
              </div>
              <p className="text-[#1A1A1A] mb-6 italic">
                "{testimonial.testimonial}"
              </p>
              <div>
                <div className="font-semibold text-[#4B3A2A]">
                  {testimonial.name}
                </div>
                <div className="text-[#1A1A1A]/70 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};