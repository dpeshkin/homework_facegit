import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import AuthPage from "../AuthPage";
import UserPage from "../UserPage";
import PrivateRoute from "../PrivateRoute";
import { logout } from "../../actions/auth";
import "./AppRouter.css";
import { connect } from "react-redux";
import { getIsAuthorized } from "../../reducers/auth";
import {
  getIsNetworkErrorPresent,
  getNetworkError
} from "../../reducers/network";
export const abc = 123;
export class AppRouter extends Component {
  appLogout = () => {
    this.props.logout();
  };
  render() {
    const { isAuthorized, error, message } = this.props;
    return (
      <div className="App">
        {isAuthorized && (
          <div className="user__button">
            <button onClick={this.appLogout} className="logout-button">
              LOGOUT
            </button>
          </div>
        )}
        {error && <div className="user__error">{message}</div>}
        <Switch>
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          {!isAuthorized && <Route path="/login" component={AuthPage} />}
          <Redirect to="/user/me" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  error: getIsNetworkErrorPresent(state),
  message: getNetworkError(state)
});

const mapDispatchToProps = {
  logout
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);
