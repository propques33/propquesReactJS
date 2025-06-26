import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Zap, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Eliminate Lead Leakage",
    description: "Automatically capture and organize leads from websites, social media, and landing pages directly into your CRM, ensuring no prospect slips through the cracks.",
    cta: {
      text: "Stop Lead Leakage",
      color: "bg-blue-600 hover:bg-blue-700 text-white"
    }
  },
  {
    icon: Users,
    title: "Seamless WhatsApp & Email Integration",
    description: "Engage your leads with personalized messages and timely follow-ups through WhatsApp and email, fostering stronger connections and higher conversion rates.",
    cta: {
      text: "Boost Engagement",
      color: "bg-green-600 hover:bg-green-700 text-white"
    }
  },
  {
    icon: TrendingUp,
    title: "Intelligent Lead Scoring",
    description: "Prioritize your leads effectively by leveraging intelligent scoring based on engagement and interactions, allowing you to focus on high-potential prospects.",
    cta: {
      text: "Score More Leads",
      color: "bg-purple-600 hover:bg-purple-700 text-white"
    }
  },
  {
    icon: Zap,
    title: "Unified CRM Experience",
    description: "Integrate with popular CRM systems to centralize your lead management, providing a cohesive and efficient workflow for your sales team.",
    cta: {
      text: "Unify My CRM",
      color: "bg-pink-600 hover:bg-pink-700 text-white"
    }
  }
];

const FeatureCard = ({ icon: Icon, title, description, cta, index }) => (
  <motion.div
    className="relative group p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between max-w-max mx-auto"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
  >
    <div className="relative z-10 flex-1">
      <div className="flex items-center gap-x-4 mb-4">
        <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md">
          <Icon className="h-7 w-7 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed ">{description}</p>
    </div>
    <div className="mt-6 flex justify-center">
      <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer" className="w-full">
        <button className={`w-full flex items-center justify-between px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${cta.color}`}>
          <span>{cta.text}</span>
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </button>
      </a>
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
            Why Choose {' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg blur-xl opacity-70 animate-pulse-slow"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Propques Agency 
              </span>
            </span>
            ?
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