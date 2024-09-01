import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowLeft, Store } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const OrderConfirmationCardV2 = ({
  footer,
  className,
  header,
}: {
  footer?: boolean;
  className?: string;
  header?: boolean;
}) => {
  return (
    <Card
      className={cn("w-full bg-zinc-900 text-white overflow-hidden", className)}
    >
      {header && (
        <CardHeader className="p-0">
          <div className="group w-40 flex items-center">
            <div className="bg-zinc-900 hover:scale-110 h-10 w-10 mr-[2px] text-primary-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <ArrowLeft className="size-6 p-0 text-gray-500 hover:text-white " />
            </div>
            <div className="flex items-center group-hover:hidden transition-all">
              <div className="bg-gray-200 p-[3px] rounded-full mr-[6px]">
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
        </CardHeader>
      )}

      <CardContent className="p-6">
        

        <div className="rounded-xl overflow-hidden mb-6">
          <div className="relative h-52 w-full">
            <Avatar className="w-full h-full rounded-none object-contain">
              <AvatarImage
                className="w-full h-full rounded-none object-cover"
                src="/shoe.jpg"
                alt="product image"
              />
              <AvatarFallback className="w-full h-full rounded-none">
                <Skeleton className="w-full h-full !bg-zinc-500 dark:bg-muted" />
              </AvatarFallback>
            </Avatar>

            {/* Replace with actual confetti animation */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">🥳</span>
            </div> */}
            {/* Add confetti pattern here */}
          </div>
        </div>

      

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-md mr-3 flex items-center justify-center">
              <Avatar className="rounded-md">
                <AvatarImage
                  className="rounded-md"
                  width={40}
                  height={40}
                  src="/shoe.jpg"
                  alt="product image"
                />
                <AvatarFallback className="rounded-none">
                  <Skeleton className="!bg-zinc-500 dark:bg-muted" />
                </AvatarFallback>
              </Avatar>

              {/* <Image
                className="rounded-md"
                src="/shoe.jpg"
                alt="Product image"
              /> */}
            </div>
            <div>
              <p className="font-medium">AirFlow Runner X2</p>
              <p className="font-medium text-zinc-700">Futuristic Design</p>
            </div>
          </div>
          <p className="font-semibold">ETB 59.00</p>
        </div>

        <div className="border-t border-gray-700 pt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="font-semibold">ETB 59.00</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">ETB 59.00</p>
          </div>
        </div>

      </CardContent>
      {footer && (
        <CardFooter className="px-6 pb-6">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 rounded-xl text-lg font-semibold">
            View Order →
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
