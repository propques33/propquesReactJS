/* eslint-disable react/display-name */
import React, { useMemo, Suspense } from "react";
const Button = React.lazy(() => import("./Button"));
import heroimg from "../../public/heroimg.webp"; // Adjust the path based on your project structure
import HeroModel from './HeroModel'
// Memoized Hero Component
const Hero = React.memo(() => {
  // Use memoization for static content
  const content = useMemo(
    () => ({
      title: (
        <>
          <span className="text-blue-500 font-semibold">Your Premier</span>{" "}
          Partner for Monetizing Commercial Assets with{" "}
          <span className="text-blue-500 font-semibold">Coworking Spaces</span>
        </>
      ),
      subtitle: (
        <>
          Helping property owners, entrepreneurs, & <br /> real estate
          professionals transform & matchmake with{" "}
          <span className="text-blue-500 font-semibold">coworking.</span>
        </>
      ),
    }),
    [] // Content doesn't depend on any props or state
  );

  return (
    <div className="w-full  fle relative bg-white py-16 px-10 flex   md:px-8 bg-cover overflow-hidden bg-center heroFont">
      {/* Memoized Content */}
      <div className="w-[65%]  ">
        <div className="py-4 px-6 rounded-xl z-20 flex flex-col items-cente justify-cente">
          <h1 className=" font-semibold lg:text-[4rem] md:text-[3rem] text-gray-950 text-  leading-tight">
            {content.title}
          </h1>
          <h2 className="text-sm md:text-xl lg:text-2xl max-w-3xl text- font-semibold py-4 capitalize text-gray-950">
            {content.subtitle}
          </h2>
          <div className="w-full flex items-center justify-center">
            {/* Lazy-loaded Button Component */}
            {/* <Suspense fallback={<div></div>}>
              <Button name="Let's Talk" />
            </Suspense> */}
          </div>
        </div>
      </div>
      <div className="w-[35%] pt-5 z-20">
        <HeroModel />
      </div>
      {/* Lazy-loaded Image */}
      <img
        src={heroimg}
        alt="Hero Background"
        className="absolute w-[40vw] bottom-28 right-[35%]"
        loading="lazy" // Lazy load the image
        decoding="async" // Optimize image decoding
      />
    </div>
  );
});

export default Hero;
