import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

import statsData from "@/mock-data/statsData.json";
import { StatItem } from "@/types/statsCardT";

const StatsCards = () => {
  return (
    <section className="flex-1 p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl px-2 py-2 lg:text-2xl font-semibold text-gray-900">
          Today
        </h1>
      </div>

      {/* statsData Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 lg:mb-8">
        {(statsData as StatItem[]).map((item, index) => (
          <Card
            key={item.id}
            className="border-none min-w-[220px] rounded-[16px]"
            style={{
              backgroundColor: index % 2 === 0 ? "#e3f5ff" : "#e5ecf6",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    {item.title}
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
                <div
                  className={`flex items-center ${
                    item.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="text-sm font-medium">{item.change}</span>
                  {item.isPositive ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsCards;
