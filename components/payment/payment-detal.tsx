/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nxr0otxHH3Y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function PaymentDetail() {
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
            <p className="text-card-foreground font-bold text-lg">$99.99</p>
          </div>
          <img
            src="/placeholder.svg"
            width={400}
            height={300}
            alt="Product Image"
            className="rounded-md object-cover w-full"
          />
          <p className="text-card-foreground font-bold text-lg mt-4">$99.99</p>
        </div>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-card-foreground">Items in Cart</p>
            <p className="text-card-foreground font-medium">3</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-muted-foreground">Subtotal</p>
            <p className="text-card-foreground font-medium">$99.99</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-muted-foreground">Shipping</p>
            <p className="text-card-foreground font-medium">$5.99</p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-muted-foreground">Total</p>
            <p className="text-card-foreground font-bold text-lg">$105.98</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              type="text"
              placeholder="4111 1111 1111 1111"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiration">Expiration</Label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger id="expiration-month">
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                    <SelectItem value="04">04</SelectItem>
                    <SelectItem value="05">05</SelectItem>
                    <SelectItem value="06">06</SelectItem>
                    <SelectItem value="07">07</SelectItem>
                    <SelectItem value="08">08</SelectItem>
                    <SelectItem value="09">09</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger id="expiration-year">
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                    <SelectItem value="2030">2030</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" type="text" placeholder="123" />
            </div>
          </div>
          <div>
            <Label htmlFor="promo-code">Promo Code</Label>
            <div className="flex gap-2">
              <Input
                id="promo-code"
                type="text"
                placeholder="Enter promo code"
              />
              <Button variant="outline">Apply</Button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Place Order
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
