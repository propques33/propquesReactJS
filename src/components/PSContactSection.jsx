import React, { useState } from "react";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegBuilding, FaRegComments, FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";



const ContactInfo = ({ icon: Icon, title, value }) => (
    <motion.div
        className="flex items-center group"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="h-14 w-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mr-5 group-hover:shadow-lg transition-all duration-300">
            <Icon className="text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{value}</p>
        </div>
    </motion.div>
);

const PSContactSection = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://hook.eu2.make.com/e1dmgdn8bkmzln1vku0x5tf6hbogto6x", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            Get in Touch
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                            Transform Your Workspace Today
                        </h2>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Schedule a consultation with our expert team to discuss your office design needs in Lucknow. Let's create a space that inspires productivity and collaboration.
                        </p>

                        <div className="space-y-8">
                            <ContactInfo
                                icon={HiOutlineLocationMarker}
                                title="Location"
                                value="Lucknow, Uttar Pradesh"
                            />
                            <ContactInfo
                                icon={HiOutlinePhone}
                                title="Contact Number"
                                value="+91-7316981583"
                            />
                            <ContactInfo
                                icon={HiOutlineMail}
                                title="Email"
                                value="info@propquestudio.com"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-1"></div>
                        <div className="relative bg-white backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-blue-100">
                            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Share Your Requirements</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            id="name"
                                            className="w-full px-4 py-3 bg-white/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            id="email"
                                            className="w-full px-4 py-3 bg-white/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                                            placeholder="Your email"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                                        placeholder="Your phone number"
                                    />
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                                    <select
                                        id="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        name="projectType"
                                        className="w-full px-4 py-3 bg-white/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                                    >
                                        <option value="">Select Project Type</option>
                                        <option value="corporate">Corporate Office</option>
                                        <option value="coworking">Coworking Space</option>
                                        <option value="renovation">Office Renovation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/50 border border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                                        placeholder="Brief description of your project"
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={status === "loading"}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {status === "loading" ? "Sending..." : "Submit Request"}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </motion.button>
                                {status === "success" && (
                  <p className="text-green-600 text-sm text-center mt-2">Submitted successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center mt-2">Something went wrong. Please try again.</p>
                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
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

export default PSContactSection; 