import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { IoMdBarcode } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./Button";
import rocket from "../../public/rocket.gif";
import hnad from "../../public/hnad.webp";
const Features = () => {
  return (
    <>
      <h1 className="md:text-5xl text-3xl  capitalize w-full font-semibold text-center md:py-8 pt-4  ">
        Our Services​
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-8 md:px-16 px-4">
        {/* Left Section - Quote */}
        <div className="md:w-1/3 h-auto flex items-center">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-center md:text-left">
            <RiDoubleQuotesL className="text-blue-500 inline-block text " />
            Maximize Your Asset's Potential with{" "}
            <span className="font-semibold font">Coworking Consultancy</span>
            <RiDoubleQuotesR className="text-blue-500 inline-block text " />
          </h1>
        </div>

        {/* Middle Section - Branding */}
        <div className="md:w-1/3 w-full  rounded md:mt-10 hover:scale-105 transition-all ease-in-out bg-zinc-100  flex flex-col items-center justify-around p-8 shadow-xl text-center">
          <div className="mb-8">
            <img src={rocket} alt="" className="h-20" />
          </div>
          <p className="text-black md:text-base text-sm leading-5 text-justify">
            Looking to build your own commercial asset brand with seamless
            management? We’ll handle everything — from creating your brand name
            and website to designing marketing strategies and implementing SOPs.
            You focus on growth, while we manage the day-to-day operations,
            turning your asset into a sellable, thriving brand.
          </p>
          <div className="py-2">
            <Button name="Start Your Own Coworking" />
          </div>
        </div>

        {/* Right Section - Partnership */}
        <div className="md:w-1/3 w-full rounded mb-10 md:mb-10 hover:scale-105 transition-all ease-in-out  shadow-xl  bg-zinc-100 flex flex-col items-center justify-around p-8 text-center">
          <div className="mb-6 md:mb-0">
            <img src={hnad} alt="" className="h-20 rounded-full" />
          </div>{" "}
          <p className="text-black md:text-base text-sm  leading-5 text-justify">
            Looking to partner with a coworking brand? We’ll take a mandate and
            use our industry connections to find the perfect brand for your
            property, whether through partnership or rental. Let us handle the
            matchmaking while you enjoy the benefits.
          </p>
          <div className="py-2">
            <Button name="Match Making With Coworking" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
