import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Automated Advertising",
    description: "Precision-targeted ad campaigns that reach your ideal audience and run on autopilot, generating leads while you focus on your community."
  },
  {
    icon: Users,
    title: "CRM & Lead Nurturing",
    description: "We plug the leaks in your sales funnel with a smart, automated CRM system that tracks, follows up, and converts inquiries efficiently."
  },
  {
    icon: TrendingUp,
    title: "Dominant Local SEO",
    description: "Climb to the top of local search results with strategic SEO that drives high-quality, organic traffic to your website month after month."
  },
  {
    icon: Zap,
    title: "High-Conversion Websites",
    description: "We don't just build beautiful websites—we build lead generation machines designed to turn visitors into booked tours and paying members."
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="relative group p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-x-4 mb-4">
        <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md">
          <Icon className="h-7 w-7 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed pl-[52px]">{description}</p>
    </div>
  </motion.div>
);

const PSWhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg blur-xl opacity-70 animate-pulse-slow"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Growth Engine
              </span>
            </span>
            , Not Just a Service
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In a competitive market, just having a space isn't enough. We build systems that turn your coworking business into a predictable, scalable, and highly profitable asset.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </motion.div>
      </div>
      <style jsx>{`
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

export default PSWhyChooseUs; 