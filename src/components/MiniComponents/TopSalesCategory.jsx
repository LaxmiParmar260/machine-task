import React from "react";
import { SlOptionsVertical } from "react-icons/sl";

const TopSalesCategory = () => {
  // JSON Data
  const salesData = [
    {
      id: 1,
      category: "Slim Fit",
      sales: 1509,
      change: "+12%",
      changeType: "positive",
      icon: "https://img.freepik.com/premium-vector/cool-blue-jeans-cartoon-illustration-men-women_292879-1324.jpg", // Replace with actual icon URL
    },
    {
      id: 2,
      category: "Regular Fit",
      sales: 1460,
      change: "0%",
      changeType: "neutral",
      icon: "https://img.freepik.com/premium-vector/cool-blue-jeans-cartoon-illustration-men-women_292879-1324.jpg",
    },
    {
      id: 3,
      category: "Relaxed Fit",
      sales: 1229,
      change: "0%",
      changeType: "neutral",
      icon: "https://img.freepik.com/premium-vector/cool-blue-jeans-cartoon-illustration-men-women_292879-1324.jpg",
    },
    {
      id: 4,
      category: "Skinny Fit",
      sales: 982,
      change: "+19%",
      changeType: "positive",
      icon: "https://img.freepik.com/premium-vector/cool-blue-jeans-cartoon-illustration-men-women_292879-1324.jpg",
    },
    {
      id: 5,
      category: "Tapered Fit",
      sales: 791,
      change: "0%",
      changeType: "neutral",
      icon: "https://img.freepik.com/premium-vector/cool-blue-jeans-cartoon-illustration-men-women_292879-1324.jpg",
    },
  ];

  return (
    <div className="mobile p-4 md:w-full mx-auto w-full bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Top Sales Category</h2>
          <p className="text-gray-500 text-sm">Top Sales Category This Month</p>
        </div>
        <SlOptionsVertical />
      </div>

      {/* Sales List */}
      <ul className="divide-y divide-gray-200">
        {salesData.map((item) => (
          <li key={item.id} className="py-3 flex items-center">
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.category}
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* Category Details */}
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {item.category}
              </p>
            </div>
            {/* Percentage Change */}
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700">₹{item.sales}</p>
              <div
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  item.changeType === "positive"
                    ? "bg-green-100 text-green-600"
                    : item.changeType === "negative"
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {item.change}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSalesCategory;
