import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  PencilIcon,
  MaximizeIcon,
  XIcon,
  MoreHorizontalIcon,
} from "lucide-react";

export function TaskManagerHomeV2() {
  return (
    <Card className="w-full max-w-2xl bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-semibold">Task Summary</CardTitle>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <PencilIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MaximizeIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <XIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontalIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Words as Interface</h3>
          <div className="bg-purple-200 h-32 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=128&width=512"
              alt="Abstract purple shapes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">UI Design</Badge>
          <Button variant="outline" size="sm" className="h-7">
            Add Tag
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="/placeholder.svg?height=24&width=24"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">
              John Doe <span className="text-gray-400">Designer</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="/placeholder.svg?height=24&width=24"
                alt="Jane Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">
              Jane Doe <span className="text-gray-400">Analyst</span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CalendarIcon className="h-4 w-4" />
          <span>24th June 2024</span>
        </div>
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-gray-400 uppercase">
            Task Description
          </h4>
          <p className="text-sm text-gray-600">
            Unlike static UI, when we use LLMs, our words can create our own,
            hyper-personalized controls. Our words set AI&apos;s context,
            determine intent, determine its steps, dictate output format and
            establish variables. They control our entire experience. The more
            systematically you choose these words, the better your tool will be.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Mark as Completed
        </Button>
        <Button variant="outline" className="text-gray-600">
          Snooze
        </Button>
      </CardFooter>
    </Card>
  );
}
