import * as actionTypes from "./actionTypes";
import axios from "axios";

export const initSignUp = (userName, email, password) => {
  return (dispatch) => {
    const body = {
      email: email,
      password: password,
      displayName: userName,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVojDzKwRxZzm4p4HC7rL11U5cUkqKS-I",
        body
      )
      .then(
        (response) => dispatch(signUpSuccess(userName, response.data.token)),
        setTimeout(() => {
          dispatch(resetError());
        }, 8000)
      )
      .catch((error) => dispatch(signUpFailed(error.response.status)));
  };
};

export const setSignUpLoader = () => {
  return {
    type: actionTypes.SET_SIGN_UP_LOADER,
  };
};

const signUpSuccess = (userName, token) => {
  const data = {
    userName: userName,
    token: token,
  };
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: data,
  };
};

const signUpFailed = (error) => {
  return {
    type: actionTypes.SIGN_UP_FAILED,
    payload: error,
  };
};

const resetError = () => {
  return {
    type: actionTypes.RESET_ERROR,
  };
};
