import React, { useEffect } from "react";
import * as d3 from "d3";

export const SpentBarChartD3 = ({ data }) => {
  useEffect(() => {
    drawChart(refinedData(data));
  }, [data]);

  var colors = [
    "#ffcd56",
    "#ff6384",
    "#36a2eb",
    "#fd6b19",
    "#7ae7c7",
    "#c589e8",
    "#7c3238",
    "#8d99ae",
  ];

  function drawChart(data) {
    d3.select("#spentBarChart").select("svg").remove();

  const svg = d3
    .select("#spentBarChart")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 400);

    const maxSpent = d3.max(data, d => d.value); // Find the maximum Spent value

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 100) // Adjust the spacing between bars
      .attr("y", d => 400 - (d.value / maxSpent) * 300) // Scale the height relative to the maximum value
      .attr("width", 50) // Adjust the width of the bars
      .attr("height", d => (d.value / maxSpent) * 300) // Scale the height relative to the maximum value
      .attr("fill", (_, i) => colors[i]);
  
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => "$" + d.value)
      .attr("x", (d, i) => i * 100 + 20) // Center the text on each bar
      .attr("y", d => 400 - (d.value / maxSpent) * 300 - 3) // Adjust the vertical position of the text
      .attr("text-anchor", "middle") // Center the text horizontally
      .style("font-size", 15)
      .style("overflow", "visible"); // Make sure the text is not cut off
  }

  function refinedData(spentData) {
    return spentData.map(item => ({
      label: item.title,
      value: item.spent
    }));
  }

  return null;
};
