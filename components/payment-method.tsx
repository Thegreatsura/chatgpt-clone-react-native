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
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Copy,
  EllipsisVertical,
} from "lucide-react";
import { Awashbank, Crypto, Telebirr } from "./payment/icons";
import { Skeleton } from "./ui/skeleton";

export function DemoPaymentMethod() {
  const [detail, setDetail] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Crypto");

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
      <CardHeader className="mt-4">
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
            <span className="text-3xl p-2">
              <span className="text-sm font-bold">
                {paymentMethod === "Crypto" ? "USDT" : "Br"}
              </span>
              160.76
            </span>
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
          // defaultValue="Telebirr"
          defaultValue={paymentMethod}
          className="grid grid-cols-3 gap-4"
        >
          <div>
            <RadioGroupItem
              value="Telebirr"
              id="Telebirr"
              className="peer sr-only"
            />
            <Label
              htmlFor="Telebirr"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Telebirr className="mb-3 h-6 w-6" />
              Telebirr
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="Awashbank"
              id="Awashbank"
              className="peer sr-only"
            />
            <Label
              htmlFor="Awashbank"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Awashbank className="mb-3 h-6 w-6" />
              Awash
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="Crypto"
              id="Crypto"
              className="peer sr-only"
            />
            <Label
              htmlFor="Crypto"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Crypto className="mb-3 h-6 w-6" />
              Crypto
            </Label>
          </div>
        </RadioGroup>
        {paymentMethod !== "Crypto" ? (
          <LocalBankCheckout />
        ) : (
          <CryptoCheckout />
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Pay</Button>
      </CardFooter>
    </Card>
  );
}

const LocalBankCheckout = () => {
  return (
    <div className="grid gap-6">
      <div className="grid gap-2 relative">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="example@gmail.com" />
        {/* <div className="absolute inser-0">hello</div> */}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="tnx">Transaction number</Label>
        <Input id="tnx" placeholder="" />
      </div>
    </div>
  );
};

const CryptoCheckout = () => {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className="grid gap-3">
      <div className="grid gap-2 relative">
        <Label>Address</Label>
        <div className="flex text-center items-center justify-center">
          <div
            onClick={() => {
              console.log("copied");
            }}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            1FfmbHfnpaZjKFvyi1okTjJJusN455paPH
          </div>
        </div>
      </div>
      {showQr ? (
        <div className="grid gap-2">
          <Avatar className="mx-auto mb-4 h-40 w-40 rounded-lg">
            <AvatarImage
              className="mx-auto h-40 w-40 rounded-lg"
              src="/image.png"
              alt="@shadcn"
            />
            <AvatarFallback className="mx-auto mb-4 h-40 w-40 rounded-lg">
              <Skeleton className="mx-auto mb-4 h-40 w-40 rounded-lg" />
            </AvatarFallback>
          </Avatar>
          {/* <img
            src="/image.png"
            alt="Product"
            className="mx-auto mb-4 h-40 w-40 rounded-lg"
          /> */}
        </div>
      ) : (
        <Button
          onClick={() => {
            setShowQr(true);
          }}
          variant={"ghost"}
        >
          Show Qr code
        </Button>
      )}
    </div>
  );
};
