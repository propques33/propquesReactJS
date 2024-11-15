import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import close icon
import { useModal } from "../ModalContext"; 
import emailjs from 'emailjs-com'; // Import EmailJS
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Import Google reCAPTCHA v3
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import axios from 'axios'

const ModalForm = () => {
  const { isFormOpen, toggleForm } = useModal();
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

   

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
  
    // Validate Super Area and Carpet Area
    if (formData.areaCarpet < 3500 || formData.areaSuper < 3500) {
      alert("Both Carpet Area and Super Area must be at least 3500 sq. ft.");
      return;
    }
  
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
  
    setIsLoading(true); // Show loading spinner

    // Execute the reCAPTCHA and get the token
    const token = await executeRecaptcha("submit_form");
  
    if (!token) {
      alert("reCAPTCHA verification failed.");
      setIsLoading(false); // Hide loading spinner
      return;
    }
  
    const emailParams = {
      from_name: formData.name,
      to_name: "Admin", 
      phone: formData.phone,
      email: formData.email,
      rentalExpectation: formData.rentalExpectation,
      city: formData.city,
      microMarket: formData.microMarket,
      areaCarpet: formData.areaCarpet,
      areaSuper: formData.areaSuper,
      propertyDetails: formData.propertyDetails,
      coworkingOption: formData.coworkingOption,
      message: "Here is the information about the property", // Optional message content
      recaptcha_token: token, // Pass the reCAPTCHA token
      subject: '[IMPORTANT] Here is the information about the property' // Ensure the subject is meaningful
    };

    try {
      await axios.post('https://hook.eu2.make.com/b8iebbyrokw9p15vrpl6y8ehca5c22o1', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        rentalExpectation: formData.rentalExpectation,
        city: formData.city,
        microMarket: formData.microMarket,
        areaCarpet: formData.areaCarpet,
        areaSuper: formData.areaSuper,
        propertyDetails: formData.propertyDetails,
        coworkingOption: formData.coworkingOption,
      });
      // Send form data using EmailJS
      await emailjs.send('service_vcnub3o', 'template_wkjd0zu', emailParams, 'KM6kJPymVVzg7Aim1');
      setIsSuccess(true); // Show success popup
      // Reset form data after successful submission
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
      
      // Hide success popup after 3 seconds
      setTimeout(() => {
        setIsSuccess(false); 
      }, 3000);
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error);
      alert('Error sending data to Google Sheets.');
      setIsLoading(false); // Hide loading spinner
      return;
    }
  };
    
    // Send form data using EmailJS
  //   emailjs.send('service_vcnub3o', 'template_wkjd0zu', emailParams, 'KM6kJPymVVzg7Aim1')
  //     .then((response) => {
  //       setIsSuccess(true); // Show success popup
  //       setFormData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         rentalExpectation: "",
  //         city: "",
  //         microMarket: "",
  //         areaCarpet: "",
  //         areaSuper: "",
  //         propertyDetails: "",
  //         coworkingOption: "",
  //       });
  //       setTimeout(() => {
  //         setIsSuccess(false); // Hide success popup after 3 seconds
  //       }, 3000);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       alert('Error sending email.');
  //     });
  // };
     

  if (!isFormOpen) return null;

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfMEFoqAAAAAPbBd0mRptXaI8AfZN30AI9CqY1N">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000000000000]" id="contact-btn">
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
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-1">
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Your email"
                  required
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
                  required
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
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap mb-1">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="City"
                  required
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
                  required
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
                  required
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
                  required
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
                required
              />
            </div>

            <div className="mb-1">
              <select
                name="coworkingOption"
                value={formData.coworkingOption}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              >
                <option value="">Select coworking option</option>
                <option value="Start Your Own Coworking">Start Your Own Coworking</option>
                <option value="Match Making With Coworking">Match Making With Coworking</option>
              </select>
            </div>

            <button
              type="submit"
              id="form_enquiry"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full"
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  <span className="ml-2">Submitting...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          
              {/* Success Popup */}
          {isSuccess && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
              <div className="bg-white rounded-lg p-4 text-center">
                <AiOutlineCheckCircle className="text-green-500 text-4xl mb-2 w-full text-center" />
                <h3 className="text-lg font-semibold">Form Submitted Successfully!</h3>
                <p className="mt-2">Thank you for your submission.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default ModalForm;
