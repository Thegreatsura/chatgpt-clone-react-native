import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Waiting() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-black rounded-lg mr-2"></div>
              <span className="text-2xl font-bold">Waita</span>
            </div>
            <div className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6">
              LAUNCHING NOV 24TH, 2024
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ready to launch your product, course or app?
            </h1>
            <p className="text-gray-600 mb-8">
              Publish your own waitlist page in minutes to start capturing email
              addresses from potential customers and promoting your launch
              online.
            </p>
            <div className="flex mb-6">
              <Input
                type="email"
                placeholder="name@domain.com"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-black hover:bg-gray-800 text-white">
                Join now
              </Button>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                </Avatar>
                <Avatar className="w-8 h-8 border-2 border-white">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                </Avatar>
              </div>
              <span className="text-sm text-gray-600">
                163+ makers have already joined
              </span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-8">
            © 2024 - 88 pixels - All rights reserved.
            <br />
            Built in Framer.{" "}
            <a href="#" className="underline">
              Get this template - FREE
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/image.png"
            alt="Mountain landscape with a person looking at Mount Fuji"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
