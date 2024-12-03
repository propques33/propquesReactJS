import React, {Suspense} from "react";
const Navbar = React.lazy(() => import("@/components/Navbar.jsx"));
const Footer = React.lazy(() => import("@/components/Footer.jsx"));
const Routing = React.lazy(() => import("@/utils/Routing.jsx"));

import "./App.css";
import { ModalProvider } from "./ModalContext.jsx"; // Modal Context Provider
import ModalForm from "./components/ModalForm.jsx"; // The form modal component
import { Helmet } from "react-helmet"; // Import Helmet for SEO
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import loading from '../public/loading.gif'
function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <img src={loading} alt="loading..." className="h-40" />
        </div>
      }
    >
      <GoogleReCaptchaProvider reCaptchaKey="6LfMEFoqAAAAAPbBd0mRptXaI8AfZN30AI9CqY1N">
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
          <div className="tracking-tighter relative">
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
