import React from 'react';
import { BUSINESS_CATEGORIES } from '../data/products';
import { Utensils, Scissors, Stethoscope, Dumbbell, Hotel, ShoppingBag, Car, Briefcase, TrendingUp, Lightbulb } from 'lucide-react';

export const WhoItsFor: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'Hotel': return <Hotel className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Car': return <Car className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      default: return <TrendingUp className="w-6 h-6" />;
    }
  };

  return (
    <section id="who-its-for" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Tailored For Local Indian Retail & Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Designed for Every Customer-Facing Business
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Whether you run a bustling cafe in Mumbai or a dental clinic in Delhi, TapReview turns foot traffic into a high-ranking Google Maps profile.
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Category Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform ${category.bgGradient}`}>
                  {getIcon(category.icon)}
                </div>

                <h3 className="font-bold text-lg text-slate-900 font-['Outfit'] mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-3">
                  {category.subtitle}
                </p>

                {/* Growth Badge */}
                <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-lg mb-4">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{category.reviewGrowth}</span>
                </div>
              </div>

              {/* Pro Tip Box */}
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 flex items-start gap-2 mt-2">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{category.tip}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
