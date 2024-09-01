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
import { PaymentCard } from "./test/comp/payment-card";
import { ModeToggle } from "@/components/toggle";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "" }}
      className="container px-0 relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      
      {/* Left side */}

      <div className="relative hidden h-full flex-col text-white lg:flex">
        <div className="absolute rounded-xl m-2 inset-0 bg-zinc-900" />
        <div className="relative z-20 flex flex-col  text-lg font-medium">
         
          <div className="flex flex-col items-center justify-center mt-10">
            <OrderConfirmationCardV2 className="max-w-md" header />
          </div>

        </div>

      </div>

      {/* Right side  */}

      <div className="relative h-full flex-col text-white">
        <div className="relative z-20 flex flex-col  text-lg font-medium">
          <div className="flex flex-col items-center justify-center">
            <PaymentCard footer />
          </div>

          {/* <div className="flex flex-col items-center justify-center">
            <Separator className="my-4 w-96" />
          </div> */}
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
        <OrderConfirmationCardV2 />
        <div className="w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <DemoPaymentMethod />
        </div>
      </div> */}
    </div>
  );
}
