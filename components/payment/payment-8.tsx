"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";

export const Payment8 = () => {
  const [detail, setDetail] = useState(false);
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex w-full items-center space-x-2">
            <div className="bg-gray-200 p-1 rounded-full">
              {/* <img
                src="https://via.placeholder.com/40"
                alt="Logo"
                className="h-6 w-6"
              /> */}
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="h-6 w-6"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-gray-500 text-sm">SuraPay .corp</span>
            <span className="text-xs text-gray-800 justify-end px-2 py-0.5 rounded-md">
              TEST MODE
            </span>
            <div className="flex-1" />
            <span
              onClick={() => {
                setDetail((prev) => !prev);
              }}
              className="flex items-center hover:bg-slate-500 hover:cursor-pointer text-xs text-gray-800 justify-end px-2 py-0.5 rounded-md"
            >
              Details
              {detail ? (
                <ChevronUp className="size-5" />
              ) : (
                <ChevronDown className="size-5" />
              )}
            </span>
          </div>
        </div>

        <div className="text-center relative">
          {detail ? (
            <div className="space-y-4 w-full absolute bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">The Premium Pure Set</p>
                  <p className="text-sm text-gray-500">Skin care products</p>
                </div>
                <p className="text-lg font-semibold">$65.00</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">Pure glow cream</p>
                </div>
                <p className="text-lg font-semibold">$64.00</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg">Subtotal</p>
                <p className="text-lg">$129.00</p>
              </div>

              <button className="text-blue-500 text-sm">
                Add promotion code
              </button>

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
          ) : null}

          <img
            src="https://github.com/shadcn.png"
            alt="Product"
            className="mx-auto mb-4 h-52 w-52 rounded-lg"
          />
          <p className="text-lg font-bold mb-2">Stubborn Attachments</p>
          <p className="text-xl font-bold mb-2">$20.00</p>
        </div>
      </div>
    </div>
  );
};
