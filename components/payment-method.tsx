"use client";
import { Icons } from "@/components/icons";
import { toast } from "sonner";
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
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Copy,
  Dot,
  EllipsisVertical,
} from "lucide-react";
import { Awashbank, Crypto, Telebirr } from "./payment/icons";
import { Skeleton } from "./ui/skeleton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FadeText } from "./magicui/fade-text";
import { Modal, ModalTrigger } from "./ui/animated-modal";
import { cn } from "@/lib/utils";
import { hihi } from "@/action";
import Link from "next/link";
import Home from "@/app/form/page";
import Paymentsteps from "./payment-steps";

const Info = ({
  paymentMethod,
  price,
}: {
  price: string;
  paymentMethod: string;
}) => {
  return (
    <div className="flex z-100 flex-col items-center">
      <div className="text-center">
        <img
          src="https://github.com/shadcn.png"
          alt="Product"
          className="mx-auto mb-2 size-32 rounded-lg"
        />
        <p className="text-lg font-bold mb-1">Stubborn Attachments</p>
        <div className="flex items-center justify-center">
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </div>
      </div>
      <span className="text-3xl p-2">
        {price}
        <span className="text-sm font-bold">
          {paymentMethod === "Crypto" ? "USDT" : "Br"}
        </span>
      </span>
    </div>
  );
};

export function DemoPaymentMethod() {
  const [detail, setDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [payed, setPayed] = useState(false);
  const [pending, setPending] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState("Crypto");

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(true);
    }, 1000 * 6);

    return () => clearTimeout(id);
  }, []);

  return (
    <Card className="relative flex flex-col h-full my-2">
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

      {detail ? (
        <div className="h-full w-full">
          <FadeText
            className="absolute z-100 mt-2 w-full left-1/2 transform -translate-x-1/2 bg-white dark:bg- text-4xl font-bold text-black dark:text-white"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text={<Info paymentMethod={paymentMethod} price="59" />}
          />
        </div>
      ) : null}

      <CardHeader className="p-4">
        <div className="hidden md:flex lg:hidden flex-col items-center justify-center">
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
          Pay with your choice of payment service.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 pb-3">
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
        <div className="flex items-center justify-center">
          <Button
            className="lg:hidden py-0"
            onClick={() => {
              setDetail((prev) => !prev);
            }}
            variant={"ghost"}
          >
            {detail ? "Close" : "View Details"}{" "}
          </Button>
        </div>

        {/* {paymentMethod !== "Crypto" ? (
          <LocalBankCheckout />
        ) : (
          <CryptoCheckout />
        )} */}

        <Paymentsteps
          loading={loading}
          paymentMethod={paymentMethod as "Crypto" | "Telebirr" | "AwashBank"}
        />
      </CardContent>
      {/* <CardFooter>
        <Button
          disabled={pending || payed}
          onClick={() => {
            setPending(true);
            setTimeout(() => {
              setPending(false);
              setPayed((prev) => !prev);
            }, 1000 * 5);
          }}
          className="flex flex-col items-center justify-center w-full group"
        >
          <p
            className={cn("translate-y-3 w-full transition duration-500", {
              "translate-x-40 translate-y-0 opacity-0 transition duration-500":
                payed,
            })}
          >
            {pending ? (
              <div className="flex items-center justify-center top-1/2 transform -translate-y-1/2 relative">
                <p>processing..</p>
                <div className="animate-spin absolute right-0 rounded-full h-5 w-5 border-b-2 border-primary-foreground" />
              </div>
            ) : (
              "Pay"
            )}
          </p>
          <p
            className={cn("-translate-x-40 opacity-0 transition duration-500", {
              "-translate-y-3 translate-x-0 opacity-100 duration-500": payed,
            })}
          >
            Done
          </p>
        </Button>
      </CardFooter> */}

      {/* <div className="flex-1 bg-red-500" /> */}

      {/* <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking pay, you agree to our{" "}
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
      </p> */}
    </Card>
  );
}

const LocalBankCheckout = () => {
  return (
    // <Home />
    <div className="grid gap-6">
      <div className="grid gap-2 relative">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="example@gmail.com" />
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
          <Button
            onClick={() => {
              toast("Address copied", {
                description: "past it in your choice crypto wallet to send",
                // action: {
                //   label: "Undo",
                //   onClick: () => console.log("Undo"),
                // },
              });
            }}
            variant={"ghost"}
            className="flex z-50 w-[248px] md:w-full h-10 rounded-md px-3 py-2"
          >
            <p className="truncate">1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</p>
          </Button>
        </div>
      </div>
      {true ? (
        <div className="flex items-center justify-normal bg-muted p-2">
          <Avatar className="h-20 w-20 rounded-none">
            <AvatarImage className="h-20 w-20" src="/image.png" alt="@shadcn" />
            <AvatarFallback className="mb-4 h-20 w-20">
              <Skeleton className="mb-4 h-20 w-20" />
            </AvatarFallback>
          </Avatar>
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-1">
              <Dot className="size-8" />
              <p className="text-xs">click on addrs to copy the address</p>
            </div>
            <div className="flex items-center space-x-1">
              <Dot className="size-7" />
              <p className="text-xs">click on Qr code to enlarge</p>
            </div>
          </div>
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
