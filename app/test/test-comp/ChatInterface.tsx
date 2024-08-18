import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Clipboard,
  Lock,
  Menu,
  MessageSquarePlus,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

export function ChatInterface() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold">Next.js Shad...</h1>
          <Lock className="h-4 w-4" />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <MessageSquarePlus className="h-6 w-6" />
            <span className="sr-only">New chat</span>
          </Button>
          <Button variant="secondary" className="rounded-full px-4 py-2">
            New Chat
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div className="space-y-2">
          <p>selector, and other customization options.</p>
          <p>3. Implement the actual save and cancel functionality.</p>
          <p>
            4. Create the logic for generating and opening the customized
            payment page link.
          </p>
          <p>
            To use this component, you would typically place it in a file like{" "}
            <code className="bg-gray-100 rounded px-1">
              pages/checkout-customizer.tsx
            </code>{" "}
            or{" "}
            <code className="bg-gray-100 rounded px-1">
              app/checkout-customizer/page.tsx
            </code>{" "}
            (depending on whether you&apos;re using the Pages Router or App
            Router in Next.js).
          </p>
          <p>
            Remember to adjust the content, styling, and functionality to match
            your exact requirements and branding.
          </p>
          <div className="flex space-x-2 mt-2">
            <Button variant="outline" size="sm">
              <Clipboard className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquarePlus className="h-4 w-4 mr-2" />
              Retry
            </Button>
            <Button variant="outline" size="sm">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="p-4 border-t">
        <form className="flex items-center space-x-2">
          <Input className="flex-1" placeholder="Ask a follow up..." />
          <Button
            type="submit"
            size="icon"
            className="rounded-full bg-black text-white"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
        <p className="text-xs text-center mt-2 text-gray-500">
          v0 may make mistakes. Please use with discretion.
        </p>
      </footer>
    </div>
  );
}
