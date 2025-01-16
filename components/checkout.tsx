"use client";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { defineStepper } from "@stepperize/react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Trash, Upload } from "lucide-react";
import React, { useId, useRef, useState } from "react";
import { type Accept, useDropzone } from "react-dropzone";
import { Items } from "./checkout-items";
import { Progress } from "./comp-254";
import { Card09 } from "./kokonutui/card-09";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
  { id: "b", title: "Step 2", description: "chose how you'll pay" },
  { id: "c", title: "Step 3", description: "payment details" },
  { id: "d", title: "Step 3", description: "Transaction info" },
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
  const [uploading, setIsUploading] = useState(false);
  const [Url, setUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [selected, onSelect] = useState<string>("Telebirr");
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
      setIsUploading(true);
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
      setIsUploading(false);
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
            className={cn("h-[35%] bg-gray-100", {
              "h-[80%]": stepper.isFirst,
            })}
          >
            <div className="h-full flex flex-col items-center justify-center">
              Total
              <div>$144.99</div>
              {/* <ColorPicker color="0 0% 100%" onChange={console.log} /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn("h-[65%] flex flex-col items-center bg-white", {
          "h-[100vh]": stepper.isLast,
          "h-[60%]": stepper.isFirst,
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
                {/* <p className="text-2xl">{step.description}</p> */}
                <Items
                  selected={selected}
                  onSelect={onSelect}
                  className="mb-2"
                />
                <Button
                  disabled={selected.trim() === ""}
                  className="w-full rounded-none"
                  onClick={() => {
                    stepper.next();
                    // onSelect("");
                  }}
                >
                  continue
                </Button>
              </div>
            ),
            c: (step) => (
              <div className="w-full h-full p-6">
                <p className="py-3 pb-3 text-2xl">
                  {selected} {step.description}
                </p>
                <I label="Account Holder Name" value="test name" />
                <I label="Account Number" value="test account" />
                <I label="Amount" value="test amount" />
                <Button
                  className="w-full mt-4 rounded-none"
                  onClick={() => stepper.next()}
                >
                  continue
                </Button>
              </div>
            ),
            d: (step) => (
              <div className="w-full h-full px-6 py-4 ">
                <p className="py-3 pb-3 text-2xl">{step.description}</p>
                {/* <AddEmail className="mb-2" /> */}
                <Label className="">Transaction Message</Label>
                <Textarea
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="mt-1 mb-2"
                />

                <Label className="">Screenshot of Transaction (Optional)</Label>

                <div
                  {...getRootProps()}
                  className={cn(
                    "relative group h-[100px] cursor-pointer mt-1 mb-1 flex flex-col items-center justify-center",
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
                  disabled={uploading || message === ""}
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
              // <div className="w-full h-full p-6 flex flex-col items-center justify-center">
              //   <div className="w-full flex items-center justify-center">
              //     <p>Finished!</p>
              //   </div>
              //   <Button
              //     className="w-full mt-4 rounded-none"
              //     onClick={() => stepper.reset()}
              //   >
              //     reset
              //   </Button>
              // </div>
              <Final onBack={() => stepper.reset()} />
            ),
          })}
        </>
      </div>
    </div>
  );
};

export default Checkout;

export function I({ label, value }: { value: string; label: string }) {
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
        <Label>{label}</Label>
        <Input
          ref={inputRef}
          id={id}
          className="rounded-none"
          type="text"
          defaultValue={value}
          readOnly
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleCopy}
                className="absolute inset-y-0 end-0 top-3 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed"
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

const Final = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="relative w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(0,0,0,0.15)] p-6 overflow-hidden">
      {/* Content container */}
      <div className="h-full flex flex-col items-center justify-center">
        {/* Success icon */}
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-500"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success message */}
        <h2 className="text-gray-600 dark:text-white text-xl mb-4">
          Payment successful
        </h2>

        {/* Amount */}
        <div className="text-[42px] font-semibold text-gray-900 dark:text-white mb-4">
          $144.99
        </div>

        {/* Payment details */}
        <p className="text-gray-500 dark:text-white text-center mb-8">
          when payemnt is verified you'll get
          <br />
          statement as Access inc.
        </p>

        {/* Back button */}
        <button
          onClick={onBack}
          className="text-blue-500 font-medium hover:text-blue-600 transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};
