import React from "react";
import { Follower } from "../Follower/Follower";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

describe("Компонент `Follower`", () => {
  const wrapper = shallow(<Follower />);
  const testProps = {
    photo: "http://via.placeholder.com/350x150",
    name: "dex157"
  };
  wrapper.setProps({
    photo: testProps.photo,
    name: testProps.name
  });
  it("содержит картинку с аватаром", () => {
    expect(wrapper.find("img").prop("src")).toEqual(testProps.photo);
  });
  it("содержит логин пользователя переданный через props", () => {
    expect(wrapper.find(Link).props().children).toEqual(testProps.name);
  });
  it("ссылка с логина пользователя ведет на `/user/{user.login}", () => {
    expect(wrapper.find(Link).props().to).toEqual(`/user/${testProps.name}`);
  });
});
