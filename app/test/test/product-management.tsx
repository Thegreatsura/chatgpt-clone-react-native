"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  BellIcon,
  SettingsIcon,
  SearchIcon,
  LayoutGridIcon,
  LayoutListIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TrashIcon,
  EditIcon,
} from "lucide-react";

export function ProductManagement() {
  const [currentStore, setCurrentStore] = useState("Fikri Shop");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chart Library - Free 90+ Charts UI KIT",
      type: "Item",
      price: "200 USD",
      status: "Published",
      totalSales: 10,
      totalRevenue: "2,000 USD",
      createdAt: "Jan 12, 2023 3:40 PM",
    },
    {
      id: 2,
      name: "SEO Consultation Session",
      type: "Service",
      price: "200 USD / Day",
      status: "Draft",
      totalSales: "--",
      totalRevenue: "--",
      createdAt: "Jan 12, 2023 1:05 PM",
    },
    {
      id: 3,
      name: "Sony A7III Mirrorless Camera",
      type: "Item",
      price: "250 USD",
      status: "Published",
      totalSales: 15,
      totalRevenue: "3,750 USD",
      createdAt: "Jan 11, 2023 11:50 AM",
    },
    {
      id: 4,
      name: '"The Great Gatsby" Book Purchase',
      type: "Item",
      price: "250 USD",
      status: "Inactive",
      totalSales: 15,
      totalRevenue: "3,750 USD",
      createdAt: "Jan 11, 2023 09:15 AM",
    },
    {
      id: 5,
      name: "Personal Financial Analysis",
      type: "Service",
      price: "320,000 IDR / Month",
      status: "Published",
      totalSales: 20,
      totalRevenue: "6,400,000 IDR",
      createdAt: "Jan 11, 2023 08:45 AM",
    },
    {
      id: 6,
      name: "Home Security Camera System",
      type: "Item",
      price: "250,000 IDR",
      status: "Published",
      totalSales: 10,
      totalRevenue: "2,500,000 IDR",
      createdAt: "Jan 10, 2023 02:50 PM",
    },
    {
      id: 7,
      name: "Wireless Noise-Canceling Headphones",
      type: "Item",
      price: "100 USD",
      status: "Draft",
      totalSales: "--",
      totalRevenue: "--",
      createdAt: "Jan 10, 2023 02:10 PM",
    },
    {
      id: 8,
      name: "Truck Bed Liner Installation",
      type: "Service",
      price: "80 USD",
      status: "Published",
      totalSales: 10,
      totalRevenue: "800 USD",
      createdAt: "Jan 10, 2023 01:40 PM",
    },
    {
      id: 9,
      name: "Interior Room Design",
      type: "Service",
      price: "50,000 IDR",
      status: "Published",
      totalSales: 25,
      totalRevenue: "1,250,000 IDR",
      createdAt: "Jan 10, 2023 10:53 AM",
    },
  ]);

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const changeStore = (store: string) => {
    setCurrentStore(store);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-full mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <h1 className="text-2xl font-bold text-purple-600">Arto+</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <span className="font-semibold">Bagus Fikri</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>{currentStore}</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => changeStore("Fikri Shop")}>
                Fikri Shop
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => changeStore("Arto Store")}>
                Arto Store
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => changeStore("Digital Goods")}>
                Digital Goods
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <Input className="w-full md:w-64" placeholder="Search" />
          <div className="flex items-center space-x-4">
            <BellIcon className="h-6 w-6" />
            <SettingsIcon className="h-6 w-6" />
            <div className="flex items-center space-x-2">
              <Switch id="pro-mode" />
              <Label htmlFor="pro-mode">Pro Mode</Label>
            </div>
            <Button>Create</Button>
          </div>
        </div>
      </header>

      <nav className="mb-8 overflow-x-auto">
        <ul className="flex space-x-6 min-w-max">
          <li>Overview</li>
          <li>Arto+</li>
          <li>Activities</li>
          <li className="font-semibold">Products</li>
          <li>Billing</li>
          <li>People</li>
          <li>Report</li>
        </ul>
      </nav>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Products</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" /> Add Products
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Enter the details of the new product here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input id="price" className="col-span-3" />
              </div>
            </div>
            <Button type="submit">Add Product</Button>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all-products" className="mb-6">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="all-products">All Products</TabsTrigger>
          <TabsTrigger value="coupons">Coupons</TabsTrigger>
          <TabsTrigger value="shipping-rates">Shipping Rates</TabsTrigger>
          <TabsTrigger value="tax-rates">Tax Rates</TabsTrigger>
          <TabsTrigger value="pricing-tables">Pricing Tables</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-2 md:space-y-0">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">All 150</Badge>
          <Badge variant="secondary">Item 100</Badge>
          <Badge variant="secondary">Service 50</Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Status <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Published</DropdownMenuItem>
              <DropdownMenuItem>Draft</DropdownMenuItem>
              <DropdownMenuItem>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2">
          <Input className="w-full md:w-64" placeholder="Search" />
          <Button variant="outline" size="icon">
            <LayoutListIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <LayoutGridIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PRODUCTS</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>TOTAL SALES</TableHead>
              <TableHead>TOTAL REVENUE</TableHead>
              <TableHead>CREATED AT</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      product.status === "Published"
                        ? "default"
                        : product.status === "Draft"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>{product.totalSales}</TableCell>
                <TableCell>{product.totalRevenue}</TableCell>
                <TableCell>{product.createdAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <EditIcon className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => deleteProduct(product.id)}
                      >
                        <TrashIcon className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="outline">
          Load More <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
