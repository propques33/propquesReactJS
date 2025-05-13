import React, { useRef, useEffect, useState } from "react";
import { LuPenLine } from "react-icons/lu"; // Design Consultation
import { TbLayout2 } from "react-icons/tb"; // Concept Development
import { HiOutlineClipboardList } from "react-icons/hi"; // Project Planning
import { LiaToolsSolid } from "react-icons/lia"; // Execution & Delivery
import { FiArrowUpRight } from "react-icons/fi";

const processSteps = [
  {
    icon: <LuPenLine size={32} className="text-blue-700" />,
    title: "Consultation & Analysis",
    desc: "We start by understanding your business needs, workflow, and vision to create a personalized design approach.",
  },
  {
    icon: <TbLayout2 size={32} className="text-blue-700" />,
    title: "Smart Design Planning",
    desc: "Our team develops modular and tech-integrated designs that maximize efficiency and adaptability.",
  },
  {
    icon: <HiOutlineClipboardList size={32} className="text-blue-700" />,
    title: "Virtual Visualization",
    desc: "Experience your space before construction using AR/VR walkthroughs and immersive 3D models.",
  },
  {
    icon: <LiaToolsSolid size={32} className="text-blue-700" />,
    title: "Prefab Manufacturing",
    desc: "Custom modular components are precision-manufactured in our facility for quality control.",
  },
  {
    icon: <HiOutlineClipboardList size={32} className="text-blue-700" />,
    title: "Rapid Installation",
    desc: "Our experienced team ensures quick and precise assembly of all components with minimal disruption.",
  },
  {
    icon: <LiaToolsSolid size={32} className="text-blue-700" />,
    title: "Smart Integration & Handover",
    desc: "We implement technology features and provide comprehensive training before final handover.",
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

const ProcessSection = ({ onOpenModal }) => {
  return (
    <section className="relative min-h-[60vh] py-20 px-2 sm:px-6 md:px-10 bg-gradient-to-br from-gray-200 to-blue-200 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-14 relative z-10">
        <div className="inline-block bg-white blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown mb-4">
          Our Process Flow
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
        Our 6 Steps Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-200">
          We provide comprehensive service from initial concept to final execution, ensuring a smooth and stress-free experience.
        </p>
      </div>

      {/* Timeline/Stepper */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 max-w-6xl mx-auto z-10">
        {processSteps.map((step, idx) => {
          const [ref, inView] = useInView(0.2);
          return (
            <div key={idx} ref={ref} className={`relative flex-1 flex flex-col items-center group transition-all duration-300 ${inView ? 'animate-slideUp' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${idx * 120}ms` }}>
              {/* Connector line (except last step) */}
              {idx !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-1 z-0">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 opacity-60"></div>
                </div>
              )}
              {/* Step Card */}
              <div className="relative bg-white backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl px-7 py-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 hover:border-blue-400 min-w-[220px] max-w-xs mx-auto hover:z-20">
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg border-4 border-white animate-fadeIn">
                  {idx + 1}
                </div>
                {/* Icon with faint SVG background */}
                <div className="relative mb-4 flex items-center justify-center">
                  {/* SVG geometric pattern */}
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-15 text-blue-200 pointer-events-none" fill="none" viewBox="0 0 64 64">
                    <pattern id={`grid${idx}`} width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                    <rect width="64" height="64" fill={`url(#grid${idx})`} />
                  </svg>
                  <span className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 shadow group-hover:animate-iconBounce">
                    {step.icon}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <button
              className="group bg-blue-600 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all duration-300 text-base"
              onClick={onOpenModal}
            >
              Get A Free Quote
              <FiArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-xl" />
            </button>
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
        @keyframes iconBounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.18) translateY(-6px); }
          60% { transform: scale(0.95) translateY(2px); }
          100% { transform: scale(1); }
        }
        .animate-iconBounce {
          animation: iconBounce 0.6s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
