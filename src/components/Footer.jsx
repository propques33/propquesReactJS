import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-[#2362AB] py-10 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content - Grid Layout for Desktop and Flex Column for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 py-8 border-t-[3px] border-b-[3px]  border-blue-600">
          {/* Logo and Description */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <img
              src="https://propques.com/wp-content/uploads/2023/12/Untitled_design__2_-removebg-preview-e1702983011868-60x61.png"
              alt="Logo"
              className="h-16 mb-4"
            />
            <p className="text-center md:text-left text-sm">
              Helping property owners, entrepreneurs, and real estate professionals transform and matchmake spaces into profitable coworking business.
            </p>
          </div>

          {/* Menu Section */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-2">Menu</h3>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Looking for Offices</a></li>
             
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1 border-r-[3px]  border-blue-600">
            <h3 className="font-semibold text-lg mb-2 ">Contact Us</h3>
            <p className="text-sm">
              Naagarabhaavi, Bangalore 3rd Floor, Tushar Arcade, Service Road, Naagarabhaavi, Bengaluru, Karnataka 560072
            </p>
            <a href="mailto:Buzz@propques.com" className="text-blue-600 hover:underline">Buzz@propques.com</a>
            <p className="text-blue-600">+91-7392037856</p>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1 ">
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="email" placeholder="E-mail" className="border p-2 rounded" />
              <button className="bg-[#2362AB] text-white py-2 rounded">Subscribe</button>
            </form>
            <div className="flex gap-3 mt-4">
              <FaInstagram size={24} className="text-[#2362AB] hover:text-blue-600 cursor-pointer" />
              <FaLinkedin size={24} className="text-[#2362AB] hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Footer Bottom - Links */}
        <div className="text-center  my-8 pt-4 text-sm">
          <p className="text-gray-500">
            <a href="#" className="hover:underline">Privacy Policy</a> | 
            <a href="#" className="hover:underline ml-2">Terms and Conditions</a> | 
            <a href="#" className="hover:underline ml-2">Sitemap</a> | 
            <span className="ml-2">Copyright © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
