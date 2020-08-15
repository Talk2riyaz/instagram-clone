import * as actionTypes from "../actions/actionTypes";

const initState = {
  isLogin: false,
  error: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_LOGIN:
      return {
        isLogin: true,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        error: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
