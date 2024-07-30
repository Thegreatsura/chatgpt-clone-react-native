/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jf4K0yQPYK5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";

export function Payment6() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <header className="w-full max-w-4xl px-4 py-6 flex items-center justify-between bg-background shadow-lg rounded-t-lg">
        <div className="flex items-center">
          <img
            src="/placeholder.svg"
            alt="Powdur Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-xl font-bold">Powdur</span>
          <span className="ml-4 px-2 py-1 bg-primary text-primary-foreground rounded-md text-xs font-medium">
            TEST
          </span>
        </div>
        <Button variant="outline" size="sm">
          Details
        </Button>
      </header>
      <main className="w-full max-w-4xl p-6 bg-background shadow-lg rounded-b-lg">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="Product"
            width={300}
            height={300}
            className="rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">Powdur Protein Powder</h1>
          <p className="text-2xl font-bold text-primary mb-6">$49.99</p>
          <Button size="lg">Checkout</Button>
        </div>
      </main>
    </div>
  );
}
