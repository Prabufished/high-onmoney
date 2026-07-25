import React, { useState } from 'react';
import { ShoppingBag, Zap, Menu, X, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

import { Logo } from './Logo';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Special India Offer
            </span>
            <span className="truncate">⚡ Save up to 40% on Combos + Free All-India Dispatch!</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] opacity-90">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              100% Guaranteed Works on All NFC Smartphones
            </span>
            <span>GST Tax Invoice Available</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <span>Products & Pricing</span>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full">Save ₹900</span>
          </a>
          <a href="#customizer" className="hover:text-blue-600 transition-colors flex items-center gap-1 text-indigo-600 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Live Preview
          </a>
          <a href="#who-its-for" className="hover:text-blue-600 transition-colors">Who It's For</a>
          <a href="#social-proof" className="hover:text-blue-600 transition-colors">500+ Reviews</a>
          <a href="#faqs" className="hover:text-blue-600 transition-colors">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCustomizer}
            className="hidden sm:flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-2 rounded-lg border border-slate-200 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Customize Logo</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden xs:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-emerald-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
            {cartTotal > 0 && (
              <span className="text-xs text-blue-100 border-l border-blue-400/50 pl-2 ml-0.5">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-in slide-in-from-top-2">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-semibold border-b border-slate-100"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-blue-600 font-bold border-b border-slate-100 flex items-center justify-between"
          >
            <span>Products & Pricing (Combos)</span>
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">₹749 onwards</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCustomizer();
            }}
            className="w-full text-left py-2 text-indigo-600 font-bold border-b border-slate-100 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Customize Card with Business Logo</span>
          </button>
          <a
            href="#who-its-for"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-semibold border-b border-slate-100"
          >
            Who It's For
          </a>
          <a
            href="#social-proof"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-semibold border-b border-slate-100"
          >
            500+ Verified Reviews
          </a>
          <a
            href="#lead-form"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-semibold"
          >
            Bulk Orders & Enquiries
          </a>
        </div>
      )}
    </header>
  );
};
