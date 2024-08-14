import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Home, Pen, ShoppingCart, Send, Search } from "lucide-react";

export const PortfolioV2 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-bold mb-2">Hi. I&apos;m Zane Ashford —</h1>
        <h2 className="text-xl text-gray-400 mb-4">
          Designer & Engineer from Auckland.
        </h2>

        <p className="text-sm mb-4">
          Currently, I&apos;m designing in the visionOS team at Apple and
          building simple, functional, and easy-to-use Framer templates on the
          side.
        </p>

        <div className="flex space-x-2 mb-6">
          <Button variant="outline" className="text-white border-white">
            Biography
          </Button>
          <Button variant="outline" className="text-white border-white">
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
        </div>

        <Card className="bg-gray-900 mb-4">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
              <div>
                <p className="text-sm font-semibold">Jackson Carter</p>
                <p className="text-xs text-gray-400">Product Designer</p>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Your Ultimat Online Busi</h3>
            <p className="text-xs text-gray-400">
              The Online Business Owner&apos;s Framer just got even better - u
            </p>
          </CardContent>
        </Card>

        <h3 className="font-semibold mb-2">Dashfolio+</h3>
        <p className="text-sm text-gray-400 mb-4">Framer · Template</p>

        <h3 className="font-semibold mb-2">Products</h3>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gray-800 rounded"></div>
          <div>
            <p className="text-sm font-semibold">Dashfolio NEO</p>
            <p className="text-xs text-gray-400">Framer · Template</p>
          </div>
        </div>

        <div className="flex justify-between">
          <Home className="h-6 w-6" />
          <Pen className="h-6 w-6" />
          <ShoppingCart className="h-6 w-6" />
          <Send className="h-6 w-6" />
          <Search className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
