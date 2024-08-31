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

interface ArtoCloneProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fontSizes?: {
    small?: string;
    medium?: string;
    large?: string;
    xlarge?: string;
  };
  fontWeights?: {
    normal?: string;
    medium?: string;
    bold?: string;
  };
  borderRadius?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  spacing?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  cardClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  showLogo?: boolean;
  showTabs?: boolean;
  showActionButtons?: boolean;
  customColorOptions?: string[];
}

const defaultProps: ArtoCloneProps = {
  primaryColor: "purple",
  secondaryColor: "gray",
  accentColor: "blue",
  backgroundColor: "gray",
  textColor: "gray",
  borderColor: "gray",
  fontSizes: {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xlarge: "text-xl",
  },
  fontWeights: {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  },
  borderRadius: {
    small: "rounded",
    medium: "rounded-md",
    large: "rounded-lg",
  },
  spacing: {
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  },
  showLogo: true,
  showTabs: true,
  showActionButtons: true,
  customColorOptions: [
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
  ],
};

export function ArtoCloneV2(props: ArtoCloneProps) {
  const {
    primaryColor,
    secondaryColor,
    accentColor,
    backgroundColor,
    textColor,
    borderColor,
    fontSizes,
    fontWeights,
    borderRadius,
    spacing,
    cardClassName,
    headerClassName,
    contentClassName,
    showLogo,
    showTabs,
    showActionButtons,
    customColorOptions,
  } = { ...defaultProps, ...props };

  const [selectedColor, setSelectedColor] = useState(
    customColorOptions ? customColorOptions[0] : []
  );

  return (
    <div className={`min-h-screen bg-${backgroundColor}-100 ${spacing?.large}`}>
      <Card className={`max-w-6xl mx-auto ${cardClassName}`}>
        <CardContent className="p-0">
          {/* Header */}
          <header
            className={`flex items-center justify-between ${spacing?.medium} border-b border-${borderColor}-200 ${headerClassName}`}
          >
            <div className="flex items-center space-x-4">
              {showLogo && (
                <h1
                  className={`${fontSizes?.xlarge} ${fontWeights?.bold} text-${primaryColor}-600`}
                >
                  Arto+
                </h1>
              )}
              <Select>
                <SelectTrigger className={`w-[180px] ${borderRadius?.medium}`}>
                  <SelectValue placeholder="Fikri Studio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fikri">Fikri Studio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {showTabs && (
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
            )}
            {showActionButtons && (
              <div className="flex items-center space-x-4">
                <Bell className={`w-5 h-5 text-${secondaryColor}-500`} />
                <Settings className={`w-5 h-5 text-${secondaryColor}-500`} />
                <Switch />
                <Button
                  className={`bg-${accentColor}-500 hover:bg-${accentColor}-600 ${borderRadius?.medium}`}
                >
                  Create
                </Button>
              </div>
            )}
          </header>

          {/* Content */}
          <div
            className={`flex ${spacing?.large} space-x-6 ${contentClassName}`}
          >
            {/* Settings Panel */}
            <div className="w-1/3 space-y-6">
              <div className={`${fontSizes?.small} text-${textColor}-500`}>
                Setting / Payment Page
              </div>
              <div>
                <h2
                  className={`${fontSizes?.xlarge} ${fontWeights?.bold} mb-2`}
                >
                  Appearance
                </h2>
                <p className={`${fontSizes?.small} text-${textColor}-500 mb-4`}>
                  Choose your payment page theme as you wish
                </p>
                <div className="flex space-x-2 mb-4">
                  <Button
                    variant="outline"
                    className={`${fontSizes?.small} ${borderRadius?.medium}`}
                  >
                    Solid Color
                  </Button>
                  <Button
                    variant="outline"
                    className={`${fontSizes?.small} ${borderRadius?.medium}`}
                  >
                    Custom Image
                  </Button>
                </div>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {customColorOptions?.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 ${
                        borderRadius?.large
                      } bg-${color}-500 ${
                        selectedColor === color
                          ? `ring-2 ring-offset-2 ring-${accentColor}-500`
                          : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="customColor" name="colorType" />
                  <label htmlFor="customColor" className={fontSizes?.small}>
                    Custom color
                  </label>
                </div>
              </div>
              <div>
                <h3 className={`${fontWeights?.medium} mb-2`}>Custom Font</h3>
                <p className={`${fontSizes?.small} text-${textColor}-500 mb-2`}>
                  Select custom font for your payment page
                </p>
                <Select>
                  <SelectTrigger className={`w-full ${borderRadius?.medium}`}>
                    <SelectValue placeholder="Open Sans" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="opensans">Open Sans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className={`${fontWeights?.medium} mb-2`}>
                  Advanced Options
                </h3>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="requirePhone" />
                  <label htmlFor="requirePhone" className={fontSizes?.small}>
                    Required customer to provide phone number
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className={borderRadius?.medium}>
                  Cancel
                </Button>
                <Button
                  className={`bg-${accentColor}-500 hover:bg-${accentColor}-600 ${borderRadius?.medium}`}
                >
                  Save
                </Button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="w-2/3">
              <div className="flex justify-between items-center mb-4">
                <h2
                  className={`${fontSizes?.xlarge} ${fontWeights?.bold} flex items-center`}
                >
                  Preview <ChevronDown className="w-4 h-4 ml-1" />
                </h2>
                <div className="flex items-center space-x-4">
                  <div
                    className={`flex space-x-2 border border-${borderColor}-200 ${borderRadius?.medium} p-1`}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className={borderRadius?.small}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={borderRadius?.small}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={borderRadius?.medium}
                  >
                    Open Link <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
              <div
                className={`bg-gradient-to-br from-${selectedColor}-100 to-${selectedColor}-200 ${borderRadius?.large} ${spacing?.large} aspect-video flex items-center justify-center`}
              >
                <Card className={`w-96 ${borderRadius?.large}`}>
                  <CardContent className={spacing?.large}>
                    <div className="flex justify-between items-center mb-6">
                      <h3
                        className={`${fontSizes?.xlarge} ${fontWeights?.bold}`}
                      >
                        Arto+
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className={borderRadius?.medium}
                      >
                        Get Arto+
                      </Button>
                    </div>
                    <div className="text-center mb-6">
                      <p className={fontSizes?.small}>Raihan Fikri ask for</p>
                      <p
                        className={`${fontSizes?.xlarge} ${fontWeights?.bold} mb-1`}
                      >
                        100 USD
                      </p>
                      <p
                        className={`${fontSizes?.small} text-${textColor}-500`}
                      >
                        for pizza party tonight
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className={fontWeights?.medium}>
                        Choose how to transfer
                      </h4>
                      <div
                        className={`flex items-start space-x-3 ${spacing?.small} border border-${borderColor}-200 ${borderRadius?.medium}`}
                      >
                        <div
                          className={`bg-${backgroundColor}-100 ${spacing?.small} ${borderRadius?.medium}`}
                        >
                          A+
                        </div>
                        <div>
                          <p className={fontWeights?.medium}>Pay with arto+</p>
                          <p
                            className={`${fontSizes?.small} text-${textColor}-500`}
                          >
                            Log in and pay directly from your Arto+ account
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex items-start space-x-3 ${spacing?.small} border border-${borderColor}-200 ${borderRadius?.medium} bg-green-50`}
                      >
                        <div
                          className={`bg-green-100 ${spacing?.small} ${borderRadius?.medium} text-green-600`}
                        >
                          B
                        </div>
                        <div>
                          <p className={fontWeights?.medium}>Bank transfer</p>
                          <p
                            className={`${fontSizes?.small} text-${textColor}-500`}
                          >
                            Get Raihan Fikri&apos;s details to pay from your
                            bank account
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
