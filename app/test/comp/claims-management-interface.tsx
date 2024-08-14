import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Search,
  UserCircle,
  Calendar,
  LayoutGrid,
  Download,
} from "lucide-react";

const NavItem = ({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) => (
  <Button
    variant={active ? "default" : "ghost"}
    className={`${active ? "bg-black text-white" : "text-gray-500"}`}
  >
    {children}
  </Button>
);

const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    Authorized: "bg-green-500",
    Pending: "bg-yellow-500",
    Declined: "bg-red-500",
  } as Record<string, string>;
  return (
    <Badge className={`${colors[status]} text-white`} variant="outline">
      {status}
    </Badge>
  );
};

export function ClaimsManagementInterface() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b p-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold">F</span>
          <nav className="flex space-x-4">
            <NavItem>Home</NavItem>
            <NavItem active>Claims</NavItem>
            <NavItem>
              Messages
              <Badge className="ml-1 bg-black text-white" variant="secondary">
                1
              </Badge>
            </NavItem>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatar-placeholder.png" alt="Andy J." />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Andy J.</div>
            <div className="text-sm text-gray-500">Ford Service</div>
          </div>
          <ChevronDown size={16} />
          <Button variant="default" className="bg-black text-white">
            + New
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-2">Claims</h1>
        <p className="text-gray-500 mb-8">
          Today is 15 March,
          <br />
          You have 10 new claims
        </p>

        {/* Filters and Search */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Button variant="outline">All</Button>
            <Button variant="outline">Authorized</Button>
            <Button variant="outline">Pending</Button>
            <Button variant="outline">Declined</Button>
          </div>
          <div className="flex space-x-2">
            <Input placeholder="Search" className="w-64" />
            <Button variant="outline">
              <UserCircle size={16} className="mr-2" />
              Assigned
            </Button>
            <Button variant="outline">
              <Calendar size={16} className="mr-2" />
              Date
            </Button>
            <Button variant="outline">
              <LayoutGrid size={16} className="mr-2" />
              Group
            </Button>
            <Button variant="outline">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Claims Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>STATUS</TableHead>
              <TableHead>CLIENT</TableHead>
              <TableHead>ASSIGNED TO</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>TIME</TableHead>
              <TableHead>RO#</TableHead>
              <TableHead>CLAIM NUMBER</TableHead>
              <TableHead className="text-right">AMOUNT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {claimsData.map((claim, index) => (
              <TableRow key={index}>
                <TableCell>
                  <StatusBadge status={claim.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="w-6 text-gray-400">
                      {claim.clientInitials}
                    </span>
                    <span>{claim.clientName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="w-6 h-6 mr-2">
                      <AvatarImage src={`/avatar-${index + 1}.png`} />
                      <AvatarFallback>{claim.assignedTo[0]}</AvatarFallback>
                    </Avatar>
                    {claim.assignedTo}
                  </div>
                </TableCell>
                <TableCell>{claim.date}</TableCell>
                <TableCell>{claim.time}</TableCell>
                <TableCell>#{claim.ro}</TableCell>
                <TableCell>{claim.claimNumber}</TableCell>
                <TableCell className="text-right">${claim.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

const claimsData = [
  {
    status: "Authorized",
    clientInitials: "AF",
    clientName: "Albert Flores",
    assignedTo: "Jordyn Donin",
    date: "04.03.2024",
    time: "12:55 PM",
    ro: "5486132740",
    claimNumber: "CL-246780280527",
    amount: "4,398.54",
  },
  {
    status: "Authorized",
    clientInitials: "JG",
    clientName: "Jackson Gouse",
    assignedTo: "Haylie Kenter",
    date: "04.03.2024",
    time: "12:49 PM",
    ro: "1311793577",
    claimNumber: "CL-343252925078",
    amount: "900.95",
  },
  {
    status: "Pending",
    clientInitials: "HC",
    clientName: "Haylie Culhane",
    assignedTo: "Paityn Bergson",
    date: "03.03.2024",
    time: "12:30 PM",
    ro: "9644283018",
    claimNumber: "CL-937357178525",
    amount: "1,304.90",
  },
  {
    status: "Pending",
    clientInitials: "CS",
    clientName: "Carter Septimus",
    assignedTo: "Charlie Aminoff",
    date: "03.03.2024",
    time: "10:18 AM",
    ro: "5486132740",
    claimNumber: "CL-246780280527",
    amount: "9,542.89",
  },
  {
    status: "Authorized",
    clientInitials: "MH",
    clientName: "Maria Herwitz",
    assignedTo: "Ann Septimus",
    date: "03.03.2024",
    time: "09:35 AM",
    ro: "4720371777",
    claimNumber: "CL-685499415020",
    amount: "349.90",
  },
  {
    status: "Declined",
    clientInitials: "MF",
    clientName: "Miracle Franci",
    assignedTo: "Haylie Kenter",
    date: "02.03.2024",
    time: "09:21 AM",
    ro: "9833242992",
    claimNumber: "CL-390808086810",
    amount: "12,905.00",
  },
  {
    status: "Authorized",
    clientInitials: "LS",
    clientName: "Lindsey Siphron",
    assignedTo: "Corey Kenter",
    date: "02.03.2024",
    time: "09:15 AM",
    ro: "6021997134",
    claimNumber: "CL-740465497431",
    amount: "7,908.48",
  },
  {
    status: "Declined",
    clientInitials: "ZB",
    clientName: "Zaire Botosh",
    assignedTo: "Haylie Kenter",
    date: "02.03.2024",
    time: "09:10 AM",
    ro: "1311793577",
    claimNumber: "CL-873425123295",
    amount: "120.95",
  },
];
