import {
  fetchUserFollowersRequest,
  fetchUserFollowersSuccess,
  fetchUserFollowersFailure
} from "../../actions/users";
import followers from "../followers";

describe("В редьюсере followers", () => {
  describe("Экшен fetchUserFollowersRequest", () => {
    it("изменяет флаг isFetching на true", () => {
      const next = followers(
        { isFetching: false },
        fetchUserFollowersRequest()
      );
      expect(next.isFetching).toBeTruthy();
    });

    it("изменяет флаг error на false", () => {
      const next = followers({ error: true }, fetchUserFollowersRequest());
      expect(next.error).toBeFalsy();
    });

    it("очищает поле data", () => {
      const next = followers({ data: [] }, fetchUserFollowersRequest());
      expect(next.data).toEqual(null);
    });
  });

  describe("Экшен fetchUserFollowersSuccess", () => {
    const payload = { data: { login: "ekb196" } };
    it("изменяет флаг isFetching на false", () => {
      const next = followers(
        { isFetching: true },
        fetchUserFollowersSuccess(payload)
      );
      expect(next.isFetching).toBeFalsy();
    });

    it("изменяет флаг error на false", () => {
      const next = followers(
        { error: true },
        fetchUserFollowersSuccess(payload)
      );
      expect(next.error).toBeFalsy();
    });

    it("наполняет данными data", () => {
      const next = followers(null, fetchUserFollowersSuccess(payload));
      expect(next.data).toEqual(payload.data);
    });

    describe("Экшен fetchUserFollowersFailure", () => {
      const payload = { data: { login: "ekb196" } };
      it("изменяет флаг isFetching на false", () => {
        const next = followers(
          { isFetching: true },
          fetchUserFollowersFailure()
        );
        expect(next.isFetching).toBeFalsy();
      });

      it("изменяет флаг error на true", () => {
        const next = followers({ error: false }, fetchUserFollowersFailure());
        expect(next.error).toBeTruthy();
      });

      it("очищает поле data", () => {
        const next = followers({ data: [] }, fetchUserFollowersFailure());
        expect(next.data).toEqual(null);
      });
    });
  });
});
