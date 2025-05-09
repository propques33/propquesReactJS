import React from "react";
import { FiGrid, FiTool } from "react-icons/fi";

const processSteps = [
  {
    icon: <FiGrid size={24} />,
    title: "Design Consultation",
    desc: "We begin with a thorough consultation to understand your requirements, brand identity, and workspace goals.",
  },
  {
    icon: <FiGrid size={24} />,
    title: "Concept Development",
    desc: "Our designers create detailed 2D layouts and 3D visualizations to help you envision your new space.",
  },
  {
    icon: <FiGrid size={24} />,
    title: "Project Planning",
    desc: "We develop a comprehensive project plan including timelines, material selection, and budget optimization.",
  },
  {
    icon: <FiTool size={24} />,
    title: "Execution & Delivery",
    desc: "Our skilled team handles the complete execution, ensuring quality control at every step.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our End-to-End Process
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We provide comprehensive service from initial concept to final execution, ensuring a smooth and stress-free experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
          >
            <div className="bg-gray-200 inline-block p-3 rounded-md text-gray-800 mb-4">
              {step.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
