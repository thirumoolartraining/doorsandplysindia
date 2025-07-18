import React from 'react';
import { Navigation } from '../components/Navigation';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExportHero } from '../components/ExportHero';
import { GlobalStats } from '../components/GlobalStats';
import { WorldMapSection } from '../components/WorldMapSection';
import { ExportProcess } from '../components/ExportProcess';
import { ExportAlerts } from '../components/ExportAlerts';
import { ExportCTA } from '../components/ExportCTA';
import { ProductsFooter } from '../components/ProductsFooter';

interface ExportProps {
  onNavigate?: (page: 'home' | 'products' | 'product-detail' | 'export', productId?: string) => void;
}

export const Export: React.FC<ExportProps> = ({ onNavigate }) => {
  const breadcrumbItems = [
    { label: 'Home', href: '#', onClick: () => onNavigate?.('home') },
    { label: 'Export', active: true }
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
        <ExportHero />

        {/* Global Stats */}
        <GlobalStats />

        {/* World Map */}
        <WorldMapSection />

        {/* Export Process */}
        <ExportProcess />

        {/* Export Alerts */}
        <ExportAlerts />

        {/* Final CTA */}
        <ExportCTA />
      </main>

      <ProductsFooter onNavigate={onNavigate} />
    </div>
  );
};