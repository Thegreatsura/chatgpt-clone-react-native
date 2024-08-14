// File: app/page.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <AIModelSelector />
    </main>
  );
}

// File: components/AIModelSelector.tsx

export const AIModelSelector = () => {
  return (
    <div className="w-full max-w-2xl space-y-4">
      <div className="flex space-x-2">
        <Button variant="default" className="bg-black text-white">
          OpenAI
        </Button>
        <Button variant="outline" className="bg-white">
          Anthropic
        </Button>
      </div>

      <div className="flex space-x-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="GPT-4o-mini" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt4o-mini">GPT-4o-mini</SelectItem>
            {/* Add other models as needed */}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Full spectrum" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-spectrum">Full spectrum</SelectItem>
            {/* Add other options as needed */}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Tag variant="filled">Machine Learning (ML)</Tag>
        <Tag variant="filled">Deep Learning (DL)</Tag>
        <Tag variant="filled">Convolutional Neural Network (CNN)</Tag>
        <Tag variant="filled">Natural Language Processing (NLP)</Tag>
        <Tag variant="filled">Unsupervised Learning</Tag>
        <Tag variant="filled">Pro</Tag>
        <Tag variant="outline">Reinforcement Learning</Tag>
        <Tag variant="outline">Overfitting</Tag>
        <Tag variant="outline">Underfitting</Tag>
        <Tag variant="outline">Backpropagation</Tag>
        <Tag variant="outline">Recall</Tag>
        <Tag variant="outline">Confusion Matrix</Tag>
        <Tag variant="outline">Data Augmentation</Tag>
        <Tag variant="outline">Robotics</Tag>
        <Tag variant="outline">Text-to-Speech (TTS)</Tag>
        <Tag variant="outline">Sequence-to-Sequence Models</Tag>
      </div>
    </div>
  );
};

// File: components/Tag.tsx

const tagVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        filled: "bg-black text-white hover:bg-gray-800",
        outline: "bg-white text-black border border-gray-200 hover:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(tagVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Tag.displayName = "Tag";
