import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import Button from "./Button";

const Features = () => {
  return (
    <div className="px-4 md:px-16 md:py-8">
      <h1 className="text-2xl md:text-4xl font-semibold mb- text-center md:text-left">
        Explore our host of services
        <span className="text-blue-500 text-4xl rounded-full">.</span>
      </h1>
      <h1 className="text-lg md:text-xl lg:text-2xl text-zinc-700 text-center md:text-left">
        <RiDoubleQuotesL
          className="text-blue-500 inline-block mb-2"
          size={20}
        />
        Maximize Your Asset's Potential with{" "}
        <span className="font-semibold text-zinc-900 font">
          Coworking Consultancy
        </span>
        <RiDoubleQuotesR
          className="text-blue-500 inline-block mb-2"
          size={20}
        />
      </h1>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Left Section - Branding */}
        <div className="w-full md:w-1/2 bg-white rounded-xl border border-zinc-100 p-6 hover:scale-105 transition-transform hover:shadow-lg text-center flex flex-col items-center justify-between">
          <div className="mb-4">
            <RiSearchEyeLine className="text-blue-500 mx-auto" size={60} />
          </div>
          <div className="text-zinc-700 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-[#0067d6] mb-2">
              Looking to build your own commercial asset brand with seamless
              management?
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              We’ll handle everything — from{" "}
              <span className="font-bold text-zinc-800">
                creating your brand name
              </span>
              ,{" "}
              <span className="font-bold text-zinc-800">website designing</span>
              ,{" "}
              <span className="font-bold text-zinc-800">
                marketing strategies
              </span>
              , and{" "}
              <span className="font-bold text-zinc-800">implementing SOPs</span>
              .
            </p>
          </div>
          <div className="mt-4">
            <Button name="Start Your Own Coworking" />
          </div>
        </div>

        {/* Right Section - Partnership */}
        <div className="w-full md:w-1/2 bg-white rounded-xl border border-zinc-100 p-6 hover:scale-105 transition-transform hover:shadow-lg text-center flex flex-col items-center justify-between">
          <div className="mb-4">
            <FaUserFriends className="text-blue-500 mx-auto" size={60} />
          </div>
          <div className="text-zinc-700 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-[#0067d6] mb-2">
              Looking to partner with a coworking brand?
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              We’ll take a mandate and use our{" "}
              <span className="font-bold text-zinc-800">
                industry connections
              </span>{" "}
              to find the{" "}
              <span className="font-bold text-zinc-800">
                perfect brand for your property
              </span>
              , whether through partnership or rental.
            </p>
          </div>
          <div className="mt-4">
            <Button name="Match Making With Coworking" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
