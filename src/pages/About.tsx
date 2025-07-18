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

interface AboutProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about', productId?: string) => void;
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
        <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
          <Breadcrumb items={breadcrumbItems} />
        </nav>

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