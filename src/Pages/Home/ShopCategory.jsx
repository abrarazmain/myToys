import { useState } from "react";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  const [activeTab, setActiveTab] = useState("allToys");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-12">
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#b18aff] text-center my-4 ">
        Available Toys
      </h2>
      <div className="tab-container text-center">
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center">
            <div
              onClick={() => handleTabClick("allToys")}
              className={`cursor-pointer mr-4 py-2 px-4 rounded ${
                activeTab == "allToys" ? "bg-[#b18aff]" : ""
              }`}
            >
              All Toys
            </div>
            <div
              onClick={() => handleTabClick("remote")}
              className={`cursor-pointer mr-4 py-2 px-4 rounded ${
                activeTab == "remote" ? "bg-[#b18aff]" : ""
              }`}
            >
              Remote
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`cursor-pointer py-2 px-4 rounded ${
                activeTab == "offline" ? "bg-[#b18aff] " : ""
              }`}
            >
              Offline
            </div>
          </div>
        </div>
      </div>
          <div className="mt-10 grid grid-cols-1 gap-6"></div>
          
    </div>
  );
};

export default ShopCategory;
