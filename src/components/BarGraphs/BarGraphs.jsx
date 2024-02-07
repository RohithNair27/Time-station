import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
function BarGraphs() {
  return (
    <div>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            scaleType: "band",
            label: "Days",
          },
        ]}
        yAxis={[
          {
            label: "Hours",
          },
        ]}
        series={[
          {
            data: [2, 5, 3, 10, 12],
          },
        ]}
        width={700}
        height={300}
      />
    </div>
  );
}

export default BarGraphs;
