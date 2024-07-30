/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qBbBDwRWCtM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Payment2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-6 bg-card rounded-lg shadow-lg">
        <div className="mb-6 relative">
          <Link href="#" className="absolute top-4 left-4" prefetch={false}>
            <ArrowLeftIcon className="h-5 w-5 text-muted-foreground" />
          </Link>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                width={32}
                height={32}
                alt="Company Logo"
                className="rounded-full"
              />
              <p className="text-card-foreground font-medium">Acme Inc</p>
            </div>
            <div className="text-card-foreground font-bold text-lg">
              <div className="flex items-center justify-end">
                <p>Expires in:</p>
                <div className="ml-2 font-bold text-red-500">10:00</div>
              </div>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width={400}
            height={300}
            alt="Product Image"
            className="rounded-md object-cover w-full"
          />
          <div className="text-center mt-4">
            <p className="text-card-foreground font-bold text-lg">$99.99</p>
          </div>
          <h2 className="text-card-foreground font-bold text-lg mt-4">
            Gamer Gear Pro Controller
          </h2>
          <p className="text-muted-foreground mt-2">
            Experience the ultimate gaming control with our Gamer Gear Pro
            Controller. Crafted with precision and designed for comfort, this
            controller will elevate your gameplay to new heights.
          </p>
        </div>
        <form className="space-y-4">
          <Button
            type="submit"
            className="w-full flex items-center justify-end"
          >
            <span className="mr-2">Pay</span>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-card-foreground" />
          </Button>
        </form>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
