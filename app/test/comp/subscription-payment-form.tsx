import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function SubscriptionPaymentForm() {
  return (
    <div className="flex bg-green-900 min-h-screen">
      <div className="w-1/2 p-8 text-white">
        <Button variant="outline" className="mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Dolens
        </Button>
        <h2 className="text-sm mb-2">Subscribe to Dolens standard</h2>
        <h1 className="text-4xl font-bold mb-4">US$ 19.99</h1>
        <p className="text-sm mb-8">
          Unlimited contacts, 500 Messages per month
        </p>

        <Card className="bg-green-800 mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <span>Dolens Standard</span>
              <span>US$ 19.99</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm">Billed monthly</span>
              <Switch />
            </div>
            <p className="text-xs mt-2">Save 15% with annual billing</p>
          </CardContent>
        </Card>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>US$ 19.99</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="flex-grow">Add promotion code</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total due today</span>
          <span>US$ 19.99</span>
        </div>

        <div className="mt-auto pt-8 text-xs">
          ©2023 All rights reserved | Terms Privacy
        </div>
      </div>

      <div className="w-1/2 bg-white p-8">
        <h2 className="text-2xl font-bold mb-6">Pay With Card</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" placeholder="example@gmail.com" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Name on card
            </label>
            <Input placeholder="John Smith" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Card Details
            </label>
            <div className="flex gap-4">
              <Input className="flex-grow" placeholder="1234 1234 1234 1234" />
              <Input className="w-20" placeholder="MM/YY" />
              <Input className="w-16" placeholder="CVC" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Billing address
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="israel">Israel</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
            <Input className="mt-2" placeholder="Address" />
          </div>
          <div className="flex items-center mb-6">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="ml-2 text-sm">
              Securely save my information for 1-click checkout
            </label>
          </div>
          <Button className="w-full bg-green-800 text-white">Subscribe</Button>
          <p className="text-xs text-center mt-4">
            By confirming your subscription, you allow Dolens to charge your
            card for this payment and future payments in accordance with their
            terms. You can always cancel your subscription.
          </p>
        </form>
      </div>
    </div>
  );
}
