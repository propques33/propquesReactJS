import React, { useEffect } from "react";
import {
  FaUsers,
  FaChartLine,
  FaClipboardList,
  FaRegHandshake
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const OurServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 md:py-20">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Maximize Your Space Potential
          </h2>
          <p className="text-lg mb-6">
            Boost your ROI and drive a 3x increase in revenue on an underperforming space.
          </p>
          <p className="text-lg">
            Create your business model and strategic plan with Propques today.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-blue-500" />
            <p className="mt-2 text-lg font-medium text-gray-700">
              Research & Development
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="text-5xl text-green-500" />
            <p className="mt-2 text-lg font-medium text-gray-700">
              Feasibility & Floor Plans
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaClipboardList className="text-5xl text-yellow-500" />
            <p className="mt-2 text-lg font-medium text-gray-700">
              Monitoring & Management
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaRegHandshake className="text-5xl text-purple-500" />
            <p className="mt-2 text-lg font-medium text-gray-700">
              Team Training & Support
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Case Studies
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team has collaborated with various excellent businesses, helping
            them embrace sustainable business methods and create work-life
            balance strategies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Propques ensures clients make the most of their space potential,
            fostering entrepreneurial ecosystems and sustainable business ventures.
          </p>
        </div>
      </section>

      {/* Monitoring & Management Section */}
      <section className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Monitoring & Management
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Leverage our expertise in coworking business operations, from
          day-to-day operations to long-term growth.
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed text-left md:text-center flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
          <li>Sales & Marketing</li>
          <li>Procurement</li>
          <li>Brand Identity</li>
          <li>Supplier Coordination</li>
          <li>Operations</li>
          <li>Technology</li>
        </ul>
      </section>

      {/* Client Testimonials Section */}
      {/* <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Client Testimonials
          </h2>
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <p className="text-gray-700 mb-4">
              "Choosing Propques for our strategic projects was one of the best
              decisions we've made. Their attention to detail has delivered
              great results."
            </p>
            <p className="text-gray-600 font-medium">- Client Name, Company</p>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
          <p className="mb-6">
            We empower asset owners to maximize their space potential and foster
            community-driven workspaces.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OurServicesPage;
