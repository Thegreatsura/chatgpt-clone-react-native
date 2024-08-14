// File: app/page.tsx
import { Mail } from "lucide-react";
// File: components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Hi. I&apos;m Zane Ashford</h1>
          <p className="text-xl text-gray-400">Designer from Auckland</p>
          <p className="mt-4">
            Currently, I&apos;m designing at the visionOS team at Apple and
            building simple and functional Framer templates on the side.
          </p>
          <div className="mt-6 space-x-4">
            <Button variant="outline">About me</Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle>Dashfolio Neo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Template</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <ul className="space-y-4">
            {[
              { title: "A Productivity Hack by Pareto", date: "Aug 7, 2024" },
              { title: "Diversify, then focus.", date: "Mar 1, 2024" },
              { title: "Proactivity > Reactivity", date: "Jan 20, 2024" },
            ].map((post, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{post.title}</span>
                <span className="text-gray-500">{post.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
