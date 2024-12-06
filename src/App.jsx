import React, { Suspense, useEffect } from "react";
const Navbar = React.lazy(() => import("@/components/Navbar.jsx"));
const Footer = React.lazy(() => import("@/components/Footer.jsx"));
const Routing = React.lazy(() => import("@/utils/Routing.jsx"));
import CookieManager from "./utils/CookieManager";
import CookieConsent from "./components/CookieConsent";

import "./App.css";
import { ModalProvider } from "./ModalContext.jsx"; // Modal Context Provider
import ModalForm from "./components/ModalForm.jsx"; // The form modal component
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import loading from "../public/loading.gif";
function App() {
   useEffect(() => {
     // Set user data
     CookieManager.setCookie("username", "John Doe");
     CookieManager.setCookie("location", "Bangalore");
     CookieManager.setCookie("gender", "Male");
     CookieManager.setCookie("lastSearch", "Coworking spaces in Bangalore");
     CookieManager.setCookie(
       "favorites",
       JSON.stringify(["Space A", "Space B"])
     );
     CookieManager.setCookie("preferences", JSON.stringify(["Tech", "Gaming"]));

     // Retrieve user data
     const username = CookieManager.getCookie("username");
     const location = CookieManager.getCookie("location");
     const gender = CookieManager.getCookie("gender");
     const lastSearch = CookieManager.getCookie("lastSearch");
     const favorites = JSON.parse(CookieManager.getCookie("favorites"));
     const preferences = JSON.parse(CookieManager.getCookie("preferences"));

     console.log({
       username,
       location,
       gender,
       lastSearch,
       favorites,
       preferences,
     });
   }, []);
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <img src={loading} alt="loading..." className="h-40" />
        </div>
      }
    >
      <GoogleReCaptchaProvider reCaptchaKey="6LfMEFoqAAAAAPbBd0mRptXaI8AfZN30AI9CqY1N">
      <CookieConsent />
        <ModalProvider>
          <ModalForm /> {/* Modal form that is globally accessible */}
          {/* SEO Tags */}
          <Helmet>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Coworking Matchmaking Services in India by Propques</title>
            <meta
              name="description"
              content="Propques is a coworking consultancy that specializes in assisting real estate owners in India to add coworking spaces to their portfolio."
            />

            {/* Open Graph Meta Tags */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Coworking Matchmaking Services in India by Propques"
            />
            <meta
              property="og:description"
              content="Propques is a coworking consultancy that specializes in assisting real estate owners in India to add coworking spaces to their portfolio."
            />
            <meta property="og:url" content="https://propques.com/" />
            <meta property="og:site_name" content="Propques" />
            <meta
              property="og:image"
              content="https://propques.com/wp-content/uploads/2023/01/logo-5.png"
            />
            <meta property="og:image:width" content="1067" />
            <meta property="og:image:height" content="1067" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:image"
              content="https://propques.com/wp-content/uploads/2023/01/logo-5.png"
            />
            <meta name="twitter:site" content="@propques" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://propques.com/" />
          </Helmet>
          <div className="tracking-tight relative">
            <Navbar />
            <Routing />
            <Footer />
          </div>
        </ModalProvider>
      </GoogleReCaptchaProvider>
    </Suspense>
  );
}

export default App;
