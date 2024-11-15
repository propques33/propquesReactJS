import React, { useEffect } from 'react';
import { FaUsers, FaLightbulb, FaRegCalendarAlt } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';

const WebinarPage = () => {
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
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-32 text-white text-center" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock the Potential of Your Commercial Assets</h1>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Join Now</button>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-8 md:px-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Drive 3X revenue from your commercial space</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">Join us for an insightful webinar conducted by Adarsh, where we will uncover strategies and proven methods to maximize the revenue potential of your vacant commercial asset. Whether you own an office space, retail property, or any other commercial real estate, this webinar is designed to equip you with the knowledge and tools to unlock its true earning potential.</p>
          </div>
          <img src="/path/to/webinar-image.jpg" alt="Webinar Promo" className="w-full rounded-md" />
        </div>
      </section>

      {/* Learning Points Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">You Will Learn How To</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <BsGraphUp className="text-6xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Drive Higher Revenue</h3>
            <p className="text-gray-600">Effective strategies to earn 3X more revenue from commercial assets.</p>
          </div>
          <div className="text-center">
            <FaLightbulb className="text-6xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Maximize Utilization</h3>
            <p className="text-gray-600">Learn key steps to boost occupancy and maximize space usage.</p>
          </div>
          <div className="text-center">
            <AiOutlineFundProjectionScreen className="text-6xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Enhance Asset Value</h3>
            <p className="text-gray-600">Use proven enhancements to make your space more profitable.</p>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 px-8 md:px-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Who Should Attend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Property Owners and Asset Managers', icon: <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" /> },
            { title: 'Real Estate Investors and Developers', icon: <GiMoneyStack className="text-6xl text-blue-500 mx-auto mb-4" /> },
            { title: 'Facility Managers and Consultants', icon: <IoPeopleOutline className="text-6xl text-blue-500 mx-auto mb-4" /> },
            { title: 'Entrepreneurs Exploring New Ventures', icon: <FaRegCalendarAlt className="text-6xl text-blue-500 mx-auto mb-4" /> },
          ].map((audience, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
              {audience.icon}
              <h3 className="text-lg font-semibold">{audience.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16 px-8 md:px-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Our Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Real Estate Passive Income</h3>
            <p className="text-white">Investors enjoy monthly distributions directly deposited into their bank accounts.</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Optimizing Tax Impact</h3>
            <p className="text-white">Maximize tax benefits using asset-specific strategies for sustainable savings.</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Expand & Diversify Portfolio</h3>
            <p className="text-white">Investors can choose between scalable sizes and diversification options.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">We Walk the Entire Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">Understand what is possible and maximize your ROI with our end-to-end solutions. We take care of the entire process from strategy to execution, so you can focus on growth.</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Join Now</button>
          </div>
          <img src="/path/to/process-image.jpg" alt="Process Overview" className="w-full rounded-md" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-16 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Propques Services. All rights reserved.</p>
          <p>Contact us at <a href="mailto:buzz@propques.com" className="underline">buzz@propques.com</a></p>
          <p>Phone: +91-7929037856</p>
        </div>
      </footer>
    </div>
  );
};

export default WebinarPage;
