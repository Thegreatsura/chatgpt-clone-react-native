import React from "react";

export const Payment10 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">Powdur</div>
          <span className="px-2 py-1 bg-yellow-300 text-yellow-800 text-xs font-bold rounded">
            TEST
          </span>
        </div>
        <div className="flex justify-center mb-4">
          <img
            src="your-image-url"
            alt="Powdur"
            className="h-32 w-32 object-cover"
          />
        </div>
        <div className="text-center text-3xl font-bold mb-4">$133.23</div>
        <div className="flex justify-center mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add code
          </button>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <span>Cream refill pack</span>
            <span>$2.00</span>
          </div>
          <button className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
            + Add to your order
          </button>
        </div>
        <div className="flex justify-between">
          <button className="w-full bg-black text-white px-4 py-2 rounded-lg mr-2">
            G Pay
          </button>
          <button className="w-full bg-black text-white px-4 py-2 rounded-lg ml-2">
            Google Pay
          </button>
        </div>
      </div>
    </div>
  );
};
