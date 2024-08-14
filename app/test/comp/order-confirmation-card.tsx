import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const OrderConfirmationCardV2 = ({
  footer,
  className,
}: {
  footer?: boolean;
  className?: string;
}) => {
  return (
    <Card
      className={cn("w-full bg-zinc-900 text-white overflow-hidden", className)}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-2xl mr-2">🎉</span>
          <h2 className="text-xl font-semibold">Woohoo! You made a sale!</h2>
        </div>

        <div className="bg-indigo-600 rounded-xl overflow-hidden mb-6">
          <div className="relative h-40 w-full">
            {/* Replace with actual confetti animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🥳</span>
            </div>
            {/* Add confetti pattern here */}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <p className="text-gray-400">Order #: 9204417</p>
          <p className="text-gray-400">Date: 7 Aug 2024, 6:03</p>
          <p className="text-gray-400">
            Name: <span className="bg-gray-700 rounded px-10 ml-2">&nbsp;</span>
          </p>
          <p className="text-gray-400">
            Email:{" "}
            <span className="bg-gray-700 rounded px-16 ml-2">&nbsp;</span>
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-md mr-3 flex items-center justify-center">
              <Image src="/image.png" alt="Product" width={40} height={40} />
            </div>
            <div>
              <p className="font-medium">The pitch deck template that</p>
              <p className="font-medium">doesn&apos;t suck</p>
            </div>
          </div>
          <p className="font-semibold">$59.00</p>
        </div>

        <div className="border-t border-gray-700 pt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="font-semibold">$59.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">$59.00</p>
          </div>
        </div>
      </CardContent>
      {!footer && (
        <CardFooter className="px-6 pb-6">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-xl text-lg font-semibold">
            View Order →
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
