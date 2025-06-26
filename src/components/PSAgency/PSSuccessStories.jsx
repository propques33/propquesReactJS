import React, { useState } from 'react';
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { TrendingUp, Users, Building2, Sparkles } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Higher Occupancy Rates",
    description: "Better visibility leads to more inquiries — and more filled desks.",
    metric: "Average 85% occupancy",
    color: "bg-green-100 text-green-700"
  },
  {
    icon: Users,
    title: "Engaged Communities",
    description: "We help turn visitors into loyal members with strategies built around retention.",
    metric: "65% retention increase",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: Building2,
    title: "A Stronger Brand Presence",
    description: "Your brand will be clear, confident, and consistently recognized online.",
    metric: "200% brand visibility",
    color: "bg-purple-100 text-purple-700"
  }
];

const testimonials = [
  {
    name: "Amit S.",
    company: "WorkHub Dubai",
    quote: "Propques helped us double our occupancy in just 3 months. Their system is a game changer!",
    color: "bg-blue-50 text-blue-900"
  },
  {
    name: "Nurul H.",
    company: "Kuala Coworking",
    quote: "Our member retention is at an all-time high. The community strategies really work!",
    color: "bg-green-50 text-green-900"
  },
  {
    name: "Ravi P.",
    company: "Manama Spaces",
    quote: "We now have a brand presence that stands out in a crowded market. Highly recommended!",
    color: "bg-purple-50 text-purple-900"
  }
];

const locations = [
  "India", "UAE", "Singapore", "Dubai"
];

const PSSuccessStories = () => {
  const [view, setView] = useState('outcomes');

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none w-full overflow-x-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob max-w-full" style={{right: 0}}></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-3000 max-w-full" style={{left: 0}}></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-5000 max-w-full" style={{left: '33%'}}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-blue-500 -mt-1" />
            Real Growth Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            See how Propques Agency transforms coworking spaces with proven results.
          </p>
          {/* Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${view === 'outcomes' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/70 text-blue-700 border border-blue-200'}`}
              onClick={() => setView('outcomes')}
            >
              Outcomes
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${view === 'testimonials' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/70 text-blue-700 border border-blue-200'}`}
              onClick={() => setView('testimonials')}
            >
              Testimonials
            </button>
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {view === 'outcomes' ? outcomes.map((outcome, index) => (
            <Card 
              key={index} 
              className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <outcome.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <Badge className={`mb-4 ${outcome.color} font-semibold text-base px-4 py-2 rounded-full`}>{outcome.metric}</Badge>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          )) : testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left ${testimonial.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
                <Sparkles className="h-8 w-8 mb-4 text-blue-500" />
                <blockquote className="italic text-lg text-gray-800 mb-4">“{testimonial.quote}”</blockquote>
                <div className="font-bold text-blue-900">{testimonial.name}</div>
                <div className="text-blue-700 text-sm">{testimonial.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white animate-scale-in shadow-xl">
          <div className="max-w-4xl mx-auto">
            <Sparkles className="h-12 w-12 mx-auto mb-6 animate-float" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Sparkles className="h-7 w-7 text-white -mt-1" />
              Unlock Your Growth Story
            </h3>
            <p className="text-xl opacity-90 mb-8">
              Join the coworking brands scaling faster with <span className="font-semibold">Propques Agency</span>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Spaces Grown</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm opacity-80">Leads Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm opacity-80">Avg Occupancy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm opacity-80">Countries Impacted</div>
              </div>
            </div>
            <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 text-lg">
                Book Your Free Growth Call
              </button>
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
        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slide-in-left {
          0% { transform: translateX(-40px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PSSuccessStories; 