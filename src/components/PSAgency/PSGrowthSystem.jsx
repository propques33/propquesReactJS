import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, FileText, Layers, Zap, Target, MailCheck, BarChart, Users } from 'lucide-react';

const services = [
  {
    icon: Layers,
    number: "01",
    title: "Strategic Foundation",
    description: "We audit your digital presence to identify key opportunities and build a rock-solid foundation for growth.",
    features: ["Brand Message Clarity", "Competitor Analysis", "Website Performance Audit", "SEO Health Check"],
    output: "A comprehensive Growth Blueprint and a high-converting website ready for traffic.",
    gradient: "from-blue-100 to-indigo-100",
  },
  {
    icon: Zap,
    number: "02",
    title: "The Conversion Engine",
    description: "We transform your website from a simple brochure into a powerful lead-generation machine that captures interest and drives tour bookings.",
    features: ["Compelling Copywriting", "Strategic Calls-to-Action", "Tour Booking Integration", "A/B Tested Layouts"],
    output: "A website that converts visitors into qualified leads at a predictable rate.",
    gradient: "from-purple-100 to-indigo-100",
  },
  {
    icon: Target,
    number: "03",
    title: "Targeted Lead Flow",
    description: "We don't just get you traffic; we get you the right traffic. We use a multi-channel approach to attract high-intent prospects.",
    features: ["Hyper-Local SEO", "Google & Social Media Ads", "Content Marketing", "Partnership Outreach"],
    output: "A consistent stream of qualified leads from multiple sources.",
    gradient: "from-sky-100 to-blue-100",
  },
  {
    icon: MailCheck,
    number: "04",
    title: "Automated Nurturing",
    description: "Never let a lead go cold again. Our automated CRM and nurturing sequences engage prospects and guide them towards becoming members.",
    features: ["Instant Lead Notifications", "Automated Email/SMS Drips", "Lead Scoring & Segmentation", "Pipeline Management"],
    output: "A fully automated sales pipeline that maximizes conversion rates.",
    gradient: "from-fuchsia-100 to-purple-100",
  },
  {
    icon: BarChart,
    number: "05",
    title: "Data-Driven Scaling",
    description: "We continuously analyze performance data to optimize your entire growth system, ensuring sustainable growth and maximizing your ROI.",
    features: ["Performance Dashboards", "Bi-Weekly Strategy Calls", "ROI Tracking", "Continuous Optimization"],
    output: "A scalable growth engine with clear, actionable insights for long-term success.",
    gradient: "from-rose-100 to-fuchsia-100",
  },
  {
    icon: Users,
    number: "06",
    title: "Community & Retention",
    description: "We help you foster a thriving community and maximize member retention with engagement strategies and upsell systems.",
    features: ["Member Events & Networking", "Feedback Loops", "Loyalty & Referral Programs", "Upsell Opportunities"],
    output: "A loyal, engaged member base and increased lifetime value for your coworking space.",
    gradient: "from-green-100 to-blue-100",
  },
];

const GrowthStepCard = ({ icon: Icon, title, description, features, output, gradient }) => {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">
          <Icon className="h-7 w-7 text-blue-600" />
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
      <div className={`bg-gradient-to-tr ${gradient} rounded-lg p-4`}>
        <div className="flex items-center mb-2">
          <FileText className="h-5 w-5 text-blue-800/80 mr-2" />
          <span className="font-semibold text-blue-900/90">Key Output:</span>
        </div>
        <p className="text-blue-900/80 font-medium">{output}</p>
      </div>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Proven 5-Step Growth System
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Each solution builds on the last, creating a complete growth engine
            that turns your coworking space into a predictable revenue machine.
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