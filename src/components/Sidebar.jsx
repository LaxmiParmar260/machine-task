import React from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  Warehouse,
  ClipboardList,
  BarChart3,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, active: true },
  { title: "User List", icon: Users },
  { title: "Product Management", icon: Package },
  { title: "Inventory Management", icon: Warehouse },
  { title: "Warehouse Management", icon: ClipboardList },
  { title: "Sale", icon: BarChart3 },
];

export function Sidebar() {
  return (
    <div
      id="sidebar"
      className="bg-white h-screen sticky w-64 left-0 top-0 shadow-lg"
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Sidebar Navigation */}
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span className="font-medium">{item.title}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
