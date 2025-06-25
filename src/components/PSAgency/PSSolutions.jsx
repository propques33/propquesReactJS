import React, { useRef, useState } from 'react';
import { Button } from "../ui/button";
import { ArrowRight, Calendar, CheckCircle, Sparkles } from "lucide-react";

const checklist = [
  "Free 45-minute audit",
  "Custom growth roadmap",
  "No-obligation consultation",
  "Industry benchmarks"
];

const PSSolutions = () => {
  const cardRef = useRef(null);
  const [gridOffset, setGridOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Map mouse position to a small offset range for subtle movement
    const offsetX = ((x / rect.width) - 0.5) * 40; // max 20px left/right
    const offsetY = ((y / rect.height) - 0.5) * 40; // max 20px up/down
    setGridOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setGridOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
      {/* Spot gradients and animated blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            🧩 One System. Five Solutions.
          </h2>
          <p className="text-xl sm:text-2xl text-blue-700 mb-8">
            No fluff. Just a tight growth stack made for coworking operators.
          </p>
        </div>
        <div
          ref={cardRef}
          className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/50 shadow-lg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            '--grid-x': `${gridOffset.x}px`,
            '--grid-y': `${gridOffset.y}px`
          }}
        >
          {/* Animated grid pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translate(var(--grid-x, 0px), var(--grid-y, 0px))`,
                transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)'
              }}
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a5b4fc" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-6">
              <span className="inline-flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 rounded-full p-3 mb-2 animate-pulse-slow">
                <Sparkles className="h-7 w-7 text-blue-600" />
              </span>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">📅 Ready to Scale?</h3>
            </div>
            <div className="w-16 mx-auto border-t-2 border-blue-200 mb-6"></div>
            <p className="text-lg text-blue-800 mb-8">
              Book your strategy call → We'll audit your funnel & share what to fix first.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-10 w-full max-w-lg">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center sm:justify-center">
                    <span className="relative flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    </span>
                    <span className="text-gray-800 text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-base px-8 py-6 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Audit Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

      </div>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-3000 {
          animation-delay: -3s;
        }
        .animation-delay-5000 {
          animation-delay: -5s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default PSSolutions; 