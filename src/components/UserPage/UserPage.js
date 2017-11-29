import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class UserPage extends Component {
  render() {
    return <h1>User</h1>;
  }
}

export default connect(mapStateToProps)(UserPage);
