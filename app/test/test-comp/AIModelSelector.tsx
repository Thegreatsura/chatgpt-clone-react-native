import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AIModelSelectorV2() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <Tabs defaultValue="openai" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="openai"
              className="data-[state=active]:bg-black data-[state=active]:text-white"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className=" w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                </svg>
                <span>OpenAI</span>
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="anthropic"
              className="data-[state=active]:bg-black data-[state=active]:text-white"
            >
              <div className="flex items-center space-x-2">
                <svg
                  className=" w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span>Anthropic</span>
              </div>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="GPT-4o-mini" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt4o-mini">GPT-4o-mini</SelectItem>
              <SelectItem value="gpt4">GPT-4</SelectItem>
              <SelectItem value="gpt3.5">GPT-3.5</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Full spectrum" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full">Full spectrum</SelectItem>
              <SelectItem value="limited">Limited spectrum</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Button variant="default" className="rounded-full">
            Machine Learning (ML)
          </Button>
          <Button variant="default" className="rounded-full">
            Deep Learning (DL)
          </Button>
          <Button variant="default" className="rounded-full">
            Convolutional Neural Network (CNN)
          </Button>
          <Button variant="default" className="rounded-full">
            Natural Language Processing (NLP)
          </Button>
          <Button variant="default" className="rounded-full">
            Unsupervised Learning
          </Button>
          <Button variant="default" className="rounded-full">
            Pro
          </Button>
          <Button variant="outline" className="rounded-full">
            Reinforcement Learning
          </Button>
          <Button variant="outline" className="rounded-full">
            Overfitting
          </Button>
          <Button variant="outline" className="rounded-full">
            Underfitting
          </Button>
          <Button variant="outline" className="rounded-full">
            Backpropagation
          </Button>
          <Button variant="outline" className="rounded-full">
            Recall
          </Button>
          <Button variant="outline" className="rounded-full">
            Confusion Matrix
          </Button>
          <Button variant="outline" className="rounded-full">
            Data Augmentation
          </Button>
          <Button variant="outline" className="rounded-full">
            Robotics
          </Button>
          <Button variant="outline" className="rounded-full">
            Text-to-Speech (TTS)
          </Button>
          <Button variant="outline" className="rounded-full">
            Sequence-to-Sequence Models
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
