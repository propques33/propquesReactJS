import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoChatbubblesSharp } from "react-icons/io5";

const Features = () => {
  return (
    <div className="px-4 md:px-16 md:py-8">
      <h1 className="text-2xl md:text-4xl font-semibold mb- text-center md:text-left">
        Explore our host of services
        <span className="text-blue-500 text-4xl rounded-full">.</span>
      </h1>
      <h1 className="text-lg  md:text-xl lg:text-2xl text-zinc-700 text-center md:text-left">
        <RiDoubleQuotesL
          className="text-blue-500 inline-block mb-2"
          size={20}
        />
        Maximize Your Asset's Potential with{" "}
        <span className="font-semibold text-zinc-900 font">
          Coworking Consultancy
        </span>
        <RiDoubleQuotesR
          className="text-blue-500 inline-block mb-2"
          size={20}
        />
      </h1>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Left Section - Branding */}
        <div className="w-full md:w-1/2 bg-white rounded-xl border border-zinc-100 p-6 hover:scale-105 transition-transform hover:shadow-lg text-center flex flex-col items-center justify-between">
          <div className="mb-4">
            <RiSearchEyeLine className="text-blue-500 mx-auto" size={60} />
          </div>
          <div className="text-zinc-700 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-[#0067d6] mb-2">
              Transform your property into a revenue-generating coworking space
            </h2>
            <p className="text-sm md:text-base text-center leading-relaxed">
              {/* We’ll handle everything — from{" "}
              <span className="font-bold text-zinc-800">
                creating your brand name
              </span>
              ,{" "}
              <span className="font-bold text-zinc-800">website designing</span>
              ,{" "}
              <span className="font-bold text-zinc-800">
                marketing strategies
              </span>
              , and{" "}
              <span className="font-bold text-zinc-800">implementing SOPs</span>
              . */}
              Launch your flex space with confidence! Propques' Focus and
              Feasibility Report delivers in-depth demographic insights,
              competitor analysis, and real-world financial projections for any
              India market. It's the ultimate tool for planning a successful
              coworking space.
            </p>
          </div>
          <div className="mt-4">
            <Link to="/start-your-own-coworking-space">
              <p className="bg-blue-500 w-full shadow-xl sm:w-auto text-center hover:bg-blue-600 transition-all ease-in-out px-6 py-2 sm:px-6 sm:py-3 rounded-xl text-white  sm:text-md md:text-[15px] flex items-center justify-center gap-2">
                <IoChatbubblesSharp className="text-lg sm:text-xl" /> Learn More
              </p>
            </Link>
          </div>
        </div>

        {/* Right Section - Partnership */}
        <div className="w-full md:w-1/2 bg-white rounded-xl border border-zinc-100 p-6 hover:scale-105 transition-transform hover:shadow-lg text-center flex flex-col items-center justify-between">
          <div className="mb-4">
            <FaUserFriends className="text-blue-500 mx-auto" size={60} />
          </div>
          <div className="text-zinc-700 text-left">
            <h2 className="text-xl md:text-2xl text-center font-semibold text-[#0067d6] mb-2">
              Grow your brand bigger and better.
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-center">
              {/* We’ll take a mandate and use our{" "}
              <span className="font-bold text-zinc-800">
                industry connections
              </span>{" "}
              to find the{" "}
              <span className="font-bold text-zinc-800">
                perfect brand for your property
              </span>
              , whether through partnership or rental. */}
              Propques helps coworking spaces grow by connecting them with
              property owners who support the coworking vision.
            </p>
          </div>
          <div className="mt-4">
            <Link to="/matchmaking-for-coworking-operators">
              <p className="bg-blue-500 w-full shadow-xl sm:w-auto text-center hover:bg-blue-600 transition-all ease-in-out px-6 py-2 sm:px-6 sm:py-3 rounded-xl text-white  sm:text-md md:text-[15px] flex items-center justify-center gap-2">
                <IoChatbubblesSharp className="text-lg sm:text-xl" /> Scale up
                your coworking space
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
