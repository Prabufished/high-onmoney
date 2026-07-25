import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Repeat, Award, MapPin, X, Check } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Why Google Reviews Are Your #1 Revenue Driver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Dominate Google Maps "Near Me" Searches
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            91% of customers in India search "best cafe near me" or "dentist near me" on Google Maps before visiting. Higher review count & fresh 5-star ratings put your business in the Top 3 Local Pack.
          </p>
        </div>

        {/* Interactive Comparison Table: Old Manual Asking vs TapReview */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Old Manual Way */}
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div className="flex items-center gap-2 text-rose-400 font-extrabold text-lg">
                <X className="w-6 h-6 stroke-[3]" />
                <span>The Old Manual Asking Way</span>
              </div>
              <span className="bg-rose-500/20 text-rose-300 text-xs px-2.5 py-1 rounded-full font-bold">
                Low Conversion (~3%)
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Staff verbally ask customer: "Please write us a review on Google".</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Customer has to open Google, search your exact business name, & click review tab.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>95% of customers get distracted or forget as soon as they leave your door.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Result: Only 1 or 2 reviews a month despite hundreds of happy customers.</span>
              </li>
            </ul>
          </div>

          {/* The TapReview Way */}
          <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-2 border-blue-500 rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <div className="absolute -top-3.5 right-6 bg-emerald-500 text-white font-extrabold text-[10px] px-3 py-1 rounded-full shadow-md uppercase">
              300%+ Review Growth
            </div>

            <div className="flex items-center justify-between border-b border-blue-700/60 pb-4">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-lg">
                <Check className="w-6 h-6 stroke-[3]" />
                <span>The TapReview NFC Way</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-bold">
                High Conversion (~45%)
              </span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Customer taps their phone at payment counter desk or bill folder.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Direct 5-star Google review popup opens instantly on their phone.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Customer posts review in under 10 seconds before walking out!</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Result: 30 to 80+ fresh 5-star Google reviews added every single month!</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white font-['Outfit']">Higher Google Maps Rank</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Google algorithm prioritizes businesses with frequent, high-rated customer reviews, ranking you above local competitors.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white font-['Outfit']">Zero Monthly Subscriptions</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pay once starting at ₹749 and use forever. No software licensing fees, zero hidden renewals, unlimited customer taps.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Repeat className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white font-['Outfit']">Unlimited Taps & Scans</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              NTAG215 industrial NFC chip supports over 100,000+ customer taps without signal degradation or chip burnout.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base text-white font-['Outfit']">5+ Years Lifespan</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Waterproof PVC & heavy acrylic build withstands daily liquid spills, cleaning sprays, and intense counter usage.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
