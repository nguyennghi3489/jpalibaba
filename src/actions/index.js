import { put, takeLatest, all } from "redux-saga/effects";

export const authenticate = (username, password) => ({
  type: "AUTHENTICATE",
  payload: {
    username,
    password
  }
});
