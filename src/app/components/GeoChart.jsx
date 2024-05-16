"use client"
import React from "react";
import { Chart } from "react-google-charts";

const countries = [
  ["Country", "Popularity"],
  ["Germany", 700],
  ["Indonesia", 900],
  ["Japan",700],
  ["United States", 800],
  ["India", 600],
];

const GeoChartComponent = () => {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = countries[selection[0].row + 1];
            console.log("Selected: " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="100%"
      data={countries}
      options={options}
    />
  );
};

const options = {
    // region: "035", South-Eastern Asia
    backgroundColor: "transparent",
    datalessRegionColor: "grey",
  };

export default GeoChartComponent;
