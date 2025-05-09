import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import teamImg from "../../public/cubii2.jpg"; // Replace with your image path

const reasons = [
  {
    title: "Turnkey Solutions",
    desc: "From design to execution, we handle everything so you can focus on your business.",
  },
  {
    title: "Local Expertise",
    desc: "Deep understanding of Lucknow's business environment and regulations.",
  },
  {
    title: "On-Time Delivery",
    desc: "We understand the importance of deadlines and deliver projects on schedule.",
  },
  {
    title: "Budget Optimization",
    desc: "Maximize value while keeping costs under control through smart design solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Leading Businesses in Lucknow Choose Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl">
            With years of experience designing and executing office spaces in Lucknow, we understand the local market, regulations, and business needs better than anyone.
          </p>

          {/* Reason Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-2 mb-2">
                  <div className="bg-gray-200 p-1.5 rounded-md text-gray-700">
                    <BsCheck2 size={18} />
                  </div>
                  <h4 className="font-semibold text-gray-800">{reason.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 text-sm font-medium">
            Schedule a Consultation
          </button>
        </div>

        {/* Right: Image with Badge */}
        <div className="relative">
          <img
            src={teamImg}
            alt="Expert Team"
            className="w-full rounded-xl shadow-md object-cover h-[400px]"
          />
          <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-start gap-3 max-w-sm">
            <div className="flex gap-1">
              <span className="w-4 h-4 bg-gray-300 rounded-full" />
              <span className="w-4 h-4 bg-gray-300 rounded-full" />
              <span className="w-4 h-4 bg-gray-300 rounded-full" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 flex items-center gap-1">
                50+ Expert Team <FaUserFriends className="text-blue-600 ml-1" />
              </h4>
              <p className="text-sm text-gray-600">
                Our team of designers, architects, and project managers work together to deliver exceptional results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
