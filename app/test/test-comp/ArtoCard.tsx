import { Bell, Cog, CreditCard, Eye, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ArtoCard() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-1 flex items-center space-x-4 lg:space-x-6">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">Arto+</span>
          </div>
          <Select defaultValue="bagus-fikri">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bagus-fikri">Bagus Fikri</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="fikri-shop">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select shop" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fikri-shop">Fikri Shop</SelectItem>
            </SelectContent>
          </Select>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input className="pl-8 w-72" placeholder="Search" type="search" />
          </div>
          <Button size="icon" variant="ghost">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button size="icon" variant="ghost">
            <Cog className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder-avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <Tabs className="w-full" defaultValue="overview">
        <TabsList className="w-full justify-start border-b px-4 md:px-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="arto-plus">Arto+</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="report">Report</TabsTrigger>
        </TabsList>
      </Tabs>
      <main className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-4">Arto Card</h1>
        <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
          <Card>
            <CardHeader>
              <img
                alt="Arto+ Card"
                className="w-full h-auto"
                height="200"
                src="/placeholder.svg?height=200&width=400"
                style={{
                  aspectRatio: "400/200",
                  objectFit: "cover",
                }}
                width="400"
              />
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <Button variant="outline">Payment Method</Button>
                <Button variant="outline">Freeze Card</Button>
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Card settings</span>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Cardholder Name</span>
                  <Button size="sm" variant="ghost">
                    Copy
                  </Button>
                </div>
                <div className="font-medium">Kevin Bernard</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Card Number</span>
                  <Button size="sm" variant="ghost">
                    Copy
                  </Button>
                </div>
                <div className="font-medium">5294 2436 4780 2468</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Expiry Date</span>
                  <Button size="sm" variant="ghost">
                    Copy
                  </Button>
                </div>
                <div className="font-medium">12/24</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Security Code</span>
                  <Button size="sm" variant="ghost">
                    Copy
                  </Button>
                </div>
                <div className="font-medium flex items-center">
                  ••• <Eye className="h-4 w-4 ml-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <Select defaultValue="last-7-days">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last-7-days">Last 7 days</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="15-mar-22-mar">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15-mar-22-mar">
                        15 Mar - 22 Mar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="currency">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="currency">Currency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Input
                className="w-[300px]"
                placeholder="Search transactions"
                type="search"
              />
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Debit Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">-500.01 SGD</TableCell>
                    <TableCell>Aug 28, 2023 3:40 PM</TableCell>
                    <TableCell>677 Rangoon Rd, Singapore 210677</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">-750 USD</TableCell>
                    <TableCell>Aug 2, 2023 02:48 PM</TableCell>
                    <TableCell>
                      12431 Grant Parks Apt. 445, Collierville, North Carolina,
                      13503-1288
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">-200 USD</TableCell>
                    <TableCell>Jul 30, 2023 10:06 AM</TableCell>
                    <TableCell>
                      1616 Stamm Plaza Suite 460, San Angelo, Alabama,
                      08090-8607
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
