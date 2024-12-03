import React from "react";
import { IoMenu } from "react-icons/io5";
import CircularProgress from "../Charts/CircularProgress";

const Revenue = () => {
  return (
    <div className="p-5 rounded-md bg-white shadow-xl w-full sm:w-full md:w-full lg:w-1/3">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Revenue</h2>
          <h6 className="text-sm text-gray-500">Revenue Target</h6>
        </div>
        <IoMenu className="text-2xl text-gray-700 cursor-pointer" />
      </div>

      {/* Circular Progress and Description */}
      <div className="mt-6 flex flex-col items-center space-y-5">
        <CircularProgress />
        <p className="text-center text-sm md:text-base">
          Your earned <span className="font-semibold">$15,000</span> today,
          which is higher than yesterday
        </p>
      </div>

      {/* Revenue Stats */}
      <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-base font-medium">Total Revenue</h2>
          <h1 className="text-lg font-semibold text-gray-700">$100k</h1>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-base font-medium">Today</h2>
          <h1 className="text-lg font-semibold text-gray-700">$15k</h1>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
