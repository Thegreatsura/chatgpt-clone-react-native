/**
 * v0 by Vercel.
 * @see https://v0.dev/t/znAvnDuaMwi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function Customize() {
  const [background, setBackground] = useState("bg-white");
  const [storeName, setStoreName] = useState("Acme Store");
  const [accentColor, setAccentColor] = useState("text-primary");
  const [roundedEdges, setRoundedEdges] = useState(true);
  const [storeImage, setStoreImage] = useState("/placeholder.svg");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="flex flex-col gap-8">
        <div className={`${background} rounded-lg p-6 shadow-lg`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                alt="Store Logo"
                width={40}
                height={40}
                className={roundedEdges ? "rounded-full" : "rounded-none"}
                style={{ aspectRatio: "40/40", objectFit: "cover" }}
              />
              <h2 className={`text-2xl font-bold ${accentColor}`}>
                {storeName}
              </h2>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <ShoppingCartIcon className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <HeartIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium">Product 1</h3>
                <p className="text-sm text-muted-foreground">$19.99</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Product 2</h3>
                <p className="text-sm text-muted-foreground">$29.99</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium">Product 3</h3>
                <p className="text-sm text-muted-foreground">$14.99</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Product 4</h3>
                <p className="text-sm text-muted-foreground">$24.99</p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Total</p>
              <p className="text-sm font-medium">$89.96</p>
            </div>
            <Button size="lg" className="w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Customize Checkout</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="background">Background Color</Label>
                <RadioGroup
                  id="background"
                  value={background}
                  onValueChange={setBackground}
                  className="grid grid-cols-3 gap-2"
                >
                  <Label
                    htmlFor="bg-white"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="bg-white" value="bg-white" />
                    <div className="w-8 h-8 bg-white rounded-md" />
                  </Label>
                  <Label
                    htmlFor="bg-gray-100"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="bg-gray-100" value="bg-gray-100" />
                    <div className="w-8 h-8 bg-gray-100 rounded-md" />
                  </Label>
                  <Label
                    htmlFor="bg-gray-200"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="bg-gray-200" value="bg-gray-200" />
                    <div className="w-8 h-8 bg-gray-200 rounded-md" />
                  </Label>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="store-name">Store Name</Label>
                <Input
                  id="store-name"
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="accent-color">Accent Color</Label>
                <RadioGroup
                  id="accent-color"
                  value={accentColor}
                  onValueChange={setAccentColor}
                  className="grid grid-cols-3 gap-2"
                >
                  <Label
                    htmlFor="text-primary"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="text-primary" value="text-primary" />
                    <div className="w-8 h-8 bg-primary rounded-md" />
                  </Label>
                  <Label
                    htmlFor="text-secondary"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem
                      id="text-secondary"
                      value="text-secondary"
                    />
                    <div className="w-8 h-8 bg-secondary rounded-md" />
                  </Label>
                  <Label
                    htmlFor="text-muted"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem
                      id="text-muted"
                      value="text-muted-foreground"
                    />
                    <div className="w-8 h-8 bg-muted-foreground rounded-md" />
                  </Label>
                </RadioGroup>
              </div>
              <div>
                <Label
                  htmlFor="rounded-edges"
                  className="flex items-center gap-2"
                >
                  <Checkbox id="rounded-edges" checked={roundedEdges} />
                  Rounded Edges
                </Label>
              </div>
              <div>
                <Label htmlFor="store-image">Store Image</Label>
                <Input
                  id="store-image"
                  type="text"
                  value={storeImage}
                  onChange={(e) => setStoreImage(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`${background} rounded-lg p-6 shadow-lg`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={storeImage}
                    alt="Store Logo"
                    width={40}
                    height={40}
                    className={roundedEdges ? "rounded-full" : "rounded-none"}
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  />
                  <h2 className={`text-2xl font-bold ${accentColor}`}>
                    {storeName}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <ShoppingCartIcon className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <HeartIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">Product 1</h3>
                    <p className="text-sm text-muted-foreground">$19.99</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Product 2</h3>
                    <p className="text-sm text-muted-foreground">$29.99</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">Product 3</h3>
                    <p className="text-sm text-muted-foreground">$14.99</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Product 4</h3>
                    <p className="text-sm text-muted-foreground">$24.99</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Total</p>
                  <p className="text-sm font-medium">$89.96</p>
                </div>
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
