import React from "react";
import { IoMenu } from "react-icons/io5";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", stock: 500, sales: 300 },
  { month: "Feb", stock: 800, sales: 400 },
  { month: "Mar", stock: 900, sales: 700 },
  { month: "Apr", stock: 600, sales: 500 },
  { month: "May", stock: 400, sales: 200 },
  { month: "Jun", stock: 300, sales: 100 },
  { month: "Jul", stock: 700, sales: 400 },
  { month: "Aug", stock: 800, sales: 600 },
  { month: "Sep", stock: 600, sales: 500 },
  { month: "Oct", stock: 700, sales: 600 },
  { month: "Nov", stock: 900, sales: 700 },
  { month: "Dec", stock: 1000, sales: 800 },
];

const DualLineChart = () => {
  return (
    <div className="w-full h-96">
      <div className="flex justify-between px-6">
       <div>
       <h2 className="text-lg font-bold text-center">Statistics</h2>
        <p className="text-center text-sm text-gray-600">Stock and Sales</p>
       </div>
       <IoMenu className="text-xl"/>
      </div>

      <ResponsiveContainer width="100%" height="90%" className="mt-3">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="stock" stroke="#FF4081" strokeWidth={2} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="sales" stroke="#FFC107" strokeWidth={2} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DualLineChart;
