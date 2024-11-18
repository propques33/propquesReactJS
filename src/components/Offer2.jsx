import React from "react";
import {
  FaCheckCircle,
  FaChartBar,
  FaHandsHelping,
  FaIndustry,
  FaUsers,
  FaBullseye,
  FaHandshake,
  FaTachometerAlt,
  FaFileInvoiceDollar, 
  FaClipboardCheck, 
} from "react-icons/fa";
import Button from "./Button";

// Array of service items with corresponding icon and text
const services = [
  {
    icon: <FaBullseye className="text-blue-500 text-4xl mb-2" />,
    title: "Business model feasibility",
    description:
      "We help you create a coworking brand tailored to your market and property.",
  },
  {
    icon: <FaChartBar className="text-blue-500 text-4xl mb-2" />,
    title: "Feasibility Analysis",
    description: "We evaluate local demand, competition, and ROI potential.",
  },
  {
    icon: <FaTachometerAlt className="text-blue-500 text-4xl mb-2" />,
    title: "Demand Analysis",
    description:
      "We help you estimate demand in micro-markets using proprietary data.",
  },
  {
    icon: <FaIndustry className="text-blue-500 text-4xl mb-2" />,
    title: "Sellable Layouts",
    description:
      "We design layouts that maximize space potential and attract clients.",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 text-4xl mb-2" />,
    title: "Marketing management",
    description: "From website development to marketing, we handle it all.",
  },
  {
    icon: <FaHandsHelping className="text-blue-500 text-4xl mb-2" />,
    title: "Operation management",
    description: "We manage operations so you can focus on growth.",
  },
  {
    icon: <FaUsers className="text-blue-500 text-4xl mb-2" />,
    title: "Sales Management",
    description: "We ensure high occupancy rates with regular clients.",
  },
  // {
  //   icon: <FaHandshake className="text-blue-500 text-4xl mb-2" />,
  //   title: "Marketing management",
  //   description: "We connect you with top coworking brands for partnerships.",
  // },
  {
    icon: <FaFileInvoiceDollar className="text-blue-500 text-4xl mb-2" />,
    title: "Financial Modelling",
    description:
      "Explore how coworking models can fit your vacant space with a sample P&L based on real data from coworking spaces in India.",
  },
  {
    icon: <FaClipboardCheck className="text-blue-500 text-4xl mb-2" />,
    title: "Business audit",
    description:
      "Our business audit enhances space profitability through a review of your business model, operations, community, and KPIs, with actionable insights and support.",
  },
];

const Offer = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 bg-[#3b82f6] rounded-t-[100px] mt-20">
      {/* Main Heading */}
      <div className="flex flex-col items-center space-y-8">
        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-snug">
            Leverage Our Expertise in Coworking Consultancy
          </h1>
          <p className="text-zinc-100 md:text-xl  md:px-64  ">
            We are{" "}
            <span className="font-bold underine text-2xl">India’s only</span>{" "}
            coworking consultancy that offers comprehensive services to help you
            build or partner with a coworking brand. Here’s what we do:
          </p>
        </div>

        {/* List of Services */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center w-full">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center text-lg w-full flex-col border-2 border-[#3b82f6] rounded-lg p-4 sm:p-6 bg-white hover:scale-105 hover:rounded-2xl transition-all"
            >
              {service.icon}
              <span className="font-semibold text-zinc-900 text-center capitalize mt-2">
                {service.title}
              </span>
              <p className="text-gray-700 text-center mt-2 text-sm sm:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Button */}
        {/* <div className="mt-6">
          <Button name="Submit Your Interest" />
        </div> */}
      </div>
    </div>
  );
};

export default Offer;
