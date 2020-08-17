import * as actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  AddPostSuccessful: false,
  error: "",
  loading: false,
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        AddPostSuccessful: false,
      };
    case actionTypes.GET_POSTS_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.ADD_POST_INIT:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        AddPostSuccessful: true,
      };
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
