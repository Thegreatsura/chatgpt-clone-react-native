"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string
}

export function ModeToggle({className}: Props) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size={"icon"}
      className={cn("rounded-xl", className)}
      onClick={() => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
        if (theme === "system") setTheme("dark");
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
