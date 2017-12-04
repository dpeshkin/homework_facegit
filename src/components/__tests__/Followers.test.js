import React from "react";
import { Followers } from "../Followers/Followers";
import { Follower } from "../Follower/Follower";
import { shallow } from "enzyme";
import Preloader from "../Preloader";

describe("Компонент Followers содержит:", () => {
  const wrapper = shallow(
    <Followers user={"ekb196"} fetchUserFollowersRequest={jest.fn()} />
  );
  it("метод componentDidMount", () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });
  it("Preloader if fetching===true", () => {
    wrapper.setProps({ fetching: true });
    expect(wrapper.find(Preloader)).toHaveLength(1);
  });
  it("возвращает компоненты Follower в количестве переданном через props.followers", () => {
    const followers = [{ id: "1" }, { id: "2" }, { id: "3" }];
    wrapper.setProps({ fetching: false, followers: followers });
    expect(wrapper.find(Follower)).toHaveLength(followers.length);
  });
});
