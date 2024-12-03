import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import img from "../../assets/images.jpg";

const TopProducts = () => {
  // JSON Data
  const productData = [
    {
      id: 1,
      name: "Men's Classic White T-Shirt",
      category: "Men's Clothing",
      price: 1240,
      image: img,
    },
    {
      id: 2,
      name: "Formal Shirts For Men",
      category: "Men's Clothing",
      price: 1189,
      image: img,
    },
    {
      id: 3,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 1100,
      image: img,
    },
    {
      id: 4,
      name: "Formal Trousers For Men",
      category: "Men's Clothing",
      price: 908,
      image: img,
    },
    {
      id: 5,
      name: "White T-Shirt",
      category: "Men's Clothing",
      price: 900,
      image: img,
    },
  ];

  // Component UI
  return (
    <div className="mobile p-4 md:w-full mx-auto w-full bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold pl-4 ">Top Product</h2>
          <p className="text-gray-500  text-sm pl-4">Top Products This Month</p>
        </div>
        <SlOptionsVertical />
      </div>

      {/* Product List */}
      <ul className="divide-y divide-gray-200">
        {productData.map((product) => (
          <li key={product.id} className="py-3 flex items-center">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* Product Details */}
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {product.name}
              </p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            {/* Price */}
            <div className="text-sm font-semibold text-gray-700">
              ₹{product.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopProducts;
