"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PaymentSuccessMessage } from "../SuccessMessage";
import { useMultiplestepForm } from "../useMultiplestepForm";
import { TelebirrStep1 } from "./telebirr-step1";
import { TelebirrStep2 } from "./telebirr-step2";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function Telebirr({ className }: { className?: string }) {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(3);

  return (
    <>
      <CardHeader className="p-0 flex flex-row">
        <ChevronLeft
          onClick={() => previousStep()}
          className={cn("mt-[6px] opacity-0 mr-2 bg-muted rounded-md", {
            "opacity-100": currentStepIndex !== 0,
          })}
        />
        <CardTitle className="p-0 mt-0">Telebirr Details</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStepIndex === 0 && <TelebirrStep1 />}
            {currentStepIndex === 1 && <TelebirrStep2 />}
            {currentStepIndex === 2 && <PaymentSuccessMessage />}
          </AnimatePresence>

          <CardFooter className="flex justify-between p-0 mt-2">
            {!isLastStep ? (
              <Button
                className="w-full"
                onClick={() => {
                  // goTo(0);
                  nextStep();
                }}
              >
                Continue
              </Button>
            ) : null}
          </CardFooter>
        </div>
      </CardContent>
    </>
  );
}
