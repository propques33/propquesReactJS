import React from "react";
import Button from "./Button";
import interier from '../../public/interier.avif';

const Offer = () => {
  return (
    <div className="mx-auto px-4 md:px-16 md:py-8 py-">
      {/* Main Heading */}
      <h1 className="md:text-5xl text-3xl capitalize font-semibold text-center pb-4 md:pb-8">
        Know Our Story
      </h1>

      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={interier}
            alt="Coworking Spaces"
            className="w-full h-64 md:h-[75vh] rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-blue-500">
            Creating Sustainable Coworking Brands with Asset Owners at the Core
          </h1>
          <p className="text-gray-800 text-base md:text-lg text-justify">
            Two friends, while working for a coworking startup, realized during
            the COVID-19 pandemic that the key to a sustainable coworking
            business lies with asset owners. By generating additional revenue
            for asset owners, more coworking brands can thrive—even in
            challenging times. This inspired the creation of{" "}
            <span className="font-bold">Propques</span>, India’s only coworking
            consultancy dedicated to helping asset owners start, manage, and
            grow their coworking journey. Our goal is to empower asset owners to
            build sustainable coworking spaces that remain resilient, no matter
            what the market brings.
          </p>

          {/* Button */}
          <div className="">
            <Button name="Ready to Start Your Coworking Journey?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
