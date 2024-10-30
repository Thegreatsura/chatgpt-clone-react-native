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
import { cn } from "@/lib/utils";

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

export const AwashBankStep1 = () => {
  return (
    <motion.div
      className="flex flex-col gap-3 p-2 rounded-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <CardHeader className="p-0">
        <CardTitle>AwashBank Details</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader> */}
      <CardContent className="bg-muted rounded-xl p-3">
        <div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="tnx">Account Holder Name</Label>
              <Button
                variant={"outline"}
                className="flex justify-start md:w-full h-10 px-2 py-2"
              >
                <p className="truncate">Merchant name</p>
              </Button>
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="email">Account Number</Label>
              <Button
                onClick={() => {
                  toast("AwashBank account number copied", {
                    description: "send it to the copied account number",
                  });
                }}
                variant={"outline"}
                className="flex justify-start md:w-full h-10 px-2 py-2"
              >
                <p className="truncate">Merchant account Number</p>
              </Button>
            </div>
            <div className="grid gap-2 relative">
              <Label htmlFor="email">Amount</Label>
              <span
                onClick={() => {
                  toast("Amount to be sent in Birr copied", {
                    description: "Amount to be sent copied",
                  });
                }}
                className={cn(
                  "flex !justify-start",
                  buttonVariants({ variant: "outline" })
                )}
              >
                <div>
                  118.00
                  <span className="font-bold ml-1">ETB</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </motion.div>
  );
};
