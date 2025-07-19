import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductsHeader } from '../components/ProductsHeader';
import { ProductGrid } from '../components/ProductGrid';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProductsFooter } from '../components/ProductsFooter';
import { useCartStore } from '../store/cart';
import { products } from '../data/products';
import toast from 'react-hot-toast';
import { Container } from '../components/Container';

type PageType = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy' | 'contact';

interface ProductsProps {
  onNavigate?: (page: PageType, productId?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { getTotalItems } = useCartStore();

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Products', active: true }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRequestQuote = (productId: string) => {
    onNavigate?.('quote');
  };

  const handleNavigateToQuote = (productId: string, productName: string) => {
    // In a real app, you would use Next.js router or React Router
    // For now, we'll navigate to quote page and store product info
    sessionStorage.setItem('quoteProduct', JSON.stringify({ id: productId, name: productName }));
    onNavigate?.('quote');
  };

  const handleFilterClick = () => {
    toast('🔧 Advanced filtering coming soon! Use category filters below for now.', {
      duration: 3000,
      icon: '🔧'
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main role="main" className="pt-20 bg-gradient-to-br from-[#F5F5F5] via-white/50 to-[#F5F5F5]">
        <Container size="7xl" padding="md" className="pt-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </nav>

          {/* Hero Banner */}
          <section aria-labelledby="products-banner" className="bg-gradient-to-r from-[#4B3A2A] to-[#3A2A1A] rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
            <h2 id="products-banner" className="sr-only">Export Ready UPVC Doors</h2>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#C3A572]" />
                  <span className="leading-relaxed">Global Export Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C3A572] rounded-full"></span>
                  <span className="leading-relaxed">CE Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C3A572] rounded-full"></span>
                  <span className="leading-relaxed">MOQ: 5 pieces</span>
                </div>
              </div>
            </div>
          </section>

          {/* Products Header */}
          <section aria-labelledby="products-header">
            <ProductsHeader 
              totalProducts={filteredProducts.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onFilterClick={handleFilterClick}
            />
          </section>

          {/* Category Filter */}
          <section aria-labelledby="category-filter" className="mb-8">
            <h2 id="category-filter" className="sr-only">Product Category Filter</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#4B3A2A] text-white shadow-lg'
                      : 'bg-white/40 backdrop-blur-md border border-white/30 text-[#4B3A2A] hover:bg-white/60'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            {selectedCategory !== 'All' && (
              <p className="text-sm text-[#1A1A1A]/60 mt-2">
                Showing {filteredProducts.length} products in "{selectedCategory}"
              </p>
            )}
          </section>

          {/* Product Grid */}
          <section aria-labelledby="products-grid" className="mb-16">
            <h2 id="products-grid" className="sr-only">Products Grid</h2>
            <ProductGrid 
              loading={loading} 
              onProductClick={(productId) => onNavigate?.('product-detail', productId)}
              onRequestQuote={handleRequestQuote}
              onNavigateToQuote={handleNavigateToQuote}
              filteredProducts={filteredProducts}
            />
          </section>
        </Container>
      </main>

      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};