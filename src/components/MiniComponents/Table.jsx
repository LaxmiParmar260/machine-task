import React from "react";

const orders = [
  {
    product: "Men's White T-Shirt",
    quantity: 500,
    customer: { name: "John Doe", email: "john@example.com" },
    total: "₹1000",
    status: "Processing",
  },
  {
    product: "Chinos",
    quantity: 600,
    customer: { name: "Jane Smith", email: "jane@example.com" },
    total: "₹1500",
    status: "Shipped",
  },
  {
    product: "Cargo Pants",
    quantity: 600,
    customer: { name: "Bob Brown", email: "bob@example.com" },
    total: "₹2000",
    status: "Delivered",
  },
  {
    product: "Sweatpant",
    quantity: 600,
    customer: { name: "Bob Brown", email: "bob@example.com" },
    total: "₹2000",
    status: "Delivered",
  },
  {
    product: "Joggers",
    quantity: 600,
    customer: { name: "Bob Brown", email: "bob@example.com" },
    total: "₹2000",
    status: "Delivered",
  },
];

const Table = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "bg-yellow-100 text-yellow-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="container mt-3">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Product</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-center">Total</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div>
                    <span className="font-medium">{order.product}</span>
                    <p className="text-sm text-gray-400">
                      Qty: {order.quantity}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div>
                    <span className="font-medium">{order.customer.name}</span>
                    <p className="text-sm text-gray-400">
                      {order.customer.email}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">{order.total}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex justify-center space-x-4">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      👁️
                    </button>
                    <button
                      className="bg-red text-red-50 hover:text-red-800"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">Showing 1-5 from 100</p>
          <div className="flex space-x-2">
            <button className="bg-red-500 text-white px-3 py-1 rounded-md">
              1
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded-md">2</button>
            <button className="bg-gray-200 px-3 py-1 rounded-md">3</button>
            <button className="bg-gray-200 px-3 py-1 rounded-md">...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
