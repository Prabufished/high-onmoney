import React, { useState } from 'react';
import { Product, AddOn, OrderDetails } from '../types';
import { ADDONS } from '../data/products';
import { X, Trash2, ShoppingBag, Plus, Minus, ShieldCheck, Zap, Image, Link, CheckCircle2, Download, Printer, ArrowRight, CreditCard, QrCode, Truck } from 'lucide-react';

interface CheckoutDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartProduct: Product | null;
  customLogo: boolean;
  setCustomLogo: (v: boolean) => void;
  reviewLinkSetup: boolean;
  setReviewLinkSetup: (v: boolean) => void;
  expressShipping: boolean;
  setExpressShipping: (v: boolean) => void;
  businessName: string;
  setBusinessName: (v: string) => void;
  googleMapsUrl: string;
  setGoogleMapsUrl: (v: string) => void;
}

export const CheckoutDrawer: React.FC<CheckoutDrawerProps> = ({
  isOpen,
  onClose,
  cartProduct,
  customLogo,
  setCustomLogo,
  reviewLinkSetup,
  setReviewLinkSetup,
  expressShipping,
  setExpressShipping,
  businessName,
  setBusinessName,
  googleMapsUrl,
  setGoogleMapsUrl,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'COD' | 'RAZORPAY'>('UPI');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [gstin, setGstin] = useState('');
  const [orderComplete, setOrderComplete] = useState<OrderDetails | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const basePrice = cartProduct ? cartProduct.price * quantity : 0;
  const logoCost = customLogo ? 199 * quantity : 0;
  const linkCost = reviewLinkSetup ? 149 : 0;
  const shippingCost = expressShipping ? 99 : 0;
  const codFee = paymentMethod === 'COD' ? 49 : 0;

  const subtotal = basePrice + logoCost + linkCost + shippingCost + codFee;
  const gstAmount = Math.round(subtotal * 0.18); // 18% GST estimate
  const finalTotal = subtotal; // Inclusive GST or breakdown shown

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cartProduct || !customerName || !phone || !address || !pincode) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrder: OrderDetails = {
        orderId: `TR-IN-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        productName: cartProduct.name,
        unitCount: cartProduct.unitCount * quantity,
        basePrice,
        addonsTotal: logoCost + linkCost + shippingCost + codFee,
        totalAmount: finalTotal,
        businessName: businessName || 'My Business',
        googleMapsUrl: googleMapsUrl || 'Pending via WhatsApp',
        customerName,
        phone,
        email: email || 'customer@business.in',
        address,
        city,
        pincode,
        gstin: gstin || undefined,
        paymentMethod,
      };
      setOrderComplete(generatedOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between overflow-hidden relative">
        
        {/* Top Drawer Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-sm">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white font-['Outfit']">
                {orderComplete ? 'Order Confirmation & Invoice' : 'Shopping Cart & Checkout'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {orderComplete ? 'Official GST Invoice Generated' : 'Free All-India Express Dispatch'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!orderComplete ? (
            cartProduct ? (
              <form onSubmit={handlePlaceOrder} className="space-y-6">
                
                {/* Product Line Item */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                      NFC
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 font-['Outfit']">{cartProduct.name}</h4>
                      <p className="text-[11px] text-slate-500">
                        ₹{cartProduct.price.toLocaleString('en-IN')} / pack ({cartProduct.unitCount} units)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-l-lg"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-800">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-r-lg"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="font-extrabold text-sm text-slate-900">
                      ₹{basePrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Business Details for Custom Printing */}
                <div className="space-y-3 bg-blue-50/60 border border-blue-200/80 p-4 rounded-2xl">
                  <h4 className="text-xs font-extrabold text-blue-900 uppercase tracking-wider">
                    Custom Printing & Link Details
                  </h4>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Business Name to Print on Card *
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Third Wave Cafe, Sharma Dental"
                      className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2 rounded-xl text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Google Maps Review URL (Optional)
                    </label>
                    <input
                      type="text"
                      value={googleMapsUrl}
                      onChange={(e) => setGoogleMapsUrl(e.target.value)}
                      placeholder="Paste link or leave blank (our team will assist)"
                      className="w-full bg-white border border-slate-300 text-slate-900 px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>
                </div>

                {/* Order Add-ons Checklist */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Add-Ons & Order Upgrades
                  </h4>

                  <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:bg-slate-50 text-xs">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={customLogo}
                        onChange={(e) => setCustomLogo(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div>
                        <span className="font-bold text-slate-900">Custom Logo Printing</span>
                        <p className="text-[10px] text-slate-500">UV HD Logo on card front</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-blue-600">+₹199</span>
                  </label>

                  <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:bg-slate-50 text-xs">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={reviewLinkSetup}
                        onChange={(e) => setReviewLinkSetup(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div>
                        <span className="font-bold text-slate-900">Google Place ID Link Setup</span>
                        <p className="text-[10px] text-slate-500">We find & encode your Place ID</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-blue-600">+₹149</span>
                  </label>

                  <label className="flex items-center justify-between p-3 border rounded-xl cursor-pointer hover:bg-slate-50 text-xs">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={expressShipping}
                        onChange={(e) => setExpressShipping(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div>
                        <span className="font-bold text-slate-900">Express Priority Air Dispatch</span>
                        <p className="text-[10px] text-slate-500">12-24h priority packing</p>
                      </div>
                    </div>
                    <span className="font-extrabold text-blue-600">+₹99</span>
                  </label>
                </div>

                {/* Shipping & Contact Form */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Shipping Address Across India
                  </h4>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-700 block mb-0.5">Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Receiver Name"
                        className="w-full border border-slate-300 p-2.5 rounded-xl text-xs text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-700 block mb-0.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile"
                        className="w-full border border-slate-300 p-2.5 rounded-xl text-xs text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-slate-700 block mb-0.5">Full Street Address *</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Shop/Office No, Building Name, Street"
                      className="w-full border border-slate-300 p-2.5 rounded-xl text-xs text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-700 block mb-0.5">City *</label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Mumbai"
                        className="w-full border border-slate-300 p-2.5 rounded-xl text-xs text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-700 block mb-0.5">Pincode *</label>
                      <input
                        type="text"
                        required
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="6-digit Pincode"
                        className="w-full border border-slate-300 p-2.5 rounded-xl text-xs text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* GSTIN Input */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-700 block mb-0.5">
                      GSTIN Number (Optional - for Business Tax Credit)
                    </label>
                    <input
                      type="text"
                      value={gstin}
                      onChange={(e) => setGstin(e.target.value)}
                      placeholder="e.g. 27AAAAA0000A1Z5"
                      className="w-full border border-slate-300 p-2.5 rounded-xl text-xs text-slate-900 uppercase outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                    />
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    Select Payment Method
                  </h4>

                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('UPI')}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'UPI'
                          ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-emerald-600" />
                      <span>UPI / GPay / PhonePe</span>
                      <span className="text-[9px] text-emerald-600 font-extrabold">Instant Dispatched</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('COD')}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'COD'
                          ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-blue-600" />
                      <span>Cash on Delivery</span>
                      <span className="text-[9px] text-slate-500">+₹49 COD fee</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('RAZORPAY')}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'RAZORPAY'
                          ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-indigo-600" />
                      <span>Cards / NetBanking</span>
                      <span className="text-[9px] text-slate-500">Razorpay Secured</span>
                    </button>
                  </div>
                </div>

                {/* Price Summary Breakdown */}
                <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Item ({cartProduct.name})</span>
                    <span>₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  {customLogo && (
                    <div className="flex justify-between text-slate-300">
                      <span>Custom Logo Printing</span>
                      <span>+₹{logoCost}</span>
                    </div>
                  )}
                  {reviewLinkSetup && (
                    <div className="flex justify-between text-slate-300">
                      <span>Place ID Link Setup</span>
                      <span>+₹{linkCost}</span>
                    </div>
                  )}
                  {expressShipping && (
                    <div className="flex justify-between text-slate-300">
                      <span>Express Air Dispatch</span>
                      <span>+₹{shippingCost}</span>
                    </div>
                  )}
                  {paymentMethod === 'COD' && (
                    <div className="flex justify-between text-slate-300">
                      <span>COD Courier Handling Fee</span>
                      <span>+₹49</span>
                    </div>
                  )}
                  <div className="border-t border-slate-700 pt-2 flex justify-between font-extrabold text-base text-white">
                    <span>Total Order Amount</span>
                    <span className="text-emerald-400">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    *Includes 18% GST (GST Tax Invoice provided upon order placement)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold py-4 rounded-2xl shadow-xl transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 text-base"
                >
                  {isProcessing ? (
                    <span className="animate-pulse">Processing Order & Generating GST Invoice...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      <span>Place Order — ₹{finalTotal.toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto" />
                <h4 className="font-bold text-lg text-slate-800">Your Cart is Empty</h4>
                <p className="text-xs text-slate-500">Please choose an NFC Tap Card or Stand package to proceed.</p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Browse Packages
                </button>
              </div>
            )
          ) : (
            /* ORDER CONFIRMATION & GST INVOICE MODAL */
            <div className="space-y-6 animate-in zoom-in-95">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900 font-['Outfit']">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-slate-600">
                  Order ID: <strong className="text-slate-900 font-mono">{orderComplete.orderId}</strong>
                </p>
                <span className="inline-block bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  Dispatched via Express Air Courier in 24 Hours
                </span>
              </div>

              {/* Printable Tax Invoice Box */}
              <div className="bg-slate-50 border border-slate-300 rounded-2xl p-5 text-xs text-slate-800 space-y-4 font-mono shadow-xs">
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-blue-900">TAPREVIEW INDIA PRIVATE LIMITED</h4>
                    <p className="text-[10px] text-slate-500">GSTIN: 27AABCT9988C1Z2 • Official Tax Invoice</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 block">{orderComplete.date}</span>
                    <span className="text-[10px] text-slate-500">{orderComplete.paymentMethod} Payment</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] bg-white p-3 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-sans">Billed Business</span>
                    <strong className="text-slate-900 font-sans block">{orderComplete.businessName}</strong>
                    <span className="text-slate-600 font-sans">{orderComplete.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] uppercase font-sans">Delivery Address</span>
                    <span className="text-slate-700 font-sans block leading-tight">{orderComplete.address}, {orderComplete.city} - {orderComplete.pincode}</span>
                    {orderComplete.gstin && (
                      <span className="text-blue-700 font-bold block text-[10px] mt-1">GSTIN: {orderComplete.gstin}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-1 pt-1 border-t border-slate-200">
                  <div className="flex justify-between font-bold">
                    <span>{orderComplete.productName} ({orderComplete.unitCount} units)</span>
                    <span>₹{orderComplete.basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  {orderComplete.addonsTotal > 0 && (
                    <div className="flex justify-between text-slate-600">
                      <span>Add-ons (Logo/Link/Express)</span>
                      <span>₹{orderComplete.addonsTotal}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-extrabold text-sm text-slate-900 border-t border-slate-300 pt-2">
                    <span>Grand Total Paid (Incl. GST)</span>
                    <span className="text-emerald-700">₹{orderComplete.totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20TapReview%2C%20my%20Order%20ID%20is%20${orderComplete.orderId}%20for%20${encodeURIComponent(orderComplete.businessName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-transform hover:scale-[1.01] flex items-center justify-center gap-2 text-xs"
                >
                  <Zap className="w-4 h-4" />
                  <span>Send Order Confirmation on WhatsApp</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Tax Invoice PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
