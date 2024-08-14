import { DemoPaymentMethod } from "@/components/payment-method";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { ArrowLeft, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { OrderConfirmationCardV2 } from "./test/comp/order-confirmation-card";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "" }}
      className="container px-0 relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      {/* Left side */}

      <div className="relative hidden h-full flex-col p-10 text-white dark:border-r lg:flex">
        <div className="absolute rounded-xl m-2 inset-0 bg-zinc-900" />
        <div className="relative z-20 flex flex-col  text-lg font-medium">
          <div className="group w-40 flex items-center">
            <div className="bg-zinc-900 h-10 w-10 mr-[2px] text-primary-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <ArrowLeft className="size-6 p-0 text-gray-500 group-hover:text-white " />
            </div>
            <div className="flex items-center group-hover:hidden transition-all">
              <div className="bg-gray-200 p-[3px] rounded-full mr-[2px]">
                <Avatar className="size-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="h-6 w-6"
                  />
                  <AvatarFallback>
                    <Skeleton className="h-6 w-6 !bg-zinc-500" />
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* <Store className="size-4 mr-[2px] rounded-lg" /> */}
              surapay
            </div>
            <p className="hidden group-hover:block transition-all">back</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            {/* <div className="flex flex-col items-center">
              <div className="text-center">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Product"
                  className="mx-auto mb-4 h-40 w-40 rounded-lg"
                />
                <p className="text-lg font-bold mb-2">Stubborn Attachments</p>
              </div>
              <span className="text-3xl p-3">Br 160.76</span>
            </div> */}
            <OrderConfirmationCardV2 className="max-w-md" footer />
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* <Separator className="my-4 w-96" /> */}
          </div>
        </div>

        {/* <div className="relative z-20 px-10 mt-10">
          <p>Payment summary</p>
        </div> */}

        {/* <div className="relative z-20 mt-auto">
          <footer className="text-sm">Powered by surapay</footer>
        </div> */}
      </div>

      {/* Right side  */}

      <div className="relative h-full flex-col p-10 text-white dark:border-r">
        <div className="absolute rounded-xl m-2 inset-0 bg-zinc-900" />
        <div className="relative z-20 flex flex-col  text-lg font-medium">
          <div className="group w-40 flex items-center">
            <div className="bg-zinc-900 h-10 w-10 mr-[2px] text-primary-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <ArrowLeft className="size-6 p-0 text-gray-500 group-hover:text-white " />
            </div>
            <div className="flex items-center group-hover:hidden transition-all">
              <div className="bg-gray-200 p-[3px] rounded-full mr-[2px]">
                <Avatar className="size-4">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="h-6 w-6"
                  />
                  <AvatarFallback>
                    <Skeleton className="h-6 w-6 !bg-zinc-500" />
                  </AvatarFallback>
                </Avatar>
              </div>
              {/* <Store className="size-4 mr-[2px] rounded-lg" /> */}
              surapay
            </div>
            <p className="hidden group-hover:block transition-all">back</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            {/* <div className="flex flex-col items-center">
              <div className="text-center">
                <img
                  src="https://github.com/shadcn.png"
                  alt="Product"
                  className="mx-auto mb-4 h-40 w-40 rounded-lg"
                />
                <p className="text-lg font-bold mb-2">Stubborn Attachments</p>
              </div>
              <span className="text-3xl p-3">Br 160.76</span>
            </div> */}
            <OrderConfirmationCardV2 className="max-w-md" footer />
          </div>

          <div className="flex flex-col items-center justify-center">
            {/* <Separator className="my-4 w-96" /> */}
          </div>
        </div>

        {/* <div className="relative z-20 px-10 mt-10">
          <p>Payment summary</p>
        </div> */}

        {/* <div className="relative z-20 mt-auto">
          <footer className="text-sm">Powered by surapay</footer>
        </div> */}
      </div>

      {/* Right side  */}

      {/* <div className="flex h-full w-full lg:p-8">
        <OrderConfirmationCardV2 footer />
        <div className="w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <DemoPaymentMethod />
        </div>
      </div> */}
    </div>
  );
}
