import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserFollowersRequest } from "../../actions/users";
import { getFollowers, getFetching } from "../../reducers/followers";
import Preloader from "../Preloader";
import Follower from "../Follower";
import "./Followers.css";

export class Followers extends Component {
  componentDidMount() {
    const name = this.props.user;
    this.props.fetchUserFollowersRequest(name);
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }

  render() {
    const { followers, fetching } = this.props;
    return (
      <div className="followers-list">
        {fetching ? (
          <Preloader />
        ) : (
          <div>
            {!followers || followers.length === 0 ? (
              <div>У пользователя нет подписчиков...</div>
            ) : (
              followers.map(follower => (
                <Follower
                  photo={follower.avatar_url}
                  name={follower.login}
                  key={follower.id}
                />
              ))
            )}
          </div>
        )}
      </div>
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
