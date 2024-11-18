import React from "react";
import Counter  from "./Counter";
import CounterFast  from "./CounterFast";

const Impact = () => {
  return (
    <div className="px-4 md:px-16 py-">
      <h1 className="md:text-4 text-3xl capitalize w-full font-semibold text-center py-8">
        Impact That We Have Created
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-center">
        <div className="border-[1px] rounded-xl p-4">
          <h1 className="text-2xl text-blue-500 capitalize font-semibold">Sqft managed </h1>
          <h1 className="flex w-full justify-center text-3xl tracking-tight gap-1 font-semibold">
            <Counter desiredNumber={10}  /> Lac+
          </h1>
        </div>

        <div className="border-[1px] rounded-xl p-4">
          <h1 className="text-2xl text-blue-500 capitalize font-semibold ">Client managed</h1>
          <h1 className="flex w-full justify-center text-3xl tracking-tight font-semibold">
            <Counter desiredNumber={100} />+
          </h1>
        </div>

        <div className="border-[1px] rounded-xl p-4">
          <h1 className="text-2xl text-blue-500 capitalize font-semibold">Number of desk managed</h1>
          <h1 className="flex w-full font-semibold text-3xl tracking-tight justify-center">
            <CounterFast  />+
          </h1>
        </div>

        <div className="border-[1px] rounded-xl p-4">
          <h1 className="text-2xl text-blue-500 capitalize font-semibold">Revenue generated</h1>
          <h1 className="flex w-full justify-center  font-semibold text-3xl tracking-tight gap-2">
            <Counter desiredNumber={10} /> Million
          </h1>
        </div>

        <div className="border-[1px] rounded-xl p-4">
          <h1 className="text-2xl text-blue-500 capitalize font-semibold">Cities covered</h1>
          <h1 className="text-3xl tracking-tight font-semibold">
            <Counter desiredNumber={10} />
          </h1>
        </div>

        <div className="border-[1px] rounded-xl p-4">
          <h1 className="text-2xl text-blue-500 capitalize font-semibold">Rental yield</h1>
          <h1 className="flex w-full text-3xl tracking-tight font-semibold justify-center">
            <Counter desiredNumber={14} />%- <Counter desiredNumber={16} /> %
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Impact;
