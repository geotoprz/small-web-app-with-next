import BaseDescription from "@/components/UI/BaseDescription";
import BaseTitle from "@/components/UI/BaseTitle";
import React from "react";

const numericSumOfBars = 2000;
const barColors = ["teal-300", "cyan-500", "amber-300", "fuchsia-300"];

const SectionTwoGraph = ({ title, graphText, stats }) => {
  const getBarPercentage = (amount) => (+amount / numericSumOfBars) * 100;

  const getBarWidth = (amount) => {
    const width = getBarPercentage(amount);
    return { width: width + "%" };
  };

  getBarWidth(800);
  return (
    <div className="flex w-full flex-col gap-3 text-center lg:text-left">
      <BaseDescription className="text-sm font-semibold text-cyan-600">
        {title ?? "Our services"}
      </BaseDescription>
      <BaseTitle className="mb-4 font-bold">
        {graphText ??
          "We create websites and campaigns that expose new opportunities"}
      </BaseTitle>
      {stats &&
        stats.map((stat, i) => {
          return (
            <div
              key={`Graph stat ${i}`}
              className="flex flex-col items-start justify-center gap-2"
            >
              <div className="flex w-full justify-between">
                <BaseDescription>{stat.title}</BaseDescription>
                <BaseTitle>{getBarPercentage(stat.amount) + "%"}</BaseTitle>
              </div>
              <div className="flex h-1.5 w-full flex-row items-center bg-slate-100 lg:h-3">
                <div
                  className={`h-1.5 lg:h-3 bg-${barColors[i]}`}
                  style={getBarWidth(stat.amount)}
                />
                <div
                  className={`right:0.5 relative h-3 w-3 rounded-full border-4 p-1 lg:right-2 lg:h-6 lg:w-6 lg:border-8 lg:p-2 border-${barColors[i]}`}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SectionTwoGraph;
