import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Scraper from "./Scraper";
import Nav from "./components/Nav";

const App = () => {
  return <Scraper />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
