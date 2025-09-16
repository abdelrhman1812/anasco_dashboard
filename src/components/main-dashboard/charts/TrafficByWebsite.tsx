import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrafficByWebsite = () => {
  // Data Array
  const trafficData = [
    { name: "Google", value: 80, color: "bg-blue-500" },
    { name: "YouTube", value: 65, color: "bg-red-500" },
    { name: "Instagram", value: 50, color: "bg-pink-500" },
    { name: "Pinterest", value: 40, color: "bg-red-600" },
    { name: "Facebook", value: 30, color: "bg-blue-600" },
    { name: "Twitter", value: 20, color: "bg-sky-500" },
    { name: "Tumblr", value: 10, color: "bg-indigo-600" },
  ];

  return (
    <Card className="bg-[#F7F9FB] border-none ">
      <CardHeader>
        <CardTitle className="text-base lg:text-lg">
          Traffic by Website
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5.5">
          {trafficData.map((site, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{site.name}</span>
              <div className="w-28 lg:w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-2 ${site.color} rounded-full`}
                  style={{ width: `${site.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficByWebsite;
