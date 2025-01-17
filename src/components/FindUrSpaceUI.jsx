import React from "react";
import fur from "../../public/fur.jpg";

const fINDURSPACE = () => {
  return (
    <>
      <p className="w-full text-center text-4xl font-extrabold">
        Propques <span className="text-blue-600">Ecosystem</span>
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center max-w-5xl mx-auto mb-10">
        {/* Text Section */}

        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <img
            src="https://findurspace.tech/static/images/logo.webp" // Replace with your actual logo URL
            alt="FindUrSpace Logo"
            className="mb-4 h-12"
          />
          <p className="text-gray-700 mb-6">
            FindUrSpace caters to unique co-working spaces for preferred
            locations tailored to your needs.
          </p>
          {/* <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2> */}
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
              <span className="text-gray-700">
                AI-Powered Workspace Matching
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
              <span className="text-gray-700">Zero Brokerage</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
              <span className="text-gray-700">
                Diverse Options Across 19+ Cities
              </span>
            </li>
            {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Real-Time Updates</span>
          </li> */}
            <li className="flex items-center">
              <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
              <span className="text-gray-700">Customized Search</span>
            </li>
            {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">
              Affordable Pricing Starting from ₹5500
            </span>
          </li> */}
            {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Expert Guidance</span>
          </li> */}
            {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Seamless Booking Experience</span>
          </li> */}
            {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Press Recognized</span>
          </li> */}
            {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Trending Coworking Hubs</span>
          </li> */}
          </ul>
          <button className="mt-8 bg-blue-500 w-full shadow-xl sm:w-auto text-center hover:bg-blue-600 transition-all ease-in-out px-6 py-2 sm:px-6 sm:py-3 rounded-xl text-white  sm:text-md md:text-[15px] flex items-center justify-center gap-2">
            <a href="https://findurspace.tech/">Visit Website</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <div className="rounded-lg p- shadow-g">
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              Launched in November 2024
            </div>
            <img
              src={fur} // Replace with your actual image URL
              alt="FindUrSpace"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default fINDURSPACE;
