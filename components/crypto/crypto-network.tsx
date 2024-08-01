"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const cryptoNetworks = [
  {
    value: "bitcoin",
    label: "Bitcoin",
  },
  {
    value: "ethereum",
    label: "Ethereum",
  },
  {
    value: "binance-smart-chain",
    label: "Binance Smart Chain",
  },
  {
    value: "cardano",
    label: "Cardano",
  },
];

export function CryptoNetworks() {
  return (
    <Select
      onValueChange={(val) => {
        console.log(val);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Network" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Network of your choice </SelectLabel>
          {cryptoNetworks.map((network) => {
            return (
              <SelectItem key={network.value} value={network.value}>
                {network.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
