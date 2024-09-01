"use client";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "../ui/button";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
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
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";

const formVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: "easeOut",
    },
  },
};

export const CryptoStep2 = () => {
  return (
    <motion.div
      className="flex flex-col gap-3 p-2 rounded-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CardContent className="bg-muted rounded-xl p-3">
        <div className="grid gap-1">
          <div className="grid gap-2 relative">
            <Label htmlFor="email">Amount</Label>
            <span
              onClick={() => {
                toast("Amount to be paid in USDT copied", {
                  description: "past it in your choice crypto wallet to send",
                });
              }}
              className={cn(
                "flex !justify-start",
                buttonVariants({ variant: "outline" })
              )}
            >
              <div>
                168.72
                <span className="text-[9px] font-bold ml-1">USDT</span>
              </div>
            </span>
          </div>
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
                variant={"outline"}
                className="flex z-50 w-[210px] md:w-full h-10 rounded-md px-3 py-2"
              >
                <p className="truncate">1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</p>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-normal bg-muted p-1">
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
                className="flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
              >
                <DialogBaner className="h-20 w-20">
                  <Avatar className="h-20 w-20 rounded-xl">
                    <AvatarImage
                      className="h-20 w-20 rounded-xl"
                      src="/image.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback className="mb-4 h-20 w-20 rounded-xl">
                      <Skeleton className="mb-4 h-20 w-20 !bg-zinc-500" />
                    </AvatarFallback>
                  </Avatar>
                </DialogBaner>
              </DialogTrigger>
              <DialogContainer>
                <DialogContent
                  style={{
                    borderRadius: "24px",
                  }}
                  className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
                >
                  <DialogImage
                    src="/image.png"
                    alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                    className="h-full w-full"
                  />

                  {/* <DialogClose className="text-zinc-50" /> */}
                </DialogContent>
              </DialogContainer>
            </Dialog>

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
        </div>
      </CardContent>
    </motion.div>
  );
};
