import React from "react";

export const Payment9 = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 p-1 rounded-full">
              <img
                src="https://via.placeholder.com/40"
                alt="Logo"
                className="h-6 w-6"
              />
            </div>
            <span className="text-gray-500 text-sm">Powdur</span>
            <span className="text-xs bg-yellow-300 text-gray-800 px-2 py-0.5 rounded-md">
              TEST
            </span>
          </div>
          <button className="text-gray-500 text-sm">Close</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">The Premium Pure Set</p>
              <p className="text-sm text-gray-500">Skin care products</p>
              <p className="text-sm text-gray-500">Qty 1</p>
            </div>
            <p className="text-lg font-semibold">$65.00</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Pure glow cream</p>
              <p className="text-sm text-gray-500">Qty 2</p>
            </div>
            <p className="text-lg font-semibold">$64.00</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">$129.00</p>
          </div>

          <button className="text-blue-500 text-sm">Add promotion code</button>

          <div className="flex items-center justify-between">
            <p className="text-lg">Shipping</p>
            <p className="text-lg">Free</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg">Sales tax (6.5%)</p>
            <p className="text-lg">$4.23</p>
          </div>

          <div className="flex items-center justify-between font-bold">
            <p className="text-lg">Total due</p>
            <p className="text-lg">$133.23</p>
          </div>
        </div>

        <button className="w-full py-3 mt-6 bg-black text-white rounded-lg flex items-center justify-center space-x-2">
          <span>G Pay</span>
        </button>

        <p className="text-center my-4 text-gray-500">Or pay another way</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Shipping address
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal code
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>United States</option>
              <option>Canada</option>
              {/* <!-- Add more countries as needed --> */}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2"
          >
            <span>Pay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
