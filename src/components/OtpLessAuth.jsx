import React, { useState } from "react";
import axios from "axios";

const OtpLessAuth = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [requestId, setRequestId] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clientId = "749MDIB0QQ2NSKMAHILZN4XHMQ443BLV";
  const clientSecret = "5rsz1kal3piszyxz1ne5pc9c5z2gk9r6";

  const validateMobile = (mobile) => {
    if (!/^\+91\d{10}$/.test(mobile)) {
      return false;
    }

    return true;
  };

  const sendOtp = async () => {
    if (!validateMobile(mobile)) return;

    // Add country code if not provided
    const formattedMobile = mobile.startsWith("+") ? mobile : `+91${mobile}`;

    setIsLoading(true);
    const payload = {
      phoneNumber: formattedMobile,
      expiry: 5, // Expiry time in minutes
      otpLength: 4, // OTP length
      channels: ["SMS"], // Delivery channel
      metaData: { purpose: "Appointment Verification" },
    };

    const headers = {
      clientId: "749MDIB0QQ2NSKMAHILZN4XHMQ443BLV",
      clientSecret: "5rsz1kal3piszyxz1ne5pc9c5z2gk9r6",
      appId: "DMQXR10UUDL7DTU6326R", 
      "Content-Type": "application/json",
    };


    try {
      // Debug: Log payload and headers
      console.log("Payload:", payload);
      console.log("Headers:", headers);

      const response = await axios.post(
        "https://auth.otpless.app/auth/v1/initiate/otp",
        payload,
        { headers, timeout: 10000 }
      );

      console.log("Response:", response.data);

      if (response.data.requestId) {
        setOtpSent(true);
        setOtpError("");
      } else {
        setOtpError(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error(
        "Error sending OTP:",
        error.response?.data || error.message
      );
      setOtpError(
        error.response?.data?.message ||
          "Error sending OTP. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!clientId || !clientSecret) {
      setMessage(
        "Missing CLIENT_ID or CLIENT_SECRET in environment variables."
      );
      return;
    }

    const url = "https://auth.otpless.app/auth/v1/verify/otp";
    const payload = { requestId, otp };
   const headers = {
     clientId,
     clientSecret,
     appId: "DMQXR10UUDL7DTU6326R", 
     "Content-Type": "application/json",
   };


    try {
      setIsLoading(true);
      const response = await axios.post(url, payload, {
        headers,
        timeout: 10000,
      });
      console.log("Verify OTP Response:", response.data);

      if (response.status === 200 && response.data.isOTPVerified) {
        setMessage("OTP verified successfully!");
      } else {
        setMessage(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        setMessage("Request timed out while verifying OTP.");
      } else {
        setMessage(`Error verifying OTP: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>OtpLessAuth</h1>

      <div>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
          />
        </label>
        <button onClick={sendOtp} disabled={isLoading}>
          {isLoading ? "Sending OTP..." : "Send OTP"}
        </button>
      </div>

      {requestId && (
        <div>
          <label>
            Enter OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </label>
          <button onClick={verifyOtp} disabled={isLoading}>
            {isLoading ? "Verifying OTP..." : "Verify OTP"}
          </button>
        </div>
      )}

      {message && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default OtpLessAuth;
