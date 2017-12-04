import users from "../users";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../../actions/users";

describe("В редьюсере users", () => {
  describe("Экшен fetchUserRequest", () => {
    it("изменяет флаг isFetching на true", () => {
      const next = users({ isFetching: false }, fetchUserRequest());
      expect(next.isFetching).toBeTruthy();
    });

    it("изменяет флаг error на false", () => {
      const next = users({ error: true }, fetchUserRequest());
      expect(next.error).toBeFalsy();
    });

    it("очищает поле data", () => {
      const next = users({ data: [] }, fetchUserRequest());
      expect(next.data).toEqual(null);
    });
  });

  describe("Экшен fetchUserSuccess", () => {
    const payload = { data: { login: "ekb196" } };
    it("изменяет флаг isFetching на false", () => {
      const next = users({ isFetching: true }, fetchUserSuccess(payload));
      expect(next.isFetching).toBeFalsy();
    });

    it("изменяет флаг error на false", () => {
      const next = users({ error: true }, fetchUserSuccess(payload));
      expect(next.error).toBeFalsy();
    });

    it("наполняет данными data", () => {
      const next = users(null, fetchUserSuccess(payload));
      expect(next.data).toEqual(payload.data);
    });

    describe("Экшен fetchUserFailure", () => {
      const payload = { data: { login: "ekb196" } };
      it("изменяет флаг isFetching на false", () => {
        const next = users({ isFetching: true }, fetchUserFailure());
        expect(next.isFetching).toBeFalsy();
      });

      it("изменяет флаг error на true", () => {
        const next = users({ error: false }, fetchUserFailure());
        expect(next.error).toBeTruthy();
      });

      it("очищает поле data", () => {
        const next = users({ data: [] }, fetchUserFailure());
        expect(next.data).toEqual(null);
      });
    });
  });
});
