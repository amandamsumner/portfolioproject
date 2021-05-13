import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import QuoteModal from "./QuoteModal";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />

        <Switch>
          <Route path="/home" component={QuoteModal} />

          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
