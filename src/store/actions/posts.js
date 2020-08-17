import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get(
        `https://fayez-instagram.firebaseio.com/posts.json?orderBy="timestamp"`
      )
      .then((response) => {
        if (response.data) {
          const sortedPost = Object.keys(response.data)
            .map((id) => ({
              postId: id,
              ...response.data[id],
            }))
            // .filter((_, i) => i < 2)
            .sort((a, b) => b.timestamp - a.timestamp);
          dispatch(getPostSuccess(sortedPost));
        }
      })
      .catch((error) => {
        dispatch(getPostFailed(error));
      });
  };
};

const getPostSuccess = (posts) => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: posts,
  };
};

const getPostFailed = (error) => {
  return {
    type: actionTypes.GET_POSTS_FAILED,
    payload: error,
  };
};
