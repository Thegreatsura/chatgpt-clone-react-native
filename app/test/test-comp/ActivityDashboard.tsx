import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

export function ActivityDashboard() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Dialin.ai</h1>
      </header>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Total overview</CardTitle>
          <span className="text-sm font-medium text-green-500 bg-green-100 px-2 py-1 rounded-full">
            + 24%
          </span>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            Your average daily activity over the last 7 days are{" "}
            <span className="font-bold text-black">67%</span>
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-300 rounded"></div>
                <span>Messages</span>
              </div>
              <span className="font-bold">29%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-300 rounded"></div>
                <span>Calls</span>
              </div>
              <span className="font-bold">24%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-300 rounded"></div>
                <span>Time on call</span>
              </div>
              <span className="font-bold">8%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-300 rounded"></div>
                <span>Top conversations</span>
              </div>
              <span className="font-bold">6%</span>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Select defaultValue="weekly">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between items-end h-64">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <div key={day} className="flex flex-col items-center">
                    <div
                      className={`w-12 bg-gray-200 rounded-t-lg ${
                        index === 4
                          ? "h-full"
                          : `h-${Math.floor(Math.random() * 12) * 8}`
                      }`}
                    >
                      {index === 4 && (
                        <div className="bg-purple-300 h-1/3 w-full rounded-t-lg"></div>
                      )}
                      {index === 4 && (
                        <div className="bg-yellow-300 h-1/4 w-full"></div>
                      )}
                      {index === 4 && (
                        <div className="bg-blue-300 h-1/6 w-full"></div>
                      )}
                      {index === 4 && (
                        <div className="bg-green-300 h-1/12 w-full"></div>
                      )}
                    </div>
                    <span className="text-sm mt-2">{day}</span>
                    {index === 4 && (
                      <div className="absolute top-1/2 -translate-y-1/2 bg-white p-2 rounded shadow-lg">
                        <p className="font-bold">Mar 28, 2024</p>
                        <div className="space-y-1 text-sm">
                          <p>Messages: 321</p>
                          <p>Calls: 223</p>
                          <p>Time on call: 12</p>
                          <p>Top conversation: 32</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
