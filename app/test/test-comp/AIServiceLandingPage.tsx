import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AtomIcon,
  BoltIcon,
  CheckIcon,
  MessageSquareIcon,
  MoonIcon,
  SendIcon,
  StarIcon,
} from "lucide-react";

export function AIServiceLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <AtomIcon className="w-8 h-8 text-purple-500" />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-purple-400">
              Research
            </a>
            <a href="#" className="hover:text-purple-400">
              Developer
            </a>
            <a href="#" className="hover:text-purple-400">
              Safety
            </a>
            <a href="#" className="hover:text-purple-400">
              Company
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <MoonIcon className="w-5 h-5" />
          <Button variant="outline" className="hidden md:inline-flex">
            Sign up
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-24">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Set your <span className="text-purple-400">goals</span> and build
            <br />a new area for check{" "}
            <span className="text-purple-400">and</span> response,
            <br />
            get all the <span className="text-purple-400">questions</span>{" "}
            answered with
            <br />
            <span className="text-pink-500">AI backbone</span>
          </h1>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Register now
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BoltIcon className="w-6 h-6 text-purple-500" />
                <span>Fast Response</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Get instant answers to your questions
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800 col-span-2 row-span-2">
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="AI Visualization"
                className="w-full h-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <StarIcon className="w-6 h-6 text-yellow-500" />
                <span>AI Power</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Harness the power of advanced AI</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">
            Pricing <span className="text-pink-500">Pro plus</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>AI Backbone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$16.99</p>
                <p className="text-gray-400">USD / Month</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose plan</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>AI Backbone Plus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$29.99</p>
                <p className="text-gray-400">USD / Month</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose plan</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquareIcon className="w-6 h-6 text-purple-500" />
                <span>AI Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xl">Good evening, Rita.</p>
              <p className="text-gray-400">What can I help you with?</p>
              <div className="flex space-x-2">
                <Input
                  className="bg-gray-800 border-gray-700"
                  placeholder="Type your message..."
                />
                <Button size="icon">
                  <SendIcon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Start now to
            <br />
            talk with <span className="text-pink-500">me</span>
          </h2>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Get started
          </Button>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">AI Backbone</h3>
            <p className="text-gray-400 text-sm">
              Advanced AI solutions for your needs
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help center</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
