import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Circle, Link, X } from "lucide-react";

export function DepositModal() {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Deposit</span>
            <X className="cursor-pointer" />
          </DialogTitle>
        </DialogHeader>
        <Card className="bg-zinc-800 border-zinc-700">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b border-zinc-700">
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" />
                <span className="text-gray-300">Stake ACME</span>
              </div>
              <span className="text-green-500">Done</span>
            </div>
            <div className="flex items-center justify-between p-4 border-b border-zinc-700">
              <div className="flex items-center space-x-3">
                <Circle className="text-green-500" size={20} />
                <span className="text-gray-300">Deposit & Stake</span>
              </div>
              <span className="text-gray-400">Waiting</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <Circle className="text-gray-500" size={20} />
                <span className="text-gray-500">Received by validator</span>
              </div>
              <span className="text-gray-500">Automatic</span>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Transaction ID(s)</span>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">0x546...3b76</span>
              <Link className="text-green-500" size={16} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Age</span>
            <span className="text-white">3 sec ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Amount</span>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-white">0.0001 ETH</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
