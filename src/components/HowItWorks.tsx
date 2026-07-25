import React from 'react';
import { MessageSquare, Upload, Truck, ArrowRight, ShieldCheck } from 'lucide-react';
import { waLink } from '../utils/wa';

export const HowItWorks: React.FC = () => {
  const defaultWa = waLink('Hi TapForReview, I want to order NFC review stands for my business.');

  const steps = [
    {
      stepNumber: '01',
      title: 'WhatsApp us your order details',
      description: 'Tell us which product (Acrylic Stand or NFC Card) and how many units you need.',
      icon: MessageSquare,
      color: 'bg-emerald-500 text-white',
    },
    {
      stepNumber: '02',
      title: 'Send review link & brand logo',
      description: 'Share your business Google Maps link and logo. Our team confirms your print mockup.',
      icon: Upload,
      color: 'bg-[#1A56DB] text-white',
    },
    {
      stepNumber: '03',
      title: 'Programmed & dispatched in 48h',
      description: 'We code your NFC chips, laser print your stands, and dispatch via free air courier.',
      icon: Truck,
      color: 'bg-amber-600 text-white',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#F6F8FC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="bg-blue-100 text-[#1A56DB] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-blue-200">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2233] font-['Outfit']">
            How TapForReview Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No complicated online accounts or registration. Order directly on WhatsApp in under 2 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-4 relative"
              >
                {/* Step badge & icon */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center font-bold shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-black text-3xl text-slate-200 font-mono">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg text-[#1A2233] font-['Outfit']">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <a
            href={defaultWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Start WhatsApp Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
