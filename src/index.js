import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import cheerio from 'cheerio';
import MyChart from './MyChart';
import { convertTime12to24 } from './convertTime12to24';

import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
    this.getHTML = this.getHTML.bind(this);
    this.go = this.go.bind(this);
  }
  componentDidMount() {
    this.go();
  }
  async getHTML() {
    const { data: html } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?ffState=2&accCustId=PANYNJ&fidsId=20001&ffId=fA&ffAcid=&ffAl=&ffSimplestatus=&ffDepap=&ffArrap=EWR&ffDepdate=&ffArrdate=NOW&ffDephr=&ffArrhr=NOW&ffSortColumn=ArrivalDateTimeUpdated&ffSortDirection=ascending&ffSortPrevColumn=ArrivalOriginalDateTimeScheduled&ffSortPrevDirection=ascending&ffFilterAl=&ffFilterDepap=&ffFilterArrap=`
    );

    // add this query for different parts of the day ?tp=18
    return html;
  }
  // takes the html from getHTML function and manipulates it to produce our object
  async getArrivalTimes(html) {
    const $ = cheerio.load(html);

    // get flight times from cheerio object and save them to flightArray
    let rawFlightTimesList = [];
    $('.c7').each((i, element) => {
      let temp = element.children[1] ? element.children[1].data : null;
      rawFlightTimesList = [...rawFlightTimesList, temp];
    });

    //remove duplicate times by making it a set
    // then assign de-duplicated set to a new array

    const singledFlightTimesList = [...new Set(rawFlightTimesList)];

    //  convert 12 to 24 hour time
    const HourList = singledFlightTimesList.map(item =>
      item ? convertTime12to24(item) : null
    );

    const justHoursList = HourList.map(item =>
      item ? item.slice(-8, -6) : null
    );

    const countObj = {};
    for (let i = 0; i < justHoursList.length; i++) {
      !countObj[justHoursList[i]]
        ? (countObj[justHoursList[i]] = 1)
        : countObj[justHoursList[i]]++;
    }
    console.log(countObj);
    return countObj;
  }

  async go() {
    const countObject = await this.getArrivalTimes(await this.getHTML());
    this.setState({ data: countObject });
  }

  render() {
    return (
      <div className='App'>
        <h1>Get Newark Airport arrivals by hour</h1>
        <p>24 hour time</p>
        <p>Refresh page for latest updates</p>

        <MyChart stateData={this.state.data} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
