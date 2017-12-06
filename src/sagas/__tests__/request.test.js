import { clearNetworkErrors, networkError } from "../../actions/network";
import { call, put, select } from "redux-saga/effects";
import { logout } from "../../actions/auth";
import { getIsNetworkErrorPresent } from "../../reducers/network";
import requestFlow from "../request";

const fn = jest.fn;
const arg = "token";
const saga = requestFlow(fn, arg);

describe("Saga request", () => {
  describe("if no error", () => {
    it("Call fn(arg)", () => {
      expect(saga.next().value).toEqual(call(fn, arg));
    });
    it("Effect select(getIsNetworkErrorPresent)", () => {
      expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
    });
    it("put clearNetworkErrors()", () => {
      expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
    });
  });
  describe("if error presence", () => {
    const error = {
      response: {
        status: 401
      }
    };
    it("dispatch networkError(error)", () => {
      expect(saga.throw(error).value).toEqual(put(networkError(error)));
    });
    it("logout if response.status===401", () => {
      expect(saga.next(error.response.status).value).toEqual(put(logout()));
    });
  });
});
