import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="w-full lg:w-2/3 p-6">
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold mr-2">Coht</span>
            <input type="radio" checked className="form-radio h-5 w-5 text-blue-600" />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Customer Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Vishnu Prasad V P"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="+1 - 807896990"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="vishnu@example.com"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full p-3 border rounded-lg">
                  <option>United States</option>
                </select>
                <select className="w-full p-3 border rounded-lg">
                  <option>California</option>
                </select>
                <input
                  type="text"
                  placeholder="00012"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="433 Old Gate Ln, Milford"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </form>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="flex space-x-4">
              <button className="flex-1 p-3 border rounded-lg text-center bg-blue-100 border-blue-600 text-blue-600">
                e-Transfer
              </button>
              <button className="flex-1 p-3 border rounded-lg text-center">
                Online
              </button>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Bank</h2>
            <select className="w-full p-3 border rounded-lg">
              <option>CIBC Bank</option>
            </select>
          </div>
          <button className="w-full p-3 bg-blue-600 text-white rounded-lg">
            Make payment
          </button>
        </div>
        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-r-lg">
          <h2 className="text-xl font-bold mb-4">Total amount</h2>
          <div className="text-3xl font-bold text-blue-600 mb-4">$160.76</div>
          <div className="text-green-600 mb-4">Secure Payment</div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Nike Dunk High Retro</span>
              <span>$140.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$140.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$11.76</span>
            </div>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>$160.76</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
