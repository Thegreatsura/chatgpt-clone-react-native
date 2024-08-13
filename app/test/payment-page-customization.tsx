"use client";
import React, { ReactNode, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  BellIcon,
  SettingsIcon,
  PlusIcon,
  LinkIcon,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react";

const NavItem = ({ children }: { children: ReactNode }) => (
  <div className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
    {children}
  </div>
);

const ColorButton = ({ color }: { color: string }) => (
  <button
    className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-white hover:border-gray-300`}
  />
);

export const PaymentPageCustomization = () => {
  const [selectedTheme, setSelectedTheme] = useState("solidColor");
  const [customFont, setCustomFont] = useState("Open Sans");
  const [requirePhoneNumber, setRequirePhoneNumber] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-purple-600">
                Arto<sup>+</sup>
              </span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Fikri Studio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fikriStudio">Fikri Studio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex space-x-4">
              <NavItem>Overview</NavItem>
              <NavItem>Arto+</NavItem>
              <NavItem>Activities</NavItem>
              <NavItem>People</NavItem>
              <NavItem>Reports</NavItem>
            </div>
            <div className="flex items-center space-x-4">
              <BellIcon className="w-5 h-5 text-gray-500" />
              <SettingsIcon className="w-5 h-5 text-gray-500" />
              <Switch />
              <span className="text-sm font-medium">Pro Mode</span>
              <Button>
                <PlusIcon className="w-4 h-4 mr-2" />
                Create
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex space-x-8">
            <div className="w-1/3">
              <p className="text-sm text-gray-500 mb-4">
                Setting / Payment Page
              </p>
              <h2 className="text-2xl font-bold mb-2">Appearance</h2>
              <p className="text-sm text-gray-500 mb-4">
                Choose your payment page theme as you wish
              </p>
              <RadioGroup
                value={selectedTheme}
                onValueChange={setSelectedTheme}
                className="mb-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="solidColor" id="solidColor" />
                  <Label htmlFor="solidColor">Solid Color</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customImage" id="customImage" />
                  <Label htmlFor="customImage">Custom Image</Label>
                </div>
              </RadioGroup>
              <div className="grid grid-cols-6 gap-2 mb-4">
                <ColorButton color="blue" />
                <ColorButton color="indigo" />
                <ColorButton color="green" />
                <ColorButton color="emerald" />
                <ColorButton color="orange" />
                <ColorButton color="yellow" />
                <ColorButton color="teal" />
                <ColorButton color="cyan" />
                <ColorButton color="sky" />
                <ColorButton color="pink" />
                <ColorButton color="rose" />
                <ColorButton color="lime" />
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="radio"
                  id="customColor"
                  name="color"
                  className="w-4 h-4"
                />
                <Label htmlFor="customColor">Custom color</Label>
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Font</h3>
              <p className="text-sm text-gray-500 mb-2">
                Select custom font for your payment page
              </p>
              <Select value={customFont} onValueChange={setCustomFont}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Open Sans">Open Sans</SelectItem>
                  <SelectItem value="Roboto">Roboto</SelectItem>
                  <SelectItem value="Lato">Lato</SelectItem>
                </SelectContent>
              </Select>
              <h3 className="text-lg font-semibold mt-6 mb-2">
                Advanced Options
              </h3>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={requirePhoneNumber}
                  onCheckedChange={setRequirePhoneNumber}
                />
                <Label>Required customer to provide phone number</Label>
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </div>
            </div>
            <div className="w-2/3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Preview</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <MonitorIcon className="w-5 h-5" />
                    <SmartphoneIcon className="w-5 h-5" />
                  </div>
                  <Button variant="outline">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Open Link
                  </Button>
                </div>
              </div>
              <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold">
                      Arto<sup>+</sup>
                    </span>
                    <Button variant="outline" size="sm">
                      Get Arto+
                    </Button>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">
                    Raihan Fikri ask for
                  </h2>
                  <h1 className="text-4xl font-bold mb-1">100 USD</h1>
                  <p className="text-gray-500 mb-6">for pizza party tonight</p>
                  <h3 className="font-semibold mb-2">Choose how to transfer</h3>
                  <div className="space-y-2">
                    <Card className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          A+
                        </div>
                        <div>
                          <p className="font-semibold">Pay with arto+</p>
                          <p className="text-sm text-gray-500">
                            Log in and pay directly from your Arto+ account
                          </p>
                        </div>
                      </div>
                    </Card>
                    <Card className="p-3 border-green-500 border-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
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
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
