import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Saved from "./components/Pages/Saved";
import Search from "./components/Pages/Search";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
        <Route exact path="/" component ={Search} />
        <Route exact path = "/saved" component = {Saved}/>
        </div>
      </Router>
    );
  }
}

export default App;
