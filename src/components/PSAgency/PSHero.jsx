import React, { useState, useEffect, useRef, memo } from 'react';
import { Button } from "../ui/button";
import { ArrowRight, Users, TrendingUp, Clock, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

// Memoized Counter for animating numbers
const Counter = memo(({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      const current = Math.min(Math.floor(progress * end), end);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
});

// Stat Card Component
const StatCard = ({ icon: Icon, value, suffix, label, delay }) => (
  <motion.div
    className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 p-6 text-center shadow-lg group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-white/80"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
  >
    <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <div className="flex justify-center items-center mb-4">
        <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full shadow-inner">
          <Icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <div className="text-5xl font-bold text-gray-900 mb-2">
        <Counter end={parseInt(value)} suffix={suffix} />
      </div>
      <p className="text-base text-gray-700 tracking-wide">{label}</p>
    </div>
  </motion.div>
);

const PSHero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-[110px] lg:pb-28 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100"></div>
        <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%2020h40M20%200v40%22%20fill%3D%22none%22%20stroke%3D%22%23d1d5db%22%20stroke-opacity%3D%220.2%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center justify-center bg-white/60 backdrop-blur-sm shadow-lg px-4 py-2 rounded-full mb-6 border border-white/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="h-5 w-5 mr-2 text-purple-600" />
            <span className="font-medium text-gray-800 text-sm tracking-wider">Growth System for Coworking</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't Just List a Space. <br/> Launch a{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-60 animate-pulse-slow"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brand.
              </span>
            </span>
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our proven system helps coworking operators build predictable growth engines that convert visitors into members and scale sustainably.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white text-base px-8 py-6 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/60 backdrop-blur-sm text-base px-8 py-6 rounded-full border-2 border-gray-300 text-gray-800 hover:bg-white hover:border-gray-400 transition-all duration-300"
              >
                Explore Services
              </Button>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <StatCard icon={Users} value="50" suffix="+" label="Spaces Transformed" delay={0.4} />
            <StatCard icon={TrendingUp} value="300" suffix="%" label="Average Lead Increase" delay={0.5} />
            <StatCard icon={Clock} value="15" suffix=" Days" label="Average Setup Time" delay={0.6} />
            <StatCard icon={Target} value="5" suffix="x ROI" label="Within 90 Days" delay={0.7} />
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

export default PSHero; 