import React from 'react';
import { Card } from './Card';
import { DoorOpen as Door, Move, Home, Layers } from 'lucide-react';

export const ProductCategories: React.FC = () => {
  const categories = [
    {
      icon: Door,
      title: 'UPVC Sliding Doors',
      description: 'Space-saving sliding doors with superior weather sealing',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Home,
      title: 'UPVC Casement Doors',
      description: 'Classic hinged doors with multi-point locking',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Layers,
      title: 'UPVC French Doors',
      description: 'Elegant double doors with maximum natural light',
      image: 'https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Move,
      title: 'UPVC Folding Doors',
      description: 'Bi-fold systems for wide openings and modern spaces',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accessible-text-primary mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
            Export-Grade UPVC Door Solutions
          </h2>
          <p className="text-xl text-accessible-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
            CE-certified UPVC doors engineered for international markets with container-ready packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} variant="basic">
              <div 
                className="h-56 bg-cover bg-center rounded-xl mb-6 overflow-hidden"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="h-full bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-black/20">
                  <category.icon className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#4B3A2A] mb-4 tracking-tight leading-tight">
                {category.title}
              </h3>
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                {category.description}
              </p>
              <a href="#" className="text-[#C3A572] font-semibold hover:text-[#4B3A2A] transition-colors duration-300 inline-flex items-center gap-2">
                Learn More →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};