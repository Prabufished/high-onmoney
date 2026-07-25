import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TapSimulationModal } from './components/TapSimulationModal';
import { HowItWorks } from './components/HowItWorks';
import { CardCustomizer } from './components/CardCustomizer';
import { PricingSection } from './components/PricingSection';
import { AddonsBar } from './components/AddonsBar';
import { WhoItsFor } from './components/WhoItsFor';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { FAQSection } from './components/FAQSection';
import { LeadForm } from './components/LeadForm';
import { CheckoutDrawer } from './components/CheckoutDrawer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  // Default selected package: Counter Combo (1 Stand + 1 Card) @ ₹1,499
  const defaultProduct = PRODUCTS.find((p) => p.id === 'counter-combo-stand-card') || PRODUCTS[0];

  const [cartProduct, setCartProduct] = useState<Product | null>(defaultProduct);
  const [customLogo, setCustomLogo] = useState(true);
  const [reviewLinkSetup, setReviewLinkSetup] = useState(true);
  const [expressShipping, setExpressShipping] = useState(false);
  const [businessName, setBusinessName] = useState('My Store');
  const [googleMapsUrl, setGoogleMapsUrl] = useState('');

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSimulationOpen, setIsSimulationOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'about' | 'contact' | 'shipping' | 'refund' | 'privacy' | 'gst' | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartProduct(product);
    setIsCartOpen(true);
  };

  const handleAddToCartCustomized = (details: {
    businessName: string;
    googleMapsUrl: string;
    style: 'google-white' | 'matte-black' | 'acrylic-clear';
  }) => {
    setBusinessName(details.businessName);
    setGoogleMapsUrl(details.googleMapsUrl);
    setCustomLogo(true);
    setIsCartOpen(true);
  };

  const handleShopNowScroll = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCartOpen(true);
    }
  };

  // Calculate cart badge items & total
  const cartItemCount = cartProduct ? 1 : 0;
  const addonsTotal = (customLogo ? 199 : 0) + (reviewLinkSetup ? 149 : 0) + (expressShipping ? 99 : 0);
  const cartTotal = cartProduct ? cartProduct.price + addonsTotal : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomizer={() => {
          const el = document.getElementById('customizer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Page Sections */}
      <main className="pb-16 sm:pb-0">
        
        {/* Section 1: Hero */}
        <Hero
          onShopNow={handleShopNowScroll}
          onSimulateTap={() => setIsSimulationOpen(true)}
        />

        {/* Section 2: How It Works */}
        <HowItWorks />

        {/* Section 3: Live Interactive Customizer */}
        <CardCustomizer
          onAddToCartCustomized={handleAddToCartCustomized}
        />

        {/* Section 4: Products & Pricing */}
        <PricingSection onAddToCart={handleAddToCart} />

        {/* Section 4 Add-ons Accent Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AddonsBar
            customLogo={customLogo}
            setCustomLogo={setCustomLogo}
            reviewLinkSetup={reviewLinkSetup}
            setReviewLinkSetup={setReviewLinkSetup}
            expressShipping={expressShipping}
            setExpressShipping={setExpressShipping}
          />
        </div>

        {/* Section 5: Who It's For */}
        <WhoItsFor />

        {/* Section 6: Benefits & ROI */}
        <Benefits />

        {/* Section 7: Social Proof & Testimonials */}
        <SocialProof />

        {/* Section 8: FAQ Accordion */}
        <FAQSection />

        {/* Section 9: Lead Generation Form */}
        <LeadForm />

      </main>

      {/* Footer */}
      <Footer onOpenPolicy={(type) => setPolicyType(type)} />

      {/* Interactive Floating / Sticky Utilities */}
      <WhatsAppWidget />

      <StickyMobileBar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomizer={() => {
          const el = document.getElementById('customizer');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Slide-Over Checkout Drawer */}
      <CheckoutDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartProduct={cartProduct}
        customLogo={customLogo}
        setCustomLogo={setCustomLogo}
        reviewLinkSetup={reviewLinkSetup}
        setReviewLinkSetup={setReviewLinkSetup}
        expressShipping={expressShipping}
        setExpressShipping={setExpressShipping}
        businessName={businessName}
        setBusinessName={setBusinessName}
        googleMapsUrl={googleMapsUrl}
        setGoogleMapsUrl={setGoogleMapsUrl}
      />

      {/* Interactive Smartphone Tap Simulator Modal */}
      <TapSimulationModal
        isOpen={isSimulationOpen}
        onClose={() => setIsSimulationOpen(false)}
        onOrderNow={() => {
          setIsSimulationOpen(false);
          setIsCartOpen(true);
        }}
      />

      {/* Legal & Policy Modal */}
      <PolicyModal
        policyType={policyType}
        onClose={() => setPolicyType(null)}
      />

    </div>
  );
}
