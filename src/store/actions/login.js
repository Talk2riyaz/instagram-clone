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
      .then((response) => {
        // localStorage.setItem("token", response.data.idToken);
        // localStorage.setItem("displayName", response.data.displayName);
        dispatch(setLogin());
      })
      //   .then(() => {
      //     props.history.push("/");
      //     window.location.reload();
      //   })

      .catch((error) => {
        dispatch(loginFailed());
      });
  };
};

export const setLogin = () => {
  return {
    type: actionTypes.CHECK_LOGIN,
    payload: true,
  };
};

export const loginFailed = () => {
  return {
    type: actionTypes.LOGIN_FAILED,
  };
};
