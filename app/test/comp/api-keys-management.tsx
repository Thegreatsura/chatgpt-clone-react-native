import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, Eye, EyeOff, Plus, Trash2 } from "lucide-react";

export const APIKeysManagement = () => {
  const sidebarItems = [
    "Authentication",
    "SMS template",
    "Email templates",
    "Settings",
    "Roles and permissions",
    "Restrictions",
    "Fraud detection",
    "Sessions",
    "JWT templates",
    "Webhooks",
    "Paths / Routing",
    "Domains",
    "Integrations",
    "API keys",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 font-semibold">Louis Vuitton</div>
        <ScrollArea className="h-[calc(100vh-60px)]">
          <div className="space-y-2 p-4">
            {sidebarItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start"
              >
                {item}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">API keys</h1>
        <Card>
          <CardHeader>
            <CardTitle>Manage API keys for this instance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Quick Copy section */}
              <Card className="bg-gray-900 text-white">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Quick Copy</span>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </CardTitle>
                  <p className="text-sm text-gray-400">
                    Choose your framework and paste the code into your
                    environment file.
                  </p>
                </CardHeader>
                <CardContent>
                  <pre className="bg-black p-4 rounded-md">
                    <code>
                      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_Y2x1cmsubGl2ZSxY2xpdmUuY29tLHB1YmxpYy1rZXk
                      CLERK_SECRET_KEY=sk_live_••••••••••••••••••••••••••••••••
                    </code>
                  </pre>
                </CardContent>
              </Card>

              {/* Publishable key section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Publishable key</h3>
                <p className="text-sm text-gray-600 mb-2">
                  This key should be used in your frontend code. It can be
                  safely shared, and does not need to be kept secret.
                </p>
                <div className="flex items-center space-x-2">
                  <Input
                    value="pk_live_Y2x1cmsubGl2ZSxY2xpdmUuY29t"
                    readOnly
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Secret keys section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Secret keys</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Securely manage these sensitive keys. Do not share them with
                  anyone. If you suspect that one of your secret keys has been
                  compromised, you should create a new key, update your code,
                  then delete the compromised key.
                </p>
                <div className="space-y-2">
                  {["Default secret key", "Test", "Testing token"].map(
                    (keyName, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value="sk_live_Y2x1cmsubGl2ZSxY2xpdmUuY29t"
                          type="password"
                          readOnly
                          className="flex-1"
                        />
                        <Button variant="outline" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Copy className="w-4 h-4" />
                        </Button>
                        {index === 2 && (
                          <Button variant="outline" size="icon">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        )}
                      </div>
                    )
                  )}
                </div>
                <Button variant="outline" className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Add new key
                </Button>
              </div>

              <p className="text-sm text-orange-600">
                <span className="font-bold">⚠</span> Clerk support will never
                ask you to share your secret keys.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
