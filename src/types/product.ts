export interface Product {
  id: string;
  name: string;
  price: string;
  exportPrice?: string;
  description?: string;
  image: string; // Kept for backward compatibility
  images?: string[]; // New field for multiple images
  category: string;
  maxQty?: number;
  exportTags?: string[];
  exportAvailable: boolean;
  leadTime?: string;
  containerCapacity?: number;
  supplier?: string;
  certifications?: string[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  addedAt: Date;
  exportRequest?: boolean;
}