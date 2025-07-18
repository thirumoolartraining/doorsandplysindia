import React, { useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductCategories } from './components/ProductCategories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ExportBanner } from './components/ExportBanner';
import { QuoteCTA } from './components/QuoteCTA';
import { Footer } from './components/Footer';
import { Products } from './pages/Products';
import { ProductDetailPage } from './pages/ProductDetail';
import { Export } from './pages/Export';
import { Quote } from './pages/Quote';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { ShippingPolicy } from './pages/ShippingPolicy';
import { CancellationRefundPolicy } from './pages/CancellationRefundPolicy';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy' | 'contact'>('home');
  const [currentProductId, setCurrentProductId] = useState<string>('1');

  const navigateTo = (page: 'home' | 'products' | 'product-detail' | 'export' | 'quote' | 'checkout' | 'about' | 'privacy-policy' | 'terms-and-conditions' | 'shipping-policy' | 'cancellation-refund-policy' | 'contact', productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setCurrentProductId(productId);
    }
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'product-detail':
        return <ProductDetailPage productId={currentProductId} onNavigate={navigateTo} />;
      case 'products':
        return <Products onNavigate={navigateTo} />;
      case 'export':
        return <Export onNavigate={navigateTo} />;
      case 'quote':
        return <Quote onNavigate={navigateTo} />;
      case 'checkout':
        return <Checkout onNavigate={navigateTo} />;
      case 'about':
        return <About onNavigate={navigateTo} />;
      case 'privacy-policy':
        return <PrivacyPolicy onNavigate={navigateTo} />;
      case 'terms-and-conditions':
        return <TermsAndConditions onNavigate={navigateTo} />;
      case 'shipping-policy':
        return <ShippingPolicy onNavigate={navigateTo} />;
      case 'cancellation-refund-policy':
        return <CancellationRefundPolicy onNavigate={navigateTo} />;
      case 'contact':
        return <Contact onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Hero />
            <ProductCategories />
            <FeaturedProducts />
            <WhyChooseUs />
            <Testimonials />
            <ExportBanner />
            <QuoteCTA />
            <Footer />
          </>
        );
    }
  };

  return (
    <>
      {/* Global components that should appear on all pages */}
      <CartDrawer onNavigate={navigateTo} />
      <Toast />
      
      {/* Page-specific content */}
      <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased" role="application" aria-label="Doors & Plys India Website">
        {currentPage === 'home' ? (
          <>
            <Navigation onNavigate={navigateTo} />
            <main role="main">
              <Hero onNavigate={navigateTo} />
              <ProductCategories />
              <FeaturedProducts />
              <WhyChooseUs />
              <Testimonials />
              <ExportBanner />
              <QuoteCTA />
            </main>
            <Footer onNavigate={navigateTo} />
          </>
        ) : (
          renderPageContent()
        )}
      </div>
    </>
  );
}

export default App;