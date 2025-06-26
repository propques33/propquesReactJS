import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, FileText, Layers, Zap, Target, MailCheck, BarChart, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: () => <span className="text-3xl">🧠</span>,
    number: "1.",
    title: "GTM Strategy Kit",
    description: "Launch your space like a brand, not a listing. Built by Propques Agency for ambitious operators.",
    features: [
      "Micro-market analysis",
      "Competitor benchmarking",
      "Audience targeting (freelancers, remote teams)",
      "Tiered pricing + value prop",
      "Channel plan: Meta, Google, LinkedIn, OTAs"
    ],
    output: "GTM strategy PDF + Ad copy bank + Loom walkthrough",
    gradient: "from-blue-100 to-indigo-100",
    cta: {
      text: "Get My GTM Plan",
      colorClass: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
    }
  },
  {
    icon: () => <span className="text-3xl">⚙️</span>,
    number: "2.",
    title: "CRM Setup & Automation",
    description: "Stop leaking leads. Automate your follow-ups.",
    features: [
      "Salesmate / Zoho / HubSpot setup",
      "WhatsApp + email drip flows",
      "Lead scoring + visit reminders",
      "Smart dashboards & reporting"
    ],
    output: "CRM live in 10 days with SOPs + 4 workflows",
    gradient: "from-purple-100 to-indigo-100",
    cta: {
      text: "Automate My CRM",
      colorClass: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
    }
  },
  {
    icon: () => <span className="text-3xl">🎯</span>,
    number: "3.",
    title: "Conversion Optimization",
    description: "Turn visits into leads—before the tour.",
    features: [
      "Mobile-first landing page",
      "Live chat + callback widget",
      "Exit intent popups & retargeting",
      "Lead magnets: day pass, ROI calculator"
    ],
    output: "High-converting microsite + CRO dashboard",
    gradient: "from-sky-100 to-blue-100",
    cta: {
      text: "Boost My Conversions",
      colorClass: "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700"
    }
  },
  {
    icon: () => <span className="text-3xl">📞</span>,
    number: "4.",
    title: "Sales Training (CloseMax15™)",
    description: "Your team knows the leads. We show them how to close, with Propques Agency's proven playbooks.",
    features: [
      "Sales SOP + objection playbook",
      "WhatsApp + call follow-up scripts",
      "CRM-based nurture flows",
      "Tour reactivation system"
    ],
    output: "15-hour coaching + SOPs + recordings",
    gradient: "from-fuchsia-100 to-purple-100",
    cta: {
      text: "Train My Team",
      colorClass: "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white hover:from-fuchsia-700 hover:to-purple-700"
    }
  },
  {
    icon: () => <span className="text-3xl">💰</span>,
    number: "5.",
    title: "Paid Growth Engine",
    description: "Scale your growth with ROI-focused performance ads.",
    features: [
      "Meta + Google ad setup",
      "Creatives + offer testing",
      "OTA campaign management",
      "Source-level ROI tracking"
    ],
    output: "Monthly ad creative packs + Real-time CAC + ROI dashboard + 5x ROAS goal in 60 days",
    gradient: "from-rose-100 to-fuchsia-100",
    cta: {
      text: "Scale My Ads",
      colorClass: "bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white hover:from-rose-600 hover:to-fuchsia-700"
    }
  },
];

const GrowthStepCard = ({ icon: Icon, title, description, features, output, gradient, cta }) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">
          <Icon />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <div className={`bg-gradient-to-tr ${gradient} rounded-lg p-4 mb-6`}>
        <div className="flex items-center mb-2">
          <FileText className="h-5 w-5 text-blue-800/80 mr-2" />
          <span className="font-semibold text-blue-900/90">Key Output:</span>
        </div>
        <p className="text-blue-900/80 font-medium">{output}</p>
      </div>
      <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer">
        <button className={`w-full py-3 px-6 rounded-full font-semibold shadow-md transition-all duration-300 text-lg flex items-center justify-center gap-2 ${cta.colorClass}`}>
          <span>{cta.text}</span>
          <ArrowUpRight className="h-5 w-5 -mt-1" />
        </button>
      </a>
    </div>
  );
};

const AnimatedCardWrapper = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      {children}
    </motion.div>
  );
};

const PSGrowthSystem = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"]
  });
  
  const mobileTimelineRef = useRef(null);
  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start center", "end end"]
  });

  return (
    <section id="growth-system" className="py-24 bg-gray-50/50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold text-base tracking-wide shadow-sm">
            Powered by Propques Agency
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Proven 5-Step Growth System
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Each solution builds on the last, creating a complete growth engine that turns your coworking space into a predictable revenue machine.<br/>
            <span className="font-semibold text-blue-700">Propques Agency's</span> system is trusted by leading coworking operators.
          </p>
        </motion.div>

        {/* --- Desktop Staggered Layout --- */}
        <div ref={timelineRef} className="hidden lg:block relative overflow-x-visible">
          <motion.div
            className="absolute w-1 bg-blue-200 rounded-full h-full top-0 bottom-0 left-1/2 -translate-x-1/2"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          />
          <div className="grid grid-cols-2 relative gap-x-12">
            {services.map((service, index) => {
              const isRight = index % 2 !== 0;
              return (
                <div key={service.number} className={`col-start-${isRight ? 2 : 1} ${isRight ? 'mt-32' : ''} mb-12 max-w-xl w-full mx-auto`}>
                  <AnimatedCardWrapper>
                    <div className="relative">
                      <GrowthStepCard {...service} />
                      <div className={`absolute top-8 w-16 h-16 ${isRight ? '-left-8' : '-right-8'}`}
                        style={{ minWidth: '4rem' }}>
                        <div className="z-10 flex items-center justify-center w-full h-full rounded-full bg-white shadow-xl border-4 border-blue-200">
                          <span className="text-2xl font-bold text-blue-600">{service.number}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedCardWrapper>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Mobile/Tablet Layout: Stacked Cards, No Roadmap --- */}
        <div ref={mobileTimelineRef} className="block lg:hidden relative w-full">
          <div className="flex flex-col gap-10 w-full">
            {services.map((service) => (
              <AnimatedCardWrapper key={service.number}>
                <div className="w-full max-w-xl mx-auto">
                  <GrowthStepCard {...service} />
                </div>
              </AnimatedCardWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PSGrowthSystem; 