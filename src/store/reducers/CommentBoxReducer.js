import * as actionTypes from "../actions/actionTypes";

const initState = {
  addCommentFlag: false,
  error: null,
};

const commentBoxReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT_SUCCEESS:
      return {
        ...state,
        addCommentFlag: !state.addCommentFlag,
      };
    case actionTypes.ADD_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentBoxReducer;
