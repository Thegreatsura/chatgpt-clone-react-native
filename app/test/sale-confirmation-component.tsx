import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

export const SaleConfirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600 p-4">
      <Card className="w-full max-w-md bg-zinc-900 text-white">
        <CardHeader className="flex flex-col items-center">
          <PartyPopper className="text-yellow-400 mb-2" />
          <CardTitle>Woohoo! You made a sale!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-purple-600 rounded-lg p-4 mb-4">
            {/* Placeholder for confetti animation */}
            <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto" />
          </div>
          <div className="space-y-2 mb-4">
            <p>Order #: 9204417</p>
            <p>Date: 7 Aug 2024, 6:03</p>
            <p>Name: [Redacted]</p>
            <p>Email: [Redacted]</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded mr-2" />
              <div>
                <p className="font-semibold">The pitch deck template that</p>
                <p>doesn&apost suck</p>
              </div>
            </div>
            <p className="font-semibold">$59.00</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>$59.00</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total</p>
            <p>$59.00</p>
          </div>
          <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
            View Order →
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
