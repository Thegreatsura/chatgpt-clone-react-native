import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const SkinCareCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-[300px] h-[400px] overflow-hidden relative cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full">
        <div className="relative w-full h-full">
          <Image
            src="/image.png"
            alt="Skin care"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out"
            style={{ filter: isHovered ? "blur(5px) brightness(0.7)" : "none" }}
          />
          {isHovered && (
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transition-opacity duration-300 ease-in-out">
              <h2 className="text-4xl font-bold mb-2">Skin care</h2>
              <p className="text-sm mb-4">
                Explore skincare essentials for radiant, healthy skin with our
                expertly crafted products.
              </p>
              <Button
                variant="outline"
                className="w-fit text-white border-white hover:bg-white hover:text-black"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
