"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
  DialogBaner,
} from "@/components/ui/custom-dialog";
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
import { SelectBank } from "@/components/select-bank";

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
    <Card className={cn("w-full md:w-[448px] overflow-hidden", className)}>
      <CardHeader className="">
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
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <Dialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <DialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex lg:hidden flex-col overflow-hidden bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <DialogBaner className="">
              <div className="flex lg:hidden items-center justify-center overflow-hidden mb-6">
                <div className="relative rounded-xl h-36 w-40">
                  <Avatar className="h-36 w-40 rounded-xl">
                    <AvatarImage
                      src="/shoe.jpg"
                      alt="@shadcn"
                      className="h-36 w-40"
                    />
                    <AvatarFallback className="rounded-xl">
                      <Skeleton className="w-full h-full !bg-zinc-500 dark:bg-muted" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </DialogBaner>
          </DialogTrigger>
          <DialogContainer>
            <DialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              {/* <DialogBaner className="sm:w-40 h-full w-full">
                <div className="bg-indigo-600 rounded-xl overflow-hidden mb-6">
                  <div className="relative h-40 w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">🥳</span>
                    </div>
                  </div>
                </div>
              </DialogBaner> */}

              <DialogImage
                src="/shoe.jpg"
                alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                className="h-full w-full md:h-64"
              />
              <div className="p-6 overflow-y-scoll">
                <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  AirFlow Runner X2
                </DialogTitle>
                <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Futuristic Design
                </DialogSubtitle>
                <DialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                    Little is known about the life of Édouard-Wilfrid Buquet. He
                    was born in France in 1866, but the time and place of his
                    death is unfortunately a mystery.
                  </p>
                  {/* <p className="text-zinc-500">
                    Research conducted in the 1970s revealed that he’d designed
                    the “EB 27” double-arm desk lamp in 1925, handcrafting it
                    from nickel-plated brass, aluminium and varnished wood.
                  </p> */}
                  <a
                    className="mt-2 inline-flex text-zinc-500 underline"
                    href="https://sura-ai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Are.na block
                  </a>
                </DialogDescription>
              </div>
              <DialogClose className="text-zinc-50" />
            </DialogContent>
          </DialogContainer>
        </Dialog>

        <div className="space-y-2 mb-6 flex flex-col lg:hidden">
          <p className="w-full text-center">
            <span className="px-10 ml-2">AirFlow Runner X2</span>
          </p>
          <p className="w-full text-center">
            <span className="p-2">
              <span className="font-bold">
                {paymentMethod === "Crypto" ? "USDT" : "ETB"}
              </span>{" "}
              120.00
            </span>
          </p>
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

          {/* <div>
            <RadioGroupItem
              value="Crypto"
              id="Crypto"
              className="peer sr-only pointer-events-none"
            />
            <Label className="flex  my-auto flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
              <span className="opacity-0">more</span>
              <SelectBank className="h-6 w-6" />
            </Label>
          </div> */}
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
