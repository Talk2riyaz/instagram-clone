import * as actionTypes from "../actions/actionTypes";

const initState = {
  signUpResponse: [],
  signUpSuccess: false,
  loader: false,
  error: false,
};

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_SIGN_UP_LOADER:
      return {
        ...state,
        loader: true,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loader: false,
        signUpResponse: action.payload,
        signUpSuccess: true,
      };
    case actionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        error: action.payload,
        loader: false,
      };
    case actionTypes.RESET_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default signUpReducer;
