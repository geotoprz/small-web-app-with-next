import React, { useEffect, useRef } from "react";

const ChartComponent = () => {
  const chartEventRef = useRef(null);
  const google = window.google;

  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ]);

  var options = {
    title: "00101",
    width: 600,
    height: 400,
    legend: { position: "top", maxLines: 3 },
    bar: { groupWidth: "75%" },
    isStacked: true,
  };

  const initializeChart = () => {
    chartEventRef.current = new google.visualization.ChartWrapper({
      chartType: "PieChart",
      dataTable: data,
      options: { ...options, width: width, height: "400" },
      containerId: options.title,
    });
    google.visualization.events.addOneTimeListener(
      chartEventRef.current,
      "select",
      (e) => {
        const selected = chartEventRef.current?.getChart()?.getSelection();
        if (selected) {
          const countryIndex = selected[0]?.row;
          if (countryIndex !== null) {
            const countryName = chartData[countryIndex + 1][0];
            const countryId = chartData[countryIndex + 1][3];
            sliceClicked(countryName, countryId);
          }
        }
      }
    );
    chartEventRef.current.draw();
  };

  useEffect(() => {
    if (chartData) {
      initializeChart();
    }
    return () => {};
  }, []);

  return <div>ChartComponent</div>;
};

export default ChartComponent;
