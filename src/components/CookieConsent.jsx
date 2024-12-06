import React, { useState } from "react";
import CookieManager from "../utils/cookieManager";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(
    !CookieManager.getCookie("cookieConsent")
  );

  const handleAccept = () => {
    CookieManager.setCookie("cookieConsent", "true", 365);
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner z-[1000000000000000000000] fixed bottom-0 w-96   bg-gray-800 text-white p-4 flex flex-col items-center justify-between shadow-md ">
        <div className="flex flex-col items-center gap-4">
          {/* <FaCookieBite size={30} className="text-blue-400" /> */}
          <p className="text-sm md:text-base text-center">
            We use cookies to enhance your experience. By continuing, you agree
            to our use of cookies.
          </p>
          <button
            onClick={handleAccept}
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
