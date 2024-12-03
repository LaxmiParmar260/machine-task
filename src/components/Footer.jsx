import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dashboard, Inc. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
