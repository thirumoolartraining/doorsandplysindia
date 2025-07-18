import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '../types/product';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (product: Product, quantity?: number, exportRequest?: boolean) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getCartItem: (productId: string) => CartItem | undefined;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addToCart: (product: Product, quantity = 1, exportRequest = false) => {
        const existingItem = get().getCartItem(product.id);
        
        if (existingItem) {
          // Update existing item quantity
          set((state) => ({
            items: state.items.map((item) =>
              item.product.id === product.id
                ? { 
                    ...item, 
                    quantity: item.quantity + quantity,
                    exportRequest: exportRequest || item.exportRequest
                  }
                : item
            ),
          }));
        } else {
          // Add new item
          set((state) => ({
            items: [
              ...state.items,
              {
                product,
                quantity,
                addedAt: new Date(),
                exportRequest,
              },
            ],
          }));
        }
      },

      removeFromCart: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = parseFloat(item.product.price.replace(/[₹$,]/g, ''));
          return total + (price * item.quantity);
        }, 0);
      },

      getCartItem: (productId: string) => {
        return get().items.find((item) => item.product.id === productId);
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      setCartOpen: (open: boolean) => {
        set({ isOpen: open });
      },
    }),
    {
      name: 'doors-ply-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);