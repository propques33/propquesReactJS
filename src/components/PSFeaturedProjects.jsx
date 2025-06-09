import React, { useState, useRef, useEffect } from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiOfficeChairLight } from "react-icons/pi";
import { TbRulerMeasure, TbLayout2 } from "react-icons/tb";
import ps8 from '../assets/ps8.png'
import ps9 from '../assets/ps7.png'
import ps10 from '../assets/ps6.png'
import ps11 from '../assets/ps5.png'
import ps12 from '../assets/ps4.png'

const projects = [
  {
    title: "Modern Tech Office",
    category: "Corporate",
    image: ps8
  },
  {
    title: "Premium Coworking Hub",
    category: "Coworking",
    image: ps9
  },
  {
    title: "Startup Incubator Space",
    category: "Coworking",
    image: ps10
  },
  {
    title: "Creative Agency",
    category: "Corporate",
    image: ps11
  }
];


const FeaturedProjects = ({ onOpenModal }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [zoomedIn, setZoomedIn] = useState(true);
  const total = projects.length;
  const goTo = (idx) => setCurrent((idx + total) % total);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Automated zoom in/out and slide switch
  useEffect(() => {
    if (isHovered) return;
    setZoomedIn(true);
    // Zoom in for 5.5s, then zoom out for 1s, then switch
    const zoomOutTimer = setTimeout(() => setZoomedIn(false), 5500);
    const switchTimer = setTimeout(() => {
      setZoomedIn(true); // Prepare for next slide
      next();
    }, 6500);
    return () => {
      clearTimeout(zoomOutTimer);
      clearTimeout(switchTimer);
    };
  }, [current, isHovered]);

  return (
<section id="featured-projects" className="relative min-h-[60vh] py-20 px-2 sm:px-6 md:px-10 bg-gradient-to-br from-gray-200 to-blue-200 overflow-hidden">
      {/* Floating animated architectural icons */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Rounded heading */}
          <div className="inline-block bg-white backdrop-blur-sm text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown mb-4">
            Our Featured Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Featured Projects in Lucknow</h2>
          <p className="text-gray-600">
            Browse through some of our recent office interior design projects completed across Lucknow.
          </p>
        </div>
        {/* Slider */}
        <div
          className="relative flex flex-col items-center justify-center w-full max-w-3xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
          <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center overflow-visible rounded-3xl shadow-2xl bg-white/70 backdrop-blur-lg">
            {projects.map((project, idx) => {
              // Calculate position relative to current
              let offset = idx - current;
              if (offset < -1) offset += total;
              if (offset > 1) offset -= total;
              let isCurrent = offset === 0;
              let isPrev = offset === -1 || (current === 0 && idx === total - 1);
              let isNext = offset === 1 || (current === total - 1 && idx === 0);
              let style = {
                transition: 'all 0.7s cubic-bezier(.4,0,.2,1)',
                zIndex: isCurrent ? 30 : 10,
                opacity: isCurrent ? 1 : 0.7,
                pointerEvents: isCurrent || isPrev || isNext ? 'auto' : 'none',
                cursor: isPrev || isNext ? 'pointer' : 'default',
              };
              if (isCurrent) style.transform = 'translateX(0) scale(1)';
              if (isPrev) style.transform = 'translateX(-45%) scale(0.5)';
              if (isNext) style.transform = 'translateX(45%) scale(0.5)';
              if (!isCurrent && !isPrev && !isNext) style = { ...style, opacity: 0, transform: 'scale(0.7)', zIndex: 0 };
              return (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 w-full h-full group overflow-hidden`}
                  style={style}
                  onClick={() => {
                    if (isPrev) prev();
                    if (isNext) next();
                  }}
                >
                  <div className="w-full h-full overflow-hidden rounded-3xl relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover absolute top-0 left-0 transition-transform ${isCurrent && zoomedIn ? 'scale-[1.3]' : 'scale-100'}`}
                      style={{ transition: isCurrent ? `transform ${zoomedIn ? '5.5s' : '1s'} cubic-bezier(0.4,0,0.2,1)` : 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' }}
                      draggable={false}
                    />
                    {/* Overlay info only for current */}
                    {isCurrent && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 rounded-3xl">
                        <span className="text-white/70 text-sm mb-1">{project.category}</span>
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {/* Slider Buttons */}
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 shadow transition-all z-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 6-6 6 6 6" /></svg>
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 shadow transition-all z-40">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 6 6 6-6 6" /></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {projects.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-blue-600 scale-110' : 'bg-white hover:bg-blue-400'}`}></button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center">
  <button
    onClick={onOpenModal}
    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
  >
    View More Projects
  </button>
</div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUpCard {
          0% { opacity: 0; transform: translateY(40px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeInUpCard {
          animation: fadeInUpCard 0.9s cubic-bezier(.4,0,.2,1) both;
        }
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

export default FeaturedProjects;
