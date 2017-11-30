import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Follower.css";

class Follower extends Component {
  render() {
    const { photo, name } = this.props;
    return (
      <li className="followers-item">
        <div className="follower">
          <div className="follower__photo">
            <img src={photo} alt="" />
          </div>
          <div className="follower__name">
            <Link to={`/user/${name}`}>{name}</Link>
          </div>
        </div>
      </li>
    );
  }
}

export default Follower;
