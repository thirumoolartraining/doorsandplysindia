import React from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { useCartStore } from '../store/cart';
import { products } from '../data/products';
import { Product } from '../types/product';
import { Container } from './Container';

type PageType = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy' | 'contact';

interface FeaturedProductsProps {
  onNavigate: (page: PageType, productId?: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onNavigate }) => {
  const { addToCart, setCartOpen } = useCartStore();
  
  const featuredProducts = products.slice(0, 4).map((product: Product) => ({
    ...product,
    image: product.images?.[0] || product.image
  }));

  return (
    <section className="py-24 bg-[#F5F5F5] font-inter">
      <Container size="7xl" padding="md">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-8 tracking-tight leading-tight">
            Most Exported UPVC Door Solutions
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 font-medium leading-relaxed">
            Proven performers in international markets. Complete with export documentation and container-ready packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} variant="product" className="h-full flex flex-col">
              <div 
                className="h-64 bg-cover bg-center rounded-xl mb-6 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0"
                style={{ backgroundImage: `url(${product.image})` }}
                onClick={() => onNavigate('product-detail', product.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onNavigate('product-detail', product.id)}
                aria-label={`View details for ${product.name}`}
              />
              
              <div className="flex flex-col flex-grow">
                <h3 
                  className="text-xl font-bold text-[#4B3A2A] mb-3 tracking-tight leading-tight cursor-pointer hover:text-[#C3A572] transition-colors line-clamp-2 min-h-[3rem]"
                  onClick={() => onNavigate('product-detail', product.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onNavigate('product-detail', product.id)}
                >
                  {product.name}
                </h3>
                <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="mb-6">
                  {product.exportPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#4B3A2A]">
                        {product.price}
                      </span>
                      <span className="text-sm text-[#4B3A2A]/80 font-medium">
                        (INR)
                      </span>
                      <span className="mx-2 text-[#4B3A2A]/30">|</span>
                      <span className="text-2xl font-bold text-[#C3A572]">
                        {product.exportPrice}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#4B3A2A]">
                        {product.price}
                      </span>
                      <span className="text-sm text-[#4B3A2A]/80 font-medium">
                        (INR)
                      </span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};