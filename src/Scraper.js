import React from 'react';
import MyChart from './MyChart';
import { getArrivalTimes } from './getArrivalTimes';
import { getHTML } from './getHTML';
import './styles.css';

class Scraper extends React.Component {
  state = { data: {} };

  componentDidMount() {
    this.go();
  }

  go = async () => {
    const countObject = await getArrivalTimes(await getHTML());
    this.setState({ data: countObject });
  };

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
export default Scraper;
