import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Image, Send, Smile } from "lucide-react";

export function MessageInput() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2">
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-2">
          <div className="flex items-center space-x-2">
            <Input
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              placeholder="Message..."
            />
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <Image className="h-6 w-6" />
              <span className="sr-only">Attach image</span>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="font-bold text-lg">GIF</span>
              <span className="sr-only">Attach GIF</span>
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-blue-500 hover:bg-blue-600"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
