import React from 'react';
import { ShoppingCart, Star, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Button } from './Button';
import { useCartStore } from '../store/cart';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  onAddToCart
}) => {
  const { addToCart, getCartItem } = useCartStore();
  const cartItem = getCartItem(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(e);
    } else {
      addToCart(product, 1); // Default quantity to 1
      toast.success(`🛒 Added ${product.name} to cart`);
    }
  };

  return (
    <motion.div 
      className="group relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Floating Export Ready Badge */}
      {product.exportAvailable && (
        <div className="absolute top-4 left-4 z-10">
          <motion.div 
            className="flex items-center gap-2 bg-gradient-to-r from-[#C3A572] to-[#D4B583] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Globe className="w-3 h-3" />
            Export Ready
          </motion.div>
        </div>
      )}

      {/* Cart Quantity Indicator */}
      {cartItem && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div 
            className="bg-[#4B3A2A] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {cartItem.quantity} in cart
          </motion.div>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative h-72 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Certifications Badge */}
        {product.certifications && product.certifications.length > 0 && (
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#4B3A2A] px-2 py-1 rounded-full text-xs font-medium shadow-md">
              <Award className="w-3 h-3" />
              {product.certifications[0]}
            </div>
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="flex items-center">
          <span className="text-xs font-bold text-[#C3A572] uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        {/* Product Title */}
        <h3 className="text-xl font-bold text-[#4B3A2A] leading-tight tracking-tight line-clamp-2 group-hover:text-[#3A2A1A] transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Description */}
        {product.description && (
          <p className="text-[#4B3A2A]/70 text-sm leading-relaxed line-clamp-2 font-medium">
            {product.description}
          </p>
        )}

        {/* Rating & Reviews */}
        {product.rating && (
          <div className="mt-6 flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5 text-[#4B3A2A]" />
            </Button>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < product.rating! 
                      ? 'text-[#C3A572] fill-current' 
                      : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-[#4B3A2A]/60 font-medium">
              ({product.reviewCount || 0} reviews)
            </span>
          </div>
        )}

        {/* Pricing Section */}
        <div className="space-y-3 py-2">
          {product.exportPrice ? (
            // Show both INR and USD for export products
            <div className="space-y-2">
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
              <div className="flex items-center gap-2">
                {product.exportAvailable && (
                  <div className="flex items-center gap-1 text-xs text-[#4B3A2A] bg-[#F5F5F0] px-2 py-1 rounded border border-[#E0D6C3]">
                    <Globe className="w-3 h-3" />
                    <span>Export Ready</span>
                  </div>
                )}
                {product.certifications?.includes('FSC Certified') && (
                  <div className="flex items-center gap-1 text-xs text-[#4B3A2A] bg-[#F5F5F0] px-2 py-1 rounded border border-[#E0D6C3]">
                    <span>FSC Certified</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Show only INR for domestic products
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#4B3A2A]">
                {product.price}
              </span>
              <span className="text-sm text-[#4B3A2A]/80 font-medium">
                (INR)
              </span>
            </div>
          )}
          {product.leadTime && (
            <div className="text-xs text-[#4B3A2A]/60 font-medium">
              Lead Time: {product.leadTime}
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            variant="default"
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold w-full hover:shadow-lg transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>

        {/* Export Tags */}
        {product.exportTags && product.exportTags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/20">
            {product.exportTags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-[#C3A572]/10 text-[#4B3A2A] px-2 py-1 rounded-full font-medium border border-[#C3A572]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C3A572]/5 to-[#4B3A2A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};