import React, { useState, useEffect } from "react";
import CookieManager from "../utils/cookieManager";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false); // Initially hidden
  const [blurBackground, setBlurBackground] = useState(false); // Manage background blur
  const [animateBanner, setAnimateBanner] = useState(false); // For smooth transition

  useEffect(() => {
    if (!CookieManager.getCookie("cookieConsent")) {
      setTimeout(() => {
        setBlurBackground(true); // Apply blur to background
        setShowBanner(true); // Show banner
        setTimeout(() => {
          setAnimateBanner(true); // Trigger animation
        }, 100); // Delay for CSS animation to apply
      }, 3000); // Wait 3 seconds before showing banner
    }
  }, []);

  const handleAccept = () => {
    CookieManager.setCookie("cookieConsent", "true", 365);
    setAnimateBanner(false); // Remove animation
    setTimeout(() => {
      setShowBanner(false);
      setBlurBackground(false); // Remove background blur
    }, 300); // Delay for smooth closing animation
  };

  const handleReject = () => {
    CookieManager.deleteCookie("cookieConsent");
    setAnimateBanner(false); // Remove animation
    setTimeout(() => {
      setShowBanner(false);
      setBlurBackground(false); // Remove background blur
    }, 300); // Delay for smooth closing animation
  };

  return (
    <>
      {blurBackground && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[1000] transition-opacity duration-300"></div>
      )}
      {showBanner && (
        <div
          className={`cookie-banner z-[100000000000000000000000000000000000000000] fixed  bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/   w-full bg-white text-black p-6 flex flex-col items-center justify-between shadow-xl rounded-lg transition-transform duration-300 ${
            animateBanner
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-between items-start w-full">
              <h2 className="text-lg font-bold">Cookies</h2>
              {/* <button
                onClick={() => setShowBanner(false)}
                className="text-gray-500 text-2xl hover:text-gray-800"
              >
                &times;
              </button> */}
            </div>
            <p className="text-sm text-center">
              We use cookies and similar technologies to help personalise
              content, tailor and measure ads, and provide a better experience.
              By clicking accept, you agree to this, as outlined in our Cookies
              Policy.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleAccept}
                className="hover:bg-blue-700 bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Accept
              </button>
              <button
                onClick={handleReject}
                className="hover:bg-gray-300 bg-gray-200 text-black px-4 py-2 rounded-md transition duration-300"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
