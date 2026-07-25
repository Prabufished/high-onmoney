import React, { useState } from 'react';
import { Star, Smartphone, ShieldCheck, Zap, ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onSimulateTap: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onSimulateTap }) => {
  const [activeTab, setActiveTab] = useState<'stand' | 'card'>('stand');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-8 pb-16 lg:py-20">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>#1 Google Maps Review Booster for Indian Businesses</span>
              <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NFC + QR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Outfit'] text-white leading-[1.15]">
              Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">3X More Google Reviews</span> — One Tap.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Customers simply tap their smartphone on your NFC card or counter stand — and land <strong className="text-white font-semibold underline decoration-blue-400 decoration-2 underline-offset-4">directly on your 5-star Google review submission page</strong> in 2 seconds. Zero app required!
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 p-2.5 rounded-xl">
                <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Works on all NFC Phones</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 p-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>QR Backup for All Others</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>One-Time Cost • No Subscription</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onShopNow}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-base sm:text-lg font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-900/40 hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Shop Tap Cards & Stands</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onSimulateTap}
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 text-sm font-semibold px-6 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Simulate Phone Tap (Live Demo)</span>
              </button>
            </div>

            {/* Proof Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>500+ Indian Businesses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Pan-India 3-5 Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Interactive Tap Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Selector Toggle Tabs */}
              <div className="flex bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/80 mb-4 text-xs font-bold text-slate-300">
                <button
                  onClick={() => setActiveTab('stand')}
                  className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'stand'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span>NFC Counter Stand (₹849)</span>
                  <span className="bg-amber-400/20 text-amber-300 text-[9px] px-1.5 py-0.5 rounded font-black">Counter</span>
                </button>
                <button
                  onClick={() => setActiveTab('card')}
                  className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'card'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span>NFC Pocket Card (₹749)</span>
                  <span className="bg-emerald-400/20 text-emerald-300 text-[9px] px-1.5 py-0.5 rounded font-black">Portable</span>
                </button>
              </div>

              {/* Graphic Stage */}
              <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl overflow-hidden group">
                
                {/* Google Brand Color Stripe Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="h-full w-1/4 bg-[#4285F4]" />
                  <div className="h-full w-1/4 bg-[#EA4335]" />
                  <div className="h-full w-1/4 bg-[#FBBC04]" />
                  <div className="h-full w-1/4 bg-[#34A853]" />
                </div>

                {/* Simulated Product Container */}
                {activeTab === 'stand' ? (
                  <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
                    {/* Acrylic Stand Graphic */}
                    <div className="relative w-64 h-80 bg-white rounded-2xl shadow-2xl p-5 border-4 border-slate-200 text-slate-900 flex flex-col items-center justify-between transform group-hover:rotate-1 transition-transform duration-300">
                      
                      {/* Stand Acrylic Base Simulation */}
                      <div className="absolute -bottom-4 -left-3 -right-3 h-5 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 rounded-b-xl border-t border-slate-400 shadow-md"></div>

                      {/* Google Header */}
                      <div className="w-full flex items-center justify-between border-b border-slate-100 pb-2">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span className="font-bold text-xs text-slate-700">Google Reviews</span>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          TAP NFC
                        </span>
                      </div>

                      {/* Core Content */}
                      <div className="my-auto space-y-2">
                        <div className="relative inline-block">
                          {/* Pulsing NFC Ripple Rings */}
                          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                          <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-500 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
                            <Smartphone className="w-8 h-8" />
                          </div>
                        </div>

                        <h3 className="font-black text-slate-900 text-base leading-tight">
                          REVIEW US ON GOOGLE
                        </h3>
                        <p className="text-[11px] font-semibold text-slate-500">
                          Tap your phone here to leave a 5-star review!
                        </p>

                        <div className="flex justify-center text-amber-400 gap-0.5 pt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>

                      {/* QR Backup Section */}
                      <div className="w-full bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex items-center gap-3">
                        <div className="w-11 h-11 bg-white border border-slate-300 p-1 rounded flex items-center justify-center shrink-0">
                          {/* Simulated Crisp QR Code */}
                          <div className="w-full h-full bg-slate-900 grid grid-cols-4 gap-0.5 p-0.5 rounded-[2px]">
                            <div className="bg-white col-span-2 row-span-2"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white"></div>
                            <div className="bg-white col-span-2 row-span-2"></div>
                          </div>
                        </div>
                        <div className="text-left leading-tight">
                          <span className="text-[10px] font-bold text-slate-800 block">No NFC? Scan QR Code</span>
                          <span className="text-[9px] text-slate-500 block">Works with Camera or GPay</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 font-medium">
                      ✨ Acrylic Desk Counter Display Stand (Includes pre-programmed chip)
                    </p>
                  </div>
                ) : (
                  <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                    {/* Portable NFC Card Graphic */}
                    <div className="w-72 h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-5 border-2 border-slate-600 text-white flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      
                      {/* Metallic Chip Graphics */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span className="font-bold text-xs text-slate-200">Google Review Tap</span>
                        </div>
                        <div className="w-8 h-6 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-sm border border-amber-600/50 flex items-center justify-center text-[8px] font-black text-amber-950">
                          NFC
                        </div>
                      </div>

                      <div className="text-left space-y-1 my-auto">
                        <div className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">
                          YOUR BUSINESS NAME HERE
                        </div>
                        <div className="text-sm font-bold text-white flex items-center gap-1">
                          <span>TAP PHONE TO REVIEW</span>
                          <span className="text-amber-400">★★★★★</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-700/60">
                        <span>Dual NFC + QR Backing</span>
                        <span className="text-emerald-400 font-semibold">100% Waterproof PVC</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 font-medium">
                      💳 Credit-card size PVC Tap Card (Fits in staff pockets)
                    </p>
                  </div>
                )}

                {/* Simulated Interactive Tap Callout Button */}
                <div className="mt-2 text-center">
                  <button
                    onClick={onSimulateTap}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Click Here to Test How Smartphone Tap Works</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
