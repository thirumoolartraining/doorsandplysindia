import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export const FeaturedProducts: React.FC = () => {
  const products = [
    {
      name: 'UPVC Sliding Door',
      description: 'Premium sliding door with weather sealing',
      price: '$102',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'UPVC Casement Door',
      description: 'Classic hinged door with multi-point lock',
      price: '$76',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'UPVC French Door',
      description: 'Elegant double door with full glazing',
      price: '$156',
      image: 'https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'UPVC Bi-Fold Door',
      description: 'Space-saving folding door system',
      price: '$222',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-8 tracking-tight leading-tight">
            Most Exported UPVC Door Solutions
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Proven performers in international markets. Complete with export documentation and container-ready packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} variant="product">
              <div 
                className="h-64 bg-cover bg-center rounded-xl mb-6 overflow-hidden"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              
              <h3 className="text-xl font-bold text-[#4B3A2A] mb-3 tracking-tight leading-tight">
                {product.name}
              </h3>
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-[#C3A572]">
                  {product.price}
                </span>
              </div>
              <Button variant="default" className="w-full">
                Add to Cart
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};