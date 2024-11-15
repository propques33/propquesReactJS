import React from "react";
import Counter from "./Counter";
const Revenue = () => {
  return (
    <div className="md:px-16 px-4">
      <h1 className="md:text-5xl text-3xl  capitalize w-full font-semibold text-center py-4 ">
        Outcome
      </h1>
      <div>
        <div className="w-full text-center ">
          <h1 className="text-3xl">Cities We Are Currently Available</h1>
          <p className=" text-3xl text-center w-full text-blue-500">
            <Counter desiredNumber={10} />
          </p>
        </div>
        <div className=" text-center w-full mt-4">
          <h1 className="text-3xl">Monthly Generated Revenue</h1>
          <p className="flex items-center font-semibold text-blue-500 justify-center text-3xl text-center w-full ">
            <Counter desiredNumber={5} />
            <p className="pb-0.5 font-semibold text-blue-500">Lacs</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
