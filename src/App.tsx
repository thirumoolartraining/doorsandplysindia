import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
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
import { ScrollToTop, ScrollToTopButton } from './components/ScrollToTop';
import { useEffect } from 'react';

// This component will handle the main app content with routing
const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // For backward compatibility with existing navigation
  const navigateTo = (page: string, productId?: string) => {
    if (page === 'product-detail' && productId) {
      navigate(`/products/${productId}`);
    } else if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  // Helper to pass navigation to components that expect it
  const withNavigation = (Component: React.ComponentType<any>) => {
    return <Component onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter antialiased">
      <ScrollToTop />
      <ScrollToTopButton />
      <Toast />
      <CartDrawer onNavigate={navigateTo} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <main role="main">
              <Hero onNavigate={navigateTo} />
              <ProductCategories onNavigate={navigateTo} />
              <FeaturedProducts onNavigate={navigateTo} />
              <WhyChooseUs />
              <Testimonials />
              <ExportBanner />
              <QuoteCTA />
            </main>
            <Footer />
          </>
        } />
        
        <Route path="/products" element={withNavigation(Products)} />
        <Route path="/products/:productId" element={
          (() => {
            // This is a workaround to pass the productId from URL params to the component
            // In a real app, you might want to use a proper data loader
            const ProductDetailWrapper = () => {
              const { productId } = useParams();
              return <ProductDetailPage productId={productId || '1'} onNavigate={navigateTo} />;
            };
            return <ProductDetailWrapper />;
          })()
        } />
        <Route path="/export" element={withNavigation(Export)} />
        <Route path="/quote" element={withNavigation(Quote)} />
        <Route path="/checkout" element={withNavigation(Checkout)} />
        <Route path="/about" element={withNavigation(About)} />
        <Route path="/privacy-policy" element={withNavigation(PrivacyPolicy)} />
        <Route path="/terms-and-conditions" element={withNavigation(TermsAndConditions)} />
        <Route path="/shipping-policy" element={withNavigation(ShippingPolicy)} />
        <Route path="/cancellation-refund-policy" element={withNavigation(CancellationRefundPolicy)} />
        <Route path="/contact" element={withNavigation(Contact)} />
        
        {/* 404 - Not Found */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <button 
                onClick={() => navigateTo('home')}
                className="px-4 py-2 bg-[#4B3A2A] text-white rounded hover:bg-[#5a4a3a] transition-colors"
              >
                Go to Home
              </button>
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
};

// Main App component that wraps everything with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;