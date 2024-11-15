import React, { useEffect } from 'react';
import { FaClipboardCheck } from 'react-icons/fa';

const SummitSpaceCaseStudy = () => {
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
   
    <div className="bg-gray-100 font-sans md:px-8 px-4">
      {/* Header Section */}
      {/* <header className="bg-white shadow-md ">
        <div className="container  text-center">
        </div>
      </header> */}

      {/* Overview Section */}
      <section className="container mt-20 h-screen flex flex-col items-center justify-center mx-auto py-16">
        <div className="rounded-lg p- flex flex-col md:flex-row items-center gap-10">

          <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800">SUMMIT SPACE</h1>
            <h2 className="text-5xl font-semibold mb-6">Over 1.6X increase in the rental rate of the corporate property.</h2>
            <p className="text-gray-700 mb-6">
              3X increase in the occupancy rate in just 6 months. Complete marketing & strategic makeover to increase visibility & revenue generation.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md">
              Download Case Study
            </button>
          </div>
          {/* <div className="flex gap-6 md:w-1/2 justify-center">
            <img src="https://via.placeholder.com/300x200" alt="Summit Space Image 1" className="rounded-lg shadow-md w-full h-auto" />
            <img src="https://via.placeholder.com/300x200" alt="Summit Space Image 2" className="rounded-lg shadow-md w-full h-auto" />
          </div> */}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-500">1.6X</h3>
            <p className="text-gray-600">Increase rental rate of the corporate property</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500">15%</h3>
            <p className="text-gray-600">Increase in occupancy</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500">6</h3>
            <p className="text-gray-600">Months</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Summit Space</h2>
        <p className="text-gray-700 leading-relaxed">
          Summit Space is a versatile and spectacular coworking office in the modern corporate park Rohtas Summit, Lucknow. This space has an exciting growth story, which started from scratch and moved on to become a fabulous eye-catcher in the commercial office sector.
        </p>
      </section>

      {/* Problem Identification Section */}
      <section className="bg-blue-50 py-16 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Identifying the Problem</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The journey started with Sandeep Agarwal, the owner of Rohtas Summit, showing his concern about attracting corporate clients to his office property...
          </p>
          {/* Add more text content as needed */}
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto py-16  ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Designing a Solution</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team proposed including and developing flexible coworking spaces at Rohtas Summit for smaller enterprises. We understood that...
        </p>
        {/* Add more text content as needed */}
      </section>

      {/* Positive Results Section */}
      <section className="bg-blue-50 py-16 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Positive End Result</h2>
          <p className="text-gray-700 leading-relaxed">
            Due to our strategy and full-fledged support from our client, Rohtas Summit witnessed...
          </p>
          {/* Add more text content as needed */}
        </div>
      </section>

      {/* Download Section */}
      {/* <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Download Detailed Case Study</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Your Email Address"
            className="border rounded-md p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company name"
            className="border rounded-md p-3 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md">
          Download
        </button>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Summit Space. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default SummitSpaceCaseStudy;
