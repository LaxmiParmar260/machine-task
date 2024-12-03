import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="w-full">
      <div className="flex bg-gray-100 ">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
