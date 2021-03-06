import * as actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  length: 0,
  AddPostSuccessful: false,
  count: 5,
  error: "",
  loading: true,
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        length: action.payload.length,
        loading: false,
        AddPostSuccessful: false,
        count: state.count + 5,
        smallLoader: null,
      };

    case actionTypes.SET_POST_LOADER:
      return {
        ...state,
        smallLoader: true,
      };

    case actionTypes.GET_MORE_POSTS_SUCCESS:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        count: state.count + 5,
        smallLoader: false,
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
        count: 5,
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
