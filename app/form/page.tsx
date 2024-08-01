"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useMultiplestepForm } from "@/components/useMultiplestepForm";
import { PaymentSuccessMessage } from "@/components/SuccessMessage";
import { AwashBankStep1 } from "@/components/awashbank/awashbank-step1";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(4);

  return (
    <CardContent className="p-0">
      {false ? (
        <AnimatePresence mode="wait">
          <PaymentSuccessMessage goTo={goTo} />
        </AnimatePresence>
      ) : (
        <div className="w-full flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStepIndex === 0 && <div className="">first one</div>}
            {currentStepIndex === 1 && <AwashBankStep1 />}
            {currentStepIndex === 2 && <div className="">first three</div>}
            {currentStepIndex === 3 && <div className="">first four</div>}
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
  );
}
