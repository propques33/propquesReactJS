import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi"; // Built Smarter
import { TbRocket } from "react-icons/tb"; // Delivered Faster
import { LuRuler } from "react-icons/lu"; // Designed to Lead
import { BsPeople } from "react-icons/bs"; // Client-Centric
import { FiArrowUpRight } from "react-icons/fi";
import teamImg from "../../public/cubii2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/gallery-6.jpeg";
import img2 from "../assets/ps2.png";
import img3 from "../assets/ps1.png";

const images = [
  "https://myspacetime.in/assets/img/SPACETIME-44-62231.webp",img2,img3
];


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  draggable: true,
  arrows: false,
};

const reasons = [
  {
    icon: <HiOutlineLightBulb size={28} className="text-blue-700" />, // Built Smarter
    title: "Built Smarter",
    desc: "Innovative, intelligent, future-ready spaces.",
  },
  {
    icon: <TbRocket size={28} className="text-blue-700" />, // Delivered Faster
    title: "Delivered Faster",
    desc: "Agile teams. Seamless, reliable delivery.",
  },
  {
    icon: <LuRuler size={28} className="text-blue-700" />, // Designed to Lead
    title: "Designed to Lead",
    desc: "Inspiring, empowering, industry-leading design.",
  },
  {
    icon: <BsPeople size={28} className="text-blue-700" />, // Client-Centric
    title: "End-to-End Partnership",
    desc: "Guidance at every step, stress-free experience.",
  },
];

const FloatingShape = ({ className, style }) => (
  <div className={`absolute pointer-events-none ${className}`} style={style}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <rect x="10" y="10" width="40" height="40" rx="12" fill="#e0e7ef" fillOpacity="0.7" />
    </svg>
  </div>
);

const WhyChooseUs = ({ onOpenModal }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floating shapes for architectural vibe */}
      {/* <FloatingShape className="animate-float-slow left-8 top-10" style={{ zIndex: 1 }} />
      <FloatingShape className="animate-float-fast right-10 top-32" style={{ zIndex: 1 }} />
      <FloatingShape className="animate-float-dot left-1/2 top-4" style={{ zIndex: 1 }} /> */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start px-4 sm:px-8 md:px-12 relative z-10">
        {/* Left: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Rounded heading */}
          <span className=" bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown mb-4 text-center">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Why Choose <span className="text-blue-600">Propques Studio</span> as
            Office Design Expert?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl animate-fadeIn delay-200">
            Discover what sets us apart in the world of workspace design and delivery.
          </p>
          {/* Reason Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-0">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-lg p-6 flex flex-col gap-2 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] animate-fadeInUp"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 shadow">
                    {reason.icon}
                  </span>
                  <h4 className="font-semibold text-gray-900 text-lg tracking-tight">
                    {reason.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image with Cinematic Badge and Button */}
<div className="w-full lg:w-1/2 flex flex-col items-start justify-center animate-fadeInUp delay-300 mt-10 lg:mt-0 gap-16">
  <div className=" overflow-hidden rounded-3xl shadow-2xl group w-full  relative">
    <Slider {...sliderSettings}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className="rounded-3xl w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
        />
      ))}
    </Slider>

     
    </div>
{/* Cinematic floating badge */}
<div className="absolute bottom-20 -left-4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl flex gap-4 items-center max-w-xs animate-fadeInUp delay-500">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <BsPeople size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base sm:text-lg">50+ Expert Team</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                  Designers, architects, and project managers delivering exceptional results
                </p>
              </div>
            </div>
  {/* Schedule a Consultation Button - below image */}
  <div className="mt-10 w-full flex justify-center">
    <button
      className="group bg-blue-600 text-white px-7 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-all duration-300 text-base"
      onClick={onOpenModal}
    >
      Schedule a Consultation
      <FiArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-xl" />
    </button>
  </div>
</div>
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both;
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

export default WhyChooseUs;
