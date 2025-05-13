import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaQuoteLeft, FaRegComments, FaRegStar } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "CEO, TechSolutions Lucknow",
        image: "https://tse1.mm.bing.net/th?id=OIP.7b7FFC2ANLuE-PH0Ged66wHaE8&pid=Api&P=0&h=220",
        text: "PropquesStudio transformed our workspace. The new design is stunning and our team's productivity has soared.",
    },
    {
        name: "Priya Verma",
        role: "Founder, Lucknow Coworks",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnxvd0dmSlhsbmotY3x8ZW58MHx8fHw%3D&w=1000&q=80",
        text: "Our coworking space now attracts more members than ever. The PropquesStudio team truly understands coworking.",
    },
    {
        name: "Amit Singh",
        role: "Director, Finance Plus",
        image: "https://tse3.mm.bing.net/th?id=OIP.WT2GGZkA1I3KV4-WGUm2sgHaHa&pid=Api&P=0&h=220",
        text: "We wanted an office that would impress clients. PropquesStudio delivered a space that's both elegant and functional.",
    },
];

const FlyingIcon = ({ children, className, style }) => (
    <div className={`absolute pointer-events-none ${className}`} style={style}>
        <span className="text-blue-200 opacity-70 drop-shadow-lg" style={{ fontSize: 32 }}>
            {children}
        </span>
    </div>
);

const PSTestimonial = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Flying icons for architectural/review vibe */}
            <FlyingIcon className="animate-float-slow left-8 top-10" style={{ zIndex: 1 }}><FaRegComments /></FlyingIcon>
            <FlyingIcon className="animate-float-fast right-10 top-32" style={{ zIndex: 1 }}><MdOutlineReviews /></FlyingIcon>
            <FlyingIcon className="animate-float-dot left-1/2 top-4" style={{ zIndex: 1 }}><FaRegStar /></FlyingIcon>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium animate-slideDown mb-4">
                        Client Testimonials
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600">
                        Hear from businesses across Lucknow who have transformed their workspaces with PropquesStudio's expertise.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative bg-white/70 backdrop-blur-lg border border-blue-100 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4 animate-fadeInUpTestimonial group hover:scale-105 hover:shadow-2xl transition-all duration-500"
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            {/* Faint quote icon in background */}
                            <FaQuoteLeft className="absolute top-6 left-6 text-blue-100 opacity-20 text-4xl pointer-events-none group-hover:scale-110 group-hover:text-blue-200 transition-all duration-500" />
                            {/* Profile image */}
                            <div className="relative mb-2">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-lg mx-auto group-hover:scale-110 transition-transform duration-500"
                                />
                                <span className="absolute -bottom-2 -right-2 bg-blue-100 text-blue-600 rounded-full p-2 shadow-md group-hover:bg-blue-200 transition-all duration-500">
                                    <HiOutlineChatBubbleLeftRight className="text-lg" />
                                </span>
                            </div>
                            {/* Name and role */}
                            <div className="text-center">
                                <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                                <p className="text-blue-700 text-xs font-medium mb-2">{testimonial.role}</p>
                            </div>
                            {/* Testimonial text */}
                            <p className="text-gray-700 italic text-base leading-relaxed text-center mb-2 relative z-10">
                                {testimonial.text}
                            </p>
                            {/* Star rating */}
                            <div className="flex text-yellow-400 justify-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                ))}
                            </div>
                            {/* Verified badge */}
                            <div className="flex items-center gap-2 mt-2 text-blue-500">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                <span className="text-xs font-medium uppercase tracking-wider">Verified Client</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        @keyframes fadeInUpTestimonial {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUpTestimonial {
          animation: fadeInUpTestimonial 0.9s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
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
      `}</style>
        </section>
    );
};

export default PSTestimonial; 