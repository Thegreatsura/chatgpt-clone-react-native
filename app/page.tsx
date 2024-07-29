import { DemoPaymentMethod } from "@/components/payment-method";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { ArrowLeft, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left side */}

      <div className="relative h-full flex-col p-10 text-white dark:border-r lg:flex">
        <div className="absolute rounded-xl m-2 inset-0 bg-zinc-900" />
        <div className="relative z-20 flex flex-col  text-lg font-medium">
          <div className="group w-40 flex items-center">
            <div className="bg-zinc-900 h-10 w-10 mr-[2px] text-primary-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              <ArrowLeft className="size-6 text-gray-500 group-hover:text-white " />
            </div>
            <p className="flex items-center group-hover:hidden transition-all">
              <Store className="size-4 mr-[2px] rounded-lg" />
              surapay
            </p>
            <p className="hidden group-hover:block transition-all">back</p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex flex-col items-center">
              <p>Total amount</p>
              <span className="text-5xl p-3">$160.76</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Separator className="my-4 w-96" />
          </div>
        </div>

        <div className="relative z-20 px-20 mt-10">
          <p>Payment summary</p>
        </div>

        {/* <div className="relative z-20 mt-auto">
          <footer className="text-sm">Powered by surapay</footer>
        </div> */}
      </div>

      {/* Right side  */}

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <DemoPaymentMethod />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking pay, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
