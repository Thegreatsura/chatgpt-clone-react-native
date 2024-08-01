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

export const AwashBankStep2 = () => {
  return (
    <motion.div
      className="flex flex-col gap-3 p-2 rounded-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <CardHeader className="p-0">
        <CardTitle>Telebirr Details</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader> */}
      <CardContent className="bg-muted rounded-xl p-3">
        <div className="grid gap-6">
          <div className="grid gap-2 relative">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example@gmail.com" />
            <p className="text-[9px]">
              if you need notification about payment status
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tnx">Awash transaction number</Label>
            <Input id="tnx" placeholder="BDN3QWGGGH" />
          </div>
        </div>
      </CardContent>
    </motion.div>
  );
};
