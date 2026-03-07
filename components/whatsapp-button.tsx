'use client';

import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about your swimming classes.');
    window.open(
      `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
