import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, ShieldCheck, CheckCircle2, TrendingUp, MapPin, Building2, Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Trusted By 500+ Local Businesses Across India</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Real Reviews From Real Business Owners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See how cafes, dental clinics, salons, and gyms increased their Google Maps review count in less than 60 days.
          </p>
        </div>

        {/* Live Metrics Counter Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-blue-700/50">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">500+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Indian Outlets Onboarded</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-['Outfit']">180,000+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Customer Taps Generated</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-['Outfit']">4.9 / 5</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Average Merchant Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-cyan-300 font-['Outfit']">₹0</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Monthly Subscription Cost</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 -z-0 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified TapReview Merchant</span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  "{t.comment}"
                </p>

                {/* Before vs After Review Count Badge */}
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl flex items-center justify-between text-xs">
                  <div className="text-slate-500">
                    Before: <strong className="text-slate-800 font-bold">{t.reviewsBefore} reviews</strong>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-black">
                    <TrendingUp className="w-4 h-4" />
                    <span>After: {t.reviewsAfter} reviews in {t.daysTaken}!</span>
                  </div>
                </div>
              </div>

              {/* Owner Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 relative z-10">
                <img
                  src={t.avatarUrl}
                  alt={t.ownerName}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{t.ownerName}</h4>
                  <div className="text-xs text-slate-600 font-medium">{t.role} • <span className="text-blue-600 font-semibold">{t.businessName}</span></div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{t.city} • {t.businessType}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Badges Marquee Row */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 opacity-70 text-xs font-bold text-slate-500">
          <span>🔒 Safe Razorpay & UPI Checkout</span>
          <span>•</span>
          <span>🚚 Express BlueDart Dispatch</span>
          <span>•</span>
          <span>🧾 GST Tax Credit Invoice</span>
          <span>•</span>
          <span>🇮🇳 Made for Indian Businesses</span>
        </div>

      </div>
    </section>
  );
};
