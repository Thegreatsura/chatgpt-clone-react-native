"use client";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "../ui/button";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ModeToggle } from "../toggle";
import { useState } from "react";

const formSchema = z.object({
  network: z.string().min(2, { message: "select blockchain network" }),
});

const cryptoNetworks = [
  {
    value: "bitcoin",
    label: "Bitcoin",
  },
  {
    value: "ethereum",
    label: "Ethereum",
  },
  {
    value: "binance-smart-chain",
    label: "Binance Smart Chain",
  },
];

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

type Props = {
  next: () => void;
};
export const CryptoStep1 = ({ next }: Props) => {
  const [Network, setNetwork] = useState<string | undefined>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      network: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    next();
  }

  return (
    <motion.div
      className="flex flex-col gap-3 p-2 rounded-xl"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CardContent className="flex items-center justify-center flex-col gap-4 h-[228px] bg-muted rounded-xl p-3">
        <ToggleGroup
          variant={"outline"}
          className="flex flex-col p-3"
          onValueChange={(value) => setNetwork(value)}
          type="single"
        >
          <div className="flex gap-2">
            <ToggleGroupItem
              className="data-[state=on]:bg-black/10 dark:data-[state=on]:bg-white/10 dark:border-slate-200 border-slate-900 dark:border"
              value="btc"
              aria-label="Toggle bold"
            >
              {/* Ethereum  */}
              ERC-20
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-black/10 dark:data-[state=on]:bg-white/10 dark:border-slate-200 border-slate-900 dark:border"
              value="eth"
              aria-label="Toggle italic"
            >
              {/* Tron  */}
              TRC-20
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-black/10 dark:data-[state=on]:bg-white/10 dark:border-slate-200 border-slate-900 dark:border"
              value="hello"
              aria-label="Toggle underline"
            >
              {/* <span className="hidden sm:block">Binance Smart Chain</span>{" "} */}
              BEP-20
              {/* or BSC */}
            </ToggleGroupItem>
          </div>

          <div className="flex gap-2">
            <ToggleGroupItem
              className="w-[72px] data-[state=on]:bg-black/10 dark:data-[state=on]:bg-white/10 dark:border-slate-200 border-slate-900 dark:border"
              value="hihi"
              aria-label="Toggle bold"
            >
              {/* Solana  */}
              SPL
            </ToggleGroupItem>
            <ToggleGroupItem
              className="data-[state=on]:bg-black/10 dark:data-[state=on]:bg-white/10 dark:border-slate-200 border-slate-900 dark:border"
              value="non"
              aria-label="Toggle italic"
            >
              {/* Polygon  */}
              MATIC
            </ToggleGroupItem>
          </div>

          <div>
            <ToggleGroupItem
              className="w-[72px] data-[state=on]:bg-black/10 dark:data-[state=on]:bg-white/10 dark:border-slate-200 border-slate-900 dark:border"
              value="chick"
              aria-label="Toggle underline"
            >
              {/* Algorand  */}
              ALGO
            </ToggleGroupItem>
          </div>
        </ToggleGroup>
      </CardContent>
      <CardFooter className="flex justify-between p-0 mt-2">
        <Button
          disabled={!!!Network?.trim()}
          className="w-full"
          onClick={() => {
            next();
          }}
        >
          Continue
        </Button>
      </CardFooter>
    </motion.div>
  );
};
