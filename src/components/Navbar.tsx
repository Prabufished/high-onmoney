import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { waLink, WHATSAPP_DISPLAY } from '../utils/wa';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultWaUrl = waLink('Hi TapForReview, I want to inquire about ordering Google Review Stands and Cards.');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#1A2233] text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>🇮🇳 Free Express Delivery Across India • Dispatched in 48 Hours • Cash on Delivery Available</span>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-semibold text-[#1A2233]">
          <a href="#products" className="hover:text-[#1A56DB] transition-colors">Products</a>
          <a href="#pricing" className="hover:text-[#1A56DB] transition-colors">Pricing</a>
          <a href="#how-it-works" className="hover:text-[#1A56DB] transition-colors">How It Works</a>
          <a href="#why-us" className="hover:text-[#1A56DB] transition-colors">Why Us</a>
          <a href="#faq" className="hover:text-[#1A56DB] transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-[#1A56DB] transition-colors">Contact</a>
        </nav>

        {/* Right WhatsApp Order Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={defaultWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={defaultWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-2 rounded-xl"
            aria-label="WhatsApp Order"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 font-semibold text-sm text-[#1A2233] animate-in slide-in-from-top-2">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100"
          >
            Products
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100"
          >
            Pricing & Bulk Tiers
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100"
          >
            How It Works
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100"
          >
            Why TapForReview
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-100"
          >
            Contact & Address
          </a>

          <a
            href={defaultWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md mt-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Order on WhatsApp ({WHATSAPP_DISPLAY})</span>
          </a>
        </div>
      )}

    </header>
  );
};
