import React from "react";

// Placeholder logos (replace with real brand logos as needed)
const logos = [
    "https://via.placeholder.com/120x60?text=Brand+1",
    "https://via.placeholder.com/120x60?text=Brand+2",
    "https://via.placeholder.com/120x60?text=Brand+3",
    "https://via.placeholder.com/120x60?text=Brand+4",
    "https://via.placeholder.com/120x60?text=Brand+5",
    "https://via.placeholder.com/120x60?text=Brand+6",
    "https://via.placeholder.com/120x60?text=Brand+7",
    "https://via.placeholder.com/120x60?text=Brand+8",
];

const TrustedClients = () => {
    return (
        <section className="w-full py-16 px-2 sm:px-6 md:px-10 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 tracking-tight animate-fadeInUp">
                    Trusted by Leading Brands
                </h2>
                <div className="relative overflow-hidden">
                    {/* Auto-scrolling slider */}
                    <div className="flex items-center gap-8 animate-logoScroll will-change-transform">
                        {[...logos, ...logos].map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 bg-white/70 backdrop-blur-lg border border-blue-100 rounded-xl shadow-md px-6 py-4 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                                style={{ minWidth: 140, minHeight: 80 }}
                            >
                                <img
                                    src={logo}
                                    alt={`Brand ${idx + 1}`}
                                    className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Animations */}
            <style>{`
        @keyframes logoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logoScroll {
          animation: logoScroll 28s linear infinite;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
        </section>
    );
};

export default TrustedClients; 