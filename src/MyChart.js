import React from 'react';
// import ReactChartkick, { BarChart } from 'react-chartkick';
import Chart from 'chart.js/auto';
import { BarChart } from 'react-chartkick';
import 'chartkick/chart.js';

ReactChartkick.addAdapter(Chart);

function makeArray(obj) {
  const newArray = [];
  let objKeys = Object.keys(obj);
  objKeys.map((key) => newArray.push([key, obj[key]]));
  return newArray;
}

const MyChart = (props) => {
  return (
    <BarChart type="bar" indexAxis="y" data={makeArray(props.stateData)} />
  );
};

export default MyChart;
