// import React, { useEffect, useState } from "react";

// function EmailAuth() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");

//   // 1. Define the callback function to handle different OTPless events
//   const callback = (eventCallback) => {
//     // Depending on the responseType, do your desired handling
//     const { responseType, response } = eventCallback;

//     switch (responseType) {
//       case "ONETAP":
//         // Example: If you are using a one-tap sign in somewhere
//         console.log("One-tap login response: ", response);
//         break;

//       case "OTP_AUTO_READ":
//         // If you're using auto-read feature for the OTP
//         console.log("Auto-read OTP: ", response.otp);
//         // Optionally set it in the state if you want to auto-populate the input
//         setOtp(response.otp);
//         break;

//       case "FAILED":
//         // Something went wrong
//         console.error("OTPless request failed: ", response);
//         break;

//       case "FALLBACK_TRIGGERED":
//         // Fallback triggered if user device doesn't support certain flows
//         console.log("Fallback triggered: ", response);
//         break;

//       default:
//         console.log("Unknown response: ", eventCallback);
//     }
//   };

//   // 2. Initialize the OTPless instance once the component mounts
//   useEffect(() => {
//     // Make sure the OTPless script is loaded:
//     if (window.OTPless) {
//       // Create a global or local instance of OTPless
//       window.OTPlessSignin = new window.OTPless(callback);
//     } else {
//       console.warn(
//         "OTPless SDK not found. Make sure the script tag is in your index.html."
//       );
//     }
//   }, []);

//   // 3. Handler to request an OTP via email
//   const handleSendOtp = () => {
//     if (window.OTPlessSignin) {
//       window.OTPlessSignin.initiate({
//         channel: "EMAIL",
//         email: email,
//       });
//     }
//   };

//   // 4. Handler to verify the received OTP
//   const handleVerifyOtp = () => {
//     if (window.OTPlessSignin) {
//       window.OTPlessSignin.verify({
//         channel: "EMAIL",
//         email: email,
//         otp: otp,
//       });
//     }
//   };

//   // 5. Simple UI with input for email & OTP
//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto", marginTop: 50 }}>
//       <h3>Email OTP Login</h3>

//       <div style={{ marginBottom: 20 }}>
//         <label>Email:</label>
//         <br />
//         <input
//           type="email"
//           placeholder="user@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", padding: 8, marginTop: 8 }}
//         />
//       </div>

//       <button onClick={handleSendOtp} style={{ padding: "8px 16px" }}>
//         Send OTP
//       </button>

//       <div style={{ marginTop: 20 }}>
//         <label>OTP:</label>
//         <br />
//         <input
//           type="text"
//           placeholder="6-digit OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           style={{ width: "100%", padding: 8, marginTop: 8 }}
//         />
//       </div>

//       <button
//         onClick={handleVerifyOtp}
//         style={{ padding: "8px 16px", marginTop: 20 }}
//       >
//         Verify OTP
//       </button>
//     </div>
//   );
// }

// export default EmailAuth;

import React from 'react'

const OTPCompo = () => {
  return (
    <div>OTPCompo</div>
  )
}

export default OTPCompo



// import React, { useState } from "react";
// import axios from "axios";

// export default function SalesmateContactForm() {
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `https://link_name.salesmate.io/apis/contact/v4/${email}`,
//         { firstName, lastName },
//         {
//           headers: {
//             accessToken: "e55130c0-d0b7-11ee-9435-517682d0b702",
//             secretKey: "e55130c1-d0b7-11ee-9435-517682d0b702",
//             sessionToken: "39c4c1b0-e513-11ef-a130-b9ebcf59a1ef",
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert("Contact saved!");
//     } catch (err) {
//       console.error(err);
//       alert("Error saving contact");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="First Name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
