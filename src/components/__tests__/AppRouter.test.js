import React from "react";
import { AppRouter } from "../AppRouter/AppRouter";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { shallow } from "enzyme";
import { Route, Redirect } from "react-router-dom";

describe("Компонент AppRouter", () => {
  const wrapper = shallow(<AppRouter />);
  describe("Проверить наличие:", () => {
    it("Содержит компонент Switch", () => {
      expect(wrapper.find("Switch")).toHaveLength(1);
    });

    it("Содержит элемент <PrivateRoute path='/user/:name' />", () => {
      console.log(wrapper.debug());
      expect(
        wrapper.findWhere(
          el => el.type() === PrivateRoute && el.props().path === "/user/:name"
        )
      ).toHaveLength(1); //этот тест не работает потому что PrivateRoute обернут в коннект (см. консоль)ю Почему так происходит, я же импортирую чистый компонентАппРоутер без коннекта??
    });

    it("Содержит элемент <PrivateRoute path='/user/me' />", () => {
      expect(
        wrapper.findWhere(
          el => el.type() === PrivateRoute && el.props().path === "/user/me"
        )
      ).toHaveLength(1); //этот тест не работает потому что PrivateRoute обернут в коннект (см. консоль)ю Почему так происходит, я же импортирую чистый компонентАппРоутер без коннекта??
    });

    it('Содержит элемент <Route path="/login" />', () => {
      expect(
        wrapper.findWhere(
          el => el.type() === Route && el.props().path === "/login"
        )
      ).toHaveLength(1);
    });

    it("Содержит редирект на '/user/ekb196'", () => {
      expect(
        wrapper.findWhere(
          el => el.type() === Redirect && el.props().to === "/user/me"
        )
      ).toHaveLength(1);
    });

    it("Выводит кнопку logout если props.isAuthorized === true", () => {
      wrapper.setProps({ isAuthorized: true });
      expect(wrapper.find("button.logout-button")).toHaveLength(1);
    });

    it("Выводить сетевую ошибку networkError, если она передается через props.networkError", () => {
      wrapper.setProps({ error: true, message: "network error" });
      expect(wrapper.find("div.user__error").text()).toEqual("network error");
    });
  });
});
