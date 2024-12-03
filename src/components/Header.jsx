import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center">
        <button className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Item
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
