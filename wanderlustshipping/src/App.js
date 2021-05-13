import React, { Component } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Main from "./layout/MainComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Navbar} />
      </div>
    </Router>
  );
}

export default App;
