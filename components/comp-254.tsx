"use client";

import { useSliderWithInput } from "@/hooks/use-slider-with-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RotateCcw } from "lucide-react";

export function Progress({ value }: { value: number }) {
  const minValue = 0;
  const maxValue = 100;
  const initialValue = [0];
  const defaultValue = [0];

  const {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
  } = useSliderWithInput({ minValue, maxValue, initialValue, defaultValue });

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <Input
            className="h-7 w-12 px-2 py-0 border-none"
            type="text"
            inputMode="decimal"
            value={value}
            readOnly
          />
          %
        </div>
      </div>
      {/* <div className="flex items-center gap-4">
        <Slider
          className="grow"
          value={[value]}
          onValueChange={handleSliderChange}
          min={minValue}
          max={maxValue}
          step={0.01}
          aria-label="Temperature"
        />
      </div> */}
    </div>
  );
}
