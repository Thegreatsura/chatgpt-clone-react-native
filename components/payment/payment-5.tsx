/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KAANh0MGtyk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Payment5() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full p-6 bg-card rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <img
            src="/placeholder.svg"
            width={80}
            height={80}
            alt="Product Image"
            className="rounded-md mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">Premium T-Shirt</h2>
            <p className="text-muted-foreground">100% organic cotton</p>
            <p className="text-2xl font-bold">$49.99</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-muted-foreground"
            >
              Card number
            </label>
            <Input
              id="cardNumber"
              type="text"
              placeholder="4111 1111 1111 1111"
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiration"
                className="block text-sm font-medium text-muted-foreground"
              >
                Expiration
              </label>
              <Input
                id="expiration"
                type="text"
                placeholder="MM/YY"
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-muted-foreground"
              >
                CVC
              </label>
              <Input
                id="cvc"
                type="text"
                placeholder="123"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-muted-foreground"
            >
              Zip code
            </label>
            <Input
              id="zipCode"
              type="text"
              placeholder="12345"
              className="w-full"
            />
          </div>
          <Button size="lg" className="w-full">
            Pay $49.99
          </Button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" width={32} height={20} alt="Visa" />
            <img
              src="/placeholder.svg"
              width={32}
              height={20}
              alt="Mastercard"
            />
            <img
              src="/placeholder.svg"
              width={32}
              height={20}
              alt="American Express"
            />
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="/placeholder.svg"
              width={80}
              height={20}
              alt="Norton Security"
            />
            <img
              src="/placeholder.svg"
              width={80}
              height={20}
              alt="Trust Pilot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
