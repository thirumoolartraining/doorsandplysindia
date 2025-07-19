import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { QuoteHero } from '../components/QuoteHero';
import { QuoteForm } from '../components/QuoteForm';
import { TrustIndicators } from '../components/TrustIndicators';
import { AlternativeContact } from '../components/AlternativeContact';
import { ProductsFooter } from '../components/ProductsFooter';
import { Container } from '../components/Container';

type NavigationPage = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact' | 'shipping-policy' | 'cancellation-refund-policy';

interface QuoteProps {
  onNavigate?: (page: NavigationPage, productId?: string) => void;
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
        <Container size="7xl" padding="md" className="pt-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </nav>
        </Container>

        {/* Hero Section */}
        <QuoteHero />

        {/* Form Section */}
        <section aria-labelledby="quote-form-section" className="py-16">
          <h2 id="quote-form-section" className="sr-only">Quote Request Form</h2>
          <Container size="7xl" padding="md">
            <QuoteForm />
          </Container>
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