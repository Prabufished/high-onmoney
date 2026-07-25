import React from 'react';
import { Clock, TrendingUp, Smartphone, CreditCard, Sparkles } from 'lucide-react';

export const WhyTapForReview: React.FC = () => {
  const benefits = [
    {
      title: 'Reviews in 10 seconds',
      description: 'One tap opens your exact Google 5-star review page. No typing, no searching, no app download required.',
      icon: Clock,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      title: 'Rank higher on Google Maps',
      description: 'More authentic 5-star Google reviews boost your local SEO ranking, bringing double the organic walk-ins.',
      icon: TrendingUp,
      color: 'bg-blue-50 text-[#1A56DB] border-blue-200',
    },
    {
      title: 'Works on every smartphone',
      description: 'Built-in NTAG215 NFC chip for quick phone tap, plus an ultra-crisp backup QR code for older smartphones.',
      icon: Smartphone,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      title: 'One-time payment',
      description: 'Zero monthly subscriptions, zero software fees, zero renewals. Buy once and use for lifetime reviews.',
      icon: CreditCard,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-200">
            Key Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2233] font-['Outfit']">
            Why Choose TapForReview
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Engineered specifically for Indian business owners to maximize customer review collection.
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-[#F6F8FC] border border-slate-200 rounded-3xl p-6 space-y-4 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl border ${b.color} flex items-center justify-center font-bold`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#1A2233] font-['Outfit']">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
