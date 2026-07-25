import React from 'react';
import { MessageSquare, Zap, ArrowRight } from 'lucide-react';
import { waLink } from '../utils/wa';

export const BulkEnquiryBanner: React.FC = () => {
  const bulkWaUrl = waLink('Hi TapForReview, I need a bulk quote for 50+ pieces for my business.');

  return (
    <section className="gradient deep-sea-gradient text-white py-12 sm:py-16 border-y border-slate-800 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A56DB]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Banner Text */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Multi-Outlet & Franchisee Special</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
            Ordering for multiple outlets? Get rates from ₹669 per piece.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Wholesale rates, custom branding, and dedicated account management for 50+ unit orders.
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href={bulkWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3.5 px-8 rounded-2xl shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-2.5 text-sm sm:text-base shrink-0"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>Get Bulk WhatsApp Quote</span>
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
};
