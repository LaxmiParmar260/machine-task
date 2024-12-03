import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import InvoiceProgress from "../Charts/InvoiceProgress";

const InvoiceComp = () => {
  return (
    <div className="mobile p-5 rounded-md md:w-full w-full bg-white shadow-xl">
      <div className="flex justify-between">
        <h2 className="text-xl">Invoice Status</h2>
        <SlOptionsVertical />
      </div>
      <div>
        <InvoiceProgress />
      </div>
      <div className="flex mt-6 flex-col space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-800 p-2 rounded-full"></div>
            <p>Paid</p>
          </div>
          <h1>$10,000</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-800 p-2 rounded-full"></div>
            <p>UnPaid</p>
          </div>
          <h1>$50,000</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-800 p-2 rounded-full"></div>
            <p>Draft</p>
          </div>
          <h1>$10,000</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-red-800 p-2 rounded-full"></div>
            <p>Overdue</p>
          </div>
          <h1>$160,000</h1>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComp;
