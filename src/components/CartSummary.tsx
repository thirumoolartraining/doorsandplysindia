import React from 'react';
import { Card } from './Card';
import { Minus, Plus, X } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

interface CartSummaryProps {
  items: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹$,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <Card variant="basic" className="sticky top-24">
      <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-white/40 backdrop-blur-sm rounded-lg border border-white/20">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            
            <div className="flex-1">
              <div className="text-xs font-medium text-[#C3A572] uppercase tracking-wide mb-1">
                {item.category}
              </div>
              <h3 className="font-semibold text-[#4B3A2A] text-sm mb-1">
                {item.name}
              </h3>
              <div className="text-lg font-bold text-[#4B3A2A]">
                {item.price}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity?.(item.id, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/80 transition-all duration-200"
              >
                <Minus className="w-4 h-4 text-[#4B3A2A]" />
              </button>
              
              <span className="w-8 text-center font-semibold text-[#4B3A2A]">
                {item.quantity}
              </span>
              
              <button
                onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/80 transition-all duration-200"
              >
                <Plus className="w-4 h-4 text-[#4B3A2A]" />
              </button>
            </div>

            <button
              onClick={() => onRemoveItem?.(item.id)}
              className="w-8 h-8 rounded-full bg-red-50/60 backdrop-blur-sm border border-red-200/30 flex items-center justify-center hover:bg-red-100/80 transition-all duration-200"
            >
              <X className="w-4 h-4 text-red-600" />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-white/20 pt-4 space-y-2">
        <div className="flex justify-between text-[#1A1A1A]/70">
          <span>Subtotal</span>
          <span>₹{calculateTotal().toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-[#1A1A1A]/70">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-[#4B3A2A] pt-2 border-t border-white/20">
          <span>Total</span>
          <span>₹{calculateTotal().toLocaleString()}</span>
        </div>
      </div>
    </Card>
  );
};