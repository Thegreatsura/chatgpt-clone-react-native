import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Beaker,
  ArrowUp,
  Home,
  Bookmark,
  Search,
  LayoutGrid,
  MoreVertical,
} from "lucide-react";

export const ClaudeAIInterface = () => {
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen p-4 font-sans">
      {/* Status Bar */}
      <div className="flex justify-between items-center mb-4 text-xs">
        <div>10:57 AM</div>
        <div className="flex items-center space-x-1">
          <div>🔋 45%</div>
          <div className="w-4 h-4 rounded-full border border-zinc-100 flex items-center justify-center">
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-zinc-800 rounded-lg flex items-center justify-between p-2 mb-4">
        <div className="flex items-center">
          <div className="mr-2">✂️</div>
          <div>claude.ai/new</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            👤
          </div>
          <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-6 w-6" />
          </Button>
          <div className="bg-zinc-800 text-zinc-400 text-sm rounded-full px-3 py-1">
            Using limited free plan{" "}
            <span className="text-indigo-400">Upgrade</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="text-orange-400 mb-2">☀️</div>
          <h1 className="text-3xl font-serif">
            Good morning,
            <br />
            Samuel
          </h1>
        </div>

        <Card className="bg-zinc-800 mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <Input
                className="bg-transparent border-0 text-zinc-100 text-lg p-0 focus:ring-0"
                placeholder="Build this using next js 14 and Shadcn UI"
              />
              <Button
                size="icon"
                className="bg-orange-500 text-white rounded-lg"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center text-zinc-400 text-sm mt-2">
              <Beaker className="h-4 w-4 mr-1" />
              Claude 3.5 Sonnet
              <span className="ml-2 bg-zinc-700 text-xs rounded px-1">1</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 mb-4">
          <CardContent className="p-4 flex items-center text-zinc-400">
            <Home className="h-5 w-5 mr-2" />
            <div className="flex-grow">
              Collaborate with Claude using documents, images, and more
            </div>
            <Button variant="ghost" className="text-zinc-100">
              Upload
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center text-sm mb-2">
          <div className="flex items-center text-blue-400">
            💬 Your recent chats <span className="ml-1">▲</span>
          </div>
          <Button variant="link" className="text-zinc-400">
            View all →
          </Button>
        </div>

        <Card className="bg-zinc-800 mb-2">
          <CardContent className="p-3">
            <div className="text-sm">Next.js and Shadcn UI Subscription...</div>
            <div className="text-xs text-zinc-400">1 hour ago</div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-3">
            <div className="text-sm">Stripe Hosted Checkout Clone with...</div>
            <div className="text-xs text-zinc-400">1 hour ago</div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-800 flex justify-around py-2">
        <Button variant="ghost" size="icon">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <LayoutGrid className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
