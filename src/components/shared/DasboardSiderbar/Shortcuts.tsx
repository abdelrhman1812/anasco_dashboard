import React, { useState } from "react";

const Shortcuts = () => {
  const [activeTab, setActiveTab] = useState("favorites");

  return (
    <>
      <div className="flex gap-2  mt-3  rounded-lg ">
        <button
          className={`flex items-center gap-2 opacity-50 font-semibold px-3 py-2 text-sm rounded-md flex-1 justify-center ${
            activeTab === "favorites" ? "" : "text-gray-500 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("favorites")}
        >
          {/* <Heart size={16} /> */}
          <span>Favorites</span>
        </button>
        <button
          className={`flex items-center gap-2 opacity-50 font-semibold px-3 py-2 text-sm rounded-md flex-1 justify-center ${
            activeTab === "recent" ? "" : "text-gray-500 hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab("recent")}
        >
          {/* <History size={16} /> */}
          <span>Recent</span>
        </button>
      </div>
      {/* Quick Access */}
      <ul className=" space-y-1 list-disc list-inside custom-bullet px-3">
        <li className="">Overview</li>
        <li className="">Projects</li>
      </ul>
    </>
  );
};

export default Shortcuts;
