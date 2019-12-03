import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import VideoPage from "./pages/Video";
import Loginpage from "./pages/Login";
import Signup from "./pages/SignUp";
export default class MainRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route path="/video" component={VideoPage} />
        <Route path="/login" component={Loginpage} />
        <Route path="/signup" component={Signup} />

      </Switch>
    );
  }
}
