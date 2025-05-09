import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs"; // Office icon
import sampleImg from "../assets/h1.png"; // Replace with your actual image

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight poppins-regular">
            Premium Office Design <br />
            Solutions in <span className="text-blue-600">Lucknow</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Transforming workspaces into productive environments for coworking spaces and corporate offices across Lucknow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500  text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 flex items-center gap-2">
              Get Free Consultation <FiArrowRight />
            </button>
            <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
              View Our Projects
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center lg:text-left pt-6 max-w-md">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">350+</h3>
              <p className="text-sm text-gray-500">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">500k+</h3>
              <p className="text-sm text-gray-500">Sq Ft Designed</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">98%</h3>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image with Badge */}
        <div className="relative flex-1">
          <img
            src={sampleImg}
            alt="Office Design"
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-md flex gap-3 items-start max-w-xs">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <BsBuildings size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Turnkey Solutions</h4>
              <p className="text-sm text-gray-600">
                End-to-end office solutions from design to execution, saving you time and money
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
