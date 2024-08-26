"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Bell,
  Settings,
  ChevronDown,
  Monitor,
  Smartphone,
  ExternalLink,
} from "lucide-react";

export function ArtoClone() {
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = [
    "blue",
    "indigo",
    "emerald",
    "green",
    "orange",
    "amber",
    "lime",
    "sky",
    "cyan",
    "rose",
    "teal",
    "spring",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-6xl mx-auto">
        <CardContent className="p-0">
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-purple-600">Arto+</h1>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Fikri Studio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fikri">Fikri Studio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <nav>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="arto">Arto+</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="people">People</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
              </Tabs>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-500" />
              <Settings className="w-5 h-5 text-gray-500" />
              <Switch />
              <Button>Create</Button>
            </div>
          </header>

          {/* Content */}
          <div className="flex p-6 space-x-6">
            {/* Settings Panel */}
            <div className="w-1/3 space-y-6">
              <div className="text-sm text-gray-500">
                Setting / Payment Page
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Appearance</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Choose your payment page theme as you wish
                </p>
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" className="text-xs">
                    Solid Color
                  </Button>
                  <Button variant="outline" className="text-xs">
                    Custom Image
                  </Button>
                </div>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full bg-${color}-500 ${
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="customColor" name="colorType" />
                  <label htmlFor="customColor" className="text-sm">
                    Custom color
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Custom Font</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Select custom font for your payment page
                </p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Open Sans" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="opensans">Open Sans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Advanced Options</h3>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="requirePhone" />
                  <label htmlFor="requirePhone" className="text-sm">
                    Required customer to provide phone number
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="w-2/3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  Preview <ChevronDown className="w-4 h-4 ml-1" />
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2 border rounded-md p-1">
                    <Button variant="ghost" size="sm">
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    Open Link <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
              <div
                className={`bg-gradient-to-br from-${selectedColor}-100 to-${selectedColor}-200 rounded-lg p-8 aspect-video flex items-center justify-center`}
              >
                <Card className="w-96">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold">Arto+</h3>
                      <Button variant="outline" size="sm">
                        Get Arto+
                      </Button>
                    </div>
                    <div className="text-center mb-6">
                      <p className="text-sm mb-1">Raihan Fikri ask for</p>
                      <p className="text-4xl font-bold mb-1">100 USD</p>
                      <p className="text-sm text-gray-500">
                        for pizza party tonight
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Choose how to transfer</h4>
                      <div className="flex items-start space-x-3 p-3 border rounded-md">
                        <div className="bg-gray-100 p-2 rounded-md">A+</div>
                        <div>
                          <p className="font-semibold">Pay with arto+</p>
                          <p className="text-sm text-gray-500">
                            Log in and pay directly from your Arto+ account
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 border rounded-md bg-green-50">
                        <div className="bg-green-100 p-2 rounded-md text-green-600">
                          B
                        </div>
                        <div>
                          <p className="font-semibold">Bank transfer</p>
                          <p className="text-sm text-gray-500">
                            Get Raihan Fikri's details to pay from your bank
                            account
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
