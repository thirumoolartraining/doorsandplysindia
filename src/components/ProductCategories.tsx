import React from 'react';
import { Card } from './Card';
import { DoorOpen as Door, Move, Home, Layers } from 'lucide-react';
import { Container } from './Container';

type PageType = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy' | 'contact';

interface ProductCategoriesProps {
  onNavigate?: (page: PageType, productId?: string) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onNavigate }) => {
  const categories = [
    {
      id: '1', // ID from products data for UPVC Sliding Door System
      icon: Door,
      title: 'UPVC Sliding Doors',
      description: 'Space-saving sliding doors with superior weather sealing',
      image: '/images/products/upvc-sliding-door-system/2.png'
    },
    {
      id: '2', // ID from products data for UPVC Casement Door Set
      icon: Home,
      title: 'UPVC Casement Doors',
      description: 'Classic hinged doors with multi-point locking',
      image: '/images/products/upvc-casement-door/2.png'
    },
    {
      id: '3', // ID from products data for UPVC French Door System
      icon: Layers,
      title: 'UPVC French Doors',
      description: 'Elegant double doors with maximum natural light',
      image: '/images/products/upvc-french-door/2.png'
    },
    {
      id: '4', // ID from products data for UPVC Bi-Fold Door System
      icon: Move,
      title: 'UPVC Folding Doors',
      description: 'Bi-fold systems for wide openings and modern spaces',
      image: '/images/products/upvc-bi-fold-door/2.png'
    }
  ];

  return (
    <section className="py-24 font-inter">
      <Container size="7xl" padding="md">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accessible-text-primary mb-8 tracking-tight leading-tight">
            Export-Grade UPVC Door Solutions
          </h2>
          <p className="text-xl text-accessible-text-secondary font-medium leading-relaxed">
            CE-certified UPVC doors engineered for international markets with container-ready packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} variant="basic">
              <div 
                className="h-56 w-full bg-cover bg-center rounded-xl mb-6 overflow-hidden"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <h3 className="text-xl font-bold text-[#4B3A2A] mb-4 tracking-tight leading-tight">
                {category.title}
              </h3>
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                {category.description}
              </p>
              <button 
                onClick={() => onNavigate?.('product-detail', category.id)}
                className="text-[#C3A572] font-semibold hover:text-[#4B3A2A] transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none"
              >
                Learn More →
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};