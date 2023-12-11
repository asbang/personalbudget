import React, { useEffect } from "react";
import * as d3 from "d3";

export const BarChartD3 = ({ data }) => {
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
    d3.select("#barChart").select("svg").remove();

  const svg = d3
    .select("#barChart")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 400);

    const maxBudget = d3.max(data, d => d.value); // Find the maximum budget value

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 100) // Adjust the spacing between bars
      .attr("y", d => 400 - (d.value / maxBudget) * 300) // Scale the height relative to the maximum value
      .attr("width", 50) // Adjust the width of the bars
      .attr("height", d => (d.value / maxBudget) * 300) // Scale the height relative to the maximum value
      .attr("fill", (_, i) => colors[i]);
  
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => "$" + d.value)
      .attr("x", (d, i) => i * 100 + 20) // Center the text on each bar
      .attr("y", d => 400 - (d.value / maxBudget) * 300 - 3) // Adjust the vertical position of the text
      .attr("text-anchor", "middle") // Center the text horizontally
      .style("font-size", 15)
      .style("overflow", "visible"); // Make sure the text is not cut off

      const legend = svg.append("g")
    .attr("transform", "translate(0,10)"); // Adjust the vertical position of the legend

  legend.selectAll("rect")
    .data(colors)
    .enter()
    .append("rect")
    .attr("x", (_, i) => i * 100)
    .attr("y", 0)
    .attr("width", 50)
    .attr("height", 10)
    .attr("fill", color => color);

  legend.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(d => d.label)
    .attr("x", (_, i) => i * 100 + 20)
    .attr("y", 20) // Adjust the vertical position of the legend text
    .attr("text-anchor", "middle")
    .style("font-size", 12)
    .style("overflow", "visible");
  }

  function refinedData(budgetData) {
    return budgetData.map(item => ({
      label: item.title,
      value: item.budget
    }));
  }

  return null;
};