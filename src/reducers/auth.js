import { handleAction } from "redux-actions";
import { setToken } from "../actions/auth";

export default handleAction(
  setToken,
  (state, action) => ({
    ...state,
    token: action.payload
  }),
  { token: "" }
);

export const getToken = state => state.auth.token;
