"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { useMultiplestepForm } from "hooks/useMultiplestepForm";
import { AnimatePresence } from "framer-motion";
import { useMultiplestepForm } from "@/components/form/useMultiplestepForm";
import SideBar from "@/components/form/SideBar";
import SuccessMessage from "@/components/form/SuccessMessage";
import UserInfoForm from "@/components/form/UserInfoForm";
import AddonsForm from "@/components/form/AddonsForm";
import FinalStep from "@/components/form/FinalStep";
import { PlanForm } from "@/components/form/PlanForm";
import { Card, CardFooter } from "@/components/ui/card";
// import UserInfoForm from "@/components/UserInfoForm";
// import PlanForm from "@/components/PlanForm";
// import AddonsForm from "@/components/AddonsForm";
// import FinalStep from "@/components/FinalStep";
// import SuccessMessage from "@/components/SuccessMessage";
// import SideBar from "@/components/SideBar";

interface AddOn {
  id: number;
  checked: boolean;
  title: string;
  subtitle: string;
  price: number;
}

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  yearly: boolean;
  addOns: AddOn[];
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: "Online Service",
      subtitle: "Access to multiple games",
      price: 1,
    },
    {
      id: 2,
      checked: false,
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      checked: false,
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
  ],
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    const { name, email, phone } = fieldToUpdate;

    if (name) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be at least 3 characters long",
      }));
    } else if (name) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (email) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (phone) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid 10-digit phone number",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }

    setFormData({ ...formData, ...fieldToUpdate });
  }

  return (
    <Card className="w-[350px]">
      {!showSuccessMsg ? (
        <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
      ) : (
        ""
      )}
      <main
        className={`${showSuccessMsg ? "w-full" : "w-full md:mt-5 md:w-[65%]"}`}
      >
        {false ? (
          <AnimatePresence mode="wait">
            <SuccessMessage goTo={goTo} />
          </AnimatePresence>
        ) : (
          <div className="w-full flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {currentStepIndex === 0 && <div className="">"first one"</div>}
              {currentStepIndex === 1 && <PlanForm />}
              {currentStepIndex === 2 && <div className="">"first three"</div>}
              {currentStepIndex === 3 && <div className="">"first four"</div>}
            </AnimatePresence>

            <CardFooter className="flexjustify-between">
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
              {/* <Button
                onClick={() => {
                  goTo(0);
                }}
                variant={"outline"}
              >
                Back
              </Button>
              <Button className="w-full" onClick={nextStep}>
                {isLastStep ? "Pay" : "Continue"}
              </Button> */}
            </CardFooter>
          </div>
        )}
      </main>
    </Card>
  );
}
