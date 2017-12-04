import { combineReducers } from "redux";
import users from "./users.js";
import followers from "./followers";
import auth from "./auth";
import network from "./network";

export default combineReducers({
  auth,
  followers,
  network,
  users
});
