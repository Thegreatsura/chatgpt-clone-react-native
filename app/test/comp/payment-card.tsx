"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Info } from "@/components/payment-method";
import { FadeText } from "@/components/magicui/fade-text";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Telebirr, Awashbank, Crypto } from "@/components/payment/icons";
import Paymentsteps from "@/components/payment-steps";
import Link from "next/link";

export const PaymentCard = ({
  footer,
  className,
  header,
}: {
  footer?: boolean;
  className?: string;
  header?: boolean;
}) => {
  const [detail, setDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payed, setPayed] = useState(false);
  const [pending, setPending] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState("Telebirr");

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(true);
    }, 1000 * 6);

    return () => clearTimeout(id);
  }, []);

  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <CardHeader className="">
        <DropdownMenu open={detail} onOpenChange={setDetail}>
          <div className="flex relative lg:hidden w-full items-center justify-between space-x-2">
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
            <DropdownMenuTrigger>
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
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className=" md:hidden w-screen">
            <FadeText
              className="z-100 mt-2 w-full left-1/2 transform -translate-x-1/2 bg-white dark:bg- text-4xl font-bold text-black dark:text-white"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text={<Info paymentMethod={paymentMethod} price="59" />}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="px-6">
        <div className="flex lg:hidden items-center justify-center overflow-hidden mb-6">
          <div className="relative rounded-xl h-28 w-40 bg-indigo-600 ">
            {/* Replace with actual confetti animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🥳</span>
            </div>
            {/* Add confetti pattern here */}
          </div>
        </div>

        <div className="space-y-2 mb-6 flex flex-col lg:hidden">
          <p className="w-full text-center">
            <span className="px-10 ml-2">Stubborn</span>
          </p>
          <p className="w-full text-center">
            <span className="p-2">
              <span className="text-sm font-bold">
                {paymentMethod === "Crypto" ? "USDT" : "ETB"}
              </span>
              160.76
            </span>
          </p>
          <Button
            className="lg:hidden py-0 mx-auto"
            onClick={() => {
              setDetail((prev) => !prev);
            }}
            variant={"outline"}
          >
            {"View Details"}
          </Button>
        </div>

        <div className="flex items-center justify-center mb-3 mt-0 p-0"></div>

        <CardTitle>Pay with {paymentMethod} </CardTitle>
        <CardDescription className="mb-3">
          Pay with your choice of payment service.
        </CardDescription>
        <RadioGroup
          onValueChange={(val) => {
            setPaymentMethod(val);
          }}
          defaultValue="Telebirr"
          className="grid grid-cols-3 gap-4 mb-3"
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
              value="AwashBank"
              id="AwashBank"
              className="peer sr-only"
            />
            <Label
              htmlFor="AwashBank"
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

        <Paymentsteps
          className="mt-4"
          loading={loading}
          paymentMethod={paymentMethod as "Crypto" | "Telebirr" | "AwashBank"}
        />
      </CardContent>
      {footer && (
        <CardFooter className="px-6 pb-6">
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      )}
    </Card>
  );
};
