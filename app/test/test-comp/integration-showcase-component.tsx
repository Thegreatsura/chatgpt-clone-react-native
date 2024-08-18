import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const IntegrationShowcase = () => {
  const providers = [
    { name: "Azure", logo: "/path-to-azure-logo.svg" },
    { name: "AWS", logo: "/path-to-aws-logo.svg" },
    { name: "Kubernetes", logo: "/path-to-kubernetes-logo.svg" },
    { name: "Amazon S3", logo: "/path-to-s3-logo.svg" },
    { name: "Redis", logo: "/path-to-redis-logo.svg" },
    { name: "Azure", logo: "/path-to-azure-logo.svg" },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto text-orange-500"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">
            Seamless Integration with Industry-Leading Providers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with Azure, AWS, Kubernetes, Amazon S3, and
            Redis to build scalable, high-performance web apps with demodash.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-between">
            {providers.map((provider, index) => (
              <div key={index} className="bg-white p-2 rounded-full">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-10 h-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-orange-500 w-24 h-24 rounded-octagon flex items-center justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9l2.45-4.9A2 2 0 017.24 3h9.52a2 2 0 011.8 1.1L21 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
