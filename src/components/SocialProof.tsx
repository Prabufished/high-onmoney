import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F6F8FC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="bg-amber-100 text-[#B45309] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300">
            Real Customer Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2233] font-['Outfit']">
            Trusted by 500+ Local Businesses Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See how Indian store owners are multiplying their Google Maps reviews and local customer footfalls.
          </p>
        </div>

        {/* 3 Testimonial Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm relative flex flex-col justify-between space-y-4"
            >
              {/* Code Indicator Comment Badge */}
              <span className="text-[10px] text-slate-400 font-mono block bg-slate-100 px-2 py-0.5 rounded w-fit">
                (Customer Testimonial Placeholder)
              </span>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed flex-1">
                "{item.comment}"
              </p>

              {/* Business & Owner Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-[#1A2233] font-['Outfit']">
                    {item.businessName}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {item.ownerName} • {item.businessType} ({item.city})
                  </p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 p-1.5 rounded-full" title="Verified Customer">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
