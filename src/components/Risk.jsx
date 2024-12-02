import React from "react";
import Button from "./Button";
import blogbanner from "../../public/blog-banner.webp";

const Risk = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <div className="flex flex-col md:flex-row gap-8 md:px-16 px-4 py-4">
        {/* Left Section - Image */}
        <div className="flex-1  md:mb-0">
          <img
            src={blogbanner}
            alt="Operational Efficiency"
            className="w-full h-64 md:h-auto object-cover "
            loading="lazy"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1 flex flex-col ">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#000000] mb-4">
            Maximize Revenue and Minimize Risk with Coworking Spaces
          </h1>
          <p className="text-base md:text-lg text-zinc-800 mb-6 leading-relaxed">
            Transform your commercial property into a coworking space and unlock
            greater revenue potential. By converting your space, you’ll attract
            multiple clients, reducing the risk of complete vacancy and ensuring
            steady occupancy. Unlike traditional leases where your income relies
            on a single tenant, coworking spaces allow you to spread the risk
            across several clients. Plus, by outsourcing management.
            {/* you can
            maintain and extend the life of your property, protecting your CAPEX
            investment for the long term. */}
          </p>
        </div>
      </div>
      <div className="md:pt-8">
        <Button name="Know Your Property Potential" />
      </div>
    </div>
  );
};

export default Risk;


