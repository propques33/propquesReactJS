import React from "react";
import Button from "./Button";
import bg from "../../public/bg.webp";
import six from "../../public/six.webp";

const Profit = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center  px-8 md:px-16  "
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Text Section */}
      <h1 className="text-3xl relative md:text-4xl text-center font-semibold leading-snug pt-4 pb- text-black">
        Maximize Your Asset’s Profit Potential in Just{" "}
        <span className="inline-block align-middle">
          <img
            src={six}
            alt=""
            className="h-10 md:h-20 mb-3 inline-block align-middle"
            loading="lazy"
          />
        </span>
        Months
      </h1>

      <div className="flex justify-center w-full flex-col items-cener space-y-4 pb-8">
        <h1 className="text-lg md:text-lg md:px-64 text-center leading-relaxed text-black">
          <span className="text-5xl  font-semibold font text-black">
            65% <br />
          </span>
          of our clients have tripled their profits in the first 6 months by
          monetizing their assets with our proven strategies.
        </h1>
        <h1 className="text-lg md:text-lg md:px-64 text-center leading-relaxed text-black">
          <span className="text-5xl  font-semibold font text-black">
            80% <br />
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
