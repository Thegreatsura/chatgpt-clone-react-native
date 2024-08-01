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
import { CryptoNetworks } from "./crypto-network";
import { TriangleAlert } from "lucide-react";

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

export const CryptoStep1 = () => {
  return (
    <motion.div
      className="flex flex-col gap-3 p-2 rounded-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CardContent className="flex flex-col gap-4 h-[228px] bg-muted rounded-xl p-3">
        <CryptoNetworks />
        <CardDescription className="text-center p-2 bg-red-300/40 rounded-lg">
          <div className="flex m-2">
            <TriangleAlert className="text-red-500 mx-auto" />
          </div>
          Sending assets to an unsupported network can cause permanent loss of
          your funds.
        </CardDescription>
      </CardContent>
    </motion.div>
  );
};
