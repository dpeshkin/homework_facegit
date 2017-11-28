import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "../AuthPage";
import "./AppRouter.css";

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={AuthPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;

//
// <Route path="/shows/:id" component={ShowPage} />
// <Redirect to="/" />
