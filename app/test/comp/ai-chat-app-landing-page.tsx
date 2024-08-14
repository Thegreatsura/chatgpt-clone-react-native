import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const AIButton = ({ children }: { children: ReactNode }) => (
  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-2">
    {children}
  </Button>
);

const NavItem = ({ children }: { children: ReactNode }) => (
  <span className="text-gray-400 hover:text-white cursor-pointer">
    {children}
  </span>
);

const FeatureCard = ({ icon, title }: { title: string; icon: ReactNode }) => (
  <Card className="bg-gray-800 text-white">
    <CardContent className="flex flex-col items-center p-4">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-sm">{title}</div>
    </CardContent>
  </Card>
);

const PricingCard = ({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: string[];
}) => (
  <Card className="bg-gray-800 text-white">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold mb-4">${price}</div>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full">Choose plan</Button>
    </CardContent>
  </Card>
);

export const AILandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">🧠</div>
        <nav className="space-x-6">
          <NavItem>Resources</NavItem>
          <NavItem>Developer</NavItem>
          <NavItem>Safety</NavItem>
          <NavItem>FAQs</NavItem>
          <NavItem>Pricing</NavItem>
        </nav>
        <AIButton>Sign up free</AIButton>
      </header>

      <main className="container mx-auto py-12 space-y-24">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Set your 🎯 goals and build
            <br />
            a new area for check ✅ and response,
            <br />
            get all the 🔮 questions answered with
            <br />
            <span className="text-purple-500">{"AI backbone"}</span>
          </h1>
          <AIButton>Register now</AIButton>
        </section>

        <section className="grid grid-cols-3 gap-8">
          <Card className="bg-gray-800 col-span-2">
            <CardContent className="p-4">
              <img
                src="/api/placeholder/600/300"
                alt="AI visualization"
                className="w-full rounded-lg"
              />
            </CardContent>
          </Card>
          <div className="space-y-4">
            <FeatureCard icon="🚀" title="Fast Response" />
            <FeatureCard icon="🔍" title="Deep Analysis" />
            <FeatureCard icon="🧠" title="AI Powered" />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Pricing <span className="text-purple-500">{"Pro plus"}</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <PricingCard
              title="AI Backbone"
              price="16.99"
              features={[
                "Access to prompts and insights",
                "20 Outputs free space",
                "250 chat limit",
              ]}
            />
            <PricingCard
              title="AI Backbone Plus"
              price="29.99"
              features={[
                "Access to prompts and insights",
                "40 Outputs free space",
                "Unlimited chat space",
              ]}
            />
          </div>
        </section>

        <section>
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full mr-3"></div>
                <div>
                  <div className="font-bold">AI Backbone</div>
                  <div className="text-sm text-gray-400">
                    Good evening, Rita.
                  </div>
                </div>
              </div>
              <div className="text-2xl mb-4">
                What <span className="text-purple-500">can</span> I help you
                with?
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {["UI/UX", "Branding", "Development", "Marketing"].map(
                  (topic, index) => (
                    <Card key={index} className="bg-gray-700">
                      <CardContent className="p-2 text-center">
                        {topic}
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
              <Input
                className="w-full bg-gray-700 border-gray-600"
                placeholder="Type your message here..."
              />
            </CardContent>
          </Card>
        </section>

        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Start now to
            <br />
            talk with <span className="text-purple-500">{"me "}</span>
          </h2>
          <AIButton>Ask AI</AIButton>
        </section>
      </main>

      <footer className="container mx-auto py-12 grid grid-cols-4 gap-8 border-t border-gray-800">
        <div>
          <h3 className="font-bold mb-4">🧠 AI Backbone</h3>
          <p className="text-sm text-gray-400">
            Advanced and smart AI assistant ready to help you
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About us</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Blog</li>
            <li>Partnerships</li>
            <li>Case studies</li>
            <li>Help center</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
