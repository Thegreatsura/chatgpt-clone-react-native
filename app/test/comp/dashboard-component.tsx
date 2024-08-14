import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// import { BarChart } from "@/components/ui/bar-chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export const DashboardChart = () => {
  const activityData = [
    { name: "Messages", value: 29 },
    { name: "Calls", value: 24 },
    { name: "Time on call", value: 8 },
    { name: "Top conversations", value: 6 },
  ];

  const dailyData = [
    {
      day: "Mon",
      messages: 100,
      calls: 80,
      timeOnCall: 5,
      topConversations: 3,
    },
    {
      day: "Tue",
      messages: 120,
      calls: 90,
      timeOnCall: 6,
      topConversations: 4,
    },
    {
      day: "Wed",
      messages: 110,
      calls: 85,
      timeOnCall: 5.5,
      topConversations: 3,
    },
    {
      day: "Thu",
      messages: 321,
      calls: 223,
      timeOnCall: 12,
      topConversations: 32,
    },
    {
      day: "Fri",
      messages: 130,
      calls: 95,
      timeOnCall: 7,
      topConversations: 5,
    },
    { day: "Sat", messages: 90, calls: 70, timeOnCall: 4, topConversations: 2 },
    { day: "Sun", messages: 80, calls: 60, timeOnCall: 3, topConversations: 1 },
  ];

  return (
    <div className="p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Total overview</CardTitle>
          <p className="text-sm text-gray-500">
            Your average daily activity over the last 7 days are 67%
          </p>
          <span className="inline-block px-2 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            + 24%
          </span>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <Progress value={item.value} className="w-40" />
                  <span>{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 h-64">
            <BarChart
              data={dailyData}
              //@ts-ignore
              index="day"
              categories={[
                "messages",
                "calls",
                "timeOnCall",
                "topConversations",
              ]}
              colors={["indigo", "yellow", "cyan", "green"]}
              yAxisWidth={48}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
