import React from 'react';
import { Utensils, Scissors, Stethoscope, Dumbbell, ShoppingBag, Hotel, Car, Store, Sparkles } from 'lucide-react';
import { waLink } from '../utils/wa';

export const WhoItsFor: React.FC = () => {
  const categories = [
    { name: 'Restaurants & Cafes', icon: Utensils, desc: 'Table service & billing desk taps' },
    { name: 'Salons & Spas', icon: Scissors, desc: 'Hair, beauty & wellness counters' },
    { name: 'Clinics & Dentists', icon: Stethoscope, desc: 'Doctors & healthcare desks' },
    { name: 'Gyms & Fitness', icon: Dumbbell, desc: 'Workout studios & reception' },
    { name: 'Showrooms', icon: ShoppingBag, desc: 'Jewelry, apparel & electronics' },
    { name: 'Hotels & Resorts', icon: Hotel, desc: 'Reception & concierge check-out' },
    { name: 'Service Centres', icon: Car, desc: 'Auto repair, mobile & garage' },
    { name: 'Retail Shops', icon: Store, desc: 'Neighborhood retail & boutiques' },
  ];

  return (
    <section id="who-its-for" className="py-16 sm:py-20 bg-[#F6F8FC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="bg-blue-100 text-[#1A56DB] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-blue-200">
            Target Businesses
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2233] font-['Outfit']">
            Who TapForReview Is For
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Ideal for local Indian brick-and-mortar outlets looking to rank #1 on Google Maps.
          </p>
        </div>

        {/* Small Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const waUrl = waLink(`Hi TapForReview, I run a ${cat.name} and want to order Google Review Stands.`);

            return (
              <a
                key={idx}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:border-[#1A56DB] rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-all group space-y-2 block"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 text-[#1A56DB] group-hover:bg-[#1A56DB] group-hover:text-white flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-sm text-[#1A2233] font-['Outfit']">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {cat.desc}
                </p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
