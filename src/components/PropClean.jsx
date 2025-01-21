import React from "react";
import propclean from "../../public/propclean.jpg";
import propcleanlogo from "../../public/propcleanlogo.png";

const PropCleanHowItWorks = () => {
  return (
    <div className="bg-white px-8 rounded-2xl  border-[1.5px] border-zinc-200 shadow-md flex flex-col md:flex-row items-center max-w-5xl mx-auto">
      {/* Text Section */}
      <div className="md:w-1/2  md:mb-0 ">
        <img
          src={propcleanlogo} // Replace with your actual logo URL
          alt="PropClean Logo"
          className="mb-4 h-12 "
        />
        <p className="text-gray-700 mb-6">
          PropClean simplifies property and workspace management with a
          straightforward and efficient workflow.
        </p>
        {/* <h2 className="text-2xl font-bold mb-4">Our Benefits</h2> */}
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Real-Time Dashboard</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Housekeeping Task Management</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">User-Friendly Interface</span>
          </li>
          {/* <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Task Quality Management</span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 font-bold text-xl mr-2">✔</span>
            <span className="text-gray-700">Stock Management</span>
          </li> */}
        </ul>
        <button className="mt-8 bg-blue-500 w-full shadow-xl sm:w-auto text-center hover:bg-blue-600 transition-all ease-in-out px-6 py-2 sm:px-6 sm:py-3 rounded-xl text-white  sm:text-md md:text-[15px] flex items-center justify-center gap-2">
          <a href="https://propclean.space/">Visit Website</a>
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <div className="rounded-lg p- shadow-g">
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            Launched in December 2024
          </div>
          <img
            src={propclean} // Replace with your actual image URL
            alt="PropClean App"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PropCleanHowItWorks;
