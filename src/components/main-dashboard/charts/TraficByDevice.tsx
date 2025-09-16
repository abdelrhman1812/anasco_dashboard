"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import React from "react";
import { traficByDeviceData } from "@/mock-data/chartData";

export const TrafficByDevice = () => {
  return (
    <Card className="bg-[#F7F9FB] border-none ">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg">
          Traffic by Device
        </CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={traficByDeviceData} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="device"
              tickMargin={12}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              tickFormatter={(value) => `${value / 1000000}M`}
              domain={[0, 30000000]}
              tickMargin={10}
            />
            <Tooltip formatter={(value) => `${(value as number) / 1000000}M`} />
            <Bar dataKey="traffic" radius={[6, 6, 0, 0]} barSize={40}>
              {traficByDeviceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
