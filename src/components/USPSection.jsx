import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbRocket } from "react-icons/tb";
import { LuRuler } from "react-icons/lu";
import { useRef, useEffect, useState } from "react";

const uspData = [
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg mb-4 animate-iconPop">
                <HiOutlineLightBulb className="text-blue-600 text-3xl" />
            </span>
        ),
        title: "Built smarter",
        story: "We start with innovation, laying the foundation for intelligent spaces.",
        ethic: "Thoughtful design, always."
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg mb-4 animate-iconPop">
                <TbRocket className="text-blue-600 text-3xl" />
            </span>
        ),
        title: "Delivered faster",
        story: "Our agile teams and seamless processes bring visions to life.",
        ethic: "Reliability, every step."
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg mb-4 animate-iconPop">
                <LuRuler className="text-blue-600 text-3xl" />
            </span>
        ),
        title: "Designed to lead",
        story: "We craft environments that inspire, empower, and set new standards.",
        ethic: "Excellence, by design."
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

// FloatingIcon for flying architectural icons
const FlyingIcon = ({ children, className, style }) => (
    <div className={`absolute pointer-events-none ${className}`} style={style}>
        <span className="text-blue-200 opacity-70 drop-shadow-lg" style={{ fontSize: 38 }}>
            {children}
        </span>
    </div>
);

const USPSection = () => {
    return (
        <section className="w-full py-20 px-2 sm:px-6 md:px-10 bg-transparent relative overflow-hidden">
            {/* Flying architectural icons */}
            <FlyingIcon className="animate-float-slow left-8 top-10" style={{ zIndex: 1 }}>
                <HiOutlineLightBulb />
            </FlyingIcon>
            <FlyingIcon className="animate-float-fast right-10 top-32" style={{ zIndex: 1 }}>
                <TbRocket />
            </FlyingIcon>
            <FlyingIcon className="animate-float-dot left-1/2 top-4" style={{ zIndex: 1 }}>
                <LuRuler />
            </FlyingIcon>
            <div className="max-w-6xl mx-auto">
                {/* Tagline as main focus */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                        Our Story, Our Ethos
                    </h2>
                    <p className="block text-xl sm:text-2xl md:text-3xl font-semibold italic text-center mb-6 mt-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-taglineFadeIn max-w-3xl mx-auto px-2">
                        &ldquo;Built smarter. Delivered faster. Designed to lead.&rdquo;
                    </p>
                </div>
                {/* Timeline/Stepper Layout */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-12">
                    {/* Removed animated connector line */}
                    {uspData.map((usp, idx) => {
                        const [ref, inView] = useInView(0.2);
                        return (
                            <div
                                key={idx}
                                ref={ref}
                                className={`group relative z-10 bg-white/70 backdrop-blur-lg border border-blue-100 rounded-3xl px-6 py-10 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-blue-400 w-full max-w-xs ${inView ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}
                                style={{ animationDelay: `${idx * 0.18 + 0.2}s` }}
                            >
                                {/* Animated icon per card, improved visuals */}
                                {idx === 0 && (
                                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg mb-4 animate-iconPop group-hover:animate-bulbLit">
                                        <HiOutlineLightBulb className="text-blue-600 text-3xl group-hover:text-blue-500 group-hover:drop-shadow-bulbLit" />
                                    </span>
                                )}
                                {idx === 1 && (
                                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg mb-4 animate-iconPop relative overflow-visible">
                                        <span className="absolute left-1/2 top-1/2 w-2 h-8 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-60 group-hover:animate-rocketTrail pointer-events-none" style={{ zIndex: 0 }}></span>
                                        <TbRocket className="relative z-10 text-blue-600 text-3xl group-hover:animate-rocketTakeoff2" />
                                    </span>
                                )}
                                {idx === 2 && (
                                    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-lg mb-4 animate-iconPop group-hover:animate-rulerWiggle2">
                                        <LuRuler className="text-blue-600 text-3xl group-hover:text-blue-800" />
                                    </span>
                                )}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-blue-700 transition-colors duration-200">
                                    {usp.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base mb-3 font-medium">
                                    {usp.story}
                                </p>
                                <span className="text-blue-500 text-xs sm:text-sm font-semibold italic opacity-80">
                                    {usp.ethic}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Animations */}
            <style>{`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes taglineFadeIn {
                    0% { opacity: 0; transform: translateY(-30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-taglineFadeIn {
                    animation: taglineFadeIn 1s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes pulseLine {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
                .animate-pulseLine {
                    animation: pulseLine 2s infinite;
                }
                @keyframes iconPop {
                    0% { transform: scale(0.7); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-iconPop {
                    animation: iconPop 0.7s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes dotPulse {
                    0%, 100% { box-shadow: 0 0 0 0 #60a5fa44; }
                    50% { box-shadow: 0 0 0 8px #60a5fa22; }
                }
                .animate-dotPulse {
                    animation: dotPulse 1.5s infinite;
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
                @keyframes bulbLit {
                  0% { filter: drop-shadow(0 0 0px #60a5fa); transform: scale(1); }
                  60% { filter: drop-shadow(0 0 16px #fff) drop-shadow(0 0 8px #60a5fa); transform: scale(1.13); }
                  100% { filter: drop-shadow(0 0 0px #60a5fa); transform: scale(1); }
                }
                .animate-bulbLit {
                  animation: bulbLit 0.7s cubic-bezier(.4,0,.2,1) both;
                }
                .group:hover .drop-shadow-bulbLit {
                  filter: drop-shadow(0 0 18px #fff) drop-shadow(0 0 10px #60a5fa);
                  transition: filter 0.3s;
                }
                @keyframes rocketTakeoff2 {
                  0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
                  30% { transform: translateY(-10px) scale(1.08) rotate(-8deg); }
                  60% { transform: translateY(-40px) scale(1.13) rotate(2deg); }
                  100% { transform: translateY(-60px) scale(1.1) rotate(0deg); opacity: 0.3; }
                }
                .animate-rocketTakeoff2 {
                  animation: rocketTakeoff2 0.9s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes rocketTrail {
                  0% { opacity: 0; height: 0; background: linear-gradient(to bottom, #60a5fa 0%, transparent 100%); }
                  40% { opacity: 0.6; height: 1.5rem; }
                  100% { opacity: 0; height: 2.5rem; background: linear-gradient(to bottom, #60a5fa 0%, transparent 100%); }
                }
                .animate-rocketTrail {
                  animation: rocketTrail 0.9s cubic-bezier(.4,0,.2,1) both;
                  background: linear-gradient(to bottom, #60a5fa 0%, transparent 100%);
                  border-radius: 0.5rem;
                }
                @keyframes rulerWiggle2 {
                  0% { transform: rotate(0deg) scale(1); }
                  15% { transform: rotate(-18deg) scale(1.08); }
                  35% { transform: rotate(16deg) scale(1.12); }
                  55% { transform: rotate(-12deg) scale(1.09); }
                  75% { transform: rotate(10deg) scale(1.06); }
                  100% { transform: rotate(0deg) scale(1); }
                }
                .animate-rulerWiggle2 {
                  animation: rulerWiggle2 0.7s cubic-bezier(.4,0,.2,1) both;
                }
            `}</style>
        </section>
    );
};

export default USPSection; 