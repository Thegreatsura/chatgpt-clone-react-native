"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useMultiplestepForm } from "@/components/useMultiplestepForm";
import { PaymentSuccessMessage } from "@/components/SuccessMessage";
import { AwashBankStep1 } from "@/components/awashbank/awashbank-step1";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AwashBank() {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(2);

  return (
    <>
      <CardHeader className="p-0 flex flex-row">
        <ChevronLeft
          onClick={() => previousStep()}
          className={cn("mt-[6px] opacity-0 mr-2 bg-muted rounded-md", {
            "opacity-100": currentStepIndex !== 0,
          })}
        />
        <CardTitle className="p-0 mt-0">AwashBank Details</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="p-0">
        {false ? (
          <AnimatePresence mode="wait">
            <PaymentSuccessMessage goTo={goTo} />
          </AnimatePresence>
        ) : (
          <div className="w-full flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {currentStepIndex === 0 && <AwashBankStep1 />}
              {currentStepIndex === 1 && <div className="">"step two"</div>}
              {currentStepIndex === 2 && <PaymentSuccessMessage />}
            </AnimatePresence>

            <CardFooter className="flex justify-between p-0 mt-2">
              {isLastStep ? (
                <Button
                  className="w-full"
                  onClick={() => {
                    goTo(1);
                  }}
                >
                  Pay
                </Button>
              ) : (
                <Button className="w-full" onClick={nextStep}>
                  Continue
                </Button>
              )}
            </CardFooter>
          </div>
        )}
      </CardContent>
    </>
  );
}
