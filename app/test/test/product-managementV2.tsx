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
  BellIcon,
  SettingsIcon,
  SearchIcon,
  LayoutGridIcon,
  LayoutListIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
} from "lucide-react";

export function ProductManagementV2() {
  const products = [
    {
      name: "Chart Library - Free 90+ Charts UI KIT",
      type: "Item",
      price: "200 USD",
      status: "Published",
      totalSales: 10,
      totalRevenue: "2,000 USD",
      createdAt: "Jan 12, 2023 3:40 PM",
    },
    {
      name: "SEO Consultation Session",
      type: "Service",
      price: "200 USD / Day",
      status: "Draft",
      totalSales: "--",
      totalRevenue: "--",
      createdAt: "Jan 12, 2023 1:05 PM",
    },
    {
      name: "Sony A7III Mirrorless Camera",
      type: "Item",
      price: "250 USD",
      status: "Published",
      totalSales: 15,
      totalRevenue: "3,750 USD",
      createdAt: "Jan 11, 2023 11:50 AM",
    },
    {
      name: '"The Great Gatsby" Book Purchase',
      type: "Item",
      price: "250 USD",
      status: "Inactive",
      totalSales: 15,
      totalRevenue: "3,750 USD",
      createdAt: "Jan 11, 2023 09:15 AM",
    },
    {
      name: "Personal Financial Analysis",
      type: "Service",
      price: "320,000 IDR / Month",
      status: "Published",
      totalSales: 20,
      totalRevenue: "6,400,000 IDR",
      createdAt: "Jan 11, 2023 08:45 AM",
    },
    {
      name: "Home Security Camera System",
      type: "Item",
      price: "250,000 IDR",
      status: "Published",
      totalSales: 10,
      totalRevenue: "2,500,000 IDR",
      createdAt: "Jan 10, 2023 02:50 PM",
    },
    {
      name: "Wireless Noise-Canceling Headphones",
      type: "Item",
      price: "100 USD",
      status: "Draft",
      totalSales: "--",
      totalRevenue: "--",
      createdAt: "Jan 10, 2023 02:10 PM",
    },
    {
      name: "Truck Bed Liner Installation",
      type: "Service",
      price: "80 USD",
      status: "Published",
      totalSales: 10,
      totalRevenue: "800 USD",
      createdAt: "Jan 10, 2023 01:40 PM",
    },
    {
      name: "Interior Room Design",
      type: "Service",
      price: "50,000 IDR",
      status: "Published",
      totalSales: 25,
      totalRevenue: "1,250,000 IDR",
      createdAt: "Jan 10, 2023 10:53 AM",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-purple-600">Arto+</h1>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Bagus Fikri</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
          <div className="flex items-center space-x-2">
            <span>Fikri Shop</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Input className="w-64" placeholder="Search" />
          <BellIcon className="h-6 w-6" />
          <SettingsIcon className="h-6 w-6" />
          <Switch />
          <span className="text-sm font-medium">Pro Mode</span>
          <Button>Create</Button>
        </div>
      </header>

      <nav className="mb-8">
        <ul className="flex space-x-6">
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
        <Button>Add Products</Button>
      </div>

      <Tabs defaultValue="all-products" className="mb-6">
        <TabsList>
          <TabsTrigger value="all-products">All Products</TabsTrigger>
          <TabsTrigger value="coupons">Coupons</TabsTrigger>
          <TabsTrigger value="shipping-rates">Shipping Rates</TabsTrigger>
          <TabsTrigger value="tax-rates">Tax Rates</TabsTrigger>
          <TabsTrigger value="pricing-tables">Pricing Tables</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <Badge variant="secondary">All 150</Badge>
          <Badge variant="secondary">Item 100</Badge>
          <Badge variant="secondary">Service 50</Badge>
          <Badge variant="secondary">
            Status <ChevronDownIcon className="h-4 w-4 inline" />
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Input className="w-64" placeholder="Search" />
          <LayoutListIcon className="h-6 w-6" />
          <LayoutGridIcon className="h-6 w-6" />
        </div>
      </div>

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
          {products.map((product, index) => (
            <TableRow key={index}>
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
                <MoreHorizontalIcon className="h-4 w-4" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <Button variant="link">
          Load More <ChevronDownIcon className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
