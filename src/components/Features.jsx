import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoMdBarcode } from "react-icons/io";
import { RiSearchEyeLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";
import rocket from "../../public/rocket.gif";
import hnad from "../../public/hnad.webp";
const Features = () => {
  return (
    <div className="md:px-16 px-4 ">
      <h1 className="md:text-4xl text-3xl  w-full font-semibold md:pb-4   ">
        Explore our host of services
        <span className="text-blue-500 text-4xl rounded-full">.</span>
      </h1>
      <h1 className="text-xl text-zinc-700 md:text-2xl lg:text-3xl text-center md:text-left">
        <RiDoubleQuotesL
          className="text-blue-500 inline-block text mb-4 "
          size={20}
        />
        Maximize Your Asset's Potential with{" "}
        <span className="font-semibold font text-zinc-900">
          Coworking Consultancy
        </span>
        <RiDoubleQuotesR
          className="text-blue-500 inline-block text mb-4"
          size={20}
        />
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-8 ">
        {/* Left Section - Branding */}
        <div className="md:w-1/2 w-full rounded-xl mt-6  hover:scale-105 transition-all ease-in-out   flex flex-col items-center justify-around py-6 px-8 border-[1px] border-zinc-100   hover:shadow-xl text-center">
          <p className="text-black gap-6 leading-tight flex md:text-lg text-sm text-left text-jutify">
            <div className="mb-8">
              {/* <img src={rocket} alt="" className="w-96" /> */}
              <RiSearchEyeLine className="" size={60} />
            </div>
            <div className="text-zinc-700">
              <span className="text-[#0067d6]  font-semibold text-2xl flex">
                {" "}
                Looking to build your own commercial asset brand with seamless
                management?
              </span>
              <div className="mt-2"></div>
              We’ll handle everything — from{" "}
              <span className="font-bold text-zinc-800">
                creating your brand name
              </span>
              ,
              <span className="font-bold text-zinc-800">
                {" "}
                website designing
              </span>
              ,{" "}
              <span className="font-bold text-zinc-800">
                marketing strategies
              </span>{" "}
              and
              <span className="font-bold text-zinc-800">
                {" "}
                implementing SOPs
              </span>
              {/* . You focus on growth, while we manage your asset into a sellable, thriving brand */}
            </div>
          </p>
          <div className="py-2">
            <Button name="Start Your Own Coworking" />
          </div>
        </div>

        {/* Right Section - Partnership */}
        <div className="md:w-1/2 w-full rounded-xl mt-6  border-[1px] border-zinc-100 hover:scale-105 transition-all ease-in-out   flex flex-col items-center justify-around py-6 px-8 hover:shadow-xl text-center">
          <p className="text-black gap-6 leading-tight flex md:text-lg text-sm text-left text-jutify">
            <div className="mb-8">
              {/* <img src={rocket} alt="" className="w-96" /> */}
              <FaUserFriends className="" size={60} />
            </div>
            <div className="text-zinc-700">
              <span className="text-[#0067d6] font-semibold text-2xl flex">
                {" "}
                Looking to partner with a coworking brand?
              </span>
              <div className="mt-2"></div>
              We’ll take a mandate and use our{" "}
              <span className="font-bold text-zinc-800">
                industry connections
              </span>{" "}
              to find the
              <span className="font-bold text-zinc-800">
                {" "}
                perfect brand for your property
              </span>
              , whether
              <span className="font-bold text-zinc-800">
                {" "}
                partnership or rental.
              </span>{" "}
              {/* Let us handle the matchmaking while you */}
              <span className="font-bold text-zinc-800">
                {" "}
                {/* enjoy the benefits. */}
              </span>
            </div>
          </p>
          <div className="py-2">
            <Button name="Match Making With Coworking" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
