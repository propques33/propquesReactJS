import React, { useRef, useEffect, useState } from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiOfficeChairLight } from "react-icons/pi"; // Chair icon for coworking
import { BsCheck2Circle } from "react-icons/bs";

const solutions = [
  {
    icon: <MdOutlineBusinessCenter size={32} className="text-blue-700 drop-shadow-md" />,
    image: "https://plus.unsplash.com/premium_photo-1661964030420-15481be20d5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbW1lcmNpYWwlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D",
    title: "Small Workspace Design",
    size: "Size: 500 - 5000 Sqft",
    description: "Custom-made, Compact, Tailored Workspaces",
    points: [
      "Space Optimization & Planning",
      "Custom Furniture & Storage Units",
      "Concept Design & 3D Views",
      "Material & Fixture Selection",
      "Execution Advisory or Turnkey Fit-Out",
    ],
  },
  {
    icon: <PiOfficeChairLight size={32} className="text-blue-700 drop-shadow-md" />,
    image: "https://images.unsplash.com/photo-1614070776241-fb47cec38278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvd29ya2luZyUyMHNwYWNlfGVufDB8fDB8fHww",
    title: "Coworking Workspace Design",
    size: "Size: 5000 Sqft+",
    description: "Agile & Collaborative workspaces for community",
    points: [
      "User Flow & Functional Zoning",
      "Modular Pods & Booth Design",
      "Furniture Systemization & Customization",
      "Tech Integration Planning",
      "Brand Experience Design",
    ],
  },
  {
    icon: <HiOutlineOfficeBuilding size={32} className="text-blue-700 drop-shadow-md" />,
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Corporate Workspace Design",
    size: "Size: 5000 Sqft+",
    description: "Enterprise-Grade Interior Systems",
    points: [
      "Departmental Layout & Flow Strategy",
      "Boardroom, CXO & Collaboration Zones",
      "Lighting, HVAC & Data Infrastructure Design",
      "Procurement & Vendor Management",
      "End-to-End Project Execution",
    ],
  },
];



// Custom hook to detect if an element is in view
function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}



const SpecializedSolutions = () => {
  return (
    <section className="relative py-20 px-2 sm:px-6 md:px-10 bg-transparent overflow-hidden">
      
      <div className="max-w-7xl mx-auto text-center mb-14 relative z-10">
        {/* Rounded heading */}
        <div className="inline-block bg-blue-100/80 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown mb-4">
          Our Specialized Solutions
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
        Specialized Design Solutions for Modern Workspaces
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-200">
          We understand the unique needs of different business environments and deliver tailored solutions for each client type.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {solutions.map((sol, index) => {
          const [ref, inView] = useInView(0.2);
          return (
            <div
              key={index}
              ref={ref}
              className={`group bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-xl p-0 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-[1.04] hover:border-blue-400 relative overflow-hidden border-2 ${inView ? 'animate-slideUp' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Image with icon overlay */}
              <div className="relative w-full h-44 overflow-hidden rounded-t-3xl">
                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute left-4 top-4 bg-white/80 rounded-xl p-2 shadow-md flex items-center justify-center">
                  {sol.icon}
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 p-7">
                {/* Title - more prominent, blue gradient, shadow, underline */}
                <h3 className="text-2xl md:text-2.5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
                  {sol.title}
                </h3>
                <p className="text-sm text-blue-500 font-semibold italic mb-1">{sol.size}</p>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 mb-2" />
                {/* Description */}
                <p className="text-gray-600 text-sm mb-2">
                  {sol.description}
                </p>
                {/* Points */}
                <ul className="space-y-2 w-full">
                  {sol.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <BsCheck2Circle className="text-blue-500" size={18} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Subtle glass shine on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-2xl"></div>
              </div>
              {/* Border animation overlay */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 animate-borderPulse"></span>
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes borderPulse {
          0%, 100% { box-shadow: 0 0 0 0 #60a5fa44; }
          50% { box-shadow: 0 0 0 8px #60a5fa22; }
        }
        .animate-fadeIn { animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-slideUp { animation: slideUp 0.9s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: 200ms; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animate-borderPulse { animation: borderPulse 2s infinite; }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.08); }
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.12); }
        }
        .animate-float-fast {
          animation: floatFast 4.5s ease-in-out infinite;
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(12px) scale(0.95); }
        }
        .animate-float-dot {
          animation: floatDot 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SpecializedSolutions;
