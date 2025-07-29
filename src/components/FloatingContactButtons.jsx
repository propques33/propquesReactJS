import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FloatingContactButtons = () => {
  const phoneNumber = '+91-7392037856'; // replace with your number
  const whatsappNumber = '917392037856'; // WhatsApp format without '+'

  return (
    <div className="fixed bottom-24 right-5 flex flex-col gap-4 z-50">
      
      {/* Call Button with Tooltip */}
      <div className="relative group">
        <a
          href={`tel:${phoneNumber.replace(/\s/g, '')}`}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          title="Call Us"
        >
          <FaPhoneAlt size={20} />
        </a>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap">
          {phoneNumber}
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
