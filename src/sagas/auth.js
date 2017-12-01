import { authorize, logout } from "../actions/auth";
import { take, put, call, select } from "redux-saga/effects";
import { setTokenApi, clearTokenApi } from "../api";
import { getIsAuthorized } from "../reducers/auth";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from "../localStorage";

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized); //запрос гетером к стейту
    const localStorageToken = yield call(getTokenFromLocalStorage); // вызов метода апи который берет токен из ЛС
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
        yield put(authorize()); // вызов экшена авторизации
      } else {
        const action = yield take(authorize); // ждет экшена авторизации
        token = action.payload;
      }
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}
