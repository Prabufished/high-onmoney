import { Product, AddOn, BusinessCategory, FAQItem, Testimonial } from '../types';

export interface GridProduct {
  id: string;
  name: string;
  description: string;
  fromPrice: number;
  imageType: 'stand' | 'card' | 'whatsapp' | 'instagram' | 'facebook' | 'custom';
}

export const GRID_PRODUCTS: GridProduct[] = [
  {
    id: 'google-review-stand',
    name: 'Google Review Stand',
    description: 'Acrylic L-stand, tap or scan for instant Google reviews',
    fromPrice: 999,
    imageType: 'stand',
  },
  {
    id: 'nfc-review-card',
    name: 'NFC Review Card',
    description: 'Counter or pocket card, tap to rate on Google Maps',
    fromPrice: 449,
    imageType: 'card',
  },
  {
    id: 'whatsapp-stand',
    name: 'WhatsApp Stand',
    description: 'Opens a WhatsApp chat with your business number',
    fromPrice: 1199,
    imageType: 'whatsapp',
  },
  {
    id: 'instagram-stand',
    name: 'Instagram Stand',
    description: 'Opens your Instagram profile for an instant follow',
    fromPrice: 1199,
    imageType: 'instagram',
  },
  {
    id: 'facebook-stand',
    name: 'Facebook Stand',
    description: 'Opens your Facebook page for likes and check-ins',
    fromPrice: 1199,
    imageType: 'facebook',
  },
  {
    id: 'custom-stand',
    name: 'Fully Custom Stand',
    description: 'Any platform — Zomato, Swiggy, Justdial, or your custom site',
    fromPrice: 1199,
    imageType: 'custom',
  },
];

export interface PriceTierRow {
  quantityText: string;
  unitPrice: number;
  totalPrice: number;
  isPopular?: boolean;
}

export const STAND_PRICING: PriceTierRow[] = [
  { quantityText: '1–4', unitPrice: 999, totalPrice: 999 },
  { quantityText: '5–9', unitPrice: 899, totalPrice: 4495 },
  { quantityText: '10–24', unitPrice: 849, totalPrice: 8490, isPopular: true },
  { quantityText: '25–49', unitPrice: 799, totalPrice: 19975 },
  { quantityText: '50–99', unitPrice: 749, totalPrice: 37450 },
  { quantityText: '100+', unitPrice: 699, totalPrice: 69900 },
];

export const CARD_PRICING: PriceTierRow[] = [
  { quantityText: '1–4', unitPrice: 449, totalPrice: 449 },
  { quantityText: '5–24', unitPrice: 349, totalPrice: 1745 },
  { quantityText: '25–99', unitPrice: 299, totalPrice: 7475, isPopular: true },
  { quantityText: '100+', unitPrice: 269, totalPrice: 26900 },
];

export const ADDONS = [
  { name: 'Review link programming', price: 'FREE', note: 'Pre-coded & tested before shipping' },
  { name: 'Business name printed', price: '₹199', note: 'Crisp laser branding on stand/card' },
  { name: 'Logo + brand colours', price: '₹499', note: 'FREE on 25+ unit orders' },
  { name: 'Fully custom design', price: '₹1,500', note: 'Bespoke layout setup' },
  { name: '48-hour rush dispatch', price: '₹299', note: 'Priority queue packaging' },
];

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    subtitle: 'Table service & billing counters',
    icon: 'Utensils',
    reviewGrowth: 'Fast Google Maps boost',
    tip: 'Place right next to UPI payment scanner',
    bgGradient: 'from-amber-500/10 to-orange-500/10 text-amber-600',
  },
  {
    id: 'salons',
    title: 'Salons & Spas',
    subtitle: 'Hair, beauty & wellness desks',
    icon: 'Scissors',
    reviewGrowth: '+420% 5-star feedback',
    tip: 'Hand card to client right after service',
    bgGradient: 'from-pink-500/10 to-rose-500/10 text-pink-600',
  },
  {
    id: 'clinics',
    title: 'Clinics & Dentists',
    subtitle: 'Doctors & healthcare centers',
    icon: 'Stethoscope',
    reviewGrowth: 'Builds local medical trust',
    tip: 'Reception desk tap while settling invoice',
    bgGradient: 'from-emerald-500/10 to-teal-500/10 text-emerald-600',
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness',
    subtitle: 'Workout studios & crossfit',
    icon: 'Dumbbell',
    reviewGrowth: '+280% organic leads',
    tip: 'Keep stand at front desk check-in',
    bgGradient: 'from-blue-500/10 to-cyan-500/10 text-blue-600',
  },
  {
    id: 'showrooms',
    title: 'Showrooms',
    subtitle: 'Jewelry, apparel & electronics',
    icon: 'ShoppingBag',
    reviewGrowth: '+310% walk-in boost',
    tip: 'Place at billing settlement counter',
    bgGradient: 'from-amber-500/10 to-yellow-500/10 text-amber-700',
  },
  {
    id: 'hotels',
    title: 'Hotels & Resorts',
    subtitle: 'Reception & concierge',
    icon: 'Hotel',
    reviewGrowth: 'Rank #1 on Local Pack',
    tip: 'Request review during guest check-out',
    bgGradient: 'from-purple-500/10 to-indigo-500/10 text-purple-600',
  },
  {
    id: 'servicecentres',
    title: 'Service Centres',
    subtitle: 'Auto repair, mobile & detailing',
    icon: 'Car',
    reviewGrowth: 'High call conversion',
    tip: 'Tap phone when handing back keys',
    bgGradient: 'from-slate-500/10 to-zinc-500/10 text-slate-700',
  },
  {
    id: 'retail',
    title: 'Retail Shops',
    subtitle: 'Neighborhood stores & boutiques',
    icon: 'Store',
    reviewGrowth: 'More local footfalls',
    tip: 'Include card with billing receipt',
    bgGradient: 'from-cyan-500/10 to-blue-500/10 text-cyan-600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    businessName: 'Third Wave Bakery & Cafe',
    ownerName: 'Rajesh Mehta',
    role: 'Owner',
    city: 'Chennai',
    businessType: 'Restaurant & Cafe',
    rating: 5,
    comment: 'We went from 38 Google reviews to 240+ in 45 days. Customers tap while waiting for their bill!',
    reviewsBefore: 38,
    reviewsAfter: 242,
    daysTaken: '45 days',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true,
  },
  {
    id: 'test-2',
    businessName: 'SmileCare Dental Clinic',
    ownerName: 'Dr. Ananya Sharma',
    role: 'Chief Dentist',
    city: 'Bengaluru',
    businessType: 'Clinic & Dental',
    rating: 5,
    comment: 'Earlier patients forgot to review at home. With the acrylic stand at reception, 8 out of 10 leave a review before stepping out!',
    reviewsBefore: 64,
    reviewsAfter: 310,
    daysTaken: '60 days',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    verified: true,
  },
  {
    id: 'test-3',
    businessName: 'Luxe Locks Hair Salon',
    ownerName: 'Vikram Kumar',
    role: 'Co-Founder',
    city: 'Hyderabad',
    businessType: 'Salon & Spa',
    rating: 5,
    comment: 'Super fast WhatsApp ordering process. Received our custom branded stands in 3 days. Highly recommended!',
    reviewsBefore: 112,
    reviewsAfter: 485,
    daysTaken: '90 days',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need an app?',
    answer: 'No. It works with the phone\'s built-in NFC. Customers just tap their phone on the stand, and your Google review window opens automatically.',
    category: 'Product & Tech',
  },
  {
    id: 'faq-2',
    question: 'What if the customer\'s phone has no NFC?',
    answer: 'The QR code works on every phone! Any phone camera or UPI payment app scanner (GPay, PhonePe, Paytm) can scan the QR code to open your review page.',
    category: 'Product & Tech',
  },
  {
    id: 'faq-3',
    question: 'I don\'t have a Google review link. What should I do?',
    answer: 'Simply send us your business name and city on WhatsApp — our team will generate and configure your exact Google Business review link for free!',
    category: 'Setup & Delivery',
  },
  {
    id: 'faq-4',
    question: 'How long does delivery take?',
    answer: 'Delivery takes 2–3 days in Tamil Nadu and 4–7 days across India with full courier tracking via BlueDart, Delhivery, and DTDC.',
    category: 'Setup & Delivery',
  },
  {
    id: 'faq-5',
    question: 'Is there a monthly fee?',
    answer: 'No. TapForReview is a 100% one-time purchase. Zero subscription, zero monthly fees, zero renewals.',
    category: 'Pricing & Invoice',
  },
  {
    id: 'faq-6',
    question: 'Can I change the link later?',
    answer: 'Yes! Tell us on WhatsApp if your business link changes and we\'ll guide you on re-encoding or assist with updating your setup.',
    category: 'Product & Tech',
  },
  {
    id: 'faq-7',
    question: 'Do you do bulk orders?',
    answer: 'Yes! 100+ pieces get our lowest wholesale rate starting from ₹669 per piece. Contact us on WhatsApp for custom bulk quotes.',
    category: 'Pricing & Invoice',
  },
  {
    id: 'faq-8',
    question: 'Is COD available?',
    answer: 'Yes, Cash on Delivery is available across India for ₹49 extra.',
    category: 'Setup & Delivery',
  },
];
