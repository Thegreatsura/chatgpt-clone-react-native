import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, BriefcaseIcon, HelpCircleIcon } from "lucide-react";

export const EnterprisePlanCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center mr-2">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">acodei</span>
            </div>
            <div className="bg-white rounded-lg p-4 mt-8">
              <div className="flex items-center mb-2">
                <HelpCircleIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className="font-semibold">Why this plan?</span>
              </div>
              <p className="text-sm text-gray-600">
                We've recommended a plan tailored to your needs based on your
                transaction volume. This plan is designed to provide the best
                balance of features and efficiency, ensuring you get the most
                value as your transaction activity grows.
              </p>
            </div>
          </div>
          <CardContent className="p-6 md:w-1/2">
            <CardHeader className="px-0 pt-0">
              <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-500" />
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
              </div>
              <p className="text-sm text-gray-500">
                This will be a short summary.
              </p>
            </CardHeader>
            <div className="mb-6">
              <span className="text-4xl font-bold">$1,500</span>
              <span className="text-gray-500">/ year</span>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Unlimited Users",
                "Email & Zoom support within 24 hours",
                "1000 historical transactions",
                "Unlimited Stripe accounts",
                "Multiple product mapping",
                "Invoice syncing",
                "Advanced features",
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1">
                Maybe later
              </Button>
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
                Upgrade
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
