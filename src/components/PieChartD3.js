import React, { useEffect } from "react";
import * as d3 from "d3";

export const PieChartD3 = ({ data }) => {
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
    d3.select("#pieChart").select("svg").remove();

    var svg = d3
      .select("#pieChart")
      .append("svg")
      .attr("width", 600)
      .attr("height", 500)
      .append("g");
    var width = 600,
      height = 500,
      radius = Math.min(width, height) / 2;
    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const arcGenerator = d3.svg.arc().innerRadius(0).outerRadius(radius);

    const pieGenerator = d3.layout
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colors[i])
      .style("stroke", "#FFFFFF")
      .style("stroke-width", "1px");

    // Append text labels
    arc
      .append("text")
      .text((d) => {
        return d.data.label;
      })
      .attr("transform", (d) => "translate(" + arcGenerator.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  }

  function refinedData(budgetData) {
    const transformedData = [];
    for (let i = 0; i < budgetData.length; i++) {
      const item = budgetData[i];
      transformedData.push({ label: item.title, value: item.budget });
    }
    return transformedData;
  }

  return null;
};