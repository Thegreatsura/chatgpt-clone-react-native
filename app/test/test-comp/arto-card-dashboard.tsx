import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, Settings, Plus } from "lucide-react";

export const ArtoDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-purple-600">Arto+</h1>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Bagus Fikri" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bagus">Bagus Fikri</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Fikri Shop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fikri">Fikri Shop</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Search" className="w-64" />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-5 w-5" />
            <Settings className="h-5 w-5" />
            <div className="flex items-center space-x-2">
              <span>Pro Mode</span>
              <div className="w-10 h-6 bg-green-500 rounded-full flex items-center p-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
              </div>
            </div>
            <Button variant="default">Create</Button>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          {[
            "Overview",
            "Arto+",
            "Activities",
            "Products",
            "Billing",
            "People",
            "Report",
          ].map((item) => (
            <Button key={item} variant="ghost">
              {item}
            </Button>
          ))}
          <Button variant="outline" className="ml-auto">
            <span className="mr-2">AI Assistant</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path>
            </svg>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-6">Arto Card</h2>
        <div className="flex space-x-8">
          {/* Card Details */}
          <Card className="w-1/3">
            <CardContent className="p-6">
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <img
                  src="/path-to-arto-card-image.png"
                  alt="Arto Card"
                  className="w-full"
                />
              </div>
              <div className="flex space-x-2 mb-4">
                <Button variant="outline">Payment Method</Button>
                <Button variant="outline">Freeze Card</Button>
                <Button variant="outline">...</Button>
              </div>
              {[
                "Cardholder Name",
                "Card Number",
                "Expiry Date",
                "Security Code",
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="text-sm text-gray-500">{item}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">
                      {item === "Security Code" ? "•••" : "Value"}
                    </p>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card className="w-2/3">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Last 7 days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">15 Mar - 22 Mar</Button>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input placeholder="Search" className="w-64" />
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>AMOUNT</TableHead>
                    <TableHead>DATE</TableHead>
                    <TableHead>DEBIT LOCATION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Sample data, replace with actual data */}
                  <TableRow>
                    <TableCell>-500.01 SGD</TableCell>
                    <TableCell>Aug 28, 2023 3:40 PM</TableCell>
                    <TableCell>677 Rangoon Rd, Singapore 210677</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
              <Button variant="link" className="mt-4">
                Load More
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
