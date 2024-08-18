import {
  Bell,
  ChevronDown,
  Computer,
  CreditCard,
  ExternalLink,
  Settings,
  Smartphone,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CheckoutPageCustomizer() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-purple-600">Arto+</h1>
            <Select defaultValue="fikri-studio">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select studio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fikri-studio">Fikri Studio</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Overview</Button>
            <Button variant="ghost">Arto+</Button>
            <Button variant="ghost">Activities</Button>
            <Button variant="ghost">People</Button>
            <Button variant="ghost">Reports</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Switch />
            <Button>Create</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs mb-4">
          <span className="text-gray-500">Setting</span> /{" "}
          <span className="font-medium">Payment Page</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Appearance</h2>
              <p className="text-gray-500 mb-4">
                Choose your payment page theme as you wish
              </p>
              <Tabs defaultValue="solid-color">
                <TabsList>
                  <TabsTrigger value="solid-color">Solid Color</TabsTrigger>
                  <TabsTrigger value="custom-image">Custom Image</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="grid grid-cols-6 gap-2 mt-4">
                {[
                  "bg-blue-500",
                  "bg-indigo-500",
                  "bg-green-500",
                  "bg-emerald-500",
                  "bg-orange-500",
                  "bg-yellow-500",
                  "bg-green-400",
                  "bg-sky-300",
                  "bg-blue-300",
                  "bg-orange-300",
                  "bg-teal-300",
                  "bg-green-300",
                ].map((color, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full ${color} cursor-pointer`}
                  ></div>
                ))}
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="custom-color" />
                <Label htmlFor="custom-color">Custom color</Label>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Custom Font</h2>
              <p className="text-gray-500 mb-2">
                Select custom font for your payment page
              </p>
              <Select defaultValue="open-sans">
                <SelectTrigger>
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open-sans">Open Sans</SelectItem>
                  <SelectItem value="roboto">Roboto</SelectItem>
                  <SelectItem value="lato">Lato</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Advanced Options</h2>
              <div className="flex items-center space-x-2">
                <Checkbox id="phone-number" />
                <Label htmlFor="phone-number">
                  Required customer to provide phone number
                </Label>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Preview</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon">
                  <Computer className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Smartphone className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  Open Link <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-100 to-blue-200">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="text-xl font-bold">Arto+</span>
                  <Button variant="outline" size="sm">
                    Get Arto+
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium">Raihan Fikri ask for</h3>
                  <p className="text-4xl font-bold">100 USD</p>
                  <p className="text-sm text-gray-500">
                    for pizza party tonight
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Choose how to transfer</h4>
                  <RadioGroup defaultValue="bank-transfer">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="arto" id="arto" />
                      <Label htmlFor="arto">
                        <div className="font-medium">Pay with arto+</div>
                        <div className="text-sm text-gray-500">
                          Log in and pay directly from your Arto+ account
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="bank-transfer"
                        id="bank-transfer"
                      />
                      <Label htmlFor="bank-transfer">
                        <div className="font-medium">Bank transfer</div>
                        <div className="text-sm text-gray-500">
                          Get Raihan Fikri&apos;s details to pay from your bank
                          account
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="text-xs text-gray-500">
                <p>© Arto+ Payments Limited 2023. All rights reserved.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
