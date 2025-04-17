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
    decimalCustomField2: "",
    textCustomField7: "",
    textCustomField2: "",
    billingCity: "",
    billingState: "",
    agreeToContact: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [disableOtpBtn, setDisableOtpBtn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (isSuccess) navigate("/thankyou");
  }, [isSuccess, navigate]);

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

  useEffect(() => {
    if (window.OTPless) {
      window.OTPlessSignin = new window.OTPless(otplessCallback);
    }
  }, []);

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

  const fetchLocationDetails = async (pincode) => {
    if (pincode.length !== 6) return;
    try {
      const res = await axios.get(
        `https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/pincode/${pincode}`
      );
      if (Array.isArray(res.data) && res.data.length > 0) {
        const loc = res.data[0];
        setFormData((prev) => ({
          ...prev,
          billingCity: loc.city,
          billingState: loc.state,
          textCustomField7: loc.locations?.[0] || "N/A",
        }));
      }
    } catch (err) {
      console.error("Location fetch failed", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: type === "checkbox" ? checked : value };
      if (name === "name") updated.lastname = value;
      if (name === "billingZipCode" && value.length === 6) fetchLocationDetails(value);
      return updated;
    });
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!formData.email) return alert("Enter an email first.");
    if (window.OTPlessSignin) {
      setIsOtpSent(true);
      setDisableOtpBtn(true);
      setTimer(120);
      window.OTPlessSignin.initiate({ channel: "EMAIL", email: formData.email });
    }
  };

  const handleVerifyOtp = () => {
    if (!otp) return alert("Please enter the OTP.");
    setIsOtpLoading(true);
    if (window.OTPlessSignin) {
      window.OTPlessSignin.verify({ channel: "EMAIL", email: formData.email, otp });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpVerified) return alert("Verify OTP before submitting.");

    const formattedPhone = formData.phone.startsWith("+91") ? formData.phone : `+91${formData.phone}`;
    const payload = {
      firstName: formData.name,
      lastName: formData.lastname || formData.name,
      phone: formattedPhone,
      email: formData.email,
      billingZipCode: formData.billingZipCode,
      billingCity: formData.billingCity,
      billingState: formData.billingState,
      textCustomField2: formData.textCustomField2,
      textCustomField7: formData.textCustomField7,
      decimalCustomField2: formData.decimalCustomField2,
      company: 1,
      owner: 1,
      website: "www.propques.com",
      skypeId: "12345",
      stage: 1234567,
      agreeToContact: true,
      notes: "",
      domain: [],
      date: new Date().toISOString(),
    };

    try {
      await axios.post("https://hook.eu2.make.com/b8iebbyrokw9p15vrpl6y8ehca5c22o1", payload);
      await axios.post("https://propq-com-backend-blog-fus-propq-czviz.ondigitalocean.app/api/contact", payload);
      navigate("/thankyou");
    } catch (err) {
      console.error("Submission Error", err);
      alert("Error submitting form!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <p className="text-blue-500 text-center">We will reach out to you if we are a mutual fit</p>
      <input name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-2 border rounded" />
      <div className="flex space-x-2">
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} className="flex-1 p-2 border rounded" required />
        {!isOtpVerified && (
          <button type="button" onClick={handleSendOtp} disabled={disableOtpBtn} className="bg-blue-500 text-white px-4 rounded">
            {disableOtpBtn ? `Resend OTP in ${timer}s` : "Send OTP"}
          </button>
        )}
      </div>
      {isOtpSent && !isOtpVerified && (
        <div className="flex items-center gap-2">
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter OTP" maxLength="6" />
          <button type="button" onClick={handleVerifyOtp} className="bg-green-500 text-white px-4 py-2 rounded" disabled={isOtpLoading}>
            {isOtpLoading ? <FaSpinner className="animate-spin" /> : "Verify"}
          </button>
        </div>
      )}
      <input name="phone" placeholder="Enter Mobile Number" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="billingZipCode" placeholder="Enter Pincode" onChange={handleChange} required className="w-full p-2 border rounded" />
      <input type="text" name="decimalCustomField2" onChange={handleChange} className="w-full p-2 border rounded" placeholder="Carpet Area (sq. ft.)" required />
      <select name="textCustomField2" onChange={handleChange} className="w-full p-2 border rounded">
        <option value="">Select Coworking Option</option>
        <option value="Start Your Own Coworking">Start Your Own Coworking</option>
        <option value="Match Making With Coworking">Match Making With Coworking</option>
      </select>
      <label className="flex items-center text-sm text-gray-500">
        <input type="checkbox" className="mr-2" required />I am happy for propques to contact me via mail/SMS. By selecting this you agree to our privacy policy.
      </label>
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Let's Talk</button>
    </form>
  );
}

