/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pKoFDp3EDLu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Payment4() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md rounded-lg border bg-background p-6 shadow-lg sm:p-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <p className="text-sm text-muted-foreground">
                Complete your purchase
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/placeholder.svg"
                width={32}
                height={32}
                alt="Acme Inc"
                className="rounded-full"
              />
              <span className="text-sm font-medium">Acme Inc</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="card-number">Card number</Label>
              <Input
                id="card-number"
                placeholder="4111 1111 1111 1111"
                type="text"
                pattern="d*"
                maxLength={16}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiration-date">Expiration date</Label>
                <Input
                  id="expiration-date"
                  placeholder="MM/YY"
                  type="text"
                  pattern="d*"
                  maxLength={5}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  type="text"
                  pattern="d*"
                  maxLength={3}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name on card</Label>
              <Input id="name" placeholder="John Doe" type="text" />
            </div>
            <Separator />
            <div className="grid gap-2">
              <Label htmlFor="address-line1">Address line 1</Label>
              <Input id="address-line1" placeholder="123 Main St" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address-line2">Address line 2 (optional)</Label>
              <Input
                id="address-line2"
                placeholder="Apartment, suite, etc."
                type="text"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="San Francisco" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="CA" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip">ZIP</Label>
                <Input id="zip" placeholder="94103" type="text" />
              </div>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Subtotal</span>
                <span className="text-sm font-medium">$99.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Shipping</span>
                <span className="text-sm font-medium">$5.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tax</span>
                <span className="text-sm font-medium">$9.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">$113.00</span>
              </div>
            </div>
            <Button size="lg" className="w-full">
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
