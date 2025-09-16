"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { traficByLocationData } from "@/mock-data/chartData";

const TrafficByLocations = () => {
  return (
    <Card className="bg-[#F7F9FB] border-none ">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg">
          Traffic by Location
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-6">
        {/*  Chart */}
        <div className="h-48 lg:h-64 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={traficByLocationData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {traficByLocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(val: number) => `${val}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 flex-1">
          {traficByLocationData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
              <span className="font-medium">
                {(item.value / 10).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficByLocations;
