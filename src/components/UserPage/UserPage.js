import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRequest } from "../../actions/users";
import { getData, getFetching } from "../../reducers/users";
import Preloader from "../Preloader";
import "./UserPage.css";

class UserPage extends Component {
  componentDidMount() {
    const name = this.props.match.params.name;
    this.props.fetchUserRequest(name);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { data, fetching } = this.props;
    return (
      <div className="user-page">
        {fetching || !data ? (
          <Preloader />
        ) : (
          <div className="user">
            <div className="user__photo">
              <img src={data.avatar_url} alt="" />
            </div>
            <div className="user__description">
              <div className="user__props user__name">{data.login}</div>
              <div className="user__props user__followers">
                Followers: {data.followers}
              </div>
              <div className="user__props user__repos">
                Public repos: {data.public_repos}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: getData(state),
  fetching: getFetching(state)
});

const mapDispatchToProps = {
  fetchUserRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
