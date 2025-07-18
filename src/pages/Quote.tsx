import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { QuoteHero } from '../components/QuoteHero';
import { QuoteForm } from '../components/QuoteForm';
import { TrustIndicators } from '../components/TrustIndicators';
import { AlternativeContact } from '../components/AlternativeContact';
import { ProductsFooter } from '../components/ProductsFooter';

interface QuoteProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about', productId?: string) => void;
}

export const Quote: React.FC<QuoteProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Quote Request', active: true }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main role="main" className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
          <Breadcrumb items={breadcrumbItems} />
        </nav>

        {/* Hero Section */}
        <QuoteHero />

        {/* Form Section */}
        <section aria-labelledby="quote-form-section" className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 id="quote-form-section" className="sr-only">Quote Request Form</h2>
          <QuoteForm />
        </section>

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Alternative Contact Methods */}
        <AlternativeContact />
      </main>

      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};