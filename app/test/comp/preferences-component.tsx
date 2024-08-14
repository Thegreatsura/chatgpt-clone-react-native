import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Sun,
  Moon,
  Palette,
  Type,
  SunMedium,
  Sparkles,
  Play,
  Image,
} from "lucide-react";

export const PreferencesComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-md bg-gray-800 text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Preferences</CardTitle>
          <Button variant="ghost" className="text-white">
            Save
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Appearance */}
            <div className="space-y-2">
              <div className="flex items-center">
                <Sun className="mr-2 h-4 w-4" />
                <h3 className="text-sm font-medium">Appearance</h3>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className="w-20 h-16 p-1">
                  <div className="w-full h-full bg-white rounded-sm flex items-center justify-center text-xs text-black">
                    Light
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="w-20 h-16 p-1 border-blue-500"
                >
                  <div className="w-full h-full bg-gray-800 rounded-sm flex items-center justify-center text-xs">
                    Dark
                  </div>
                </Button>
                <Button variant="outline" className="w-20 h-16 p-1">
                  <div className="w-full h-full bg-gradient-to-r from-white to-gray-800 rounded-sm flex items-center justify-center text-xs">
                    Auto
                  </div>
                </Button>
              </div>
            </div>

            {/* Accent color */}
            <div className="space-y-2">
              <div className="flex items-center">
                <Palette className="mr-2 h-4 w-4" />
                <h3 className="text-sm font-medium">Accent color</h3>
              </div>
              <div className="flex justify-between">
                {[
                  "bg-blue-500",
                  "bg-yellow-200",
                  "bg-green-300",
                  "bg-purple-400",
                  "bg-pink-300",
                ].map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full ${color} ${
                      index === 0 ? "ring-2 ring-white" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text size */}
            <div className="space-y-2">
              <div className="flex items-center">
                <Type className="mr-2 h-4 w-4" />
                <h3 className="text-sm font-medium">Text size</h3>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            {/* Brightness */}
            <div className="space-y-2">
              <div className="flex items-center">
                <SunMedium className="mr-2 h-4 w-4" />
                <h3 className="text-sm font-medium">Brightness</h3>
              </div>
              <div className="bg-gray-700 rounded-md p-2">80%</div>
            </div>

            {/* Toggles */}
            {[
              {
                icon: <Sparkles className="h-4 w-4" />,
                label: "Reduce motion",
              },
              { icon: <Play className="h-4 w-4" />, label: "Auto play" },
              {
                //@ts-ignore
                icon: <Image alt="hello" className="h-4 w-4" />,
                label: "High quality photo",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-sm">{item.label}</span>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
