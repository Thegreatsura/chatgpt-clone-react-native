import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemCustom,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Brush, Eraser, Scissors, SwatchBook } from "lucide-react";
import { useId } from "react";
import { Icons } from "./icons";

export function CheckOutItems({ className }: { className?: string }) {
  const id = useId();

  const items = [
    { value: "1", label: "Palette", Icon: SwatchBook },
    { value: "2", label: "Brush", Icon: Brush },
    { value: "3", label: "Eraser", Icon: Eraser },
    { value: "4", label: "Cut", Icon: Scissors },
  ];

  return (
    <RadioGroup className={cn("grid-cols-2", className)}>
      {items.map((item) => (
        <div
          key={`${id}-${item.value}`}
          className="relative flex flex-col gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
        >
          <div className="flex justify-between gap-2">
            <RadioGroupItemCustom
              id={`${id}-${item.value}`}
              value={item.value}
              className="order-1 after:absolute after:inset-0"
            />
            <item.Icon
              className="opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
          <Label htmlFor={`${id}-${item.value}`}>{item.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export function Items({
  selected,
  onSelect,
  className,
}: {
  className?: string;
  selected: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
}) {
  const id = useId();
  return (
    <RadioGroup
      onValueChange={onSelect}
      className={cn("gap-2", className)}
      defaultValue={selected}
    >
      {/* Radio card #1 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="CBE"
          id={`${id}-1`}
          aria-describedby={`${id}-1-description`}
          className="order-1 after:absolute after:inset-0"
        />
        <div className="flex grow items-start gap-3">
          <Icons.CBE className="size-8" />
          <div className="grid grow gap-2">
            <Label htmlFor={`${id}-1`}>
              CBE{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (Bank)
              </span>
            </Label>
            <p
              id={`${id}-1-description`}
              className="text-xs text-muted-foreground"
            >
              Comercial Bank of Ethiopia.
            </p>
          </div>
        </div>
      </div>

      {/* Radio card #2 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="CBEBirr"
          id={`${id}-4`}
          aria-describedby={`${id}-4-description`}
          className="order-4 after:absolute after:inset-0"
        />
        <div className="flex grow items-start gap-3">
          <Icons.CBEbirr className="size-8" />
          <div className="grid grow gap-2">
            <Label htmlFor={`${id}-2`}>
              CBEbirr{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (FinTech)
              </span>
            </Label>
            <p
              id={`${id}-2-description`}
              className="text-xs text-muted-foreground"
            >
              Mobile money service by CBE.
            </p>
          </div>
        </div>
      </div>

      {/* Radio card #3 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="Telebirr"
          id={`${id}-2`}
          aria-describedby={`${id}-2-description`}
          className="order-2 after:absolute after:inset-0"
        />
        <div className="flex grow items-start gap-3">
          <Icons.Telebirr className="size-8" />
          <div className="grid grow gap-2">
            <Label htmlFor={`${id}-1`}>
              Telebirr{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (FinTech)
              </span>
            </Label>
            <p
              id={`${id}-1-description`}
              className="text-xs text-muted-foreground"
            >
              Telebirr SuperApp.
            </p>
          </div>
        </div>
      </div>

      {/* Radio card #4 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="Awash"
          id={`${id}-3`}
          aria-describedby={`${id}-3-description`}
          className="order-4 after:absolute after:inset-0"
        />
        <div className="flex grow items-start gap-3">
          <Icons.Awashbank className="size-8" />
          <div className="grid grow gap-2">
            <Label htmlFor={`${id}-1`}>
              Awash International{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (Bank)
              </span>
            </Label>
            <p
              id={`${id}-1-description`}
              className="text-xs text-muted-foreground"
            >
              Nurturing like the river.
            </p>
          </div>
        </div>
      </div>

      {/* Radio card #5 */}
      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
        <RadioGroupItem
          value="USDT"
          id={`${id}-5`}
          aria-describedby={`${id}-5-description`}
          className="order-5 after:absolute after:inset-0"
        />
        <div className="flex grow items-start gap-3">
          <Icons.USDT className="size-8" />
          <div className="grid grow gap-2">
            <Label htmlFor={`${id}-2`}>
              USDT{" "}
              <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                (cryptocurrency)
              </span>
            </Label>
            <p
              id={`${id}-2-description`}
              className="text-xs text-muted-foreground"
            >
              Tether (USDT), Digital Dollar.
            </p>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
