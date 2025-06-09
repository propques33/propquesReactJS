import React, { useEffect, useState, useRef, memo } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineArchitecture, MdOutlineSquareFoot, MdOutlineVerifiedUser } from "react-icons/md";
import sampleImg from "../assets/ps3.png";

const Counter = memo(({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startValue = 0;
    let endValue = end;
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef} className="text-3xl font-bold text-blue-600">
      {count}{suffix}
    </span>
  );
});

// Memoized StatItem component
const StatItem = memo(({ icon: Icon, count, suffix, label }) => (
  <div className="flex flex-col items-center min-w-[120px]">
    <span className="flex items-center gap-2 mb-1">
      <span className="flex items-center justify-center bg-blue-50 rounded-full p-2.5">
        <Icon className="text-blue-600 text-xl md:text-2xl" />
      </span>
      <span className="text-blue-600 text-xl md:text-2xl font-semibold">
        <Counter end={count} suffix={suffix} duration={2000} />
      </span>
    </span>
    <span className="text-xs md:text-sm text-gray-500 font-medium">{label}</span>
  </div>
));

// Memoized Button component
const Button = memo(({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
});

const HeroSection = ({ onOpenModal }) => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen py-20 pt-32 relative overflow-hidden px-4 sm:px-6 md:px-10  ">
      {/* Enhanced background gradient and glass overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* More neutral, less blue gradient */}
        <div className="w-full h-full " />
        {/* Glassmorphic overlay for depth */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
        {/* Subtle geometric SVG shape for architectural vibe */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 opacity-15" width="900" height="400" viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="450" cy="200" rx="400" ry="120" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(450 200) scale(400 120)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.10" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 h-full relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown">
              Premium Office Design Solutions
            </div>

            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight poppins-regular animate-slideUp">
                Designing Future-Ready <br />
                <span className="text-blue-600 relative inline-block group cursor-pointer">
                  Workspaces
                  <span className="absolute -bottom-2 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-underline group-hover:w-0 group-hover:animate-underline"></span>
                  <span className="absolute -bottom-2 left-0 w-0 h-1.5 bg-blue-200 rounded-full opacity-50 group-hover:animate-underline-slow"></span>
                </span>
              </h1>

              <p className="pt-4 text-base sm:text-lg text-gray-600 max-w-xl animate-slideUp delay-200">
                Creating inspiring environments that boost productivity and foster collaboration for modern businesses.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slideUp delay-300 justify-center lg:justify-start">
            <Button variant="primary" className="group" onClick={onOpenModal}>
              Get Free Consultation
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" onClick={scrollToProjects}>
              View Our Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="w-full flex justify-center lg:justify-start mt-12">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-8 items-start justify-start">
              <StatItem
                icon={MdOutlineArchitecture}
                count={98}
                suffix="+"
                label="Projects Delivered"
              />
              <StatItem
                icon={MdOutlineSquareFoot}
                count={2500}
                suffix="k+"
                label="Sq Ft Designed"
              />
              <StatItem
                icon={MdOutlineVerifiedUser}
                count={98}
                suffix="%"
                label="Happy Clients"
              />
            </div>
          </div>
        </div>

        {/* Right Image with Badge */}
        <div className="relative flex-1">
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={sampleImg}
                alt="Office Design"
                className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[450px] lg:h-[500px] scale-105 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl flex gap-3 sm:gap-4 items-start max-w-xs backdrop-blur-sm bg-white/90 animate-slideUp delay-500">
              <div className="bg-blue-100 text-blue-600 p-2.5 sm:p-3 rounded-full">
                <BsBuildings size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base sm:text-lg">Turnkey Solutions</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  End-to-end office solutions from design to execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes underline {
          0% { width: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 100%; opacity: 1; }
        }
        @keyframes underline-slow {
          0% { width: 0; opacity: 0; }
          50% { opacity: 0.5; }
          100% { width: 100%; opacity: 0.5; }
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-underline {
          animation: underline 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
        }
        .animate-underline-slow {
          animation: underline-slow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.4s;
        }
        .group:hover .animate-underline {
          animation: underline 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .group:hover .animate-underline-slow {
          animation: underline-slow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </section>
  );
};

export default memo(HeroSection);
