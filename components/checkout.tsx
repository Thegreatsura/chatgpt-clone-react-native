"use client";
import React, { useState } from "react";
import { CheckBox } from "./comp-147";
import { AddEmail } from "./comp-156";
import { defineStepper } from "@stepperize/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Sparkles, Trash, Upload } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckOutItems, Items } from "./checkout-items";
import { Input } from "./ui/input";
import { type Accept, useDropzone } from "react-dropzone";

function extractSpecificDomainUrls(text: string): string | undefined {
  // Regular expression to match URLs starting with the specific domain
  const AwashUrlRegex =
    /https:\/\/awashpay\.awashbank\.com(:\d+)?[\/\w\-?=&%.]*/gi;
  const CBEUrlRegex = /https:\/\/apps\.cbe\.com\.et(:\d+)?[\/\w\-?=&%.]*/gi;
  const refRegex = /Ref:\s([^\s]+)/g;

  // Extract all matches
  const matches = text.match(refRegex);
  // console.log(matches);

  // Return matche or undefined if no URLs are found
  return matches ? matches[0].replace(".Contact", "") : undefined;
}

const { Scoped, useStepper, steps } = defineStepper(
  { id: "a", title: "Step 1", description: "checkout details" },
  { id: "b", title: "Step 2", description: "chose payment method" },
  { id: "c", title: "Step 3", description: "show payment info" },
  { id: "d", title: "Step 3", description: "enter payment info" },
  { id: "e", title: "Step 3", description: "final" }
);

interface CheckoutItem {
  name: string;
  price: number;
  quantity: number;
}

const dummyItems: CheckoutItem[] = [
  { name: "T-Shirt", price: 19.99, quantity: 2 },
  { name: "Jeans", price: 49.99, quantity: 1 },
  { name: "Sneakers", price: 79.99, quantity: 1 },
];

const Checkout = () => {
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [Url, setUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [select, onSelect] = useState<string>("hi");
  const { edgestore } = useEdgeStore();
  const stepper = useStepper();

  const totalItems = dummyItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = dummyItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  const onDrop = React.useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
          setProgress(progress);
        },
        options: {
          temporary: true,
        },
      });
      // you can run some server action or api here
      // to add the necessary data to your database
      console.log(res);
      setUrl(res.url);
    }
  }, []);

  const accept: Accept = {
    "image/*": [".jpg", ".jpeg", ".png"],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
  });

  return (
    <div className="h-screen flex flex-col">
      <AnimatePresence>
        {!stepper.isLast && (
          <motion.div
            className={cn("h-[40%] bg-gray-100", {
              "h-[50%]": stepper.isFirst,
            })}
          >
            <div className="h-full flex flex-col items-center justify-center">
              Total
              <div>$120.76</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn("h-[60%] flex flex-col items-center bg-white", {
          "h-[100vh]": stepper.isLast,
          "h-[50%]": stepper.isFirst,
        })}
      >
        <>
          {stepper.switch({
            a: (step) => (
              // <div className="w-full my-auto px-6">
              //   <div className="flex-grow h-full items-center">
              //     <div className="flex items-center mb-4 bg-gray-50 rounded-lg p-2">
              //       <div className="w-20 h-20 relative mr-4">
              //         <Image
              //           unoptimized
              //           src={"/logan-weaver-lgnwvr-RFljoc6515Y-unsplash.jpg"}
              //           alt={""}
              //           layout="fill"
              //           objectFit="cover"
              //           className="rounded-md"
              //         />
              //       </div>
              //       <div className="flex-grow">
              //         <h3 className="font-semibold">{"Nike"}</h3>
              //         <p className="text-sm text-gray-600">Qty: {2}</p>
              //         <p className="font-medium">${(100).toFixed(2)}</p>
              //       </div>
              //     </div>
              //     {dummyItems.map((item, index) => (
              //       <div
              //         key={index}
              //         className="flex justify-between items-center mb-2"
              //       >
              //         <span>
              //           {item.name} x{item.quantity}
              //         </span>
              //         <span>${(item.price * item.quantity).toFixed(2)}</span>
              //       </div>
              //     ))}
              //     <div className="mt-4 pt-2 border-t">
              //       <div className="flex justify-between items-center mb-1">
              //         <span>Subtotal</span>
              //         <span>${subtotal.toFixed(2)}</span>
              //       </div>
              //       <div className="flex justify-between items-center mb-1">
              //         <span>Tax</span>
              //         <span>${tax.toFixed(2)}</span>
              //       </div>
              //       <div className="flex justify-between items-center font-bold">
              //         <span>Total</span>
              //         <span>${total.toFixed(2)}</span>
              //       </div>
              //     </div>
              //   </div>
              //   <Button
              //     className="w-full rounded-none"
              //     onClick={() => stepper.next()}
              //   >
              //     Proceed to Payment
              //   </Button>
              // </div>
              <Card09 onCheckout={() => stepper.next()} />
            ),
            b: (step) => (
              <div className="w-full h-full px-6 flex flex-col mt-4">
                <Items selected={select} onSelect={onSelect} className="mb-2" />
                <Button
                  disabled={select.trim() === "hi"}
                  className="w-full rounded-none"
                  onClick={() => {
                    stepper.next();
                    onSelect("hi");
                  }}
                >
                  continue
                </Button>
              </div>
            ),
            c: (step) => (
              <div className="w-full h-full p-6">
                <p>{step.description}</p>
                <I />
                <I />
                <I />
                <Button
                  className="w-full mt-4 rounded-none"
                  onClick={() => stepper.next()}
                >
                  continue
                </Button>
              </div>
            ),
            d: (step) => (
              <div className="w-full h-full p-6">
                <p>{step.description}</p>
                <AddEmail />

                <Textarea
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                  className="mt-4"
                />

                <div
                  {...getRootProps()}
                  className={cn(
                    "relative group h-[100px] cursor-pointer mt-6 mb-1 flex flex-col items-center justify-center",
                    "rounded-none border-2 border-dashed",
                    "transition-colors duration-200",
                    isDragging
                      ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10"
                      : "border-zinc-200 dark:border-zinc-800"
                  )}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  aria-label="Upload file"
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    {Url ? (
                      <div className="flex items-center justify-center gap-6">
                        <Avatar className="h-24 w-24 rounded-none border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
                          <AvatarImage
                            src={Url}
                            className="rounded-none object-contain"
                          />
                          <AvatarFallback className="bg-zinc-100 dark:bg-zinc-900 rounded-none">
                            loading
                          </AvatarFallback>
                        </Avatar>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            setProgress(null);
                            setUrl(null);
                          }}
                          variant="outline"
                          size={"icon"}
                          className="rounded-none 
                              hover:bg-zinc-50 dark:hover:bg-zinc-900/50
                             transition-colors shadow-sm"
                        >
                          <Trash className="h-6 w-6 text-red-600 dark:text-zinc-400" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        {progress !== null ? (
                          <Progress value={progress!} />
                        ) : (
                          <Upload className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
                        )}

                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Drag and drop or click to upload
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full mt-4 rounded-none"
                  onClick={() => {
                    console.log(extractSpecificDomainUrls(message));
                    stepper.next();
                  }}
                >
                  continue
                </Button>
              </div>
            ),
            e: () => (
              <div className="w-full h-full p-6 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center">
                  <p>Finished!</p>
                </div>
                <Button
                  className="w-full mt-4 rounded-none"
                  onClick={() => stepper.reset()}
                >
                  reset
                </Button>
              </div>
            ),
          })}
        </>
      </div>
    </div>
  );
};

export default Checkout;

import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy } from "lucide-react";
import { useId, useRef } from "react";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { useEdgeStore } from "@/lib/edgestore";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card09 } from "./kokonutui/card-09";
import { Progress } from "./comp-254";

export function I() {
  const id = useId();
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="mb-4">
      <div className="relative">
        <Input
          ref={inputRef}
          id={id}
          className="rounded-none"
          type="text"
          defaultValue="pnpm install origin-ui"
          readOnly
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed"
                aria-label={copied ? "Copied" : "Copy to clipboard"}
                disabled={copied}
              >
                <div
                  className={cn(
                    "transition-all",
                    copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                >
                  <Check
                    className="stroke-emerald-500"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={cn(
                    "absolute transition-all",
                    copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  )}
                >
                  <Copy size={16} strokeWidth={2} aria-hidden="true" />
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent className="px-2 py-1 text-xs">
              Copy to clipboard
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
