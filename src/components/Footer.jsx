import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../public/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b  from-blue-500 to-blue-600  text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Newsletter and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-2">Let’s stay in touch!</h3>
            <p className="text-sm">
              We’ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded w-full sm:w-auto text-black"
            />
            <button className="bg-white text-blue-600 py-2 px-6 rounded">
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section: Links and Logo */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" className="h-28 mb-4" />
            <p className="text-sm  text-center md:text-left">
              Helping property owners, entrepreneurs, and real estate
              professionals transform and matchmake spaces into profitable
              coworking business.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://findurspace.tech/" className="hover:underline">
                  Looking for Offices
                </a>
              </li>
              <li>
                <Link to="/our-service" className="hover:underline">
                  Our Service
                </Link>
              </li>
              <li>
                <Link to="/webinar" className="hover:underline">
                  Webinar
                </Link>
              </li>
              <li>
                <Link to="/partners-with-us" className="hover:underline">
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blogs" className="hover:underline">
                  Blog
                </Link>
                {/* <a
                  href="https://propques.beehiiv.com/"
                  className="hover:underline"
                >
                  Blog
                </a> */}
              </li>
              <li>
                <a
                  href="https://propques.zohorecruit.in/jobs/Careers"
                  className="hover:underline"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://findurspace.tech/" className="hover:underline">
                  Findurspace
                </a>
              </li>
              <li>
                <a href="https://propclean.space/" className="hover:underline">
                  Propclean
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <ul className="flex gap-4 text-lg">
              <li>
                <a
                  href="https://www.linkedin.com/company/propques/posts/?feedView=all"
                  className="hover:text-gray-200"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/propques_services/?hl=en"
                  className="hover:text-gray-200"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/propques/"
                  className="hover:text-gray-200"
                >
                  <FaFacebook />
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-200">
                  <FaTwitter />
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
          {/* <div className="text-center mb-4 text-sm text-white">
            <p>
              
              
            </p>
          </div> */}
          <p>
            {" "}
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms-and-conditions" className="hover:underline ml-2">
              Terms and Conditions
            </Link>{" "}
            |
            <Link to="#" className="hover:underline ml-2">
              Sitemap
            </Link>{" "}
            | &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
