import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Routing from "./utils/Routing.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { ModalProvider } from "./ModalContext.jsx"; // Modal Context Provider
import ModalForm from "./components/ModalForm.jsx"; // The form modal component
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import wh from '../public/wh.png';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfMEFoqAAAAAPbBd0mRptXaI8AfZN30AI9CqY1N">

      <ModalProvider>
        <ModalForm /> {/* Modal form that is globally accessible */}
        
        {/* SEO Tags */}
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Start Your Own Coworking Space In India | Propques</title>
          <meta name="description" content="Propques is a coworking consultancy that specializes in assisting real estate owners in India to add coworking spaces to their portfolio." />

          {/* Open Graph Meta Tags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Start Your Own Coworking Space In India | Propques" />
          <meta property="og:description" content="Propques is a coworking consultancy that specializes in assisting real estate owners in India to add coworking spaces to their portfolio." />
          <meta property="og:url" content="https://propques.com/" />
          <meta property="og:site_name" content="Propques" />
          <meta property="og:image" content="https://propques.com/wp-content/uploads/2023/01/logo-5.png" />
          <meta property="og:image:width" content="1067" />
          <meta property="og:image:height" content="1067" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://propques.com/wp-content/uploads/2023/01/logo-5.png" />
          <meta name="twitter:site" content="@propques" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://propques.com/" />
          
        
        </Helmet>

        <div className="tracking-tighter relative">
          <Navbar />
          <Routing />
          <Footer />
          {/* Optional WhatsApp button image */}
          {/* <img src={wh} className="absolute md:bottom-16 md:right-16 bottom-12 right-2 md:h-20 h-16 text-green-600 fixed text-6xl" alt="WhatsApp" /> */}
        </div>
      </ModalProvider>
      </GoogleReCaptchaProvider>

  );
}

export default App;
