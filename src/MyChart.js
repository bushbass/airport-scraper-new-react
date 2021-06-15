import React from 'react';
import { BarChart } from 'react-chartkick';
import 'chartkick/chart.js';
import Chart from 'chart.js/auto';

// ReactChartkick.addAdapter(Chart);

function makeArray(obj) {
  const newArray = [];
  let objKeys = Object.keys(obj);
  objKeys.map((key) => newArray.push([key, obj[key]]));
  return newArray;
}

const MyChart = (props) => {
  return <BarChart data={makeArray(props.stateData)} />;
};

export default MyChart;
