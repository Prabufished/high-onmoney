import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsGrid } from './components/ProductsGrid';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { WhoItsFor } from './components/WhoItsFor';
import { WhyTapForReview } from './components/WhyTapForReview';
import { SocialProof } from './components/SocialProof';
import { FAQSection } from './components/FAQSection';
import { BulkEnquiryBanner } from './components/BulkEnquiryBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] text-[#1A2233] font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Products — 6 Cards Grid */}
        <ProductsGrid />

        {/* 4. How It Works — 3 Steps */}
        <HowItWorks />

        {/* 5. Pricing — Two Tabbed Tables & Addons */}
        <PricingSection />

        {/* 6. Who It's For — Icon Grid */}
        <WhoItsFor />

        {/* 7. Why TapForReview — 4 Benefit Cards */}
        <WhyTapForReview />

        {/* 8. Testimonials — 3 Placeholder Cards */}
        <SocialProof />

        {/* 9. FAQ Accordion */}
        <FAQSection />

        {/* 10. Bulk Enquiry Banner */}
        <BulkEnquiryBanner />

        {/* 11. Contact Section with WhatsApp Form */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
}
