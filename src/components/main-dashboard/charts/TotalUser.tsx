"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TotalUserData } from "@/mock-data/chartData";

const buttonsState = [
  { id: 1, label: "Total Users", value: "totalUsers", active: true },
  { id: 2, label: "Total Projects", value: "totalProjects", active: false },
  { id: 3, label: "Operating Status", value: "operatingStatus", active: false },
];

const TotalUser = () => {
  return (
    <Card className="xl:col-span-2 bg-[#F7F9FB] border-none ">
      {/* Header */}
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center gap-2">
            {buttonsState.map((button) => (
              <Button
                key={button.id}
                variant={"ghost"}
                size="sm"
                className={` ${
                  button.active ? "text-gray-900" : "text-gray-400"
                } text-xl `}
              >
                {button.label}
              </Button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-900 rounded-full mr-2"></div>
              <span>Current Week</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3  bg-[#B1E3FF]   rounded-full mr-2"></div>
              <span>Previous Week</span>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <div className="h-48 lg:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={TotalUserData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickMargin={12}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                tickFormatter={(value) => `${value / 1_000_000}M`}
                domain={[0, 35_000_000]}
                tickMargin={20}
              />
              <Tooltip formatter={(value: number) => `${value / 1_000_000}M`} />
              {/* Current  */}
              <Line
                type="basis"
                dataKey="current"
                stroke="#1c1c1c"
                strokeWidth={2}
                dot={false}
              />
              {/* Previous  */}
              <Line
                type="natural"
                dataKey="previous"
                stroke="#B1E3FF"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalUser;
