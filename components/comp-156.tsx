"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItemCustom } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { CircleHelp } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export function AddEmail({ className }: { className?: string }) {
  const radioId = useId();
  const inputId = useId();
  const [selectedValue, setSelectedValue] = useState("without-expansion");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedValue === "with-expansion" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedValue]);

  return (
    <RadioGroup
      className={cn("gap-6 mt-2 border p-2 rounded-none", className)}
      value={selectedValue}
      onValueChange={setSelectedValue}
    >
      <div>
        <div className="flex items-start gap-2">
          <RadioGroupItemCustom
            onClick={(e) => {
              e.stopPropagation();
              setSelectedValue((prev) =>
                prev === "with-expansion" ? "" : "with-expansion"
              );
            }}
            value="with-expansion"
            id={`${radioId}-1`}
            aria-describedby={`${radioId}-1-description`}
            aria-controls={inputId}
          />
          <div className="grow">
            <div className="grid grow gap-2">
              <Label htmlFor={`${radioId}-1`} className="flex">
                Add email for Notification {"(Optional)"}
                <span>
                  <CircleHelp size={15} className="ml-1 hover:cursor-pointer" />
                </span>
              </Label>
              <p
                id={`${radioId}-1-description`}
                className="text-xs text-muted-foreground"
              >
                Email and phone number for payment status
              </p>
            </div>

            <div
              role="region"
              id={inputId}
              aria-labelledby={`${radioId}-1`}
              className="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
              data-state={
                selectedValue === "with-expansion" ? "expanded" : "collapsed"
              }
            >
              <div
                className={cn(
                  "pointer-events-none -m-2 overflow-hidden p-2 hidden",
                  {
                    "block ": selectedValue === "with-expansion",
                  }
                )}
              >
                <div className="pointer-events-auto mt-3">
                  <Input
                    id="radio-05-additional-info"
                    ref={inputRef}
                    type="text"
                    className="rounded-none"
                    placeholder="Enter your email"
                    aria-label="Additional Information"
                    disabled={selectedValue !== "with-expansion"}
                  />
                </div>
              </div>
              <div
                className={cn(
                  "pointer-events-none -m-2 overflow-hidden p-2 hidden",
                  {
                    "block ": selectedValue === "with-expansion",
                  }
                )}
              >
                <div className="pointer-events-auto mt-3">
                  <Input
                    id="radio-06-additional-info"
                    type="text"
                    className="rounded-none"
                    placeholder="Enter your phone number"
                    aria-label="Additional Information"
                    disabled={selectedValue !== "with-expansion"}
                  />
                </div>
              </div>

              {/* <Button
                className={cn("mt-2 hidden", {
                  "block ": selectedValue === "with-expansion",
                })}
                onClick={() => setSelectedValue("")}
              >
                hide
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
