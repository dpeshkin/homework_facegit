import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest
} from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserInformation, getTokenOwner } from "../api";
import requestFlow from "./request";

export function* FetchUserRequest({ type, payload }) {
  try {
    let response;
    if (fetchTokenOwnerRequest.toString() === type) {
      response = yield call(requestFlow, getTokenOwner, payload);
    } else {
      response = yield call(requestFlow, getUserInformation, payload);
    }
    yield put(fetchUserSuccess(response));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(
    [fetchUserRequest, fetchTokenOwnerRequest],
    FetchUserRequest
  ); // следим за экшеном и вызваем нашу сагу запроса
}
