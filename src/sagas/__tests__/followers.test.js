import { shallow } from "enzyme";
import { FetchUserFollowersRequest } from "../followers";
import { call, put } from "redux-saga/effects";
import { getUserFollowers } from "../../api";
import {
  fetchUserFollowersRequest,
  fetchUserFollowersSuccess,
  fetchUserFollowersFailure
} from "../../actions/users";

describe("Saga followers", () => {
  it("Call getUserFollowers", () => {
    const action = { payload: "user_login" };
    const saga = FetchUserFollowersRequest(action);
    expect(saga.next().value).toEqual(call(getUserFollowers, "user_login"));
  });
  it("Dispatch fetchUsetFollowersSucces with user from call id succes", () => {
    const action = { payload: "user_login" };
    const followers = [{ id: 1 }, { id: 2 }];
    const saga = FetchUserFollowersRequest(action);
    saga.next();
    expect(saga.next(followers).value).toEqual(
      put(fetchUserFollowersSuccess(followers))
    );
  });
  it("Dispatch fetchUsetFollowersFailure with user from call, if error ", () => {
    const action = { payload: "user_login" };
    const error = new Error("test error");
    const saga = FetchUserFollowersRequest(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(
      put(fetchUserFollowersFailure(error))
    );
  });
});
