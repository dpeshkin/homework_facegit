import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest
} from "../../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { FetchUserRequest } from "../users";
import requestFlow from "../request";
import { getUserInformation, getTokenOwner } from "../../api";

describe("Saga users:", () => {
  describe("If token owner request", () => {
    const action = {
      type: fetchTokenOwnerRequest.toString(),
      payload: 123
    };
    const saga = FetchUserRequest(action);
    it("Call getTokenOwner", () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getTokenOwner, action.payload)
      );
    });
    it("Dispatch fetchUserSuccess(response)", () => {
      expect(saga.next(action.payload).value).toEqual(
        put(fetchUserSuccess(action.payload))
      );
    });
    it("if error presence", () => {
      const error = new Error();
      expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
    });
  });
  describe("If fetch user request", () => {
    const action = {
      type: fetchUserRequest.toString(),
      payload: { id: 1 }
    };
    const saga = FetchUserRequest(action);
    it("Call getUserInformation", () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getUserInformation, action.payload)
      );
    });
    it("Dispatch fetchUserSuccess(response)", () => {
      expect(saga.next(action.payload).value).toEqual(
        put(fetchUserSuccess(action.payload))
      );
    });
    it("if error presence", () => {
      const error = new Error();
      expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
    });
  });
});
