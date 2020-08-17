import * as actionTypes from "../actions/actionTypes";

const initState = {
  loginResponse: [],
  isLogin: false,
  error: "",
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      const login = {
        ...action.payload,
      };
      return {
        ...state,
        loginResponse: state.loginResponse.concat(login),
        isLogin: true,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
