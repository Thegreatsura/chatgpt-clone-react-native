import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Undo2,
  Redo2,
  Image,
  Video,
  MessageSquare,
  Volume2,
  Send,
  LayoutGrid,
} from "lucide-react";

export const ComingSoonEditorV2 = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col">
      {/* Header */}
      <div className="flex-grow flex flex-col items-center justify-center text-white">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
          <div className="w-8 h-8 border-4 border-white rounded-full"></div>
        </div>
        <h1 className="text-6xl font-bold mb-8">Soon</h1>

        {/* URL Input */}
        <div className="flex w-full max-w-md">
          <Input
            type="text"
            defaultValue="cap.link/coming-soon"
            className="rounded-l-full bg-white bg-opacity-20 text-white border-none"
          />
          <Button className="rounded-r-full bg-blue-600 hover:bg-blue-700">
            Save
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-t-3xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Undo2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Redo2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Image className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Volume2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Send className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Background Options */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Background</h3>
          <Tabs defaultValue="wallpaper">
            <TabsList>
              <TabsTrigger value="wallpaper">Wallpaper</TabsTrigger>
              <TabsTrigger value="image">Image</TabsTrigger>
              <TabsTrigger value="color">Color</TabsTrigger>
              <TabsTrigger value="gradient">Gradient</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mt-4 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-sm text-gray-400">
              Click to select or drag and drop image
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
