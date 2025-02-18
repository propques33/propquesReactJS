import { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "+91",
    email: "",
    billingZipCode: "",
    decimalCustomField2: "", // Carpet Area
    textCustomField7: "", // Micromarket
    textCustomField2: "",
    billingCity: "",
    billingState: "",
    agreeToContact: true,
  });

  const [pincodeQuery, setPincodeQuery] = useState("");
  const [pincodeResults, setPincodeResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // OTP states
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [otp, setOtp] = useState("");

  // Send-OTP cooldown
  const [disableOtpBtn, setDisableOtpBtn] = useState(false);
  const [timer, setTimer] = useState(0);

  // Redirect on success
  useEffect(() => {
    if (isSuccess) navigate("/thankyou");
  }, [isSuccess, navigate]);

  // OTPless callback
  const otplessCallback = (eventCallback) => {
    const { responseType, response } = eventCallback;
    switch (responseType) {
      case "ONETAP":
      case "VERIFIED":
      case "SUCCESS":
        setIsOtpLoading(false);
        setIsOtpVerified(true);
        break;
      case "OTP_AUTO_READ":
        setOtp(response.otp);
        break;
      case "FAILED":
        setIsOtpLoading(false);
        setIsOtpVerified(false);
        break;
      default:
        break;
    }
  };

  // Initialize OTPless
  useEffect(() => {
    if (window.OTPless) {
      window.OTPlessSignin = new window.OTPless(otplessCallback);
    } else {
      console.warn("OTPless SDK not found.");
    }
  }, []);

  // Timer for resend
  useEffect(() => {
    let interval;
    if (disableOtpBtn && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setDisableOtpBtn(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => interval && clearInterval(interval);
  }, [disableOtpBtn, timer]);

  // Pincode search
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      try {
        const res = await axios.get(
          `https://propques-backend-jsqqh.ondigitalocean.app/api/pincode/${value}`
        );
        setResults(res.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setResults([]);
    }
  };

  // Select pincode
  const handleSelect = (item) => {
    setQuery(
      `${item.pincode} - ${item.locations}, ${item.city}, ${item.state}`
    );
    setFormData((prev) => ({
      ...prev,
      pincode: item.pincode,
      location: item.locations,
      city: item.city,
      state: item.state,
    }));
    setResults([]);
  };

  // Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Enter an email first.");
      return;
    }
    if (window.OTPlessSignin) {
      setIsOtpSent(true);
      setDisableOtpBtn(true);
      setTimer(120);
      window.OTPlessSignin.initiate({
        channel: "EMAIL",
        email: formData.email,
      });
    }
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    setIsOtpLoading(true);
    if (window.OTPlessSignin) {
      window.OTPlessSignin.verify({
        channel: "EMAIL",
        email: formData.email,
        otp: otp,
      });
    }
  };

  // Fetch City, State & Micromarket using Pincode
  const fetchLocationDetails = async (pincode) => {
    if (pincode.length !== 6) return;

    try {
      const response = await axios.get(
        `https://propques-backend-jsqqh.ondigitalocean.app/api/pincode/${pincode}`
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        const location = response.data[0];

        setFormData((prev) => ({
          ...prev,
          billingCity: location.city,
          billingState: location.state,
          textCustomField7: location.locations?.[0] || "N/A", // Micromarket
        }));
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updatedForm = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "name") {
        updatedForm.lastname = value; // Auto-fill last name
      }

      if (name === "billingZipCode" && value.length === 6) {
        fetchLocationDetails(value); // Fetch details when pincode is entered
      }

      return updatedForm;
    });
  };

  // Handle Pincode Search as user types
  const handlePincodeSearch = async (e) => {
    const value = e.target.value;
    setPincodeQuery(value);

    if (value.length > 2) {
      try {
        const res = await axios.get(
          `https://propques-backend-jsqqh.ondigitalocean.app/api/pincode/${value}`
        );
        setPincodeResults(Array.isArray(res.data) ? res.data : [res.data]);
      } catch (error) {
        console.error("Error fetching pincode details:", error);
        setPincodeResults([]);
      }
    } else {
      setPincodeResults([]);
    }
  };

  // Select pincode from search results
  const handlePincodeSelect = (item) => {
    setPincodeQuery(`${item.pincode} - ${item.city}, ${item.state}`);
    setFormData((prev) => ({
      ...prev,
      billingZipCode: item.pincode,
      billingCity: item.city,
      billingState: item.state,
      textCustomField7: item.locations?.[0] || "N/A", // Micromarket
    }));
    setPincodeResults([]);
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

        if (!isOtpVerified) {
          alert("Verify OTP before submitting.");
          return;
        }
    // Ensure phone starts with +91 when sending
    const formattedPhone = formData.phone.startsWith("+91")
      ? formData.phone
      : `+91${formData.phone}`;

    const payload = {
      ...formData,
      phone: formattedPhone, // Ensures submission has +91

      company: 1,
      owner: 1,
      website: "www.propques.com",
      skypeId: "12345",
      otherPhone: formData.mobile,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error submitting form!");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
        <div className="flex space-x-2">
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
            required
          />
          {!isOtpVerified && (
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={disableOtpBtn}
              className="bg-blue-500 text-white px-4  w-40 rounded"
            >
              {disableOtpBtn ? `Resend OTP in ${timer}s` : "Send OTP"}
            </button>
          )}
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
              onClick={handleVerifyOtp}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
              disabled={isOtpLoading}
            >
              {isOtpLoading ? <FaSpinner className="animate-spin" /> : "Verify"}
            </button>
          </div>
        )}
        {/* Mobile Number Field */}
        <input
          name="phone"
          placeholder="Enter Mobile Number"
          onChange={handleChange}
          required
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        />
        {/* Pincode Search & Auto-Fill */}
        <div className="relative">
          <input
            type="text"
            value={pincodeQuery}
            onChange={handlePincodeSearch}
            placeholder="Enter Pincode"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          {pincodeResults.length > 0 && (
            <ul className="absolute left-0 w-full border rounded shadow-md bg-white max-h-40 overflow-y-auto mt-1 z-10">
              {pincodeResults.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePincodeSelect(item)}
                >
                  {item.pincode} - {item.locations?.[0] || "N/A"}, {item.city},{" "}
                  {item.state}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Carpet Area */}
        <input
          type="text"
          name="decimalCustomField2"
          // value={formData.decimalCustomField2}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Carpet Area (sq. ft.)"
          required
        />
        {/* Coworking Option */}
        <select
          name="textCustomField2"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
        >
          <option value="">Select Coworking Option</option>
          <option value="Start Your Own Coworking">
            Start Your Own Coworking
          </option>
          <option value="Match Making With Coworking">
            Match Making With Coworking
          </option>
        </select>
        <label className="flex items-center text-sm text-gray-500">
          <input type="checkbox" className="mr-2" required />I am happy for
          propques to contact me via mail/SMS. By selecting this you agree to
          our privacy policy.
        </label>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Let's Talk
        </button>
      </form>
    </div>
  );
}
