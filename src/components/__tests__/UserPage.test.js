import React from "react";
import { UserPage } from "../UserPage/UserPage";
import { shallow } from "enzyme";
import Preloader from "../Preloader";
import Followers from "../Followers/Followers";

describe("Компонент UserPage", () => {
  const wrapper = shallow(
    <UserPage
      match={{ params: { name: "test-login" } }}
      fetchUserRequest={jest.fn()}
    />
  );

  it("Содержит метод componentDidMount", () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it("Содержит метод componentWillReceiveProps", () => {
    expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
  });

  describe("Содержит:", () => {
    it("Если props.isFetching === true, есть Preloader", () => {
      wrapper.setProps({ fetching: true });
      expect(wrapper.find(Preloader)).toHaveLength(1);
    });
    it("Если props.isFetching === false, и !props.data будет сообщение об отсутсвиии пользователя", () => {
      wrapper.setProps({ fetching: false, data: null });
      expect(wrapper.find("div.error")).toHaveLength(1);
    });
  });

  describe("Если пользватель найден (props.data != null), в верстке должны быть", () => {
    const data = {
      login: "ekb196",
      avatar_url: "http://via.placeholder.com/350x350",
      followers: 1,
      public_repos: 10
    };

    it("Автар пользвателя", () => {
      wrapper.setProps({ data: { avatar_url: data.avatar_url } });
      expect(
        wrapper.findWhere(
          el => el.type() === "img" && el.prop("src") === data.avatar_url
        )
      ).toHaveLength(1);
    });

    it("Логин пользователя", () => {
      wrapper.setProps({ data: { login: data.login } });
      expect(wrapper.find("div.user__name").text()).toContain(data.login);
    });

    it("Количество фолловеров", () => {
      wrapper.setProps({ data: { followers: data.followers } });
      expect(wrapper.find("div.user__followers-count").text()).toContain(
        data.followers
      );
    });

    it("Количество репозиториев", () => {
      wrapper.setProps({ data: { public_repos: data.public_repos } });
      expect(wrapper.find("div.user__repos").text()).toContain(
        data.public_repos
      );
    });

    it("компонент Followers с передачей login через props", () => {
      wrapper.setProps({ data: { login: data.login } });
      expect(wrapper.find(Followers).prop("user")).toEqual(data.login);
    });
  });
});
