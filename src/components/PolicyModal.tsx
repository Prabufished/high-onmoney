import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw, FileText, Phone, HelpCircle } from 'lucide-react';

interface PolicyModalProps {
  policyType: 'about' | 'contact' | 'shipping' | 'refund' | 'privacy' | 'gst' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative text-slate-900 border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <h3 className="font-extrabold text-lg font-['Outfit'] capitalize">
            {policyType === 'about' && 'About TapReview India'}
            {policyType === 'contact' && 'Contact & Business Support'}
            {policyType === 'shipping' && 'Pan-India Shipping & Delivery Policy'}
            {policyType === 'refund' && 'Replacement & Refund Policy'}
            {policyType === 'privacy' && 'Privacy & Data Security Policy'}
            {policyType === 'gst' && 'GST Tax Invoice & Business Credit'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {policyType === 'about' && (
            <div className="space-y-3">
              <p>
                <strong>TapReview India</strong> is the premier provider of NFC + QR code Google Review booster cards and acrylic counter stands for local brick-and-mortar retail and service businesses.
              </p>
              <p>
                Our mission is to help local Indian entrepreneurs — from neighborhood cafes and dental clinics to salon chains and gyms — effortlessly convert in-person customer visits into authentic 5-star Google Maps reviews.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl text-blue-900 font-semibold text-xs">
                🇮🇳 Designed, printed, and pre-programmed proudly in Mumbai & Delhi, serving 500+ outlets across All India.
              </div>
            </div>
          )}

          {policyType === 'contact' && (
            <div className="space-y-3">
              <p>Reach out to our customer support & corporate bulk order desk:</p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2 text-xs">
                <div><strong>Corporate HQ:</strong> TapReview Tech Pvt Ltd, Level 4, Bandra Kurla Complex, Mumbai, Maharashtra 400051</div>
                <div><strong>WhatsApp Hotline:</strong> +91 98765 43210 (Mon-Sat 9 AM - 8 PM IST)</div>
                <div><strong>Email Support:</strong> support@tapreview.in</div>
                <div><strong>B2B & Agency Inquiries:</strong> b2b@tapreview.in</div>
              </div>
            </div>
          )}

          {policyType === 'shipping' && (
            <div className="space-y-3">
              <p>
                We dispatch all orders within <strong>24 hours</strong> from our fulfillment hubs in Mumbai and Delhi.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Metro Cities (Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai, Kolkata):</strong> 1 to 3 business days via Express Air.</li>
                <li><strong>Tier 2 & Rest of India:</strong> 3 to 5 business days via BlueDart, Delhivery, or DTDC.</li>
                <li><strong>Tracking:</strong> Real-time SMS and WhatsApp courier tracking links sent immediately upon dispatch.</li>
              </ul>
            </div>
          )}

          {policyType === 'refund' && (
            <div className="space-y-3">
              <p>
                All TapReview NFC chips and acrylic counter stands come with a <strong>1-Year Hardware Replacement Warranty</strong>.
              </p>
              <p>
                If a card arrives damaged or chip fails to respond to NFC tapping within 12 months, simply message us on WhatsApp with a short video and we will dispatch a free replacement within 24 hours.
              </p>
            </div>
          )}

          {policyType === 'privacy' && (
            <div className="space-y-3">
              <p>
                Your privacy is guaranteed. We only use your business name and Google Maps Place ID link to program your physical NFC chip.
              </p>
              <p>
                We do not sell, rent, or share your contact numbers or order details with third parties.
              </p>
            </div>
          )}

          {policyType === 'gst' && (
            <div className="space-y-3">
              <p>
                We provide official <strong>GST Tax Credit Invoices</strong> for all business purchases.
              </p>
              <p>
                Simply enter your 15-digit GSTIN number during checkout, and a valid tax invoice with 18% GST breakdown will be generated and emailed instantly for your accounting records.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="bg-slate-900 text-white font-bold px-5 py-2 rounded-xl text-xs hover:bg-slate-800"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
