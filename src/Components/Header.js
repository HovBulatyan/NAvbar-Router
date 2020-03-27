import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </div>
    );
  }
}
