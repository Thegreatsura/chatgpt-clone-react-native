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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="flex flex-col gap-4 h-[228px] bg-muted rounded-xl p-3">
            {/* <CryptoNetworks /> */}
            <FormField
              control={form.control}
              name="network"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Network</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Network" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Blockchain networks</SelectLabel>
                        {cryptoNetworks.map((network) => {
                          return (
                            <SelectItem
                              key={network.value}
                              value={network.value}
                            >
                              {network.label}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <CardDescription className="text-center p-2 bg-red-300/40 rounded-lg">
              <div className="flex m-2">
                <TriangleAlert className="text-red-500 mx-auto" />
              </div>
              Sending assets to an unsupported network can cause permanent loss
              of your funds.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between p-0 mt-2">
            <Button type="submit" className="w-full" onClick={() => {}}>
              Continue
            </Button>
          </CardFooter>
        </form>
      </Form>
    </motion.div>
  );
};
