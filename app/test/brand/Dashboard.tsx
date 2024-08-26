import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  Search,
  Home,
  GitBranch,
  Eye,
  AtSign,
  Archive,
  Globe,
  MoreHorizontal,
} from "lucide-react";

export function DashboardV2() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 hidden md:block">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
          <span className="font-semibold">Pierre</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <Input type="search" placeholder="Search" className="mb-4" />
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start bg-indigo-50 text-indigo-600"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <p className="text-sm font-medium text-gray-500 mt-4 mb-2">
            Your Work
          </p>
          <Button variant="ghost" className="w-full justify-start">
            <GitBranch className="mr-2 h-4 w-4" />
            Changes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Eye className="mr-2 h-4 w-4" />
            Reviews
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <AtSign className="mr-2 h-4 w-4" />
            Mentions
          </Button>
          <p className="text-sm font-medium text-gray-500 mt-4 mb-2">
            Repositories
          </p>
          <Button variant="ghost" className="w-full justify-start">
            <Archive className="mr-2 h-4 w-4" />
            Monorepo
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Globe className="mr-2 h-4 w-4" />
            Web
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search" className="md:hidden" />
            <Button variant="outline" className="hidden md:flex">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-green-500">● 2 online</span>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Your team has 5 new branches
            </CardTitle>
            <p className="text-gray-500">
              In the last 24 hours your team has created branches related to UI
              Components, Layouts and CSS Changes.
            </p>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Latest Branches
              </CardTitle>
              <Button variant="ghost" size="sm">
                See All
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {[
                  "fat/iconsv2",
                  "mdo/newapi",
                  "alex/supabase-store2",
                  "ian/cachev3",
                ].map((branch, index) => (
                  <div
                    key={branch}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>{branch}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>
                          {branch[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-500">
                        {["26m", "45m", "7h", "1d"][index]}
                      </span>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Linear Tasks
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Open
                </Button>
                <Button variant="outline" size="sm">
                  Assigned to You
                </Button>
                <Button variant="ghost" size="sm">
                  See All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {[
                  "Fix Discord integration",
                  "Review CSS Colors",
                  "Add Inter",
                  "Polish cmd+k",
                ].map((task, index) => (
                  <div
                    key={task}
                    className="flex items-center justify-between py-2"
                  >
                    <span>{task}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        ENG-{234 + index}
                      </span>
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-xl font-medium">
              Suggested Reviews
            </CardTitle>
            <p className="text-sm text-gray-500">
              We suggest branches from your team you would likely be a good
              reviewer.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Icons Added", "New Git API"].map((review, index) => (
                <div key={review} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium">{review}</p>
                      <p className="text-sm text-gray-500">
                        {index === 0
                          ? "This branch needs review on CSS Changes"
                          : "Alex created a new Tooltip.tsx file, plus additional changes"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">16m to review</span>
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>{review[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-500">
                      {index === 0 ? "3m" : "12m"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-xl font-medium">Code Analysis</CardTitle>
            <p className="text-sm text-gray-500">
              Pierre looks into your codebase and suggests optimizations that
              can enhance code quality.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p>
                The application makes redundant API calls, leading to
                performance issues.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
