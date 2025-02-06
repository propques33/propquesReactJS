import React from "react";
import { FaLinkedin, FaBusinessTime, FaUsers, FaChartLine, FaLightbulb } from "react-icons/fa";
import img1 from "../../public/t.webp";

const SwithenIntro = () => {
  return (
    <div className=" mx-auto p-6 bg-white  flex flex-col md:flex-row items-center">
      {/* Profile Image */}
      <img
        src={img1} // Replace with actual profile picture URL
        alt="Swithen Thomas"
        className="w-40 h-40 rounded-full  shadow-lg"
      />

      {/* Content Section */}
      <div className="md:ml-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mt-4 md:mt-0">
          Written By <span className="text-blue-600">Swithen Thomas</span>
        </h2>
        <p className="text-gray-800 mt-2">
          Swithen Thomas is a{" "}
          <strong>strategic leader and business growth expert</strong> with a
          passion for
          <strong>
            {" "}
            innovation, leadership, and driving sustainable success.
          </strong>{" "}
          He specializes in scaling businesses, optimizing operations, and
          unlocking new revenue opportunities, also instrumental in
          helping businesses scale, optimize operations, and unlock new revenue
          opportunities.
        </p>

        {/* Skills Section */}
        {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center">
            <FaLightbulb className="text-blue-500 mr-2" size={20} />
            <p>
              <strong>Strategic Vision:</strong> Turning ideas into growth
              strategies.
            </p>
          </div>
          <div className="flex items-center">
            <FaChartLine className="text-green-500 mr-2" size={20} />
            <p>
              <strong>Business Growth:</strong> Unlocking revenue potential.
            </p>
          </div>
          <div className="flex items-center">
            <FaUsers className="text-purple-500 mr-2" size={20} />
            <p>
              <strong>Leadership:</strong> Building and empowering teams.
            </p>
          </div>
          <div className="flex items-center">
            <FaBusinessTime className="text-yellow-500 mr-2" size={20} />
            <p>
              <strong>Industry Expertise:</strong> Deep knowledge in various
              sectors.
            </p>
          </div>
        </div> */}

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/swithenthomas/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 items-center justify-center inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <FaLinkedin size={20} className="mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default SwithenIntro;
