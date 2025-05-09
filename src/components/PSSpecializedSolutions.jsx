import React from "react";
import { BsBuilding, BsPeople, BsGear } from "react-icons/bs";

const solutions = [
  {
    icon: <BsBuilding size={28} className="text-blue-600" />,
    title: "Corporate Office Solutions",
    description:
      "Create impressive, functional workspaces that reflect your company’s brand identity and values. Our corporate solutions include:",
    points: [
      "Custom office layouts optimized for team productivity",
      "Executive cabins and meeting rooms that leave an impression",
      "Branded reception areas that welcome clients",
      "Collaborative spaces that foster innovation",
    ],
    image: "https://your-image-url-1.jpg", // Replace with actual image
  },
  {
    icon: <BsPeople size={28} className="text-blue-600" />,
    title: "Coworking Space Design",
    description:
      "Create vibrant, flexible spaces that attract members and maximize revenue potential. Our coworking solutions include:",
    points: [
      "Flexible open workspaces that adapt to changing needs",
      "Private offices and meeting pods for focused work",
      "Community areas that foster networking and collaboration",
      "Smart space utilization to maximize revenue per square foot",
    ],
    image: "https://your-image-url-2.jpg", // Replace with actual image
  },
  {
    icon: <BsGear size={28} className="text-blue-600" />,
    title: "Turnkey Fit-Outs",
    description:
      "Hassle-free delivery of complete office interiors. We manage every detail from concept to completion:",
    points: [
      "Design, planning, and execution by a single team",
      "Efficient timelines and clear communication",
      "Procurement of furniture and materials",
      "Fully operational handover with zero stress",
    ],
    image: "https://your-image-url-3.jpg", // Replace with actual image
  },
];

const SpecializedSolutions = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Specialized Solutions For Every Business
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We understand the unique needs of different business environments and deliver tailored solutions
          for each client type.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {solutions.map((sol, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 text-left space-y-4 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">{sol.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{sol.title}</h3>
            <p className="text-gray-600 text-sm">{sol.description}</p>
            <ul className="list-inside space-y-2 text-sm text-gray-700">
              {sol.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <img
              src={sol.image}
              alt={sol.title}
              className="rounded-lg w-full h-40 object-cover mt-3"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializedSolutions;
