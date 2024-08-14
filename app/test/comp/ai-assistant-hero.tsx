import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, Rotate3d, Clock, Play } from "lucide-react";

export const AIAssistantHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-light mb-6">
          {/* Digging <Avatar className="inline-block w-8 h-8 mx-1" src="/placeholder-avatar.jpg" alt="User avatar" /> and transform experiences */}
          <br />
          with chat intelligence <span className="text-purple-400">
            🦋
          </span>{" "}
          communication,
          <br />
          <span className="text-red-400 font-normal">{`{AI Assistant}`}</span>
        </h1>

        <div className="flex justify-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="bg-gradient-to-r from-purple-500 to-pink-500"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Rotate3d className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Clock className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1]">
        <div
          className="w-full h-full rounded-full bg-gray-900 opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ aspectRatio: "1", maxWidth: "80vw" }}
        ></div>
      </div>
    </div>
  );
};
