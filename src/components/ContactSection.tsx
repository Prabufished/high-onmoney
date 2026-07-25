import React, { useState } from 'react';
import { MessageSquare, MapPin, Phone, Send, Building2, User, Hash } from 'lucide-react';
import { waLink, WHATSAPP_DISPLAY } from '../utils/wa';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('Restaurant / Cafe');
  const [quantity, setQuantity] = useState('1-4 units');
  const [userMsg, setUserMsg] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hi TapForReview,

*New Order / Inquiry Form Submission*
- Name: ${name || 'Customer'}
- WhatsApp Number: ${phone || 'Not provided'}
- Business Type: ${businessType}
- Quantity Needed: ${quantity}
- Message: ${userMsg || 'I want to inquire about ordering NFC Google Review Stands.'}`;

    const url = waLink(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const directWaUrl = waLink('Hi TapForReview, I want to contact customer support.');

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="bg-blue-100 text-[#1A56DB] font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-blue-200">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A2233] font-['Outfit']">
            Contact & Business Support
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Have questions about your order or custom logo printing? Reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office & WhatsApp Details */}
          <div className="lg:col-span-5 bg-[#F6F8FC] border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            
            <h3 className="font-extrabold text-xl text-[#1A2233] font-['Outfit']">
              TapForReview Head Office
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1A56DB] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#1A2233] block mb-1">Office Address:</strong>
                <p className="leading-relaxed text-slate-600">
                  2nd Floor, Harini Complex, 10, Bharathidasan Street, Bhuvaneshwari Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087
                </p>
              </div>
            </div>

            {/* Clickable WhatsApp */}
            <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <strong className="text-[#1A2233] block mb-1">WhatsApp Customer Support:</strong>
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-black text-base inline-flex items-center gap-1.5"
                >
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Available Mon–Sat, 9:00 AM – 8:00 PM IST
                </p>
              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
              <span className="font-bold text-xs text-[#1A2233] block">⚡ Instant WhatsApp Assistance</span>
              <p className="text-xs text-slate-600">
                Need immediate help finding your Google Maps review link? Chat with our setup executive now.
              </p>
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="font-extrabold text-xl text-[#1A2233] font-['Outfit']">
                Send an Order Enquiry
              </h3>
              <p className="text-xs text-slate-500">
                Fill this quick form and click Submit — it will open WhatsApp with your formatted inquiry.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#1A56DB]"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#1A56DB]"
                  />
                </div>
              </div>

              {/* Business Type & Quantity Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Business Category</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full py-2.5 px-3 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#1A56DB]"
                  >
                    <option>Restaurant / Cafe</option>
                    <option>Salon / Spa / Beauty</option>
                    <option>Dental / Medical Clinic</option>
                    <option>Gym / Fitness Studio</option>
                    <option>Jewelry / Retail Showroom</option>
                    <option>Hotel / Resort</option>
                    <option>Auto / Bike Garage</option>
                    <option>Other Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Quantity Needed</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full py-2.5 px-3 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#1A56DB]"
                  >
                    <option>1-4 units</option>
                    <option>5-9 units</option>
                    <option>10-24 units (Popular)</option>
                    <option>25-49 units</option>
                    <option>50-99 units</option>
                    <option>100+ units (Bulk Rate)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message or Special Request</label>
                <textarea
                  rows={3}
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="e.g. Please share custom logo preview details..."
                  className="w-full p-3 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-[#1A56DB]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-4 h-4" />
                <span>Submit Order Request via WhatsApp</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
