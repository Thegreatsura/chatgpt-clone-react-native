import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";
import Image from "next/image";

export const OrderConfirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600 p-4">
      <Card className="w-full max-w-md bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PartyPopper className="text-yellow-400" />
            <span>Woohoo! You made a sale!</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-600 p-4 rounded-md mb-4">
            {/* Placeholder for confetti animation */}
            <div className="w-12 h-12 mx-auto bg-yellow-400 rounded-full flex items-center justify-center">
              🎉
            </div>
          </div>
          <div className="space-y-2">
            <p>OrderId: 9204417</p>
            <p>Date: 7 Aug 2024, 6:03</p>
            <p>Name: Samuel</p>
            <p>Email: {"samuelthegreat96@gmail.com"}</p>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-700 rounded">
                  <Image
                    className="size-10"
                    alt="image"
                    src={"/image.png"}
                    width={10}
                    height={10}
                    unoptimized
                  />
                </div>
                <span>The pitch deck template</span>
              </div>
              <span>$59.00</span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$59.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$59.00</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            View Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
