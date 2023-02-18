import React from "react";
// import ChartComponent from "./ChartComponent";

const SectionTwoGraph = ({ title, graphText, stats }) => {
  return (
    <div className="flex w-full flex-col gap-3 text-center">
      <h3>{title}</h3>
      <h2>{graphText}</h2>
      {stats &&
        stats.map((stat, i) => {
          return (
            <div key={`Graph stat ${i}`}>
              <h4>{stat.title}</h4>
              <span>{stat.amount}</span>
              {/* <ChartComponent /> */}
            </div>
          );
        })}
    </div>
  );
};

export default SectionTwoGraph;
