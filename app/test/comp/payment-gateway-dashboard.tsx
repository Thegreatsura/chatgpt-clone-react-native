import React, { ReactNode, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  LucideProps,
} from "lucide-react";
type IconT = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("Main Store");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-indigo-700 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <nav>
          <SidebarLink Icon={Home} text="Dashboard" />
          <SidebarLink Icon={CreditCard} text="Transactions" />
          <SidebarLink Icon={Users} text="Customers" />
          <SidebarLink Icon={Settings} text="Settings" />
          <SidebarLink Icon={HelpCircle} text="Help" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden"
              >
                <Menu size={24} />
              </button>
              <h1 className="text-xl font-semibold text-gray-700 ml-2 md:ml-0">
                Payment Dashboard
              </h1>
            </div>
            <StoreSelector
              selectedStore={selectedStore}
              setSelectedStore={setSelectedStore}
            />
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatCard
              title="Total Revenue"
              value="$15,231.89"
              Icon={DollarSign}
              trend="+2.5%"
            />
            <StatCard
              title="Transactions"
              value="1,205"
              Icon={CreditCard}
              trend="+1.2%"
            />
            <StatCard
              title="Active Customers"
              value="392"
              Icon={Users}
              trend="+0.8%"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <TransactionList />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
              <SalesChart />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Top Products</h2>
              <TopProductsList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const SidebarLink = ({ Icon, text }: { text: string; Icon: IconT }) => (
  <a
    href="#"
    className="flex items-center space-x-2 px-4 py-3 rounded transition duration-200 hover:bg-indigo-800"
  >
    <Icon size={20} />
    <span>{text}</span>
  </a>
);

const StoreSelector = ({
  selectedStore,
  setSelectedStore,
}: {
  setSelectedStore: React.Dispatch<React.SetStateAction<string>>;
  selectedStore: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const stores = ["Main Store", "Online Shop", "Mobile App Store"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span>{selectedStore}</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {stores.map((store) => (
              <a
                key={store}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setSelectedStore(store);
                  setIsOpen(false);
                }}
              >
                {store}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({
  title,
  value,
  Icon,
  trend,
}: {
  title: string;
  value: string;
  Icon: IconT;
  trend: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold text-gray-700">{value}</p>
      <p className="text-green-500 text-sm font-medium">{trend}</p>
    </div>
    <div className="bg-indigo-100 p-3 rounded-full">
      <Icon size={24} className="text-indigo-600" />
    </div>
  </div>
);

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      customer: "John Doe",
      amount: "$120.50",
      status: "Completed",
      date: "2023-08-15",
    },
    {
      id: 2,
      customer: "Jane Smith",
      amount: "$75.20",
      status: "Pending",
      date: "2023-08-14",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      amount: "$200.00",
      status: "Completed",
      date: "2023-08-13",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {transaction.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SalesChart = () => (
  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
    <p className="text-gray-500">Sales Chart Placeholder</p>
  </div>
);

const TopProductsList = () => {
  const products = [
    { id: 1, name: "Product A", sales: 120, revenue: "$1,200" },
    { id: 2, name: "Product B", sales: 85, revenue: "$850" },
    { id: 3, name: "Product C", sales: 65, revenue: "$650" },
  ];

  return (
    <ul className="divide-y divide-gray-200">
      {products.map((product) => (
        <li key={product.id} className="py-4 flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">{product.name}</p>
            <p className="text-sm text-gray-500">{product.sales} sales</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
        </li>
      ))}
    </ul>
  );
};

export default Dashboard;
