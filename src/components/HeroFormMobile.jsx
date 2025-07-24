import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { initiate, verify } from "../utils/initOtpless";
import { FaSpinner } from "react-icons/fa"; // Spinner icon for loading

const ModalForm = () => {
  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rentalExpectation: "",
    pincode: "",
    location: "",
    city: "",
    state: "",
    areaCarpet: "",
    areaSuper: "",
    propertyDetails: "",
    coworkingOption: "",
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/thankyou");
    }
  }, [isSuccess, navigate]);

  // Handle general form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fetch Pincode Data
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const res = await axios.get(
          `https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/pincode/${value}`
        );
        setResults(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setResults([]);
    }
  };

  // Handle Pincode Selection
  const handleSelect = (item) => {
    const selectedPincode = item.pincode;
    const selectedLocation = item.locations;
    const selectedCity = item.city;
    const selectedState = item.state;

    setQuery(
      `${selectedPincode} - ${selectedLocation}, ${selectedCity}, ${selectedState}`
    );

    // ✅ Properly updating the pincode and location in formData
    setFormData((prevData) => ({
      ...prevData,
      pincode: selectedPincode,
      location: selectedLocation,
      city: selectedCity,
      state: selectedState,
    }));

    setResults([]); // Close the dropdown
  };

   const handleOtpRequest = () => {
     if (phone.length !== 10) {
       alert("Please enter a valid 10-digit mobile number.");
       return;
     }
     initiate(phone);
     setIsOtpSent(true);
   };

   const handleOtpVerification = async () => {
     setIsOtpLoading(true);
     try {
       const response = await verify(phone, otp);
       if (response.success) {
         setIsOtpVerified(true);
         alert("OTP Verified Successfully!");
       } else {
         alert("Invalid OTP. Please try again.");
       }
     } catch (error) {
       console.error("OTP Verification Error:", error);
       alert("Error verifying OTP. Please try again later.");
     } finally {
       setIsOtpLoading(false);
     }
   };

   const handleSubmit = async (e) => {
     e.preventDefault();

     if (!isOtpVerified) {
       alert("Please verify your OTP before submitting.");
       return;
     }

     if (formData.areaCarpet < 3500) {
       alert("Carpet Area must be at least 3500 sq. ft.");
       return;
     }

     if (!isCheckboxChecked) {
       alert("Please agree to the privacy policy to proceed.");
       return;
     }

     setIsLoading(true);

     try {
       const now = new Date();
       const offset = 330; // IST offset in minutes (5 hours 30 minutes)
       const istDate = new Date(now.getTime() + offset * 60 * 1000);
       const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

       const dataToSend = {
         ...formData,
         phone,
         timestamp,
       };

       await axios.post(
         "https://api.flexmidas.com/api/hero-form-mobile",
         dataToSend
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

  return (
    <div className="max-w-md mx-auto text-sm bg-white ">
      <p className="text-base text-center text-blue-500 mb-2">
        We will reach out to you if we are a mutual fit
      </p>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter Mobile Number"
            maxLength="10"
          />
          <button
            type="button"
            onClick={handleOtpRequest}
            className="bg-blue-500  text-white px-4 py-2 w-60 rounded"
          >
            Send OTP
          </button>
        </div>

        {isOtpSent && !isOtpVerified && (
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter OTP"
              maxLength="6"
            />
            <button
              type="button"
              onClick={handleOtpVerification}
              className="bg-green-500 text-white  px-4 py-2 rounded flex items-center"
              disabled={isOtpLoading}
            >
              {isOtpLoading ? <FaSpinner className="animate-spin" /> : "Verify"}
            </button>
          </div>
        )}
        <div className="flex gap-2">
          {/* Pincode Search */}
          <div className="mb-4 relative w-1/2">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Enter Pincode"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {results.length > 0 && (
              <ul className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 bg-slate-200 z-20 overflow-y-auto w-full">
                {results.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(item)}
                    className="p-3 cursor-pointer hover:bg-gray-100 transition"
                  >
                    {item.pincode} - {item.locations}, {item.city}, {item.state}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Carpet Area */}
          <div className="mb-4 w-1/2">
            <input
              type="text"
              name="areaCarpet"
              value={formData.areaCarpet}
              onChange={handleInputChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              className="w-full p-2 border rounded"
              placeholder="Carpet Area (sq. ft.)"
              required
            />
          </div>
        </div>

        {/* Coworking Option Dropdown (At the End) */}
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

        {/* Privacy Policy Checkbox */}
        <label className="flex items-center text-sm text-gray-500">
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            className="mr-2"
            required
          />
          I am happy for propques to contact me via mail/SMS. By selecting this
          you agree to our privacy policy.
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 mt-4 text-white px-4 py-2 rounded w-full"
        >
          {isLoading ? "Submitting..." : "Let's Talk"}
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
