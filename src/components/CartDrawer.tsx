import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from './Button';
import { ExportBadge } from './ExportBadge';
import { useCartStore } from '../store/cart';

interface CartDrawerProps {
  onNavigate?: (page: 'checkout') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigate }) => {
  const { 
    items, 
    isOpen, 
    setCartOpen, 
    updateQuantity, 
    removeFromCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    setCartOpen(false);
    onNavigate?.('checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white/90 backdrop-blur-md border-l border-white/20 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 className="text-xl font-bold text-[#4B3A2A] flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                UPVC Door Cart ({totalItems})
              </h2>
              <Button
                variant="settings"
                onClick={() => setCartOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-[#1A1A1A]/30 mx-auto mb-4" />
                  <p className="text-[#1A1A1A]/60 mb-4">Your UPVC door cart is empty</p>
                  <Button
                    variant="default"
                    onClick={() => setCartOpen(false)}
                  >
                    Browse UPVC Doors
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl p-4"
                    >
                      <div className="flex gap-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-[#4B3A2A] text-sm line-clamp-2">
                                {item.product.name}
                              </h3>
                              <p className="text-xs text-[#1A1A1A]/60">
                                {item.product.category}
                              </p>
                            </div>
                            <Button
                              variant="settings"
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-1 text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="settings"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-1"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="settings"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            
                            <div className="text-right">
                              <div className="font-bold text-[#4B3A2A]">
                                ₹{(parseFloat(item.product.price.replace(/[₹$,]/g, '')) * item.quantity).toLocaleString()}
                              </div>
                              {item.exportRequest && (
                                <ExportBadge type="available" className="mt-1" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/20 p-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-[#4B3A2A]">
                  <span>Total:</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                
                <Button
                  variant="large"
                  onClick={handleCheckout}
                  className="w-full"
                >
                  Proceed to UPVC Door Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};