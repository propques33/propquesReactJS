import React, { useEffect } from "react";
import checkgreen from "../../public/check-green.gif";
import { Helmet } from "react-helmet";
const SuccessPage = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mt-20 flex items-center justify-center ">
      <Helmet>
        <title>Thank You for Connecting with Propques</title>
        <meta
          name="description"
          content=" We appreciate your interest in Propques. Our team will get back to you shortly."
        />
        <link rel="canonical" href="https://propques.com/thankyou" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg max-w-lg text-center">
        <div className="">
          <img
            src={checkgreen}
            alt="Success Illustration"
            className="mx-auto rounded-full h-20"
            loading="lazy"
          />
        </div>
        <h1 className="text-white">
          Thank You
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Form Submitted Successfully!
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for submitting the form. We have received your information
          and will get in touch with you shortly.
        </p>

        <a href="/" className="text-blue-500">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
