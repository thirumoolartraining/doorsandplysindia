import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductDetail } from '../components/ProductDetail';

import { ProductsFooter } from '../components/ProductsFooter';
import { products } from '../data/products';

interface ProductDetailPageProps {
  productId: string;
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact', productId?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ 
  productId, 
  onNavigate 
}) => {
  // Mock product data - in a real app, this would come from an API
  const product = products.find(p => p.id === productId) || products[0];

  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Products', href: '#', onClick: () => onNavigate?.('products') },
    { label: product.name, active: true }
  ];

  const handleRequestQuote = () => {
    onNavigate?.('quote');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main role="main" className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="pt-8 mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </nav>

          {/* Product Detail */}
          <section aria-labelledby="product-detail-section">
            <h1 id="product-detail-section" className="sr-only">{product.name} Details</h1>
            <ProductDetail 
              product={product}
              onRequestQuote={handleRequestQuote}
              onShare={handleShare}
            />
          </section>

        </div>
      </main>

      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};