"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";
import { useMultiplestepForm } from "@/components/useMultiplestepForm";
import { PaymentSuccessMessage } from "@/components/SuccessMessage";
import { AwashBankStep1 } from "@/components/awashbank/awashbank-step1";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CryptoStep1 } from "./crypto-step1";

export function Crypto() {
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
    <CardContent className="p-0">
      {false ? (
        <AnimatePresence mode="wait">
          <PaymentSuccessMessage goTo={goTo} />
        </AnimatePresence>
      ) : (
        <div className="w-full flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {currentStepIndex === 0 && <CryptoStep1 />}
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
  );
}
