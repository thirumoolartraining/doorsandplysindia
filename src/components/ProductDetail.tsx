import React from 'react';
import { Share2, ShoppingCart, Star, Shield, Truck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';
import { Alert } from './Alert';
import { QuantitySelector } from './QuantitySelector';
import { ExportBadge } from './ExportBadge';
import { useCartStore } from '../store/cart';
import { Product } from '../types/product';
import { Container } from './Container';

interface ProductDetailProps {
  product: Product;
  onShare?: () => void;
  onRequestQuote?: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onShare 
}) => {
  const [quantity, setQuantity] = React.useState(1);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const { addToCart, getCartItem } = useCartStore();
  const cartItem = getCartItem(product.id);
  
  // Use images array if available, otherwise fallback to single image
  const productImages = product.images?.length ? product.images : [product.image];
  
  const navigateImage = (direction: 'prev' | 'next') => {
    setCurrentImageIndex(prev => {
      if (direction === 'next') {
        return prev === productImages.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? productImages.length - 1 : prev - 1;
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart`);
  };

  return (
    <motion.div 
      className="space-y-8 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container size="7xl" padding="md">
        {/* Main Product Section */}
        <Card variant="product" className="overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={productImages[currentImageIndex]}
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                {productImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => navigateImage('prev')}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    <button 
                      onClick={() => navigateImage('next')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnails */}
              {productImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-blue-500 ring-2 ring-blue-300' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} - Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Image Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-[#C3A572]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  Premium Quality
                </div>
              </div>
              
              {/* Export Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.exportAvailable && <ExportBadge type="available" />}
                {product.certifications?.includes('FSC Certified') && <ExportBadge type="certified" />}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              <div className="text-sm font-medium text-[#C3A572] uppercase tracking-wide">
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-[#4B3A2A] tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < (product.rating || 0)
                          ? 'text-[#C3A572] fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-[#1A1A1A]/70 text-sm">
                  ({product.reviewCount || 0} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-[#1A1A1A]/80 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              {product.features && (
                <div className="space-y-3">
                <h3 className="font-semibold text-[#4B3A2A]">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-[#1A1A1A]/70">
                      <div className="w-2 h-2 bg-[#C3A572] rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>
              )}

              {/* Price */}
              <div className="py-4">
                <div className="text-3xl font-bold text-[#4B3A2A]">
                  {product.price}
                </div>
                {product.exportPrice && (
                  <div className="text-lg text-[#1A1A1A]/70 mt-1">
                    Export Price: {product.exportPrice}
                  </div>
                )}
                <div className="text-[#1A1A1A]/60 text-sm mt-1">
                  Inclusive of all taxes
                </div>
                {product.leadTime && (
                  <div className="text-[#1A1A1A]/60 text-sm">
                    Lead Time: {product.leadTime}
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-semibold text-[#4B3A2A]">Quantity:</label>
                  <QuantitySelector
                    value={quantity}
                    onChange={setQuantity}
                    min={1}
                    max={product.maxQty || 1000}
                  />
                </div>
                
                {cartItem && (
                  <div className="text-sm text-[#C3A572] font-medium">
                    {cartItem.quantity} already in cart
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="large" 
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-3 w-full"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={onShare}
                  className="flex items-center justify-center gap-3 px-6 w-auto"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-[#C3A572] mx-auto mb-2" />
                  <div className="text-xs font-medium text-[#1A1A1A]/70">
                    Quality Assured
                  </div>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 text-[#C3A572] mx-auto mb-2" />
                  <div className="text-xs font-medium text-[#1A1A1A]/70">
                    Global Shipping
                  </div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-[#C3A572] mx-auto mb-2" />
                  <div className="text-xs font-medium text-[#1A1A1A]/70">
                    ISO Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Export Info Banner */}
        <Alert variant="info" className="shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Available for International Export</h3>
              <p>This product is available for international shipping and OEM bulk orders. Contact us for custom specifications and volume pricing.</p>
            </div>
            <Button variant="default" className="flex-shrink-0">
              Get Export Quote
            </Button>
          </div>
        </Alert>

        {/* Specifications */}
        <Card variant="basic">
          <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Specifications
          </h2>
          {product.specifications && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0">
                <span className="font-medium text-[#1A1A1A]/70">{spec.label}</span>
                <span className="font-semibold text-[#4B3A2A]">{spec.value}</span>
              </div>
            ))}
            </div>
          )}
        </Card>
      </Container>
    </motion.div>
  );
};