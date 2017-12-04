import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserInformation } from "../api";

export function* FetchUserRequest({ payload }) {
  try {
    const userData = yield call(getUserInformation, payload);
    yield put(fetchUserSuccess(userData));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, FetchUserRequest); // следим за экшеном и вызваем нашу сагу запроса
}
