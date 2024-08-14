import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const BrandingPage = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">{/* Add sidebar content */}</div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Branding</h1>
        <p className="mb-6">
          Create a consistent, branded universal login experience capable of
          managing all authentication flows
        </p>

        <Card className="bg-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Page Background Color</label>
                <Input
                  type="text"
                  placeholder="#11CC11"
                  className="bg-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2">Screen Resolution</label>
                <Select>
                  <SelectTrigger className="bg-gray-700">
                    <SelectValue placeholder="1920 x 1080" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1920x1080">1920 x 1080</SelectItem>
                    {/* Add more resolution options */}
                  </SelectContent>
                </Select>
              </div>
              {/* Add more form fields for Logo, Card Background Color, etc. */}
            </div>

            <div className="mt-6">
              <label className="block mb-2">Card Grid Column</label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <Button variant="outline">Reset Changes</Button>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
