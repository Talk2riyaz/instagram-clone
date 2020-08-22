import * as actionTypes from "../actions/actionTypes";

const initState = {
  loginResponse: [],
  isLogin: false,
  loader: false,
  error: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_LOADER:
      return {
        ...state,
        loader: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      const login = {
        ...action.payload,
      };
      return {
        ...state,
        loginResponse: state.loginResponse.concat(login),
        isLogin: true,
        loader: false,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isLogin: false,
        loader: false,
      };
    case actionTypes.RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        loginResponse: [],
        isLogin: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
