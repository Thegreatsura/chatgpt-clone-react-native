import React from "react";

export const Payment7 = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              P
            </div>
            <span className="text-gray-500 text-sm">Powdur</span>
            <span className="text-xs bg-yellow-300 text-gray-800 px-2 py-0.5 rounded-md">
              TEST
            </span>
          </div>
          <button className="text-gray-500 text-sm">Details</button>
        </div>

        <div className="text-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Product Image"
            className="mx-auto mb-4"
          />
          <p className="text-xl font-bold mb-2">$133.23</p>
          <button className="text-blue-500 text-sm">Add code ▼</button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <span>Cream refill pack</span>
            <span>$2.00</span>
          </div>
          <button className="w-full py-2 bg-gray-200 text-gray-700 rounded-lg">
            + Add to your order
          </button>
        </div>

        <button className="w-full py-3 mt-6 bg-black text-white rounded-lg flex items-center justify-center space-x-2">
          <span className="material-icons">payment</span>
          <span>Pay</span>
        </button>
      </div>
    </div>
  );
};
