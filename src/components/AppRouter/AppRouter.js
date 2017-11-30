import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import AuthPage from "../AuthPage";
import UserPage from "../UserPage";
import PrivateRoute from "../PrivateRoute";
import "./AppRouter.css";
import { connect } from "react-redux";
import { getToken } from "../../reducers/auth";

class AppRouter extends Component {
  render() {
    const { token } = this.props;
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/user/:name" component={UserPage} />
          {!token && <Route path="/login" component={AuthPage} />}
          <Redirect to="/user/ekb196" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

export default withRouter(connect(mapStateToProps)(AppRouter));
