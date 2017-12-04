import { handleActions } from "redux-actions";
import {
  fetchUserFollowersRequest,
  fetchUserFollowersSuccess,
  fetchUserFollowersFailure
} from "../actions/users";

export default handleActions(
  {
    [fetchUserFollowersRequest]: state => ({
      ...state,
      isFetching: true,
      error: false,
      data: null
    }),
    [fetchUserFollowersSuccess]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      data: payload.data,
      error: false
    }),
    [fetchUserFollowersFailure]: state => ({
      ...state,
      isFetching: false,
      error: true,
      data: null
    })
  },
  {
    isFetching: false,
    error: false,
    data: null
  }
);

export const getFollowers = state => state.followers.data;
export const getFetching = state => state.followers.isFetching;
