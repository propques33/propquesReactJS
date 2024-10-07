import React, { useState } from "react";
import emailjs from 'emailjs-com'; // Import EmailJS
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Import Google reCAPTCHA v3
import Button from "./Button";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    message: "",
    category: "",
  });

  const { executeRecaptcha } = useGoogleReCaptcha(); // Google reCAPTCHA v3

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    // Execute the reCAPTCHA and get the token
    const token = await executeRecaptcha("submit_form");

    if (!token) {
      alert("reCAPTCHA verification failed.");
      return;
    }

    const emailParams = {
      from_name: formData.name,
      to_name: "Admin",
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      city: formData.city,
      message: formData.message,
      category: formData.category,
      recaptcha_token: token,
    };

    // Send form data using EmailJS
    emailjs.send('service_vcnub3o', 'template_19bo1qg', emailParams, 'KM6kJPymVVzg7Aim1')
      .then((response) => {
        alert('Form submitted successfully!');
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          city: "",
          message: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending email.');
      });
  };

  return (
    <div className="flex flex-col sm:flex-row  md:px-8 space-y-6 sm:space-y-0">
      <div className="w-full sm:w-1/2 bg-white rounded-lg md:p-6 p-4 t]">
        <h2 className="md:text-5xl text-xl font-bold mb-4 text-blue-600">Get In Touch</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We are here to assist. Simply fill the form to help us understand your business, vision, and goals,
          so we can provide our exceptional services and suggestions to you.
        </p>
        <blockquote className="md:text-4xl text-xl italic mb-6 text-blue-600 font">
          “Turn Your Vision Into a Reality”
        </blockquote>
       
        <Button name={"Let's Talk"} />
      </div>

      <div className="w-full sm:w-1/2">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-lg shadow-md">
  <p className="mb-6 text-gray-700 leading-relaxed">
    Please submit your inquiry via the form and you’ll hear back from us shortly.
  </p>

  {/* First Row: Name and Email */}
  <div className="mb-4 flex flex-col sm:flex-row space-x-4">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      className="mt-1 block w-full sm:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Name"
      required
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="mt-1 block w-full sm:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Email"
      required
    />
  </div>

  {/* Second Row: Phone and Company */}
  <div className="mb-4 flex flex-col sm:flex-row space-x-4">
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleInputChange}
      className="mt-1 block w-full sm:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Mobile"
      required
    />
    <input
      type="text"
      name="company"
      value={formData.company}
      onChange={handleInputChange}
      className="mt-1 block w-full sm:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Company (optional)"
    />
  </div>

  {/* Third Row: City and Message */}
  <div className="mb-4 flex flex-col sm:flex-row space-x-4">
    <input
      type="text"
      name="city"
      value={formData.city}
      onChange={handleInputChange}
      className="mt-1 block w-full sm:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="City"
      required
    />
  </div>

  {/* Textarea: Full Width */}
  <div className="mb-4">
    <textarea
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="How can we help you?"
      rows="4"
      required
    />
  </div>

  {/* Category Dropdown */}
  <div className="mb-4">
    <select
      name="category"
      value={formData.category}
      onChange={handleInputChange}
      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    >
      <option value="">Select Category</option>
      <option value="Corporate">Corporate</option>
      <option value="Operator">Operator</option>
      <option value="Real Estate Professional">Real Estate Professional</option>
      <option value="Entrepreneur">Entrepreneur</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full shadow-md"
  >
    Send
  </button>
</form>


      </div>
    </div>
  );
};

export default GetInTouch;
