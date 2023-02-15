import React from "react";

const SectionTwoGraph = ({ title, graphText, stats }) => {
  return (
    <div className="flex w-1/2 flex-col gap-3">
      <h3>{title}</h3>
      <h2>{graphText}</h2>
      {stats &&
        stats.map((stat, i) => {
          return (
            <div key={`Graph stat ${i}`}>
              <h4>{stat.title}</h4>
              <span>{stat.amount}</span>
            </div>
          );
        })}
    </div>
  );
};

export default SectionTwoGraph;
