import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, GitBranch, Table2, Shield } from "lucide-react";

export const UsageDashboard = () => {
  return (
    <Card className="w-80 bg-zinc-900 text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Usage 67%</CardTitle>
        <button className="text-xs text-zinc-400 flex items-center">
          Manage plan <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <UsageItem
            title="Rows read"
            current={48.1}
            max={100}
            unit="billion"
            color="text-emerald-500"
          />
          <UsageItem
            title="Rows written"
            current={78.3}
            max={100}
            unit="billion"
            color="text-amber-500"
          />
          <UsageItem
            title="Storage"
            current={1.2}
            max={20}
            unit="GB"
            color="text-purple-500"
          />

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <GitBranch className="h-4 w-4" />
              <span>Branches</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>3</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <Table2 className="h-4 w-4" />
              <span>Tables</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>2</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-between">
              <span>Backups</span>
              <button className="text-xs text-zinc-400 flex items-center">
                Backups <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Progress value={25} className="h-4 w-4 text-blue-500" />
              <span className="text-zinc-400 text-sm">
                Backup in progress...
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Shield className="h-4 w-4 text-zinc-400" />
              <span className="text-zinc-400 text-sm">
                31 Dec 2023, 12:00 PM
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const UsageItem = ({
  title,
  current,
  max,
  unit,
  color,
}: {
  title: string;
  current: number;
  max: number;
  unit: string;
  color: string;
}) => {
  const percentage = (current / max) * 100;
  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <Progress value={percentage} className={`h-4 w-4 ${color}`} />
        <span className="ml-2">{title}</span>
      </div>
      <div className="text-sm">
        <span className="font-medium">{current} </span>
        <span className="text-zinc-400">
          out of {max} {unit}
        </span>
      </div>
    </div>
  );
};
