import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserFollowersRequest } from "../../actions/users";
import { getFollowers, getFetching } from "../../reducers/followers";
import Preloader from "../Preloader";
import Follower from "../Follower";
import "./Followers.css";

class Followers extends Component {
  componentDidMount() {
    const name = this.props.user;
    this.props.fetchUserFollowersRequest(name);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { followers, fetching } = this.props;
    return (
      <ul className="followers-list">
        {fetching || !followers ? (
          <Preloader />
        ) : (
          followers.map(follower => (
            <Follower
              photo={follower.avatar_url}
              name={follower.login}
              key={follower.id}
            />
          ))
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  followers: getFollowers(state),
  fetching: getFetching(state)
});

const mapDispatchToProps = {
  fetchUserFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
