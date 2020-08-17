import * as actionTypes from "../actions/actionTypes";
import axios from "axios";

export const initLogin = (email, password) => {
  return (dispatch) => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVojDzKwRxZzm4p4HC7rL11U5cUkqKS-I",
        body
      )

      .then((response) => dispatch(setLogin(response.data)))
      .catch((error) => dispatch(loginFailed(error)));
  };
};

export const setLogin = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    payload: error,
  };
};
