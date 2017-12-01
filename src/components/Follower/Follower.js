import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Follower.css";

class Follower extends Component {
  render() {
    const { photo, name } = this.props;
    return (
      <div className="followers-item">
        <div className="follower">
          <div className="follower__photo">
            <img src={photo} alt="" />
          </div>
          <div className="follower__name">
            <Link to={`/user/${name}`}>{name}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Follower;
