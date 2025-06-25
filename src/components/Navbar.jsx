import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "/weblogo.png";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 font-extrabold z-[80] w-full transition-all duration-300 ${
  isScrolled
    ? "bg-white/90 backdrop-blur-md shadow-lg"
    : "bg-white/95 shadow-md"
}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo in the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block">
              <img
                src={logo}
                alt="Logo"
                className="w-28 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Hamburger Menu on the right */}
          <div className="ml-auto z-40">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-zinc-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <RiMenu3Fill className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Links */}
          <div
            className={`fixed top-0 right-0 bg-white/95 backdrop-blur-md shadow-xl w-80 h-screen transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-100">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-28 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <ul className="flex-1 overflow-y-auto p-6 space-y-4">
                {[
                  { path: "/", label: "Home" },
                  { path: "/start-your-own-coworking-space", label: "For Property Owner" },
                  { path: "/matchmaking-for-coworking-operators", label: "For Coworking Operator" },
                  { path: "/works", label: "Works" },
                  { path: "/studio", label: "Propques Studio" },
                  { path: "/blogs", label: "Blogs" },
                  { path: "https://propques.zohorecruit.in/jobs/Careers", label: "Careers" }
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="p-6 border-t border-gray-100">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
