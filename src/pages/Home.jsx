import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import HeroMobile from "../components/HeroMobile.jsx";
import { IoClose } from "react-icons/io5";

// const Hero = React.lazy(() => import("@/components/Hero.jsx"));

const Marqueee = React.lazy(() => import("@/components/Marquee.jsx"));
const FindUrSpaceUI = React.lazy(() => import("@/components/FindUrSpaceUI.jsx"));
const PropClean = React.lazy(() => import("@/components/PropClean.jsx"));
const Features = React.lazy(() => import("@/components/Features"));
const ImagePopup = React.lazy(() => import("@/components/ImagePopup"));
const Offer2 = React.lazy(() => import("@/components/Offer2"));
const Profit = React.lazy(() => import("@/components/Profit"));
const Risk = React.lazy(() => import("@/components/Risk"));
const Contact = React.lazy(() => import("./Contact"));
const Faq = React.lazy(() => import("@/components/Faq"));
const Apply = React.lazy(() => import("@/components/Apply"));
const Impact = React.lazy(() => import("@/components/Impact"));
const Collab = React.lazy(() => import("@/components/Collab"));
import HeroFormMobile from "../components/HeroFormMobile.jsx";
import Blogs from "../components/BlogList.jsx";


const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Open the popup after 3 seconds if on mobile
    if (isMobile) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 25000);

      return () => {
        clearTimeout(timer);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div>
      {/* Desktop Hero */}
      <div className="md:block lg:block hidden">
        <Hero id="home" />
      </div>
      {/* Mobile Hero */}
      <div className="md:hidden lg:hidden block h-[70vh]">
        <HeroMobile id="home" />
      </div>
      {/* HeroModel Popup */}
      {showPopup && (
        <div className="fixed z-[100000000000000000000000000000] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div
            className="bg-white rounded-xl  px-8 py-10 shadow-lg transform transition-transform duration-500 scale-100 opacity-100"
            style={{ animation: "fadeIn 0.5s ease-out" }}
          >
            <button
              className="  text-2xl absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all"
              onClick={() => setShowPopup(false)}
            >
              <IoClose />
            </button>

            <HeroFormMobile />
          </div>
        </div>
      )}
      {/* Other Components */}
      <Apply />
      <Marqueee id="case" />
      <Features id="service" />
      <ImagePopup id="about" />
      <Offer2 id="" />
      <Risk id="" />
      <Profit id="" />
      <Impact />
      <Collab />
      <FindUrSpaceUI />
      <PropClean />
      <Faq id="faq" />
      <Contact id="contact" />
      {/* Animation styles */}
    
    </div>
  );
};

export default Home;
