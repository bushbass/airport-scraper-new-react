import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Scraper from './Scraper';
import PathTrains from './PathTrains';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav />

      <Route path='/scraper' exact component={Scraper} />
      <Route path='/' exact component={PathTrains} />
    </Router>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
