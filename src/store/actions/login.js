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

      .then((response) => dispatch(loginSuccess(response.data)))
      .catch((error) => {
        dispatch(loginFailed(error));
        setTimeout(() => {
          dispatch(resetError());
        }, 1500);
      });
  };
};

export const setLoginLoader = () => {
  return {
    type: actionTypes.SET_LOGIN_LOADER,
  };
};

export const loginSuccess = (data) => {
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

const resetError = () => {
  return {
    type: actionTypes.RESET_ERROR,
  };
};
