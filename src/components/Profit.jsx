import React from "react";
import Button from "./Button";
import bg from "../../public/bg.webp";
import six from "../../public/six.webp";
import CounterItalic from "./CounterItalic.jsx";

const Profit = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center px-6 md:px-16 "
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Text Section */}
      <h1 className="text-3xl md:text-4xl text-center font-semibold leading-snug pt-4 pb-4 text-black">
        Maximize Your Asset’s Profit Potential in Just{" "}
        <span className="inline-block align-middle">
          <img
            src={six}
            alt="six months"
            className="h-12 md:h-20 mb-1 inline-block align-middle"
            loading="lazy"
          />
        </span>{" "}
        Months
      </h1>

      <div className="flex flex-col items-center space-y-8 pb-8 w-full">
        {/* Section 1 */}
        <h1 className="text-base md:text-lg text-center leading-relaxed text-black px-4 md:px-32 lg:px-64">
          <span className="text-5xl font-semibold text-black">
            <CounterItalic desiredNumber="65" />
          </span>
          of our clients have tripled their profits in the first 6 months by
          monetizing their assets with our proven strategies.
        </h1>

        {/* Section 2 */}
        <h1 className="text-base md:text-lg text-center leading-relaxed text-black px-4 md:px-32 lg:px-64">
          <span className="text-5xl font-semibold text-black">
            <CounterItalic desiredNumber="80" />
          </span>
          Leveraging data from multiple brands, we’ve consistently turned
          underutilized spaces into high-performing coworking hubs. Achieve 80%
          Occupancy & Beyond.
        </h1>
      </div>
    </div>
  );
};

export default Profit;
