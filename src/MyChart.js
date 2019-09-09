import React from "react";
import ReactChartkick, { BarChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

function makeArray(obj) {
  const newArray = [];
  let objKeys = Object.keys(obj);
  objKeys.map(key => newArray.push([key, obj[key]]));
  return newArray;
}

const MyChart = props => {
  return <BarChart data={makeArray(props.stateData)} />;
};

export default MyChart;
