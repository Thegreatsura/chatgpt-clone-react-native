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
  ChevronDown,
  FileIcon,
  FolderIcon,
  UserIcon,
  LayoutGridIcon,
  CodeIcon,
  UserPlusIcon,
  FileTextIcon,
  HeadphonesIcon,
  SettingsIcon,
  LogOutIcon,
} from "lucide-react";

export function UserProfileDropdown() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="w-full max-w-sm bg-gray-800 text-white hover:bg-gray-700"
          >
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Emir Bekin" />
              <AvatarFallback>EB</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <div className="font-medium">Emir Bekin</div>
              <div className="text-xs text-gray-400">hi@emirbekin.com</div>
            </div>
            <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full max-w-sm bg-gray-800 text-white border-gray-700">
          <DropdownMenuLabel>CREATE</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FileIcon className="mr-2 h-4 w-4 text-orange-400" />
              <span>New File</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FolderIcon className="mr-2 h-4 w-4 text-purple-400" />
              <span>New Collection</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuLabel>PROFILE</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LayoutGridIcon className="mr-2 h-4 w-4" />
              <span>Your Works</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuLabel>ASSETS</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LayoutGridIcon className="mr-2 h-4 w-4" />
              <span>Asset Manager</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CodeIcon className="mr-2 h-4 w-4" />
              <span>Embed Theme Builder</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlusIcon className="mr-2 h-4 w-4" />
              <span>Upgrade to</span>
              <span className="ml-1 px-1 bg-yellow-500 text-black text-xs font-bold rounded">
                PRO
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuLabel>SOURCES</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Documentation</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HeadphonesIcon className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuItem className="text-red-400">
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
