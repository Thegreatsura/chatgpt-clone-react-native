import React from "react";
import { CheckBox } from "./comp-147";

const Checkout = () => {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="h-[30%] bg-gray-500">
        <div className="h-full flex flex-col items-center justify-center">
          Total
          <div>$120.76</div>
        </div>
      </div>
      <div className="h-[70%] flex flex-col items-center justify-center">
        <CheckBox />
      </div>
    </div>
  );
};

export default Checkout;
