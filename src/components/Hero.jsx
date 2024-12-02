import React, { useMemo, Suspense } from "react";
const Button = React.lazy(() => import("./Button"));
import heroimg from "../../public/heroimg.webp"; // Adjust the path based on your project structure

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
          Helping property owners, entrepreneurs, and real estate professionals
          transform and matchmake with{" "}
          <span className="text-blue-500 font-semibold">coworking</span>
        </>
      ),
    }),
    [] // Content doesn't depend on any props or state
  );


  return (
    <div className="w-full relative bg-white py-40 md:py-40 flex flex-col items-center justify-center px-4 md:px-0 bg-cover overflow-hidden bg-center heroFont">
      {/* Memoized Content */}
      <div className="py-4 px-6 rounded-xl z-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold lg:text-7xl text-gray-950 text-center max-w-5xl leading-tight">
          {content.title}
        </h1>
        <h2 className="text-sm md:text-md lg:text-xl max-w-3xl text-center font-semibold py-4 capitalize text-gray-950">
          {content.subtitle}
        </h2>
        <div className="w-full flex items-center justify-center">
          {/* Lazy-loaded Button Component */}
          <Suspense fallback={<div>Loading...</div>}>
            <Button name="Let's Talk" />
          </Suspense>
        </div>
      </div>
      {/* Lazy-loaded Image */}
      <img
        src={heroimg}
        alt="Hero Background"
        className="absolute md:w-full md:p-96 w-60 md:ml-[55vw] ml-[45vw] md:mb-0 -mb-5"
        loading="lazy" // Lazy load the image
        decoding="async" // Optimize image decoding
      />
    </div>
  );
});


export default Hero;
