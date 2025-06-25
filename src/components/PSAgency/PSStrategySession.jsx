import React from 'react';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Calendar, CheckCircle, Phone } from "lucide-react";

const benefits = [
  "Identify lead leakage points in your current setup",
  "Discover untapped marketing opportunities",
  "Get a custom growth roadmap for your space",
  "Learn proven strategies from successful operators"
];

const PSStrategySession = () => {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
      {/* Spot gradients and animated blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Take Your Coworking Space to the Next Level
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your future members are out there — are you ready to connect with them?
            </p>
          </div>

          <Card className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl animate-scale-in w-full max-w-5xl mx-auto">
            <CardContent className="p-6 md:p-12 flex flex-col items-center">
              {/* Heading centered at top */}
              <div className="w-full flex flex-col items-center mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                    Free 30-Minute Strategy Session
                  </h3>
                </div>
                <p className="text-gray-700 text-lg text-center max-w-2xl">
                  Book a free strategy session with one of our coworking growth experts. Let's identify where your current setup may be leaking leads — and how we can fix it fast.
                </p>
              </div>
              {/* Two-column content */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-stretch h-full relative">
                {/* Left: Benefits */}
                <div className="flex flex-col justify-center items-start md:items-end h-full max-w-md mx-auto w-full pr-0 md:pr-8">
                  <div className="space-y-5 w-full">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }} />
                        <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Divider for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-100 via-blue-200 to-purple-100 opacity-70 animate-divider-fade" />
                {/* Right: What You'll Get */}
                <div className="flex justify-center items-center h-full max-w-md mx-auto w-full pl-0 md:pl-8">
                  <div className="relative w-full">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                    <div className="bg-white/80 rounded-2xl p-8 shadow-xl w-full flex flex-col items-center animate-fade-in">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        What You'll Get:
                      </h4>
                      <div className="space-y-4 text-base text-gray-700 text-left w-full">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Comprehensive audit of your current marketing</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Customized growth strategy roadmap</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>Actionable next steps you can implement immediately</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>No sales pressure, just valuable insights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTAs centered below */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-6">
                <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="bg-gray-900 hover:bg-gray-800 text-white text-base px-8 py-6 rounded-full group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-semibold w-full sm:w-auto"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Session
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="https://calendly.com/thomas-agency/growth-call?month=2025-06" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base px-8 py-6 rounded-full border-2 border-blue-300 text-blue-800 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

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
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes divider-fade {
          0% { opacity: 0; }
          100% { opacity: 0.7; }
        }
        .animate-divider-fade {
          animation: divider-fade 1s ease-in both;
        }
      `}</style>
    </section>
  );
};

export default PSStrategySession; 