import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { ProductSkeleton } from './ProductSkeleton';
import { products } from '../data/products';

interface ProductGridProps {
  loading?: boolean;
  onProductClick?: (productId: string) => void;
  onRequestQuote?: (productId: string) => void;
  onNavigateToQuote?: (productId: string, productName: string) => void;
  filteredProducts?: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  loading = false, 
  onProductClick,
  onRequestQuote,
  onNavigateToQuote,
  filteredProducts
}) => {
  const handleRequestQuote = (product: any) => {
    onRequestQuote?.(product.id);
  };

  const productsToShow = filteredProducts || products;

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, staggerChildren: 0.1 }}
    >
      {productsToShow.map((product) => (
        <motion.div 
          key={product.id}
          onClick={() => onProductClick?.(product.id)}
          className="cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: parseInt(product.id) * 0.1 }}
        >
          <ProductCard
            product={product}
            onRequestQuote={handleRequestQuote}
            onNavigateToQuote={onNavigateToQuote}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};