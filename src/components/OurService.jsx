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
import { MdOutlineBusinessCenter } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";
import blogbanner from '../../public/blog-banner.webp'

const OurServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className=" font-sans md:mt-0 mt-20">
      {/* Hero Section */}
      <section className=" text-wite px-6 md:pt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side: Text Content */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">
              Maximize Your Space Potential
            </h1>
            <p className="text-lg">
              Boost your ROI and drive a 3x increase in revenue on an
              underperforming space.
            </p>
            <p className="text-lg">
              Create your business model and strategic plan with Propques today.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="relative">
            <img
              src={blogbanner}
              alt="Workspace Optimization"
              className="w-full rounded-lg shadowlg"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUsers className="text-6xl text-blue-500 mb-4" />,
              label: "Research & Development",
              description:
                "Innovative solutions tailored to optimize workspace efficiency.",
            },
            {
              icon: <FaChartLine className="text-6xl text-green-500 mb-4" />,
              label: "Feasibility & Floor Plans",
              description:
                "Custom floor plans that maximize tenant satisfaction and ROI.",
            },
            {
              icon: (
                <FaClipboardList className="text-6xl text-yellow-500 mb-4" />
              ),
              label: "Monitoring & Management",
              description:
                "End-to-end operational management for seamless execution.",
            },
            {
              icon: (
                <FaRegHandshake className="text-6xl text-purple-500 mb-4" />
              ),
              label: "Team Training & Support",
              description:
                "Comprehensive training programs to empower your team.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center   p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.label}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Monitoring & Management Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Monitoring & Management
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Leverage our expertise in coworking business operations, from
          day-to-day tasks to long-term growth strategies.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-gray-700 text-lg">
          {[
            "Sales & Marketing",
            "Procurement",
            "Brand Identity",
            "Supplier Coordination",
            "Operations",
            "Technology",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              <AiOutlineCheckCircle className="text-blue-500 mr-2 text-2xl" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100  py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
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
                  <AiOutlineFundProjectionScreen className="text-6xl text-green-500 mb-4" />
                ),
                label: "Strategic Planning",
                description:
                  "Customized plans to maximize your space potential.",
              },
              {
                icon: <FaChartLine className="text-6xl text-yellow-500 mb-4" />,
                label: "Performance Tracking",
                description:
                  "Real-time analytics to keep your growth on track.",
              },
              {
                icon: (
                  <FaRegHandshake className="text-6xl text-purple-500 mb-4" />
                ),
                label: "Collaborative Support",
                description:
                  "Empowering partnerships to ensure shared success.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.label}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 bg-gray-100 px-4 md:px-8 lg:px-32">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Perks with Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <MdOutlineBusinessCenter className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold">
              Future Proof on ROI
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              To reduce productivity loss and maximize ROI, our process places a
              strong emphasis on design.
            </p>
          </div>
          <div className="text-center">
            <HiOutlineUsers className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold">Efficient Team</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We construct spaces with the prospect of evolution, whether you're
              making plans for two, five, or ten years in the future.
            </p>
          </div>
          <div className="text-center">
            <BiBuildingHouse className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold ">
              Industry Experience
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Our strategy enables you to attract and retain talent by
              prioritizing the end-users of the space.
            </p>
          </div>
          {/* <div className="text-center">
            <FaThumbsUp className="text-5xl md:text-6xl mb-4 text-blue-500 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold capitalized">industry experience</h3>
            <p className="text-gray-600 text-sm md:text-base">
              To reduce expenses, we merge our design and strategy into a single framework.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default OurServicesPage;
 