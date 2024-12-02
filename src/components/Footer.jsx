import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-zinc-
    00 text-blue-500 py-12 mb-8 md:px-0"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Footer Content - Grid Layout for Desktop and Flex Column for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8 border-t-2 border-b-2 border-blue-600">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start col-span-1 space-y-4">
            <img src={logo} alt="Logo" className="h-16 mb-2" loading="lazy" />
            <p className="text-center md:text-left text-sm leading-relaxed">
              Helping property owners, entrepreneurs, and real estate
              professionals transform and matchmake spaces into profitable
              coworking businesses.
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://propques.zohorecruit.in/jobs/Careers"
                  className="hover:underline"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
              {/* <li><Link to="/cubispace" className="hover:underline">Cubispace</Link></li>
              <li><Link to="/work-vistar" className="hover:underline">Work Vistar</Link></li>
              <li><Link to="/summit-space" className="hover:underline">Summit Space</Link></li>
              <li><Link to="/workviaa" className="hover:underline">Workviaa</Link></li> */}
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

          {/* Contact Us */}
          <div className="md:border-r-2 border-blue-600 pr-4">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm leading-relaxed">
              3rd Floor, Tushar Arcade, Service Road, Naagarabhaavi, Bengaluru,
              Karnataka 560072
            </p>
            <a
              href="mailto:Buzz@propques.com"
              className="block mt-2 text-blue-600 hover:underline"
            >
              Buzz@propques.com
            </a>
            <p className="text-blue-600">+91-7392037856</p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border p-2 rounded w-full"
              />
              <button className="bg-[#2362AB] text-white py-2 rounded w-full">
                Subscribe
              </button>
            </form>
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com/company/propques/posts/?feedView=all">
                <FaLinkedin size={24} className="text-blue-500" />
              </a>
              <a href="https://www.instagram.com/propques_services/?hl=en">
                <FaInstagram size={24} className="text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Links */}
        <div className="text-center mt-10 text-sm text-gray-500">
          <p>
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
            |<span className="ml-2">© 2024 Propques</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
