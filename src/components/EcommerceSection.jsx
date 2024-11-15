import React from 'react';
import { FaAmazon, FaEbay } from 'react-icons/fa';
import { SiShopify, SiEtsy } from 'react-icons/si';

const EcommerceSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-12 animate-fadeInUp">Find Our Books On</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* E-commerce Site 1 */}
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-w p-6  rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <FaAmazon size={48} className="text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-800">Amazon</h3>
          </a>

          {/* E-commerce Site 2 */}
          <a
            href="https://www.ebay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-w p-6  rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <FaEbay size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-800">eBay</h3>
          </a>

         

          {/* E-commerce Site 4 */}
          <a
            href="https://www.shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-w p-6  rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <SiShopify size={48} className="text-green-600 mb-4" />
            <h3 className="text-xl text-zinc-800 font-semibold">Shopify</h3>
          </a>

        
        </div>
      </div>
    </div>
  );
};

export default EcommerceSection;
