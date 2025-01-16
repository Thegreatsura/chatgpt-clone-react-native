"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LogOut, Settings, Users } from "lucide-react";

export function UserDropdown() {
  return (
    <div className="dark">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0.dev_chat_BAqxJix3o8u-onceTTSS0OvmM1sM7jD9TGh1RTKnxS.png"
                alt="User avatar"
              />
              <AvatarFallback>GS</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-64 bg-zinc-900 border-zinc-800"
          align="end"
        >
          <span className="text-sm text-zinc-200">tshaywjorgis@gmail.com</span>
          <div className="flex items-center gap-2 p-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v0.dev_chat_BAqxJix3o8u-onceTTSS0OvmM1sM7jD9TGh1RTKnxS.png"
                alt="User avatar"
              />
              <AvatarFallback>GS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-400">thegreatsura</span>
              <span className="text-xs text-zinc-500">Free</span>
            </div>
          </div>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="text-zinc-300 focus:bg-zinc-800 focus:text-zinc-200">
              <Users className="mr-2 h-4 w-4" />
              Switch Team
            </DropdownMenuItem>
            <DropdownMenuItem className="text-zinc-300 focus:bg-zinc-800 focus:text-zinc-200">
              <Settings className="mr-2 h-4 w-4" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="text-zinc-300 focus:bg-zinc-800 focus:text-zinc-200">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-zinc-300 focus:bg-zinc-800 focus:text-zinc-200">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <div className="p-2">
            <DropdownMenuLabel className="text-xs font-normal text-zinc-500">
              Preferences
            </DropdownMenuLabel>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-300">Theme</span>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    className="h-6 w-6 p-0 text-zinc-300 hover:bg-zinc-800"
                  >
                    <span className="sr-only">Light mode</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-6 w-6 p-0 text-zinc-300 hover:bg-zinc-800"
                  >
                    <span className="sr-only">Dark mode</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-6 w-6 p-0 text-zinc-300 hover:bg-zinc-800"
                  >
                    <span className="sr-only">System mode</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-300">Language</span>
                <Select defaultValue="en">
                  <SelectTrigger className="h-8 w-24 border-zinc-800 bg-transparent text-zinc-300 [&>span]:text-right">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <div className="p-2">
            <Button className="w-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
              Upgrade Plan
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
