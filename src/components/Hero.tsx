import React, { useState } from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Truck, Clock, Sparkles, Smartphone, CheckCircle2, Star } from 'lucide-react';
import { waLink } from '../utils/wa';

interface HeroProps {
  onSimulateTap?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSimulateTap }) => {
  const [tapped, setTapped] = useState(false);

  const heroWaUrl = waLink('Hi TapForReview, I want to order the Google Review Stand. Please share details.');

  const handleInteractiveTap = () => {
    setTapped(true);
    setTimeout(() => setTapped(false), 3000);
    if (onSimulateTap) onSimulateTap();
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-[#F6F8FC]">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1A56DB]">
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>India's #1 NFC + QR Google Review Booster</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A2233] font-['Outfit'] tracking-tight leading-[1.1]">
              Get 10x More Google Reviews.{' '}
              <span className="text-[#1A56DB] underline decoration-amber-400 decoration-wavy decoration-2">
                One Tap.
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Your customer taps their phone on the stand. Your Google review page opens instantly. No app. No typing. No monthly fee.
            </p>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={heroWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 text-base sm:text-lg active:scale-95 group"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <span>Order on WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="bg-white hover:bg-slate-100 text-[#1A2233] font-bold py-4 px-6 rounded-2xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all text-center text-base"
              >
                See Pricing & Bulk Tiers
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#1A56DB] shrink-0" />
                <span>Free delivery across India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>COD available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Dispatched in 48 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>One-time, no subscription</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Product Card/Stand Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl space-y-6">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between">
                <span className="bg-[#1A56DB] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  TapForReview Acrylic Stand
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xs">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>5.0 (500+ Outlets)</span>
                </div>
              </div>

              {/* Graphic Mockup of Stand & Phone Tap */}
              <div
                onClick={handleInteractiveTap}
                className="relative deep-sea-gradient rounded-2xl p-6 text-white text-center cursor-pointer group hover:border-blue-400 border border-slate-700/50 transition-all overflow-hidden shadow-xl"
              >
                {/* Simulated Glow */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Stand Visual */}
                <div className="relative z-10 py-4 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#1A56DB] flex items-center justify-center font-black text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white font-['Outfit']">
                      TAP HERE TO REVIEW
                    </h3>
                    <p className="text-xs text-slate-300">
                      Leave us 5 Stars on Google
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Animated Simulated Tap Overlay */}
                {tapped && (
                  <div className="absolute inset-0 bg-[#25D366] text-white flex flex-col items-center justify-center p-4 animate-in fade-in z-20 font-extrabold">
                    <CheckCircle2 className="w-12 h-12 mb-2 animate-bounce" />
                    <span className="text-lg">Tap Detected!</span>
                    <span className="text-xs font-normal opacity-90 mt-1">
                      Opening Google Review Page...
                    </span>
                  </div>
                )}

                <div className="text-[10px] text-slate-400 pt-2 border-t border-slate-700/80 font-mono">
                  ✨ Click card above to test tap animation!
                </div>
              </div>

              {/* Instant WhatsApp Order Teaser */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-extrabold text-slate-900 block">Need custom logo printing?</span>
                  <span className="text-slate-600">Send your logo on WhatsApp for a free 3D preview</span>
                </div>
                <a
                  href={heroWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-bold px-3 py-2 rounded-xl shrink-0 text-xs shadow-xs hover:bg-[#20bd5a]"
                >
                  Chat Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
