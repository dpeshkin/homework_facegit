import { createActions } from "redux-actions";

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} = createActions({
  FETCH_USER_REQUEST: null,
  FETCH_USER_SUCCESS: null,
  FETCH_USER_FAILURE: null
});
