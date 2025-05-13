import React, { useState } from "react";
import { motion } from "framer-motion";

const ConsultationForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: ""
  });

  const [status, setStatus] = useState(""); // success | error | loading

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: ""});
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

    return (
  <form className="space-y-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div whileHover={{ scale: 1.02 }}>
        <label className="block text-sm text-gray-700 mb-1">Name</label>
        <input
                  type="text"
                  name="name"
            value={formData.name}
                  onChange={handleChange}
                  required
          placeholder="Your name"
          className="w-full px-3 py-2 bg-white border border-blue-100 rounded-lg text-sm"
        />
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }}>
        <label className="block text-sm text-gray-700 mb-1">Email</label>
        <input
                  type="email"
                  name="email"
            value={formData.email}
                  onChange={handleChange}
                  required
          placeholder="Your email"
          className="w-full px-3 py-2 bg-white border border-blue-100 rounded-lg text-sm"
        />
      </motion.div>
    </div>

    <motion.div whileHover={{ scale: 1.02 }}>
      <label className="block text-sm text-gray-700 mb-1">Phone</label>
      <input
              type="tel"
              name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        placeholder="Your phone number"
        className="w-full px-3 py-2 bg-white border border-blue-100 rounded-lg text-sm"
      />
    </motion.div>

    <motion.div whileHover={{ scale: 1.02 }}>
      <label className="block text-sm text-gray-700 mb-1">Project Type</label>
      <select name="projectType"  className="w-full px-3 py-2 bg-white border border-blue-100 rounded-lg text-sm" value={formData.projectType}
          onChange={handleChange} required>
        <option value="">Select Project Type</option>
        <option value="corporate">Corporate Office</option>
        <option value="coworking">Coworking Space</option>
        <option value="renovation">Office Renovation</option>
        <option value="other">Other</option>
      </select>
    </motion.div>

   
      <motion.button
          type="submit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-medium shadow-md" disabled={status === "loading"}
    >
      {status === "loading" ? "Sending..." : "Submit Request"}
      </motion.button>
      {status === "success" && <p className="text-green-600 text-sm text-center mt-2">Submitted successfully!</p>}
      {status === "error" && <p className="text-red-600 text-sm text-center mt-2">Something went wrong. Please try again.</p>}
  </form>
  );
};

export default ConsultationForm;
