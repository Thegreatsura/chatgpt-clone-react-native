"use client";
import React from "react";
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
import { cn } from "@/lib/utils";

const formSchema = z.object({
  bank: z.string().min(2, { message: "select payment method" }),
});

const paymentMethods = [
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

type SelectBankProps = {
  className?: string;
};

export const SelectBank = ({ className }: SelectBankProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* <CryptoNetworks /> */}
          <FormField
            control={form.control}
            name="bank"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full border-none focus:ring-0 focus:ring-primary focus:ring-offset-0">
                      <SelectValue
                        className={cn(
                          "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                          className
                        )}
                        placeholder="more"
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Blockchain networks</SelectLabel>
                      {paymentMethods.map((method) => {
                        return (
                          <SelectItem key={method.value} value={method.value}>
                            {method.label}
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
        </form>
      </Form>
    </div>
  );
};
