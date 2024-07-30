"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

export function DemoPaymentMethod() {
  const [detail, setDetail] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Card>
      <div className="flex lg:hidden w-full mt-2 items-center justify-between space-x-2">
        <div className="flex w-40 text-center items-center space-x-2">
          <div
            onClick={() => {
              console.log("hi");
            }}
            className="size-4 hover:cursor-pointer hover:scale-105 hover:bg-primary-foreground mr-[2px] text-primary-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <ArrowLeft className="size-6 p-0 text-gray-500 group-hover:text-black " />
          </div>

          <div className="bg-gray-200 p-1 rounded-full">
            <Avatar className="size-6">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="size-6"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-gray-500 text-sm">SuraPay</span>
          <div className="flex-1" />
        </div>
        <span
          onClick={() => {
            setDetail((prev) => !prev);
          }}
          className="flex items-center hover:cursor-pointer text-xs text-gray-800 justify-end px-2 py-0.5 rounded-md"
        >
          Details
          {detail ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </span>
      </div>
      <CardHeader>
        <div className="flex lg:hidden flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <img
                src="https://github.com/shadcn.png"
                alt="Product"
                className="mx-auto mb-4 h-40 w-40 rounded-lg"
              />
              <p className="text-lg font-bold mb-1">Stubborn Attachments</p>
            </div>
            <span className="text-3xl p-2">Br 160.76</span>
          </div>
        </div>
        <CardTitle>Pay with {paymentMethod} </CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup
          onValueChange={(val) => {
            setPaymentMethod(val);
          }}
          defaultValue="card"
          className="grid grid-cols-3 gap-4"
        >
          <div>
            <RadioGroupItem value="card" id="card" className="peer sr-only" />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
            />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.paypal className="mb-3 h-6 w-6" />
              Paypal
            </Label>
          </div>
          <div>
            <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
            <Label
              htmlFor="apple"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.apple className="mb-3 h-6 w-6" />
              Apple
            </Label>
          </div>
        </RadioGroup>
        <div className="grid gap-2 relative">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="example@gmail.com" />
          {/* <div className="absolute inser-0">hello</div> */}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tnx">Transaction number</Label>
          <Input id="tnx" placeholder="" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Pay</Button>
      </CardFooter>
    </Card>
  );
}
