import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Zap } from "lucide-react";

export const ProfileCard = () => {
  return (
    <Card className="w-80 bg-white rounded-xl shadow-md">
      <CardHeader className="flex justify-between items-start p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/path-to-avatar.jpg" alt="David Bowie" />
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">David Bowie</h2>
            <p className="text-sm text-gray-500">@david_bowie12</p>
          </div>
        </div>
        <Zap className="text-yellow-400" size={24} />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">
          Product Designer - Mobile App Designer
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Design Partner for Startup Founders at twisterdesign.pro | More than 5
          years of experience | DM for any inquiries
        </p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Adobe photoshop",
              "Notion",
              "Motion Design",
              "Visual 3D",
              "Webflow",
              "Framer",
              "UX Research",
              "Brand Identity",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-gray-100 text-gray-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1">
            Message David
          </Button>
          <Button className="flex-1">Connect</Button>
        </div>
      </CardContent>
    </Card>
  );
};
