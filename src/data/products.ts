import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'UPVC Sliding Door System - Export Grade',
    price: '₹8,499',
    exportPrice: '$102',
    description: 'Professional-grade sliding door system with German hardware, multi-point locking, and superior weather sealing for international markets',
    image: '/images/products/upvc-sliding-door-system/1.png',
    images: [
      '/images/products/upvc-sliding-door-system/1.png',
      '/images/products/upvc-sliding-door-system/2.png',
      '/images/products/upvc-sliding-door-system/3.png',
      '/images/products/upvc-sliding-door-system/4.png',
      '/images/products/upvc-sliding-door-system/5.png',
      '/images/products/upvc-sliding-door-system/6.png'
    ],
    category: 'UPVC Sliding Doors',
    maxQty: 500,
    exportTags: ['CE Certified', 'Container Ready'],
    exportAvailable: true,
    leadTime: '2-3 weeks',
    containerCapacity: 150,
    certifications: ['CE Certified', 'ISO 9001:2015', 'Export Documentation'],
    specifications: [
      { label: 'Material', value: 'Premium UPVC Profile' },
      { label: 'Glass', value: 'Double Glazed 24mm' },
      { label: 'Hardware', value: 'German Multi-Point Lock System' },
      { label: 'Dimensions', value: '8ft x 7ft (Customizable)' },
      { label: 'Color Options', value: 'White, Wood Grain, Anthracite' },
      { label: 'U-Value', value: '1.4 W/m²K' }
    ],
    features: [
      'German-engineered multi-point locking system',
      'Double-glazed units with thermal efficiency',
      'Professional export packaging included',
      'Complete installation hardware provided'
    ],
    rating: 5,
    reviewCount: 89
  },
  {
    id: '2',
    name: 'UPVC Casement Door Set - Professional Grade',
    price: '₹6,299',
    exportPrice: '$76',
    description: 'Traditional hinged door system with sidelight panel, ideal for residential and commercial export projects',
    image: '/images/products/upvc-casement-door/1.png',
    images: [
      '/images/products/upvc-casement-door/1.png',
      '/images/products/upvc-casement-door/2.png',
      '/images/products/upvc-casement-door/3.png',
      '/images/products/upvc-casement-door/4.png',
      '/images/products/upvc-casement-door/5.png',
      '/images/products/upvc-casement-door/6.png'
    ],
    category: 'UPVC Casement Doors',
    maxQty: 300,
    exportTags: ['Classic Design', 'Decorative Glass', 'Secure'],
    exportAvailable: true,
    leadTime: '2-3 weeks',
    containerCapacity: 200,
    certifications: ['CE Certified', 'Security Tested', 'ISO 9001'],
    specifications: [
      { label: 'Profile System', value: '70mm Multi-Chamber' },
      { label: 'Glass Type', value: 'Decorative + Clear Glass' },
      { label: 'Opening', value: 'Inward/Outward Opening' },
      { label: 'Standard Size', value: '7ft x 3.5ft + Sidelight' },
      { label: 'Security', value: '5-Point Locking System' },
      { label: 'Threshold', value: 'Low Profile Aluminum' }
    ],
    features: [
      'Elegant casement design with decorative sidelight',
      'Superior insulation with multi-chamber profile',
      'High-security 5-point locking mechanism',
      'Available in multiple color finishes'
    ],
    rating: 5,
    reviewCount: 67
  },
  {
    id: '3',
    name: 'UPVC French Door System',
    price: '₹14,999',
    exportPrice: '$180',
    description: 'Elegant French door system with double doors opening outward, perfect for patios and gardens',
    image: '/images/products/upvc-french-door/1.png',
    images: [
      '/images/products/upvc-french-door/1.png',
      '/images/products/upvc-french-door/2.png',
      '/images/products/upvc-french-door/3.png',
      '/images/products/upvc-french-door/4.png',
      '/images/products/upvc-french-door/5.png',
      '/images/products/upvc-french-door/6.png'
    ],
    category: 'UPVC French Doors',
    maxQty: 200,
    exportTags: ['Full Glass', 'Elegant Design', 'Natural Light'],
    exportAvailable: true,
    leadTime: '3-5 weeks',
    containerCapacity: 100,
    certifications: ['CE Certified', 'Energy Rated A+', 'ISO 9001'],
    specifications: [
      { label: 'Configuration', value: 'Double Door Set' },
      { label: 'Glass Area', value: '80% Glazed' },
      { label: 'Profile Width', value: '70mm European Standard' },
      { label: 'Dimensions', value: '7ft x 6ft (2 x 3ft panels)' },
      { label: 'Hardware', value: 'European Multi-Point Lock' },
      { label: 'Energy Rating', value: 'A+ Rated' }
    ],
    features: [
      'Maximum natural light with full-length glazing',
      'Premium European hardware and locking system',
      'Excellent thermal performance with A+ rating',
      'Elegant French door styling for modern homes'
    ],
    rating: 5,
    reviewCount: 134
  },
  {
    id: '4',
    name: 'UPVC Bi-Fold Door System',
    price: '₹18,499',
    exportPrice: '$222',
    description: 'Space-saving bi-fold door system that folds neatly to one side, creating a wide opening',
    image: '/images/products/upvc-bi-fold-door/1.png',
    images: [
      '/images/products/upvc-bi-fold-door/1.png',
      '/images/products/upvc-bi-fold-door/2.png',
      '/images/products/upvc-bi-fold-door/3.png',
      '/images/products/upvc-bi-fold-door/4.png',
      '/images/products/upvc-bi-fold-door/5.png',
      '/images/products/upvc-bi-fold-door/6.png'
    ],
    category: 'UPVC Bi-Fold Doors',
    maxQty: 150,
    exportTags: ['Space Saving', 'Smooth Operation', 'Modern Design'],
    exportAvailable: true,
    leadTime: '4-6 weeks',
    containerCapacity: 80,
    certifications: ['CE Certified', 'Load Tested', 'ISO 9001'],
    specifications: [
      { label: 'Panel Count', value: '3-6 Panels (Configurable)' },
      { label: 'Opening Width', value: 'Up to 20ft' },
      { label: 'Track System', value: 'Heavy Duty Aluminum' },
      { label: 'Glass Options', value: 'Clear, Tinted, Low-E' },
      { label: 'Operation', value: 'Smooth Folding Mechanism' },
      { label: 'Weather Sealing', value: 'Triple Seal System' }
    ],
    features: [
      'Space-efficient bi-fold design for wide openings',
      'Heavy-duty track system for smooth operation',
      'Configurable panel count for custom widths',
      'Superior weather sealing with triple seal system'
    ],
    rating: 5,
    reviewCount: 78
  },
  {
    id: '5',
    name: 'UPVC Lift & Slide Door',
    price: '₹24,999',
    exportPrice: '$300',
    description: 'Heavy-duty lift and slide door system with smooth operation and large glass panels',
    image: '/images/products/upvc-lift-slide-door/1.png',
    images: [
      '/images/products/upvc-lift-slide-door/1.png',
      '/images/products/upvc-lift-slide-door/2.png',
      '/images/products/upvc-lift-slide-door/3.png',
      '/images/products/upvc-lift-slide-door/4.png',
      '/images/products/upvc-lift-slide-door/5.png',
      '/images/products/upvc-lift-slide-door/6.png'
    ],
    category: 'UPVC Lift & Slide Doors',
    maxQty: 100,
    exportTags: ['Heavy Duty', 'Large Openings', 'Smooth Operation'],
    exportAvailable: true,
    leadTime: '5-7 weeks',
    containerCapacity: 60,
    certifications: ['CE Certified', 'Load Tested', 'ISO 9001'],
    specifications: [
      { label: 'System Type', value: 'Lift & Slide Mechanism' },
      { label: 'Max Panel Size', value: '3m x 2.5m per panel' },
      { label: 'Glass Options', value: 'Triple Glazed Available' },
      { label: 'Opening Width', value: 'Up to 12m' },
      { label: 'Load Capacity', value: '400kg per panel' },
      { label: 'Operation', value: 'Effortless Lift & Slide' }
    ],
    features: [
      'Heavy-duty lift mechanism for large panels',
      'Smooth operation even with oversized doors',
      'Superior weather sealing for large openings',
      'Available in triple glazing for maximum insulation'
    ],
    rating: 5,
    reviewCount: 45
  },
  {
    id: '6',
    name: 'UPVC Pivot Door - Premium',
    price: '₹32,999',
    exportPrice: '$396',
    description: 'Luxury pivot door system with oversized glass panels and premium hardware',
    image: '/images/products/upvc-pivot-door/1.png',
    images: [
      '/images/products/upvc-pivot-door/1.png',
      '/images/products/upvc-pivot-door/2.png',
      '/images/products/upvc-pivot-door/3.png',
      '/images/products/upvc-pivot-door/4.png',
      '/images/products/upvc-pivot-door/5.png',
      '/images/products/upvc-pivot-door/6.png'
    ],
    category: 'UPVC Pivot Doors',
    maxQty: 200,
    exportTags: ['Soundproof', 'Multi-Lock', 'Decorative Glass'],
    exportAvailable: true,
    leadTime: '4-5 weeks',
    containerCapacity: 120,
    certifications: ['CE Certified', 'Security Rated', 'Sound Tested'],
    specifications: [
      { label: 'Door Type', value: 'Single Leaf Entry Door' },
      { label: 'Glass Design', value: 'Decorative Frosted Pattern' },
      { label: 'Security', value: '7-Point Multi-Lock System' },
      { label: 'Sound Rating', value: '42dB Reduction' },
      { label: 'Threshold', value: 'Low Profile with Drainage' },
      { label: 'Hardware', value: 'Premium European Handles' }
    ],
    features: [
      'Elegant decorative glass for villa aesthetics',
      'Superior sound insulation for privacy',
      '7-point multi-lock system for maximum security',
      'Premium European hardware and finishes'
    ],
    rating: 5,
    reviewCount: 92
  },
  {
    id: '7',
    name: 'UPVC Slide & Fold Door',
    price: '₹21,499',
    exportPrice: '$258',
    description: 'Versatile slide and fold door system that stacks neatly to one side',
    image: '/images/products/upvc-slide-fold-door/1.png',
    images: [
      '/images/products/upvc-slide-fold-door/1.png',
      '/images/products/upvc-slide-fold-door/2.png',
      '/images/products/upvc-slide-fold-door/3.png',
      '/images/products/upvc-slide-fold-door/4.png',
      '/images/products/upvc-slide-fold-door/5.png',
      '/images/products/upvc-slide-fold-door/6.png'
    ],
    category: 'UPVC Slide & Fold Doors',
    maxQty: 80,
    exportTags: ['Innovative Design', 'Space Efficient', 'Full Glass'],
    exportAvailable: true,
    leadTime: '6-8 weeks',
    containerCapacity: 70,
    certifications: ['CE Certified', 'Innovation Award', 'ISO 9001'],
    specifications: [
      { label: 'Mechanism', value: 'Slide & Fold Hybrid' },
      { label: 'Panel Count', value: '4-8 Panels Available' },
      { label: 'Opening Style', value: 'Slide First, Then Fold' },
      { label: 'Glass Coverage', value: '90% Glazed Area' },
      { label: 'Track System', value: 'Precision German Engineering' },
      { label: 'Weather Seal', value: 'Advanced Multi-Point Sealing' }
    ],
    features: [
      'Unique slide & fold mechanism for maximum flexibility',
      'Space-efficient design for modern architecture',
      'Maximum glass area for natural light',
      'German-engineered precision track system'
    ],
    rating: 5,
    reviewCount: 63
  }
];