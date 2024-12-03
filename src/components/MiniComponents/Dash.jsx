import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";

const Dash = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white mt-3">
      {/* Total Users */}
      <div className="card bg-black shadow-md rounded-lg p-6">
        <FaUsers className="text-2xl sm:text-3xl" />
        <h2 className="text-sm sm:text-base pt-3">Total Users</h2>
        <h1 className="text-2xl sm:text-3xl">500</h1>
      </div>

      {/* Total Warehouse */}
      <div className="card bg-[#A855F7] shadow-md rounded-lg p-6">
        <FaWarehouse className="text-2xl sm:text-3xl" />
        <h2 className="text-sm sm:text-base pt-3">Total Warehouse</h2>
        <h1 className="text-2xl sm:text-3xl">350</h1>
      </div>

      {/* Total Products */}
      <div className="card bg-[#3B82F6] shadow-md rounded-lg p-6">
        <CiShoppingCart className="text-2xl sm:text-3xl" />
        <h2 className="text-sm sm:text-base pt-3">Total Products</h2>
        <h1 className="text-2xl sm:text-3xl">23000</h1>
      </div>

      {/* Total Reports */}
      <div className="card bg-[#F97316] shadow-md rounded-lg lg:mr-4">
        <TiDocumentText className="text-2xl sm:text-3xl" />
        <h2 className="text-sm sm:text-base pt-3">Total Reports</h2>
        <h1 className="text-2xl sm:text-3xl">243</h1>
      </div>
    </div>
  );
};

export default Dash;
