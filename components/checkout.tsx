"use client";
import React, { useState } from "react";
import { CheckBox } from "./comp-147";
import { AddEmail } from "./comp-156";
import { defineStepper } from "@stepperize/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, Upload } from "lucide-react";
import { CheckOutItems, Items } from "./checkout-items";
import { Input } from "./ui/input";

const { Scoped, useStepper, steps } = defineStepper(
  { id: "a", title: "Step 1", description: "checkout details" },
  { id: "b", title: "Step 2", description: "chose payment method" },
  { id: "c", title: "Step 3", description: "show payment info" },
  { id: "d", title: "Step 3", description: "enter payment info" },
  { id: "e", title: "Step 3", description: "final" }
);

const Checkout = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [select, onSelect] = useState<string>("hi");
  const stepper = useStepper();

  return (
    <div className="h-screen flex flex-col">
      {!stepper.isLast && (
        <div className="h-[40%] bg-gray-100">
          <div className="h-full flex flex-col items-center justify-center">
            Total
            <div>$120.76</div>
          </div>
        </div>
      )}

      <div
        className={cn(
          "h-auto flex flex-col items-center justify-center bg-white",
          {
            "h-[100%]": stepper.isLast,
          }
        )}
      >
        {/* <CheckBox /> */}
        <>
          {stepper.switch({
            a: (step) => (
              <div className="w-full h-full p-6">
                <p>{step.description}</p>
                <AddEmail />
                <Button
                  className="w-full mt-4 rounded-none"
                  onClick={() => stepper.next()}
                >
                  continue
                </Button>
              </div>
            ),
            b: (step) => (
              <div className="w-full h-full p-6 flex flex-col justify-center">
                <p>{step.description}</p>
                <Items selected={select} onSelect={onSelect} />
                <Button
                  disabled={select.trim() === "hi"}
                  className="w-full mt-4 rounded-none"
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
                {/* <AddEmail /> */}
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
                <Input
                  type="text"
                  className="rounded-none mt-4"
                  placeholder="receipt number"
                  aria-label="Additional Information"
                />

                <Textarea rows={1} className="mt-4" />

                <div
                  className={cn(
                    "relative group cursor-pointer mt-4 mb-1",
                    "rounded-lg border-2 border-dashed",
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
                  <div className="flex flex-col items-center mt-2">
                    <Upload className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Drag and drop or click to upload
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 rounded-none"
                  onClick={() => stepper.next()}
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
