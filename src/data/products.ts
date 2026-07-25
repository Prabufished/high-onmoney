import { Product, AddOn, BusinessCategory, FAQItem, Testimonial } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'nfc-card-single',
    name: 'Single NFC Tap Card',
    type: 'card',
    unitCount: 1,
    price: 749,
    mrp: 1099,
    savings: 350,
    tag: 'Starter Choice',
    description: 'Sleek, pocket-friendly matte NFC PVC card. Place near billing or hand over to happy customers.',
    features: [
      '1x Premium Matte PVC NFC Card',
      'Dual Tech: NFC Chip + Laser QR Code',
      'Pre-programmed to your Google Link',
      'Waterproof, Scratch & UV Resistant',
      'Works on all iOS & Android phones',
      '5+ Years Chip Lifespan'
    ],
    imageType: 'card'
  },
  {
    id: 'nfc-stand-single',
    name: 'Single NFC Acrylic Counter Stand',
    type: 'stand',
    unitCount: 1,
    price: 849,
    mrp: 1299,
    savings: 450,
    tag: 'Premium Display',
    description: 'Heavy-duty clear acrylic table stand that commands attention on your reception counter desk.',
    features: [
      '1x High-Grade Acrylic Desk Counter Stand',
      'Prominent Google Review Branding',
      'Eye-level 30° Ergonomic Tilt Display',
      'Embedded Long-Range NTAG215 NFC Chip',
      'High-Contrast Backup QR Code',
      'Zero maintenance, dust-resistant'
    ],
    imageType: 'stand'
  },
  {
    id: 'starter-combo-2card',
    name: 'Starter Combo (2 Cards)',
    type: 'combo',
    unitCount: 2,
    price: 1399,
    mrp: 2199,
    savings: 800,
    tag: 'Save ₹99 Extra',
    description: 'Ideal for 2 staff members or two billing counters. Give your team double the review opportunity.',
    features: [
      '2x Premium Matte NFC Cards',
      'Same or Separate Google Links',
      'Free Customized Place ID Encoding',
      'Durable Industrial Grade Finish',
      '100% Free Express India Shipping'
    ],
    imageType: 'card',
    badge: 'Save ₹99 vs Single'
  },
  {
    id: 'counter-combo-stand-card',
    name: 'Counter Combo (1 Stand + 1 Card)',
    type: 'combo',
    unitCount: 2,
    price: 1499,
    mrp: 2399,
    savings: 900,
    isPopular: true,
    tag: '⭐ MOST POPULAR',
    description: 'The ultimate business setup: 1 fixed Counter Stand for reception + 1 portable Card for mobile staff.',
    features: [
      '1x Acrylic Counter Stand (Main Billing Desk)',
      '1x Mobile PVC NFC Tap Card (Roaming Staff)',
      'Dual NFC + QR Code on Both Units',
      'Custom Business Name Printing',
      'Priority Dispatch in 24 Hours',
      'Best ROI for Restaurants, Salons & Clinics'
    ],
    imageType: 'combo',
    badge: 'Best Value Deal'
  },
  {
    id: 'business-pack-3card',
    name: 'Business Pack (3 Cards)',
    type: 'pack',
    unitCount: 3,
    price: 1999,
    mrp: 3299,
    savings: 1300,
    tag: 'Best for Multi-Counter',
    description: 'Perfect for busy retail stores, gyms, or multi-table service desks wanting maximum review coverage.',
    features: [
      '3x Premium NFC Tap Cards',
      'Just ₹666 per unit (Lowest Single Rate)',
      'Free Business Logo UV Printing Option',
      'Dedicated WhatsApp VIP Onboarding',
      'Free GST Tax Invoice Included'
    ],
    imageType: 'pack'
  },
  {
    id: 'multi-branch-5card',
    name: 'Multi-Branch Pack (5 Units)',
    type: 'pack',
    unitCount: 5,
    price: 3299,
    mrp: 5499,
    savings: 2200,
    tag: 'Multi-Location',
    description: 'Designed for multi-outlet brands or regional chains. Link each card to its specific Google Maps location.',
    features: [
      '5x Custom NFC Units (Mix Stand or Cards)',
      'Individual Google Maps URLs for each outlet',
      'Bulk Logo Customization Included',
      'Free Express Air Courier Delivery',
      'Priority Account Manager Support'
    ],
    imageType: 'pack'
  },
  {
    id: 'agency-pack-10card',
    name: 'Reseller & Agency Pack (10 Units)',
    type: 'pack',
    unitCount: 10,
    price: 6499,
    mrp: 10999,
    savings: 4500,
    tag: 'Agency / Reseller Special',
    description: 'Wholesale volume tier for digital marketing agencies, local SEO consultants, or large franchisee networks.',
    features: [
      '10x Custom NFC Tap Units (Cards/Stands)',
      'Massive Profit Margins for Resellers',
      'Unbranded or White-Label Option',
      'Bulk CSV Link Programming',
      'Dedicated B2B Relationship Executive'
    ],
    imageType: 'pack'
  }
];

export const ADDONS: AddOn[] = [
  {
    id: 'custom-logo',
    name: 'Custom Logo Printing',
    price: 199,
    description: 'UV HD printing of your official business brand logo directly on the front of card or stand.',
    iconName: 'Image',
    selectedByDefault: true
  },
  {
    id: 'link-setup',
    name: 'Google Review Link Setup Service',
    price: 149,
    description: 'Our technical team locates your exact Google Place ID, tests the deep-link, and lock-encodes it.',
    iconName: 'Link',
    selectedByDefault: true
  },
  {
    id: 'express-shipping',
    name: 'Express Priority Air Shipping',
    price: 99,
    description: 'Dispatched within 12-24 hours via Air Express (BlueDart/Delhivery) with real-time SMS tracking.',
    iconName: 'Zap',
    selectedByDefault: false
  }
];

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    subtitle: 'Table service & billing desk taps',
    icon: 'Utensils',
    reviewGrowth: '+340% reviews in 30 days',
    tip: 'Place stand right next to the UPI QR payment scanner at billing!',
    bgGradient: 'from-amber-500/10 to-orange-500/10 text-amber-600'
  },
  {
    id: 'salons',
    title: 'Salons & Spas',
    subtitle: 'Hair, beauty & wellness desks',
    icon: 'Scissors',
    reviewGrowth: '+420% 5-star feedback',
    tip: 'Hand card to client right after completing haircut/facial service.',
    bgGradient: 'from-pink-500/10 to-rose-500/10 text-pink-600'
  },
  {
    id: 'clinics',
    title: 'Dental & Medical Clinics',
    subtitle: 'Doctors, diagnostic & care centers',
    icon: 'Stethoscope',
    reviewGrowth: 'Builds high local trust',
    tip: 'Receptionist taps phone while processing prescription / invoice.',
    bgGradient: 'from-emerald-500/10 to-teal-500/10 text-emerald-600'
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness Studios',
    subtitle: 'Crossfit, yoga & workout centers',
    icon: 'Dumbbell',
    reviewGrowth: '+280% organic leads',
    tip: 'Keep stand at front desk check-in counter.',
    bgGradient: 'from-blue-500/10 to-cyan-500/10 text-blue-600'
  },
  {
    id: 'hotels',
    title: 'Hotels & Resorts',
    subtitle: 'Reception, concierge & room check-out',
    icon: 'Hotel',
    reviewGrowth: '+500 Google Map views',
    tip: 'Request review during guest check-out settlement.',
    bgGradient: 'from-purple-500/10 to-indigo-500/10 text-purple-600'
  },
  {
    id: 'retail',
    title: 'Retail Shops & Boutiques',
    subtitle: 'Apparel, jewelry & electronics',
    icon: 'ShoppingBag',
    reviewGrowth: '+310% walk-in boost',
    tip: 'Include card with cash receipt bag.',
    bgGradient: 'from-yellow-500/10 to-amber-500/10 text-yellow-600'
  },
  {
    id: 'autoservice',
    title: 'Auto & Bike Service Centers',
    subtitle: 'Garages, detailing & car wash',
    icon: 'Car',
    reviewGrowth: '+260% local phone inquiries',
    tip: 'Tap phone when handing back car keys after servicing.',
    bgGradient: 'from-slate-500/10 to-zinc-500/10 text-slate-700'
  },
  {
    id: 'services',
    title: 'Professional Services',
    subtitle: 'CA firms, real estate, consultants',
    icon: 'Briefcase',
    reviewGrowth: 'Boosts Google Maps 3-Pack',
    tip: 'Keep NFC card in pocket during client consultation meetings.',
    bgGradient: 'from-cyan-500/10 to-blue-500/10 text-cyan-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    businessName: 'Third Wave Bakery & Cafe',
    ownerName: 'Rajesh Mehta',
    role: 'Founder & Owner',
    city: 'Bandra, Mumbai',
    businessType: 'Cafe & Bakery',
    rating: 5,
    comment: 'We went from 38 Google reviews to 240+ reviews in just 45 days! Customers love tapping their phone while waiting for the bill. It literally doubled our weekend walk-ins from Google Maps search.',
    reviewsBefore: 38,
    reviewsAfter: 242,
    daysTaken: '45 days',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'test-2',
    businessName: 'SmileCare Dental Clinic',
    ownerName: 'Dr. Ananya Sharma',
    role: 'Chief Dentist',
    city: 'South Extension, New Delhi',
    businessType: 'Dental Clinic',
    rating: 5,
    comment: 'Earlier patients promised to write a review at home but always forgot. With the TapReview acrylic stand at our reception, 8 out of 10 happy patients leave a review right before stepping out!',
    reviewsBefore: 64,
    reviewsAfter: 310,
    daysTaken: '60 days',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'test-3',
    businessName: 'Luxe Locks Hair Salon',
    ownerName: 'Vikram & Priya',
    role: 'Co-Founders',
    city: 'Indiranagar, Bengaluru',
    businessType: 'Salon & Spa',
    rating: 5,
    comment: 'Ordered the Counter Combo pack. Placed the acrylic stand at cashier and gave the NFC card to our top stylist. It takes 3 seconds. Best ₹1,499 investment we ever made for our business marketing!',
    reviewsBefore: 112,
    reviewsAfter: 485,
    daysTaken: '90 days',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 'test-4',
    businessName: 'IronPulse Fitness Gym',
    ownerName: 'Karan Joshi',
    role: 'Head Trainer & Partner',
    city: 'Kothrud, Pune',
    businessType: 'Fitness Studio',
    rating: 5,
    comment: 'Super fast shipping! Received in Pune within 48 hours with our gym logo printed cleanly on the card. Linked seamlessly to our Google Business Profile.',
    reviewsBefore: 29,
    reviewsAfter: 198,
    daysTaken: '30 days',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Does the customer need to install any app to write a review?',
    answer: 'No app required at all! When a customer taps their smartphone against the NFC card/stand, their native phone browser (Safari or Chrome) immediately opens directly on your business Google Review submission window with 5 stars ready.',
    category: 'Product & Tech'
  },
  {
    id: 'faq-2',
    question: 'Which smartphones work with NFC and QR tapping?',
    answer: 'NFC works natively on 98%+ of smartphones in India — including all iPhones (iPhone 7 and newer) and almost all modern Android phones (Samsung, OnePlus, Xiaomi, Vivo, Oppo, Realme, Pixel). For older budget phones without NFC enabled, there is an ultra-crisp HD QR code printed on the back that opens the exact same link when scanned with any camera or GPay/PhonePe scanner!',
    category: 'Product & Tech'
  },
  {
    id: 'faq-3',
    question: 'How do you program the card to my Google Review page?',
    answer: 'It is 100% automated & hassle-free! During checkout, simply type your Business Name or paste your Google Maps link. Our team finds your exact Google Place ID, programs the encoded NFC chip, locks it against unauthorized overwrites, and tests it before dispatch.',
    category: 'Setup & Delivery'
  },
  {
    id: 'faq-4',
    question: 'How long does delivery take across India?',
    answer: 'We dispatch all orders within 24 hours from our warehouse in Mumbai/Delhi via premium air couriers (BlueDart, Delhivery, DTDC). Metro cities receive delivery in 1-3 business days, while rest of India takes 3-5 days. Tracking link is sent via WhatsApp & SMS.',
    category: 'Setup & Delivery'
  },
  {
    id: 'faq-5',
    question: 'Can I change the linked Google Review URL in the future if I move locations?',
    answer: 'Yes! While cards are locked by default to prevent accidental wiping, if you change your Google Business Profile name or location, reach out to our WhatsApp support and we provide a simple re-encoding guide or re-link service.',
    category: 'Product & Tech'
  },
  {
    id: 'faq-6',
    question: 'Do you provide a tax invoice with GST details for my business?',
    answer: 'Yes, absolutely! We are a registered Indian business. You can enter your GSTIN number during checkout, and an official GST Tax Invoice with tax credit will be automatically generated and emailed to you.',
    category: 'Pricing & Invoice'
  },
  {
    id: 'faq-7',
    question: 'Are there any hidden monthly subscription or renewal fees?',
    answer: 'Zero monthly fees! TapReview is a 100% one-time purchase. Your NFC card or acrylic counter stand works for unlimited taps, unlimited reviews, for 5+ years without paying another rupee.',
    category: 'Pricing & Invoice'
  }
];
