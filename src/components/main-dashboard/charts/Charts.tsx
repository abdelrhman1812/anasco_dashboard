import React from "react";
import { TrafficByDevice } from "./TraficByDevice";
import TrafficByLocations from "./TrafficByLocations";
import TotalUser from "./TotalUser";
import TrafficByWebsite from "./TrafficByWebsite";

const Charts = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2">
          <TotalUser />
        </div>
        <div className="lg:col-span-1">
          <TrafficByWebsite />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TrafficByDevice />
        <TrafficByLocations />
      </div>
    </>
  );
};

export default Charts;
