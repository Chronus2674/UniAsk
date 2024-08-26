import React from "react";

const StatsCard2 = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-md max-w-xs mx-auto">
      <div className="flex justify-between items-center mb-2 space-x-2">
        <h2 className="text-white text-lg font-semibold">
          Total Solution Upvotes
        </h2>
        <i className="bx bx-trending-up text-green-500 text-xl"></i>
      </div>
      <div className="text-[#00FFFF] text-3xl font-bold">1,000</div>
      <p className="text-gray-400 text-xs mt-1">Compared to last month</p>
    </div>
  );
};

export default StatsCard2;