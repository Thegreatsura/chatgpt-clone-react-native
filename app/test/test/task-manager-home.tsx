import React from "react";
import { Search, Calendar, Clock, Book, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const TaskManagerHome = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-[#faf9f6]">
      <h1 className="text-3xl font-bold mb-4">Home</h1>

      <div className="relative mb-4">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input className="pl-10" placeholder="Search your tasks" />
      </div>

      <Card className="mb-4 bg-gradient-to-br from-orange-300 to-orange-500 text-white">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold">Today</h2>
          <p>1 task scheduled</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                >
                  <path d="M3 9h18v2H3z M3 13h18v2H3z M3 17h18v2H3z" />
                </svg>
                <span>Anytime</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">2</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                <span>Upcoming</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">1</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-500" />
                <span>Overdue</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">0</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Book className="w-5 h-5 mr-2 text-green-500" />
                <span>Logbook</span>
              </div>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="font-bold">Lists</span>
          <span className="text-gray-400">Projects</span>
        </div>
        <Plus className="text-gray-400" />
      </div>
    </div>
  );
};
