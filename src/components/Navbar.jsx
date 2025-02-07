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
      className={`fixed font-extrabold p-4 z-[80] w-full -top-1  py-5 transition-colors ${
        isScrolled ? "bg-white shadow-sm " : "bg-white "
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo in the center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="Logo" className="w-32 " loading="lazy" />
          </Link>
        </div>

        {/* Hamburger Menu on the right */}
        <div className="ml-auto z-40 flex gap-4 ">
          {/* <Button name="Let's Talk" /> */}

          <button
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <RiMenu3Fill />}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`fixed top-0 right-0 bg-wite shadow-md w-80 backdrop-blur-xl h-screen transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col text-zinc-800 mt-28 space-y-6 text-center">
            <li>
              <Link
                to="/"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="/start-your-own-coworking-space"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              >
                For Property Owner{" "}
              </Link>
            </li>
            <li className="">
              <Link
                to="/matchmaking-for-coworking-operators"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              >
                For Coworking Operator{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              >
                Works
              </Link>
            </li>

            <li>
              {/* <Link
                to="/blogs"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              > */}
              <a
                href="/blogs"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              >
                Blogs
              </a>
              {/* </Link> */}
            </li>
            <li className="">
              <Link
                to="https://propques.zohorecruit.in/jobs/Careers"
                className="text-lg hover:text-blue-400"
                onClick={toggleMenu}
              >
                Careers{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
