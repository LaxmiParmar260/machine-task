import React from "react";

const locations = [
  { city: "Bhopal", products: 1240, percentage: 80, color: "bg-gray-500" },
  { city: "Indore", products: 1240, percentage: 60, color: "bg-orange-500" },
  { city: "Jabalpur", products: 1240, percentage: 49, color: "bg-gray-500" },
  { city: "Dewas", products: 1240, percentage: 100, color: "bg-purple-500" },
  { city: "Ratlam", products: 1240, percentage: 50, color: "bg-gray-500" },
];

const WarehouseManagement = () => {
  return (
    <div className="mobile bg-white shadow-md rounded-lg p-6 w-full md:w-full ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Warehouse Management</h2>
          <p className="text-sm text-gray-500">Location</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">⋮</button>
      </div>

      {/* Map Section */}
      <div className="mt-4 mb-6">
        <div className="bg-gray-200 w-full h-32 rounded-lg flex items-center justify-center">
          <p className="text-gray-400 text-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.02451656116589!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1733138534923!5m2!1sen!2sin"
              className="w-[215px]"
              height="128"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
      </div>

      {/* Location Data */}
      <div>
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-4 last:mb-0"
          >
            {/* City and Product Info */}
            <div>
              <h3 className="text-sm font-medium">{location.city}</h3>
              <p className="text-xs text-gray-500">
                {location.products} Products
              </p>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-3 w-2/3">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${location.color} h-2.5 rounded-full`}
                  style={{ width: `${location.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm font-medium">{location.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseManagement;
