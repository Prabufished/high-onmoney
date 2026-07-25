export interface Product {
  id: string;
  name: string;
  type: 'card' | 'stand' | 'combo' | 'pack';
  unitCount: number;
  price: number; // INR
  mrp: number; // Strikethrough price
  savings: number;
  isPopular?: boolean;
  tag?: string;
  description: string;
  features: string[];
  imageType: 'card' | 'stand' | 'combo' | 'pack';
  badge?: string;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  iconName: string;
  selectedByDefault?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customLogo: boolean;
  reviewLinkSetup: boolean;
  expressShipping: boolean;
  businessName: string;
  googleMapsUrl: string;
  selectedColor: 'google-white' | 'matte-black' | 'acrylic-clear';
}

export interface Testimonial {
  id: string;
  businessName: string;
  ownerName: string;
  role: string;
  city: string;
  businessType: string;
  rating: number;
  comment: string;
  reviewsBefore: number;
  reviewsAfter: number;
  daysTaken: string;
  avatarUrl: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Product & Tech' | 'Setup & Delivery' | 'Pricing & Invoice';
}

export interface BusinessCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  reviewGrowth: string;
  tip: string;
  bgGradient: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  productName: string;
  unitCount: number;
  basePrice: number;
  addonsTotal: number;
  totalAmount: number;
  businessName: string;
  googleMapsUrl: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  gstin?: string;
  paymentMethod: 'UPI' | 'COD' | 'RAZORPAY';
}
