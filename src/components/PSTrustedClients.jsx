import React from "react";
import cubilogo from "/cubilogo.png";
import summit from "/summit.png";
import { BsBuilding } from "react-icons/bs";

const TrustedClients = () => {
  const logos = [
    cubilogo,
    summit,
    "https://www.karyasthal.com/wp-content/uploads/2022/06/logo-2.png.webp",
    "https://worqspot.com/wp-content/uploads/2023/06/LogoAsset-1.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-ZcsX9pV17OshYBnyieg1C_0-ADQ9qzO2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMeMERTE_nqSagKZl60UwHcWw--o-Qj2UEQ&s"
  ];

  return (
    <section className="min-h-[60vh] py-20 bg-gradient-to-br from-gray-200 to-blue-200 px-0 sm:px-0 md:px-0 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown mb-4">
            Our Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slideUp">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-slideUp delay-200">
            We've helped startups, established businesses, and multinational corporations create their ideal
            workspaces in Lucknow and beyond.
          </p>
        </div>
      </div>

      {/* Full-width Infinite Scroll Container */}
      <div className="w-full overflow-hidden bg-white/30 backdrop-blur-sm py-8">
        <div className="flex animate-scroll gap-8 px-4">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:scale-105 group relative overflow-hidden"
              style={{ minWidth: 200, minHeight: 120 }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm"></div>

              {/* Logo directly, no inner white box */}
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className={`relative z-10 max-h-16 max-w-[140px] w-auto h-auto object-contain transition-all duration-500 ${logo.includes('Sm-ZcsX9pV17OshYBnyieg1C_0-ADQ9qzO2g') || logo.includes('RMMeMERTE_nqSagKZl60UwHcWw--o-Qj2UEQ') ? 'scale-125' : ''
                  }`}
                loading="lazy"
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.07))",
                  margin: "auto"
                }}
              />

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:scale-105 group relative overflow-hidden"
              style={{ minWidth: 200, minHeight: 120 }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm"></div>

              {/* Logo directly, no inner white box */}
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className={`relative z-10 max-h-16 max-w-[140px] w-auto h-auto object-contain transition-all duration-500 ${logo.includes('Sm-ZcsX9pV17OshYBnyieg1C_0-ADQ9qzO2g') || logo.includes('RMMeMERTE_nqSagKZl60UwHcWw--o-Qj2UEQ') ? 'scale-125' : ''
                  }`}
                loading="lazy"
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.07))",
                  margin: "auto"
                }}
              />

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </section>
  );
};

export default TrustedClients;
