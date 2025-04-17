import { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useModal } from "../ModalContext"; // <-- Import your modal context
import HeroModel from './HeroModel'
export default function ContactForm() {
  const navigate = useNavigate();
  const { isFormOpen, toggleForm } = useModal(); // <-- Destructure modal controls

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
          `https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/pincode/${value}`
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
        `https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/pincode/${pincode}`
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
          `https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/pincode/${value}`
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
      await axios.post(
        "https://hook.eu2.make.com/b8iebbyrokw9p15vrpl6y8ehca5c22o1",
        payload
      );
      const response = await axios.post(
        "https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/contact",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      // alert("Form submitted successfully!");
      navigate("/thankyou");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error submitting form!");
    }
  };
    if (!isFormOpen) return null;


  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={toggleForm}
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-md max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X Button */}
        <button
          onClick={toggleForm}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          &#10005;
        </button>
      <HeroModel />
      </div>
    </div>
  );
}
