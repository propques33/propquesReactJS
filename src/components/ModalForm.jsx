import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useModal } from "../ModalContext";
import emailjs from "emailjs-com";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

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

  useEffect(() => {
    if (isSuccess) {
      navigate("/thankyou");
    }
  }, [isSuccess, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(generatedOtp);

    const otpParams = {
      to_name: formData.name,
      to_email: formData.email,
      message: `Your OTP for verification is: ${generatedOtp}`,
      subject: "OTP Verification for Appointment",
    };

    try {
      await emailjs.send(
        "service_vcnub3o",
        "template_19bo1qg",
        otpParams,
        "KM6kJPymVVzg7Aim1"
      );
      alert("OTP has been sent to your email!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP. Please try again.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setIsEmailVerified(true);
      alert("Email verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (formData.areaCarpet < 3500 || formData.areaSuper < 3500) {
      alert("Both Carpet Area and Super Area must be at least 3500 sq. ft.");
      return;
    }

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    setIsLoading(true);

    try {
      const token = await executeRecaptcha("submit_form");
      if (!token) {
        alert("reCAPTCHA verification failed.");
        setIsLoading(false);
        return;
      }

      const emailParams = {
        ...formData,
        recaptcha_token: token,
        message: "Here is the information about the property",
        subject: "[IMPORTANT] Property Details Submission",
      };

      await axios.post(
        "https://hook.eu2.make.com/b8iebbyrokw9p15vrpl6y8ehca5c22o1",
        formData
      );

      await emailjs.send(
        "service_vcnub3o",
        "template_wkjd0zu",
        emailParams,
        "KM6kJPymVVzg7Aim1"
      );

      setIsSuccess(true);
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
      toggleForm();
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isFormOpen) return null;

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfMEFoqAAAAAPbBd0mRptXaI8AfZN30AI9CqY1N">
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100000000000000000]"
        id="contact-btn"
      >
        <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <button
            onClick={toggleForm}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
          >
            <IoClose className="text-2xl" />
          </button>

          <h2 className="text-md font-bold mb-4 text-center">
            Please fill out this form to provide us with more details about your
            property
            <p className="text-sm">
              We will reach out to you if we are a mutual fit.
            </p>
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Your Name"
                disabled={isEmailVerified}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                placeholder="Your Email"
                disabled={isEmailVerified}
                required
              />
            </div>

            {!isEmailVerified && (
              <>
                <button
                  onClick={handleSendOtp}
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4"
                >
                  Send OTP
                </button>
                <div className="mb-4 flex gap-2">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter OTP"
                  />
                  <button
                    onClick={handleVerifyOtp}
                    className="bg-green-500 text-white px-4 py- rounded w-full mb-"
                  >
                    Verify OTP
                  </button>
                </div>
              </>
            )}

            {isEmailVerified && (
              <div className="flex flex-col">
                <div className="mb-4 flex gap-2 ">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded flex"
                    placeholder="Your Phone"
                    required
                  />
                </div>

                <div className="mb-4 flex gap-2">
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Goa">Goa</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Indore">Indore</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Noida">Noida</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Pune">Pune</option>
                  </select>

                  <input
                    type="text"
                    name="microMarket"
                    value={formData.microMarket}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Micro Market"
                    required
                  />
                </div>

                <div className="mb-4 flex gap-2">
                  <input
                    type="number"
                    name="rentalExpectation"
                    value={formData.rentalExpectation}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Rental Expectation"
                    required
                  />
                </div>

                {/* <div className="mb-4">
                 
                </div> */}

                <div className="mb-4 flex gap-2">
                  <input
                    type="number"
                    name="areaSuper"
                    value={formData.areaSuper}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Super Area (sq. ft.)"
                    required
                  />
                  <input
                    type="number"
                    name="areaCarpet"
                    value={formData.areaCarpet}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    placeholder="Carpet Area (sq. ft.)"
                    required
                  />
                </div>

                <div className="mb-4">
                  <select
                    name="coworkingOption"
                    value={formData.coworkingOption}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select Coworking Option</option>
                    <option value="Start Your Own Coworking">
                      Start Your Own Coworking
                    </option>
                    <option value="Match Making With Coworking">
                      Match Making With Coworking
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default ModalForm;
