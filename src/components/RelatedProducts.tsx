import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Container } from './Container';

interface Product {
  id: string;
  name: string;
  price: string;
  description?: string;
  image: string;
  category: string;
}

interface RelatedProductsProps {
  currentProductId: string;
  onAddToCart?: (product: Product) => void;
  onProductClick?: (productId: string) => void;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ 
  currentProductId, 
  onAddToCart,
  onProductClick 
}) => {
  // Filter out the current product and get only UPVC doors
  const relatedProducts = products
    .filter(product => product.id !== currentProductId && product.category.includes('UPVC'))
    .slice(0, 3); // Show maximum 3 related products

  return (
    <section className="py-16">
      <Container size="7xl" padding="md">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#4B3A2A] mb-4 tracking-tight">
            Related UPVC Doors
          </h2>
          <p className="text-[#1A1A1A]/70">
            Explore more premium UPVC door options from our collection
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProducts.map((product) => (
          <div 
            key={product.id}
            onClick={() => onProductClick?.(product.id)}
            className="cursor-pointer"
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
};