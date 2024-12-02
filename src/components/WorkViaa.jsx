import React, { useEffect } from "react";
import {
  FaChartLine,
  FaClipboardList,
  FaRegHandshake,
  FaLightbulb,
  FaClipboardCheck
} from "react-icons/fa";
import {  AiOutlineDownload } from "react-icons/ai";
import workviaa1 from "../../public/workviaa1.png";
import workviaa2 from "../../public/workviaa2.png";
const WorkViaa = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className=" font-sans px-16">
      {/* Header Section */}
      <section className="container mx-auto py-16 text-center mt-24 flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Discover the Power of 100% Occupancy
        </h1>
        <p className=" text-gray-600 mb-6">
          Learn how we helped increase rental income and occupancy rates to new
          heights in just 3 months.
        </p>
        <button className="bg-blue-500 w-ful hover:bg-blue-600 text-white py-3 px-6 rounded-full flex items-center justify-center transition duration-300">
          <AiOutlineDownload className="mr-2" /> Download Full Case Study
        </button>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto py-16 w-full">
        <div className=" w-full p-">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-5xl font-semibold mb-4 flex items-center justify-center md:justify-start">
                100% Occupancy in 3 Months
              </h2>
              <p className="text-gray-700 mb-4">
                Increased rental income by 42% and helped multiple clients
                achieve optimal occupancy rates in record time.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300">
                <AiOutlineDownload className="mr-2" /> Download Case Study
              </button>
            </div>

            {/* Right Section (Images) */}
            <div className="md:w-1/3 flex  justify-center md:justify-end relative space-x-4">
              <div className="relative mb-4">
                <img
                  src={workviaa1}
                  alt="Workviaa Image 1"
                  className="rou shadow-md h-60 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="relative">
                <img
                  src={workviaa2}
                  alt="Workviaa Image 2"
                  className="rou shadow-md h-60 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto flex justify-around space-x-8">
          <div className="text-center">
            <FaChartLine className="text-5xl text-blue-500 mb-2 w-full text-center" />
            <h3 className="text-4xl font-bold text-blue-600">3X</h3>
            <p className="text-gray-600">Revenue Increase</p>
          </div>
          <div className="text-center">
            <FaRegHandshake className="text-5xl text-blue-500 mb-2 w-full text-center" />
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-600">Occupancy Rate</p>
          </div>
          <div className="text-center">
            <FaClipboardList className="text-5xl text-blue-500 mb-2 w-full text-center" />
            <h3 className="text-4xl font-bold text-blue-600">3</h3>
            <p className="text-gray-600">Months</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <FaLightbulb className="text-blue-500 mr-3" /> About Workviaa
        </h2>
        <p className=" text-gray-600 mb-6">
          Growth in rental income of workspaces by almost 75%. Continuous cash
          flow with occupancy rates consistently above 60%.
        </p>
        <p className=" text-gray-600">
          Our strategies helped businesses increase visibility, improve revenue
          generation, and boost client occupancy in prime locations.
        </p>
      </section>

      {/* Problem Identification Section */}
      <section className="0 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaClipboardCheck className="text-blue-500 mr-3" /> Identifying the
            Problem
          </h2>
          <p className=" text-gray-600 mb-4">
            A well-located property was unoccupied for years due to lack of
            visibility, despite being fully compliant with industry standards.
          </p>
          <p className=" text-gray-600 mb-4">
            The property needed a strategic marketing approach to fill vacancies
            and increase revenue.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <FaLightbulb className="text-blue-500 mr-3" /> Designing a Solution
        </h2>
        <p className=" text-gray-600 mb-4">
          A visibility-focused strategy was proposed, including marketing,
          plug-and-play office spaces, and a dedicated management team.
        </p>
        <p className=" text-gray-600 mb-4">
          This approach targeted small business owners and entrepreneurs for
          long-term rental stability.
        </p>
      </section>

      {/* Positive Results Section */}
      <section className="0 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaRegHandshake className="text-blue-500 mr-3" /> Positive End
            Result
          </h2>
          <p className=" text-gray-600 mb-4">
            The property reached full occupancy in just three months, boosting
            rental income significantly and providing a stable revenue stream.
          </p>
          <p className=" text-gray-600">
            The property’s rental price increased from ₹50/sqft to ₹92/sqft,
            generating a massive cash flow and leading to a 3x revenue growth.
          </p>
        </div>
      </section>

      {/* Download Section */}
      {/* <section className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
          <AiOutlineMail className="text-blue-500 mr-3" /> Download Detailed
          Case Study
        </h2> 
        <div className="flex justify-center mb-6 space-x-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="border rounded-md p-3 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border rounded-md p-3 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>  y
        <button className="00 hover:bg-blue-600 text-white py-3 px-6 rounded-full flex items-center justify-center transition duration-300">
          <AiOutlineDownload className="mr-2" /> Download
        </button>
      </section> */}
    </div>
  );
};

export default WorkViaa;
