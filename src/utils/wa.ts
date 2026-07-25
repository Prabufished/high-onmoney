export const WHATSAPP_NUMBER = '919150114327';
export const WHATSAPP_DISPLAY = '+91 91501 14327';

export const waLink = (msg: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
