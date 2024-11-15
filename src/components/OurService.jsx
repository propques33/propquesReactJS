import React, { useEffect } from "react";
import {
  FaUsers,
  FaChartLine,
  FaClipboardList,
  FaRegHandshake,
} from "react-icons/fa";
import {
  AiOutlineCheckCircle,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

const OurServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
   

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 md:py-20 mt-16">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Maximize Your Space Potential
          </h2>
          <p className="text-lg mb-6">
            Boost your ROI and drive a 3x increase in revenue on an
            underperforming space.
          </p>
          <p className="text-lg">
            Create your business model and strategic plan with Propques today.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaUsers className="text-5xl text-blue-500" />,
              label: "Research & Development",
            },
            {
              icon: <FaChartLine className="text-5xl text-green-500" />,
              label: "Feasibility & Floor Plans",
            },
            {
              icon: <FaClipboardList className="text-5xl text-yellow-500" />,
              label: "Monitoring & Management",
            },
            {
              icon: <FaRegHandshake className="text-5xl text-purple-500" />,
              label: "Team Training & Support",
            },
          ].map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {service.icon}
              <p className="mt-2 text-lg font-medium text-gray-700">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      {/* <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Case Studies
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team has collaborated with excellent businesses, helping them
            embrace sustainable business methods and create work-life balance
            strategies.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Propques ensures clients make the most of their space potential,
            fostering entrepreneurial ecosystems and sustainable business
            ventures.
          </p>
        </div>
      </section> */}

      {/* Monitoring & Management Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 text-center">
          Monitoring & Management
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto text-center">
          Leverage our expertise in coworking business operations, from
          day-to-day tasks to long-term growth strategies.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-gray-600 text-lg">
          {[
            "Sales & Marketing",
            "Procurement",
            "Brand Identity",
            "Supplier Coordination",
            "Operations",
            "Technology",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <AiOutlineCheckCircle className="text-blue-500 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Service Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Why Choose Propques?
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            We focus on creating flexible, profitable, and innovative workspace
            solutions tailored to your unique requirements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <AiOutlineFundProjectionScreen className="text-6xl text-green-500" />
                ),
                label: "Strategic Planning",
              },
              {
                icon: <FaChartLine className="text-6xl text-yellow-500" />,
                label: "Performance Tracking",
              },
              {
                icon: <FaRegHandshake className="text-6xl text-purple-500" />,
                label: "Collaborative Support",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                {service.icon}
                <p className="mt-4 text-lg font-semibold text-gray-700">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
