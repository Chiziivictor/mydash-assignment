import "./chart.scss";

import React from "react";
import * as d3 from "d3";
import { useRef } from "react";
import { useEffect } from "react";

const Chart = () => {
  const svgRef = useRef();

  const barHeight = 30;

  useEffect(() => {
    const numbers = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 30)
    );
    d3.select(svgRef.current)
      .selectAll("rect")
      .data(numbers)
      .enter()
      .append("rect")
      .attr("width", (d) => d * 10)
      .attr("height", barHeight - 4)
      .attr("transform", (d, i) => "translate(100," + i * barHeight + ")");
  });

  return (
    <div className="dchart">
      <div className="dchart__title">
        <h1>D3.js Chart</h1>
        <p>
          Click <span onClick={() => window.location.reload()}>Reload</span> to
          shuffle chart
        </p>
      </div>
      <svg ref={svgRef} width="60vh" height="90vw"></svg>

      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
};

export default Chart;
