import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiCustomerService2Line, RiQuestionAnswerLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm md:px- sticky top-0 z-50">
      <div className="mx-auto px-2 sm:px-6 lg:px-16">
        <div className="relative flex items-center justify-between h-20">
          <div className="absolute inset-y-0  left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-900 hover:text-white hover:bg-zinc-700 transition-all ease-in-out focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6 " aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6 " aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                src="https://propques.com/wp-content/uploads/2023/12/Untitled_design__2_-removebg-preview-e1702983011868-60x61.png"
                alt="Logo"
                className="h-13 w-13 "
                loading="lazy"
              />
            </div>
            <div className="hidden sm:flex items-center w-full sm:ml-6">
              <div className="flex justify-end gap-4 w-full">
                <Link
                  to="/"
                  className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <FiHome size={20} /> Home
                </Link>
                <Link
                  to="/service"
                  className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <RiCustomerService2Line size={20} /> Service
                </Link>
                <Link
                  to="/about"
                  className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <IoInformationCircleOutline size={20} /> About Us
                </Link>
                <Link
                  to="/case"
                  className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <FaProjectDiagram size={20} /> Case Studies
                </Link>
                <Link
                  to="/faqs"
                  className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  <RiQuestionAnswerLine size={20} /> FAQ's
                </Link>
              </div>
              <div>
                {/* Let's Talk Button */}
                <Link
                  to="/contact"
                  className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-md font-medium hover:bg-blue-700 transition-colors ease-in-out"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <FiHome size={20} /> Home
            </Link>
            <Link
              to="/service"
              className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <RiCustomerService2Line size={20} /> Service
            </Link>
            <Link
              to="/about"
              className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <IoInformationCircleOutline size={20} /> About Us
            </Link>
            <Link
              to="/projects"
              className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <FaProjectDiagram size={20} /> Case Studies
            </Link>
            <Link
              to="/faqs"
              className="text-zinc-900 flex gap-1 items-center hover:bg-zinc-700 transition-all ease-in-out hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              <RiQuestionAnswerLine size={20} /> FAQ's
            </Link>
            {/* Let's Talk Button for Mobile */}
            <Link
              to="/contact"
              className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors ease-in-out"
              onClick={toggleMenu}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
