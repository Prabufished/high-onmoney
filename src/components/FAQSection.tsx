import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { waLink } from '../utils/wa';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const defaultWa = waLink('Hi TapForReview, I have a question before placing an order.');

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1A56DB] border border-blue-200 px-3 py-1 rounded-full text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2233] font-['Outfit']">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about TapForReview NFC stands, delivery, and setup.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-[#F6F8FC] border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#1A2233] font-['Outfit']">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1A56DB]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Teaser */}
        <div className="mt-10 text-center bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3">
          <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
            Have a different question about your business review setup?
          </h3>
          <p className="text-xs text-slate-600">
            Our team is online on WhatsApp to assist you directly.
          </p>
          <a
            href={defaultWa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat with Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
