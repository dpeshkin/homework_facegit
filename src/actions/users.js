import { createActions } from "redux-actions";

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserFollowersRequest,
  fetchUserFollowersSuccess,
  fetchUserFollowersFailure
} = createActions(
  "FETCH_USER_REQUEST",
  "FETCH_USER_SUCCESS",
  "FETCH_USER_FAILURE",
  "FETCH_USER_FOLLOWERS_REQUEST",
  "FETCH_USER_FOLLOWERS_SUCCESS",
  "FETCH_USER_FOLLOWERS_FAILURE"
);
