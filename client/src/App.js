import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Saved from "./components/Pages/Saved";
import Search from "./components/Pages/Search";
import BookAlert from "./components/bookAlert"
import "./App.css";

// import io from "../node_modules/socket.io-client/dist/socket.io";

// const socket = io();
class App extends Component {
  
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component ={Search} />
            <Route exact path="/search" component ={Search} />
            <Route exact path = "/saved" component = {Saved}/>
            <Route nomatch component ={Search} />
          </Switch>
        </div>
        <BookAlert />
      </Router>
    );
  }
}

export default App;
