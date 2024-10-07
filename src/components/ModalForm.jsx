import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { useModal } from "../ModalContext"; // Import modal context
import emailjs from 'emailjs-com'; // Import EmailJS
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Import Google reCAPTCHA v3
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const ModalForm = () => {
  const { isFormOpen, toggleForm } = useModal();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // Captcha state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalExpectation: "",
    city: "",
    microMarket: "",
    areaCarpet: "",
    areaSuper: "",
    propertyDetails: "",
    coworkingOption: "",
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
      to_name: "Admin", // You can replace this with the recipient's name
      phone: formData.phone,
      rentalExpectation: formData.rentalExpectation,
      city: formData.city,
      microMarket: formData.microMarket,
      areaCarpet: formData.areaCarpet,
      areaSuper: formData.areaSuper,
      propertyDetails: formData.propertyDetails,
      coworkingOption: formData.coworkingOption,
      message: "Here is the information about the property", // Optional message content
      recaptcha_token: token, // Pass the reCAPTCHA token
    };

    // Send form data using EmailJS
    emailjs.send('service_vcnub3o', 'template_wkjd0zu', emailParams, 'KM6kJPymVVzg7Aim1')
      .then((response) => {
        alert('Form submitted successfully!');
        setFormData({
          name: "",
          email: "",
          phone: "",
          rentalExpectation: "",
          city: "",
          microMarket: "",
          areaCarpet: "",
          areaSuper: "",
          propertyDetails: "",
          coworkingOption: "",
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending email.');
      });
  };

  if (!isFormOpen) return null;

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfMEFoqAAAAAPbBd0mRptXaI8AfZN30AI9CqY1N">

    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000000000000]">
      <div className="relative bg-zinc-300 rounded-lg shadow-lg p-8 max-w-2xl w-full">
        {/* Close Button */}
        <button
          onClick={toggleForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoClose className="text-2xl" />
        </button>

        <h2 className="text-base max-w-8xl font-bold mb-1 text-center">
          Please fill out this form to provide us with more details about your property.
        </h2>
        <p className="text-sm font-semibold text-center mb-4">
          We will reach out to you if we are a mutual fit.
        </p>

        {/* Form Content */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your name"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your email"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Your phone number"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="number"
                name="rentalExpectation"
                value={formData.rentalExpectation}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Rental expectation"
              />
            </div>
          </div>

          {/* Additional input fields */}
          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="City"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="text"
                name="microMarket"
                value={formData.microMarket}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Micro Market"
              />
            </div>
          </div>

          <div className="flex flex-wrap mb-1">
            <div className="w-1/2 pr-2">
              <input
                type="number"
                name="areaCarpet"
                value={formData.areaCarpet}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Area sqft. (Carpet)"
              />
            </div>

            <div className="w-1/2 pl-2">
              <input
                type="number"
                name="areaSuper"
                value={formData.areaSuper}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Area sqft. (Super)"
              />
            </div>
          </div>

          <div className="mb-1">
            <textarea
              name="propertyDetails"
              value={formData.propertyDetails}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Property details"
              rows="4"
            />
          </div>

          <div className="mb-1">
            <select
              name="coworkingOption"
              value={formData.coworkingOption}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select coworking option</option>
              <option value="Start Your Own Coworking">Start Your Own Coworking</option>
              <option value="Match Making With Coworking">Match Making With Coworking</option>
            </select>
          </div>

          {/* No need for visible reCAPTCHA widget as reCAPTCHA v3 runs in the background */}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </GoogleReCaptchaProvider>

  );
};

export default ModalForm;
