import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

export function TwoFactorAuthAndTransaction() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">INCREASE</CardTitle>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Enable Two-Factor Authentication
            </h2>
            <p className="text-gray-600 mb-4">
              To protect your account, Increase requires Two-Factor
              Authentication. Scan the QR code above with an authenticator app
              such as 1Password or Authy and enter the code you receive.
            </p>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <img
                alt="QR Code"
                className="w-32 h-32 mx-auto"
                height="128"
                src="/placeholder.svg?height=128&width=128"
                style={{
                  aspectRatio: "128/128",
                  objectFit: "cover",
                }}
                width="128"
              />
              <p className="text-sm text-center mt-2 text-gray-600">
                Scan this QR code with an authenticator app such as 1Password or
                Authy.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="twoFactorCode">Two factor code</Label>
              <Input id="twoFactorCode" placeholder="Enter code" />
            </div>
            <Button className="w-full mt-4 bg-gray-900 text-white hover:bg-gray-800">
              Done
            </Button>
            <p className="text-center mt-2">
              <a href="#" className="text-blue-600 hover:underline">
                Help
              </a>
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">$3,782.89</CardTitle>
              <p className="text-gray-600">ACH Debit Transfer</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Transfer created</span>
                </div>
                <span className="text-gray-600">Aug 2, 09:24:07 AM PDT</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Approved by Jack Reynolds</span>
                </div>
                <span className="text-gray-600">10:02:28 AM PDT</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Submitted to the Federal Reserve</span>
                </div>
                <span className="text-gray-600">10:02:29 PM PDT</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Settlement with recipient bank</span>
                </div>
                <span className="text-gray-600">2:00:00 PM PDT</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Hold will be released on August 4</span>
                </div>
                <span className="text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-gray-600">
          <p>© 2024 Increase</p>
          <div className="space-x-2">
            <a href="#" className="hover:underline">
              Privacy & Terms
            </a>
            <a href="#" className="hover:underline">
              Contact us
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
