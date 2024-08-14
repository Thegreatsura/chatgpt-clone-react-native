import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sun } from "lucide-react";

export function ClaudeInterface() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <header className="flex justify-between items-center mb-4">
          <div className="text-sm">claude.ai/new</div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
            <div className="w-6 h-6 bg-pink-500 rounded-full"></div>
          </div>
        </header>

        <div className="text-center mb-8">
          <Button variant="ghost" className="mb-2">
            Using limited free plan{" "}
            <span className="text-violet-400 ml-2">Upgrade</span>
          </Button>
          <Sun className="w-8 h-8 mx-auto mb-2 text-orange-400" />
          <h1 className="text-3xl font-serif">Good morning, Samuel</h1>
        </div>

        <Card className="bg-gray-800 mb-4">
          <CardContent className="p-4">
            <Input
              className="bg-transparent border-none text-white placeholder-gray-400 mb-2"
              placeholder="Build this using next js 14 and Shadcn UI"
            />
            <div className="flex justify-between items-center">
              <span>Claude 3.5 Sonnet</span>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                  />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full justify-start mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
          Collaborate with Claude using documents, images, and more
        </Button>

        <div className="mb-4">
          <h2 className="text-sm font-semibold mb-2">Your recent chats</h2>
          <Card className="bg-gray-800">
            <CardContent className="p-3">
              <p className="text-sm">Next.js and Shadcn UI Subscription...</p>
              <p className="text-xs text-gray-400">1 hour ago</p>
            </CardContent>
          </Card>
        </div>

        <nav className="flex justify-between text-gray-400">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <span className="bg-gray-700 px-2 py-1 rounded">29</span>
          </Button>
        </nav>
      </div>
    </div>
  );
}
