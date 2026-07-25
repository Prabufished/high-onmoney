import React from 'react';
import { Link2, Store, Smartphone, CheckCircle, Zap, Shield, HelpCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            How TapReview Boosts Your Google Reviews
          </h2>
          <p className="text-base text-slate-600">
            No complex setup, no software downloads, and no tech experience required. It works right out of the box in under 60 seconds.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 -translate-y-12 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 group-hover:scale-110 transition-transform">
              <Link2 className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest block mb-1">
              Step 1
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">
              1. We Link Your Google Page
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When ordering, simply enter your Business Name or Google Maps link. Our team program-encodes your exact Place ID chip before shipping.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-blue-700 font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>100% Pre-tested & Locked</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-6 group-hover:scale-110 transition-transform">
              <Store className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-widest block mb-1">
              Step 2
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">
              2. Place at Billing Counter
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Position the acrylic counter stand or place the tap card right next to your payment counter or UPI QR scanner where customers gather.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-indigo-700 font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Includes High-Visibility Graphics</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">
              Step 3
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">
              3. Customer Taps or Scans
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Customer taps their phone (or scans the QR code). Your Google review form pops up immediately with 5 stars ready to post in 5 seconds!
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>3X Higher Conversion Rate</span>
            </div>
          </div>

        </div>

        {/* Compatibility & Tech Note Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-base sm:text-lg text-white">
                Dual Technology Guarantee: NFC + Backup QR Code
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Works natively on 100% of smartphones in India. iPhone, Samsung, Xiaomi, Vivo, Oppo, OnePlus. <span className="text-emerald-300 font-semibold">No app needed.</span>
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="shrink-0 bg-white hover:bg-blue-50 text-blue-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-transform hover:scale-105"
          >
            Choose Your Pack →
          </a>
        </div>

      </div>
    </section>
  );
};
