import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Scraper from "./Scraper";

const App = () => {
  return <Scraper />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
