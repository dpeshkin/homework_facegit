import {
  fetchUserFollowersRequest,
  fetchUserFollowersSuccess,
  fetchUserFollowersFailure
} from "../actions/users";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserFollowers } from "../api";

function* FetchUserFollowersRequest({ payload }) {
  try {
    const userData = yield call(getUserFollowers, payload);
    yield put(fetchUserFollowersSuccess(userData));
  } catch (error) {
    yield put(fetchUserFollowersFailure(error));
  }
}

export function* fetchUserFollowersWatch() {
  yield takeLatest(fetchUserFollowersRequest, FetchUserFollowersRequest);
}
