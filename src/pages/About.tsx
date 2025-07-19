import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { AboutHero } from '../components/AboutHero';
import { CompanyOverview } from '../components/CompanyOverview';
import { GlobalCredibility } from '../components/GlobalCredibility';
import { FactoryGallery } from '../components/FactoryGallery';
import { Certifications } from '../components/Certifications';
import { AboutCTA } from '../components/AboutCTA';
import { ProductsFooter } from '../components/ProductsFooter';
import { Container } from '../components/Container';

type NavigationPage = 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'contact' | 'shipping-policy' | 'cancellation-refund-policy';

interface AboutProps {
  onNavigate?: (page: NavigationPage, productId?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'About', active: true }
  ];

  const handleNavigateToQuote = () => {
    onNavigate?.('quote');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <Navigation onNavigate={onNavigate} />
      
      {/* Main Content */}
      <main role="main" className="pt-20">
        {/* Breadcrumb */}
        <Container size="7xl" padding="md" className="pt-8">
          <Breadcrumb items={breadcrumbItems} />
        </Container>

        {/* Hero Section */}
        <AboutHero onNavigate={handleNavigateToQuote} />

        {/* Company Overview */}
        <CompanyOverview />

        {/* Global Credibility */}
        <GlobalCredibility />

        {/* Factory Gallery */}
        <FactoryGallery />

        {/* Certifications */}
        <Certifications />

        {/* CTA Section */}
        <AboutCTA onNavigate={onNavigate} />
      </main>

      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};